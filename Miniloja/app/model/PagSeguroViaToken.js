Ext.define('Miniloja.model.PagSeguroViaToken', {
    extend: 'Miniloja.model.BasePayment',
    alias: 'model.pagseguroviatoken',
    startParam: 'offset',
    fields: [
        { name: 'accountName', type: 'auto' },
        { name: 'accountEmail', type: 'auto', defaultValue:'' },
        { name: 'accountToken', type: 'auto', defaultValue:'' },
        { name: 'accountEnableRedirect', type: 'bool' ,defaultValue: false},
        { name: 'accountRedirectUrl', type: 'auto' },
        { name: 'accountRedirectExtraPostData', type: 'auto' },
        { name: 'accountActive', type: 'bool'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'systemmanager/pagseguroviatoken/read/',
            create: 'systemmanager/pagseguroviatoken/create/',
            destroy: 'systemmanager/pagseguroviatoken/destroy/',
            update: 'systemmanager/pagseguroviatoken/update/'
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