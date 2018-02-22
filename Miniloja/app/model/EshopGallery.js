/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 4/3/15
 * Time: 5:10 AM
 */
Ext.define('Miniloja.model.EshopGallery', {
    extend: 'Ext.data.Model',
    alias: 'model.eshopgallery',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'itemID', type: 'auto' },
        { name: 'url', type: 'auto' },
        { name: 'imageCaption', type: 'auto' }
    ]
})