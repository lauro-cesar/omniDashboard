Ext.define('Miniloja.model.ProductSelectorNames', {
    extend: 'Miniloja.model.Base',
    alias: 'model.product_selector_names',
    startParam: 'offset',
    fields: [
        { name: 'shopID', type: 'auto' },
        { name: 'selectorTitle'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'shopmanager/selectorname/read/',
            create: 'shopmanager/selectorname/create/',
            destroy: 'shopmanager/selectorname/destroy/',
            update: 'shopmanager/selectorname/update/'
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