Ext.define('Miniloja.model.OrderfrontendCartItem', {
    extend: 'Miniloja.model.Base',
    alias: 'model.orderfrontendCartItem',
    startParam: 'offset',
    fields: [
        { name: 'sellerID', type: 'auto' },
        { name: 'esellerID', type: 'auto' },
        { name: 'cartSellerID', type: 'auto' },
        { name: 'orderID', type: 'auto' },
        { name: 'adID', type: 'auto' },
        { name: 'itemQT', type: 'auto' },
        { name: 'itemDefaultImage', type: 'auto' },
        { name: 'itemCode', type: 'auto' },
        { name: 'itemBarCode', type:'auto'},
        { name: 'itemTitle', type:'auto'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'ordermanager/orders_items/read/'
            // create: '/ordermanager/orders/create/',
            // destroy: '/ordermanager/orders/destroy/',
            // update: '/ordermanager/orders/update/'
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