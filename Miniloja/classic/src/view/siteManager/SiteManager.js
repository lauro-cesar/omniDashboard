Ext.define("Miniloja.view.siteManager.SiteManager",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.siteManager',
    xtype:'siteManager',
    layout:'fit',
    dockedItems: [
        {
            xtype: 'omniNav',
            dock: 'top',
        }
    ],
    items:[
        {
            xtype: 'omniPanel',
            html:'Site Managers'
        }
    ]
    });