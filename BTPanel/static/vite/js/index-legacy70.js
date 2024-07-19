System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1721298337096","./useTableData-legacy.js?v=1721298337096","./index-legacy.js?v=1721298337096","./useTableColumns-legacy.js?v=1721298337096","./useLoading-legacy.js?v=1721298337096","./vue-legacy.js?v=1721298337096","./Skeleton-legacy.js?v=1721298337096","./DataTable-legacy.js?v=1721298337096","./Checkbox-legacy.js?v=1721298337096","./Ellipsis-legacy.js?v=1721298337096","./Select-legacy.js?v=1721298337096","./Tag-legacy.js?v=1721298337096","./Empty-legacy.js?v=1721298337096","./omit-legacy.js?v=1721298337096","./pinia-legacy.js?v=1721298337096","./Progress-legacy.js?v=1721298337096"],(function(e,t){"use strict";var l,a,i,s,n,r,o,u,c,d,g,y,p,h,m,w,f,k,j,b,_,v,x,L;return{setters:[e=>{l=e._},e=>{a=e.u,i=e._},e=>{s=e.u,n=e.M,r=e.L,o=e.dA,u=e.dH,c=e.h,d=e.dI,g=e.dJ,y=e.k,p=e.n,h=e.dK,m=e.B},e=>{w=e.b},e=>{f=e.u},e=>{k=e.l,j=e.S,b=e.Z,_=e.P,v=e.V,x=e.q,L=e.W},null,null,null,null,null,null,null,null,null,null],execute:function(){const t={class:"p-20px"};e("default",k({__name:"index",props:{data:{}},setup(e){const k=e,{sid:C}=k.data,D=s(),B=async()=>{if(null===C)throw p.error("Please select remote database!"),new Error("sid is null");await h({sid:C}),F()},{table:E,columns:S}=a([{key:"name",title:"File name",width:180,ellipsis:{tooltip:{width:"trigger"}}},{key:"filepath",title:"File path",ellipsis:{tooltip:{width:"trigger"}}},{key:"mtime",title:"Backup time",width:150,render:e=>n(e.mtime)},{key:"size",title:"File size",width:80,render:e=>r(e.size)},{key:"sid",title:"Backup location",width:120,render:e=>{let t="--";for(let l=0;l<D.remoteList.length;l++)if(`${D.remoteList[l].id}`===e.sid){t=D.remoteList[l].ps||D.remoteList[l].db_host;break}return t}},w({width:100,options:e=>[{label:"Repair",onClick:()=>{o({text:"Overwrite the data",title:"Overwrite the data",content:`Data will be overwritten using [${e.name}], Do you want to continue?`,onConfirm:async({hide:t})=>{if(null===C)throw new Error("sid is null");await u({file:e.filepath,sid:C}),D.setRefresh(!0),t()}})}},{label:"Del",onClick:()=>{c({title:"Delete backup",content:`Whether to delete the [${e.name}] backup`,onConfirm:async({hide:t})=>{await d({file:e.filepath}),F(),t()}})}}]})]),{loading:T,setLoading:z}=f(),F=async()=>{try{z(!0);const{message:e}=await g();E.data=y(e)?e:[]}finally{z(!1)}};return F(),(e,a)=>{const s=m,n=i,r=l;return j(),b("div",t,[_(r,null,{toolsLeft:v((()=>[_(s,{type:"primary",onClick:B},{default:v((()=>[x("Backup")])),_:1})])),table:v((()=>[_(n,{"max-height":400,loading:L(T),columns:L(S),data:L(E).data},null,8,["loading","columns","data"])])),_:1})])}}}))}}}));
