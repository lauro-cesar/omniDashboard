
Ext.define('Miniloja.model.AccountNetworkCount', {
    extend: 'Miniloja.model.Base',
    alias: 'model.accountnetworkcount',
    startParam: 'offset',
    fields: [
        { name: 'accountID', type: 'auto'},
        { name: 'somatorio', type:'int' },
        { name: 'totalAccount', type:'int'},
        { name: 'totalEseller', type:'int'},
        { name: 'totalSeller', type:'int'},
        { name: 'totalSponsor', type:'int'},
        { name: 'dateFilter', type:'auto'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'accountmanager/network_daily/'
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