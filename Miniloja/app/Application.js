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
    models:[
        'OmniSession','OmniTask','OmniSetting','OmniSite'
    ],
    requires:[
        'Miniloja.view.main.Main'
    ],
    launch: function () {
        var mainView = Ext.create('Miniloja.view.main.Main',{
            id:'omni-main'
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
