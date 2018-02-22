Ext.define('Miniloja.model.OrderInvoices', {
    extend: 'Miniloja.model.Base',
    alias: 'model.orderinvoices',
    startParam: 'offset',

    fields: [
        { name: 'sellerID', type: 'auto' },
        { name: 'orderStatus', type:'auto'},
        { name: 'orderID', type: 'auto' },
        { name: 'customerName', type: 'auto' },
        { name: 'sellerName', type: 'auto' },
        { name: 'esellerName', type: 'auto' },
        { name: 'progressStatus', type: 'auto'},  
        { name: 'totalProducts'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'ordermanager/orders/read/',
            destroy: 'ordermanager/orders/destroy/',
            update: 'ordermanager/orders/update/'
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