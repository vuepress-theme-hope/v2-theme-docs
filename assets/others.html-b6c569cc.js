import{k as l,r as i,o as r,c as u,b as n,d as s,e,u as c,P as d,T as k,w as a,f as h,_ as m}from"./app-0ba868ac.js";import{T as v}from"./ToggleRTLButton-192a825f.js";const b=n("h2",{id:"打印按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#打印按钮","aria-hidden":"true"},"#"),s(" 打印按钮")],-1),f=n("p",null,"主题对打印样式进行了全面优化，默认在桌面模式的目录下会有一个打印按钮。",-1),g=n("p",null,[s("要隐藏打印按钮，你应该在主题选项中设置 "),n("code",null,"print: false"),s("。")],-1),_=n("h2",{id:"全屏按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#全屏按钮","aria-hidden":"true"},"#"),s(" 全屏按钮")],-1),y=n("p",null,[s("如果你需要这个功能，你可以在主题选项中设置 "),n("code",null,"fullscreen: true"),s("。")],-1),T=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"如果当前浏览器不支持全屏，则全屏按钮会自动隐藏。")],-1),w=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    fullscreen`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")])],-1),x=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"fullscreen"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")])],-1),C=h(`<h2 id="返回顶部按钮" tabindex="-1"><a class="header-anchor" href="#返回顶部按钮" aria-hidden="true">#</a> 返回顶部按钮</h2><p><code>vuepress-theme-hope</code> 添加了一个带进度条的返回顶部按钮，默认向下滚动 100px 后显示。</p><p>你可以在主题选项中设置 <code>backToTop: false</code> 来禁用它，或者用一个对象来设置它来自定义它的阈值距离和进度条显示：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BackToTopOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 显示返回顶部按钮的滚动阈值距离（以像素为单位）
   *
   * <span class="token keyword">@default</span> 100
   */</span>
  threshold<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否显示滚动进度
   *
   * <span class="token keyword">@default</span> true
   */</span>
  progress<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rtl-布局" tabindex="-1"><a class="header-anchor" href="#rtl-布局" aria-hidden="true">#</a> RTL 布局</h2><p><code>vuepress-theme-hope</code> 完全支持 RTL 布局。只需在 RTL 多语言配置内设置 <code>rtl: true</code></p>`,6),B=l({__name:"others.html",setup(S){return(j,A)=>{const p=i("CodeTabs");return r(),u("div",null,[b,n("p",null,[s("试一试: "),e(c(d))]),f,g,_,e(c(k)),y,T,e(p,{id:"25",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:t,isActive:o})=>[s("TS")]),title1:a(({value:t,isActive:o})=>[s("JS")]),tab0:a(({value:t,isActive:o})=>[w]),tab1:a(({value:t,isActive:o})=>[x]),_:1}),C,n("p",null,[s("试一试: "),e(c(v))])])}}}),R=m(B,[["__file","others.html.vue"]]);export{R as default};
