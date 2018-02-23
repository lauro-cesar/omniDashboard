Ext.define("Miniloja.view.inventoryManager.InventoryManager",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.inventoryManager',
    xtype:'inventoryManager',
    layout:'fit',
    title:'Bem vindo ao gerencidor de estoque',
    iconCls:'x-fa fa-archive',
    defaults:{
        bodyPadding:5,
    },
    items:[
        {
            xtype:'omniTapPanel',
            items:[
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Produtos',
                        iconCls:'x-fa fa-th',
                        tooltip: 'Crie e gerencie seus sites e lojas'
                    }
                },
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Anúncios',
                        iconCls:'x-fa fa-barcode',
                        tooltip: 'Grupo de trabalho'
                    }
                },                
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Cupoms',
                        iconCls:'x-fa fa-barcode',
                        tooltip: 'Grupo de trabalho'
                    }
                }
            ]
        }
    ]
    });