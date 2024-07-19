import{e as t,r as e,m as n,i as s,h as r,a as o,t as a,b as c,c as i,d as u,w as l,f,g as p,o as h,n as d,j as y,k as g}from"./vue.js?v=1721298337096";
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let b;const v=t=>b=t,_=Symbol();function $(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var j,m;function O(){const r=t(!0),o=r.run((()=>e({})));let a=[],c=[];const i=n({install(t){v(i),i._a=t,t.provide(_,i),t.config.globalProperties.$pinia=i,c.forEach((t=>a.push(t))),c=[]},use(t){return this._a||s?a.push(t):c.push(t),this},_p:a,_a:null,_e:r,_s:new Map,state:o});return i}(m=j||(j={})).direct="direct",m.patchObject="patch object",m.patchFunction="patch function";const R=()=>{};function S(t,e,n,s=R){t.push(e);const r=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&p()&&h(r),r}function k(t,...e){t.slice().forEach((t=>{t(...e)}))}const E=t=>t();function P(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];$(r)&&$(s)&&t.hasOwnProperty(n)&&!c(s)&&!i(s)?t[n]=P(r,s):t[n]=s}return t}const z=Symbol();const{assign:w}=Object;function A(n,s,r={},o,u,p){let h;const y=w({actions:{}},r),g={deep:!0};let b,_,m,O=[],A=[];const I=o.state.value[n];let x;function J(t){let e;b=_=!1,"function"==typeof t?(t(o.state.value[n]),e={type:j.patchFunction,storeId:n,events:m}):(P(o.state.value[n],t),e={type:j.patchObject,payload:t,storeId:n,events:m});const s=x=Symbol();d().then((()=>{x===s&&(b=!0)})),_=!0,k(O,e,o.state.value[n])}p||I||(o.state.value[n]={}),e({});const M=p?function(){const{state:t}=r,e=t?t():{};this.$patch((t=>{w(t,e)}))}:R;function N(t,e){return function(){v(o);const s=Array.from(arguments),r=[],a=[];let c;k(A,{args:s,name:t,store:B,after:function(t){r.push(t)},onError:function(t){a.push(t)}});try{c=e.apply(this&&this.$id===n?this:B,s)}catch(i){throw k(a,i),i}return c instanceof Promise?c.then((t=>(k(r,t),t))).catch((t=>(k(a,t),Promise.reject(t)))):(k(r,c),c)}}const F={_p:o,$id:n,$onAction:S.bind(null,A),$patch:J,$reset:M,$subscribe(t,e={}){const s=S(O,t,e.detached,(()=>r())),r=h.run((()=>l((()=>o.state.value[n]),(s=>{("sync"===e.flush?_:b)&&t({storeId:n,type:j.direct,events:m},s)}),w({},g,e))));return s},$dispose:function(){h.stop(),O=[],A=[],o._s.delete(n)}},B=f(F);o._s.set(n,B);const C=(o._a&&o._a.runWithContext||E)((()=>o._e.run((()=>(h=t()).run(s)))));for(const t in C){const e=C[t];if(c(e)&&(!c(W=e)||!W.effect)||i(e))p||(!I||$(H=e)&&H.hasOwnProperty(z)||(c(e)?e.value=I[t]:P(e,I[t])),o.state.value[n][t]=e);else if("function"==typeof e){const n=N(t,e);C[t]=n,y.actions[t]=e}}var H,W;return w(B,C),w(a(B),C),Object.defineProperty(B,"$state",{get:()=>o.state.value[n],set:t=>{J((e=>{w(e,t)}))}}),o._p.forEach((t=>{w(B,h.run((()=>t({store:B,app:o._a,pinia:o,options:y}))))})),I&&p&&r.hydrate&&r.hydrate(B.$state,I),b=!0,_=!0,B}function I(t,e,s){let a,c;const i="function"==typeof e;function u(t,s){const u=r();(t=t||(u?o(_,null):null))&&v(t),(t=b)._s.has(a)||(i?A(a,e,c,t):function(t,e,s,r){const{state:o,actions:a,getters:c}=e,i=s.state.value[t];let u;u=A(t,(function(){i||(s.state.value[t]=o?o():{});const e=y(s.state.value[t]);return w(e,a,Object.keys(c||{}).reduce(((e,r)=>(e[r]=n(g((()=>{v(s);const e=s._s.get(t);return c[r].call(e,e)}))),e)),{}))}),e,s,0,!0)}(a,c,t));return t._s.get(a)}return"string"==typeof t?(a=t,c=i?s:e):(c=t,a=t.id),u.$id=a,u}function x(t){{t=a(t);const e={};for(const n in t){const s=t[n];(c(s)||i(s))&&(e[n]=u(t,n))}return e}}function J(t,e){var n;return t="object"==typeof(n=t)&&null!==n?t:Object.create(null),new Proxy(t,{get:(t,n,s)=>"key"===n?Reflect.get(t,n,s):Reflect.get(t,n,s)||Reflect.get(e,n,s)})}function M(t,{storage:e,serializer:n,key:s,debug:r}){try{const r=null==e?void 0:e.getItem(s);r&&t.$patch(null==n?void 0:n.deserialize(r))}catch(o){r&&console.error("[pinia-plugin-persistedstate]",o)}}function N(t,{storage:e,serializer:n,key:s,paths:r,debug:o}){try{const o=Array.isArray(r)?function(t,e){return e.reduce(((e,n)=>{const s=n.split(".");return function(t,e,n){return e.slice(0,-1).reduce(((t,e)=>/^(__proto__)$/.test(e)?{}:t[e]=t[e]||{}),t)[e[e.length-1]]=n,t}(e,s,function(t,e){return e.reduce(((t,e)=>null==t?void 0:t[e]),t)}(t,s))}),{})}(t,r):t;e.setItem(s,n.serialize(o))}catch(a){o&&console.error("[pinia-plugin-persistedstate]",a)}}var F=function(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:s=n},store:r,pinia:o}=e;if(!s)return;if(!(r.$id in o.state.value)){const t=o._s.get(r.$id.replace("__hot:",""));return void(t&&Promise.resolve().then((()=>t.$persist())))}const a=(Array.isArray(s)?s.map((e=>J(e,t))):[J(s,t)]).map(function(t,e){return n=>{var s;try{const{storage:r=localStorage,beforeRestore:o,afterRestore:a,serializer:c={serialize:JSON.stringify,deserialize:JSON.parse},key:i=e.$id,paths:u=null,debug:l=!1}=n;return{storage:r,beforeRestore:o,afterRestore:a,serializer:c,key:(null!=(s=t.key)?s:t=>t)("string"==typeof i?i:i(e.$id)),paths:u,debug:l}}catch(r){return n.debug&&console.error("[pinia-plugin-persistedstate]",r),null}}}(t,r)).filter(Boolean);r.$persist=()=>{a.forEach((t=>{N(r.$state,t)}))},r.$hydrate=({runHooks:t=!0}={})=>{a.forEach((n=>{const{beforeRestore:s,afterRestore:o}=n;t&&(null==s||s(e)),M(r,n),t&&(null==o||o(e))}))},a.forEach((t=>{const{beforeRestore:n,afterRestore:s}=t;null==n||n(e),M(r,t),null==s||s(e),r.$subscribe(((e,n)=>{N(n,t)}),{detached:!0})}))}}();export{F as a,O as c,I as d,x as s};
