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
            items:[
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Aparencia',
                        iconCls:'x-fa fa-cogs',
                        tooltip: 'Preferencias do sistema.'
                    },
                    layout:'fit',
                    default:{
                        bodyPadding:10
                    },
                    items:[
                        {
                            xtype      : 'fieldcontainer',
                            fieldLabel : 'Tamanho do Botao',
                            defaultType: 'radiofield',
                            defaults: {
                                flex: 1,
                                name      : 'buttonScale',
                                bind:{
                                    value:'{buttonScale}'
                                }
                            },
                            layout: 'hbox',
                            items: [
                                {
                                    boxLabel  : 'Medio',
                                    inputValue: 'medium',
                                    id        : 'm'
                                }, {
                                    boxLabel  : 'Grande',
                                    inputValue: 'large',
                                    id        : 'l'
                                }, {
                                    boxLabel  : 'Pequeno',
                                    inputValue: 'small',
                                    id        : 's'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Conta',
                        iconCls:'x-fa fa-user',
                        tooltip: 'Sua conta no OmniEshops'
                    },
                    bind:{
                        html:'Nome: {sessionSettings.fullName}<br><a href="{logout_url}">Logout url</a>'
                    }
                },


            ]
        }
    ]
    });