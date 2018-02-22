Ext.define('Miniloja.model.UserIndicando', {
    extend: 'Miniloja.model.Base',
    alias: 'model.userindicando',
    fields: [
        { name: 'accountName', type: 'auto' },
        { name: 'sponsorShopName', type: 'auto' },
        ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'accountmanager/userindicando/read/'
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