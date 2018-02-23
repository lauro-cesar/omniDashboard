Ext.define("Miniloja.view.systemSettings.SystemSettings",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.systemSettings',
    xtype:'systemSettings',
    layout:'fit',
    title:'Configurações do sistema',
    iconCls:'x-fa fa-cogs',
    items:[
        {
            xtype:'omniTapPanel',
            html:null,
            items:[
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Conta',
                        iconCls:'x-fa fa-user',
                        tooltip: 'Sua conta no OmniEshops'
                    },
                    bind:{
                        html:'Nome: {sessionSettings.fullName}<br><a href={logout_url}>Logout url</a>'
                    }
                },
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Aparencia',
                        iconCls:'x-fa fa-wrench',
                        tooltip: 'Sua conta no OmniEshops'
                    }
                }

            ]
        }
    ]
    });