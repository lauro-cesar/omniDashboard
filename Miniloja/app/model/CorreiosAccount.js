/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 11/9/15
 * Time: 7:37 PM
 */


Ext.define('Miniloja.model.CorreiosAccount', {
    extend: 'Miniloja.model.Base',
    alias: 'model.correiosaccount',
    startParam: 'offset',

    fields: [
        { name: 'shopID', type: 'auto' },
        { name: 'systemDeliveryMethodID', type:'auto'},
        { name: 'accountName', type: 'auto' },
        { name: 'operationName'},
        { name: 'operationCode'},
        { name: 'useAR', type: 'bool'},
        { name: 'useMaoPropria', type:'bool'},
        { name: 'useInsurance', type:'bool'},
        { name: 'accountActive', type: 'bool', defaultValue:true}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'systemmanager/correiosaccount/read/',
            create: 'systemmanager/correiosaccount/create/',
            destroy: 'systemmanager/correiosaccount/destroy/',
            update: 'systemmanager/correiosaccount/update/'
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