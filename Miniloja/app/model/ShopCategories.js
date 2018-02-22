/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 10/24/15
 * Time: 12:25 AM
 */
Ext.define('Miniloja.model.ShopCategory', {
    extend: 'Miniloja.model.Base',
    alias: 'model.shopcategory',
    startParam: 'offset',
    fields: [
        { name: 'shopID', type: 'auto' },
        { name: 'catID', type: 'string' },
        { name: 'categoryLabel', type: 'auto' },
        { name: 'categoryParentID', type: 'auto' },
        { name: 'categoryLabelSlug', type: 'auto' },
        { name: 'isParent', type: 'bool'},
        { name: 'isActive', type: 'bool'},
        { name: 'isPublic', type: 'bool'},
        { name: 'text'},
        {
            name: 'leaf',
        },
        {
            name: 'cls'
        },
        {
            name: 'checked',
            type: 'boolean'
        },
        {
            name: 'isPublic',
            type: 'boolean'
        },
        {
            name: 'expanded',
            type: 'boolean'
        }
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'inventorymanager/shopcategories/read/',
            create: 'inventorymanager/shopcategories/create/',
            destroy: 'inventorymanager/shopcategories/destroy/'
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