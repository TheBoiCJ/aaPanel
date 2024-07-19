const __vite__fileDeps=["js/index101.js?v=1721298337096","js/index68.js?v=1721298337096","js/index.js?v=1721298337096","js/vue.js?v=1721298337096","js/pinia.js?v=1721298337096","css/index34.css?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang6.js?v=1721298337096","js/Select.js?v=1721298337096","js/Tag.js?v=1721298337096","js/Empty.js?v=1721298337096","js/index102.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang12.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang8.js?v=1721298337096","js/InputGroupLabel.js?v=1721298337096","js/InputGroup.js?v=1721298337096","js/index103.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang13.js?v=1721298337096","js/useLoading.js?v=1721298337096","js/file2.js?v=1721298337096","js/Spin.js?v=1721298337096"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{K as e,ai as t,aj as a,e as l,q as s,g as n,ak as i,j as o,al as r,am as c,an as u,J as d,ao as _,ap as p,h as m,n as x,aq as f,G as v,B as g,ab as k,r as h,v as w}from"./index.js?v=1721298337096";import{_ as b,a as y}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1721298337096";import{s as D}from"./pinia.js?v=1721298337096";import{_ as S}from"./index64.js?v=1721298337096";import{l as $,ad as j,r as C,f as P,U as E,V as U,W as B,S as O,_ as I,a3 as R,P as T,q as V,B as q,M as A,b as L,D as M,aj as z,af as G,a1 as J,s as K}from"./vue.js?v=1721298337096";import{_ as W}from"./Select.js?v=1721298337096";import{_ as F}from"./index68.js?v=1721298337096";import{_ as H}from"./Checkbox.js?v=1721298337096";import"./Tag.js?v=1721298337096";import"./Empty.js?v=1721298337096";const N={class:"mr-8px"},Q={class:"w-470px"},X={class:"w-470px"},Y=$({__name:"install",setup(n){const{t:i}=j(),o=e(),{setting:r}=D(o),c=C(!1),u=C(null),d=P({type:"default",url:null}),_=[{label:i("Docker.install.index_4"),value:"default"},{label:i("Docker.install.index_5"),value:"custom"},{label:i("Docker.install.index_6"),value:"binary"}],p=[{label:i("Docker.install.index_7"),value:"download.docker.com"}],m={url:{trigger:["change"],validator:()=>"custom"!==d.type||null!==d.url||new Error(i("Docker.install.index_8"))}},x=()=>{c.value=!0},f=async()=>{var e;await(null==(e=u.value)?void 0:e.validate());let l={type:"binary"===d.type?1:0};"custom"===d.type&&(l=Object.assign(l,{url:d.url})),await t(l),a(),o.getSetting()};return(e,t)=>{const a=l,n=W,i=b,o=y,v=s,g=S;return O(),E(g,{install:B(r).docker_installed&&B(r).docker_compose_installed},{desc:U((()=>[I("span",N,R(e.$t("Docker.index_2")),1),T(a,{class:"font-bold!",onClick:x},{default:U((()=>[V(R(e.$t("Public.Btn.Install")),1)])),_:1}),T(v,{show:B(c),"onUpdate:show":t[2]||(t[2]=e=>L(c)?c.value=e:null),title:e.$t("Public.Btn.Install"),footer:!0,onConfirm:f},{default:U((()=>[T(o,{ref_key:"formRef",ref:u,class:"w-640px p-20px",model:B(d),rules:m},{default:U((()=>[T(i,{label:e.$t("Docker.install.index_2")},{default:U((()=>[I("div",Q,[T(n,{value:B(d).type,"onUpdate:value":t[0]||(t[0]=e=>B(d).type=e),options:_},null,8,["value"])])])),_:1},8,["label"]),q(T(i,{label:e.$t("Docker.install.index_3"),path:"url"},{default:U((()=>[I("div",X,[T(n,{value:B(d).url,"onUpdate:value":t[1]||(t[1]=e=>B(d).url=e),options:p},null,8,["value"])])])),_:1},8,["label"]),[[A,"custom"===B(d).type]])])),_:1},8,["model"])])),_:1},8,["show","title"])])),default:U((()=>[M(e.$slots,"default")])),_:3},8,["install"])}}}),Z={class:"flex items-center text-14px"},ee={class:"mr-4px"},te={class:"w-300px"},ae={class:"w-300px"},le={class:"ml-20px text-desc"};const se=$({__name:"index",setup(t){const a=J((()=>w((()=>import("./index101.js?v=1721298337096")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])))),l=J((()=>w((()=>import("./index102.js?v=1721298337096")),__vite__mapDeps([10,6,3,2,4,5,11,12,13,14])))),S=J((()=>w((()=>import("./index103.js?v=1721298337096")),__vite__mapDeps([15,2,3,4,5,16,17,18,7,8,9,19])))),$=e(),{setting:P}=D($),{t:q}=j(),A=async()=>{await c({act:P.value.service_status?"stop":"start"}),$.getSetting()},L=async()=>{await u(),$.getSetting()},M=async()=>{d({title:q("Docker.Setting.index_13"),content:q("Docker.Setting.index_14"),onConfirm:async()=>{await _()}})},W=C(""),N=C({}),Q=async()=>{const{message:e}=await i();if(o(e)){const t=r(e,"registry_mirrors",[]);W.value=t.length>0?t[0]:"",N.value=r(e,"com_reg_mirrors",{})}return e},X=n(q("Docker.Setting.index_15"),{url:"",mirrors:N.value,onRefresh:async e=>{await Q(),null==e||e(N.value)}}),se=()=>{X.data.url=W.value,X.data.mirrors=N.value,X.show=!0},ne=n(q("Docker.Setting.index_16")),ie=()=>{ne.show=!0},oe=n(q("Docker.Setting.index_17")),re=()=>{oe.show=!0},ce=async()=>{const{message:e}=await p(),t=C(!1),a=!r(e,"status",!1),l=r(e,"msg","");m({width:400,title:q("Docker.Setting.index_18"),content:()=>{let e;return T("div",null,[T("div",{class:"mb-16px"},[l]),T(H,{checked:t.value,class:"mb-16px",onUpdateChecked:e=>{t.value=e}},(a=e=q("Docker.Setting.index_19"),"function"==typeof a||"[object Object]"===Object.prototype.toString.call(a)&&!K(a)?e:{default:()=>[e]})),T(F,{class:"text-12px"},{default:()=>[T("li",null,[q("Docker.Setting.index_20")])]})]);var a},onConfirm:async()=>{if(a&&!t.value)return x.error(q("Docker.Setting.index_21")),!1;await f({type:t.value?1:0}),$.getSetting()}})};return Q(),(e,t)=>{const n=v,i=g,o=b,r=k,c=y,u=s,d=h;return O(),E(Y,null,{default:U((()=>[T(d,{class:"p-16px"},{default:U((()=>[T(c,null,{default:U((()=>[T(o,{label:e.$t("Docker.Setting.index_1")},{default:U((()=>[I("div",Z,[I("span",ee,R(e.$t("Docker.Setting.index_2"))+R(e.$t("Public.Punctuation.Colon")),1),T(n,{class:"items-center",size:4},{default:U((()=>[I("span",null,R(B(P).service_status?e.$t("Public.Status.Enable"):e.$t("Public.Status.Stopped")),1),I("span",{class:z(["iconfont","icon-".concat(B(P).service_status?"start":"stop")])},null,2)])),_:1})]),T(i,{class:"ml-32px",onClick:A},{default:U((()=>[V(R(B(P).service_status?e.$t("Docker.Setting.index_4"):e.$t("Docker.Setting.index_3")),1)])),_:1}),T(i,{class:"ml-12px",onClick:L},{default:U((()=>[V(R(e.$t("Docker.Setting.index_5")),1)])),_:1}),B(P).service_status?G("",!0):(O(),E(i,{key:0,class:"ml-12px",onClick:M},{default:U((()=>[V(R(e.$t("Docker.Setting.index_6")),1)])),_:1}))])),_:1},8,["label"]),T(o,{label:e.$t("Docker.Setting.index_7")},{default:U((()=>[I("div",te,[T(r,{value:B(W)||e.$t("Docker.Setting.index_8"),disabled:!0,placeholder:""},null,8,["value"])]),T(i,{type:"primary",class:"ml-5px",onClick:se},{default:U((()=>[V(R(e.$t("Public.Btn.Modify")),1)])),_:1})])),_:1},8,["label"]),T(o,{label:"Docker compose"},{default:U((()=>[I("div",ae,[T(r,{value:B(P).docker_compose_path,disabled:!0,placeholder:""},null,8,["value"])]),T(i,{type:"primary",class:"ml-5px",onClick:ie},{default:U((()=>[V(R(e.$t("Public.Btn.Modify")),1)])),_:1}),I("span",le,R(e.$t("Docker.Setting.index_10")),1)])),_:1}),T(o,{label:e.$t("Docker.Setting.index_11")},{default:U((()=>[T(i,{type:"primary",onClick:re},{default:U((()=>[V(R(e.$t("Docker.Setting.index_12")),1)])),_:1})])),_:1},8,["label"]),T(o,{label:e.$t("Docker.Setting.index_18")},{default:U((()=>[T(i,{onClick:ce},{default:U((()=>[V(R(e.$t("Public.Btn.Uninstall")),1)])),_:1})])),_:1},8,["label"])])),_:1}),T(u,{show:B(X).show,"onUpdate:show":t[0]||(t[0]=e=>B(X).show=e),title:B(X).title,data:B(X).data,width:640,"min-height":164,footer:!0,component:B(a)},null,8,["show","title","data","component"]),T(u,{show:B(ne).show,"onUpdate:show":t[1]||(t[1]=e=>B(ne).show=e),title:B(ne).title,width:450,"min-height":80,footer:!0,component:B(l)},null,8,["show","title","component"]),T(u,{show:B(oe).show,"onUpdate:show":t[2]||(t[2]=e=>B(oe).show=e),title:B(oe).title,width:640,"min-height":530,footer:!0,component:B(S)},null,8,["show","title","component"])])),_:1})])),_:1})}}});export{se as default};
