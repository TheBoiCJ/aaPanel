import{_ as a}from"./index96.js?v=1732601582185";import{_ as l}from"./index.vue_vue_type_script_setup_true_lang.js?v=1732601582185";import{_ as e}from"./index99.js?v=1732601582185";import{a1 as i,a2 as o}from"./mail.js?v=1732601582185";import{h as s,J as t}from"./page_layout.js?v=1732601582185";import{d,W as n,r as u,j as r,O as m,P as p,M as _,Y as v,Q as x,R as c,Z as b}from"./vue.js?v=1732601582185";import{ad as f,bG as w,bl as M,bL as h}from"./naive.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";import"./public.js?v=1732601582185";const j={class:"p-20px"},q={class:"w-320px"},D={class:"w-320px"},$={class:"w-320px"},E={class:"w-100px ml-20px"},U={class:"w-320px"},B={class:"text-error"},y=d({__name:"index",props:{row:{},isEdit:{type:Boolean}},emits:["refresh"],setup(d,{expose:y,emit:g}){const G=d,P=g,{t:I}=n(),R=u(null),k=r({domain:"",a_record:"",quota:5,quota_unit:"GB",mailboxes:50,email:"",ips:""}),C=[{label:"GB",value:"GB"},{label:"MB",value:"MB"}],H={domain:{trigger:["blur","input"],validator:()=>""!==k.domain.trim()||new Error(I("Mail.Domain.index_27"))}},J=()=>({domain:k.domain,a_record:k.a_record,ips:k.ips,quota:k.quota+" "+k.quota_unit,mailboxes:k.mailboxes,email:k.email});return(()=>{const{isEdit:a,row:l}=G;if(a&&l){k.domain=l.domain,k.a_record=l.a_record;const a=s(l.quota);k.quota=t(a.split(" ")[0]),k.quota_unit=a.split(" ")[1],k.mailboxes=l.mailboxes,k.email=l.email}})(),y({onConfirm:async()=>{var a;await(null==(a=R.value)?void 0:a.validate());const{isEdit:l}=G;l?await i(J()):await o(J()),P("refresh")}}),(i,o)=>{const s=f,t=w,d=e,n=M,u=h,r=l,y=a;return m(),p("div",j,[_(r,{ref_key:"formRef",ref:R,model:c(k),rules:H},{default:v((()=>[_(t,{label:i.$t("Mail.Domain.index_3"),path:"domain"},{default:v((()=>[x("div",q,[_(s,{value:c(k).domain,"onUpdate:value":o[0]||(o[0]=a=>c(k).domain=a),disabled:i.isEdit,placeholder:i.$t("Mail.Domain.index_18")},null,8,["value","disabled","placeholder"])])])),_:1},8,["label"]),_(t,{label:i.$t("Mail.Domain.index_19")},{default:v((()=>[x("div",D,[_(s,{value:c(k).a_record,"onUpdate:value":o[1]||(o[1]=a=>c(k).a_record=a),disabled:i.isEdit,placeholder:i.$t("Mail.Domain.index_20")},null,8,["value","disabled","placeholder"])])])),_:1},8,["label"]),_(t,{label:"IPs"},{default:v((()=>[x("div",$,[_(d,{value:c(k).ips,"onUpdate:value":o[2]||(o[2]=a=>c(k).ips=a),rows:3,disabled:i.isEdit,placeholder:"请输入IPs，一行一个"},null,8,["value","disabled"])])])),_:1}),_(t,{label:i.$t("Mail.Domain.index_21")},{default:v((()=>[_(n,{value:c(k).quota,"onUpdate:value":o[3]||(o[3]=a=>c(k).quota=a),class:"w-200px",min:0,"show-button":!1},null,8,["value"]),x("div",E,[_(u,{value:c(k).quota_unit,"onUpdate:value":o[4]||(o[4]=a=>c(k).quota_unit=a),options:C},null,8,["value"])])])),_:1},8,["label"]),_(t,{label:i.$t("Mail.Domain.index_22")},{default:v((()=>[_(n,{value:c(k).mailboxes,"onUpdate:value":o[5]||(o[5]=a=>c(k).mailboxes=a),class:"w-320px",min:0,"show-button":!1},null,8,["value"])])),_:1},8,["label"]),_(t,{label:i.$t("Mail.Domain.index_7")},{default:v((()=>[x("div",U,[_(s,{value:c(k).email,"onUpdate:value":o[6]||(o[6]=a=>c(k).email=a),placeholder:i.$t("Mail.Domain.index_23")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"]),_(y,null,{default:v((()=>[x("li",B,b(i.$t("Mail.Domain.index_24")),1),x("li",null,b(i.$t("Mail.Domain.index_25")),1),x("li",null,b(i.$t("Mail.Domain.index_26")),1)])),_:1})])}}});export{y as default};