
Ext.define("Miniloja.view.omniDashboard.SplashScreen",{
    extend: "Miniloja.view.base.OmniWindow",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.splashScreen',
    xtype:'splashScreen',
    layout:'fit',
    modal:true,
    constrain:true,
    closable:false,
    minimizable:false,
    maximizable:false,
    hidden:true,
    bind:{
        visible:'{showLoginScreen}'
    },
    title:'Bem vindo ao sistema OmniEshops - Carregando sua conta.',
    items:[
        {
            xtype:'omniPanel',
            bodyPadding:10,
            html:'Carregando os dados de sua conta...',
        }
    ]
});