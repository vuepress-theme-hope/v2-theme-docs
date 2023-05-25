import{d as w,v as f,x as h,B as i,y as g,K as y,Q as d,R as m,S as b,U as P,k as t}from"./app-a38c4918.js";const u="flowchart-playground",_=`st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
`,F={"/":{config:"Flowchart Config",preset:"Flowchart Preset",result:"Render Result"},"/zh/":{config:"流程图配置",preset:"流程图预设",result:"渲染结果"}},R=w({name:"FlowChartPlayground",setup(){const s=f(F);let l=null;const p=h(),r=i(_),a=i("vue"),n=i(1),c=e=>e<419?.8:e>1280?1:.9;return g(()=>{let e=null;Promise.all([y(()=>import("./flowchart-d65a1d8e.js"),[]),new Promise(o=>setTimeout(o,800))]).then(([{parse:o}])=>{e=o;try{l=o(r.value),n.value=c(window.innerWidth),l.draw(u,{...d[a.value],scale:n.value})}catch(v){console.log(v)}}),m([r,a],()=>{if(e)try{l=e(r.value),n.value=c(window.innerWidth),p.value.innerHTML="",l.draw(u,{...d[a.value],scale:n.value})}catch(o){console.log(o)}}),b("resize",P(()=>{if(l){const o=c(window.innerWidth);n.value!==o&&(n.value=o,l.draw(u,{...d[a.value],scale:o}))}},100))}),()=>t("div",{class:"flowchart-playground"},[t("label",{for:"flowchart-playground-config"},`${s.value.config}:`),t("textarea",{id:"flowchart-playground-config",value:r.value,onInput:({target:e})=>{r.value=e.value}}),t("div",[t("label",{for:"flowchart-playground-preset"},`${s.value.preset}:`),t("select",{id:"flowchart-playground-preset",value:a.value,onChange:({target:e})=>{a.value=e.value}},["ant","pie","vue"].map(e=>t("option",{value:e},e)))]),t("label",{for:u},`${s.value.result}:`),t("div",{ref:p,class:["flowchart-wrapper",a.value],id:u})])}});export{R as default};
