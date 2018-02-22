/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 3/10/15
 * Time: 3:10 AM
 */

Ext.define('Miniloja.model.EshopTheme', {
    extend: 'Ext.data.Model',
    alias: 'model.eshoptheme',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'auto' },
        { name: 'themeCategory', type:'auto'},
        { name: 'signature', type: 'auto' },
        { name: 'appVersion', type: 'auto' },
        { name: 'thumbnail', type: 'auto' },
        { name: 'description', type: 'auto' },
        { name: 'screenshots_small', type:'string'},
        { name: 'screenshots_large', type:'string'}
    ],
    proxy: {
        startParam: 'offset',
        type: 'ajax',
        api: {
            read: 'templatemanager/templates/read/'
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