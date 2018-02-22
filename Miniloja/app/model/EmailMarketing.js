/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 12/18/15
 * Time: 10:18 AM
 */


Ext.define('Miniloja.model.EmailMarketing', {
    extend: 'Miniloja.model.Base',
    alias: 'model.emailmarketing',
    proxy: {
        type: 'ajax',
        api: {
            read: 'shopmanager/emailcampains/read/',
            update: 'shopmanager/emailcampains/update/',
            create: 'shopmanager/emailcampains/create/'
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
        { name: 'campainName', type: 'string', defaultValue:'New Campain' },
        { name: 'locale', type: 'string', defaultValue:'pt_BR' },
        { name: 'country', type: 'auto', defaultValue: 'Any'},
        { name: 'state', type: 'auto', defaultValue: 'Any'},
        { name: 'city', type: 'auto', defaultValue: 'Any'},
        { name: 'campainType', type: 'auto', defaultValue: '0'},
        { name: 'progress', type: 'float', defaultValue: '0.0'},
        { name: 'campainPrice', type: 'auto', defaultValue: '0'},
        { name: 'numRecipients', type: 'auto', defaultValue: '0'},
        { name: 'grandTotal', type: 'auto', defaultValue: '0'},
        { name: 'isRunning', type: 'bool' ,defaultValue: false},
        { name: 'isPaid', type:'bool' , defaultValue: false},
        { name: 'isComplete', type: 'bool' ,defaultValue:false},
        { name: 'numBouces', type: 'auto', defaultValue: '0'},
        { name: 'numClicks', type: 'auto' ,defaultValue:'0'},
        { name: 'numMsgs', type: 'auto' ,defaultValue:'0'},
        { name: 'totalSend', type: 'auto',defaultValue:'0'},
        { name: 'workgroupID', type: 'auto' },
        { name: 'shopID'},
        { name: 'isActive', type: 'bool', defaultValue: false}
    ]
})