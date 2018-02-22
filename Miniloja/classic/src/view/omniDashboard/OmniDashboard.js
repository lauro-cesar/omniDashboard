Ext.define("Miniloja.view.omniDashboard.OmniDashboard",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.omniDashboard',
    xtype:'omniDashboard',
    layout:'card',
    reference:'omniDashboard',
    defaults:{
        bodyPadding:5
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
            xtype:'userSupport'
        }
    ]
    });