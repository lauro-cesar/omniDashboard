Ext.define('Miniloja.model.ItemMenuEntry', {
        extend: 'Miniloja.model.Base',
        alias: 'model.itemmenuentry',
        fields: [
            {
                name: 'itemID',
                type: 'string'
            },
            {
                name: 'entryID',
                type: 'string'
            }
        ],
        proxy: {
            type: 'ajax',
            startParam: 'offset',
            pageParam: 'page',
            limitParam: 'limit',
            api: {
                read: 'shopmanager/menuentries/read/',
                create: 'shopmanager/menuentries/create/',
                update: 'shopmanager/menuentries/update/',
                destroy: 'shopmanager/menuentries/destroy/'
            },
            reader: {
                type: 'json',
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
