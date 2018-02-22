Ext.define('Miniloja.model.UserSupportMsg', {
    extend: 'Miniloja.model.Base',
    alias: 'model.usersupportmsg',
    startParam: 'offset',
    fields: [
        { name: 'parentID', type: 'auto' },
        { name: 'accountID', type: 'auto' },
        { name: 'replyEmail', type:'auto'},
        { name: 'replyPhone', type:'auto'},
        { name: 'msgTitle', type:'auto'},
        { name: 'msgContent', type: 'auto' },
        { name: 'read', type: 'bool' },
        { name: 'receiveid', type: 'bool' },
        { name: 'closed', type: 'bool' }
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'systemmanager/usersupportmsgs/read/',
            create: 'systemmanager/usersupportmsgs/create/',
            update: 'systemmanager/usersupportmsgs/update/'
        },
        reader: {
            type: 'json',
            rootProperty: 'itens',
            messageProperty: 'msg'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            rootProperty: 'itens'
        }
    }
})