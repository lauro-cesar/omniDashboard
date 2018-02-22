/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 5/14/15
 * Time: 2:09 AM
 */

Ext.define('Miniloja.TextRequired', {
     extend: 'Ext.data.field.Field',
     alias: 'data.field.textrequired',
     validators: {
         type:'length',
         min:2,
         max:128,
         emptyMessage: 'O campo não pode ser vazio'
     }
 });

Ext.define('Miniloja.model.Base', {
    extend: 'Ext.data.Model',
     requires: [
        'Ext.data.Field'
    ],
    validators:{
        shopID: { type:'length',min:1,max:128,emptyMessage: 'Por favor, selecione a loja'}
    },
    fields: [
        { name: 'id'},
        { name: 'isSaved', type:'bool',defaultValue:true},
        { name: 'loaded', type:'bool', defaultValue:true},
        { name: 'workgroup'},
        { name: 'wizardStep',defaultValue:'welcome'},
        { name: 'isReadyToPublish', type:'bool',defaultValue:false},
        { name: 'isPublished', type:'bool',defaultValue:false},
		{ name: 'isInReview', type:'bool',defaultValue:false},
        { name: 'publishStatus',type:'string', defaultValue:'Em edição...'}
    ],

    isSelected:function(){
    	return true
    },
    schema: {
        namespace: 'Miniloja.model'
    }
});


