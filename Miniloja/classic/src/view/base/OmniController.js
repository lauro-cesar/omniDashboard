Ext.define('Miniloja.view.base.OmniController', {
    extend: 'Ext.app.ViewController',
    defaultTasKQueue:['checkUserSettings','runRoute','unMask'],

    init:function(){
        Ext.fly('appLoadingIndicator').hide();
        this.getView().mask("Starting OmniEshops...");
        // this.getView().fireEvent("boot");
        var record = me.getViewModel().getdata().userSettings;
        if(!record){
            console.log("Nao tem user");
        } else {
            console.log(record)
        }

        // var taskList = Ext.Array.clone(me.defaultTasKQueue);
        // me.runNextTask(taskList);
        // this.fireEvent("boot");
    },
    
    onUnMask:function(taskList){
        var me=this;
        console.log("Running Umask..");
        me.omniMainView().unmask();
        me.runNextTask(taskList);
    },
    runNextTask:function(taskList){
        var me=this;
        // console.log("Running Tasks..");
        // console.log(taskList.length);
        // console.log(me.omniMainView());
        // console.log(me.getView());
        if(taskList.length > 0) {
            var newTask = taskList.shift();
            if(newTask){
                me.getView().fireEvent(newTask,taskList);
            }
        }
    },
    onCheckUserSettings:function(taskList){

        var record = me.getViewModel().getdata().omniSettings;

        var omniDashBoard = Ext.create('widget.omniDashboard',{
            region:'center',
            session:true,
            links: {
                userSettings: record || {
                    type: 'OmniSetting',
                    create: true
                }
            }
        });
        this.omniMainView().add(omniDashBoard);    
        console.log(userSettings);
        me.runNextTask(taskList);
    },
    onRunRoute:function(taskList){
        console.log("Running Route");
        console.log(taskList);
        me.runNextTask(taskList);
    },
    omniMainView:function(){
        var me= this;
        var omniView = me.getView();
        // console.log(omniView);
        return omniView
    },
    omniDashBoard:function(){
        return this.lookupReference(this.dashboardReference);
    },
    onOpenApp:function(xtype){
        me= this;
        console.log(xtype);

        var app = me.omniDashBoard().down(xtype);
        if(app){
            me.omniDashBoard().getLayout().setActiveItem(app);
        }
    },
    onMetaChange:function(store,meta){
        // console.log("Mala");
        // console.log(meta);
    },
    onBeforeloadSession:function(store, operation, eOpts){},
    onSessionException:function(connection,response, operation, eOpts ){},
    
    onMainReady:function(mainView){
        var me=this;
        Ext.fly('appLoadingIndicator').hide();
        var taskList = Ext.Array.clone(me.defaultTasKQueue);
        me.runNextTask(taskList);
        me.omniMainView().mask("Starting OmniEshops...");

    },
    onLoadSettings:function(store,records, successful, operation, eOpts) {        
        var me=this;
        console.log("Settings Loaded...");
        // me.omniMainView().mask("Settings loaded...");

    },
    onLoadTasks:function(store,records, successful, operation, eOpts){
        console.log("Running Tasks");
    },
    onLoadSession:function(store,records, successful, operation, eOpts){
        this.getViewModel().setData({'operation':operation});
        this.getViewModel().setData({'redirect_to':window.location.href});   
        console.log("Running Session");   
        // console.log( this.getViewModel().getData() );
        // console.log(operation);

        if(!operation.success){
            // this.getViewModel().setData({'showLoginScreen':false});
            // Ext.Msg.alert('Erro ao conectar', 'Nao consegui conectar...');
        } else {
            // this.getViewModel().setData({'showLoginScreen':false});
            if(operation._response.loginRequired) {
                window.location = Ext.String.format("{0}?login_callback={1}",operation._response.login_url,window.location.href);
            } 
        }
    },
    onBoot:function(){
        console.log("Rodando o Boot");
        var me=this;
        var taskList = Ext.Array.clone(me.defaultTasKQueue);
        me.runNextTask(taskList);
    },
    onAccountSignIn:function(){
        this.getViewModel().getStore('omniSession').load();
    },
    onRedirectTO:function(appid){
      this.redirectTo(appid,'force','replace');
    }
});