import{M as e,j as a,r as t,a as s}from"./index.js?v=1721298337096";import{h as l}from"./color.js?v=1721298337096";import{g as o}from"./mail.js?v=1721298337096";import{_ as i}from"./index.vue_vue_type_script_setup_true_lang10.js?v=1721298337096";import{l as r,r as d,k as n,an as c,S as m,U as p,V as u,_ as v,a3 as y,W as f,P as b,a5 as h,a6 as g}from"./vue.js?v=1721298337096";import"./pinia.js?v=1721298337096";const x=e=>(h("data-v-3e5ab592"),e=e(),g(),e),_={class:"p-24px"},S={class:"total-list"},j={class:"total-item"},w=x((()=>v("div",{class:"total-label"},"发送成功率",-1))),H={class:"total-value text-primary"},A={class:"total-item"},B=x((()=>v("div",{class:"total-label"},"发送成功",-1))),C={class:"total-value"},L={class:"total-item"},W=x((()=>v("div",{class:"total-label"},"发送失败",-1))),k={class:"total-value"},E={class:"h-160px"},F=s(r({__name:"today",setup(s){const r=d({deferred:0,bounced:0,rejected:0}),h=n((()=>{const e=x.value+g.value;return 0===e?0:(g.value/e*100).toFixed(1)})),g=n((()=>r.value.deferred)),x=n((()=>r.value.bounced+r.value.rejected)),F=c({tooltip:{trigger:"axis",confine:!0},legend:{icon:"circle",top:"-2%",itemWidth:10,itemHeight:10,itemGap:16,data:["发送成功","发送失败"],textStyle:{lineHeight:12,padding:[0,0,-2,0],rich:{a:{verticalAlign:"middle"}}}},grid:{top:"22%",left:"2%",right:"4%",bottom:"0",containLabel:!0},xAxis:{type:"time",axisLabel:{formatter:a=>e(a,"HH:mm")}},yAxis:{type:"value",splitNumber:4,splitLine:{show:!0,lineStyle:{type:"dashed",width:1,color:"#ebeef5"}}},series:[{type:"line",name:"发送成功",data:[]},{type:"line",name:"发送失败",data:[]}]});return(async()=>{const{message:t}=await o();a(t)&&(r.value=t.stats_dict,(a=>{const t=[],s=[];a.forEach((a=>{t.push([e(a.time),a.deferred]),s.push([e(a.time),a.bounced+a.rejected])})),F.series=[{type:"line",name:"发送成功",symbol:"none",sampling:"average",data:t,smooth:!0,showSymbol:!1,itemStyle:{color:"#20a53a"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,global:!1,colorStops:[{offset:0,color:l("#20a53a",.6)},{offset:.8,color:l("#20a53a",0)}]}}},{type:"line",name:"发送失败",symbol:"none",sampling:"average",data:s,smooth:!0,showSymbol:!1,itemStyle:{color:"#7895CB"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,global:!1,colorStops:[{offset:0,color:l("#7895CB",.6)},{offset:.8,color:l("#7895CB",0)}]}}}]})(t.hourly_stats))})(),(e,a)=>{const s=t;return m(),p(s,{class:"mb-16px",title:"Today"},{default:u((()=>[v("div",_,[v("div",S,[v("div",j,[w,v("div",H,y(f(h))+"%",1)]),v("div",A,[B,v("div",C,y(f(g)),1)]),v("div",L,[W,v("div",k,y(f(x)),1)])]),v("div",E,[b(i,{height:"160",option:f(F)},null,8,["option"])])])])),_:1})}}}),[["__scopeId","data-v-3e5ab592"]]),G=r({__name:"index",setup:e=>(e,a)=>(m(),p(F))});export{G as default};
