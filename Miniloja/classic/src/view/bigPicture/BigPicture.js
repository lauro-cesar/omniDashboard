Ext.define("Miniloja.view.bigPicture.BigPicture",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.bigPicture',
    xtype:'bigPicture',
    layout:'fit',
    items:[
        {
            xtype: 'omniPanel'
        }
    ]
    });