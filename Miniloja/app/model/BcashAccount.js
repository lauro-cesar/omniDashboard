/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 7/16/15
 * Time: 4:21 PM
 */

Ext.define('Miniloja.model.BcashAccount', {
    extend: 'Miniloja.model.BasePayment',
    alias: 'model.bcashaccount',
    startParam: 'offset',
    fields: [
        { name: 'accountName', type: 'auto' },
        { name: 'accountCode', type: 'auto', defaultValue:'' },
        { name: 'acountSellerEmail', type: 'auto', defaultValue:'' },
        { name: 'accountToken', type: 'auto', defaultValue:'' },
        { name: 'accountActive', type: 'bool'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'systemmanager/bcashaccounts/read/',
            create: 'systemmanager/bcashaccounts/create/',
            destroy: 'systemmanager/bcashaccounts/destroy/',
            update: 'systemmanager/bcashaccounts/update/'
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