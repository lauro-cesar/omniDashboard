Ext.define("Miniloja.view.wizardManager.SiteManager",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.siteManager',
    xtype:'siteManager',
    title: 'Sites',
    iconCls:'x-fa fa-th',
    tooltip: 'Crie e gerencie seus sites e lojas',
    items:[
        {
            xtype:'omniPanel',
            dockedItems: [
                {
                    xtype: 'omniToolbar',
                    dock: 'top',
                    ui:'footer',
                    defaults:{
                        xtype:'omniToolButton'
                    },
                    items:[
                        {
                            text:'Novo Site',
                            iconCls:'x-fa fa-plus',
                            bind:{
                                text: '{i18n.Miniloja.view.wizardManager.SiteManager.omniToolbar.omniToolButton.newsite}'
                            }
                            
                        },
                        '->',
                        {
                            text:'Sincronizar',
                            iconCls:'x-fa fa-download',
                            hidden:true,
                            bind:{
                                visible:'{isConnected}',
                                text: '{i18n.Miniloja.view.wizardManager.SiteManager.omniToolbar.omniToolButton.syncSites}'
                            }
                        }
                    ]
                }
            ],
        }
    ]
    });