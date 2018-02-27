Ext.define('Miniloja.model.OmniTask', {
    extend: 'Miniloja.model.base.OmniModel',
    alias: 'model.omniTask',
    proxy: {
        type: 'localstorage',
        id:'omni-task-queue-storage',
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
        { name: 'eventName', type: 'auto' },
        { name: 'fired', type:'bool', defaultValue:false }
    ]
});