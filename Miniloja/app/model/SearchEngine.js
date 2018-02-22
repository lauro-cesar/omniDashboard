Ext.define('Miniloja.model.SearchEngine', {
	extend: 'Ext.data.Model',
	alias: 'model.search_engine',
    fields: [
		{ name: 'searchString', type: 'auto' },
		{ name: 'searching', type:'bool',defaultValue:false}
    ]
});