Ext.define('Miniloja.model.MercadoPagoBasic', {
    extend: 'Miniloja.model.BasePayment',
    alias: 'model.mercadopagobasic',
    startParam: 'offset',
    fields: [
        { name: 'accountName', type: 'auto' },
        { name: 'SHORT_NAME', type: 'auto', defaultValue:'' },
        { name: 'CLIENT_ID', type: 'auto', defaultValue:'' },
        { name: 'CLIENT_SECRET', type: 'auto', defaultValue:'' },
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
            read: 'systemmanager/mercadopagobasic/read/',
            create: 'systemmanager/mercadopagobasic/create/',
            destroy: 'systemmanager/mercadopagobasic/destroy/',
            update: 'systemmanager/mercadopagobasic/update/'
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