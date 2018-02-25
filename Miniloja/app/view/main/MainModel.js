Ext.define('Miniloja.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    formulas: {
        userAvatar:function(get){
            if(get('isConnected')){
                return get('sessionSettings.avatar_url');
            } else {
                return "resources/default_avatar.png";
            }
        },
        logout_url:function(get){
            return get('operation._response.logout_url');
        },
        login_url:function(get){
            return get('operation._response.login_url');
        },
        isConnected:function(get) {
            var session= get('sessionSettings');
            if(Ext.typeOf(session) === 'object') {
                return session.isValid();
            } else {
                return false;
            }
        },
        userSettings:{
            bind: {
                bindTo:'{omniSettings}',
                deep:true
            },
            get: function(store) {
                return store.first();
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
        omniSettings:{
            id:'omniSettings',
            model:'OmniSetting',
            autoLoad: true
        },
        omniSession:{
            id:'omniSession',
            model:'OmniSession',
            autoLoad: false
        },
        omniTaskQueue:{
            id:'omniTaskQueue',
            model:'OmniTask',
            autoLoad:false
        }
    }
});