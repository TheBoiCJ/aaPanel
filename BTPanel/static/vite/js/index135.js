import{l as a,ah as e,ai as l,S as s,U as t,V as n,Z as o,ag as u,F as p,P as i,q as d,a3 as r,a8 as f,af as m}from"./vue.js?v=1721298337096";import{a as v,_ as c}from"./Tabs.js?v=1721298337096";import{_ as b}from"./Ellipsis.js?v=1721298337096";import{a as _}from"./index.js?v=1721298337096";const k=_(a({__name:"index",props:e({data:{default:()=>[]},panePadding:{default:"16px"}},{value:{},valueModifiers:{}}),emits:e(["click-self"],["update:value"]),setup(a,{expose:e,emit:_}){const k=_,y=l(a,"value"),x={},g=()=>{var a,e;y.value&&(null==(e=null==(a=x[y.value])?void 0:a.init)||e.call(a))};return e({init:g}),(a,e)=>{const l=b,_=c,j=v;return s(),t(j,{value:y.value,"onUpdate:value":e[0]||(e[0]=a=>y.value=a),class:"bt-tabs-modal",type:"card",placement:"left","pane-style":{padding:a.panePadding}},{default:n((()=>[(s(!0),o(p,null,u(a.data,(a=>(s(),o(p,null,[!1!==a.show?(s(),t(_,{key:a.key,name:a.key,tab:a.label,"tab-props":{onClick:e=>{a.key===y.value&&(g(),k("click-self"))}}},{tab:n((()=>[i(l,null,{default:n((()=>[d(r(a.label),1)])),_:2},1024)])),default:n((()=>[a.component?(s(),t(f(a.component),{key:0,ref_for:!0,ref:e=>((a,e)=>{x[e]=a})(e,a.key)},null,512)):m("",!0)])),_:2},1032,["name","tab","tab-props"])):m("",!0)],64)))),256))])),_:1},8,["value","pane-style"])}}}),[["__scopeId","data-v-8eb01819"]]);export{k as _};
