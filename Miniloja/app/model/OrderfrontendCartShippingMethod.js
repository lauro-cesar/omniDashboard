Ext.define('Miniloja.model.OrderfrontendCartShippingMethod', {
    extend: 'Miniloja.model.Base',
    alias: 'model.orderfrontendCartShippingMethod',
    startParam: 'offset',
    fields: [
        { name: 'cartSellerID', type: 'auto' },
        { name: 'orderID', type: 'auto' },
        { name: 'methodID',type:'auto'},
        { name: 'methodName', type:'auto'},
        { name: 'instructions'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'ordermanager/orders_shipping_methods/read/'
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


