import{_ as e,a}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1721298337096";import{e as s,A as l,B as r}from"./mail.js?v=1721298337096";import{k as t,L as n,ab as o,cJ as u}from"./index.js?v=1721298337096";import{g as i}from"./data.js?v=1721298337096";import{l as d,r as p,f as m,S as v,Z as c,P as w,V as f,_,W as b}from"./vue.js?v=1721298337096";import{_ as h}from"./Select.js?v=1721298337096";import{_ as g}from"./useTableColumns.js?v=1721298337096";import"./pinia.js?v=1721298337096";import"./Tag.js?v=1721298337096";import"./Empty.js?v=1721298337096";import"./Progress.js?v=1721298337096";const x={class:"p-20px"},E={class:"w-280px"},q={class:"w-100px ml-10px"},y={class:"w-280px"},j={class:"w-130px"},U={class:"w-140px ml-10px"},B={class:"w-280px"},T=d({__name:"index",props:{row:{},isEdit:{type:Boolean}},emits:["refresh"],setup(d,{expose:T,emit:k}){const A=d,P=k,{isEdit:z}=A,G=p(null),M=m({full_name:"",domain:null,quota:5,quota_unit:"GB",is_admin:0,username:"",password:"",active:1}),S=p([]),Z=[{label:"GB",value:"GB"},{label:"MB",value:"MB"}],C=[{label:"General user",value:0},{label:"Admin",value:1}],L={full_name:{trigger:["blur","input"],validator:()=>""!==M.full_name.trim()||new Error("Username cannot be empty!")},username:{trigger:["blur","input"],validator:()=>""!==M.username.trim()||new Error("Email address cannot be empty!")},quota:{trigger:["blur","input"],validator:()=>(console.log(M.quota),!!M.quota||new Error("MailBox size cannot be empty!"))},password:{trigger:["blur","input"],validator:()=>{if(z){if(M.password&&M.password.trim().length<8)return new Error("The current mailbox user password length is less than 8 digits, please re-enter");const e=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;if(M.password&&!e.test(M.password))return new Error("The current mailbox user password must contain at least uppercase and lowercase letters and numbers. Please re-enter")}else{if(M.password.trim().length<8)return new Error("The current mailbox user password length is less than 8 digits, please re-enter");if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(M.password))return new Error("The current mailbox user password must contain at least uppercase and lowercase letters and numbers. Please re-enter")}return!0}}},$=()=>({full_name:M.full_name,quota:M.quota+" "+M.quota_unit,is_admin:M.is_admin,username:M.username+"@"+M.domain,password:M.password,active:M.active});return(async()=>{const{message:e}=await r();t(e)&&(S.value=e.map((e=>({label:e,value:e}))),M.domain=e[0])})(),(()=>{const{row:e,isEdit:a}=A;if(a&&e){M.full_name=e.full_name,M.is_admin=e.is_admin,M.username=e.username.split("@")[0],M.active=e.active;const[a,s]=e.username.split("@");M.username=a,M.domain=s;const l=n(e.quota),[r,t]=l.split(" ");M.quota=i(r),M.quota_unit=t}})(),T({onConfirm:async()=>{var e;await(null==(e=G.value)?void 0:e.validate()),z?await s($()):await l($()),P("refresh")}}),(s,l)=>{const r=o,t=e,n=u,i=h,d=g,p=a;return v(),c("div",x,[w(p,{ref_key:"formRef",ref:G,model:b(M),rules:L},{default:f((()=>[w(t,{label:"Username",path:"full_name"},{default:f((()=>[_("div",E,[w(r,{value:b(M).full_name,"onUpdate:value":l[0]||(l[0]=e=>b(M).full_name=e),placeholder:"Enter the username please"},null,8,["value"])])])),_:1}),w(t,{label:"Quota",path:"quota"},{default:f((()=>[w(n,{value:b(M).quota,"onUpdate:value":l[1]||(l[1]=e=>b(M).quota=e),class:"w-170px",min:0,"show-button":!1,placeholder:"Enter the size of MailBox"},null,8,["value"]),_("div",q,[w(i,{value:b(M).quota_unit,"onUpdate:value":l[2]||(l[2]=e=>b(M).quota_unit=e),options:Z},null,8,["value"])])])),_:1}),w(t,{label:"User type",path:"is_admin"},{default:f((()=>[_("div",y,[w(i,{value:b(M).is_admin,"onUpdate:value":l[3]||(l[3]=e=>b(M).is_admin=e),options:C},null,8,["value"])])])),_:1}),w(t,{label:"Email Address",path:"username"},{default:f((()=>[_("div",j,[w(r,{value:b(M).username,"onUpdate:value":l[4]||(l[4]=e=>b(M).username=e),disabled:b(z),placeholder:"Your domain name"},null,8,["value","disabled"])]),_("div",U,[w(i,{value:b(M).domain,"onUpdate:value":l[5]||(l[5]=e=>b(M).domain=e),disabled:b(z),filterable:!0,options:b(S)},null,8,["value","disabled","options"])])])),_:1}),w(t,{label:"Email Password",path:"password"},{default:f((()=>[_("div",B,[w(r,{value:b(M).password,"onUpdate:value":l[6]||(l[6]=e=>b(M).password=e),placeholder:b(z)?"If it is empty, the password will not be changed":"Enter your email password please"},null,8,["value","placeholder"])])])),_:1}),w(t,{label:"EnforceTLS",path:"active","show-feedback":!1},{default:f((()=>[w(d,{value:b(M).active,"onUpdate:value":l[7]||(l[7]=e=>b(M).active=e),"checked-value":1,"unchecked-value":0},null,8,["value"])])),_:1})])),_:1},8,["model"])])}}});export{T as default};
