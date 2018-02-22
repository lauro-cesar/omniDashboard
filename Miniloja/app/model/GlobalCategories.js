/**
 * Company: "HostCERT"
 * User: olarva
 * Date: 10/24/15
 * Time: 12:25 AM
 */



Ext.define('Miniloja.model.GlobalCategoryModel', {
        extend: 'Ext.data.TreeModel',
        sorters: [
            {
                property: 'leaf',
                direction: 'ASC'
            },
            {
                property: 'text',
                direction: 'ASC'
            }
        ],
        fields: [
            {
                name: 'id',
                type: 'auto'
            },
            { name: 'isPublic', type: 'bool'},
            {
                name: 'text'
            },
            {
                name: 'leaf'
            },
            {
                name: 'cls'
            },
            {
                name: 'checked',
                type: 'boolean'
            },
            {
                name:'isPublic',
                type: 'boolean'
            },
            {
                name: 'expanded',
                type: 'boolean'
            }
        ]
    });


