import{at as s,au as t}from"./index.js?v=1721298337096";const{t:e}=s.global,a=s=>t.post("/panel/public/get_soft_status",{...s}),i=s=>t.post("/system?action=ServiceAdmin",{...s},{requestOptions:{loading:e("WP.api.tamper_8"),successMessage:!0}}),o=()=>t.post("/plugin?action=a&name=security_notice&s=get_status",{},{requestOptions:{isOriginalResult:!0,prefix:""}}),n=s=>t.post("/plugin?action=a&name=security_notice&s=".concat(s?"start_site":"stop_site"),{requestOptions:{loading:e("WP.api.tamper_8"),successMessage:!0}});export{n as a,o as b,a as g,i as s};
