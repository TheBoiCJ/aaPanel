import{af as e,ag as a,j as r,ab as o,g as t,ah as s,V as l,k as i,W as d,r as n,B as p,q as c}from"./index.js?v=1721298337096";import{_ as m}from"./index.vue_vue_type_script_setup_true_lang.js?v=1721298337096";import{u,_}from"./useTableData.js?v=1721298337096";import{_ as y}from"./index.vue_vue_type_script_setup_true_lang3.js?v=1721298337096";import{u as k}from"./useLoading.js?v=1721298337096";import{b as f}from"./useTableColumns.js?v=1721298337096";import{_ as w,a as v}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1721298337096";import{l as x,ad as h,d as g,r as b,f as R,S as D,Z as j,P as E,V as U,_ as $,W as C,t as P,U as B,q as L,a3 as S,b as T}from"./vue.js?v=1721298337096";import"./pinia.js?v=1721298337096";import"./Skeleton.js?v=1721298337096";import"./DataTable.js?v=1721298337096";import"./Checkbox.js?v=1721298337096";import"./Ellipsis.js?v=1721298337096";import"./Select.js?v=1721298337096";import"./Tag.js?v=1721298337096";import"./Empty.js?v=1721298337096";import"./omit.js?v=1721298337096";import"./Progress.js?v=1721298337096";const q={class:"px-20px py-24px"},K={class:"w-430px"},V={class:"w-430px"},W={class:"flex"},z={class:"w-160px"},Z={class:"w-160px"},A={class:"w-430px"},F={class:"w-430px"},G=x({__name:"index",props:{isEdit:{type:Boolean,default:!1},row:{default:void 0}},emits:["refresh"],setup(t,{expose:s,emit:l}){const i=t,d=l,{t:n}=h(),p=g(i,"isEdit"),c=b(),m=R({registry:"",name:"",username:"",password:"",namespace:"",remark:""}),u={registry:{trigger:["blur"],validator:()=>""!==m.registry||new Error(n("Docker.Repository.form.index_11"))},name:{trigger:["blur"],validator:()=>""!==m.name||new Error(n("Docker.Repository.form.index_12"))},username:{trigger:["blur"],validator:()=>""!==m.username||new Error(n("Docker.Repository.form.index_13"))},password:{trigger:["blur"],validator:()=>""!==m.password||new Error(n("Docker.Repository.form.index_13"))},namespace:{trigger:["blur"],validator:()=>""!==m.namespace||new Error(n("Docker.Repository.form.index_14"))}};return(()=>{const{row:e}=i;p.value&&r(e)&&(console.log(1),m.registry=e.url,m.name=e.name,m.username=e.username,m.password=e.password,m.namespace=e.namespace,m.remark=e.remark)})(),s({onConfirm:async()=>{var r;await(null==(r=c.value)?void 0:r.validate()),p.value?i.row&&await a({...P(m),id:i.row.id}):await e(P(m)),d("refresh")}}),(e,a)=>{const r=o,t=w,s=v;return D(),j("div",q,[E(s,{ref_key:"formRef",ref:c,model:C(m),rules:u,"label-width":"140px"},{default:U((()=>[E(t,{label:e.$t("Docker.Repository.form.index_1"),path:"registry"},{default:U((()=>[$("div",K,[E(r,{value:C(m).registry,"onUpdate:value":a[0]||(a[0]=e=>C(m).registry=e),placeholder:e.$t("Docker.Repository.form.index_2")},null,8,["value","placeholder"])])])),_:1},8,["label"]),E(t,{label:e.$t("Docker.Repository.form.index_3"),path:"name"},{default:U((()=>[$("div",V,[E(r,{value:C(m).name,"onUpdate:value":a[1]||(a[1]=e=>C(m).name=e),placeholder:e.$t("Docker.Repository.form.index_4")},null,8,["value","placeholder"])])])),_:1},8,["label"]),$("div",W,[E(t,{label:e.$t("Docker.Repository.form.index_5"),path:"username"},{default:U((()=>[$("div",z,[E(r,{value:C(m).username,"onUpdate:value":a[2]||(a[2]=e=>C(m).username=e),placeholder:e.$t("Docker.Repository.form.index_6")},null,8,["value","placeholder"])])])),_:1},8,["label"]),E(t,{label:"Password","label-width":"110",path:"password"},{default:U((()=>[$("div",Z,[E(r,{value:C(m).password,"onUpdate:value":a[3]||(a[3]=e=>C(m).password=e),placeholder:e.$t("Docker.Repository.form.index_7")},null,8,["value","placeholder"])])])),_:1})]),E(t,{label:e.$t("Docker.Repository.form.index_8"),path:"namespace"},{default:U((()=>[$("div",A,[E(r,{value:C(m).namespace,"onUpdate:value":a[4]||(a[4]=e=>C(m).namespace=e),placeholder:e.$t("Docker.Repository.form.index_9")},null,8,["value","placeholder"])])])),_:1},8,["label"]),E(t,{label:e.$t("Docker.Repository.form.index_10"),path:"remark","show-feedback":!1},{default:U((()=>[$("div",F,[E(r,{value:C(m).remark,"onUpdate:value":a[5]||(a[5]=e=>C(m).remark=e),placeholder:e.$t("Docker.Repository.form.index_10")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}),H=x({__name:"index",setup(e){const{t:a}=h(),r=t(a("Docker.Repository.index_1"),{isEdit:!1,onRefresh:()=>{q()}}),o=()=>{r.data.row=void 0,r.data.isEdit=!1,r.title=a("Docker.Repository.index_1"),r.show=!0},w=R({page:1,pageSize:10}),{keys:v,table:x,columns:g}=u([{type:"selection",width:40},{key:"url",title:"URL",ellipsis:{tooltip:{width:"trigger"}},render:e=>e.url||"--"},{key:"namespace",title:a("Docker.Repository.index_3"),ellipsis:{tooltip:{width:"trigger"}},render:e=>e.namespace||"--"},{key:"name",title:a("Docker.Repository.index_4"),ellipsis:{tooltip:{width:"trigger"}},render:e=>e.name||"--"},{key:"remark",title:a("Docker.Repository.index_5"),render:e=>e.remark||"--"},f({width:120,options:e=>[{label:a("Public.Btn.Edit"),disabled:1===e.id,onClick:()=>{(e=>{r.data.row=e,r.data.isEdit=!0,r.title=a("Docker.Repository.index_2",[e.name]),r.show=!0})(e)}},{label:a("Public.Btn.Del"),disabled:1===e.id,onClick:()=>{b(e)}}]})]),b=e=>{d({title:a("Docker.Repository.index_8",[e.name]),content:a("Docker.Repository.index_9",[e.name]),onConfirm:async()=>{await s({id:e.id}),q()}})},j=[{key:"del",type:"confirm",label:"Please choose del",confirm:{title:a("Docker.Repository.index_10"),desc:a("Docker.Repository.index_11"),columns:[g.value[3]],api:e=>s({id:e.id},!1),done:()=>{q()}}}],{loading:$,setLoading:P}=k(),q=async()=>{try{P(!0);const{message:e}=await l();x.data=i(e)?e:[]}finally{v.value=[],P(!1)}};return q(),(e,a)=>{const t=p,s=y,l=_,i=m,d=c,u=n;return D(),B(u,{class:"p-16px"},{default:U((()=>[E(i,null,{toolsLeft:U((()=>[E(t,{type:"primary",onClick:o},{default:U((()=>[L(S(e.$t("Docker.Repository.index_1")),1)])),_:1})])),table:U((()=>[E(l,{page:C(w),"onUpdate:page":a[1]||(a[1]=e=>T(w)?w.value=e:null),"checked-row-keys":C(v),"onUpdate:checkedRowKeys":a[2]||(a[2]=e=>T(v)?v.value=e:null),"is-page":!0,loading:C($),data:C(x).data,columns:C(g)},{pagePrefix:U((()=>[E(s,{"checked-row-keys":C(v),"onUpdate:checkedRowKeys":a[0]||(a[0]=e=>T(v)?v.value=e:null),data:C(x).data,options:j},null,8,["checked-row-keys","data"])])),_:1},8,["page","checked-row-keys","loading","data","columns"])])),_:1}),E(d,{show:C(r).show,"onUpdate:show":a[3]||(a[3]=e=>C(r).show=e),data:C(r).data,title:C(r).title,width:620,footer:!0,component:G},null,8,["show","data","title"])])),_:1})}}});export{H as default};
