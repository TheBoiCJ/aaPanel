import{_ as e}from"./index96.js?v=1732601582185";import{bd as a,f as t,m as s,j as l,I as r}from"./page_layout.js?v=1732601582185";import{s as n}from"./file.js?v=1732601582185";import{_ as o}from"./index.vue_vue_type_script_setup_true_lang14.js?v=1732601582185";import{cb as u,bL as i,bh as p,aa as c}from"./naive.js?v=1732601582185";import{d as m,r as f,O as v,P as d,M as _,Y as h,Q as w,R as j,ac as b,c as g}from"./vue.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";import"./public.js?v=1732601582185";import"./theme-chrome.js?v=1732601582185";const x={class:"p-20px"},y={class:"w-160px"},C=m({__name:"rewrite",props:{fileContent:{default:""},filename:{default:""},rlist:{default:()=>[]}},emits:["close"],setup(m,{emit:C}){const k=m,R=C,{filename:U,rlist:I,fileContent:P}=k,Y=a(),A=f(null),H=f(null),L=f([]),M=f(""),N=f(P),O=e=>{if("0.default"===e||"0.Current"===e)return U;{const{webserver:e}=Y;return"/www/server/panel/rewrite/".concat("openlitespeed"===e?"apache":e,"/").concat(H.value,".conf")}},Q=async()=>{const{message:e}=await n({path:U,data:N.value,encoding:"utf-8"});t(e)&&s.success(e.msg),R("close")},S=e=>{var a;M.value=O(e),null==(a=A.value)||a.getContent()};return(()=>{const e=r(I)?I:[];L.value=u(e).map((e=>({label:e,value:e}))),e.length&&(H.value=e[0],M.value=O(e[0]))})(),(a,t)=>{const s=i,r=l,n=p,u=c,m=e;return v(),d("div",x,[_(n,{class:"items-center mb-12px"},{default:h((()=>[w("div",y,[_(s,{value:j(H),"onUpdate:value":[t[0]||(t[0]=e=>b(H)?H.value=e:null),S],options:j(L)},null,8,["value","options"])]),w("div",null,[t[4]||(t[4]=w("span",null,"Rewrite rule converter: ",-1)),_(r,{href:"https://www.bt.cn/Tools",target:"_blank"},{default:h((()=>t[3]||(t[3]=[g("Apache to Nginx")]))),_:1})])])),_:1}),_(o,{ref_key:"configRef",ref:A,path:j(M),"onUpdate:path":t[1]||(t[1]=e=>b(M)?M.value=e:null),value:j(N),"onUpdate:value":t[2]||(t[2]=e=>b(N)?N.value=e:null),height:350,"show-tips":!1},null,8,["path","value"]),_(n,{class:"items-center mt-12px"},{default:h((()=>[_(u,{type:"primary",onClick:Q},{default:h((()=>t[5]||(t[5]=[g("Save")]))),_:1})])),_:1}),_(m,{class:"mt-24px"},{default:h((()=>t[6]||(t[6]=[w("li",null,"Please select your application.",-1),w("li",null," If the site cannot be accessed after the rewrite rules set, please try to reset to default. ",-1),w("li",null,"You are able to modify rewrite rules, just save it after modification.",-1)]))),_:1})])}}});export{C as default};