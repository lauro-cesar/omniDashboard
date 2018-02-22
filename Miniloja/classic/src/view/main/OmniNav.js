Ext.define("Miniloja.view.OmniNav",{
    extend: "Miniloja.view.base.OmniToolbar",
    overflowHandler:'scroller',
    xtype:'omniNav',
    alias:'widget.omniNav',
    pack:'start',
    ui:'footer',
    defaults:{
        scale:'large'
    },
    items:[
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-home',
            tooltip:"Dashboard",
            handler:function(button){
                button.fireEvent('redirectTO','#app/support');
            }
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-life-ring',
            tooltip:"Sistem OverView",
            handler:function(button){
                button.fireEvent('redirectTO','#app/support');
            }
        },
        '-',
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-life-ring',
            tooltip:"Suporte ao usuário",
            handler:function(button){
                button.fireEvent('redirectTO','#app/support');
            }
        },
        {
            xtype: 'tbfill'
        },

    ]
});