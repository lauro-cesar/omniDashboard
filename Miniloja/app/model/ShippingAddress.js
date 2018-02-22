

Ext.define('Miniloja.model.ShippingAddress', {
    extend: 'Miniloja.model.Base',
    alias: 'model.shippingaddress',
    startParam: 'offset',
    fields: [
        { name: 'orderID', type: 'auto' },
        { name: 'city', type:'auto'},
        { name: 'zipCode', type: 'auto' },
        { name: 'state', type: 'auto' },
        { name: 'country', type: 'auto' },
        { name: 'suite', type: 'auto' },
        { name: 'streetNumber', type: 'auto' },
        { name: 'streetName', type: 'auto' },
        { name: 'extraInfo', type: 'auto' }
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'ordermanager/shipping_address/read/',
            update: 'ordermanager/shipping_address/update/'
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