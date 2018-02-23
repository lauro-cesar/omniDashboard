
Ext.define("Miniloja.view.userSupport.UserSupport",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.userSupport',
    xtype:'userSupport',
    layout:'fit',
    items:[
        {
            xtype: 'omniPanel'
        }
    ]
    });