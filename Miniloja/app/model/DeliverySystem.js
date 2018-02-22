/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 11/9/15
 * Time: 3:41 PM
 */



Ext.define('Miniloja.model.DeliverySystem', {
    extend: 'Miniloja.model.Base',
    alias: 'model.deliverysystem',
    proxy: {
        type: 'jsonp',
        callbackKey: 'omniCallBack',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'https://accounts.omnieshops.com/datastore/api/deliverysystems/read/'
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
        {
            name: 'systemName'
        },
        {
            name: 'systemLogo'
        },
        {
            name: 'systemDescription'
        },
        {
            name: 'systemWindow'
        }
    ]
});