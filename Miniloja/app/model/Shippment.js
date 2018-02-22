Ext.define('Miniloja.model.Shippment', {
    extend: 'Miniloja.model.Base',
    alias: 'model.shippment',
    startParam: 'offset',
    fields: [
       { name: 'shippmentCarrier', type: 'auto' },
       { name: 'shippmentETA', type: 'date' },
        { name: 'orderID', type: 'auto' },
        { name: 'customerName', type: 'auto' },
        { name: 'shippmentStatus'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'ordermanager/shippment/read/',
            create: 'ordermanager/shippment/create/',
            destroy: 'ordermanager/shippment/destroy/',
            update: 'ordermanager/shippment/update/'
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