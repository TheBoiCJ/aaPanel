System.register(["./index-legacy135.js?v=1721298337096","./index-legacy68.js?v=1721298337096","./index-legacy.js?v=1721298337096","./vue-legacy.js?v=1721298337096","./Checkbox-legacy.js?v=1721298337096","./useLoading-legacy.js?v=1721298337096","./site-legacy2.js?v=1721298337096","./Select-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1721298337096","./useTableColumns-legacy.js?v=1721298337096","./Tabs-legacy.js?v=1721298337096","./omit-legacy.js?v=1721298337096","./Ellipsis-legacy.js?v=1721298337096","./pinia-legacy.js?v=1721298337096","./Tag-legacy.js?v=1721298337096","./Empty-legacy.js?v=1721298337096","./Progress-legacy.js?v=1721298337096"],(function(a,e){"use strict";var t,n,l,s,i,p,d,o,u,r,c,m,v,b,h,_,x,y,g,f,w,D,$,k,j,C,P,S,U,T,B,E,L,N,q,z,I,A,F,H,M,G,J,R,V,W,Z,K,O,Q,X,Y,aa,ea;return{setters:[a=>{t=a._},a=>{n=a._},a=>{l=a.d6,s=a.ar,i=a.h,p=a.d7,d=a.n,o=a.d8,u=a.al,r=a.b5,c=a.d9,m=a.j,v=a.p,b=a.B,h=a.a,_=a.k,x=a.da,y=a.G,g=a.db,f=a.dc,w=a.dd,D=a.de,$=a.df,k=a.cj,j=a.dg,C=a.cJ,P=a.ab},a=>{S=a.A,U=a.a,T=a.l,B=a.ad,E=a.r,L=a.S,N=a.Z,q=a._,z=a.P,I=a.V,A=a.q,F=a.a3,H=a.W,M=a.a5,G=a.a6,J=a.f,R=a.b,V=a.F,W=a.af,Z=a.d},a=>{K=a._},a=>{O=a.u},a=>{Q=a.an},a=>{X=a._},a=>{Y=a._,aa=a.a},a=>{ea=a._},null,null,null,null,null,null,null],execute:function(){var e=document.createElement("style");e.textContent=".n-button[data-v-1a5b087a]{padding:0 24px;--n-height: 40px;--n-border-radius: 2px;--n-color: #eee;--n-text-color: #333;--n-border: none;--n-color-hover: #20a53a;--n-border-hover: 1px solid #20a53a;--n-text-color-hover: #fff;--n-color-focus: #20a53a;--n-text-color-focus: #fff;--n-border-focus: 1px solid #20a53a}.bg-recommend[data-v-1a5b087a]{position:absolute;width:32px;height:32px;top:-1px;left:-1px;background-image:url(/static/vite/images/recommend.svg);background-repeat:no-repeat;background-position:center;background-size:contain}\n",document.head.appendChild(e);const ta=Symbol("php-admin");function na(a,e,t,n){return new Promise((l=>{const s=`${a}/index.php?lang=en`,i=document.createElement("form"),p=`\n\t\t\t<input type="text" name="pma_username" id="pma_username" value="${t}" />\n\t\t\t<input type="password" name="pma_password" id="pma_password" value="${n}" />\n\t\t\t<input type="text" name="server" value="1" />\n\t\t\t<input type="text" name="target" value="index.php" />\n\t\t\t<input type="text" name="db" id="db" value="${e}" />\n\t\t`;i.action=s,i.setAttribute("public-data",s),i.method="post",i.target="_blank",i.style.display="none",i.innerHTML=p,document.body.appendChild(i),i.submit(),document.body.removeChild(i),l(i)}))}async function la(a,e){const{data:t}=await l.get("/phpmyadmin/index.php?lang=en"),n={session:"",token:""},s=t.match(/"set_session"\s+value="(\w+)"/),i=t.match(/"token"\s+value="(\w+)"/);s&&s.length>1&&(n.session=s[1]||""),i&&i.length>1&&(n.token=i[1]||"");const p=document.createElement("form");p.action="/phpmyadmin/index.php",p.method="post",p.target="_blank",p.style.display="none";const d=`\n\t\t<input  name="set_session" id="input_session" value="${n.session}" />\n\t\t<input type="text" name="pma_username" id="pma_username" value="${a}" size="24" />\n\t\t<input type="password" name="pma_password" id="pma_password" value="${e}" size="24" />\n\t\t<input  name="token" id="input_token" value="${n.token}" />\n\t\t<input  name="target" id="input_target" value="index.php" />\n\t\t<input  name="server" value="1" id="input_server" />\n\t`;p.innerHTML=d,document.body.appendChild(p),p.submit(),document.body.removeChild(p)}const sa={class:"p-4px"},ia={class:"mb-16px"},pa={class:"text-error"},da={class:"mt-20px"},oa=(a=>(M("data-v-1a5b087a"),a=a(),G(),a))((()=>q("span",{class:"bg-recommend"},null,-1))),ua="phpmyadmin",ra=T({__name:"index",setup(a,{expose:e}){const{t:t}=B(),l=s(),{mysqlInfo:h}=U(ta),_=E(!1),x=a=>{i({title:t("Database.phpadmin.index_12",[t(a?"Public.Status.Start":"Public.Status.Stop")]),content:t("Database.phpadmin.index_13",[t(a?"Public.Status.start":"Public.Status.stop")]),onConfirm:async()=>{await p({name:ua,type:a?"start":"stop"}),g()}})},y=async a=>{const e=d.loading(t("Database.phpadmin.index_14"));try{const{message:n}=await o({sName:ua}),s=u(n,"ext.url",""),i=u(n,"ext.auth",!1);if("panel"==a){if(i)return d.error(t("Database.phpadmin.index_15")),void e.close();if(l.isFree)return r({source:160}),void e.close();if(h.value)await la(h.value.username,h.value.password);else{const{message:a}=await c(),e=u(a,"result","");await la("root",e)}}else if(h.value)await na(s,h.value.name,h.value.username,h.value.password);else{const{message:a}=await c(),e=u(a,"result","");await na(s,"","root",e)}e.close()}catch(n){e.close(),console.error(n)}},g=async()=>{const{message:a}=await o({sName:ua});m(a)&&(_.value=a.status)};return g(),e({init:g}),(a,e)=>{const t=K,l=n,s=v,i=b;return L(),N("div",sa,[q("div",ia,[z(t,{checked:H(_),"onUpdate:checked":x},{default:I((()=>[A(F(a.$t("Database.phpadmin.index_4")),1)])),_:1},8,["checked"])]),z(l,{class:"mb-20px"},{default:I((()=>[q("li",pa,F(a.$t("Database.phpadmin.index_5")),1)])),_:1}),z(s,{dashed:""}),q("div",da,[z(i,{onClick:e[0]||(e[0]=a=>y("panel"))},{default:I((()=>[q("span",null,F(a.$t("Database.phpadmin.index_11")),1),oa])),_:1}),z(i,{class:"ml-24px",onClick:e[1]||(e[1]=a=>y())},{default:I((()=>[A(F(a.$t("Database.phpadmin.index_6")),1)])),_:1})]),z(l,{class:"mt-16px"},{default:I((()=>[q("li",null,F(a.$t("Database.phpadmin.index_7")),1),q("li",null,F(a.$t("Database.phpadmin.index_8")),1),q("li",null,F(a.$t("Database.phpadmin.index_9")),1),q("li",null,F(a.$t("Database.phpadmin.index_10")),1)])),_:1})])}}}),ca=h(ra,[["__scopeId","data-v-1a5b087a"]]),ma={class:"w-160px"},va=T({__name:"index",setup(a,{expose:e}){const{t:t}=B(),n=J({php_version:null}),l=E([]),{loading:s,setLoading:i}=O(),p=async()=>{try{i(!0);const[a,e]=await Promise.all([Q(),o({sName:"phpmyadmin"})]),{message:t}=a;_(t)&&(l.value=t.map((a=>({label:a.name,value:a.version}))));const{message:s}=e;n.php_version=u(s,"ext.phpversion",null)}finally{i(!1)}},r=async()=>{const a=n.php_version;null!==a?(await x({phpversion:a}),p()):d.error(t("Database.phpadmin.index_32"))};return p(),e({init:p}),(a,e)=>{const t=X,i=b,p=y;return L(),N("div",null,[z(p,{class:"items-center"},{default:I((()=>[q("span",null,F(a.$t("Database.phpadmin.index_31")),1),q("div",ma,[z(t,{value:H(n).php_version,"onUpdate:value":e[0]||(e[0]=a=>H(n).php_version=a),loading:H(s),options:H(l)},null,8,["value","loading","options"])]),z(i,{type:"primary",onClick:r},{default:I((()=>[A(F(a.$t("Public.Btn.Save")),1)])),_:1})])),_:1})])}}}),ba={class:"p-4px"},ha={class:"w-142px mr-8px"},_a={class:"w-142px mr-8px"},xa={class:"w-240px"},ya={class:"w-240px"},ga={class:"w-240px"},fa=T({__name:"index",setup(a,{expose:e}){const{t:t}=B(),l=E(null),s=E(!1),p=E(null),r=E(!1);let c=!1;const m=J({username:"",password:"",repass:""}),h=async()=>{const a=l.value;null!==a?(await g({port:a}),T()):d.error(t("Database.phpadmin.index_25"))},_=async a=>{await f({v:a?1:0}),G()},x=async()=>{const a=p.value;null!==a?(await w({port:a}),G()):d.error(t("Database.phpadmin.index_26"))},y=a=>{!a&&c?i({title:t("Public.Confirm.Title"),content:t("Database.phpadmin.index_27"),onConfirm:async()=>{await D(),T()}}):r.value=a},S=async()=>{""!==m.password.trim()&&""!==m.username.trim()?m.password.length<3||m.username.length<3?d.error(t("Database.phpadmin.index_29")):m.password===m.repass?(await $({username:m.username,password:m.password}),T()):d.error(t("Database.phpadmin.index_30")):d.error(t("Database.phpadmin.index_28"))},U=E(!1),T=async()=>{try{U.value=!0;const{message:a}=await o({sName:"phpmyadmin"}),e=u(a,"ext.port",null);l.value=e?k(e):null,r.value=u(a,"ext.auth",!1),c=r.value}finally{U.value=!1}},M=E(!1),G=async()=>{try{M.value=!0;const{message:a}=await j();s.value=u(a,"status",!1);const e=u(a,"port",null);p.value=e?k(e):null}finally{M.value=!1}},Z=()=>{Promise.all([T(),G()])};return Z(),e({init:Z}),(a,e)=>{const t=C,i=b,d=Y,o=v,u=ea,c=P,g=n,f=aa;return L(),N("div",ba,[z(f,{"label-width":"160"},{default:I((()=>[z(d,{label:a.$t("Database.phpadmin.index_16")},{default:I((()=>[q("div",ha,[z(t,{value:H(l),"onUpdate:value":e[0]||(e[0]=a=>R(l)?l.value=a:null),min:0,max:66325,"show-button":!1,loading:H(U),placeholder:""},null,8,["value","loading"])]),z(i,{type:"primary",onClick:h},{default:I((()=>[A(F(a.$t("Public.Btn.Save")),1)])),_:1})])),_:1},8,["label"]),z(o,{dashed:""}),z(d,{class:"mt-20px",label:a.$t("Database.phpadmin.index_17")},{default:I((()=>[z(u,{value:H(s),loading:H(M),"onUpdate:value":_},null,8,["value","loading"])])),_:1},8,["label"]),z(d,{label:a.$t("Database.phpadmin.index_18")},{default:I((()=>[q("div",_a,[z(t,{value:H(p),"onUpdate:value":e[1]||(e[1]=a=>R(p)?p.value=a:null),min:0,max:66325,"show-button":!1,loading:H(M),placeholder:""},null,8,["value","loading"])]),z(i,{type:"primary",onClick:x},{default:I((()=>[A(F(a.$t("Public.Btn.Save")),1)])),_:1})])),_:1},8,["label"]),z(o,{dashed:""}),z(d,{class:"mt-20px",label:a.$t("Database.phpadmin.index_19")},{default:I((()=>[z(u,{value:H(r),loading:H(U),"onUpdate:value":y},null,8,["value","loading"])])),_:1},8,["label"]),H(r)?(L(),N(V,{key:0},[z(d,{label:a.$t("Database.phpadmin.index_20")},{default:I((()=>[q("div",xa,[z(c,{value:H(m).username,"onUpdate:value":e[2]||(e[2]=a=>H(m).username=a),placeholder:a.$t("Database.phpadmin.index_23")},null,8,["value","placeholder"])])])),_:1},8,["label"]),z(d,{label:a.$t("Database.phpadmin.index_21")},{default:I((()=>[q("div",ya,[z(c,{value:H(m).password,"onUpdate:value":e[3]||(e[3]=a=>H(m).password=a),type:"password",placeholder:a.$t("Database.phpadmin.index_23")},null,8,["value","placeholder"])])])),_:1},8,["label"]),z(d,{label:a.$t("Database.phpadmin.index_22")},{default:I((()=>[q("div",ga,[z(c,{value:H(m).repass,"onUpdate:value":e[4]||(e[4]=a=>H(m).repass=a),type:"password",placeholder:a.$t("Database.phpadmin.index_23")},null,8,["value","placeholder"])])])),_:1},8,["label"]),z(d,{label:" "},{default:I((()=>[z(i,{type:"primary",onClick:S},{default:I((()=>[A(F(a.$t("Public.Btn.Save")),1)])),_:1})])),_:1})],64)):W("",!0),z(g,null,{default:I((()=>[q("li",null,F(a.$t("Database.phpadmin.index_24")),1)])),_:1})])),_:1})])}}}),wa={class:"h-580px"};a("default",T({__name:"index",props:{row:{default:void 0}},setup(a){const e=Z(a,"row"),{t:n}=B(),l=E("service"),s=[{key:"service",label:n("Database.phpadmin.index_1"),component:ca},{key:"php",label:n("Database.phpadmin.index_2"),component:va},{key:"safe",label:n("Database.phpadmin.index_3"),component:fa}];return S(ta,{mysqlInfo:e}),(a,e)=>{const n=t;return L(),N("div",wa,[z(n,{value:H(l),"onUpdate:value":e[0]||(e[0]=a=>R(l)?l.value=a:null),ref:"tabsRef",data:s},null,8,["value"])])}}}))}}}));
