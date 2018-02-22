


Ext.define('Miniloja.model.ShopTemplates', {
    extend: 'Miniloja.model.Base',
    alias: 'model.shoptemplates',
    fields: [
        { name: 'templateName', type: 'auto' },
        { name: 'dateModified', type:'date'},
        { name: 'templateDescription', type: 'auto' },
        { name: 'templateSignature', type: 'string' },
        { name: 'appVersion',type: 'string' },
        { name: 'templateStatus', type: 'string'},
        { name: 'blobKey', type: 'auto'},
        { name: 'owner'},
        { name: 'templateCategory', type:'auto'},
        { name: 'templatePrice', type: 'auto' },
        { name: 'paymentMethod', type: 'auto' },
        { name: 'paymentMethodName', type: 'string'},
        { name: 'templateLocale', type: 'auto' },
        { name: 'totalUsers'},
        { name: 'hasFile', type:'bool'},
        { name: 'isEnabled', type:'bool'},
        { name: 'isPrivate', type: 'bool'},
        { name: 'isNewVersion', type:'bool', defaultValue:false},
        { name: 'isPublic', type:'bool'},
        { name: 'isToSell', type:'bool'},
        { name: 'deploy', type:'bool',defaultValue:false},
        { name: 'screenshots', type:'string'},
        { name: 'screenshots_small', type:'string'},
        { name: 'screenshots_large', type:'string'},
        { name: 'shopType', type:'string'}
        ],
    proxy: {
        type: 'ajax',
        api: {
            read: 'marketmanager/templates/read/',
            create: 'marketmanager/templates/create/',
            destroy: 'marketmanager/templates/destroy/',
            update: 'marketmanager/templates/update/'
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