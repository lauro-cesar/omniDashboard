/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 3/16/15
 * Time: 5:07 AM
 */


Ext.define('Miniloja.model.EshopItem', {
    extend: 'Miniloja.model.Base',
    alias: 'model.eshopitem',
    startParam: 'offset',
    fields: [
        { name: 'shopID', type: 'auto' },
        { name: 'itemID', type: 'auto' },
        { name: 'slug', type: 'auto' },
        { name: 'inSurvey', type:'bool'},
        { name: 'permalink', type: 'auto' },
        { name: 'itemTitle', type: 'auto' },
        { name: 'itemShortUrl', type: 'auto' },
        { name: 'totalAds'},
        { name: 'itemStatus',type: 'auto'},
        { name: 'publishStatus',type: 'auto'},
        { name: 'freeProduct', type:'bool',defaultValue:false},
        { name: 'useDLCPage', type:'bool',defaultValue:true},
        { name: 'useURLPage', type:'bool',defaultValue:false},
        { name: 'deliveryMethodID'},
        { name: 'itemGlobalCategory', type: 'auto' },
        { name: 'itemIsCollectible', type: 'bool' },
        { name: 'itemIsRefurbished', type: 'bool' },
        { name: 'itemIsUsed', type: 'bool' },
        { name: 'itemIsNew', type: 'bool' },
        { name: 'itemIsDigital', type: 'bool'},
        { name: 'isOnDemand', type: 'bool'},
        { name: 'itemCondition'},
        { name: 'freeShipping', type: 'bool',defaultValue:false },
        { name: 'inFrontPage', type: 'bool' },
        { name: 'itemCode', type: 'auto',defaultValue:"" },
        { name: 'itemBarCode', type: 'auto',defaultValue:""},
        { name: 'itemPrice', type: 'auto',defaultValue:"0.0", convert: function(value,record){
            if(record.get('freeProduct')){
                return '0.0'
            } else {
                return value
            }
        }},
        { name: 'itemPriceFormer', type: 'auto',defaultValue:"0.0" },
        { name: 'itemFormat', type: 'int', defaultValue:1},
        { name: 'itemHeight', type: 'int', defaultValue:0},
        { name: 'itemWidth', type: 'int' ,defaultValue:0},
        { name: 'itemWeigth', type: 'int', defaultValue:0},
        { name: 'itemLength', type: 'int', defaultValue:0},
        { name: 'itemDiameter', type: 'int',defaultValue:0},
        { name: 'daysBeforeShipping', type:'int', defaultValue:1},
        { name: 'hideWarningReseller', type:'bool'},
        { name: 'itemDefaultImage', type:'string'},
        { name: 'itemDefaultImageCaption', type:'string'},
        { name: 'defaultRewardValuePerSale',  defaultValue:"0.0" },
        { name: 'defaultReward', defaultValue:"0.0" },
        { name: 'rewardTotalLabel', defaultValue:"R$ 0,00"},
        { name: 'rewardLabel',defaultValue:"R$ 0,00"},
        { name: 'rewardFeeLabel',defaultValue:"R$ 0,00"},
        { name: 'bonusFeeLabel',defaultValue:"R$ 0,00"},        
        { name: 'percentDiscountValue ', type: 'auto' },
        { name: 'totalClicks', type: 'auto' },
        { name: 'totalResellers'},
        { name: 'totalViews', type: 'auto' },
        { name: 'totalSells', type: 'auto' },
        { name: 'totalInStock', type: 'int',defaultValue:"0"},
        { name: 'shopName'},
        { name: 'locale'},
        { name: 'language'},
        { name: 'wizardStep', defaultValue:'welcome'},
        { name: 'fixedShippingFeePrice', type:'auto'},
        { name: 'fixedShippingFee', type:'bool'},
        { name: 'totalEmCompras', type: 'auto' },
        { name: 'isReadyToPublish', type:'bool',defaultValue:false},
        { name: 'itemDescription',type: 'auto',defaultValue:''},
        { name: 'itemPage',type: 'auto', defaultValue:''},
        { name: 'itemDownloadInstruction',type: 'auto'},
        { name: 'freedownloadPageUrl'},
        { name: 'itemPreDescription', type: 'auto' },
        { name: 'inStock' , type: 'bool'},
        { name: 'inFrontPage', type: 'bool'},
        { name: 'inPause', type:'bool'},
        { name: 'enableResale', type: 'bool',defaultValue:true,convert: function(value,record){
            if(record.get('freeProduct')){
                return false
            } else {
                return value
            }
        }},
        { name: 'showdiscount', type: 'bool'},
        { name: 'deleted', type: 'bool'},
        { name: 'loaded', type:'bool'},
        { name: 'downloadPageID', type:'int'},
        { name: 'downloadPageUrl'},
        { name: 'downloadInstructions'},
        { name: 'downloadLinkEnabled', type:'bool',defaultValue:true},
        { name: 'downloadPageEnabled', type:'bool',defaultValue:false}
          
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'inventorymanager/items/read/',
            create: 'inventorymanager/items/create/',
            destroy: 'inventorymanager/items/destroy/',
            update: 'inventorymanager/items/update/'
        },
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