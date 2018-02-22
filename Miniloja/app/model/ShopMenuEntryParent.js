Ext.define('Miniloja.model.ShopMenuEntryParent', {
    extend: 'Miniloja.model.Base',
    alias: 'model.shopmenuentryparent',
    fields: [
        { 
            name: 'menuLabel', type: 'auto'
        }
    ],
    proxy: {
        type: 'ajax',
        api: {
            read: 'shopmanager/menus/readparents/'
        },
        reader: {
            type: 'json',
            rootProperty: 'itens',
            messageProperty: 'msg'
        }
    }
})