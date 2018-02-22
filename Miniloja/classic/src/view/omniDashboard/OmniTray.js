Ext.define("Miniloja.view.omniDashboard.OmniTray",{
    extend: "Miniloja.view.base.OmniToolbar",
    overflowHandler:'scroller',
    xtype:'omniTray',
    alias:'widget.omniTray',
    pack:'start',
    ui:'omniTray',
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
        }
    ]
});