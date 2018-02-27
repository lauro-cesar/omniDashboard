Ext.define("Miniloja.view.omniDashboard.OmniDashboard",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        console.log("Iniciando dash");
        this.callParent(arguments);
    },
    requires:[
        'Miniloja.view.base.OmniPanel',
        'Miniloja.view.base.OmniToolbar',
        'Miniloja.view.base.OmniTapPanel',
        'Miniloja.view.omniDashboard.OmniNav',
        'Miniloja.view.omniDashboard.OmniTray',
        'Miniloja.view.bigPicture.BigPicture',  
        'Miniloja.view.customerCare.CustomerCare',
        'Miniloja.view.orderManager.OrderManager',
        'Miniloja.view.inventoryManager.InventoryManager',
        'Miniloja.view.wizardManager.WizardManager',
        'Miniloja.view.systemSettings.SystemSettings',
        'Miniloja.view.systemSettings.UserAccount',
        'Miniloja.view.userSupport.UserSupport'
    ],
    alias:'widget.omniDashboard',
    xtype:'omniDashboard',
    reference:'omni-dashboard-panel',
    layout:'card',
    defaults:{
        html:null,
        border:false,
        frame:false
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
        },{
            xtype: 'customerCare'
        },{
            xtype: 'orderManager'
        },{
            xtype: 'inventoryManager'
        },{
            xtype:'wizardManager'
        },{
            xtype:'systemSettings'
        },{
            xtype:'userSupport'
        }
    ]
    });