Ext.define('Miniloja.model.PayPalExpress', {
    extend: 'Miniloja.model.BasePayment',
    alias: 'model.paypalexpress',
    startParam: 'offset',
    fields: [
        { name: 'accountName', type: 'auto' },
        { name: 'paypalAccount', type: 'auto', defaultValue:'' },
        { name: 'client_id', type: 'auto', defaultValue:'' },
        { name: 'client_secret', type: 'auto', defaultValue:'' },
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
            read: 'systemmanager/paypalexpress/read/',
            create: 'systemmanager/paypalexpress/create/',
            destroy: 'systemmanager/paypalexpress/destroy/',
            update: 'systemmanager/paypalexpress/update/'
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



