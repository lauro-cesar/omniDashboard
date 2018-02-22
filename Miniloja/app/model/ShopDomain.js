/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 3/11/15
 * Time: 6:57 AM
 */

// https://painel.miniloja.com.br/dashboard/?sponsorID=5755170617032704

Ext.define('Miniloja.model.ShopDomain', {
    extend: 'Miniloja.model.Base',
    alias: 'model.shopdomain',
    fields: [
        { name: 'shopDomainName', type: 'auto' },
        { name: 'resourceName', type: 'auto' },
        { name: 'domainID', type: 'auto' },
        { name: 'resourceType', type: 'auto',defaultValue:"cname" },
        { name: 'resourceTarget', type: 'auto',defaultValue:"lojas.miniloja.com.br" },
        { name: 'shopID', type: 'auto' },
        { name: 'isCreated', type: 'bool' },
        { name: 'isDefault', type: 'bool' },
        { name: 'isActive', type: 'bool' },
        { name: 'isValid', type: 'bool' },
        { name: 'isEnabled', type: 'bool' },
        { name: 'isSubDomain', type: 'bool'},
        { name: 'isDomain', type: 'bool'},
        { name: 'domainHits', type: 'int' },
        { name: 'SSLCertificateFile', type:'string'},
        { name: 'SSLCertificateKeyFile', type:'string'}

    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'shopmanager/domains/read/',
            create: 'shopmanager/domains/create/',
            update: 'shopmanager/domains/update/'
            // destroy: '/shopmanager/domains/destroy/',
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