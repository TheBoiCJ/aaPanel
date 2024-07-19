System.register(["./index-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1721298337096","./useTableData-legacy.js?v=1721298337096","./useTableColumns-legacy.js?v=1721298337096","./mail-legacy.js?v=1721298337096","./vue-legacy.js?v=1721298337096","./pinia-legacy.js?v=1721298337096","./DataTable-legacy.js?v=1721298337096","./Checkbox-legacy.js?v=1721298337096","./Ellipsis-legacy.js?v=1721298337096","./Select-legacy.js?v=1721298337096","./Tag-legacy.js?v=1721298337096","./Empty-legacy.js?v=1721298337096","./omit-legacy.js?v=1721298337096","./Skeleton-legacy.js?v=1721298337096","./Progress-legacy.js?v=1721298337096"],(function(e,t){"use strict";var a,s,l,n,i,o,d,c,r,u,p,h,g,y,_,m,w,k,j,f,b,x,v,S,C,W,E,T,z;return{setters:[e=>{a=e.g,s=e.M,l=e.e,n=e.j,i=e.k,o=e.m,d=e.h,c=e.B,r=e.q,u=e.r,p=e.v},e=>{h=e._},e=>{g=e._},e=>{y=e.u,_=e._},e=>{m=e.b},e=>{w=e.u,k=e.v},e=>{j=e.l,f=e.ad,b=e.f,x=e.P,v=e.q,S=e.t,C=e.S,W=e.U,E=e.V,T=e.W,z=e.a1},null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",j({__name:"index",setup(e){const j=z((()=>p((()=>t.import("./index-legacy123.js?v=1721298337096")),void 0))),U=z((()=>p((()=>t.import("./index-legacy124.js?v=1721298337096")),void 0))),D=z((()=>p((()=>t.import("./index-legacy125.js?v=1721298337096")),void 0))),{t:P}=f(),L=b({p:1,size:10}),A=a("Add Forward",{isEdit:!1,row:void 0,onRefresh:()=>{G()}}),F=()=>{A.data.isEdit=!1,A.title="Add Forward",A.show=!0},{table:R,columns:$}=y([{key:"created",title:"Time",width:"16%",minWidth:140,render:e=>s(e.created)},{key:"task_name",title:"Name",width:"14%",minWidth:140,ellipsis:{tooltip:!0}},{key:"addresser",title:"Sender",minWidth:160,ellipsis:{tooltip:!0}},{key:"recipient_count",title:"To",width:"8%",minWidth:80},{key:"success_count",title:"Success",width:"8%",minWidth:80,render:e=>2===e.task_process?e.recipient_count-e.count.error_count:"--"},{key:"error_count",title:"Fail",width:"8%",minWidth:80,render:e=>2===e.task_process?x(l,{type:"error",onClick:()=>{B(e)}},{default:()=>[e.count.error_count]}):"--"},{key:"task_process",title:"Status",width:"8%",render:e=>0===e.task_process?x("span",{class:"text-#fcb040"},[v("Pending")]):1===e.task_process?x("span",{class:"text-#fcb040"},[v("Executing")]):"Done"},m({width:150,options:e=>[{label:"Log",show:!!e.task_process,onClick:()=>{N(e)}},{label:e.task_process?"Pause":"Send",show:2!==e.task_process,onClick:()=>{N(e)}},{label:P("Public.Btn.Del"),onClick:()=>{V(e)}}]})]),q=a("Error tasks"),B=e=>{q.data.row=e,q.title=`Error tasks [${e.task_name}]`,q.show=!0},M=a("Send Log"),N=e=>{M.data.row=e,M.title=`Send Log [${e.task_name}]`,M.show=!0},V=async e=>{d({title:"Delete task",content:`Whether to delete the [${e.task_name}] task?`,onConfirm:async()=>{await k({task_id:e.id}),G()}})},G=async()=>{try{R.loading=!0;const{message:e}=await w(S(L));n(e)&&(R.data=i(e.data)?e.data:[],R.total=o(e.page))}finally{R.loading=!1}};return G(),(e,t)=>{const a=c,s=_,l=g,n=h,i=r,o=u;return C(),W(o,{class:"p-16px"},{default:E((()=>[x(n,null,{toolsLeft:E((()=>[x(a,{type:"primary",onClick:F},{default:E((()=>[v("Add Send Tasks")])),_:1})])),table:E((()=>[x(s,{loading:T(R).loading,data:T(R).data,columns:T($)},null,8,["loading","data","columns"])])),pageRight:E((()=>[x(l,{page:T(L).p,"onUpdate:page":t[0]||(t[0]=e=>T(L).p=e),"page-size":T(L).size,"onUpdate:pageSize":t[1]||(t[1]=e=>T(L).size=e),"item-count":T(R).total,onRefresh:G},null,8,["page","page-size","item-count"])])),_:1}),x(i,{show:T(A).show,"onUpdate:show":t[2]||(t[2]=e=>T(A).show=e),title:T(A).title,data:T(A).data,width:700,"min-height":200,footer:!0,component:T(j)},null,8,["show","title","data","component"]),x(i,{show:T(q).show,"onUpdate:show":t[3]||(t[3]=e=>T(q).show=e),title:T(q).title,data:T(q).data,width:700,"min-height":192,component:T(U)},null,8,["show","title","data","component"]),x(i,{show:T(M).show,"onUpdate:show":t[4]||(t[4]=e=>T(M).show=e),title:T(M).title,data:T(M).data,width:750,height:580,component:T(D)},null,8,["show","title","data","component"])])),_:1})}}}))}}}));
