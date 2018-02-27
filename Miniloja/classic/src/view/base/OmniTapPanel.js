Ext.define("Miniloja.view.base.OmniTapPanel",{
    extend: "Ext.tab.Panel",
    alias:'widget.omniTapPanel',
    xtype:'omniTapPanel',
    defaults:{
        textAlign:'left',
        icon:null,
        tabConfig: {
            width:200,
            margin:'2 0 2 15'   
        }
    },
    tabBar:{
        padding:'10 0 0 0'
    },
    bind:{
        tabPosition:'{userSettings.tabPosition}',
        tabRotation:'{userSettings.tabRotation}'
    }
});