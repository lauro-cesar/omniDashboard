/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 6/30/15
 * Time: 3:00 AM
 */

Ext.define('Miniloja.model.EshopCatalog', {
    extend: 'Miniloja.model.Base',
    alias: 'model.eshopcatalog',
    startParam: 'offset',
    fields: [
        { name: 'sellerID'},
        { name: 'esellerID'},
        { name: 'shopID', type: 'auto'},
        { name: 'catalogID', type: 'auto' },
        { name: 'deleted', type: 'bool', defaultValue:false},
        { name: 'percentRewardValuePerSale', type: 'auto' },
        { name: 'defaultRewardValuePerSale', type: 'auto' },
        { name: 'shopName', type: 'auto' },
        { name: 'catalogName', type: 'auto' },
        { name: 'itemID', type: 'auto' },
        { name: 'itemTitle', type: 'auto' },
        { name: 'itemStatus'},
        { name: 'inFrontPage', type: 'bool', defaultValue:false },
        { name: 'totalClicks', type: 'int' , defaultValue:0},
        { name: 'totalViews', type: 'int' , defaultValue:0},
        { name: 'totalSells', type: 'int' , defaultValue:0},
        { name: 'totalEmCompras', type: 'int', defaultValue:0 },
        { name: 'itemDefaultImage', type:'auto',defaultValue:'https://lh3.googleusercontent.com/cAHmkIEDj6TUReCntqQjmbQ_M9Bfnvjmql2MJ7kAkvTSu9zbpCWtN7uqgOfTH5NMN08ygooQSPAMsEVls6rnBg'},
        { name: 'inStock' , type: 'bool', defaultValue:false}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'shopmanager/catalogmanager/myitems/read/',
            create: 'shopmanager/catalogmanager/myitems/create/',
            destroy: 'shopmanager/catalogmanager/myitems/destroy/',
            update: 'shopmanager/catalogmanager/myitems/update/'
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