System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1721298337096","./useTableData-legacy.js?v=1721298337096","./index-legacy.js?v=1721298337096","./useLoading-legacy.js?v=1721298337096","./useTableColumns-legacy.js?v=1721298337096","./vue-legacy.js?v=1721298337096","./DataTable-legacy.js?v=1721298337096","./Checkbox-legacy.js?v=1721298337096","./Ellipsis-legacy.js?v=1721298337096","./Select-legacy.js?v=1721298337096","./Tag-legacy.js?v=1721298337096","./Empty-legacy.js?v=1721298337096","./omit-legacy.js?v=1721298337096","./Skeleton-legacy.js?v=1721298337096","./pinia-legacy.js?v=1721298337096","./Progress-legacy.js?v=1721298337096"],(function(e,a){"use strict";var t,l,i,n,s,o,u,c,d,p,g,r,y,m,_,f,j,b,k,h,w,v,x,C,D,z,R;return{setters:[e=>{t=e._},e=>{l=e._},e=>{i=e.u,n=e._},e=>{s=e.u,o=e.L,u=e.h,c=e.dv,d=e.dw,p=e.dx,g=e.dy,r=e.j,y=e.k,m=e.m,_=e.t,f=e.B},e=>{j=e.u},e=>{b=e.b},e=>{k=e.l,h=e.f,w=e.t,v=e.S,x=e.Z,C=e.P,D=e.V,z=e.q,R=e.W},null,null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"p-20px"};e("default",k({__name:"index",props:{data:{}},setup(e){const k=e,{row:S}=k.data,L=s(),T=async()=>{await _(L.type,{id:S.id}),q(),L.setRefresh(!0)},B=h({p:1,limit:10,search:S.id}),{table:E,columns:F}=i([{key:"filename",title:"File name",ellipsis:{tooltip:{width:"trigger"}}},{key:"size",title:"File size",width:90,render:e=>o(e.size)},{key:"addtime",title:"Backup time",width:146},b({width:154,options:e=>[{label:"Repair",onClick:()=>{u({title:"Import Database",content:"Database will be overwritten, continue?",onConfirm:async({hide:a})=>{await c(L.type,{file:e.filename,name:S.name}),L.setRefresh(!0),a()}})}},{label:"Download",onClick:()=>{d(e.filename,e.name)}},{label:"Del",onClick:()=>{u({title:"Delete backup file",content:"Are you sure to delete backup file?",onConfirm:async({hide:a})=>{await p({id:e.id}),q(),L.setRefresh(!0),a()}})}}]})]),{loading:P,setLoading:U}=j(),q=async()=>{try{U(!0);const{message:e}=await g(w(B));r(e)?(E.data=y(e.data)?e.data:[],E.total=m(e.page)):(E.data=[],E.total=0),S.backup_count=E.total}finally{U(!1)}};return q(),(e,i)=>{const s=f,o=n,u=l,c=t;return v(),x("div",a,[C(c,null,{toolsLeft:D((()=>[C(s,{type:"primary",onClick:T},{default:D((()=>[z("Backup")])),_:1})])),table:D((()=>[C(o,{loading:R(P),"loading-num":6,data:R(E).data,columns:R(F)},null,8,["loading","data","columns"])])),pageRight:D((()=>[C(u,{page:R(B).p,"onUpdate:page":i[0]||(i[0]=e=>R(B).p=e),"page-size":R(B).limit,"onUpdate:pageSize":i[1]||(i[1]=e=>R(B).limit=e),"item-count":R(E).total,onRefresh:q},null,8,["page","page-size","item-count"])])),_:1})])}}}))}}}));
