Ext.define("Miniloja.view.inventoryManager.InventoryManager",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.inventoryManager',
    xtype:'inventoryManager',
    layout:'fit',
    items:[
        {
            xtype: 'omniPanel',
            html:'inventory Manager'
        }
    ]
    });