Ext.define("Miniloja.view.base.OmniWindow",{
    extend: "Ext.window.Window",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.omniWindow',
    xtype:'omniWindow'
});