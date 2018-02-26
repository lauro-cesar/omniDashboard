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
        'OmniSession','OmniTask','OmniSetting'
    ],
    launch: function () {
        
        var mainView = Ext.create('Miniloja.view.main.Main',{
            id:'omni-main'
        });

        // var Settings = this.getViewModel().getData().userSettings;
        // console.log(Settings);
        // mainView.add({
        //     xtype:'omniDashboard',
        //     links:{
        //         userSettings: Settings || {
        //             type:'OmniSetting',
        //             create:true
        //         }
        //     },
        //     region:'center'
        // });

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
