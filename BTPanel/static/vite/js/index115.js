import{u as r}from"./index65.js?v=1721298337096";import{aH as o,bv as e,az as t,aB as l,aD as d,aT as n,bZ as a,b_ as s,aJ as i,aK as c,aL as p,aQ as b,aM as u,n as m,B as v,a as h}from"./index.js?v=1721298337096";import{z as g}from"./mail.js?v=1721298337096";import{l as x,k as f,p as C,r as y,P as k,S as _,Z as S,W as P,V as z,_ as T,a3 as M,q as w,a5 as R,a6 as j}from"./vue.js?v=1721298337096";import{N as B}from"./DataTable.js?v=1721298337096";import{_ as X}from"./Ellipsis.js?v=1721298337096";import"./pinia.js?v=1721298337096";import"./Checkbox.js?v=1721298337096";import"./Select.js?v=1721298337096";import"./Tag.js?v=1721298337096";import"./Empty.js?v=1721298337096";import"./omit.js?v=1721298337096";const L={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},A={name:"Table",common:o,self:r=>{const{dividerColor:o,cardColor:t,modalColor:l,popoverColor:d,tableHeaderColor:n,tableColorStriped:a,textColor1:s,textColor2:i,borderRadius:c,fontWeightStrong:p,lineHeight:b,fontSizeSmall:u,fontSizeMedium:m,fontSizeLarge:v}=r;return Object.assign(Object.assign({},L),{fontSizeSmall:u,fontSizeMedium:m,fontSizeLarge:v,lineHeight:b,borderRadius:c,borderColor:e(t,o),borderColorModal:e(l,o),borderColorPopover:e(d,o),tdColor:t,tdColorModal:l,tdColorPopover:d,tdColorStriped:e(t,a),tdColorStripedModal:e(l,a),tdColorStripedPopover:e(d,a),thColor:e(t,n),thColorModal:e(l,n),thColorPopover:e(d,n),thTextColor:s,tdTextColor:i,thFontWeight:p})}},D=t([l("table","\n font-size: var(--n-font-size);\n font-variant-numeric: tabular-nums;\n line-height: var(--n-line-height);\n width: 100%;\n border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;\n text-align: left;\n border-collapse: separate;\n border-spacing: 0;\n overflow: hidden;\n background-color: var(--n-td-color);\n border-color: var(--n-merged-border-color);\n transition:\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n --n-merged-border-color: var(--n-border-color);\n ",[t("th","\n white-space: nowrap;\n transition:\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n text-align: inherit;\n padding: var(--n-th-padding);\n vertical-align: inherit;\n text-transform: none;\n border: 0px solid var(--n-merged-border-color);\n font-weight: var(--n-th-font-weight);\n color: var(--n-th-text-color);\n background-color: var(--n-th-color);\n border-bottom: 1px solid var(--n-merged-border-color);\n border-right: 1px solid var(--n-merged-border-color);\n ",[t("&:last-child","\n border-right: 0px solid var(--n-merged-border-color);\n ")]),t("td","\n transition:\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n padding: var(--n-td-padding);\n color: var(--n-td-text-color);\n background-color: var(--n-td-color);\n border: 0px solid var(--n-merged-border-color);\n border-right: 1px solid var(--n-merged-border-color);\n border-bottom: 1px solid var(--n-merged-border-color);\n ",[t("&:last-child","\n border-right: 0px solid var(--n-merged-border-color);\n ")]),d("bordered","\n border: 1px solid var(--n-merged-border-color);\n border-radius: var(--n-border-radius);\n ",[t("tr",[t("&:last-child",[t("td","\n border-bottom: 0 solid var(--n-merged-border-color);\n ")])])]),d("single-line",[t("th","\n border-right: 0px solid var(--n-merged-border-color);\n "),t("td","\n border-right: 0px solid var(--n-merged-border-color);\n ")]),d("single-column",[t("tr",[t("&:not(:last-child)",[t("td","\n border-bottom: 0px solid var(--n-merged-border-color);\n ")])])]),d("striped",[t("tr:nth-of-type(even)",[t("td","background-color: var(--n-td-color-striped)")])]),n("bottom-bordered",[t("tr",[t("&:last-child",[t("td","\n border-bottom: 0px solid var(--n-merged-border-color);\n ")])])])]),a(l("table","\n background-color: var(--n-td-color-modal);\n --n-merged-border-color: var(--n-border-color-modal);\n ",[t("th","\n background-color: var(--n-th-color-modal);\n "),t("td","\n background-color: var(--n-td-color-modal);\n ")])),s(l("table","\n background-color: var(--n-td-color-popover);\n --n-merged-border-color: var(--n-border-color-popover);\n ",[t("th","\n background-color: var(--n-th-color-popover);\n "),t("td","\n background-color: var(--n-td-color-popover);\n ")]))]),H=x({name:"Table",props:Object.assign(Object.assign({},c.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),setup(r){const{mergedClsPrefixRef:o,inlineThemeDisabled:e,mergedRtlRef:t}=i(r),l=c("Table","-table",D,A,r,o),d=p("Table",t,o),n=f((()=>{const{size:o}=r,{self:{borderColor:e,tdColor:t,tdColorModal:d,tdColorPopover:n,thColor:a,thColorModal:s,thColorPopover:i,thTextColor:c,tdTextColor:p,borderRadius:u,thFontWeight:m,lineHeight:v,borderColorModal:h,borderColorPopover:g,tdColorStriped:x,tdColorStripedModal:f,tdColorStripedPopover:C,[b("fontSize",o)]:y,[b("tdPadding",o)]:k,[b("thPadding",o)]:_},common:{cubicBezierEaseInOut:S}}=l.value;return{"--n-bezier":S,"--n-td-color":t,"--n-td-color-modal":d,"--n-td-color-popover":n,"--n-td-text-color":p,"--n-border-color":e,"--n-border-color-modal":h,"--n-border-color-popover":g,"--n-border-radius":u,"--n-font-size":y,"--n-th-color":a,"--n-th-color-modal":s,"--n-th-color-popover":i,"--n-th-font-weight":m,"--n-th-text-color":c,"--n-line-height":v,"--n-td-padding":k,"--n-th-padding":_,"--n-td-color-striped":x,"--n-td-color-striped-modal":f,"--n-td-color-striped-popover":C}})),a=e?u("table",f((()=>r.size[0])),n,r):void 0;return{rtlEnabled:d,mergedClsPrefix:o,cssVars:e?void 0:n,themeClass:null==a?void 0:a.themeClass,onRender:null==a?void 0:a.onRender}},render(){var r;const{mergedClsPrefix:o}=this;return null===(r=this.onRender)||void 0===r||r.call(this),C("table",{class:["".concat(o,"-table"),this.themeClass,{["".concat(o,"-table--rtl")]:this.rtlEnabled,["".concat(o,"-table--bottom-bordered")]:this.bottomBordered,["".concat(o,"-table--bordered")]:this.bordered,["".concat(o,"-table--single-line")]:this.singleLine,["".concat(o,"-table--single-column")]:this.singleColumn,["".concat(o,"-table--striped")]:this.striped}],style:this.cssVars},this.$slots)}}),O=r=>(R("data-v-ff9c6ad1"),r=r(),j(),r),E={class:"p-20px"},V=O((()=>T("div",{class:"record-title"},"Step 1: Add MX records",-1))),W=O((()=>T("div",{class:"record-desc"}," Login to the domain name service provider and add a record with the record type MX for the mailbox service (please copy the following parameters directly) ",-1))),$=O((()=>T("thead",null,[T("tr",null,[T("th",null,"Record type"),T("th",null,"Host record"),T("th",null,"Record value"),T("th",null,"MX priority")])],-1))),F=O((()=>T("td",null,"MX",-1))),I=O((()=>T("td",null,"@",-1))),K=O((()=>T("td",null,"10",-1))),N=O((()=>T("div",{class:"record-title"},"Step 2: Add TXT record",-1))),Z=O((()=>T("div",{class:"record-desc"}," Add records with record type TXT for mailbox anti-spam (please copy the following parameters directly) ",-1))),q=O((()=>T("thead",null,[T("tr",null,[T("th",null,"Record type"),T("th",null,"Host record"),T("th",null,"Record value")])],-1))),J=O((()=>T("td",null,"TXT",-1))),Q=O((()=>T("td",null,"@",-1))),G=O((()=>T("td",null,"TXT",-1))),U=O((()=>T("td",null,"default._domainkey",-1))),Y=O((()=>T("td",null,"TXT",-1))),rr=O((()=>T("td",null,"_dmarc",-1))),or=O((()=>T("div",{class:"record-title"},"Step 3: Add PTR records",-1))),er=O((()=>T("div",{class:"record-desc"},"(Optional) PTR records are used for reverse DNS lookups.",-1))),tr=O((()=>T("div",{class:"record-desc"},"Contact your ip provider to create a ptr record.",-1))),lr={class:"flex-center mt-24px"},dr=h(x({__name:"index",props:{row:{}},emits:["close","refresh"],setup(o,{emit:e}){const t=o,l=e,{row:d}=t,n=y([d]),a=({status:r})=>k("div",{class:["inline-flex items-center",r?"text-primary":"text-error"]},[k("span",{class:["glyphicon","glyphicon-".concat(r?"ok":"remove")]},null),k("span",{class:"ml-4px"},[r?"OK":"Not Set"])]),s=y([{key:"domain",title:"Domain",width:"20%",ellipsis:{tooltip:!0}},{key:"mx_status",title:"MX",render:r=>k(a,{status:1===r.mx_status},null)},{key:"a_status",title:"A record",render:r=>k(a,{status:1===r.a_status},null)},{key:"spf_status",title:"SPF",render:r=>k(a,{status:1===r.spf_status},null)},{key:"dkim_status",title:"DKIM",render:r=>k(a,{status:1===r.dkim_status},null)},{key:"dmarc_status",title:"DMARC",render:r=>k(a,{status:1===r.dmarc_status},null)},{key:"ptr_status",title:"PTR ",render:r=>k(a,{status:1===r.ptr_status},null)}]),{toClipboard:i}=r(),c=async r=>{try{await i(r),m.success("Successfully copied")}catch(o){m.success("Copy failure")}},p=async()=>{await g({domain:d.domain}),l("close"),l("refresh")};return(r,o)=>{const e=B,t=H,l=X,a=v;return _(),S("div",E,[k(e,{class:"mb-20px",data:P(n),columns:P(s)},null,8,["data","columns"]),V,W,k(t,{class:"mb-30px"},{default:z((()=>[$,T("tbody",null,[T("tr",null,[F,I,T("td",null,M(P(d).mx_record),1),K])])])),_:1}),N,Z,k(t,{class:"mb-30px"},{default:z((()=>[q,T("tbody",null,[T("tr",null,[J,Q,T("td",null,[k(l,{class:"mr-4px max-w-260px!"},{default:z((()=>[w(" v=spf1 a mx -all ")])),_:1}),T("button",{class:"bt-link",onClick:o[0]||(o[0]=r=>c("v=spf1 a mx -all"))}," ("+M(r.$t("Public.Btn.Copy"))+") ",1)])]),T("tr",null,[G,U,T("td",null,[k(l,{class:"mr-4px max-w-260px!"},{default:z((()=>[w(M(P(d).dkim_value),1)])),_:1}),T("button",{class:"bt-link",onClick:o[1]||(o[1]=r=>c(P(d).dkim_value))}," ("+M(r.$t("Public.Btn.Copy"))+") ",1)])]),T("tr",null,[Y,rr,T("td",null,[k(l,{class:"mr-4px max-w-260px!"},{default:z((()=>[w(M(P(d).dmarc_value),1)])),_:1}),T("button",{class:"bt-link",onClick:o[2]||(o[2]=r=>c(P(d).dmarc_value))}," ("+M(r.$t("Public.Btn.Copy"))+") ",1)])])])])),_:1}),or,er,tr,T("div",lr,[k(a,{type:"primary",onClick:p},{default:z((()=>[w(" Already set, Verify domain name resolution ")])),_:1})])])}}}),[["__scopeId","data-v-ff9c6ad1"]]);export{dr as default};
