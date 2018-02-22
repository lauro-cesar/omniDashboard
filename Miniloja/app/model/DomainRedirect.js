/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 9/14/15
 * Time: 7:09 AM
 */



Ext.define('Miniloja.model.DomainRedirect', {
    extend: 'Miniloja.model.Base',
    alias: 'model.domainredirect',
    fields: [
        { name: 'shopID', type: 'auto' },
        { name: 'fqdn', type: 'auto' },
        { name: 'SSLCertificateFile' },
        { name: 'SSLCertificateKeyFile' },
        { name: 'SSLCertificateChainFile' },
        { name: 'isDeployed' },
        { name: 'price' }
    ],
    proxy: {
        type: 'ajax',
         api: {
            read: 'shopmanager/domainsredirect/read/'
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