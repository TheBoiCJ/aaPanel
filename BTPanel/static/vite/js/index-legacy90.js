System.register(["./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1721298337096","./index-legacy100.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy12.js?v=1721298337096","./vue-legacy.js?v=1721298337096","./index-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy13.js?v=1721298337096","./Select-legacy.js?v=1721298337096","./use-theme-vars-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1721298337096","./InputGroupLabel-legacy.js?v=1721298337096","./InputGroup-legacy.js?v=1721298337096","./pinia-legacy.js?v=1721298337096","./useLoading-legacy.js?v=1721298337096","./file-legacy2.js?v=1721298337096","./Spin-legacy.js?v=1721298337096","./Tag-legacy.js?v=1721298337096","./Empty-legacy.js?v=1721298337096"],(function(e,a){"use strict";var l,t,u,p,s,r,n,c,d,o,i,g,_,v,y,h,m,b,j,f;return{setters:[e=>{l=e._,t=e.a},e=>{u=e._},e=>{p=e._},e=>{s=e.l,r=e.ad,n=e.r,c=e.f,d=e.S,o=e.Z,i=e.P,g=e.V,_=e._,v=e.W,y=e.B,h=e.M},e=>{m=e.K,b=e.ef},e=>{j=e._},e=>{f=e._},null,null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"p-20px"},x={class:"w-100px mr-10px"},k={class:"w-240px"},w={class:"w-350px"},I={class:"w-350px"};e("default",s({__name:"index",setup(e,{expose:s}){const{t:L}=r(),D=m(),S=n(null),U=c({type:"path",path:"",data:"",tag:""}),$=[{label:L("Docker.LocalImage.build_1"),value:"path"},{label:L("Docker.LocalImage.build_5"),value:"data"}],E={path:{trigger:["blur","input"],validator:()=>"path"!==U.type||""!==U.path.trim()||new Error(L("Docker.LocalImage.build_6"))},data:{trigger:["blur","input"],validator:()=>"data"!==U.type||""!==U.data.trim()||new Error(L("Docker.LocalImage.build_7"))}};return s({onConfirm:async()=>{await(S.value?.validate());const e="path"===U.type?{path:U.path,tag:U.tag}:{data:U.data,tag:U.tag};await b(e),D.setRefresh(!0)}}),(e,s)=>{const r=f,n=p,c=l,m=u,b=t;return d(),o("div",a,[i(b,{ref_key:"formRef",ref:S,model:v(U),rules:E},{default:g((()=>[i(c,{label:e.$t("Docker.LocalImage.build_1"),path:"path"},{default:g((()=>[_("div",x,[i(r,{value:v(U).type,"onUpdate:value":s[0]||(s[0]=e=>v(U).type=e),options:$},null,8,["value"])]),y(_("div",k,[i(n,{value:v(U).path,"onUpdate:value":s[1]||(s[1]=e=>v(U).path=e),placeholder:e.$t("Docker.LocalImage.build_2")},null,8,["value","placeholder"])],512),[[h,"path"===v(U).type]])])),_:1},8,["label"]),y(i(c,{label:" ",path:"data"},{default:g((()=>[_("div",w,[i(j,{value:v(U).data,"onUpdate:value":s[2]||(s[2]=e=>v(U).data=e),lang:"json",theme:"monokai",height:"290","show-tips":!1},null,8,["value"])])])),_:1},512),[[h,"data"===v(U).type]]),i(c,{label:e.$t("Docker.LocalImage.build_3"),"show-feedback":!1},{default:g((()=>[_("div",I,[i(m,{value:v(U).tag,"onUpdate:value":s[3]||(s[3]=e=>v(U).tag=e),rows:3,placeholder:e.$t("Docker.LocalImage.build_4")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}))}}}));
