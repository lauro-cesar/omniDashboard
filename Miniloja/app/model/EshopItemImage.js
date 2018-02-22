/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 4/6/15
 * Time: 5:45 PM
 */


Ext.define('Miniloja.model.EshopItemImage', {
    extend: 'Miniloja.model.Base',
    alias: 'model.eshopitemimage',
    autoLoad: true,
    startParam: 'offset',
    proxy: {
        type: 'ajax',
        api: {
            read: 'inventorymanager/images/read/',
            update: 'inventorymanager/images/update/',
            create: 'inventorymanager/images/create/',
            destroy: 'inventorymanager/images/destroy/'
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
    },
    fields: [
        { name: 'imageUri', defaultValue:'https://lh3.googleusercontent.com/DGdHVBThU31Y726tfL7g0psGlQKPuIfTPjtbBlZHWIKFAxYy-HTfqbssTsQDr5mqG6c5P01KsFvcAwKtdFsN', type: 'auto', convert:function(value,record){
            
            if (record.get('mediaType') === 'IMAGE'){
                return value;
            }

            if (record.get('mediaType') === 'YOUTUBE'){
                return '3fXXGsQdLvo'
            }
        }},
        { name: 'imageCaption', type: 'auto',defaultValue:'Nova midia' },
        { name: 'imageWidth', type: 'int',defaultValue:128},
        { name: 'isDefault', type:'bool'},
        { name: 'numClicks', type: 'auto' },
        { name: 'blobKey', type:'string'},
        { name: 'itemID', type:'string'},
        { name: 'shopID', type:'string'},
        { name: 'mediaType', type:'string',defaultValue:'IMAGE'},
        { name: 'mediaPreview', type:'string', convert: function(value,record){
            if (record.get('mediaType') === 'IMAGE'){
                return Ext.String.format("<img width={1}px src= /photos/serial/gallery_image/{0}/{1}/>",record.get('id'),record.get('imageWidth'));
            }
            if (record.get('mediaType') === 'YOUTUBE'){
                var largura = record.get('imageWidth');
                var altura = ((largura/16) * 9);
                return Ext.String.format('<iframe class="mbr-embedded-video" src="https://www.youtube.com/embed/{0}?rel=0&amp;amp;showinfo=0&amp;autoplay=0&amp;loop=0" width="{1}" height="{2}" frameborder="0" allowfullscreen></iframe>', record.get('imageUri'),largura,altura) 
            }
        }},
        { name: 'hasFile', type:'bool'},
        { name: 'readyToSave',type:'bool',defaultValue:false},
        { name: 'autoShow', type:'bool', defaultValue:true}
    ]
})