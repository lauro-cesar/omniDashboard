
Ext.define("Miniloja.view.accountLogout.AccountLogout",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.accountLogout',
    xtype:'accountLogout',
    layout:'fit',
    items:[
        {
            xtype: 'omniPanel',
            html:'Exit??'
        }
    ]
    });