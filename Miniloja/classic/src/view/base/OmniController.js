Ext.define('Miniloja.view.base.OmniController', {
    extend: 'Ext.app.ViewController',

    omniDashBoard:function(){
        return this.lookupReference(this.dashboardReference);
    },
    onOpenApp:function(xtype){

        var app = this.omniDashBoard().down(xtype);
        if(app){
            this.omniDashBoard().getLayout().setActiveItem(app);
        }
        console.log(xtype);
    },
    omniStoreLoaded:function(store,records, successful, operation, eOpts){

    },
    onRedirectTO:function(appid){
      this.redirectTo(appid,'force','replace');
    }
})