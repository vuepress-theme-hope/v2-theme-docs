import{_ as n,o as e,c as a,g as s}from"./app-25dbeecb.js";const t={},o=s(`<h2 id="link-check" tabindex="-1"><a class="header-anchor" href="#link-check" aria-hidden="true">#</a> Link check</h2><p>The theme will check your Markdown links in dev mode by default.</p><p>You can customize this feature through <code>checkLinks</code> in plugin options. <code>checkLinks</code> receives an object.</p><ul><li>You can customize link check status with <code>checkLinks.status</code> where you can choose from <code>&#39;always&#39;</code>, <code>&#39;never&#39;</code>, <code>&#39;dev&#39;</code> and <code>&#39;build&#39;</code>.</li><li>To ignore some links, you can set <code>checkLinks.ignore</code> with an array of string and RegExp, or a function that receives link and isDev as parameters and returns a boolean value indicating whether to ignore the link.</li></ul><p>E.g.:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mdEnhancePlugins</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">checkLinks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// only check links in dev mode</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&quot;dev&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// ignore links starting with \`/api/\`</span>
          <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api\\/</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token comment">// ignore \`/playground.html\`</span>
          <span class="token string">&quot;/playground.html&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gfm" tabindex="-1"><a class="header-anchor" href="#gfm" aria-hidden="true">#</a> GFM</h2><p>If your docs both serve on documentation site and directly on GitHub, we provide <code>plugins.mdEnhance.gfm</code> in theme options to align your Markdown behavior with GitHub.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>Custom container is enabled by default in <code>@vuepress/theme-default</code> and <code>vuepress-theme-hope</code>, but not available in GitHub Markdown preview.</p></div><h2 id="v-pre" tabindex="-1"><a class="header-anchor" href="#v-pre" aria-hidden="true">#</a> v-pre</h2><p>Since VuePress2 has removed V1&#39;s v-pre container in core, the plugin provides <code>vPre</code> option to support it. That is, you can use any Mustache syntax in the container below.</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: v-pre

{{ abc }}

:::
</code></pre></div>`,12),i=[o];function c(p,r){return e(),a("div",null,i)}const d=n(t,[["render",c],["__file","others.html.vue"]]);export{d as default};
