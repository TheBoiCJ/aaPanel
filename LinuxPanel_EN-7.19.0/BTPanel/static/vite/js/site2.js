import{_ as s}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185";import{by as t}from"./page_layout.js?v=1732601582185";import{d as a}from"./public.js?v=1732601582185";import{s as e}from"./site3.js?v=1732601582185";import{d as o,W as i,M as m,O as r,P as l,R as n}from"./vue.js?v=1732601582185";import{bo as p}from"./naive.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";const u={class:"p-20px"},_=o({__name:"site",props:{list:{}},setup(o){const _=o,d=t(),{t:c}=i(),{table:f,columns:j}=a([{key:"name",title:c("Waf.Overview.index_18"),ellipsis:{tooltip:!0}},{key:"status",title:c("Waf.Overview.index_19"),width:"40%",render:(s,t)=>m(p,{value:s.status,size:"small",onUpdateValue:async a=>{a&&(await e({siteName:s.name,obj:"open"}),f.data.splice(t,1),d.getNewInfo())}},null)}]);return f.data=_.list.map((s=>({name:s,status:!1}))),(t,a)=>{const e=s;return r(),l("div",u,[m(e,{"max-height":470,data:n(f).data,columns:n(j)},null,8,["data","columns"])])}}});export{_ as default};