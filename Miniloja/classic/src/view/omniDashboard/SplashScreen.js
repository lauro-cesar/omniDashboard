
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
    bodyPadding:50,
    html:'Carregando os dados de sua conta...',
    hidden:true,
    bind:{
        visible:'{sessionLoading}'
    },
    title:'Bem vindo ao sistema OmniEshops - Carregando sua conta.'
});