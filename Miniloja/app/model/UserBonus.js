Ext.define('Miniloja.model.UserBonus', {
    extend: 'Miniloja.model.Base',
    alias: 'model.userbonus',
    fields: [
        { name: 'amount_in', type: 'auto' },
        { name: 'amount_out', type: 'auto' },
        { name: 'amount', type: 'auto' },
        { name: 'amount_in_dolar', type: 'auto' },
        { name: 'exchangeRate', type: 'auto' },
        { name: 'fromUserName', type: 'auto' },
        { name: 'toUserName', type: 'auto' },
        { name: 'status', type: 'auto' }
        ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'accountmanager/userbonus/read/'
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