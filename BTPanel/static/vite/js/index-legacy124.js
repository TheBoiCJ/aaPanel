System.register(["./index-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1721298337096","./useTableData-legacy.js?v=1721298337096","./useLoading-legacy.js?v=1721298337096","./useTableColumns-legacy.js?v=1721298337096","./mail-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1721298337096","./vue-legacy.js?v=1721298337096","./RadioButton-legacy.js?v=1721298337096","./DataTable-legacy.js?v=1721298337096","./pinia-legacy.js?v=1721298337096","./Skeleton-legacy.js?v=1721298337096","./Progress-legacy.js?v=1721298337096","./Checkbox-legacy.js?v=1721298337096","./Ellipsis-legacy.js?v=1721298337096","./Select-legacy.js?v=1721298337096","./Tag-legacy.js?v=1721298337096","./Empty-legacy.js?v=1721298337096","./omit-legacy.js?v=1721298337096"],(function(e,t){"use strict";var a,l,i,s,n,o,d,u,p,y,c,g,r,m,_,w,h,j,k,v,f,b,D,x,S,z;return{setters:[e=>{a=e.j,l=e.k,i=e.m,s=e.g,n=e.q},e=>{o=e._},e=>{d=e.u,u=e._},e=>{p=e.u},e=>{y=e.b},e=>{c=e.F,g=e.G},e=>{r=e._},e=>{m=e.l,_=e.f,w=e.P,h=e.F,j=e.S,k=e.U,v=e.V,f=e.W,b=e.t,D=e.Z,x=e.q},e=>{S=e._},e=>{z=e.c},null,null,null,null,null,null,null,null,null],execute:function(){const t=m({__name:"details",props:{id:{},type:{},row:{}},setup(e){const t=e,s=_({task_id:t.id,type:t.type,value:"domain"===t.type?t.row.domain:t.row.status,page:1,size:10}),{loading:n,setLoading:y}=p(),{table:g,columns:m}=d([{key:"domain",title:()=>w(h,null,["domain"===s.type?"Domain":"Status"]),width:120,ellipsis:{tooltip:!0},render:e=>"domain"===s.type?e.domain:e.status},{key:"recipient",title:"Recipient",width:160,ellipsis:{tooltip:!0}},{key:"dsn",title:"Dsn",width:60},{key:"delay",title:"Delay",width:70},{key:"delays",title:"Delays",width:150},{key:"relay",title:"Relay",width:200,ellipsis:{tooltip:!0}},{key:"err_info",title:"Details",ellipsis:{tooltip:!0}}]),D=async()=>{try{y(!0);const{message:e}=await c(b(s));a(e)&&(g.data=l(e.data)?e.data:[],g.total=i(e.page))}finally{y(!1)}};return D(),(e,t)=>{const a=u,l=r,i=o;return j(),k(i,{class:"p-20px"},{table:v((()=>[w(a,{loading:f(n),data:f(g).data,columns:f(m)},null,8,["loading","data","columns"])])),pageRight:v((()=>[w(l,{page:f(s).page,"onUpdate:page":t[0]||(t[0]=e=>f(s).page=e),"page-size":f(s).size,"onUpdate:pageSize":t[1]||(t[1]=e=>f(s).size=e),"item-count":f(g).total,onRefresh:D},null,8,["page","page-size","item-count"])])),_:1})}}}),R={class:"p-20px"};e("default",m({__name:"index",props:{row:{}},setup(e){const a=e,i=_({task_id:a.row.id,type:"domain"}),{loading:c,setLoading:r}=p(),{table:m,columns:k}=d([{key:"domain",title:()=>w(h,null,["domain"===i.type?"Domain":"Status"]),render:e=>"domain"===i.type?e.domain:e.status},{key:"count",title:"Number"},y({width:120,options:e=>[{label:"Details",onClick:()=>{L(e)}}]})]),U=s(""),L=e=>{U.data.id=a.row.id,U.data.type=i.type,U.data.row=e,U.title=`Failure Details [${"domain"===i.type?e.domain:e.status}]`,U.show=!0},T=async()=>{try{r(!0);const{message:e}=await g(b(i));m.data=l(e)?e:[]}finally{r(!1)}};return T(),(e,a)=>{const l=S,s=z,d=u,p=o,y=n;return j(),D("div",R,[w(p,null,{toolsLeft:v((()=>[w(s,{value:f(i).type,"onUpdate:value":[a[0]||(a[0]=e=>f(i).type=e),T]},{default:v((()=>[w(l,{value:"domain"},{default:v((()=>[x("Domain")])),_:1}),w(l,{value:"status"},{default:v((()=>[x("Status")])),_:1})])),_:1},8,["value"])])),table:v((()=>[w(d,{"max-height":340,loading:f(c),data:f(m).data,columns:f(k)},null,8,["loading","data","columns"])])),_:1}),w(y,{show:f(U).show,"onUpdate:show":a[1]||(a[1]=e=>f(U).show=e),title:f(U).title,data:f(U).data,width:980,"min-height":152,component:t},null,8,["show","title","data"])])}}}))}}}));
