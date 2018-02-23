/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */



Ext.define('Miniloja.Application', {
    extend: 'Ext.app.Application',
    name: 'Miniloja',
    quickTips: false,
    defaultToken:'app/bigPicture',
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    stores: [
        // TODO: add global / shared stores here
    ],
    models:[
        'OmniSession'
    ],
    launch: function () {
        var mainView = Ext.create('Miniloja.view.main.Main',{
            id:'omniDashboard'
        }); 
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
