
Ext.define('Miniloja.model.ProductSelector', {
    extend: 'Miniloja.model.Base',
    alias: 'model.product_selector',
    startParam: 'offset',
    fields: [
        { name: 'itemID', type: 'auto' },
        { name: 'selectorTitle'},
        { name: 'widget'},
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'inventorymanager/itemselector/read/',
            create: 'inventorymanager/itemselector/create/',
            destroy: 'inventorymanager/itemselector/destroy/',
            update: 'inventorymanager/itemselector/update/'
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
});