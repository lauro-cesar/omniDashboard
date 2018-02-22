Ext.define("Miniloja.view.orderManager.OrderManager",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.orderManager',
    xtype:'orderManager',
    layout:'fit',
    items:[
        {
            xtype: 'omniPanel',
            html:'Order Manager'
        }
    ]
    });