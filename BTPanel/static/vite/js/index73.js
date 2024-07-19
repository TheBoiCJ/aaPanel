import{_ as e,a}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1721298337096";import{u as s,dF as r,ab as l,e as t,n as o}from"./index.js?v=1721298337096";import{_ as u}from"./index.vue_vue_type_script_setup_true_lang7.js?v=1721298337096";import{s as n}from"./pinia.js?v=1721298337096";import{g as d}from"./index63.js?v=1721298337096";import{l as p,r as i,f as m,k as v,S as _,U as c,V as f,P as g,_ as b,W as h,q as w,t as j}from"./vue.js?v=1721298337096";import{_ as x}from"./Select.js?v=1721298337096";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1721298337096";import"./InputGroupLabel.js?v=1721298337096";import"./InputGroup.js?v=1721298337096";import"./index64.js?v=1721298337096";import"./useTableColumns.js?v=1721298337096";import"./Progress.js?v=1721298337096";import"./Tag.js?v=1721298337096";import"./Empty.js?v=1721298337096";const P={class:"w-240px"},y={class:"w-240px"},U={class:"w-240px"},q={class:"w-240px"},k={class:"ml-8px"},C=p({__name:"index",setup(p,{expose:C}){const E=s(),{remoteList:R}=n(E),D=i(null),G=m({sid:R.value.length>0?R.value[0].id:null,name:"",db_user:"",password:"",active:!1,ssl:""}),I=v((()=>R.value.map((e=>({label:"".concat(e.ps," (").concat(e.db_host,")"),value:e.id}))))),L={name:{required:!0,message:"Please enter database name",trigger:["blur","change"]},db_user:{required:!0,message:"Please enter username",trigger:["blur","change"]},password:{required:!0,message:"Please enter password",trigger:["blur","change"]},sid:{trigger:"change",validator:(e,a)=>null!==a||new Error("Please select remote server")}},N=e=>{G.db_user=e},S=()=>{d()};return C({onConfirm:async({hide:e})=>{var a;try{await(null==(a=D.value)?void 0:a.validate());const s=(()=>{const{sid:e}=G;if(null===e)throw o.error("Please select remote server"),new Error("Please select remote server");return{...j(G),sid:e,ps:G.name}})();await r(E.type,s),E.setRefresh(!0),e()}catch(s){console.error(s)}}}),(s,r)=>{const o=l,n=e,d=u,p=x,i=t,m=a;return _(),c(m,{ref_key:"formRef",ref:D,model:h(G),rules:L,class:"p-20px"},{default:f((()=>[g(n,{label:"DBName",path:"name"},{default:f((()=>[b("div",P,[g(o,{value:h(G).name,"onUpdate:value":[r[0]||(r[0]=e=>h(G).name=e),N],placeholder:"New database name"},null,8,["value"])])])),_:1}),g(n,{label:"Username",path:"db_user"},{default:f((()=>[b("div",y,[g(o,{value:h(G).db_user,"onUpdate:value":r[1]||(r[1]=e=>h(G).db_user=e),placeholder:"Database user"},null,8,["value"])])])),_:1}),g(n,{label:"Password",path:"password"},{default:f((()=>[b("div",U,[g(d,{value:h(G).password,"onUpdate:value":r[2]||(r[2]=e=>h(G).password=e),placeholder:""},null,8,["value"])])])),_:1}),g(n,{label:"Add to",path:"sid"},{default:f((()=>[b("div",q,[g(p,{value:h(G).sid,"onUpdate:value":r[3]||(r[3]=e=>h(G).sid=e),options:h(I)},null,8,["value","options"])]),b("div",k,[g(i,{onClick:S},{default:f((()=>[w("Remote servers")])),_:1})])])),_:1})])),_:1},8,["model"])}}});export{C as default};
