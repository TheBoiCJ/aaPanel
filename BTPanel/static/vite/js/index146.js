import{b as r}from"./check.js?v=1721298337096";const t=({complex:r,trigger:t})=>({trigger:t||["blur","change"],validator:(t,e)=>""===(e=e.trim())?new Error("密码不能为空"):!(r.length&&e.length<r.length)||new Error("密码长度必须大于等于".concat(r.length,"位"))}),e=({trigger:r}={})=>({trigger:r||["blur","change"],validator:(r,t)=>{const e=Array.from(new Set(["/","/www","/bin","/boot","/dev","/etc","/lib","/media","/mnt","/opt","/proc","/root","/run","/sbin","/srv","/sys","/tmp","/usr","/var"]));return""===(t=t.trim())?new Error("目录不能为空"):!e.includes(t)||new Error("目录为系统保留目录, 请重新选择")}}),n=({trigger:t}={})=>({trigger:t||["blur","input"],validator:(t,e)=>e?!!r(e)||new Error("端口格式错误, 请填写1-65535之间的数字"):new Error("Port cannot be empty")});export{e as a,t as b,n as v};
