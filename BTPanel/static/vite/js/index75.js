import{_ as s,a}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1721298337096";import{_ as e}from"./index.vue_vue_type_script_setup_true_lang7.js?v=1721298337096";import{u as t,ds as r,dt as o,j as p,z as u}from"./index.js?v=1721298337096";import{u as i}from"./useLoading.js?v=1721298337096";import{l,r as n,f as d,S as _,Z as m,P as f,V as v,_ as c,W as g,t as w}from"./vue.js?v=1721298337096";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1721298337096";import"./InputGroupLabel.js?v=1721298337096";import"./InputGroup.js?v=1721298337096";import"./pinia.js?v=1721298337096";const x={class:"px-20px pt-24px pb-8px"},y={class:"w-280px"},j=l({__name:"index",setup(l,{expose:j}){const b=t(),L=n(null),R=d({password:""}),h={password:{required:!0,message:"Root password cannot be empty",trigger:"blur"}},{loading:G,setLoading:I}=i();return(async()=>{try{I(!0);const{message:s}=await o(b.type);p(s)&&(R.password=u(s.result)?s.result:"")}finally{I(!1)}})(),j({onConfirm:async({hide:s})=>{var a;await(null==(a=L.value)?void 0:a.validate()),await r(b.type,w(R)),s()}}),(t,r)=>{const o=e,p=s,u=a;return _(),m("div",x,[f(u,{ref_key:"formRef",ref:L,model:g(R),rules:h},{default:v((()=>[f(p,{label:"Root password",path:"password"},{default:v((()=>[c("div",y,[f(o,{value:g(R).password,"onUpdate:value":r[0]||(r[0]=s=>g(R).password=s),loading:g(G),default:!1},null,8,["value","loading"])])])),_:1})])),_:1},8,["model"])])}}});export{j as default};
