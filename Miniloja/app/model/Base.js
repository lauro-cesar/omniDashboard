
Ext.define('Miniloja.model.Base', {
    extend: 'Ext.data.Model',
     requires: [
        'Ext.data.Field'
    ],
    fields: [
        { name: 'id'},
        { name: 'loaded', type:'bool', defaultValue:false}
    ],
    schema: {
        namespace: 'Miniloja.model'
    }
});


