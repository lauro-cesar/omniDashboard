Ext.define('Miniloja.model.OrderfrontendCartSeller', {
    extend: 'Miniloja.model.Base',
    alias: 'model.orderfrontendCartSeller',
    startParam: 'offset',
    fields: [
        { name: 'dateCreated', type:'date', dateFormat: 'd/m/Y h:i:s'},
        { name: 'expired', type:'bool'},
        { name: 'sellerID', type: 'auto' },
        { name: 'esellerID', type: 'auto' },
        { name: 'sellerName', type: 'auto' },
        { name: 'esellerName', type: 'auto' },
        { name: 'showShippingMethod', type:'bool'},
        { name: 'customerID', type: 'auto' },
        { name: 'shippingAddressID', type: 'auto' },
        { name: 'shippingMethodID', type: 'auto' },
        { name: 'orderID', type: 'auto' },
        { name: 'cartSellerID', type: 'auto' },
        { name: 'paymentStatus', type:'auto'},
        { name: 'deliveryStatus', type:'auto'},
        { name: 'customerName', type: 'auto' },        
        { name: 'progressStatus', type: 'auto'},  
        { name: 'totalProducts'},
        { name: 'dateOfOrder'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'ordermanager/orders/read/',
            // create: '/ordermanager/orders/create/',
            // destroy: '/ordermanager/orders/destroy/',
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