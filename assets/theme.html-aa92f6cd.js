import{a3 as t,Z as o,_ as p,a1 as n,a2 as s,$ as a,a5 as r,D as l}from"./framework-32163d8a.js";const c={},i=n("p",null,"VuePress 主题为你提供了布局、样式和其他功能，帮助你专注于 Markdown 内容的写作。",-1),u=n("h2",{id:"默认主题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认主题","aria-hidden":"true"},"#"),s(" 默认主题")],-1),d=n("p",null,"VuePress 有一个开箱即用的默认主题，正使用在你当前正在浏览的文档网站上。",-1),h=n("p",null,"如果你不指定要使用的主题，那么就会自动使用默认主题。",-1),k={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#theme",target:"_blank",rel:"noopener noreferrer"},v=r(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 默认主题配置</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;首页&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,"然而，你可能觉得默认主题不够出色，又或者你不想搭建一个文档网站，而是一个其他类型的网站，比如博客。此时，你可以尝试使用社区主题或者创建本地主题。",-1),f=n("h2",{id:"社区主题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#社区主题","aria-hidden":"true"},"#"),s(" 社区主题")],-1),b={href:"https://www.npmjs.com/search?q=keywords:vuepress-theme",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"本地主题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#本地主题","aria-hidden":"true"},"#"),s(" 本地主题")],-1),y={href:"https://v2.vuepress.vuejs.org/zh/advanced/theme.html",target:"_blank",rel:"noopener noreferrer"};function x(w,j){const e=l("ExternalLinkIcon");return o(),p("div",null,[i,u,d,h,n("p",null,[s("为了配置默认主题，你需要在你的配置文件中通过 "),n("a",k,[s("theme"),a(e)]),s(" 配置项来使用它:")]),v,n("p",null,[s("默认主题为文档网站提供了基础且实用的功能，你可以前往 "),n("a",m,[s("默认主题配置参考"),a(e)]),s(" 获取全部的配置列表。")]),_,f,n("p",null,[s("社区用户创建了很多主题，并将它们发布到了 "),n("a",b,[s("NPM"),a(e)]),s(" 上。查看主题本身的文档可以获取更详细的指引。")]),g,n("p",null,[s("如果你想要使用自己的自定义主题，但是又不想发布它，你可以创建一个本地主题。前往 "),n("a",y,[s("深入 > 开发主题"),a(e)]),s(" 学习如何开发你自己的主题。")])])}const V=t(c,[["render",x],["__file","theme.html.vue"]]);export{V as default};
