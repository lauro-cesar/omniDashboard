Ext.define('Miniloja.view.main.MainController', {
    extend: 'Miniloja.view.base.OmniController',
    alias: 'controller.main',
    dashboardReference:'omniDashboard',
    mainViewReference:'omniMainView',
    routes : {
        'app/:appID'            : 'onOpenApp',
        'inventory/:itemID'     : 'onOpenProduct',
        'order/:orderID'        : 'onOpenOrder',
        'site/:siteID'          : 'onOpenSite'
    },


    config: {
        listen: {
            // store: {
            //     '#omniTasks':{
            //         load:'onLoadTasks',
            //     },
            //     '#omniSettings':{
            //         load:'onLoadSettings',
            //     },
            //     '#omniSession':{
            //         load:'onLoadSession',
            //         beforeload:'onBeforeloadSession',
            //         exception :'onSessionException'
            //     }
            // },
            component: {
                '*': {
                    redirectTO:'onRedirectTO'
                }

            }
        }
    }
});
