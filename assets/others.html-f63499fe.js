import{_ as c,r as s,o as l,c as p,b as n,d as e,e as a,w as t,f as r}from"./app-1ee6e138.js";const d={},u=r(`<h2 id="link-check" tabindex="-1"><a class="header-anchor" href="#link-check" aria-hidden="true">#</a> Link check</h2><p>The theme will check your Markdown links in dev mode by default.</p><p>You can customize this feature through <code>plugin.mdEnhance.checkLinks</code> in theme options. <code>checkLinks</code> receives an object.</p><ul><li>You can customize link check status with <code>checkLinks.status</code> where you can choose from <code>&#39;always&#39;</code>, <code>&#39;never&#39;</code>, <code>&#39;dev&#39;</code> and <code>&#39;build&#39;</code>.</li><li>To ignore some links, you can set <code>checkLinks.ignore</code> with an array of string and RegExp, or a function that receives link and isDev as parameters and returns a boolean value indicating whether to ignore the link.</li></ul><p>E.g.:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gfm" tabindex="-1"><a class="header-anchor" href="#gfm" aria-hidden="true">#</a> GFM</h2><p>If your docs both serve on documentation site and directly on GitHub, we provide <code>plugins.mdEnhance.gfm</code> in theme options to align your Markdown behavior with GitHub.</p>`,8),h={class:"hint-container note"},k=n("p",{class:"hint-container-title"},"Note",-1),m={href:"https://github.github.com/gfm/",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"We are not 100% supporting it to be honestly, we only supply its syntax including linkify, breaks, footnote, task list, code highlight, image mark, mermaid, mathjax and so on.",-1),g=n("p",null,[e("Some of the behavior might be different, for example to support Vue syntax, we are not disallowing "),n("code",null,"<script>"),e(" tags. But in most situation, the behavior should be same.")],-1),b=n("p",null,[e("Besides, custom container is enabled by default in "),n("code",null,"@vuepress/theme-default"),e(" and "),n("code",null,"vuepress-theme-hope"),e(", but not available in GitHub Markdown preview.")],-1),_=n("h2",{id:"v-pre",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#v-pre","aria-hidden":"true"},"#"),e(" v-pre")],-1),f=n("p",null,[e("Since VuePress2 has removed V1's v-pre container in core, the plugin provides "),n("code",null,"vPre"),e(" option to support it. That is, you can use any Mustache syntax in the container below.")],-1),y=n("div",null,[n("p",null,"{{ abc }}")],-1),x=n("div",{class:"language-markdown","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`::: v-pre

{{ abc }}

:::
`)])],-1);function w(M,E){const o=s("ExternalLinkIcon"),i=s("MdDemo");return l(),p("div",null,[u,n("div",h,[k,n("p",null,[e("For full GFM syntax, see "),n("a",m,[e("GFM"),a(o)]),e(".")]),v,g,b]),_,f,a(i,{title:"",id:"md-demo-51"},{default:t(()=>[y]),code:t(()=>[x]),_:1})])}const V=c(d,[["render",w],["__file","others.html.vue"]]);export{V as default};
