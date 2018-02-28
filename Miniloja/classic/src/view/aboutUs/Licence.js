Ext.define("Miniloja.view.aboutUs.Licence",{
    extend: "Miniloja.view.base.OmniPanel",
    initComponent: function () {
        this.callParent(arguments);
    },
    alias:'widget.licence',
    xtype:'licence',
    layout:'fit',
    title: 'Licenca de uso',
    iconCls:'x-fa fa-info',
    tooltip: 'Termos e condições de uso',
    items:[
        {
            xtype:'omniPanel',
            html:'Lista de desenvolvedores'
        }
    ]
    });