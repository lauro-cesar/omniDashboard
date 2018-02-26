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
            bodyPadding:10,
            ui:'omnitab',
            items:[
                {
                    xtype:'omniPanel',
                    title: 'Aparencia',
                    iconCls:'x-fa fa-cogs',
                    tooltip: 'Preferencias do sistema.',
                    layout:'fit',
                    bodyPadding:10,
                    default:{
                        bodyPadding:10
                    },
                    items:[
                        {
                            xtype      : 'fieldcontainer',
                            fieldLabel : 'Tamanho do Botao',
                            layout: 'vbox',
                            defaults:{
                                margin: '5 5 5 5',
                                bodyPadding:10
                            },
                            items: [
                                {
                                    xtype:'slider',
                                    width: 100,
                                    tipText: function(valor) { 
                                        var arr = ['Botão pequeno','Botão médio','Botão grande'];
                                        return arr[valor.value];
                                    },
                                    minValue:0,
                                    maxValue:2,
                                    increment:1,
                                    value:2,
                                    bind: {
                                        value:'{userSettings.buttonSize}'
                                    }
                                },
                                {
                                    xtype:'omniButton',
                                    iconCls:'x-fa fa-info',
                                    bind:{
                                        text:'Exemplo',
                                        scale:'{buttonScale}'
                                    }
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