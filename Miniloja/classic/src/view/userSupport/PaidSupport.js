Ext.define("Miniloja.view.userSupport.PaidSupport",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.paidSupport',
    xtype:'paidSupport',
    layout:'fit',
    title: 'Suporte profissional',
    iconCls:'x-fa fa-tasks',
    tooltip: 'Suporte pago',
    items:[
        {
            xtype:'omniPanel',
            html:'Suporte ao cliente pago...'
        }
    ]
    });