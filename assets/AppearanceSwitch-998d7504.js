import{A as l,D as n,L as s}from"./outlookIcon-6ad873ef.js";import{u as i}from"./darkmode-f2d1e109.js";import{d as c,h as e}from"./framework-bb5a5b49.js";const d=c({name:"AppearanceSwitch",setup(){const{config:t,status:a}=i(),o=()=>{t.value==="switch"?a.value={light:"dark",dark:"auto",auto:"light"}[a.value]:a.value=a.value==="light"?"dark":"light"};return()=>e("button",{id:"appearance-switch",onClick:()=>o()},[e(l,{style:{display:a.value==="auto"?"block":"none"}}),e(n,{style:{display:a.value==="dark"?"block":"none"}}),e(s,{style:{display:a.value==="light"?"block":"none"}})])}});export{d as A};
