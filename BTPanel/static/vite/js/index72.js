import{l as a,ah as e,ai as l,S as s,U as t,V as o,D as i,Z as n,ag as u,F as r,a8 as d,L as p,af as v}from"./vue.js?v=1721298337096";import{a as c,_ as f}from"./Tabs.js?v=1721298337096";import{a as m}from"./index.js?v=1721298337096";const y=m(a({__name:"index",props:e({data:{},options:{default:()=>[]}},{value:{},valueModifiers:{}}),emits:e(["click"],["update:value"]),setup(a,{expose:e,emit:m}){const y=l(a,"value"),b=m,k=()=>{var a,e;y.value&&(null==(e=null==(a=_[y.value])?void 0:a.init)||e.call(a))},_={};return e({init:k,onConfirm:async a=>{var e,l;y.value&&await(null==(l=null==(e=_[y.value])?void 0:e.onConfirm)?void 0:l.call(e,a))}}),(a,e)=>{const l=f,m=c;return s(),t(m,{value:y.value,"onUpdate:value":e[0]||(e[0]=a=>y.value=a),class:"bt-tabs h-full",type:"card",placement:"top"},{default:o((()=>[i(a.$slots,"default",{},void 0,!0),(s(!0),n(r,null,u(a.options,(e=>(s(),t(l,{key:e.key,name:e.key,tab:e.label,"display-directive":e.isLazy?"show:lazy":"if","tab-props":{onClick:a=>{((a,e)=>{b("click",a),e===y.value&&k()})(a,e.key)}}},{default:o((()=>[e.component?(s(),t(d(e.component),p({key:0,ref_for:!0,ref:a=>((a,e)=>{_[e]=a})(a,e.key)},{...a.data,...e.data}),null,16)):v("",!0)])),_:2},1032,["name","tab","display-directive","tab-props"])))),128))])),_:3},8,["value"])}}}),[["__scopeId","data-v-b9f1da4e"]]);export{y as _};