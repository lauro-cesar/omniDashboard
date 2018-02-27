Ext.define('Miniloja.view.main.shared.TextRequiredValidator', {
    extend: 'Ext.data.field.Field',
    alias: 'data.field.textrequired',
    validators: {
        type:'length',
        min:2,
        max:128,
        emptyMessage: 'O campo não pode ser vazio',
        bind:{
            emptyMessage: '{i18n.Miniloja.view.main.shared.TextRequiredValidator.emptyMessage}'
        }
        
    }
});
