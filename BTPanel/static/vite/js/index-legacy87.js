System.register(["./index-legacy.js?v=1721298337096","./vue-legacy.js?v=1721298337096"],(function(e,n){"use strict";var t,a,c,u,l;return{setters:[e=>{t=e.aW},e=>{a=e.l,c=e.d,u=e.k,l=e.P}],execute:function(){e("_",a({functional:!0,props:{value:{type:[String,Number,Boolean],default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},onChange:[Function,Array],showText:{type:Boolean,default:!0},checkedLabel:{type:String,default:"Running"},uncheckedLabel:{type:String,default:"Stop"}},setup(e){const n=c(e,"value");function a(n){const{"onUpdate:value":a,onChange:c,onUpdateValue:u}=e;a&&t(a,n),u&&t(u,n),c&&t(c,n)}return{checked:u((()=>n.value===e.checkedValue)),onClick:function(){n.value!==e.checkedValue?a(e.checkedValue):a(e.uncheckedValue)}}},render(){const{checked:e}=this;return l("div",{class:"inline-flex gap-2px items-center cursor-pointer",onClick:()=>{this.onClick()}},[this.showText?l("span",{class:e?"text-primary":"text-error"},[e?this.checkedLabel:this.uncheckedLabel]):"",l("span",{class:["iconfont",e?"icon-start":"icon-stop"]},null)])}}))}}}));
