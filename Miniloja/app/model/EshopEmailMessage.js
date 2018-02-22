/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 12/23/15
 * Time: 3:07 PM
 */
Ext.define('Miniloja.model.EshopEmailMessage', {
    extend: 'Miniloja.model.Base',
    alias: 'model.eshopemailmessage',
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'shopmanager/emailmessage/read/',
            create: 'shopmanager/emailmessage/create/',
            update: 'shopmanager/emailmessage/update/'
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
        { name: 'messageSubject', type: 'string', defaultValue:'New Message'},
        { name: 'campainID', type: 'auto', defaultValue: '0'},
        { name: 'messageOrder', type: 'auto' ,defaultValue:'0'},
        { name: 'messageHtmlContent', type: 'auto' ,defaultValue:'0'},
        { name: 'messageDateDelivery', type: 'date', dateFormat: 'Y-m-d'},
        { name: 'messageTimeDelivery', type: 'date', dateFormat: 'H:i'},
        { name: 'messageTemplateID', type: 'auto', defaultValue: '0'},
        { name: 'numRecipients', type: 'auto', defaultValue: '0'},
        { name: 'isRunning', type: 'bool', defaultValue: false},
        { name: 'isComplete', type: 'bool', defaultValue: false},
        { name: 'numBouces', type: 'auto', defaultValue: '0'},
        { name: 'numClicks', type: 'auto', defaultValue: '0'},
        { name: 'totalSend', type: 'auto', defaultValue: '0'},
        { name: 'progress', type: 'float', defaultValue: '0.0'},
        { name: 'isActive', type: 'bool', defaultValue: false}
    ]
})


