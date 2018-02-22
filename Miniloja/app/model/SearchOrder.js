Ext.define('Miniloja.model.SearchOrder', {
	extend: 'Ext.data.Model',
	alias: 'model.search_order',
    fields: [
			{ name: 'searchString', type: 'auto' },
			{ name: 'searching', type:'bool',defaultValue:false}
    ]
});