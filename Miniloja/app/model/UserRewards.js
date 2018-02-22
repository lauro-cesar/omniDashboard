Ext.define('Miniloja.model.UserRewards', {
    extend: 'Miniloja.model.Base',
    alias: 'model.userrewards',
    fields: [
        { name: 'amount', type: 'auto' },
        { name: 'itemTitle', type: 'auto' },
        { name: 'sellerName', type: 'auto' },
        { name: 'esellerName', type: 'auto'},
        { name: 'amount_in_dolar', type: 'auto' },
        { name: 'exchangeRate', type: 'auto' },
        { name: 'status'}
        ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'accountmanager/userreward/read/'
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