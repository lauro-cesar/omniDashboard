Ext.define('Miniloja.model.UserInvoices', {
    extend: 'Miniloja.model.Base',
    alias: 'model.userinvoices',
    fields: [
        { name: 'amount', type: 'auto' },
        { name: 'vencimento', type: 'auto' },
        { name: 'isPaid', type: 'bool' },
        { name: 'accountID', type: 'auto'},
        { name: 'isDue', type: 'bool'}
        ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'accountmanager/invoices/read/'
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