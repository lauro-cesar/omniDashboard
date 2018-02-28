Ext.define('Miniloja.model.OmniSite', {
    extend: 'Miniloja.model.base.OmniSiteModel',
    alias: 'model.omniSite',
    proxy: {
        type: 'localstorage',
        id:'omni-sites-storage',
        reader: {
            type: 'json',
            rootProperty: 'itens',
            messageProperty: 'msg'
        },
        writer: {
            type: 'json',
            rootProperty: 'itens'
        }
    }
});