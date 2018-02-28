Ext.define('Miniloja.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data:{
        "i18n":{
            "Miniloja":{
                "view":{
                    "wizardManager":{
                        "SiteManager":{
                            "omniToolbar":{
                                "omniToolButton":{
                                    "newsite":"Criar novo Site",
                                    "syncSites":"Sincronizar com OmniEshops"
                                }
                            }
                        }
                    },
                    "main":{
                        "shared":{
                            "TextRequiredValidator":{
                                "emptyMessage":"Campo requerido"
                                }
                            }
                        }
                    }
                }
            }
    },
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
        login_url:function(get) {
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
        scaleArray:function(get){
            return ['small','medium','large'];
        },
        toolBarScale:function(get){
            return get('scaleArray')[get('userSettings.toolBarSize')];
        },
        navBarScale:function(get){
            return get('scaleArray')[get('userSettings.navBarSize')];
        },
        userSettings:{
            bind: {
                bindTo:'{omniSettings}',
                deep:true
            },
            get: function(store) {
                if(store.count() < 1 ) {
                    var settings = Ext.create('model.omniSetting');
                    settings.save();
                    store.add(settings);
                    store.sync()
                    return settings;
                } else {
                    var record = store.first();
                    return record;
                }
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
        omniSitesSync:{
            id:'omniSitesSync',
            clearOnPageLoad:false,
            autoSync:false,
            model:'OmniSiteSync',
            autoLoad:false,
            session:false
        },        
        omniSites:{
            id:'omniSites',
            autoSync:true,
            model:'OmniSite',
            autoLoad:true,
            remoteFilter:true,
            session:true
        },
        omniSettings:{
            id:'omniSettings',
            autoSync:true,
            model:'OmniSetting',
            autoLoad: true,
            session:true
        },
        omniSession:{
            id:'omniSession',
            model:'OmniSession',
            autoLoad: true,
            session:true
        },
        omniTaskQueue:{
            id:'omniTaskQueue',
            model:'OmniTask',
            autoLoad:true,
            session:true
        }
    }
});