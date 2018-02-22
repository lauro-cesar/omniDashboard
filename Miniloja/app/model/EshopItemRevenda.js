/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 7/1/15
 * Time: 4:31 AM
 */


Ext.define('Miniloja.model.EshopItemRevenda', {
    extend: 'Miniloja.model.Base',
    alias: 'model.eshopitemrevenda',
    startParam: 'offset',
    groupField: 'shopID',
    remoteSort: true,
    fields: [
        { name: 'shopID', type: 'auto' },
        { name: 'itemID', type: 'auto' },
        { name: 'shopName', type: 'auto' },
        { name: 'shopLogo', type: 'auto' },
        { name: 'inSurvey', type: 'bool'},
        { name: 'permalink', type: 'auto'},
        { name: 'itemTitle', type: 'auto' },
        { name: 'freeShipping', type: 'bool' },
        { name: 'percentRewardValuePerSale', type: 'auto' },
        { name: 'defaultRewardValuePerSale', type: 'auto' },
        { name: 'itemDefaultImage', type:'auto'},
        { name: 'bonusFeeLabel'},   
        { name: 'totalClicks', type: 'auto' },
        { name: 'totalResellers'},
        { name: 'totalViews', type: 'auto' },
        { name: 'totalSells', type: 'auto' },
        { name: 'totalInStock', type: 'int' },
        { name: 'tipo' }
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'catalogmanager/itemrevenda/read/',  
            create: 'catalogmanager/itemrevenda/create/',
            update: 'catalogmanager/itemrevenda/update/',
            destroy: 'catalogmanager/itemrevenda/destroy/'  
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