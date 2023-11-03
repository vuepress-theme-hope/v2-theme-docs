import{_ as a,r as o,o as r,c as i,b as e,d as n,e as s,f as l}from"./app-92e2b39d.js";const c={},p=e("p",null,"VuePress theme can provide layouts, styles and many other features for you, helping you to focus on writing Markdown content.",-1),u=e("h2",{id:"default-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#default-theme","aria-hidden":"true"},"#"),n(" Default Theme")],-1),d=e("p",null,"VuePress has a default theme out of the box, which is applied to our documentation site you are currently browsing.",-1),h=e("p",null,"If you don't specify the theme to use, the default theme will be used automatically.",-1),m={href:"https://vuejs.press/reference/config.html#theme",target:"_blank",rel:"noopener noreferrer"},f=l(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// default theme config</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k={href:"https://vuejs.press/reference/default-theme/config.html",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"However, you might think it is not good enough. Or, you want to build a different type of site, for example, a blog, instead of a documentation. Then, you can try to use a community theme or create a local theme.",-1),_=e("h2",{id:"community-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#community-theme","aria-hidden":"true"},"#"),n(" Community Theme")],-1),y={href:"https://www.npmjs.com/search?q=keywords:vuepress-theme",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"local-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#local-theme","aria-hidden":"true"},"#"),n(" Local Theme")],-1),g={href:"https://vuejs.press/advanced/theme.html",target:"_blank",rel:"noopener noreferrer"};function w(x,T){const t=o("ExternalLinkIcon");return r(),i("div",null,[p,u,d,h,e("p",null,[n("To configure the default theme, you need to import and use it in your config file via the "),e("a",m,[n("theme"),s(t)]),n(" option:")]),f,e("p",null,[n("The default theme provides basic but useful features for documentation site, you can check out "),e("a",k,[n("Default Theme Config Reference"),s(t)]),n(" for a full list of config.")]),v,_,e("p",null,[n("Community users have created lots of themes and published them to "),e("a",y,[n("NPM"),s(t)]),n(". You should check the theme's own documentation for detailed guide.")]),b,e("p",null,[n("If you want to use your own custom theme but don't want to publish it, you can create a local theme. Refer to "),e("a",g,[n("Advanced > Writing a Theme"),s(t)]),n(" for how to write your own theme.")])])}const q=a(c,[["render",w],["__file","theme.html.vue"]]);export{q as default};
