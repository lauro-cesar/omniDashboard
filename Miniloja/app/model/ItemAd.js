/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 10/10/15
 * Time: 8:02 AM
 */





Ext.define('Miniloja.model.ItemAd', {
    extend: 'Miniloja.model.Base',
    alias: 'model.itemad',
    startParam: 'offset',
    fields: [
        { name: 'shopID' },
        { name: 'itemID' },
        { name: 'viewSize', type: 'auto' },
        { name: 'adTitle', type: 'textrequired' },
        { name: 'adBaitText', type: 'textrequired' },
        { name: 'adContentText', type: 'string'},
        { name: 'valorDoAnuncio', type: 'auto' },
        { name: 'defaultAd', type:'bool'},
        { name: 'asHomePage', type:'bool'},
        { name: 'editavel',type:'bool',value:false},
        { name: 'hits', type: 'auto' },
        { name: 'isRunning', type:'bool'},
        { name: 'reviewMsg'},
        { name: 'hidePublishButton', type:'bool', defaultValue:true},
        { name: 'showReviewMsg', type:'bool', defaultValue:false},
        { name: 'isAuthorizedToPublish', type:'bool',defaultValue:false},
        { name: 'isReadyToPublish', type:'bool', defaultValue:false},
        { name: 'adRemoved', type:'bool'},
        { name: 'views', type: 'auto' },
        { name: 'permalink', type: 'auto' },
        { name: 'previewlink', type: 'auto'},
        { name: 'inFrontPage', type: 'bool',defaultValue:true},
        { name: 'publishMe', type:'bool', defaultValue:false},
        { name: 'showInCatalog', type:'bool', defaultValue:true},
        { name: 'isPublished', type:'bool',defaultValue:false},
        { name: 'publishStatus'}
    ],
    proxy: {
        type: 'ajax',
        startParam: 'offset',
        pageParam: 'page',
        limitParam: 'limit',
        api: {
            read: 'inventorymanager/ads/read/',
            create: 'inventorymanager/ads/create/',
            destroy: 'inventorymanager/ads/destroy/',
            update: 'inventorymanager/ads/update/'
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