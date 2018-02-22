Ext.define('Miniloja.model.OmniEthereum', {
    extend: 'Miniloja.model.BasePayment',
    alias: 'model.omniethereum',
    startParam: 'offset',
    fields: [
        { name: 'wallet_address', type: 'auto', defaultValue:'' },
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
            read: 'systemmanager/omniethereum/read/',
            create: 'systemmanager/omniethereum/create/',
            destroy: 'systemmanager/omniethereum/destroy/',
            update: 'systemmanager/omniethereum/update/'
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