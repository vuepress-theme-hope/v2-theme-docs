import{_ as l,r as o,o as r,c,b as e,d as a,e as s,w as i,f as n}from"./app-c5a3c96d.js";const d={},p=e("h2",{id:"intro",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#intro","aria-hidden":"true"},"#"),a(" Intro")],-1),u=e("p",null,[a("The theme provides blog feature, and it's "),e("strong",null,"not"),a(" enabled by default.")],-1),h=e("p",null,[a("You can enable blog feature by setting "),e("code",null,"plugins.blog"),a(" to "),e("code",null,"true"),a(" in theme options.")],-1),m=n('<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt" aria-hidden="true">#</a> excerpt</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether generate excerpt for page.</p><h3 id="excerptseparator" tabindex="-1"><a class="header-anchor" href="#excerptseparator" aria-hidden="true">#</a> excerptSeparator</h3><ul><li>Type: <code>string</code></li><li>Default: <code>&lt;!-- more --&gt;</code></li></ul><p>Separator used to split excerpt from page content.</p><h3 id="excerptlength" tabindex="-1"><a class="header-anchor" href="#excerptlength" aria-hidden="true">#</a> excerptLength</h3><ul><li>Type: <code>number</code></li><li>Default: <code>300</code></li></ul><p>Length of excerpt when auto generating.</p><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h3><ul><li>Type: <code>(page: Page) =&gt; boolean</code></li><li>Default: <code>(page) =&gt; Boolean(page.filePathRelative) &amp;&amp; !page.frontmatter.home</code></li></ul><p>Page filter, determine whether a page should be included.</p><p>By default, all the pages generated from Markdown files but not homepage will be included as articles.</p><h3 id="excerptfilter" tabindex="-1"><a class="header-anchor" href="#excerptfilter" aria-hidden="true">#</a> excerptFilter</h3><ul><li>Type: <code>(page: Page) =&gt; boolean</code></li><li>Default: <code>filter</code> option</li></ul><p>Page filter, determine whether the plugin should generate excerpt for it.</p><h3 id="slugify" tabindex="-1"><a class="header-anchor" href="#slugify" aria-hidden="true">#</a> slugify</h3><ul><li>Type: <code>(name: string) =&gt; string</code></li><li>Default: <code>(name) =&gt; name.replace(/ _/g, &#39;-&#39;).replace(/[:?*|\\\\/&lt;&gt;]/g, &quot;&quot;).toLowerCase()</code></li></ul><p>Slugify function, used to convert key name which they are register in routes.</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3>',21),g=n(`<li><p>Type: <code>BlogTypeOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BlogTypeOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Unique type name
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * A filter function to determine whether a page should be the type
   */</span>
  <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * A custom function to sort the pages
   */</span>
  sorter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageA<span class="token operator">:</span> Page<span class="token punctuation">,</span> pageB<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Page path to be registered
   *
   * <span class="token keyword">@default</span> &#39;/:key/&#39;
   */</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Frontmatter
   */</span>
  frontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Layout name
   *
   * <span class="token keyword">@default</span> &#39;BlogType&#39;
   */</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>[]</code></p></li>`,2),b=e("p",null,"Details:",-1),v=n('<p>Additional article type.</p><h3 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> article</h3><ul><li>Type: <code>string</code></li><li>Default: <code>/article/</code></li></ul><p>Article list route path.</p><h3 id="category" tabindex="-1"><a class="header-anchor" href="#category" aria-hidden="true">#</a> category</h3><ul><li>Type: <code>string</code></li><li>Default: <code>/category/</code></li></ul><p>Category map route path.</p><h3 id="categoryitem" tabindex="-1"><a class="header-anchor" href="#categoryitem" aria-hidden="true">#</a> categoryItem</h3><ul><li>Type: <code>string</code></li><li>Default: <code>/category/:name/</code></li></ul><p>Category list route path. <code>:name</code> will be replaced by category name.</p><h3 id="tag" tabindex="-1"><a class="header-anchor" href="#tag" aria-hidden="true">#</a> tag</h3><ul><li>Type: <code>string</code></li><li>Default: <code>/tag/</code></li></ul><p>Tag map route path.</p><h3 id="tagitem" tabindex="-1"><a class="header-anchor" href="#tagitem" aria-hidden="true">#</a> tagItem</h3><ul><li>Type: <code>string</code></li><li>Default: <code>/tag/:name/</code></li></ul><p>Tag list route path. <code>:name</code> will be replaced by tag name.</p><h3 id="star" tabindex="-1"><a class="header-anchor" href="#star" aria-hidden="true">#</a> star</h3><ul><li>Type: <code>string</code></li><li>Default: <code>/star/</code></li></ul><p>Star article list route path.</p><h3 id="timeline" tabindex="-1"><a class="header-anchor" href="#timeline" aria-hidden="true">#</a> timeline</h3><ul><li>Type: <code>string</code></li><li>Default: <code>/timeline/</code></li></ul><p>Timeline list route path.</p><h3 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload" aria-hidden="true">#</a> hotReload</h3><ul><li>Type: <code>boolean</code></li><li>Default: Whether using <code>--debug</code> flag</li></ul><p>Whether to enable hot reload in the development server.</p>',25);function f(k,y){const t=o("RouterLink");return r(),c("div",null,[p,u,h,e("p",null,[a("For instructions, please see "),s(t,{to:"/guide/blog/intro.html"},{default:i(()=>[a("Blog Intro")]),_:1}),a(".")]),m,e("ul",null,[g,e("li",null,[b,e("ul",null,[e("li",null,[s(t,{to:"/guide/blog/article.html#other-types-of-articles"},{default:i(()=>[a("Guide → Article List")]),_:1})])])])]),v])}const _=l(d,[["render",f],["__file","blog.html.vue"]]);export{_ as default};
