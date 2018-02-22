


Ext.define('Miniloja.model.InventoryDLCPage', {
    extend: 'Miniloja.model.Base',
    alias: 'model.inventoryDLCPage',
    startParam: 'offset',
    fields: [
        { name: 'itemID', type: 'auto' },
        { name: 'pps', type:'auto'},
        { name: 'enabled', type: 'bool' }
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'inventorymanager/dlcpage/read/',
            create: 'inventorymanager/dlcpage/create/',
            destroy: 'inventorymanager/dlcpage/destroy/',
            update: 'inventorymanager/dlcpage/update/'
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