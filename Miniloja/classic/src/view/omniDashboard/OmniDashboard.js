Ext.define("Miniloja.view.omniDashboard.OmniDashboard",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.omniDashboard',
    xtype:'omniDashboard',
    reference:'omniDashboard',
    layout:'card',
    defaults:{
        html:null,
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