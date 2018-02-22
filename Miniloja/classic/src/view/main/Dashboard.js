Ext.define("Miniloja.view.main.Dashboard",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.dashboard',
    xtype:'dashboard',
    layout:'card',
    dockedItems: [
        {
            xtype: 'omniNav',
            dock: 'left'
        },
        {
            xtype: 'omniTray',
            dock: 'bottom'
        }
    ],
    items:[
        {
            xtype: 'omniPanel',
            html:'mala'
        }
    ]
    });