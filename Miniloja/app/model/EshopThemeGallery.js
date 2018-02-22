Ext.define('Miniloja.model.EshopThemeGallery', {
    extend: 'Miniloja.model.Base',
    alias: 'model.eshopthemegallery',
    fields: [
        { name: 'screenCaption', type: 'auto' },
        { name: 'uri', type: 'auto', defaultValue:"/img/screen.png"},
        { name: 'blobKey', type: 'auto'},
        { name: 'hasFile', type:'bool', defaultValue:false},
        { name: 'templateID', type: 'string'},
        { name: 'templateSignature'}
        ],
    proxy: {
        type: 'ajax',
        api: {
            read: 'marketmanager/templatescreenshots/read/',
            create: 'marketmanager/templatescreenshots/create/',
            destroy: 'marketmanager/templatescreenshots/destroy/',
            update: 'marketmanager/templatescreenshots/update/'
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
})