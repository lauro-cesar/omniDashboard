Ext.define("Miniloja.view.omniDashboard.OmniNav",{
    extend: "Miniloja.view.base.OmniToolbar",
    overflowHandler:'scroller',
    xtype:'omniNav',
    alias:'widget.omniNav',
    border:false,
    pack:'start',
    defaults:{
        scale:'large'
    },
    ui:'footer',
    items:[
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-home',
            tooltip:"Welcome",
            handler:function(button){
                button.fireEvent('redirectTO','#app/bigPicture');
            }
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-shopping-cart',
            tooltip:"Order manager",
            handler:function(button){
                button.fireEvent('redirectTO','#app/orderManager');
            }
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-inbox',
            tooltip:"Customer Care",
            handler:function(button){
                button.fireEvent('redirectTO','#app/customerCare');
            }
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-archive',
            tooltip:"Inventory Manager",
            handler:function(button){
                button.fireEvent('redirectTO','#app/inventoryManager');
            }
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-magic',
            tooltip:"OmniEshop app wizard",
            handler:function(button){
                button.fireEvent('redirectTO','#app/wizardManager');
            }
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-cogs',
            visible:true,
            hidden:false,
            bind:{
                iconCls:'x-fa {settingsIcon}',
            },
            tooltip:"Account settings",        
            handler:function(button) {
                button.fireEvent('redirectTO','#app/systemSettings');
            }
        },
        {
            xtype: 'tbfill'
        },
        {
            xtype:'omniButton',
            hidden:true,
            bind:{
                visible:'{isConnected}'
            },
            iconCls:'x-fa fa-sign-out',
            tooltip:"Account logout",
            handler:function(button){
                button.fireEvent('redirectTO','#app/accountLogout');
            }
        }
    ]
});