System.register(["./index-legacy.js?v=1721298337096","./site-legacy2.js?v=1721298337096","./vue-legacy.js?v=1721298337096","./Checkbox-legacy.js?v=1721298337096","./pinia-legacy.js?v=1721298337096"],(function(e,t){"use strict";var a,s,i,n,o,l,r,c,d,p,u,h,x,y,v;return{setters:[e=>{a=e.cI,s=e._},e=>{i=e.be},e=>{n=e.l,o=e.r,l=e.S,r=e.Z,c=e._,d=e.P,p=e.W,u=e.a3,h=e.V,x=e.q,y=e.b},e=>{v=e._},null],execute:function(){const t={class:"p-24px"},f={class:"flex pl-12px"},m={class:"flex-1 ml-14px pt-8px"},g={class:"text-16px font-bold text-#111 mb-20px"},b={key:0},w={key:1};e("default",n({__name:"index",props:{data:{}},setup(e,{expose:n}){const _=a(),j=e,{rows:k}=j.data,A=o(!1),C=async(e,t=!1)=>{let a={id:e.id,site_name:e.name,remove_path:A.value?1:0};return await i(a,t)};return n({onConfirm:async({hide:e})=>{var t;await(t=e,void k.forEach((async(e,a,s)=>{a===s.length-1?(await C(k[0],!0),_.setRefresh(!0),t?.()):(await C(k[a]),t?.())})))}}),(e,a)=>{const i=s,n=v;return l(),r("div",t,[c("div",f,[d(i,{name:"base-warning",size:"34",color:"#f0a020"}),c("div",m,[c("div",g,[1==p(k).length?(l(),r("div",b," Risky operation, this operation is irreversible, after deleting the ["+u(p(k)[0].name)+"] project you will not be able to manage the project, do you continue to operate? ",1)):(l(),r("div",w," After batch deleting the selected items, the items will not be restored, should I continue the operation? "))]),d(n,{checked:p(A),"onUpdate:checked":a[0]||(a[0]=e=>y(A)?A.value=e:null)},{default:h((()=>[x("Also delete the root directory")])),_:1},8,["checked"])])])])}}}))}}}));
