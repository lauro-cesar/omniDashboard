Ext.define("Miniloja.view.base.OmniButton",{
    extend: "Ext.Button",
    alias:"widget.omniButton",
    xtype:"omniButton",
    bind:{
        scale:'{userSettings.buttonScale}'
    }
});