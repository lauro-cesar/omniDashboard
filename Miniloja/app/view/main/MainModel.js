Ext.define('Miniloja.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data:{
        showLoginScreen:false
    },
    formulas:{
        userAvatar:function(get){
            var settings= get('sessionSettings');
            if(Ext.typeOf(settings) === 'object') {
                return settings.get('avatar_url');
            } else {
                return "";
            }  
        },
        isConnected: function(get) {
            var settings= get('sessionSettings');
            if(Ext.typeOf(settings) === 'object') {
                return true;
            } else {
                return false;
            }  
        },
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
            id:'omniSession',
            model:'OmniSession',
            autoLoad: true
        }
    }
});