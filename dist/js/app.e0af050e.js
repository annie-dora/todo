(function(e){function t(t){for(var a,s,o=t[0],u=t[1],l=t[2],c=0,m=[];c<o.length;c++)s=o[c],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-todo")],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("br"),n("div",{staticClass:"form-inline",attrs:{action:"#"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.item.name,expression:"item.name"}],staticClass:"form-control",attrs:{type:"text",id:"form-name",placeholder:"Name"},domProps:{value:e.item.name},on:{input:function(t){t.target.composing||e.$set(e.item,"name",t.target.value)}}}),n("div",{staticClass:"form-grp"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.item.status,expression:"item.status"}],staticClass:"form-control",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.item,"status",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Status...")]),n("option",{attrs:{value:"completed"}},[e._v("Completed")]),n("option",{attrs:{value:"not-completed"}},[e._v("Not completed")])])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.item.date,expression:"item.date"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Date"},domProps:{value:e.item.date},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addItem(t)},input:function(t){t.target.composing||e.$set(e.item,"date",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.item.task,expression:"item.task"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Task"},domProps:{value:e.item.task},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addItem(t)},input:function(t){t.target.composing||e.$set(e.item,"task",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.item.assigned,expression:"item.assigned"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Assigned"},domProps:{value:e.item.assigned},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addItem(t)},input:function(t){t.target.composing||e.$set(e.item,"assigned",t.target.value)}}}),n("button",{staticClass:"btn btn-dark",on:{click:e.addItem}},[n("i",{staticClass:"fas fa-plus"})])]),n("br"),n("br"),n("table",{staticClass:"table table-striped table-bordered "},[e._m(0),e._l(e.items,(function(t,a){return n("tr",[n("td",[t.edit?n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"item.name"}],attrs:{type:"text"},domProps:{value:t.name},on:{keyup:function(n){if(!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.edit=!t.edit},input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}}):n("span",[e._v(e._s(t.name)+" ")])]),n("td",[e._v(" "+e._s(t.status)+" ")]),n("td",[t.edit?n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"item.date"}],attrs:{type:"text"},domProps:{value:t.date},on:{keyup:function(n){if(!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.edit=!t.edit},input:function(n){n.target.composing||e.$set(t,"date",n.target.value)}}}):n("span",[e._v(e._s(t.date)+" ")])]),n("td",[t.edit?n("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"item.task"}],attrs:{type:"text"},domProps:{value:t.task},on:{keyup:function(n){if(!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.edit=!t.edit},input:function(n){n.target.composing||e.$set(t,"task",n.target.value)}}}):n("span",[e._v(e._s(t.task)+" ")])]),n("td",[t.edit?n("input",{directives:[{name:"model",rawName:"v-model",value:t.assigned,expression:"item.assigned"}],attrs:{type:"text"},domProps:{value:t.assigned},on:{keyup:function(n){if(!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.edit=!t.edit},input:function(n){n.target.composing||e.$set(t,"assigned",n.target.value)}}}):n("span",[e._v(e._s(t.assigned)+" ")])]),n("td",[n("button",{staticClass:"btn btn-info",on:{click:function(e){t.edit=!t.edit}}},[n("i",{staticClass:"far fa-edit"})]),n("button",{staticClass:"btn btn-danger",on:{click:function(t){return e.removeItem(a)}}},[n("i",{staticClass:"far fa-trash-alt"})])])])}))],2)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",{staticClass:"thead-light"},[n("th",[e._v("Name")]),n("th",[e._v("Status")]),n("th",[e._v("Due Date")]),n("th",[e._v("Task Type")]),n("th",[e._v("Assigned To")]),n("th",[e._v("Edit/Del")])])}],u=(n("a434"),n("b0c0"),{data:function(){return{item:{name:"",status:"",date:"mm-dd-yy",task:"",assigned:"",edit:!1},items:[]}},methods:{addItem:function(){this.item.name&&this.item.status&&this.item.date&&this.item.task&&this.item.assigned?(this.items.push(this.item),this.item={}):alert("fields can not be empty")},removeItem:function(e){this.items.splice(e,1)}}}),l=u,d=n("2877"),c=Object(d["a"])(l,s,o,!1,null,null,null),m=c.exports,p={components:{"app-todo":m}},f=p,v=(n("034f"),Object(d["a"])(f,i,r,!1,null,null,null)),y=v.exports,g=n("8c4f");a["a"].use(g["a"]);var k=[{path:"/"}],h=new g["a"]({mode:"history",base:"/",routes:k}),b=h;a["a"].config.productionTip=!1,new a["a"]({router:b,render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.e0af050e.js.map