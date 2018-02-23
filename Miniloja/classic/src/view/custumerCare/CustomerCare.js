Ext.define("Miniloja.view.customerCare.CustomerCare",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.customerCare',
    xtype:'customerCare',
    layout:'fit',
    title:'Bem vindo ao atendimento ao cliente',
    iconCls:'x-fa fa-shopping-cart',
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
                        title: 'Mensageiro',
                        iconCls:'x-fa fa-th',
                        tooltip: 'Crie e gerencie seus sites e lojas'
                    }
                },
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Tickets',
                        iconCls:'x-fa fa-tasks',
                        tooltip: 'Pedidos de Suporte'
                    }
                },
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Clientes',
                        iconCls:'x-fa fa-users',
                        tooltip: 'Gerenciador de arquivos'
                    }
                }
            ]
        }]
    });