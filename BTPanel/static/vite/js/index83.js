import{_ as e}from"./index135.js?v=1721298337096";import{n as s,e5 as a,k as t}from"./index.js?v=1721298337096";import{_ as i}from"./index.vue_vue_type_script_setup_true_lang15.js?v=1721298337096";import{l as o,ad as r,r as l,H as p,S as n,Z as u,P as m,W as d,b as j,_ as c,U as _,af as f,n as v}from"./vue.js?v=1721298337096";import"./Tabs.js?v=1721298337096";import"./omit.js?v=1721298337096";import"./Ellipsis.js?v=1721298337096";import"./pinia.js?v=1721298337096";import"./index136.js?v=1721298337096";import"./Spin.js?v=1721298337096";import"./RadioButton.js?v=1721298337096";import"./DataTable.js?v=1721298337096";import"./Checkbox.js?v=1721298337096";import"./Select.js?v=1721298337096";import"./Tag.js?v=1721298337096";import"./Empty.js?v=1721298337096";import"./DatePicker.js?v=1721298337096";import"./useLoading.js?v=1721298337096";import"./index68.js?v=1721298337096";import"./index.vue_vue_type_script_setup_true_lang6.js?v=1721298337096";import"./useTableColumns.js?v=1721298337096";import"./Progress.js?v=1721298337096";import"./InputGroupLabel.js?v=1721298337096";import"./InputGroup.js?v=1721298337096";const x={class:"flex h-full"},g={class:"flex-1 p-16px"},k=o({__name:"index",props:{id:{default:""}},emits:["close"],setup(o,{emit:k}){const y=o,b=k,{t:C}=r(),h=l(y.id),D=p([]),P=l(),S=()=>{v((()=>{var e;null==(e=P.value)||e.getContent()}))};return(async()=>{const e=s.loading(C("Public.Api.Load",[C("Docker.Container.log.index_27")]));try{const{message:e}=await a();t(e)&&e.length>0?(D.value=e.map((e=>({key:e.id,label:e.name}))),h.value||(h.value=e[0].id)):(s.error(C("Docker.Container.log.index_28")),b("close"))}finally{e.close()}})(),(s,a)=>{const t=e;return n(),u("div",x,[m(t,{value:d(h),"onUpdate:value":[a[0]||(a[0]=e=>j(h)?h.value=e:null),S],class:"w-auto h-full","pane-padding":"0px",data:d(D),onClickSelf:S},null,8,["value","data"]),c("div",g,[d(h)?(n(),_(i,{key:0,ref_key:"logRef",ref:P,id:d(h)},null,8,["id"])):f("",!0)])])}}});export{k as default};
