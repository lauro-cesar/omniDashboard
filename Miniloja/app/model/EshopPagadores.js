/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 6/16/15
 * Time: 2:05 AM
 */


Ext.define('Miniloja.model.EshopPagador', {
    extend: 'Miniloja.model.Base',
    alias: 'model.eshoppagador',
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'inventorymanager/pagadores/read/',
            update: 'inventorymanager/pagadores/update/',
            create: 'inventorymanager/pagadores/create/'
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
        { name: 'shopID', type: 'auto' },
        { name: 'metodoID', type: 'auto' },
        { name: 'isActive', type: 'bool'},
        { name: 'systemName'},
        { name: 'systemLogo'}
    ]
})