/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 10/4/15
 * Time: 10:01 AM
 */


Ext.define('Miniloja.model.EshopItemCategory', {
    extend: 'Miniloja.model.Base',
    alias: 'model.eshopitemcategory',
    startParam: 'offset',
    fields: [
        { name: 'shopID', type: 'auto' },
        { name: 'itemID', type: 'auto'},
        { name: 'categoryLabel', type: 'auto' },
        { name: 'categoryParentID', type: 'auto' },
        { name: 'categoryLabelSlug', type: 'auto' },
        { name: 'isParent', type: 'bool'},
        { name: 'isActive', type: 'bool'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'inventorymanager/categories/read/',
            create: 'inventorymanager/categories/create/',
            destroy: 'inventorymanager/categories/destroy/',
            update: 'inventorymanager/categories/update/'
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