Ext.define("Miniloja.view.orderManager.OrderManager",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.orderManager',
    xtype:'orderManager',
    layout:'fit',
    title:'Bem vindo ao gerencidor de pedidos',
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
                        title: 'Pedidos em Andamento',
                        iconCls:'x-fa fa-th',
                        tooltip: 'Crie e gerencie seus sites e lojas'
                    }
                },
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Rastreador de entrega',
                        iconCls:'x-fa fa-truck',
                        tooltip: 'Sua conta no OmniEshops'
                    }
                },
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Clientes',
                        iconCls:'x-fa fa-users',
                        tooltip: 'Gerenciador de arquivos'
                    }
                },
                {
                    xtype:'omniPanel',
                    tabConfig: {
                        title: 'Pedidos concluidos',
                        iconCls:'x-fa fa-database',
                        tooltip: 'Crie e gerencie seus sites e lojas'
                    }
                }               

                

            ]
        }
    ]
    });