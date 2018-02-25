Ext.define('Miniloja.Application', {
    extend: 'Ext.app.Application',
    name: 'Miniloja',
    quickTips: false,
    defaultToken:'app/systemSettings',
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Miniloja.view.base.*',
        'Miniloja.view.base.OmniController',
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
        'Miniloja.view.omniDashboard.SplashScreen',
        'Miniloja.view.wizardManager.WizardManager'
    ],
    models:[
        'OmniSession','OmniTask','OmniSetting'
    ],
    launch: function () {
        
        console.log("criando...");

        // var mainView = Ext.create('Miniloja.view.main.Main');


    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Atualização disponível', 'Existe uma atualização, gostaria de baixar agora?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
