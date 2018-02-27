Ext.define('Miniloja.view.main.Main', {
    extend: "Ext.container.Viewport",
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Miniloja.view.omniDashboard.OmniDashboard'
    ],
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
