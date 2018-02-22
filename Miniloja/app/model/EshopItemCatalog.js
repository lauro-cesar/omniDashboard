/**
* Company: "DLC Business International  Corp."
* User: Lauro Cesar de Oliveira
* Email: olarva@gmail.com
* Date: 27/09/2016
* Time: 05:40:05
*/
		



Ext.define('Miniloja.model.EshopItemCatalog', {
    extend: 'Miniloja.model.Base',
    alias: 'model.eshopitemcatalog',
    startParam: 'offset',
    fields: [
        { name: 'shopID', type: 'auto' },
        { name: 'catalogID', type: 'auto' },
        { name: 'order', type: 'int',defaultValue:0},
		{ name: 'catalogName', type: 'auto', defaultValue:'Catálogo Geral' },
        { name: 'catalogType', type: 'auto', defaultValue:'default' },
        { name: 'catalogTypeName', type: 'auto', defaultValue:'Catálogo Geral' },
		{ name: 'catalogDescription', type: 'auto' },
		{ name: 'uri', type: 'auto', defaultValue:"/img/background.png" },
		{ name: 'blobKey', type: 'auto' },
 		{ name: 'inFrontPage', type: 'bool', defaultValue:false }
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'catalogmanager/catalogs/read/',
            create: 'catalogmanager/catalogs/create/',
            destroy: 'catalogmanager/catalogs/destroy/',
            update: 'catalogmanager/catalogs/update/'
        },
        reader: {
            type: 'json',
            rootProperty: 'itens',
            messageProperty: 'msg'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            rootProperty: 'itens'
        }
    }
})