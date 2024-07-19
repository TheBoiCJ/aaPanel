import{l as e,ah as a,ai as l,k as s,r as t,S as n,U as o,V as d,_ as i,P as u,W as c,b as p,Z as r,q as v,F as f,af as h,a3 as m,B as y,M as k}from"./vue.js?v=1721298337096";import{bm as b,B as g,G as x}from"./index.js?v=1721298337096";import{_}from"./Checkbox.js?v=1721298337096";import{_ as w}from"./Select.js?v=1721298337096";const K={class:"flex justify-center w-42px"},j={class:"min-w-140px"},B={class:"ml-8px"},R=e({__name:"index",props:a({data:{default:()=>[]},rowKey:{default:"id"},options:{default:()=>[]}},{checkedRowKeys:{default:()=>[]},checkedRowKeysModifiers:{}}),emits:["update:checkedRowKeys"],setup(e){const a=e,R=l(e,"checkedRowKeys"),C=e=>e[a.rowKey],S=s({get:()=>R.value.length>0&&R.value.length===a.data.length,set(e){R.value=e?a.data.map((e=>C(e))):[]}}),U=s((()=>0===a.data.length)),M=s((()=>R.value.length>0&&R.value.length<a.data.length)),P=t(null),q=s((()=>a.options.map((e=>({label:e.label,value:e.key}))))),z=s((()=>0===R.value.length)),E=s((()=>z.value||null===P.value)),F=s((()=>a.data.filter((e=>R.value.includes(C(e)))))),G=()=>{var e;const{options:l}=a;for(let a of l)if(a.key===P.value)if("confirm"===a.type)b({...a.confirm,data:F.value});else null==(e=a.onBatch)||e.call(a,F.value)},V=()=>{var e;const{options:l}=a,s=l[0];if("confirm"===s.type)b({...s.confirm,data:F.value});else null==(e=s.onBatch)||e.call(s,F.value)};return(e,a)=>{const l=_,s=w,t=g,b=x;return n(),o(b,{class:"items-center",size:0},{default:d((()=>[i("div",K,[u(l,{checked:c(S),"onUpdate:checked":a[0]||(a[0]=e=>p(S)?S.value=e:null),disabled:c(U),indeterminate:c(M)},null,8,["checked","disabled","indeterminate"])]),e.options.length>1?(n(),r(f,{key:0},[i("div",j,[u(s,{value:c(P),"onUpdate:value":a[1]||(a[1]=e=>p(P)?P.value=e:null),options:c(q),disabled:c(z),placeholder:"Please choose"},null,8,["value","options","disabled"])]),i("div",B,[u(t,{type:c(E)?"default":"primary",disabled:c(E),onClick:G},{default:d((()=>[v(" Execute ")])),_:1},8,["type","disabled"])])],64)):h("",!0),1===e.options.length?(n(),o(t,{key:1,disabled:c(z),type:c(z)?"default":"primary",onClick:V},{default:d((()=>[i("span",null,m(e.options[0].label),1),y(i("span",null,"(Selected "+m(R.value.length)+")",513),[[k,R.value.length>0]])])),_:1},8,["disabled","type"])):h("",!0)])),_:1})}}});export{R as _};
