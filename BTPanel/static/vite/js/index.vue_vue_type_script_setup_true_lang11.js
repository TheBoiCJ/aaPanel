import{k as e}from"./index.js?v=1721298337096";import{o as a}from"./mail.js?v=1721298337096";import{l as s,ai as o,r as l,S as t,U as r,W as u}from"./vue.js?v=1721298337096";import{_ as n}from"./Select.js?v=1721298337096";const i=s({__name:"index",props:{value:{},valueModifiers:{}},emits:["update:value"],setup(s,{expose:i}){const m=o(s,"value"),p=l([]);return i({getList:async()=>{const{message:s}=await a();e(s)&&(p.value=s.map((e=>({label:e.username,value:e.username}))),m.value=s[0].username)}}),(e,a)=>{const s=n;return t(),r(s,{value:m.value,"onUpdate:value":a[0]||(a[0]=e=>m.value=e),filterable:!0,options:u(p),placeholder:"Please choose"},null,8,["value","options"])}}});export{i as _};
