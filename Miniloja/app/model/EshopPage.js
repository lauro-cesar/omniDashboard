Ext.define('Miniloja.model.EshopPage', {
    extend: 'Miniloja.model.Base',
    alias: 'model.eshoppage',
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'shopmanager/pages/read/',
            update: 'shopmanager/pages/update/',
            create: 'shopmanager/pages/create/',
            destroy: 'shopmanager/pages/destroy/'
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
    },
    fields: [
        { name: 'pageTitle'},
        { name: 'pageContent'},
        { name: 'pageSlut', type: 'auto'},
        { name: 'shopID'},
        { name: 'pageLocale'},
        { name: 'pagePath'}
    ]
})