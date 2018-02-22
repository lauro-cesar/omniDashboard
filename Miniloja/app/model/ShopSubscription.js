Ext.define('Miniloja.model.ShopSubscription', {
    extend: 'Miniloja.model.Base',
    alias: 'model.shopsubscription',
    fields: [
        { name: 'shopName', type: 'auto' },
        { name: 'description', type: 'auto' },
        { name: 'ppsFee', type: 'auto' },
        { name: 'since', type: 'date'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'accountmanager/subscriptions/read/',
            destroy: 'accountmanager/subscriptions/destroy/'
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