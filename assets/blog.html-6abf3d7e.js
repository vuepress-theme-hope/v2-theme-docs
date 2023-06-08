import{_ as l,r as o,o as c,c as r,b as e,d as a,e as i,w as t,f as n}from"./app-ce8d7da6.js";const d={},p=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),a(" 介绍")],-1),u=e("p",null,[a("主题提供博客功能，默认情况下"),e("strong",null,"不启用"),a("。")],-1),h=e("p",null,[a("你可以在主题选项中设置 "),e("code",null,"plugins.blog: true"),a(" 来启用博客功能。")],-1),m=n('<h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><h3 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt" aria-hidden="true">#</a> excerpt</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否生成摘要。</p><h3 id="excerptseparator" tabindex="-1"><a class="header-anchor" href="#excerptseparator" aria-hidden="true">#</a> excerptSeparator</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&lt;!-- more --&gt;</code></li></ul><p>摘要分隔符。</p><h3 id="excerptlength" tabindex="-1"><a class="header-anchor" href="#excerptlength" aria-hidden="true">#</a> excerptLength</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>300</code></li></ul><p>自动生成的摘要的长度。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>摘要的长度会尽可能的接近这个值。如果设置为 <code>0</code>，意味着不自动生成摘要。</p></div><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h3><ul><li>类型: <code>(page: Page) =&gt; boolean</code></li><li>默认值: <code>(page) =&gt; Boolean(page.filePathRelative) &amp;&amp; !page.frontmatter.home</code></li></ul><p>页面过滤器，此函数用于鉴别页面是否作为文章。</p><p>默认情况下，所有从 Markdown 源文件中生成的非主页页面，会被作为文章。</p><h3 id="excerptfilter" tabindex="-1"><a class="header-anchor" href="#excerptfilter" aria-hidden="true">#</a> excerptFilter</h3><ul><li>类型: <code>(page: Page) =&gt; boolean</code></li><li>默认值: <code>filter</code> 选项</li></ul><p>页面过滤器，此函数用于鉴别插件是否需要生成摘要。</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3>',19),v=n(`<li><p>类型: <code>BlogTypeOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BlogTypeOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 唯一的类型名称
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 一个过滤函数来决定页面是否满足此类型
   */</span>
  <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 页面排序器
   */</span>
  sorter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageA<span class="token operator">:</span> Page<span class="token punctuation">,</span> pageB<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 待注册的页面路径
   *
   * <span class="token keyword">@default</span> &#39;/:key/&#39;
   */</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 页面布局组件名称
   *
   * <span class="token keyword">@default</span> &#39;BlogType&#39;
   */</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Front Matter 配置
   */</span>
  frontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>[]</code></p></li>`,2),b=e("p",null,"详情:",-1),g=n('<p>额外的文章类型。</p><h3 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> article</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>/article/</code></li></ul><p>文章列表路由路径。</p><h3 id="category" tabindex="-1"><a class="header-anchor" href="#category" aria-hidden="true">#</a> category</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>/category/</code></li></ul><p>分类地图路由路径。</p><h3 id="categoryitem" tabindex="-1"><a class="header-anchor" href="#categoryitem" aria-hidden="true">#</a> categoryItem</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>/category/:name/</code></li></ul><p>分类列表路由路径。<code>:name</code> 会被自动替换为分类名称。</p><h3 id="tag" tabindex="-1"><a class="header-anchor" href="#tag" aria-hidden="true">#</a> tag</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>/tag/</code></li></ul><p>标签地图路由路径。</p><h3 id="tagitem" tabindex="-1"><a class="header-anchor" href="#tagitem" aria-hidden="true">#</a> tagItem</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>/tag/:name/</code></li></ul><p>标签列表路由路径。<code>:name</code> 会被自动替换为标签名称。</p><h3 id="star" tabindex="-1"><a class="header-anchor" href="#star" aria-hidden="true">#</a> star</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>/star/</code></li></ul><p>收藏文章列表路由路径。</p><h3 id="timeline" tabindex="-1"><a class="header-anchor" href="#timeline" aria-hidden="true">#</a> timeline</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>/timeline/</code></li></ul><p>时间线列表路由路径。</p><h3 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload" aria-hidden="true">#</a> hotReload</h3><ul><li>类型: <code>boolean</code></li><li>默认值: 是否在使用 <code>--debug</code> 标识</li></ul><p>是否需要在开发服务器启用热更新。</p>',25);function k(f,x){const s=o("RouterLink");return c(),r("div",null,[p,u,h,e("p",null,[a("有关说明，请参阅"),i(s,{to:"/zh/guide/blog/intro.html"},{default:t(()=>[a("博客介绍")]),_:1}),a("。")]),m,e("ul",null,[v,e("li",null,[b,e("ul",null,[e("li",null,[i(s,{to:"/zh/guide/blog/article.html#%E5%85%B6%E4%BB%96%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%96%87%E7%AB%A0"},{default:t(()=>[a("指南 → 文章列表")]),_:1})])])])]),g])}const y=l(d,[["render",k],["__file","blog.html.vue"]]);export{y as default};
