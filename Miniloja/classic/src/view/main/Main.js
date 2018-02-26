Ext.define('Miniloja.view.main.Main', {
    extend: "Ext.container.Viewport",
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Miniloja.view.siteManager.SiteManager',
        'Miniloja.view.orderManager.OrderManager',
        'Miniloja.view.inventoryManager.InventoryManager',
        'Miniloja.view.marketingManager.MarketingManager',
        'Miniloja.view.customerCare.CustomerCare',
        'Miniloja.view.bigPicture.BigPicture',
        'Miniloja.view.omniDashboard.OmniNav',
        'Miniloja.view.omniDashboard.OmniTray',        
        'Miniloja.view.omniDashboard.OmniDashboard',
        'Miniloja.view.systemSettings.SystemSettings',
        'Miniloja.view.accountLogout.AccountLogout',
        'Miniloja.view.userSupport.UserSupport',
        'Miniloja.view.omniDashboard.SplashScreen',
        'Miniloja.view.wizardManager.WizardManager'
    ],
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
