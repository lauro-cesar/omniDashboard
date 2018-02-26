Ext.define('Miniloja.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.MessageBox',
        'Miniloja.view.main.MainController'
    ],
    controller: 'main',
    viewModel: 'main',
    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: false
    },
    tabBarPosition: 'bottom',
    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            items: [{
                xtype: 'panel',
                html:'Not implemented'
            }]
        }
    ]
});
