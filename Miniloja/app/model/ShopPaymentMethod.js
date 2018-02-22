/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 11/5/15
 * Time: 2:16 PM
 */


Ext.define('Miniloja.model.ShopPaymentMethod', {
    extend: 'Miniloja.model.Base',
    alias: 'model.shopPaymentMethod',
    startParam: 'offset',
    fields: [
        { name: 'shopID', type: 'auto' },
        { name: 'methodID', type: 'auto' },// Salva o ID do PaymentSystem, usado para processar o pedido
        { name: 'methodTitle', type: 'auto' },
        { name: 'methodDescription', type: 'auto' },
        { name: 'editWindow', type: 'auto' },
        { name: 'systemWindow', type: 'auto' },
        { name: 'systemLogo', type: 'auto' }
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'shopmanager/paymentmethods/read/',
            update: 'shopmanager/paymentmethods/update/',
            create: 'shopmanager/paymentmethods/create/',
            destroy: 'shopmanager/paymentmethods/destroy/'
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