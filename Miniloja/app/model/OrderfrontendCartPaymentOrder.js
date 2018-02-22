Ext.define('Miniloja.model.OrderfrontendCartPaymentOrder', {
    extend: 'Miniloja.model.Base',
    alias: 'model.orderfrontendCartPaymentOrder',
    startParam: 'offset',
    fields: [
        { name: 'cartSellerID', type: 'auto' },
        { name: 'orderID', type: 'auto' },
        { name: 'transationID', type: 'auto' },
        { name: 'isPaid', type: 'bool' },
        { name: 'isDue', type: 'bool' },
        { name: 'status_string', type:'auto'},
        { name: 'value', type:'auto'},
        { name: 'receivedValue', type:'auto'},
        { name: 'payment_method',type:'auto'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'ordermanager/orders_payments/read/'
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