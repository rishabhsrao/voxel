define("components/drawer",["jquery"],function(t){"use strict";var e={defaults:{name:"Drawer",elements:{drawerToggle:"[data-js~='voxelDrawerToggle']",drawer:"[data-js~='voxelDrawer']",page:"[data-js~='voxelDrawerPage']"},classnames:{drawerActive:"voxel-drawer--active",drawerToggleActive:"voxel-drawer__toggle--active"},closeOnPageTouch:!0},elements:{},components:{},constants:{states:{OPEN:1,CLOSE:-1,TOGGLE:0}},create:function(e){return this.options=t.extend(!0,{},this.defaults,e),this.init(),this},init:function(){return this.fetch(),this.attach(),this.setup(),this},fetch:function(){return this.elements.drawerToggle=t(this.options.elements.drawerToggle),this.elements.drawer=t(this.options.elements.drawer),this.elements.page=t(this.options.elements.page),this},attach:function(){var e={};return e["click."+this.options.name]=t.proxy(this.toggleDrawer,this),this.elements.drawerToggle.on(e),this},setup:function(){return this},destroy:function(){return this.elements.drawerToggle.off("."+this.options.name),this},toggleDrawer:function(){return this.setDrawerState(this.constants.states.TOGGLE),this.options.closeOnPageTouch&&this.elements.page.off("click.voxel").one({"click.voxel":t.proxy(this.closeDrawer,this)}),this},closeDrawer:function(){this.setDrawerState(this.constants.states.CLOSE)},openDrawer:function(){this.setDrawerState(this.constants.states.OPEN)},setDrawerState:function(t){var e=this.elements.drawer,s=this.elements.drawerToggle;switch(t){case this.constants.states.TOGGLE:e.toggleClass(this.options.classnames.drawerActive),s.toggleClass(this.options.classnames.drawerToggleActive);break;case this.constants.states.CLOSE:e.removeClass(this.options.classnames.drawerActive),s.removeClass(this.options.classnames.drawerToggleActive);break;case this.constants.states.OPEN:e.addClass(this.options.classnames.drawerActive),s.addClass(this.options.classnames.drawerToggleActive)}}};return Object.create(e)}),define("app",["jquery","hljs","components/drawer"],function(t,e,s){"use strict";var n={defaults:{name:"App",elements:{highlight:"[data-js~='highlight']"},classnames:{},useHighlight:!1},elements:{},constants:{},components:{},create:function(e){return this.options=t.extend(!0,{},this.defaults,e),this.init(),this},init:function(){return this.fetch(),this.attach(),this.setup(),this},fetch:function(){return this.elements.highlight=t(this.options.elements.highlight),this},attach:function(){return this},setup:function(){return this.components.drawer=s.create({name:"Voxel.Drawer",closeOnPageTouch:!1}),this.options.useHighlight&&e.initHighlightingOnLoad(),this},destroy:function(){},greet:function(){return"Hello world!"}};return Object.create(n)});