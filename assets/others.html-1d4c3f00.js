import{_ as p,r as e,o as l,c as i,b as n,d as s,e as a,w as t,f as r}from"./app-a080876e.js";const d={},u=r(`<h2 id="链接检查" tabindex="-1"><a class="header-anchor" href="#链接检查" aria-hidden="true">#</a> 链接检查</h2><p>主题默认在开发模式下检查你的 Markdown 链接。</p><p>你可以通过插件选项中的 <code>checkLinks</code> 自定义此功能。 <code>checkLinks</code> 接收一个对象。</p><ul><li>你可以使用 <code>checkLinks.status</code> 自定义链接检查状态，你可以在 <code>&#39;always&#39;</code>、<code>&#39;never&#39;</code>、<code>&#39;dev&#39;</code> 和 <code>&#39;build&#39;</code> 中选择。</li><li>要忽略某些链接，你可以将 <code>checkLinks.ignore</code> 设置为字符串和 RegExp 的数组，或者填入一个接收 link 和 isDev 作为参数并返回一个布尔值以标识是否忽略此链接的函数。</li></ul><p>例如:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mdEnhancePlugins</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">checkLinks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 仅在开发模式下检查链接</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&quot;dev&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 忽略以 \`/api/\` 开头的链接</span>
          <span class="token operator">/</span><span class="token operator">^</span>\\<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">api\\/</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token comment">// 忽略 \`/playground.html\`</span>
          <span class="token string">&quot;/playground.html&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gfm" tabindex="-1"><a class="header-anchor" href="#gfm" aria-hidden="true">#</a> GFM</h2><p>如果你的文档既在文档站点上提供又直接在 GitHub 上提供，我们提供了一个 <code>gfm</code> 选项来使你的 Markdown 行为与 GitHub 保持一致。</p>`,8),k={class:"hint-container note"},v=n("p",{class:"hint-container-title"},"注",-1),h={href:"https://github.github.com/gfm/",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"老实说，我们并不是 100% 支持它，我们只补全了它的语法，包括链接转换、换行、任务列表、脚注、代码高亮、图片标记、Mermaid、Mathjax 等。",-1),_=n("p",null,[s("某些行为可能会有所不同，例如，为了允许 Vue 语法，我们并没有禁止 "),n("code",null,"<script>"),s(" 标签。 但在大多数情况下，行为应该是相同的。")],-1),g=n("p",null,[s("另外自定义容器在 "),n("code",null,"@vuepress/theme-default"),s(" 和 "),n("code",null,"vuepress-theme-hope"),s(" 中默认启用，但在 GitHub Markdown 预览中不可用。")],-1),b=n("h2",{id:"v-pre",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#v-pre","aria-hidden":"true"},"#"),s(" v-pre")],-1),f=n("p",null,[s("由于 VuePress2 已经在 "),n("code",null,"@vuepress/core"),s(" 中移除了 V1 的 v-pre 容器，插件提供了一个选项 "),n("code",null,"vPre"),s(" 支持它。")],-1),x=n("p",null,[s("换言之当设置 "),n("code",null,"plugins.mdEnhance.vPre: true"),s(" 时，你可以在下面的容器中使用任何 Mustache 语法。")],-1),y=n("div",null,[n("p",null,"{{ abc }}")],-1),M=n("div",{class:"language-markdown","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`::: v-pre

{{ abc }}

:::
`)])],-1);function w(L,V){const o=e("ExternalLinkIcon"),c=e("MdDemo");return l(),i("div",null,[u,n("div",k,[v,n("p",null,[s("有关完整的 GFM 语法，请参阅 "),n("a",h,[s("GFM"),a(o)]),s("。")]),m,_,g]),b,f,x,a(c,{title:"",id:"md-demo-54"},{default:t(()=>[y]),code:t(()=>[M]),_:1})])}const G=p(d,[["render",w],["__file","others.html.vue"]]);export{G as default};