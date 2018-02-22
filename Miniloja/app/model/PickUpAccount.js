
Ext.define('Miniloja.model.PickUpAccount', {
    extend: 'Miniloja.model.Base',
    alias: 'model.pickupaccount',
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
            read: 'systemmanager/pickupaccounts/read/',
            create: 'systemmanager/pickupaccounts/create/',
            destroy: 'systemmanager/pickupaccounts/destroy/',
            update: 'systemmanager/pickupaccounts/update/'
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





