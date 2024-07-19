import{ci as e,aJ as t,aK as a,aL as n,bO as r,bP as i,aQ as o,cM as l,bt as s}from"./index.js?v=1721298337096";import{l as p,k as c,p as d,C as m}from"./vue.js?v=1721298337096";const g={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},u={name:"Space",self:()=>g};let f;const x=()=>{if(!e)return!0;if(void 0===f){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=1===e.scrollHeight;return document.body.removeChild(e),f=t}return f},y=p({name:"Space",props:Object.assign(Object.assign({},a.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),setup(e){const{mergedClsPrefixRef:r,mergedRtlRef:i}=t(e),p=a("Space","-space",void 0,u,e,r),d=n("Space",i,r);return{useGap:x(),rtlEnabled:d,mergedClsPrefix:r,margin:c((()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if("number"==typeof t)return{horizontal:t,vertical:t};const{self:{[o("gap",t)]:a}}=p.value,{row:n,col:r}=l(a);return{horizontal:s(r),vertical:s(n)}}))}},render(){const{vertical:e,reverse:t,align:a,inline:n,justify:o,itemClass:l,itemStyle:s,margin:p,wrap:c,mergedClsPrefix:g,rtlEnabled:u,useGap:f,wrapItem:x,internalUseGap:y}=this,v=r(i(this),!1);if(!v.length)return null;const h="".concat(p.horizontal,"px"),b="".concat(p.horizontal/2,"px"),w="".concat(p.vertical,"px"),S="".concat(p.vertical/2,"px"),C=v.length-1,B=o.startsWith("space-");return d("div",{role:"none",class:["".concat(g,"-space"),u&&"".concat(g,"-space--rtl")],style:{display:n?"inline-flex":"flex",flexDirection:e&&!t?"column":e&&t?"column-reverse":!e&&t?"row-reverse":"row",justifyContent:["start","end"].includes(o)?"flex-"+o:o,flexWrap:!c||e?"nowrap":"wrap",marginTop:f||e?"":"-".concat(S),marginBottom:f||e?"":"-".concat(S),alignItems:a,gap:f?"".concat(p.vertical,"px ").concat(p.horizontal,"px"):""}},x||!f&&!y?v.map(((t,a)=>t.type===m?t:d("div",{role:"none",class:l,style:[s,{maxWidth:"100%"},f?"":e?{marginBottom:a!==C?w:""}:u?{marginLeft:B?"space-between"===o&&a===C?"":b:a!==C?h:"",marginRight:B?"space-between"===o&&0===a?"":b:"",paddingTop:S,paddingBottom:S}:{marginRight:B?"space-between"===o&&a===C?"":b:a!==C?h:"",marginLeft:B?"space-between"===o&&0===a?"":b:"",paddingTop:S,paddingBottom:S}]},t))):v)}});export{y as _};
