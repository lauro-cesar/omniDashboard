
Ext.define('Miniloja.model.EshopItemModerador', {
    extend: 'Miniloja.model.Base',
    alias: 'model.eshopitemmoderador',
    startParam: 'offset',
    fields: [
        { name: 'shopID', type: 'auto' },
        { name: 'shopName'},
        { name: 'itemID', type: 'auto' },
        { name: 'slug', type: 'auto' },
        { name: 'permalink', type: 'auto' },
        { name: 'itemTitle', type: 'auto' },
        { name: 'itemDefaultImage'},
        { name: 'itemShortUrl', type: 'auto' },
        { name: 'inStock' , type: 'bool'},
        { name: 'totalInStock', type: 'int',defaultValue:0 },
        { name: 'freeShipping', type: 'bool',defaultValue:false },
        { name: 'itemIsDigital', type: 'bool'},
        { name: 'isOnDemand', type: 'bool'},
        { name: 'enableResale', type: 'bool',defaultValue:false},
        { name: 'isAuthorizedToPublish', type:'bool', defaultValue:false},
        { name: 'hideFromModerator', type:'bool', defaultValue:false},
        { name: 'loaded', type:'bool'},
        { name: 'itemPrice'},
        { name: 'bonusFeeLabel'},
        { name: 'rewardFeeLabel'},
        { name: 'rewardLabel'},
        { name: 'rewardTotalLabel'},
        { name: 'defaultReward'},
        { name: 'defaultRewardValuePerSale'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'inventorymanager/items/moderador/read/',
            update: 'inventorymanager/items/moderador/update/'
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