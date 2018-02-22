Ext.define("Miniloja.view.OmniTray",{
    extend: "Miniloja.view.base.OmniToolbar",
    overflowHandler:'scroller',
    xtype:'omniTray',
    alias:'widget.omniTray',
    pack:'start',
    ui:'footer',
    items:[
        {
            xtype: 'tbfill'
        }
    ]
});