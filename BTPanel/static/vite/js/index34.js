const __vite__fileDeps=["js/index118.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang6.js?v=1721298337096","js/vue.js?v=1721298337096","js/index.js?v=1721298337096","js/pinia.js?v=1721298337096","css/index34.css?v=1721298337096","js/index100.js?v=1721298337096","js/use-theme-vars.js?v=1721298337096","css/index11.css?v=1721298337096","js/mail.js?v=1721298337096","js/useTableColumns.js?v=1721298337096","js/Progress.js?v=1721298337096","css/useTableColumns.css?v=1721298337096"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{g as t,k as a,h as e,B as s,q as i,r as o,v as l}from"./index.js?v=1721298337096";import{_ as r}from"./index.vue_vue_type_script_setup_true_lang.js?v=1721298337096";import{u as d,_ as n}from"./useTableData.js?v=1721298337096";import{_ as m,b as p}from"./useTableColumns.js?v=1721298337096";import{i as u,j as c,k as f}from"./mail.js?v=1721298337096";import{l as _,ad as w,f as h,P as j,S as k,U as y,V as g,q as b,W as C,a1 as v}from"./vue.js?v=1721298337096";import"./pinia.js?v=1721298337096";import"./Skeleton.js?v=1721298337096";import"./DataTable.js?v=1721298337096";import"./Checkbox.js?v=1721298337096";import"./Ellipsis.js?v=1721298337096";import"./Select.js?v=1721298337096";import"./Tag.js?v=1721298337096";import"./Empty.js?v=1721298337096";import"./omit.js?v=1721298337096";import"./Progress.js?v=1721298337096";const E=_({__name:"index",setup(_){const E=v((()=>l((()=>import("./index118.js?v=1721298337096")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])))),{t:x}=w(),D=h({p:1,size:10}),A=t("Add Forward",{isEdit:!1,row:void 0,onRefresh:()=>{S()}}),P=()=>{A.data.isEdit=!1,A.title="Add Forward",A.show=!0},{table:T,columns:V}=d([{key:"address",title:"Address",ellipsis:{tooltip:!0}},{key:"goto",title:"Goto",ellipsis:{tooltip:!0}},{key:"domain",title:"Domain",ellipsis:{tooltip:!0}},{key:"created",title:"Created"},{key:"modified",title:"Modified"},{key:"active",title:"Status",render:t=>j(m,{value:t.active,size:"small",checkedValue:1,uncheckedValue:0,onUpdateValue:async a=>{await u({user:t.address,forward_user:t.goto,active:a}),t.active=a}},null)},p({width:150,options:t=>[{label:x("Public.Btn.Edit"),onClick:()=>{B(t)}},{label:x("Public.Btn.Del"),onClick:()=>{R(t)}}]})]),B=t=>{A.data.isEdit=!0,A.data.row=t,A.title="Edit BCC",A.show=!0},R=async t=>{e({title:"Delete mail forward",content:"Confirm to delete this mail forward?",onConfirm:async()=>{await f({user:t.address}),S()}})},S=async()=>{try{T.loading=!0;const{message:t}=await c();T.data=a(t)?t:[]}finally{T.loading=!1}},F=()=>{D.p=1,S()};return S(),(t,a)=>{const e=s,l=n,d=r,m=i,p=o;return k(),y(p,{class:"p-16px"},{default:g((()=>[j(d,null,{toolsLeft:g((()=>[j(e,{type:"primary",onClick:P},{default:g((()=>[b("Add Forward")])),_:1})])),toolsRight:g((()=>[j(e,{onClick:F},{default:g((()=>[b("Refresh")])),_:1})])),table:g((()=>[j(l,{loading:C(T).loading,data:C(T).data,columns:C(V)},null,8,["loading","data","columns"])])),_:1}),j(m,{show:C(A).show,"onUpdate:show":a[0]||(a[0]=t=>C(A).show=t),title:C(A).title,data:C(A).data,width:480,"min-height":236,footer:!0,component:C(E)},null,8,["show","title","data","component"])])),_:1})}}});export{E as default};
