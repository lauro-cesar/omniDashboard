/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 6/15/15
 * Time: 1:15 AM
 */


Ext.define('Miniloja.model.EshopDelivery', {
    extend: 'Miniloja.model.Base',
    alias: 'model.eshopdelivery',
    proxy: {
        type: 'jsonp',
        headers: {'X-RESPONSE-FORMAT': "application/json" },
        callbackKey: 'omniCallBack',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'https://accounts.omnieshops.com/datastore/api/deliverysystems/read/'
//            update: '/inventorymanager/fretes/update/',
//            create: '/inventorymanager/fretes/create/'accountmanager/datastore/api/
        },
        reader: {
            type: 'json',
            rootProperty: 'itens',
            messageProperty: 'msg'
        },
        writer: {
            type: 'json',
            rootProperty: 'itens'
        }
    },
    fields: [
        { name: 'isActive', type: 'bool'},
        { name: 'systemName'},
        { name: 'systemDescription', type: 'auto'},
        { name: 'systemLogo'}
    ]
})