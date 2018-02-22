Ext.define('Miniloja.model.MinilojaSubDomain', {
    extend: 'Miniloja.model.Base',
    alias: 'model.minilojaSubDomain',
    fields: [
        { name: 'shopID', type: 'auto' },
		{ name: 'mainDomainID', type: 'auto' },
		{ name: 'resourceID', type: 'auto' },
        
        { name: 'resourceName', type: 'auto' },
        { name: 'isCreated', type: 'bool' },
        { name: 'isDefault', type: 'bool' },
        { name: 'isActive', type: 'bool' },
    	{ name: 'isEnabled', type: 'bool' },
    	{ name: 'domainHits', type: 'int' }
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'shopmanager/subdomains/read/',
            destroy: 'shopmanager/subdomains/destroy/',
            update: 'shopmanager/subdomains/update/',
            create: 'shopmanager/subdomains/create/'
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