Ext.define("Miniloja.view.base.OmniTapPanel",{
    extend: "Ext.tab.Panel",
    alias:'widget.omniTapPanel',
    xtype:'omniTapPanel',
    border:false,
    ui:'omnitab',
    plain: true,
    bodyPadding:'0 0 0 10',
    frame:false,
    defaults:{
        bodyPadding:'0 0 0 10',
        textAlign:'left',
        border: false,
        icon:null,
    },
    bind:{
        tabPosition:'{userSettings.tabPosition}',
        tabRotation:'{userSettings.tabRotation}'
    }    
});
