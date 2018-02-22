Ext.define('Miniloja.model.OrderfrontendCartShippingOrder', {
    extend: 'Miniloja.model.Base',
    alias: 'model.orderfrontendCartShippingOrder',
    startParam: 'offset',
    fields: [
        { name: 'cartSellerID', type: 'auto' },
        { name: 'orderID', type: 'auto' },
        { name: 'methodID', type: 'auto' },
        { name: 'ETA', type: 'auto' },
        { name: 'isDue', type: 'bool' },
        { name: 'isDelivered', type: 'bool' },
        { name: 'status_string', type:'auto'},
        { name: 'status_code', type:'auto'},
        { name: 'trackingCode', type:'auto'},
        { name: 'instructions', type:'auto'},
        { name: 'methodName',type:'auto'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'ordermanager/orders_shipping/read/',
            create: 'ordermanager/orders_shipping/create/',
            update: 'ordermanager/orders_shipping/update/',
            destroy: 'ordermanager/orders_shipping/destroy/'
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