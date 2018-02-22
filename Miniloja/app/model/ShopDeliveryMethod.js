/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 11/9/15
 * Time: 3:58 PM
 */


Ext.define('Miniloja.model.ShopDeliveryMethod', {
    extend: 'Miniloja.model.Base',
    alias: 'model.shopDeliveryMethod',
    startParam: 'offset',
    fields: [
        { name: 'shopID', type: 'auto' },
        { name: 'deliveryMethodID', type: 'auto' },// Salva o ID do PaymentSystem, usado para processar o pedido
        { name: 'methodTitle', type: 'auto' },
        { name: 'methodDescription', type: 'auto' },
        { name: 'deliveryMethodType', type: 'auto' },
        { name: 'systemWindow', type: 'auto' },
        { name: 'systemLogo', type: 'auto' }
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'shopmanager/deliverymethods/read/',
            update: 'shopmanager/deliverymethods/update/',
            destroy: 'shopmanager/deliverymethods/destroy/'
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