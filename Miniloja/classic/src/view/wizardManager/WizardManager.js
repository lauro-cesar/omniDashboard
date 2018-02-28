Ext.define("Miniloja.view.wizardManager.WizardManager",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.wizardManager',
    xtype:'wizardManager',
    requires: [
        'Miniloja.view.wizardManager.SitesManager'
    ],
    items:[
        {
            xtype:'omniTapPanel',
            items:[
                {
                    xtype:'sitesManager'
                }
                // {
                //     xtype:'omniPanel',

                //         title: 'Páginas',
                //         iconCls:'x-fa fa-sitemap',
                //         tooltip: 'Sua conta no OmniEshops'
                // },
                // {
                //     xtype:'omniPanel',

                //         title: 'Arquivos',
                //         iconCls:'x-fa fa-files-o',
                //         tooltip: 'Gerenciador de arquivos'
                // },
                // {
                //     xtype:'omniPanel',

                //         title: 'Grupo de trabalho',
                //         iconCls:'x-fa fa-users',
                //         tooltip: 'Grupo de trabalho'
                // }

                

            ]
        }
    ]
    });