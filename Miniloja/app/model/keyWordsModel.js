/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 9/26/15
 * Time: 7:34 PM
 */


//Ext.define('Miniloja.model.KeyWordsModel', {
//    extend: 'Miniloja.model.BaseTree',
//    alias: 'model.keywordsmodel',
//    fields: [
//        {
//            name: 'text'
//        },
//        {
//            name: 'leaf',
//        },
//        {
//            name: 'cls'
//        },
//        {
//            name: 'checked'
//        },
//        {
//            name: 'expanded'
//        }
//    ],
//    sorters: [
//        {
//            property: 'leaf',
//            direction: 'ASC'
//        },
//        {
//            property: 'text',
//            direction: 'ASC'
//        }
//    ],
//    proxy: {
//        type: 'ajax',
//        api: {
//            read: '/shopmanager/keywords/read/',
//        },
//        reader: {
//            type: 'json',
//            rootProperty: 'itens'
//        },
//        writer: {
//            type: 'json',
//            rootProperty: 'itens'
//        }
//    }
//})