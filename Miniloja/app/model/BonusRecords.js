Ext.define('Miniloja.model.UserBonusRecords', {
    extend: 'Miniloja.model.Base',
    alias: 'model.userbonusrecords',
    fields: [
        { name: 'shopName', type: 'auto' },
        { name: 'description', type: 'auto' },
        { name: 'value', type: 'auto' },
        { name: 'shopID', type: 'auto'},
        { name: 'statusLabel', type: 'auto'},
        { name: 'statusCode', type: 'auto'},
        { name: 'isDue', type: 'bool'},
        { name: 'due',type:'date'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'accountmanager/bonusrecords/'
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




