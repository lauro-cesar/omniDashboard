Ext.define("Miniloja.view.systemSettings.SystemSettings",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.systemSettings',
    xtype:'systemSettings',
    layout:'fit',
    items:[
        {
            xtype: 'omniPanel',
            html:'All settings here...'
        }
    ]
    });