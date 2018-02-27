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
            component: {
                '*': {
                    redirectTO:'onRedirectTO'
                }
            }
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
