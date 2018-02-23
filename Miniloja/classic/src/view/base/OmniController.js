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
    },
    onMetaChange:function(store,meta){
        console.log("Mala");
        console.log(meta);
    },
    onBeforeloadSession:function(store, operation, eOpts){
        this.getViewModel().setData({'showLoginScreen':true});
        var splashScreen =this.omniDashBoard().down('splashScreen');
        if(!splashScreen){
            var splashScreen = Ext.create('widget.splashScreen');
            this.omniDashBoard().add(splashScreen);
        }
        splashScreen.show(true).center();
    },
    onLoadSession:function(store,records, successful, operation, eOpts){
        this.getViewModel().setData(operation._response);
        this.getViewModel().setData({'redirect_to':window.location.href});
        
        if(successful) {
            this.getViewModel().setData({'showLoginScreen':false});
            // this.onOpenApp('systemSettings');
        } else {
            window.location = Ext.String.format("{0}?{1}",this.getViewModel().getData().login_url,this.getViewModel().getData().redirect_to);
        }
    },
    onAccountSignIn:function(){        
        this.getViewModel().getStore('omniSession').load();
    },
    onRedirectTO:function(appid){
      this.redirectTo(appid,'force','replace');
    }
});