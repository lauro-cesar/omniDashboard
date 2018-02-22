Ext.define('Miniloja.model.SearchInventory', {
	extend: 'Ext.data.Model',
	alias: 'model.search_inventory',
    fields: [
			{ name: 'searchString', type: 'auto' },
			{ name: 'searching', type:'bool',defaultValue:false}
    ]
});