Ext.define("Miniloja.view.userSupport.ComunitySupport",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.comunitySupport',
    xtype:'comunitySupport',
    layout:'fit',
    title: 'Suporte comunitário',
    iconCls:'x-fa fa-life-ring',
    tooltip: 'Suporte Comunitário',
    items:[
        {
            xtype:'omniPanel',
            html:'Suporte comunitário ao cliente '
        }
    ]
    });