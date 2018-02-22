Ext.define('Miniloja.model.BasePayment', {
	extend: 'Miniloja.model.Base',
    fields: [
		{ name: 'shopID', type: 'auto' },
        { name: 'paymentSystemID', type:'auto'},
        { name: 'accountEnableRedirect', type: 'bool', defaultValue: false},
        { name: 'accountRedirectUrl', type: 'auto', defaultValue:"" },
        { name: 'accountRedirectExtraPostData', type: 'auto', defaultValue:"" },
        { name: 'id'},
        { name: 'isSaved', type:'bool',defaultValue:true},
        { name: 'loaded', type:'bool', defaultValue:true}
    ]
});