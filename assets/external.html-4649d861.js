import{_ as i,r as o,o as l,c,a as u,b as s,d as n,e,w as t,f as p}from"./app-a080876e.js";const d={},r=s("p",null,"This tutorial guides you how to add external scripts and styles to your site.",-1),k=s("h2",{id:"global",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#global","aria-hidden":"true"},"#"),n(" Global")],-1),v=s("code",null,"head",-1),m=p(`<div class="hint-container tip"><p class="hint-container-title">Example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//...</span>

  head<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//...</span>

    <span class="token comment">// import an external script</span>
    <span class="token punctuation">[</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> src<span class="token operator">:</span> <span class="token string">&quot;YOUR_SCRIPT_LINK&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// add a script</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\
        // your script here
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// add an external CSS</span>
    <span class="token punctuation">[</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&quot;stylesheet&quot;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&quot;YOUR_STYLE_LINK&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// add a style</span>
    <span class="token comment">// We don&#39;t recommend this, you should prefer to use .vuepress/style/index.scss</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\
        /* your style here */
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="per-page" tabindex="-1"><a class="header-anchor" href="#per-page" aria-hidden="true">#</a> Per Page</h2>`,2),b=s("code",null,"head",-1),g=p(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">script</span><span class="token punctuation">:</span> YOUR_SCRIPT_LINK
  <span class="token punctuation">-</span> <span class="token key atrule">script</span><span class="token punctuation">:</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> module
      <span class="token key atrule">src</span><span class="token punctuation">:</span> YOUR_SCRIPT_LINK
  <span class="token punctuation">-</span> <span class="token key atrule">style</span><span class="token punctuation">:</span> YOUR_STYLE_LINK
  <span class="token punctuation">-</span> <span class="token key atrule">style</span><span class="token punctuation">:</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> text/css
      <span class="token key atrule">content</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
        /* your style here */</span></span>
<span class="token punctuation">---</span></span>

Page content

...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(_,y){const a=o("RouterLink");return l(),c("div",null,[r,u(" more "),k,s("p",null,[n("If you need to add global CSS and JS, please set "),v,n(" option in VuePress "),e(a,{to:"/cookbook/vuepress/config.html"},{default:t(()=>[n("config file")]),_:1}),n(".")]),m,s("p",null,[n("If you need to add page-level CSS and JS, please set "),b,n(" option in "),e(a,{to:"/cookbook/vuepress/page.html#frontmatter"},{default:t(()=>[n("Front Matter")]),_:1}),n(".")]),g])}const x=i(d,[["render",h],["__file","external.html.vue"]]);export{x as default};
