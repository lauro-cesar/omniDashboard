/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 7/22/15
 * Time: 5:36 AM
 */


Ext.define('Miniloja.model.PaymentSystem', {
    extend: 'Miniloja.model.Base',
    alias: 'model.paymentsystem',
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
    ],
    proxy: {
        type: 'ajax',
        api: {
            read: 'shopmanager/paymentsystems/userread/'
        },
        extraParams:{
          'active':'True'
        },
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        reader: {
            type: 'json',
            rootProperty: 'itens'
        },
        writer: {
            type: 'json',
            rootProperty: 'itens'
        }
    }
})