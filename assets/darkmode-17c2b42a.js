import{f as i,c as m}from"./index-b0894847.js";import"./index-9567c7d0.js";import{a as l}from"./themeData-732adc0c.js";import{x as k,c as d,o as v,w as f}from"./framework-bb5a5b49.js";const c=Symbol.for("darkMode"),g=()=>{const e=k(c);if(!e)throw new Error("useDarkmode() is called without provider.");return e},b=e=>{const r=l(),a=i(),o=m("vuepress-theme-hope-scheme","auto"),s=d(()=>r.value.darkmode||"switch"),u=d(()=>{const t=s.value;return t==="disable"?!1:t==="enable"?!0:t==="auto"?a.value:t==="toggle"?o.value==="dark":o.value==="dark"||o.value==="auto"&&a.value}),n=d(()=>{const t=s.value;return t==="switch"||t==="toggle"});e.provide(c,{canToggle:n,config:s,isDarkmode:u,status:o}),Object.defineProperties(e.config.globalProperties,{$isDarkmode:{get:()=>u.value}})},M=()=>{const{isDarkmode:e}=g(),r=(a=e.value)=>{const o=window==null?void 0:window.document.querySelector("html");o==null||o.setAttribute("data-theme",a?"dark":"light")};v(()=>{f(e,r,{immediate:!0})})};export{b as i,M as s,g as u};
