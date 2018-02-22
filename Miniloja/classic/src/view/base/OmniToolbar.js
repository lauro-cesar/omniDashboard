Ext.define("Miniloja.view.base.OmniToolbar",{
    extend: "Ext.toolbar.Toolbar",
    overflowHandler:'scroller',
    xtype:'omniToolbar',
    alias:'widget.omniToolbar',
    pack:'start',
    ui:'footer',
    defaults:{
        scale:'large'
    }
});