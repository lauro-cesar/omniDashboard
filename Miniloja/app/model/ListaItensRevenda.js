/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 11/11/15
 * Time: 1:18 AM
 */





Ext.define('Miniloja.model.ListaItensRevenda', {
    extend: 'Miniloja.model.Base',
    alias: 'model.listaItensRevenda',
    startParam: 'offset',
    fields: [
        { name: 'shopID', type: 'auto' },
        { name: 'itemID', type: 'auto' },
        { name: 'isMyItem', type:'bool'},
        { name: 'slug', type: 'auto' },
        { name: 'inSurvey', type:'bool'},
        { name: 'permalink', type: 'auto' },
        { name: 'itemTitle', type: 'auto' },
        { name: 'itemShortUrl', type: 'auto' },
        { name: 'totalAds'},
        { name: 'itemPages'},
        { name: 'itemGlobalCategory', type: 'auto' },
        { name: 'itemIsCollectible', type: 'bool' },
        { name: 'itemIsRefurbished', type: 'bool' },
        { name: 'itemIsUsed', type: 'bool' },
        { name: 'itemIsNew', type: 'bool' },
        { name: 'itemIsDigital', type: 'bool'},
        { name: 'itemCondition'},
        { name: 'freeShipping', type: 'bool' },
        { name: 'inFrontPage', type: 'bool' },
        { name: 'itemCode', type: 'auto' },
        { name: 'itemPrice', type: 'auto' },
        { name: 'itemHeight', type: 'auto' },
        { name: 'itemWidth', type: 'auto' },
        { name: 'itemWeigth', type: 'auto' },
        { name: 'itemLength', type: 'auto' },
        { name: 'defaultRewardValuePerSale', type: 'auto' },
        { name: 'percentDiscountValue ', type: 'auto' },
        { name: 'itemPriceFormer', type: 'auto' },
        { name: 'totalClicks', type: 'auto' },
        { name: 'totalResellers'},
        { name: 'totalViews', type: 'auto' },
        { name: 'totalSells', type: 'auto' },
        { name: 'totalInStock', type: 'auto' },
        { name: 'shopName'},
        { name: 'fixedShippingFeePrice', type:'auto'},
        { name: 'fixedShippingFee', type:'bool'},
        { name: 'totalEmCompras', type: 'auto' },
        { name: 'itemDescription',type: 'auto'},
        { name: 'itemPreDescription', type: 'auto' },
        { name: 'itemDefaultImage', type:'auto'},
        { name: 'itemDefaultImageCaption', type: 'auto'},
        { name: 'inStock' , type: 'bool'},
        { name: 'inPause', type:'bool'},
        { name: 'enableResale', type: 'bool'},
        { name: 'showdiscount', type: 'bool'},
        { name: 'deleted', type: 'bool'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'inventorymanager/items/revenda/'
        },
        reader: {
            type: 'json',
            rootProperty: 'itens',
            messageProperty: 'msg'
        },
    }
})