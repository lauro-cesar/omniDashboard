
Ext.define("Miniloja.view.userSupport.UserSupport",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.userSupport',
    xtype:'userSupport',
    requires:[
        'Miniloja.view.userSupport.ComunitySupport',
        'Miniloja.view.userSupport.PaidSupport'
    ],
    layout:'fit',
    items:[
        {
            xtype:'omniTapPanel',
            items:[
                {
                    xtype:'paidSupport'
                },
                {
                    xtype:'comunitySupport'
                }
            ]
        }
    ]
    });