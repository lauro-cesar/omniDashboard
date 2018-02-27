Ext.define('Miniloja.model.OmniSession', {
    extend: 'Miniloja.model.base.OmniModel',
    alias: 'model.omniSession',
    proxy: {
        type: 'jsonp',
        callbackKey: 'omniCallBack',
        url:'https://accounts.omnieshops.com/accountmanager/profile/settings/',
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
        { name: 'avatar_url', type: 'auto' },
        { name: 'locale', type: 'auto' },
        { name: 'language', type: 'auto' },
        { name: 'username', type: 'auto' },      
        { name: 'logout_url'},
        { name: 'firstName'},
        { name: 'middleName'},
        { name: 'lastName'},
        { name: 'created', type:'date'}
    ]
});