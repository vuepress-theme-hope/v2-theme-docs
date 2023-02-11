import{a4 as u,_ as d,$ as k,a0 as e,a1 as t,a2 as n,a3 as s,a6 as c,k as o}from"./framework-bb5a5b49.js";const h={},m=c(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>如果没有任何配置，你的 VuePress 站点仅有一些最基础的功能。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 <code>.vuepress</code> 目录，所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
</code></pre></div><p>VuePress 站点的基本配置文件是 <code>.vuepress/config.js</code> ，但也同样支持 TypeScript 配置文件。你可以使用 <code>.vuepress/config.ts</code> 来得到更好的类型提示。</p><p>一个基础的配置文件是这样的:</p>`,5),g=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 站点配置"),s(`
  lang`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"zh-CN"'),n("span",{class:"token punctuation"},","),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"你好， VuePress ！"'),n("span",{class:"token punctuation"},","),s(`
  description`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"这是我的第一个 VuePress 站点"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token comment"},"// 主题"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 主题配置"),s(`
    logo`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuejs.org/images/logo.png"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 站点配置"),s(`
  `),n("span",{class:"token literal-property property"},"lang"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"zh-CN"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"你好， VuePress ！"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"这是我的第一个 VuePress 站点"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token comment"},"// 主题"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 主题配置"),s(`
    `),n("span",{class:"token literal-property property"},"logo"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://vuejs.org/images/logo.png"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b={class:"hint-container tip"},f=n("p",{class:"hint-container-title"},"提示",-1),_={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html",target:"_blank",rel:"noopener noreferrer"},y=c(`<h2 id="配置作用域" tabindex="-1"><a class="header-anchor" href="#配置作用域" aria-hidden="true">#</a> 配置作用域</h2><h3 id="站点配置" tabindex="-1"><a class="header-anchor" href="#站点配置" aria-hidden="true">#</a> 站点配置</h3><p>站点配置的意思是，无论你使用什么主题，这些配置项都可以生效。</p><p>我们知道，每一个站点都应该有它的 <code>lang</code>, <code>title</code> 和 <code>description</code> 等属性，因此 VuePress 内置支持了这些属性的配置。</p><h3 id="主题配置" tabindex="-1"><a class="header-anchor" href="#主题配置" aria-hidden="true">#</a> 主题配置</h3><p>主题配置将会被 VuePress 主题来处理，所以它取决于你使用的主题是什么。</p><p>对于 <code>vuepress-theme-hope</code> 来说，你应该导入 <code>hopeTheme</code> 并设置 设置 <code>theme: hopeTheme(options)</code>。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果你没有设置 VuePress 配置的 <code>theme</code> 配置项，则代表使用的是默认主题。</p></div><h2 id="客户端配置文件" tabindex="-1"><a class="header-anchor" href="#客户端配置文件" aria-hidden="true">#</a> 客户端配置文件</h2><p>在大多数情况下，配置文件已经足够帮助你配置好你的 VuePress 站点。不过，有些时候用户们可能希望直接添加一些客户端代码。 VuePress 通过客户端配置文件来支持这种需求：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  ├─ client.js   &lt;--- 客户端配置文件
│  │  └─ config.js   &lt;--- 配置文件
│  └─ README.md
├─ .gitignore
└─ package.json
</code></pre></div><p>一个基础的客户端配置文件是这样的：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,13),x={class:"hint-container tip"},V=n("p",{class:"hint-container-title"},"提示",-1),w=n("p",null,"和配置文件不同，客户端配置文件不能通过命令行接口的选项来指定。",-1),C={href:"https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html",target:"_blank",rel:"noopener noreferrer"};function j(P,T){const p=o("CodeTabs"),a=o("ExternalLinkIcon");return d(),k("div",null,[m,e(p,{id:"13",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:t(({title:i,value:l,isActive:r})=>[g]),tab1:t(({title:i,value:l,isActive:r})=>[v]),_:1}),n("div",b,[f,n("p",null,[s("前往 "),n("a",_,[s("配置参考"),e(a)]),s(" 查看所有 VuePress 配置。")])]),y,n("div",x,[V,w,n("p",null,[s("可以前往 "),n("a",C,[s("深入 > Cookbook > 客户端配置的使用方法"),e(a)]),s(" 来了解更多信息。")])])])}const N=u(h,[["render",j],["__file","config.html.vue"]]);export{N as default};
