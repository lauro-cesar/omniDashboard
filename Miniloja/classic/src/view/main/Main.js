Ext.define('Miniloja.view.main.Main', {
    extend: "Ext.container.Viewport",
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Miniloja.view.siteManager.SiteManager',
        'Miniloja.view.orderManager.OrderManager',
        'Miniloja.view.inventoryManager.InventoryManager',
        'Miniloja.view.marketingManager.MarketingManager',
        'Miniloja.view.customerCare.CustomerCare',
        'Miniloja.view.bigPicture.BigPicture',
        'Miniloja.view.main.MainController',
        'Miniloja.view.main.MainModel',
        'Miniloja.view.omniDashboard.OmniNav',
        'Miniloja.view.omniDashboard.OmniTray',        
        'Miniloja.view.omniDashboard.OmniDashboard',
        'Miniloja.view.systemSettings.SystemSettings',
        'Miniloja.view.accountLogout.AccountLogout',
        'Miniloja.view.userSupport.UserSupport',
        'Miniloja.view.omniDashboard.SplashScreen'
    ],
    controller: 'main',
    viewModel: 'main',
    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },
    layout:'border',
    items: [{
        xtype:'omniDashboard',
        region:'center'
    }]
});
