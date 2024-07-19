import{j as t,k as a,m as e,g as s,q as i}from"./index.js?v=1721298337096";import{_ as o}from"./index.vue_vue_type_script_setup_true_lang.js?v=1721298337096";import{u as l,_ as n}from"./useTableData.js?v=1721298337096";import{u as p}from"./useLoading.js?v=1721298337096";import{b as d}from"./useTableColumns.js?v=1721298337096";import{F as m,G as r}from"./mail.js?v=1721298337096";import{_ as u}from"./index.vue_vue_type_script_setup_true_lang2.js?v=1721298337096";import{l as y,f as c,P as g,F as _,S as w,U as h,V as f,W as j,t as k,Z as v,q as b}from"./vue.js?v=1721298337096";import{_ as D}from"./RadioButton.js?v=1721298337096";import{c as x}from"./DataTable.js?v=1721298337096";import"./pinia.js?v=1721298337096";import"./Skeleton.js?v=1721298337096";import"./Progress.js?v=1721298337096";import"./Checkbox.js?v=1721298337096";import"./Ellipsis.js?v=1721298337096";import"./Select.js?v=1721298337096";import"./Tag.js?v=1721298337096";import"./Empty.js?v=1721298337096";import"./omit.js?v=1721298337096";const S=y({__name:"details",props:{id:{},type:{},row:{}},setup(s){const i=s,d=c({task_id:i.id,type:i.type,value:"domain"===i.type?i.row.domain:i.row.status,page:1,size:10}),{loading:r,setLoading:y}=p(),{table:v,columns:b}=l([{key:"domain",title:()=>g(_,null,["domain"===d.type?"Domain":"Status"]),width:120,ellipsis:{tooltip:!0},render:t=>"domain"===d.type?t.domain:t.status},{key:"recipient",title:"Recipient",width:160,ellipsis:{tooltip:!0}},{key:"dsn",title:"Dsn",width:60},{key:"delay",title:"Delay",width:70},{key:"delays",title:"Delays",width:150},{key:"relay",title:"Relay",width:200,ellipsis:{tooltip:!0}},{key:"err_info",title:"Details",ellipsis:{tooltip:!0}}]),D=async()=>{try{y(!0);const{message:s}=await m(k(d));t(s)&&(v.data=a(s.data)?s.data:[],v.total=e(s.page))}finally{y(!1)}};return D(),(t,a)=>{const e=n,s=u,i=o;return w(),h(i,{class:"p-20px"},{table:f((()=>[g(e,{loading:j(r),data:j(v).data,columns:j(b)},null,8,["loading","data","columns"])])),pageRight:f((()=>[g(s,{page:j(d).page,"onUpdate:page":a[0]||(a[0]=t=>j(d).page=t),"page-size":j(d).size,"onUpdate:pageSize":a[1]||(a[1]=t=>j(d).size=t),"item-count":j(v).total,onRefresh:D},null,8,["page","page-size","item-count"])])),_:1})}}}),z={class:"p-20px"},R=y({__name:"index",props:{row:{}},setup(t){const e=t,m=c({task_id:e.row.id,type:"domain"}),{loading:u,setLoading:y}=p(),{table:h,columns:R}=l([{key:"domain",title:()=>g(_,null,["domain"===m.type?"Domain":"Status"]),render:t=>"domain"===m.type?t.domain:t.status},{key:"count",title:"Number"},d({width:120,options:t=>[{label:"Details",onClick:()=>{L(t)}}]})]),U=s(""),L=t=>{U.data.id=e.row.id,U.data.type=m.type,U.data.row=t,U.title="Failure Details [".concat("domain"===m.type?t.domain:t.status,"]"),U.show=!0},T=async()=>{try{y(!0);const{message:t}=await r(k(m));h.data=a(t)?t:[]}finally{y(!1)}};return T(),(t,a)=>{const e=D,s=x,l=n,p=o,d=i;return w(),v("div",z,[g(p,null,{toolsLeft:f((()=>[g(s,{value:j(m).type,"onUpdate:value":[a[0]||(a[0]=t=>j(m).type=t),T]},{default:f((()=>[g(e,{value:"domain"},{default:f((()=>[b("Domain")])),_:1}),g(e,{value:"status"},{default:f((()=>[b("Status")])),_:1})])),_:1},8,["value"])])),table:f((()=>[g(l,{"max-height":340,loading:j(u),data:j(h).data,columns:j(R)},null,8,["loading","data","columns"])])),_:1}),g(d,{show:j(U).show,"onUpdate:show":a[1]||(a[1]=t=>j(U).show=t),title:j(U).title,data:j(U).data,width:980,"min-height":152,component:S},null,8,["show","title","data"])])}}});export{R as default};
