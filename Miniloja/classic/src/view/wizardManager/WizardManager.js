Ext.define("Miniloja.view.wizardManager.WizardManager",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.wizardManager',
    xtype:'wizardManager',
    layout:'fit',
    title:'Bem vindo ao omniEshops Wizard - Começe aqui.',
    iconCls:'x-fa fa-magic',
    defaults:{
        bodyPadding:5,
    },
    items:[
        {
            xtype:'omniTapPanel',
            items:[
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Sites',
                        iconCls:'x-fa fa-th',
                        tooltip: 'Crie e gerencie seus sites e lojas'
                    }
                },
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Páginas',
                        iconCls:'x-fa fa-sitemap',
                        tooltip: 'Sua conta no OmniEshops'
                    }
                },
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Arquivos',
                        iconCls:'x-fa fa-files-o',
                        tooltip: 'Gerenciador de arquivos'
                    }
                },
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Grupo de trabalho',
                        iconCls:'x-fa fa-users',
                        tooltip: 'Grupo de trabalho'
                    }
                }

                

            ]
        }
    ]
    });