import{D as c,x as n}from"./index-b890b709.js";import{d as a,o as i,h as t}from"./framework-bb5a5b49.js";const d=a({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(l){const r=(e="")=>{const o=document.documentElement.classList,s=n(l.themeColor).map(m=>`theme-${m}`);if(!e){localStorage.removeItem("theme"),o.remove(...s);return}o.remove(...s.filter(m=>m!==`theme-${e}`)),o.add(`theme-${e}`),localStorage.setItem("theme",e)};return i(()=>{const e=localStorage.getItem("theme");e&&r(e)}),()=>t("ul",{id:"theme-color-picker"},[t("li",t("span",{class:"theme-color",onClick:()=>r()})),...c(l.themeColor).map(([e,o])=>t("li",t("span",{style:{background:o},onClick:()=>r(e)})))])}});export{d as T};
