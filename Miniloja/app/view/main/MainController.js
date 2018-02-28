Ext.define('Miniloja.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    defaultTasKQueue:['checkUserSettings','runRoute','unMask'],
    dashboardReference:'omni-dashboard-panel',
    routes : {
        'app/:appID'            : 'onOpenApp',
        'inventory/:itemID'     : 'onOpenProduct',
        'order/:orderID'        : 'onOpenOrder',
        'site/:siteID'          : 'onOpenSite'
    },
    config: {
        listen: {
            store:{
                '#omniSession':{
                    load:'onLoadSession'
                }
            },
            component: {
                '*': {
                    loadRemoteSites:'onLoadRemoteSites',
                    redirectTO:'onRedirectTO'
                }
            }
        }
    },
    onLoadRemoteSites:function(page){
        console.log( Ext.String.format("Sincronizar pagina: {0}",page) );
        var me = this;
        var myview = me.getView();
        myview.mask("Sincronizando...");
        var omniSitesRemoteStore = me.getStore('omniSitesSync');
        if (omniSitesRemoteStore) {
            omniSitesRemoteStore.loadPage(page,{
                callback:function(records, operation, success) {
                    var locaSitesStores =  me.getStore('omniSites');
                    if(locaSitesStores){
                        Ext.Array.each(records,function(record){
                            locaSitesStores.filter('shopID', record.get('shopID'));
                            var objeto = record.getData();
                            delete objeto.id;
                            if(locaSitesStores.count() > 0 ) {
                                var omniSite = locaSitesStores.first();
                                omniSite.set(objeto);
                                omniSite.save();
                            } else {
                                var omniSite = Ext.create('model.omniSite');
                                omniSite.set(objeto);
                                omniSite.save();
                                locaSitesStores.add( omniSite );
                            }
                            locaSitesStores.clearFilter();
                            myview.mask("Syncronizando loja...:???");
                        });
                    } else {
                        console.log("Nao tem localSites Store");
                    }
                    if (omniSitesRemoteStore.getTotalCount() > omniSitesRemoteStore.getCount()){
                        myview.fireEvent("loadRemoteSites",page+1);
                    }
                    
                    myview.unmask();
                }

            });

        } else {
            console.log("Nao achei Store");
        }

    },
    runNextTask:function(taskList){
        var me=this;
        if(taskList.length > 0) {
            var newTask = taskList.shift();
            if(newTask){
                me.getView().fireEvent(newTask,taskList);
            }
        }
    },
    omniDashBoard:function(){
        return this.lookupReference(this.dashboardReference);
    },
    onOpenApp:function(xtype){
        me= this;
        var app = me.omniDashBoard().down(xtype);
        if(app){
            me.omniDashBoard().getLayout().setActiveItem(app);
        } else {
            console.log("App not found");
        }
    },
    onLoadSession:function(store,records, successful, operation, eOpts){
        this.getViewModel().setData({'operation':operation});
        this.getViewModel().setData({'redirect_to':window.location.href});   
        console.log("Running Session");   
        // console.log( this.getViewModel().getData() );
        // console.log(operation);

        if(!operation.success){
            // this.getViewModel().setData({'showLoginScreen':false});
            // Ext.Msg.alert('Erro ao conectar', 'Nao consegui conectar...');
        } else {
            // this.getViewModel().setData({'showLoginScreen':false});
            if(operation._response.loginRequired) {
                window.location = Ext.String.format("{0}?login_callback={1}",operation._response.login_url,window.location.href);
            } 
        }
    },
    onAccountSignIn:function(){
        this.getViewModel().getStore('omniSession').load();
    },
    onRedirectTO:function(appid){
      this.redirectTo(appid,'force','replace');
    }

});
