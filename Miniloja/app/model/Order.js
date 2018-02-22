Ext.define('Miniloja.model.Order', {
    extend: 'Miniloja.model.Base',
    alias: 'model.order',
    startParam: 'offset',

    fields: [
        { name: 'sellerID', type: 'auto' },
        { name: 'isPaid', type: 'bool' },
        { name: 'orderStatus', type:'auto'},
        { name: 'rowCSSClass', type:'string'},
        { name: 'orderID', type: 'auto' },
        { name: 'customerName', type: 'auto' },
        { name: 'sellerName', type: 'auto' },
        { name: 'esellerName', type: 'auto' },
        { name: 'origem', type: 'auto' },
        { name: 'progressStatus', type: 'auto'},  
        { name: 'esellerFQDN'},
        { name: 'orderhash'},
        { name: 'totalProducts'},
        { name: 'accessPIN' },
        { name: 'dateOfOrder'},
        { name: 'markAsPaid', type:'bool',defaultValue:false}
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