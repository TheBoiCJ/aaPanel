import{ar as e,n as t,et as a,_ as s,bu as o,B as l,a as i,k as n,e as p}from"./index.js?v=1721298337096";import{o as r,g as m,a as c}from"./index27.js?v=1721298337096";import{l as d,ad as u,d as v,r as y,S as f,Z as x,_ as g,a3 as A,W as h,F as I,ag as _,U as b,P as j,V as C,q as H,b as w,H as E,ae as L,X as B}from"./vue.js?v=1721298337096";import{_ as S}from"./Select.js?v=1721298337096";import{_ as V}from"./Checkbox.js?v=1721298337096";import{e as T,c as P}from"./DataTable.js?v=1721298337096";import{_ as k}from"./Alert.js?v=1721298337096";import"./pinia.js?v=1721298337096";import"./useLoop.js?v=1721298337096";import"./useTableColumns.js?v=1721298337096";import"./Progress.js?v=1721298337096";import"./index57.js?v=1721298337096";import"./Tag.js?v=1721298337096";import"./Countdown.js?v=1721298337096";import"./use-theme-vars.js?v=1721298337096";import"./useTableData.js?v=1721298337096";import"./Skeleton.js?v=1721298337096";import"./useLoading.js?v=1721298337096";import"./index.vue_vue_type_script_setup_true_lang9.js?v=1721298337096";import"./index87.js?v=1721298337096";import"./data.js?v=1721298337096";import"./color.js?v=1721298337096";import"./index.vue_vue_type_script_setup_true_lang10.js?v=1721298337096";import"./Tabs.js?v=1721298337096";import"./omit.js?v=1721298337096";import"./Empty.js?v=1721298337096";import"./Ellipsis.js?v=1721298337096";const q={class:"recommend-item"},D={class:"recommend-title"},N={class:"content"},Q={class:"soft-list"},R={key:0,class:"flex-center w-32px"},U=["src"],W={class:"flex items-center my-20px"},F={class:"mr-10px"},M={class:"w-280px"},Y={class:"w-280px"},Z={class:"flex justify-center"},J=i(d({__name:"item",props:{data:{},memTotal:{default:0}},emits:["close"],setup(i,{emit:n}){const p=i,m=n,{t:c}=u(),d=e(),E=v((()=>p.data)),L=v((()=>p.memTotal)),B=y((()=>{const{soft:e}=E.value,t={};return e.forEach((e=>{t[e.type]={value:e.value,checked:!0},"DNS-Server"!==e.type&&"Mail-Server"!==e.type||(t[e.type].checked=!1)})),t})()),k=y(1),J=new Map([["5.1",{max:256,rec:512}],["5.5",{max:600,rec:1024}],["5.6",{max:800,rec:1024}],["5.7",{max:1500,rec:2048}],["8.0",{max:5e3,rec:6144}],["AliSQL",{max:800,rec:1024}],["mariadb_10.0",{max:800,rec:1024}],["mariadb_10.1",{max:1500,rec:2048}]]),K=new Map([["5.2","4.0"],["5.3","4.0"],["5.4","4.4"],["5.5","4.4"]]),X={mysql:e=>{const a=J.get(e),s=(null==a?void 0:a.max)||0,o=(null==a?void 0:a.rec)||0;if(L.value<s){const a=c("Home.Install.index_10",[o/1024,e]);t.error(a)}},apache:e=>{"2.2"==e?t.info(c("Home.Install.index_11",["2.2","php5_module"])):t.info(c("Home.Install.index_11",["2.4","php-fpm"]))},php:e=>{if("lnmp"===E.value.type){const t=K.get(e)||"4.9";B.value.phpMyAdmin.value=t}if("lamp"===E.value.type){const a=e;"2.2"==B.value.Apache.value?"5.2"!=a&&"5.3"!=a&&"5.4"!=a&&(t.error(c("Home.Install.index_12",["2.2",a])),B.value.PHP.value="5.4"):"5.2"==a&&(t.error(c("Home.Install.index_12",["2.4",a])),B.value.PHP.value="5.4")}}},z=async()=>{const e=t.loading(c("Home.Install.index_13"));try{const e=(()=>{const e=[];return Object.entries(B.value).forEach((([t,a])=>{if(a.checked){let s=t.toLowerCase();"pure-ftpd"===s&&(s="pureftpd"),"php"===s&&(s="php-"+a.value),"dns-server"===s&&(s="dns_manager"),"mail-server"===s&&(s="mail_sys"),e.push({sName:s,version:"".concat(a.value),type:k.value,id:"lnmp"===E.value.type?50:41})}})),e})();for(let t=0;t<e.length;t++)await a(e[t]);t.success(c("Home.Install.index_14")),d.getConfigSimple(),m("close"),r()}finally{e.close()}};return(e,t)=>{const a=s,i=S,n=V,p=T,r=o,m=P,c=l;return f(),x("div",q,[g("div",D,A(h(E).title),1),g("div",N,[g("ul",Q,[(f(!0),x(I,null,_(h(E).soft,(e=>(f(),x("li",{key:e.type},["mail"===e.icon||"dns"===e.icon?(f(),x("div",R,[g("img",{class:"w-20px",src:"mail"===e.icon?h("/static/vite/images/mail-server.png"):h("data:image/png;base64,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"),alt:""},null,8,U)])):(f(),b(a,{key:1,name:"soft-".concat(e.icon),size:"32"},null,8,["name"])),j(i,{value:h(B)[e.type].value,"onUpdate:value":[t=>h(B)[e.type].value=t,t=>((e,t)=>{e=e.toLowerCase();const a=X[e];null==a||a(t)})(e.type,t)],class:"flex-1 ml-10px mr-20px",options:e.options},null,8,["value","onUpdate:value","options"]),j(n,{checked:h(B)[e.type].checked,"onUpdate:checked":t=>h(B)[e.type].checked=t},null,8,["checked","onUpdate:checked"])])))),128))]),g("div",W,[g("span",F,A(e.$t("Home.Install.index_4")),1),j(m,{value:h(k),"onUpdate:value":t[0]||(t[0]=e=>w(k)?k.value=e:null)},{default:C((()=>[j(r,{trigger:"hover"},{trigger:C((()=>[j(p,{value:1},{default:C((()=>[H(A(e.$t("Home.Install.index_5")),1)])),_:1})])),default:C((()=>[g("div",M,A(e.$t("Home.Install.index_6")),1)])),_:1}),j(r,{trigger:"hover"},{trigger:C((()=>[j(p,{value:0},{default:C((()=>[H(A(e.$t("Home.Install.index_7")),1)])),_:1})])),default:C((()=>[g("div",Y,A(e.$t("Home.Install.index_8")),1)])),_:1})])),_:1},8,["value"])]),g("div",Z,[j(c,{type:"primary",onClick:z},{default:C((()=>[H(A(e.$t("Home.Install.index_9")),1)])),_:1})])])])}}}),[["__scopeId","data-v-60986ac0"]]),K={class:"w-680px p-20px"},X={class:"recommend-list"},z=i(d({__name:"index",props:{memTotal:{}},emits:["close"],setup(e,{expose:t,emit:a}){const s=e,o=a,{t:l}=u(),{memTotal:i}=s,r=E([]),d=[{type:"lnmp",title:l("Home.Install.index_2"),soft:[{type:"Nginx",icon:"nginx",value:void 0,options:[]},{type:"MySQL",icon:"mysql",value:void 0,options:[]},{type:"PHP",icon:"php",value:void 0,options:[]},{type:"Pure-Ftpd",icon:"pure-ftpd",value:void 0,options:[]},{type:"phpMyAdmin",icon:"phpmyadmin",value:void 0,options:[]},{type:"DNS-Server",icon:"dns",value:void 0,options:[]},{type:"Mail-Server",icon:"mail",value:void 0,options:[]}]},{type:"lamp",title:l("Home.Install.index_3"),soft:[{type:"Apache",icon:"apache",value:void 0,options:[]},{type:"MySQL",icon:"mysql",value:void 0,options:[]},{type:"PHP",icon:"php",value:void 0,options:[]},{type:"Pure-Ftpd",icon:"pure-ftpd",value:void 0,options:[]},{type:"phpMyAdmin",icon:"phpmyadmin",value:void 0,options:[]},{type:"DNS-Server",icon:"dns",value:void 0,options:[]},{type:"Mail-Server",icon:"mail",value:void 0,options:[]}]}],v=L(),y=()=>{v.push("/soft")},w=()=>{o("close")};(async()=>{const{message:e}=await m();n(e)&&e.forEach((e=>{const{name:t}=e;if("Tomcat"===t)return;let a;const s=[];e.versions.forEach((({version:e})=>{(!a&&("PHP"===t&&"8.3"===e)||"MySQL"===t&&"5.7"===e||"phpMyAdmin"===t&&"5.2"===e)&&(a=e),s.push({label:"".concat(t," ").concat(e),value:e})})),!a&&s.length>0&&(a=s[0].value),d.forEach((e=>{for(let o=0;o<e.soft.length;o++)if(e.soft[o].type===t){e.soft[o].value=a,e.soft[o].options=s;break}})),r.value=d}))})();return t({onClose:()=>{c()}}),(e,t)=>{const a=p,s=B("i18n-t"),o=k;return f(),x("div",K,[j(o,{class:"mb-16px",type:"warning"},{default:C((()=>[j(s,{tag:"div",keypath:"Home.Install.index_1.0"},{btn:C((()=>[j(a,{onClick:y},{default:C((()=>[H(A(e.$t("Home.Install.index_1.1")),1)])),_:1})])),_:1})])),_:1}),g("div",X,[(f(!0),x(I,null,_(h(r),(e=>(f(),b(J,{key:e.type,data:e,"mem-total":h(i),onClose:w},null,8,["data","mem-total"])))),128))])])}}}),[["__scopeId","data-v-24bd8f9b"]]);export{z as default};
