import{_ as i,r as c,o,c as l,a as u,b as s,d as n,e,w as t,f as p}from"./app-fe94cd90.js";const r={},d=s("p",null,"本教程将指导您如何将外部脚本和样式添加到您的站点。",-1),k=s("h2",{id:"全局",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#全局","aria-hidden":"true"},"#"),n(" 全局")],-1),v=s("code",null,"head",-1),m=p(`<div class="hint-container tip"><p class="hint-container-title">例子</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  head<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>

    <span class="token comment">// 导入一个外部脚本</span>
    <span class="token punctuation">[</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> src<span class="token operator">:</span> <span class="token string">&quot;YOUR_SCRIPT_LINK&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 添加一段脚本</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\
        // your script here
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 添加一个外部 CSS</span>
    <span class="token punctuation">[</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&quot;stylesheet&quot;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&quot;YOUR_STYLE_LINK&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 添加一段样式</span>
    <span class="token comment">// 我们不建议这么做，你应该首选使用 .vuepress/style/index.scss</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\
        /* your style here */
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="每页" tabindex="-1"><a class="header-anchor" href="#每页" aria-hidden="true">#</a> 每页</h2>`,2),b=s("code",null,"head",-1),h=p(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
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

页面内容

...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function _(g,y){const a=c("RouterLink");return o(),l("div",null,[d,u(" more "),k,s("p",null,[n("如果你需要添加全局的 CSS 与 JS，请在 VuePress "),e(a,{to:"/zh/cookbook/vuepress/config.html"},{default:t(()=>[n("配置文件")]),_:1}),n(" 中配置 "),v,n(" 选项。")]),m,s("p",null,[n("如果你需要添加页面级别的 CSS 与 JS，请在 "),e(a,{to:"/zh/cookbook/vuepress/page.html#frontmatter"},{default:t(()=>[n("Front Matter")]),_:1}),n(" 中配置 "),b,n(" 选项。")]),h])}const q=i(r,[["render",_],["__file","external.html.vue"]]);export{q as default};
