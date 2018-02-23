Ext.define('Miniloja.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data:{
        loginUrl:'https://accounts.omnieshop.com/accountmanager/profile/'
    },

    formulas:{
        sessionSettings:{
            bind: {
                bindTo:'{omniSession}',
                deep:true
            },
            get: function(store) {
                return store.first();
            }
        },
        sessionLoading:{
            bind: {
                bindTo:'{omniSession}',
                deep:true
            },
            get: function(store) {
                return store.loading;
            }
        }
    },
    stores:{
        omniSession:{
            model:'OmniSession',
            autoLoad: true,
            listeners: {
                load:function(store,records, successful, operation, eOpts){
                    // TODO: fireEvent with operation object.
                    if(!successful){
                        var redirect_to=window.location.href;
                        store.fireEvent("setLoginUrl",Ext.String.format("{0}?login_callback={1}",operation._response.login_url,redirect_to));
                    } else {
                        store.fireEvent("setLogutUrl",Ext.String.format("{0}?logout_callback={1}",operation._response.logout_url,redirect_to));
                    }
                }
            }
        }
    }
});