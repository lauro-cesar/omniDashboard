
Ext.define('Miniloja.model.InventoryDLCItem', {
    extend: 'Miniloja.model.Base',
    alias: 'model.inventoryDLCItem',
    fields: [
        { name: 'pageID', type: 'auto' },
        { name: 'blobKey', type:'auto'},
        { name: 'size', type:'string',defaultValue:'0'},
        { name: 'expirationDays', type:'int', defaultValue:365},
        { name: 'limitOfDownload', type: 'int', defaultValue:10},
        { name: 'enabled', type:'bool',defaultValue:true},
        { name: 'itemName', type:'auto'},
        { name: 'hasFile',type:'bool'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'inventorymanager/dlcitem/read/',
            create: 'inventorymanager/dlcitem/create/',
            destroy: 'inventorymanager/dlcitem/destroy/',
            update: 'inventorymanager/dlcitem/update/'
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