Ext.define('Miniloja.model.PaymentsRewards', {
    extend: 'Miniloja.model.Base',
    alias: 'model.paymentsrewards',
    fields: [
        { name: 'sellerName', type: 'auto' },
        { name: 'esellerName', type: 'auto' },
        { name: 'orderID', type: 'auto' },
        { name: 'itemQT'},
        { name: 'itemTitle'},
        { name: 'reward'},
        { name: 'numItens'},
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
            read: 'shopmanager/shops/paymentsrewards/'
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
