System.register(["./useTableColumns-legacy.js?v=1721298337096","./DataTable-legacy.js?v=1721298337096","./vue-legacy.js?v=1721298337096"],(function(e,a){"use strict";var s,t,u,i,p,r,l,g,n,o,c,v,z;return{setters:[e=>{s=e.s,t=e.g},e=>{u=e._},e=>{i=e.l,p=e.ah,r=e.k,l=e.ai,g=e.S,n=e.U,o=e.V,c=e._,v=e.a3,z=e.L}],execute:function(){const a={class:"ml-8px text-14px"};e("_",i({__name:"index",props:p({storeKey:{default:""},pageSizes:{default:()=>[10,20,50,100]}},{page:{},pageModifiers:{},pageSize:{},pageSizeModifiers:{}}),emits:p(["refresh"],["update:page","update:pageSize"]),setup(e,{emit:i}){const p=e,f=i,d=r((()=>{const{storeKey:e}=p;return e?`${e}-page`:""})),m=l(e,"page"),S=l(e,"pageSize"),y=e=>{m.value=e,f("refresh")},h=e=>{m.value=1,S.value=e,x(e),f("refresh")},x=e=>{d.value&&s(d.value,String(e))};return(()=>{if(d.value){const e=t(d.value);e&&(S.value=Number(e))}})(),(e,s)=>{const t=u;return g(),n(t,z(e.$attrs,{page:m.value,"onUpdate:page":[s[0]||(s[0]=e=>m.value=e),y],"page-size":S.value,"onUpdate:pageSize":[s[1]||(s[1]=e=>S.value=e),h],"show-size-picker":"","show-quick-jumper":"","page-sizes":e.pageSizes,"display-order":["pages","size-picker","quick-jumper"]}),{suffix:o((({itemCount:s})=>[c("span",a,v(e.$t("Public.Table.Total",{total:s})),1)])),_:1},16,["page","page-size","page-sizes"])}}}))}}}));