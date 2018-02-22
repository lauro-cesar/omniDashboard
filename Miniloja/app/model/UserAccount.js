/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 3/1/15
 * Time: 3:44 AM
 */
Ext.define('Miniloja.model.UserAccount', {
    extend: 'Miniloja.model.Base',
    alias: 'model.useraccount',
    fields: [
        { name: 'avatar_url', type: 'auto' },
        { name: 'email', type: 'auto' },
        { name: 'link', type: 'auto' },
        { name: 'locale', type: 'auto' },
        { name: 'language', type: 'auto' },
        { name: 'username', type: 'auto' },
        { name: 'supportID'}
        ],
    proxy: {
        type: 'localstorage',
        id:'omnieshops-UserAccount',
        reader: {
            type: 'json',
            rootProperty: 'itens',
            messageProperty: 'msg'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            rootProperty: 'itens'
        }
    }
})