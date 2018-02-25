Ext.define("Miniloja.view.base.OmniTapPanel",{
    extend: "Ext.tab.Panel",
    alias:'widget.omniTapPanel',
    xtype:'omniTapPanel',
    // TODO: add formula to handle user X default settings.
    bind:{
        tabPosition:'{userSettings.tabPosition}',
        tabRotation:'{userSettings.tabRotation}'
    }    
});
