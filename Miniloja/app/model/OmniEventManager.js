Ext.define('Miniloja.model.OmniEventManager', {
	extend: 'Miniloja.model.Base',
	alias: 'model.omnieventmanager',
    fields: [
		{ name: 'event' },
		{ name: 'action'},
    	{ name: 'eventID'}
    ],
     proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'eventmanager/read/'
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
});