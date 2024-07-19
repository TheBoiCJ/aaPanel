import{aH as o,bi as e,aB as r,aD as n,aE as c,aT as l,az as a,aJ as s,aK as t,aL as i,aM as d,bj as h,bk as g,aV as b,aW as C,aQ as p,bl as v,aR as u}from"./index.js?v=1721298337096";import{l as k,r as m,A as x,d as f,k as z,p as I}from"./vue.js?v=1721298337096";const y={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"},S={name:"Tag",common:o,self:o=>{const{textColor2:r,primaryColorHover:n,primaryColorPressed:c,primaryColor:l,infoColor:a,successColor:s,warningColor:t,errorColor:i,baseColor:d,borderColor:h,opacityDisabled:g,tagColor:b,closeIconColor:C,closeIconColorHover:p,closeIconColorPressed:v,borderRadiusSmall:u,fontSizeMini:k,fontSizeTiny:m,fontSizeSmall:x,fontSizeMedium:f,heightMini:z,heightTiny:I,heightSmall:S,heightMedium:P,closeColorHover:B,closeColorPressed:H,buttonColor2Hover:M,buttonColor2Pressed:R,fontWeightStrong:T}=o;return Object.assign(Object.assign({},y),{closeBorderRadius:u,heightTiny:z,heightSmall:I,heightMedium:S,heightLarge:P,borderRadius:u,opacityDisabled:g,fontSizeTiny:k,fontSizeSmall:m,fontSizeMedium:x,fontSizeLarge:f,fontWeightStrong:T,textColorCheckable:r,textColorHoverCheckable:r,textColorPressedCheckable:r,textColorChecked:d,colorCheckable:"#0000",colorHoverCheckable:M,colorPressedCheckable:R,colorChecked:l,colorCheckedHover:n,colorCheckedPressed:c,border:"1px solid ".concat(h),textColor:r,color:b,colorBordered:"rgb(250, 250, 252)",closeIconColor:C,closeIconColorHover:p,closeIconColorPressed:v,closeColorHover:B,closeColorPressed:H,borderPrimary:"1px solid ".concat(e(l,{alpha:.3})),textColorPrimary:l,colorPrimary:e(l,{alpha:.12}),colorBorderedPrimary:e(l,{alpha:.1}),closeIconColorPrimary:l,closeIconColorHoverPrimary:l,closeIconColorPressedPrimary:l,closeColorHoverPrimary:e(l,{alpha:.12}),closeColorPressedPrimary:e(l,{alpha:.18}),borderInfo:"1px solid ".concat(e(a,{alpha:.3})),textColorInfo:a,colorInfo:e(a,{alpha:.12}),colorBorderedInfo:e(a,{alpha:.1}),closeIconColorInfo:a,closeIconColorHoverInfo:a,closeIconColorPressedInfo:a,closeColorHoverInfo:e(a,{alpha:.12}),closeColorPressedInfo:e(a,{alpha:.18}),borderSuccess:"1px solid ".concat(e(s,{alpha:.3})),textColorSuccess:s,colorSuccess:e(s,{alpha:.12}),colorBorderedSuccess:e(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:e(s,{alpha:.12}),closeColorPressedSuccess:e(s,{alpha:.18}),borderWarning:"1px solid ".concat(e(t,{alpha:.35})),textColorWarning:t,colorWarning:e(t,{alpha:.15}),colorBorderedWarning:e(t,{alpha:.12}),closeIconColorWarning:t,closeIconColorHoverWarning:t,closeIconColorPressedWarning:t,closeColorHoverWarning:e(t,{alpha:.12}),closeColorPressedWarning:e(t,{alpha:.18}),borderError:"1px solid ".concat(e(i,{alpha:.23})),textColorError:i,colorError:e(i,{alpha:.1}),colorBorderedError:e(i,{alpha:.08}),closeIconColorError:i,closeIconColorHoverError:i,closeIconColorPressedError:i,closeColorHoverError:e(i,{alpha:.12}),closeColorPressedError:e(i,{alpha:.18})})}},P={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},B=r("tag","\n --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);\n white-space: nowrap;\n position: relative;\n box-sizing: border-box;\n cursor: default;\n display: inline-flex;\n align-items: center;\n flex-wrap: nowrap;\n padding: var(--n-padding);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n transition: \n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n line-height: 1;\n height: var(--n-height);\n font-size: var(--n-font-size);\n",[n("strong","\n font-weight: var(--n-font-weight-strong);\n "),c("border","\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n border: var(--n-border);\n transition: border-color .3s var(--n-bezier);\n "),c("icon","\n display: flex;\n margin: 0 4px 0 0;\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n font-size: var(--n-avatar-size-override);\n "),c("avatar","\n display: flex;\n margin: 0 6px 0 0;\n "),c("close","\n margin: var(--n-close-margin);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n "),n("round","\n padding: 0 calc(var(--n-height) / 3);\n border-radius: calc(var(--n-height) / 2);\n ",[c("icon","\n margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);\n "),c("avatar","\n margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);\n "),n("closable","\n padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);\n ")]),n("icon, avatar",[n("round","\n padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);\n ")]),n("disabled","\n cursor: not-allowed !important;\n opacity: var(--n-opacity-disabled);\n "),n("checkable","\n cursor: pointer;\n box-shadow: none;\n color: var(--n-text-color-checkable);\n background-color: var(--n-color-checkable);\n ",[l("disabled",[a("&:hover","background-color: var(--n-color-hover-checkable);",[l("checked","color: var(--n-text-color-hover-checkable);")]),a("&:active","background-color: var(--n-color-pressed-checkable);",[l("checked","color: var(--n-text-color-pressed-checkable);")])]),n("checked","\n color: var(--n-text-color-checked);\n background-color: var(--n-color-checked);\n ",[l("disabled",[a("&:hover","background-color: var(--n-color-checked-hover);"),a("&:active","background-color: var(--n-color-checked-pressed);")])])])]),H=Object.assign(Object.assign(Object.assign({},t.props),P),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),M=b("n-tag"),R=k({name:"Tag",props:H,setup(o){const e=m(null),{mergedBorderedRef:r,mergedClsPrefixRef:n,inlineThemeDisabled:c,mergedRtlRef:l}=s(o),a=t("Tag","-tag",B,S,o,n);x(M,{roundRef:f(o,"round")});const h={setTextContent(o){const{value:r}=e;r&&(r.textContent=o)}},g=i("Tag",l,n),b=z((()=>{const{type:e,size:n,color:{color:c,textColor:l}={}}=o,{common:{cubicBezierEaseInOut:s},self:{padding:t,closeMargin:i,borderRadius:d,opacityDisabled:h,textColorCheckable:g,textColorHoverCheckable:b,textColorPressedCheckable:C,textColorChecked:u,colorCheckable:k,colorHoverCheckable:m,colorPressedCheckable:x,colorChecked:f,colorCheckedHover:z,colorCheckedPressed:I,closeBorderRadius:y,fontWeightStrong:S,[p("colorBordered",e)]:P,[p("closeSize",n)]:B,[p("closeIconSize",n)]:H,[p("fontSize",n)]:M,[p("height",n)]:R,[p("color",e)]:T,[p("textColor",e)]:E,[p("border",e)]:W,[p("closeIconColor",e)]:j,[p("closeIconColorHover",e)]:w,[p("closeIconColorPressed",e)]:O,[p("closeColorHover",e)]:_,[p("closeColorPressed",e)]:F}}=a.value,D=v(i);return{"--n-font-weight-strong":S,"--n-avatar-size-override":"calc(".concat(R," - 8px)"),"--n-bezier":s,"--n-border-radius":d,"--n-border":W,"--n-close-icon-size":H,"--n-close-color-pressed":F,"--n-close-color-hover":_,"--n-close-border-radius":y,"--n-close-icon-color":j,"--n-close-icon-color-hover":w,"--n-close-icon-color-pressed":O,"--n-close-icon-color-disabled":j,"--n-close-margin-top":D.top,"--n-close-margin-right":D.right,"--n-close-margin-bottom":D.bottom,"--n-close-margin-left":D.left,"--n-close-size":B,"--n-color":c||(r.value?P:T),"--n-color-checkable":k,"--n-color-checked":f,"--n-color-checked-hover":z,"--n-color-checked-pressed":I,"--n-color-hover-checkable":m,"--n-color-pressed-checkable":x,"--n-font-size":M,"--n-height":R,"--n-opacity-disabled":h,"--n-padding":t,"--n-text-color":l||E,"--n-text-color-checkable":g,"--n-text-color-checked":u,"--n-text-color-hover-checkable":b,"--n-text-color-pressed-checkable":C}})),k=c?d("tag",z((()=>{let e="";const{type:n,size:c,color:{color:l,textColor:a}={}}=o;return e+=n[0],e+=c[0],l&&(e+="a".concat(u(l))),a&&(e+="b".concat(u(a))),r.value&&(e+="c"),e})),b,o):void 0;return Object.assign(Object.assign({},h),{rtlEnabled:g,mergedClsPrefix:n,contentRef:e,mergedBordered:r,handleClick:function(e){if(!o.disabled&&o.checkable){const{checked:e,onCheckedChange:r,onUpdateChecked:n,"onUpdate:checked":c}=o;n&&n(!e),c&&c(!e),r&&r(!e)}},handleCloseClick:function(e){if(o.triggerClickOnClose||e.stopPropagation(),!o.disabled){const{onClose:r}=o;r&&C(r,e)}},cssVars:c?void 0:b,themeClass:null==k?void 0:k.themeClass,onRender:null==k?void 0:k.onRender})},render(){var o,e;const{mergedClsPrefix:r,rtlEnabled:n,closable:c,color:{borderColor:l}={},round:a,onRender:s,$slots:t}=this;null==s||s();const i=h(t.avatar,(o=>o&&I("div",{class:"".concat(r,"-tag__avatar")},o))),d=h(t.icon,(o=>o&&I("div",{class:"".concat(r,"-tag__icon")},o)));return I("div",{class:["".concat(r,"-tag"),this.themeClass,{["".concat(r,"-tag--rtl")]:n,["".concat(r,"-tag--strong")]:this.strong,["".concat(r,"-tag--disabled")]:this.disabled,["".concat(r,"-tag--checkable")]:this.checkable,["".concat(r,"-tag--checked")]:this.checkable&&this.checked,["".concat(r,"-tag--round")]:a,["".concat(r,"-tag--avatar")]:i,["".concat(r,"-tag--icon")]:d,["".concat(r,"-tag--closable")]:c}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},d||i,I("span",{class:"".concat(r,"-tag__content"),ref:"contentRef"},null===(e=(o=this.$slots).default)||void 0===e?void 0:e.call(o)),!this.checkable&&c?I(g,{clsPrefix:r,class:"".concat(r,"-tag__close"),disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?I("div",{class:"".concat(r,"-tag__border"),style:{borderColor:l}}):null)}});export{R as _};
