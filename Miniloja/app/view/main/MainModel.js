/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Miniloja.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data:{
        'name':'mala',
    },
    formulas: {
        UserAccount: {
            bind: {
                bindTo: '{user_accounts}',
                deep: true
            },
            get: function(store){
                "use strict";
                return store.first();
            }
        },
        isLoaded:function(get){
            return get('UserAccount.loaded');
        }
    },
    stores: {
        user_accounts:{
          model:'UserAccount',
            autoLoad: true,
            startParam: 'offset'
        }
    }
});
