System.register(["./index-legacy68.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1721298337096","./site-legacy2.js?v=1721298337096","./index-legacy.js?v=1721298337096","./useLoading-legacy.js?v=1721298337096","./vue-legacy.js?v=1721298337096","./Select-legacy.js?v=1721298337096","./pinia-legacy.js?v=1721298337096","./Tag-legacy.js?v=1721298337096","./Empty-legacy.js?v=1721298337096"],(function(e,a){"use strict";var l,t,n,s,i,u,c,d,o,_,p,r,g,y,f,m,v,x,j,P,S,b;return{setters:[e=>{l=e._},e=>{t=e._,n=e.a},e=>{s=e.aM,i=e.aN},e=>{u=e.j,c=e.k,d=e.z},e=>{o=e.u},e=>{_=e.l,p=e.ad,r=e.r,g=e.f,y=e.S,f=e.Z,m=e.P,v=e.V,x=e._,j=e.W,P=e.a3,S=e.t},e=>{b=e._},null,null,null],execute:function(){const a={class:"px-20px py-24px"},h={class:"w-300px"};e("default",_({__name:"index",setup(e,{expose:_}){const{t:w}=p(),H=r(null),{loading:$,setLoading:k}=o(),L=g({name:"0"}),z=r([]),C=()=>{z.value.unshift({label:w("Site.PHP.index_58"),value:"0"})};return C(),(async()=>{try{k(!0);const{message:e}=await s();if(u(e)){const{sites:a,defaultSite:l}=e;z.value=c(a)?a.map((e=>({label:e.name,value:e.name}))):[],C(),L.name=d(l)?l:"0"}}finally{k(!1)}})(),_({onConfirm:async({hide:e})=>{await(H.value?.validate()),await i(S(L)),e()}}),(e,s)=>{const i=b,u=t,c=n,d=l;return y(),f("div",a,[m(c,{ref_key:"formRef",ref:H,model:j(L)},{default:v((()=>[m(u,{label:e.$t("Site.PHP.index_55"),path:"php_version"},{default:v((()=>[x("div",h,[m(i,{value:j(L).name,"onUpdate:value":s[0]||(s[0]=e=>j(L).name=e),loading:j($),options:j(z)},null,8,["value","loading","options"])])])),_:1},8,["label"])])),_:1},8,["model"]),m(d,{class:"mt-8px"},{default:v((()=>[x("li",null,P(e.$t("Site.PHP.index_56")),1),x("li",null,P(e.$t("Site.PHP.index_57")),1)])),_:1})])}}}))}}}));
