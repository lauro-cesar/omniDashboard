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
        // console.log("Mala");
        // console.log(meta);
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
    onSessionException:function(connection,response, operation, eOpts ){

    },
    onDashReady:function(box){
        Ext.fly('appLoadingIndicator').hide();
    },
    onLoadSession:function(store,records, successful, operation, eOpts){
        this.getViewModel().setData({'operation':operation});
        this.getViewModel().setData({'redirect_to':window.location.href});        
        // console.log( this.getViewModel().getData() );
        console.log(operation);

        if(!operation.success){
            this.getViewModel().setData({'showLoginScreen':false});
            Ext.Msg.alert('Erro ao conectar', 'Nao consegui conectar...');
        } else {
            this.getViewModel().setData({'showLoginScreen':false});
            if(operation._response.loginRequired) {
                window.location = Ext.String.format("{0}",operation._response.login_url);
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