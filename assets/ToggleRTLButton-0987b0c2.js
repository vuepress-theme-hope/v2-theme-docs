import{g as l,x as s,v as o}from"./app-fe94cd90.js";const a=l({name:"ToggleRTLButton",setup(){const t=s(!1),n=()=>{const{documentElement:e}=document;t.value?(e.removeAttribute("dir"),e.style.removeProperty("direction")):(e.setAttribute("dir","rtl"),e.style.setProperty("direction","rtl")),t.value=!t.value};return()=>o("button",{type:"button",class:"toggle-rtl-button",onClick:n},o("span",{key:t.value?"on":"off",class:[`fas fa-fw fa-2xl fa-toggle-${t.value?"on":"off"}`]}))}});export{a as T};
