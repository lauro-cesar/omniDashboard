Ext.define('Miniloja.model.PaymentsFees', {
    extend: 'Miniloja.model.Base',
    alias: 'model.paymentsfees',
    fields: [
        { name: 'sellerName', type: 'auto' },
        { name: 'itemQT'},
        { name: 'ppsFee'},
        { name: 'numItens'},
        { name: 'orderID', type: 'auto' },
        { name: 'amount', type: 'auto' },
        { name: 'shopID', type: 'auto'},
        { name: 'description', type: 'auto'},
        { name: 'status', type: 'auto'},
        { name: 'dueDate', type: 'auto'},
        { name: 'isDue', type: 'bool'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'shopmanager/shops/paymentsfees/'
        },
        reader: {
            type: 'json',
            rootProperty: 'itens',
            messageProperty: 'msg'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            rootProperty: 'itens'
        }
    }
})
