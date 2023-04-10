import{P as u,T as d}from"./app-3bafa563.js";import{T as k}from"./ToggleRTLButton-662e0a10.js";import{c as h,Z as f,_,a1 as s,a2 as n,$ as e,a0 as t,u as a,a5 as m,D as o,a3 as g}from"./framework-32163d8a.js";const b=s("h2",{id:"样式定制",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#样式定制","aria-hidden":"true"},"#"),n(" 样式定制")],-1),v=s("p",null,[n("主题允许你在 "),s("code",null,".vuepress/styles/config.scss"),n(" 和 "),s("code",null,".vuepress/styles/palette.scss"),n(" 中设置变量，来定制绝大部分颜色、响应式断点，页面布局尺寸等参数。")],-1),y=s("h2",{id:"打印按钮",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#打印按钮","aria-hidden":"true"},"#"),n(" 打印按钮")],-1),T=s("p",null,"主题对打印样式进行了全面优化，默认在桌面模式的目录下会有一个打印按钮。",-1),x=s("p",null,[n("要隐藏打印按钮，你应该在主题选项中设置 "),s("code",null,"print: false"),n("。")],-1),w=s("h2",{id:"全屏按钮",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#全屏按钮","aria-hidden":"true"},"#"),n(" 全屏按钮")],-1),C=s("p",null,[n("如果你需要这个功能，你可以在主题选项中设置 "),s("code",null,"fullscreen: true"),n("。")],-1),B=s("div",{class:"hint-container tip"},[s("p",{class:"hint-container-title"},"提示"),s("p",null,"如果当前浏览器不支持全屏，则全屏按钮会自动隐藏。")],-1),L=s("div",{class:"language-typescript","data-ext":"ts"},[s("pre",{ts:"",class:"language-typescript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.ts"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" defineUserConfig "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" hopeTheme "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress-theme-hope"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token function"},"defineUserConfig"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
  theme`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token function"},"hopeTheme"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    fullscreen`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br")])],-1),R=s("div",{class:"language-javascript","data-ext":"js"},[s("pre",{js:"",class:"language-javascript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.js"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" defineUserConfig "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" hopeTheme "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress-theme-hope"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token function"},"defineUserConfig"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token literal-property property"},"theme"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token function"},"hopeTheme"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token literal-property property"},"fullscreen"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br")])],-1),j=m('<h2 id="返回顶部按钮" tabindex="-1"><a class="header-anchor" href="#返回顶部按钮" aria-hidden="true">#</a> 返回顶部按钮</h2><p><code>vuepress-theme-hope</code> 添加了一个返回顶部控件，默认情况下将在下滑 300px 后显示。</p><p>你可以在主题选项中设置 <code>backToTop: false</code> 来禁用它，或者是设置为一个数字以更改默认的触发距离。</p><h2 id="rtl-布局" tabindex="-1"><a class="header-anchor" href="#rtl-布局" aria-hidden="true">#</a> RTL 布局</h2><p><code>vuepress-theme-hope</code> 完全支持 RTL 布局。只需在 RTL 多语言配置内设置 <code>rtl: true</code></p>',5),N=h({__name:"others.html",setup(S){return(U,V)=>{const c=o("RouterLink"),p=o("CodeTabs");return f(),_("div",null,[b,v,s("p",null,[n("详细的参数详见 "),e(c,{to:"/zh/config/style.html"},{default:t(()=>[n("配置 → 样式自定义")]),_:1}),n("。")]),y,s("p",null,[n("试一试: "),e(a(u))]),T,x,w,e(a(d)),C,B,e(p,{id:"34",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:t(({title:l,value:r,isActive:i})=>[L]),tab1:t(({title:l,value:r,isActive:i})=>[R]),_:1}),j,s("p",null,[n("试一试: "),e(a(k))])])}}}),D=g(N,[["__file","others.html.vue"]]);export{D as default};
