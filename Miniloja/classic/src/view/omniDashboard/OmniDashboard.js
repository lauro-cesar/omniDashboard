Ext.define("Miniloja.view.omniDashboard.OmniDashboard",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        console.log("Iniciando dash");
        this.callParent(arguments);
    },
    alias:'widget.omniDashboard',
    xtype:'omniDashboard',
    reference:'omni-dashboard-panel',
    layout:'card',
    defaults:{
        html:null,
        border:false,
        frame:false,
    },
    dockedItems: [
        {
            xtype: 'omniNav',
            dock: 'left'
        },
        {
            xtype: 'omniTray',
            dock: 'bottom'
        }
    ],
    items:[
        {
            xtype: 'bigPicture'
        },        
        {
            xtype: 'customerCare'
        },
        {
            xtype: 'orderManager'
        },      
        {
            xtype: 'inventoryManager'
        },  
        {
            xtype: 'siteManager'
        },
        {
            xtype: 'marketingManager'
        },{
            xtype:'systemSettings'
        },
        {
            xtype:'accountLogout'
        },
        {
            xtype:'wizardManager'
        },
        {
            xtype:'userSupport'
        }
    ]
    });