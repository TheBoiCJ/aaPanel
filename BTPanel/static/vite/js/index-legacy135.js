System.register(["./vue-legacy.js?v=1721298337096","./Tabs-legacy.js?v=1721298337096","./Ellipsis-legacy.js?v=1721298337096","./index-legacy.js?v=1721298337096"],(function(a,t){"use strict";var e,n,b,l,s,d,r,o,p,u,c,i,v,f,m,g,y,x;return{setters:[a=>{e=a.l,n=a.ah,b=a.ai,l=a.S,s=a.U,d=a.V,r=a.Z,o=a.ag,p=a.F,u=a.P,c=a.q,i=a.a3,v=a.a8,f=a.af},a=>{m=a.a,g=a._},a=>{y=a._},a=>{x=a.a}],execute:function(){var t=document.createElement("style");t.textContent=".bt-tabs-modal[data-v-8eb01819]{--n-tab-gap-vertical: 0;--n-tab-border-color: #f0f0f1;--n-tab-color: #f0f0f1;--n-tab-border-radius: 0;--n-tab-text-color-active: #333;--n-tab-padding-vertical: 0 10px 0 20px;height:100%}.bt-tabs-modal[data-v-8eb01819]>.n-tabs-nav{width:170px;background-color:#f0f0f1}.bt-tabs-modal[data-v-8eb01819]>.n-tabs-nav .n-tabs-scroll-padding{border:none}.bt-tabs-modal[data-v-8eb01819]>.n-tabs-nav .n-tabs-wrapper .n-tabs-tab-wrapper .n-tabs-tab{width:170px;height:40px;border:none;justify-content:flex-start}.bt-tabs-modal[data-v-8eb01819]>.n-tabs-nav .n-tabs-wrapper .n-tabs-tab-wrapper .n-tabs-tab.n-tabs-tab--active{background-color:#fff}.bt-tabs-modal[data-v-8eb01819]>.n-tabs-nav .n-tabs-wrapper .n-tabs-tab-wrapper .n-tabs-tab .n-tabs-tab__label{overflow:hidden}.bt-tabs-modal[data-v-8eb01819]>.n-tab-pane{overflow:auto}\n",document.head.appendChild(t),a("_",x(e({__name:"index",props:n({data:{default:()=>[]},panePadding:{default:"16px"}},{value:{},valueModifiers:{}}),emits:n(["click-self"],["update:value"]),setup(a,{expose:t,emit:e}){const n=e,x=b(a,"value"),_={},h=()=>{x.value&&_[x.value]?.init?.()};return t({init:h}),(a,t)=>{const e=y,b=g,k=m;return l(),s(k,{value:x.value,"onUpdate:value":t[0]||(t[0]=a=>x.value=a),class:"bt-tabs-modal",type:"card",placement:"left","pane-style":{padding:a.panePadding}},{default:d((()=>[(l(!0),r(p,null,o(a.data,(a=>(l(),r(p,null,[!1!==a.show?(l(),s(b,{key:a.key,name:a.key,tab:a.label,"tab-props":{onClick:t=>{a.key===x.value&&(h(),n("click-self"))}}},{tab:d((()=>[u(e,null,{default:d((()=>[c(i(a.label),1)])),_:2},1024)])),default:d((()=>[a.component?(l(),s(v(a.component),{key:0,ref_for:!0,ref:t=>((a,t)=>{_[t]=a})(t,a.key)},null,512)):f("",!0)])),_:2},1032,["name","tab","tab-props"])):f("",!0)],64)))),256))])),_:1},8,["value","pane-style"])}}}),[["__scopeId","data-v-8eb01819"]]))}}}));
