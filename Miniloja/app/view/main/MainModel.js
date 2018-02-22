Ext.define('Miniloja.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    formulas:{
        systemSettings:{
            bind: {
                bindTo:'{omniSettings}',
                deep:true
            },
            get: function(store) {
                return store.first();
            }
        }
    },
    stores:{
        omniSettings:{
            model:'SystemSettings',
            autoLoad: true,
            listeners: {
                load:function(store,records, successful, operation, eOpts){
                    if(!successful){
                        var redirect_to=window.location.href;
                        window.location=Ext.String.format("{0}?login_callback={1}",operation._response.login_url,redirect_to);
                    }
                }
            }
        }
    }
});