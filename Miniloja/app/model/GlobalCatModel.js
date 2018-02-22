/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 10/27/15
 * Time: 1:15 PM
 */


Ext.define('Miniloja.model.GlobalCatModel', {
    extend: 'Miniloja.model.Base',
    alias: 'model.globalcatmodel',
    startParam: 'offset',
    fields: [
        { name: 'shopID', type: 'auto' },
        { name: 'categoryLabel', type: 'auto' },
        { name: 'categoryParentID', type: 'auto' },
        { name: 'categoryLabelSlug', type: 'auto' }
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'inventorymanager/globalcategories/read/',
            create: 'inventorymanager/globalcategories/create/',
            destroy: 'inventorymanager/globalcategories/destroy/'
        },
        sorters: [
            {
                property: 'leaf',
                direction: 'ASC'
            },
            {
                property: 'text',
                direction: 'ASC'
            }
        ],
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