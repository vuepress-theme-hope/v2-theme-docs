import{P as i,T as r}from"./app-12d802ec.js";import{T as u}from"./ToggleRTLButton-2e4cb32c.js";import{c as d,U as k,a0 as h,X as n,a9 as s,Y as a,u as e,W as t,ab as m,F as v,$ as b}from"./framework-3a3055b3.js";const f=n("h2",{id:"打印按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#打印按钮","aria-hidden":"true"},"#"),s(" 打印按钮")],-1),g=n("p",null,"主题对打印样式进行了全面优化，默认在桌面模式的目录下会有一个打印按钮。",-1),_=n("p",null,[s("要隐藏打印按钮，你应该在主题选项中设置 "),n("code",null,"print: false"),s("。")],-1),y=n("h2",{id:"全屏按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#全屏按钮","aria-hidden":"true"},"#"),s(" 全屏按钮")],-1),T=n("p",null,[s("如果你需要这个功能，你可以在主题选项中设置 "),n("code",null,"fullscreen: true"),s("。")],-1),w=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"如果当前浏览器不支持全屏，则全屏按钮会自动隐藏。")],-1),x=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    fullscreen`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")])],-1),C=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"fullscreen"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")])],-1),B=m(`<h2 id="返回顶部按钮" tabindex="-1"><a class="header-anchor" href="#返回顶部按钮" aria-hidden="true">#</a> 返回顶部按钮</h2><p><code>vuepress-theme-hope</code> 添加了一个带进度条的返回顶部按钮，默认向下滚动 100px 后显示。</p><p>您可以在主题选项中设置 <code>backToTop: false</code> 来禁用它，或者用一个对象来设置它来自定义它的阈值距离和进度条显示：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BackToTopOptions</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rtl-布局" tabindex="-1"><a class="header-anchor" href="#rtl-布局" aria-hidden="true">#</a> RTL 布局</h2><p><code>vuepress-theme-hope</code> 完全支持 RTL 布局。只需在 RTL 多语言配置内设置 <code>rtl: true</code></p>`,6),j=d({__name:"others.html",setup(U){return(L,N)=>{const o=v("CodeTabs");return k(),h("div",null,[f,n("p",null,[s("试一试: "),a(e(i))]),g,_,y,a(e(r)),T,w,a(o,{id:"25",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:t(({title:c,value:p,isActive:l})=>[x]),tab1:t(({title:c,value:p,isActive:l})=>[C]),_:1}),B,n("p",null,[s("试一试: "),a(e(u))])])}}}),A=b(j,[["__file","others.html.vue"]]);export{A as default};
