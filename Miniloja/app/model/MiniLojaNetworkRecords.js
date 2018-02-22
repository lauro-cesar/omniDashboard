Ext.define('Miniloja.model.MiniLojaNetworkRecords', {
    extend: 'Miniloja.model.Base',
    alias: 'model.miniLojaNetworkRecords',
    startParam: 'offset',

    fields: [
        { name: 'accountID', type: 'auto' },
        { name: 'counted', type:'bool'},
        { name: 'kind', type: 'auto' }
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'kernel/networkrecords/read/'
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