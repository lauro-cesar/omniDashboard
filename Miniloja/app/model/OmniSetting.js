Ext.define('Miniloja.model.OmniSetting', {
    extend: 'Miniloja.model.base.OmniModel',
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
    changeScale:function(){
        
    },
    fields: [
        { name: 'tabPosition', type: 'string',defaultValue:'left' },
        { name: 'tabRotation', type: 'int', defaultValue:0 },
        { name: 'toolBarSize', type:'int',defaultValue:'1'},
        { name: 'navBarSize', type:'int',defaultValue:'1'}
    ]
});