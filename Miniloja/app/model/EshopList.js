/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 12/22/15
 * Time: 11:55 PM
 */



Ext.define('Miniloja.model.EshopList', {
    extend: 'Miniloja.model.Base',
    alias: 'model.eshoplist',
    proxy: {
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        type: 'ajax',
        pageSize: 100,
        api: {
            read: 'shopmanager/eshops/readlist/',
            update: 'shopmanager/eshops/update/',
            destroy: 'shopmanager/eshops/destroy/'
        },
        reader: {
            type: 'json',
            rootProperty: 'itens',
            messageProperty: 'msg'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            rootProperty: 'itens'
        }
    },
    fields: [
        { name: 'shopFQDN', type: 'auto' },
        { name: 'shopName', type: 'textrequired', defaultValue:'Minha loja online' },
        { name: 'shopSlogan', type: 'textrequired' },
        { name: 'shopLogo', type: 'auto', defaultValue:'https://lh3.googleusercontent.com/TAQ4bJwnXNZQ2fiJ21K3k11y3-mcoOKuvTlOKuCtLNMPXAS5mV5YJQZR35KlBXwk2UvinyIOsqXcwfKOCRA'},
        { name: 'isActive', type:'bool'},
        { name: 'readyToOpen', type:'bool'},
        { name: 'loaded', type:'bool', defaultValue:true},
        { name: 'eshopType'},
        { name: 'shopType',type: 'textrequired'},
        { name: 'isShop', type: 'bool' },
        { name: 'isEShop', type: 'bool' },
        { name: 'isOpen', type: 'bool' },
        { name: 'isNetCollector', type:'bool'}
    ]
})