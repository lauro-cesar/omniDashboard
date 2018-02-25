Ext.define('Miniloja.model.OmniSetting', {
    extend: 'Miniloja.model.Base',
    alias: 'model.omniSetting',
    proxy: {
        type: 'localstorage',
        id:'omni-setting-storage',
        reader: {
            type: 'json',
            rootProperty: 'itens',
            messageProperty: 'msg'
        },
        writer: {
            type: 'json',
            rootProperty: 'itens'
        }
    },
    fields: [
        { name: 'tabPosition', type: 'string',defaultValue:'left' },
        { name: 'tabRotation', type: 'int', defaultValue:0 },
        { name: 'buttonScale', type:'string',defaultValue:'large'}
    ]
});