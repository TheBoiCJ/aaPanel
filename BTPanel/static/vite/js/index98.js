import{_ as s}from"./index136.js?v=1721298337096";import{z as e,n as t,eo as a}from"./index.js?v=1721298337096";import{u as o}from"./useSocket.js?v=1721298337096";import{l as c,d as l,ad as i,r as n,S as r,Z as d,P as m,W as u}from"./vue.js?v=1721298337096";import"./Spin.js?v=1721298337096";import"./pinia.js?v=1721298337096";import"./data.js?v=1721298337096";const p={class:"h-400px bg-#282c34 rounded-b-4px"},_=c({__name:"index",props:{row:{}},emits:["close"],setup(c,{emit:_}){const f=_,g=l(c,"row"),{t:b}=i(),x=n("Start pulling the image...\n"),{createWebSocket:k,sendSocket:j,closeWebSocket:S}=o({url:"/ws_model",onMessage:(s,a)=>{const{data:o}=a;if(e(o)&&(x.value+=a.data,o.includes("bt_successful")||o.includes("bt_failed"))){const s={status:o.includes("bt_successful"),msg:o.includes("bt_successful")?b("Docker.Template.index_19"):b("Docker.Template.index_20")};s.status?(t.success(s.msg),f("close")):t.error(s.msg),S()}}});return(async()=>{await a({template_id:g.value.id}),k(),j({model_index:"btdocker",mod_name:"compose",def_name:"get_pull_log",ws_callback:111})})(),(e,t)=>{const a=s;return r(),d("div",p,[m(a,{log:u(x)},null,8,["log"])])}}});export{_ as default};
