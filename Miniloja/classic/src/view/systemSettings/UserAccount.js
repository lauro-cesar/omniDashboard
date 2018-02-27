Ext.define("Miniloja.view.systemSettings.UserAccount",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.userAccount',
    xtype:'userAccount',
    layout:'fit',
    title: 'Conta',
    iconCls:'x-fa fa-user',
    tooltip: 'Editar detalhes de sua conta',
    items:[
        {
            xtype:'omniPanel',
            bind:{
                html:'Nome: {sessionSettings.fullName}<br><a href="{logout_url}">Logout url</a>'
            }
        }
    ]
    });