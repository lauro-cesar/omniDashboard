Ext.define("Miniloja.view.customerCare.CustomerCare",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.customerCare',
    xtype:'customerCare',
    layout:'fit',
    items:[
        {
            xtype: 'omniPanel',
            html:'customer Care'
        }
    ]
    });