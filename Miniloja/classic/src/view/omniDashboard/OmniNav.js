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
            iconCls:'x-fa fa-list-ol',
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
            xtype: 'tbfill'
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-cogs',
            tooltip:"System Settings",
            handler:function(button){
                button.fireEvent('redirectTO','#app/systemSettings');
            }
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-power-off',
            tooltip:"Account logou out",
            handler:function(button){
                button.fireEvent('redirectTO','#app/accountLogout');
            }
        }
    ]
});