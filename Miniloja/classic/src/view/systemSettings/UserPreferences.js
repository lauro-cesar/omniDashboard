Ext.define("Miniloja.view.systemSettings.UserPreferences",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.userPreferences',
    xtype:'userPreferences',
    layout:'fit',
    items:[
        {
            xtype:'omniPanel',
            title: 'Aparencia',
            iconCls:'x-fa fa-cogs',
            tooltip: 'Preferencias do sistema.',
            layout:'fit',
            bodyPadding:10,
            items:[
                {
                    xtype      : 'fieldcontainer',
                    fieldLabel : 'Tamanho do Botao',
                    layout: 'vbox',
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
        }
    ]
});