Ext.define("Miniloja.view.omniDashboard.OmniNav",{
    extend: "Miniloja.view.base.OmniToolbar",
    overflowHandler:'scroller',
    xtype:'omniNav',
    alias:'widget.omniNav',
    pack:'start',
    defaults:{
        scale:'large'
    },
    ui:'omninav',
    items:[
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-line-chart',
            tooltip:"Big Picture",
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
            hidden:true,
            bind:{
                visible:'{!isConnected}'
            },
            iconCls:'x-fa fa-power-off',
            tooltip:"Account sign in",
            handler:function(button){
                button.fireEvent('accountSignIn');
            }
        },
        {
            xtype: 'tbfill'
        },
        {
            xtype:'omniButton',
            hidden:true,
            bind:{
                visible:'{isConnected}',
                html:'<img src={userAvatar} style="margin-top:2px" width=32px height=32px>'
            },            
            handler:function(button){
                button.fireEvent('redirectTO','#app/systemSettings');
            },
            html:'<img src=/resources/avatar.png  width=32px height=32px>'
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