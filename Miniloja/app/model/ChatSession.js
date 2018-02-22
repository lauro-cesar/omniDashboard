Ext.define('Miniloja.model.ChatSession', {
    extend: 'Ext.data.Model',
    alias: 'model.chatsession',
    fields: [
        { name: 'id'},
        { name: 'userName'},
        { name: 'avatar_url'},
        { name: 'from', type:'auto', defaultValue:'Mensagem enviada por'},
        { name: 'to', type:'auto', defaultValue:'Mensagem enviada para'},
        { name: 'message',type:'auto',defaultValue:'Mensagem' },

        { name: 'msgID', type:'auto', defaultValue:'...'},
        { name: 'send', type: 'bool', defaultValue:false},
        { name: 'read', type: 'bool', defaultValue:false}
    ]
})