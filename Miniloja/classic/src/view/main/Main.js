Ext.define('Miniloja.view.main.Main', {
    extend: "Ext.container.Viewport",
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    reference:'omniMainView',
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
        xtype:'omniDashboard',
        region:'center'
    }]
});
