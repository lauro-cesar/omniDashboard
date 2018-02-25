Ext.define("Miniloja.view.omniDashboard.OmniTray",{
    extend: "Miniloja.view.base.OmniToolbar",
    overflowHandler:'scroller',
    xtype:'omniTray',
    alias:'widget.omniTray',
    pack:'start',
    ui:'footer',
    defaults:{
        scale:'medium'
    },
    items:[
        {
            xtype: 'tbfill'
        },
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-question-circle',
            tooltip:"Suporte ao usuário",
            handler:function(button){
                button.fireEvent('redirectTO','#app/userSupport');
            }
        },
        '-',
        {
            xtype:'omniButton',
            iconCls:'x-fa fa-info',
            tooltip:'About Us',
            handler:function(button) {
                button.fireEvent('redirectTO','#app/aboutUs');
            }
        }
    ]
});