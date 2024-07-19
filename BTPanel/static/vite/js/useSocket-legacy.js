System.register(["./vue-legacy.js?v=1721298337096","./index-legacy.js?v=1721298337096","./data-legacy.js?v=1721298337096"],(function(e,t){"use strict";var s,n,o,c,a,i;return{setters:[e=>{s=e.as,n=e.y},e=>{o=e.n,c=e.j,a=e.cu},e=>{i=e.i}],execute:function(){e("u",(function({url:e,onMessage:t,onDisconnected:s}){let o=null;const c=()=>{o&&(o.close(),o=null)};return n((()=>{c()})),{getSocket:()=>o,sendSocket:e=>{o?.send(e)},closeWebSocket:c,createWebSocket:()=>{o=r({url:e,onMessage:(e,s)=>{t(e,s)},onDisconnected:()=>{o=null,s?.()}})}}}));class t{socket=null;url="";connectURL=(()=>{const{host:e,protocol:t}=window.location;return("http:"===t?"ws://":"wss://")+e+"/v2"})();sendData={};constructor(e){this.url=e.url,this.connectURL+=e.url,this.init(e)}init(e){"WebSocket"in window?this.socket=s(this.connectURL,{autoReconnect:{retries:3,delay:500},onConnected:t=>{e.onConnected&&e.onConnected(t),this.onConnected(t,e)},onMessage:(t,s)=>{e.onMessage&&e.onMessage(t,s),this.onMessage(t,s)},onDisconnected:(t,s)=>{e.onDisconnected&&e.onDisconnected(t,s),this.onDisconnected()},onError:(t,s)=>{e.onError&&e.onError(t,s),this.onError()}}):o.error("The browser does not support Websocket")}isStatus(e){return(this.socket?.status.value||this.socket?.status)===e}channelVerify(){const e={};e["x-http-token"]=document.getElementById("request_token_head")?.getAttribute("token"),this.send(e)}send(e){if(this.isStatus("OPEN"))this.socket?.send(c(e)?JSON.stringify(e):e);else{const t=a(10);this.sendData[t]={data:e,status:!1,request:!1,callback:()=>{}}}}onConnected(e,t){t.noInit||this.channelVerify(),this.onSendData()}onSendData(){Object.entries(this.sendData).forEach((([e,t])=>{this.send(t.data),delete this.sendData[e]}))}onMessage(e,t){if("/ws_home"===this.url||"/ws_model"===this.url)try{if(i(t.data)){const s=JSON.parse(t.data),n=s.callback||s.ws_callback;n&&this.sendData[n]&&this.sendData[n].callback(e,t)}}catch(s){console.log(s)}}onDisconnected(){this.close(),console.log("断开连接")}onError(){console.log("连接错误")}close(){this.socket?.close()}}const r=e=>new t(e)}}}));
