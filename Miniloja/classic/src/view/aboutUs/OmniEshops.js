Ext.define("Miniloja.view.aboutUs.OmniEshops",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.omniEshops',
    xtype:'omniEshops',
    layout:'fit',
    title: 'Economia Colaborativa',
    iconCls:'x-fa fa-th',
    tooltip: 'Economia colaborativa',
    items:[
        {
            xtype:'omniPanel',
            html:'Lista de desenvolvedores'
        }
    ]
    });