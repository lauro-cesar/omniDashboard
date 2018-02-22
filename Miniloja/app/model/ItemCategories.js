


Ext.define('Miniloja.model.ItemCategory', {
    extend: 'Miniloja.model.Base',
    alias: 'model.itemcategory',
    startParam: 'offset',
    fields: [
        { name: 'shopID', type: 'auto' },
        { name: 'itemID', type: 'auto' },
        { name: 'catID', type: 'auto' }
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'inventorymanager/itemcategories/read/',
            create: 'inventorymanager/itemcategories/create/',
            destroy: 'inventorymanager/itemcategories/destroy/'
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