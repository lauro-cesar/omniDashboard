
Ext.define('Miniloja.model.ProductSelectorValue', {
    extend: 'Miniloja.model.Base',
    alias: 'model.product_selector_value',
    startParam: 'offset',
    fields: [
        { name: 'selectorID' },
        { name: 'selectorIcon', defaultValue:'/img/loading.gif'},
        { name: 'uri'},
        { name: 'hasFile',type:'bool',defaultValue:false},
        { name: 'blobkey'},
        { name: 'selectorLabel'},
        { name: 'selectorDescription'},
        { name: 'isDefault',type:'bool',value:false}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'inventorymanager/itemselector/value/read/',
            create: 'inventorymanager/itemselector/value/create/',
            destroy: 'inventorymanager/itemselector/value/destroy/',
            update: 'inventorymanager/itemselector/value/update/'
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