Ext.define('Miniloja.view.main.MainController', {
    extend: 'Miniloja.view.base.OmniController',
    alias: 'controller.main',
    dashboardReference:'omniDashboard',
    routes : {
        'app/:appID'            : 'onOpenApp',
        'inventory/:itemID'     : 'onOpenProduct',
        'order/:orderID'        : 'onOpenOrder',
        'site/:siteID'          : 'onOpenSite'
    },
    config: {
        listen: {
            store: {
                '#omniSession':{
                    load:'onLoadSession',
                    beforeload:'onBeforeloadSession'
                }
            },
            component: {
                '*': {
                    redirectTO:'onRedirectTO',
                    accountSignIn:'onAccountSignIn'
                }

            }
        }
    }
});
