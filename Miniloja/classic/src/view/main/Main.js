Ext.define('Miniloja.view.main.Main', {
    extend: "Ext.container.Viewport",
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Miniloja.view.main.MainController',
        'Miniloja.view.main.MainModel'
    ],
    controller: 'main',
    viewModel: 'main',
    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },
    layout:'border',
    items: [{
        xtype:'dashboard',
        region:'center'
    }]
});
