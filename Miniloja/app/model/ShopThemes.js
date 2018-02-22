Ext.define('Miniloja.model.ShopThemes', {
    extend: 'Miniloja.model.Base',
    alias: 'model.shopthemes',
    fields: [
        { name: 'templateName', type: 'auto' },
        { name: 'templateDescription', type: 'auto' },
        { name: 'templateSignature', type: 'string' },
        { name: 'appVersion',type: 'string' },
        { name: 'templateCategory', type:'auto'},
        { name: 'templateLocale', type: 'auto' },
        { name: 'screenshots_small', type:'string'},
        { name: 'screenshots_large', type:'string'},
        { name: 'shopType', type:'string'}
        ],
    proxy: {
        type: 'jsonp',
        headers: {'X-RESPONSE-FORMAT': "application/json" },
        callbackKey: 'omniCallBack',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'https://accounts.omnieshops.com/datastore/api/marketmanager/themes/read/'
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