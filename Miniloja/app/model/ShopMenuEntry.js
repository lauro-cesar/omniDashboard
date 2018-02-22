Ext.define('Miniloja.model.ShopMenuEntry', {
        extend: 'Ext.data.TreeModel',
        alias: 'model.shopmenuentry',
        fields: [
            {
                name: 'id',
                type: 'auto'
            },
            {
                name:'autoAdd',
                type:'bool',
                defaultValue:false
            },
            {
                name: 'shopID',
                type: 'string'
            },
            {
                name:'parentId',
                type:'string'
            },
            {
                name: 'text',
            },
            {
                name: 'leaf',
            },
            {
                name: 'cls'
            },
            {
                name: 'checked',
                type: 'bool',
                defaultValue:true
            },
            {
                name:'expandable',
                type:'bool',
                defaultValue:false
            },
            {
                name: 'expanded',
                type: 'bool',
                defaultValue:true
            }
        ],
        proxy: {
            type: 'ajax',
            startParam: 'offset',
            pageParam: 'page',
            limitParam: 'limit',
            api: {
                read: 'shopmanager/menus/read/',
                create: 'shopmanager/menus/create/',
                update: 'shopmanager/menus/update/',
                destroy: 'shopmanager/menus/destroy/'
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
                // root: 'itens',
                rootProperty: 'itens',
                messageProperty: 'msg'
            },
            writer: {
                type: 'json',
                writeAllFields: true,
                rootProperty:'itens'
            }
    }
    });
