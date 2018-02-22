Ext.define('Miniloja.model.Customer', {
    extend: 'Miniloja.model.Base',
    alias: 'model.customer',
    startParam: 'offset',
    fields: [
        { name: 'orderID', type: 'auto' },
        { name: 'customerName', type:'auto'},
        { name: 'customerEmail', type: 'auto' },
        { name: 'customerPhone', type: 'auto' }
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'ordermanager/customer/read/',
            update: 'ordermanager/customer/update/'
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