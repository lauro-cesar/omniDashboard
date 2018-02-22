Ext.define("Miniloja.view.marketingManager.MarketingManager",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.marketingManager',
    xtype:'marketingManager',
    layout:'fit',
    dockedItems: [
        {
            xtype: 'omniNav',
            dock: 'top',
        }
    ],
    items:[
        {
            xtype: 'omniPanel',
            html:'marketing Manager'
        }
    ]
    });