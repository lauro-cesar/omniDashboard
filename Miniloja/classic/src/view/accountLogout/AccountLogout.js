
Ext.define("Miniloja.view.accountLogout.AccountLogout",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.accountLogout',
    xtype:'accountLogout',
    layout:'fit',
    items:[
        {
            xtype: 'omniPanel',
            title:'Sair da conta',
            iconCls:'x-fa fa-power-off',
            bind:{
                html:'<h1>{sessionSettings.fullName} deseja desconectar do sistema OmniEshops?</h1> <a href={logout_url}>Sair Agora</a>'
            }
        }
    ]
    });