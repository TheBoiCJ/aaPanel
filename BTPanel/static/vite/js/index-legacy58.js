System.register(["./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1721298337096","./index-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy7.js?v=1721298337096","./pinia-legacy.js?v=1721298337096","./index-legacy63.js?v=1721298337096","./vue-legacy.js?v=1721298337096","./Select-legacy.js?v=1721298337096","./useTableColumns-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1721298337096","./InputGroupLabel-legacy.js?v=1721298337096","./InputGroup-legacy.js?v=1721298337096","./index-legacy64.js?v=1721298337096","./Tag-legacy.js?v=1721298337096","./Empty-legacy.js?v=1721298337096","./Progress-legacy.js?v=1721298337096"],(function(e,a){"use strict";var l,s,t,d,u,r,n,i,o,p,c,b,_,v,f,m,g,x,y,h,w,D,j,$,U,k,A;return{setters:[e=>{l=e._,s=e.a},e=>{t=e.u,d=e.d5,u=e.ab,r=e.e,n=e.n},e=>{i=e._},e=>{o=e.s},e=>{p=e.g},e=>{c=e.l,b=e.ad,_=e.r,v=e.f,f=e.k,m=e.S,g=e.U,x=e.V,y=e.P,h=e._,w=e.W,D=e.af,j=e.q,$=e.a3,U=e.t},e=>{k=e._},e=>{A=e._},null,null,null,null,null,null,null],execute:function(){const a={class:"w-240px"},R={class:"w-100px ml-8px"},S={class:"w-240px"},E={class:"w-240px"},q={class:"w-240px"},L={class:"w-240px"},C={class:"w-240px"},I={class:"ml-8px"};e("default",c({__name:"index",setup(e,{expose:c}){const{t:G}=b(),P=t(),{remoteList:Q}=o(P),T=_(null),z=v({sid:Q.value.length>0?Q.value[0].id:null,name:"",codeing:"utf8",db_user:"",password:"",dataAccess:"127.0.0.1",address:"127.0.0.1",active:!1,ssl:""}),M=_([{label:"utf-8",value:"utf8"},{label:"utf8mb4",value:"utf8mb4"},{label:"gbk",value:"gbk"},{label:"big5",value:"big5"}]),V=_([{label:G("Database.form.index_12"),value:"127.0.0.1"},{label:G("Database.form.index_13"),value:"%"},{label:G("Database.form.index_14"),value:"ip"}]),W=f((()=>Q.value.map((e=>({label:`${e.ps} (${e.db_host})`,value:e.id}))))),B={name:{required:!0,message:G("Database.form.index_15"),trigger:["blur","change"]},db_user:{required:!0,message:G("Database.form.index_16"),trigger:["blur","change"]},password:{required:!0,message:G("Database.form.index_17"),trigger:["blur","change"]},sid:{trigger:"change",validator:(e,a)=>null!==a||new Error(G("Database.form.index_18"))}},F=e=>{z.db_user=e},H=e=>{z.address="ip"===e?"":e},J=e=>{z.ssl=e?"REQUIRE SSL":""},K=()=>{p()};return c({onConfirm:async({hide:e})=>{await(T.value?.validate());const a=(()=>{const e=U(z),{sid:a}=e;if(null===a)throw n.error(G("Database.form.index_18")),new Error(G("Database.form.index_18"));return{...e,sid:a,ps:e.name,dtype:"MySQL",address:"ip"===z.dataAccess?z.address.trim().split("\n").join(","):z.address}})();await d(a),P.setRefresh(!0),e()}}),(e,t)=>{const d=u,n=k,o=l,p=i,c=r,b=A,_=s;return m(),g(_,{ref_key:"formRef",ref:T,model:w(z),rules:B,class:"p-20px"},{default:x((()=>[y(o,{label:e.$t("Database.form.index_1"),path:"name"},{default:x((()=>[h("div",a,[y(d,{value:w(z).name,"onUpdate:value":[t[0]||(t[0]=e=>w(z).name=e),F],placeholder:e.$t("Database.form.index_2")},null,8,["value","placeholder"])]),h("div",R,[y(n,{value:w(z).codeing,"onUpdate:value":t[1]||(t[1]=e=>w(z).codeing=e),options:w(M)},null,8,["value","options"])])])),_:1},8,["label"]),y(o,{label:e.$t("Database.form.index_3"),path:"db_user"},{default:x((()=>[h("div",S,[y(d,{value:w(z).db_user,"onUpdate:value":t[2]||(t[2]=e=>w(z).db_user=e),placeholder:e.$t("Database.form.index_4")},null,8,["value","placeholder"])])])),_:1},8,["label"]),y(o,{label:e.$t("Database.form.index_5"),path:"password"},{default:x((()=>[h("div",E,[y(p,{value:w(z).password,"onUpdate:value":t[3]||(t[3]=e=>w(z).password=e),placeholder:""},null,8,["value"])])])),_:1},8,["label"]),y(o,{label:e.$t("Database.form.index_6"),path:"dataAccess"},{default:x((()=>[h("div",q,[y(n,{value:w(z).dataAccess,"onUpdate:value":[t[4]||(t[4]=e=>w(z).dataAccess=e),H],options:w(V)},null,8,["value","options"])])])),_:1},8,["label"]),"ip"===w(z).dataAccess?(m(),g(o,{key:0,label:e.$t("Database.form.index_7"),path:"address"},{default:x((()=>[h("div",L,[y(d,{value:w(z).address,"onUpdate:value":t[5]||(t[5]=e=>w(z).address=e),type:"textarea",autosize:{minRows:3,maxRows:3},placeholder:e.$t("Database.form.index_8")},null,8,["value","placeholder"])])])),_:1},8,["label"])):D("",!0),y(o,{label:e.$t("Database.form.index_9"),path:"sid"},{default:x((()=>[h("div",C,[y(n,{value:w(z).sid,"onUpdate:value":t[6]||(t[6]=e=>w(z).sid=e),options:w(W)},null,8,["value","options"])]),h("div",I,[y(c,{onClick:K},{default:x((()=>[j($(e.$t("Database.form.index_10")),1)])),_:1})])])),_:1},8,["label"]),y(o,{label:e.$t("Database.form.index_11"),"show-feedback":!1},{default:x((()=>[y(b,{value:w(z).active,"onUpdate:value":[t[7]||(t[7]=e=>w(z).active=e),J]},null,8,["value"])])),_:1},8,["label"])])),_:1},8,["model"])}}}))}}}));
