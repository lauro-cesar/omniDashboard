Ext.define('Miniloja.model.base.OmniModel', {
    extend: 'Ext.data.Model',
    requires: [
        'Miniloja.view.main.shared.TextRequiredValidator',
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