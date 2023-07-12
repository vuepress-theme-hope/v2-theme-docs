import{_ as r,r as c,o as u,c as d,e as o,w as e,d as s,b as n,f as p}from"./app-a520ca79.js";const k={},f=p(`<h2 id="config-file" tabindex="-1"><a class="header-anchor" href="#config-file" aria-hidden="true">#</a> Config File</h2><p>Without any configuration, the VuePress site is pretty minimal. To customize your site, let&#39;s first create a <code>.vuepress</code> directory inside your docs directory. This is where all VuePress-specific files will be placed. Your project structure is probably like this:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
</code></pre></div><p>The essential file for configuring a VuePress site is <code>.vuepress/config.js</code>, while TypeScript config file is also supported. You can use <code>.vuepress/config.ts</code> instead to get better types hint for VuePress config.</p><p>A basic config file looks like this:</p>`,5),h=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// site config"),s(`
  lang`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"en-US"'),n("span",{class:"token punctuation"},","),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hello VuePress"'),n("span",{class:"token punctuation"},","),s(`
  description`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Just playing around"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token comment"},"// theme"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// theme config"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// site config"),s(`
  `),n("span",{class:"token literal-property property"},"lang"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"en-US"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Hello, VuePress!"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"This is my first VuePress site"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token comment"},"// theme"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// theme config"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g={class:"hint-container tip"},v=n("p",{class:"hint-container-title"},"Tips",-1),b={href:"https://vuejs.press/reference/config.html",target:"_blank",rel:"noopener noreferrer"},y=p(`<h2 id="config-scopes" tabindex="-1"><a class="header-anchor" href="#config-scopes" aria-hidden="true">#</a> Config Scopes</h2><h3 id="site-config" tabindex="-1"><a class="header-anchor" href="#site-config" aria-hidden="true">#</a> Site Config</h3><p>Site config means that, no matter what theme you are using, these configurations are always valid.</p><p>As we know, every site should have its own <code>lang</code>, <code>title</code>, <code>description</code>, etc. Thus, VuePress has built-in support for those options.</p><h3 id="theme-config" tabindex="-1"><a class="header-anchor" href="#theme-config" aria-hidden="true">#</a> Theme Config</h3><p>Theme config will be processed by VuePress theme, so it depends on the theme you are using.</p><p>To use <code>vuepress-theme-hope</code>, you should import <code>hopeTheme</code> from it, passing in your theme options and call it, then assign it to <code>theme</code> option.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>If you don&#39;t specify the <code>theme</code> option of VuePress config, the default theme will be used.</p></div><h2 id="client-config-file" tabindex="-1"><a class="header-anchor" href="#client-config-file" aria-hidden="true">#</a> Client Config File</h2><p>In most cases, the config file is sufficient to configure your VuePress site. However, sometimes users may want to add some client-side code directly. To help with this, VuePress also supports a client config file:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  ├─ client.js   &lt;--- client config file
│  │  └─ config.js   &lt;--- config file
│  └─ README.md
├─ .gitignore
└─ package.json
</code></pre></div><p>A basic client config file looks like this:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,13),_={class:"hint-container tip"},w=n("p",{class:"hint-container-title"},"Tips",-1),x=n("p",null,"Unlike config file, client config file could not be specified via CLI options.",-1),C={href:"https://vuejs.press/advanced/cookbook/usage-of-client-config.html",target:"_blank",rel:"noopener noreferrer"};function T(V,P){const l=c("CodeTabs"),i=c("ExternalLinkIcon");return u(),d("div",null,[f,o(l,{id:"13",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:t,isActive:a})=>[s("TS")]),title1:e(({value:t,isActive:a})=>[s("JS")]),tab0:e(({value:t,isActive:a})=>[h]),tab1:e(({value:t,isActive:a})=>[m]),_:1}),n("div",g,[v,n("p",null,[s("Check out the "),n("a",b,[s("Config Reference"),o(i)]),s(" for a full list of VuePress config.")])]),y,n("div",_,[w,x,n("p",null,[s("To learn more about client config file, see "),n("a",C,[s("Advanced > Cookbook > Usage of Client Config"),o(i)])])])])}const S=r(k,[["render",T],["__file","config.html.vue"]]);export{S as default};
