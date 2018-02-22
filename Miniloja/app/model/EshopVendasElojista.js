/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 7/23/15
 * Time: 5:00 AM
 */


//FIXME: Arrumar url de leitura
Ext.define('Miniloja.model.EshopVendasElojistas', {
    extend: 'Miniloja.model.Base',
    alias: 'model.eshopvendaselojista',
    proxy: {
        type: 'ajax',
        extraParams: {
            'active': 'True'
        },
        api: {
            read: '/carts/read/',
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
    },
    fields: [
        { name: 'item', type: 'auto' },
        { name: 'reward', type: 'auto' },
        { name: 'itemQT', type: 'auto' },
        { name: 'seller', type: 'auto' },
        { name: 'eseller', type: 'auto' },
        { name: 'status', type: 'auto' }
    ]
})