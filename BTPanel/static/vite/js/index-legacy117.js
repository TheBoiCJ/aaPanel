System.register(["./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1721298337096","./mail-legacy.js?v=1721298337096","./vue-legacy.js?v=1721298337096","./index-legacy.js?v=1721298337096","./Select-legacy.js?v=1721298337096","./useTableColumns-legacy.js?v=1721298337096","./pinia-legacy.js?v=1721298337096","./Tag-legacy.js?v=1721298337096","./Empty-legacy.js?v=1721298337096","./Progress-legacy.js?v=1721298337096"],(function(e,a){"use strict";var l,r,t,s,u,n,d,c,i,o,p,v,y,_,f,w,g;return{setters:[e=>{l=e._,r=e.a},e=>{t=e.C,s=e.D},e=>{u=e.l,n=e.r,d=e.f,c=e.S,i=e.Z,o=e.P,p=e.V,v=e._,y=e.W,_=e.t},e=>{f=e.ab},e=>{w=e._},e=>{g=e._},null,null,null,null],execute:function(){const a={class:"p-20px"},h={class:"w-300px"},m={class:"w-300px"},b={class:"w-300px"};e("default",u({__name:"index",props:{row:{},isEdit:{type:Boolean}},emits:["refresh"],setup(e,{expose:u,emit:j}){const x=e,C=j,{isEdit:E,row:k}=x,B=n(null),U=d({user:"",forward_user:"",type:"sender",active:1}),S=[{label:"When sending",value:"sender"},{label:"When receiving",value:"recipient"}],T={};return(()=>{const{row:e,isEdit:a}=x;a&&e&&(U.user=e.user,U.forward_user=e.forward_user,U.type=e.type,U.active=e.active)})(),u({onConfirm:async()=>{await(B.value?.validate()),E&&k?await t({user:k.user,type:k.type,forward_user:k.forward_user,type_new:U.type,forward_user_new:U.forward_user,active_new:U.active}):await s(_(U)),C("refresh")}}),(e,t)=>{const s=f,u=l,n=w,d=g,_=r;return c(),i("div",a,[o(_,{ref_key:"formRef",ref:B,model:y(U),rules:T},{default:p((()=>[o(u,{label:"Need Copy",path:"user"},{default:p((()=>[v("div",h,[o(s,{value:y(U).user,"onUpdate:value":t[0]||(t[0]=e=>y(U).user=e),disabled:y(E),placeholder:"Enter the users you need to Bcc"},null,8,["value","disabled"])])])),_:1}),o(u,{label:"Copy to",path:"forward_user"},{default:p((()=>[v("div",m,[o(s,{value:y(U).forward_user,"onUpdate:value":t[1]||(t[1]=e=>y(U).forward_user=e),placeholder:"Enter the email you need to receive the Bcc"},null,8,["value"])])])),_:1}),o(u,{label:"BCC Type",path:"type"},{default:p((()=>[v("div",b,[o(n,{value:y(U).type,"onUpdate:value":t[2]||(t[2]=e=>y(U).type=e),options:S},null,8,["value"])])])),_:1}),o(u,{label:"Active","show-feedback":!1},{default:p((()=>[o(d,{value:y(U).active,"onUpdate:value":t[3]||(t[3]=e=>y(U).active=e),"checked-value":1,"unchecked-value":0},null,8,["value"])])),_:1})])),_:1},8,["model"])])}}}))}}}));
