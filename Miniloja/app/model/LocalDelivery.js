
Ext.define('Miniloja.model.LocalDelivery', {
    extend: 'Miniloja.model.Base',
    alias: 'model.localDelivery',
    startParam: 'offset',

    fields: [
        { name: 'shopID', type: 'auto' },
        { name: 'systemDeliveryMethodID', type:'auto'},
        { name: 'accountName', type: 'auto' },
        { name: 'instructions', defaultValue:''},
        { name: 'operationName'},
        { name: 'accountActive', type: 'bool', defaultValue:true}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'systemmanager/localdelivery/read/',
            create: 'systemmanager/localdelivery/create/',
            destroy: 'systemmanager/localdelivery/destroy/',
            update: 'systemmanager/localdelivery/update/'
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