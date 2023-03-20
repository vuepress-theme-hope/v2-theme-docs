import{a3 as l,Z as o,_ as r,a1 as e,a2 as a,$ as t,a0 as i,a5 as n,D as c}from"./framework-32163d8a.js";const d={},p=e("h2",{id:"введение",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#введение","aria-hidden":"true"},"#"),a(" Введение")],-1),u=e("p",null,[a("Тема предоставляет функцию блога, и она "),e("strong",null,"не"),a(" включена по умолчанию.")],-1),h=e("p",null,[a("Вы можете включить функцию блога, установив для "),e("code",null,"plugins.blog"),a(" значение "),e("code",null,"true"),a(" в настройках темы.")],-1),m=n('<h2 id="опции" tabindex="-1"><a class="header-anchor" href="#опции" aria-hidden="true">#</a> Опции</h2><h3 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt" aria-hidden="true">#</a> excerpt</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether generate excerpt for page.</p><h3 id="excerptseparator" tabindex="-1"><a class="header-anchor" href="#excerptseparator" aria-hidden="true">#</a> excerptSeparator</h3><ul><li>Type: <code>string</code></li><li>Default: <code>&lt;!-- more --&gt;</code></li></ul><p>Separator used to split excerpt from page content.</p><h3 id="excerptlength" tabindex="-1"><a class="header-anchor" href="#excerptlength" aria-hidden="true">#</a> excerptLength</h3><ul><li>Type: <code>number</code></li><li>Default: <code>300</code></li></ul><p>Length of excerpt when auto generating.</p><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h3><ul><li>Тип: <code>(page: Page) =&gt; boolean</code></li><li>По умолчанию: <code>(page) =&gt; Boolean(page.filePathRelative) &amp;&amp; !page.frontmatter.home</code></li></ul><p>Фильтр страниц, определяющий, следует ли включать страницу.</p><p>По умолчанию все страницы, созданные из файлов Markdown, но не домашняя страница, будут включены в качестве статей.</p><h3 id="excerptfilter" tabindex="-1"><a class="header-anchor" href="#excerptfilter" aria-hidden="true">#</a> excerptFilter</h3><ul><li>Type: <code>(page: Page) =&gt; boolean</code></li><li>Default: <code>filter</code> option</li></ul><p>Page filter, determine whether the plugin should generate excerpt for it.</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3>',18),g=n(`<li><p>Type: <code>BlogTypeOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BlogTypeOptions</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>[]</code></p></li>`,2),v=e("p",null,"Details:",-1),b=n('<p>Additional article type.</p><h3 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> article</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>/article/</code></li></ul><p>Путь маршрута списка статей.</p><h3 id="category" tabindex="-1"><a class="header-anchor" href="#category" aria-hidden="true">#</a> category</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>/category/</code></li></ul><p>Путь маршрута карты категории.</p><h3 id="categoryitem" tabindex="-1"><a class="header-anchor" href="#categoryitem" aria-hidden="true">#</a> categoryItem</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>/category/:name/</code></li></ul><p>Путь маршрута списка категорий. <code>:name</code> будет заменено именем категории.</p><h3 id="tag" tabindex="-1"><a class="header-anchor" href="#tag" aria-hidden="true">#</a> tag</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>/tag/</code></li></ul><p>Отметьте путь маршрута карты.</p><h3 id="tagitem" tabindex="-1"><a class="header-anchor" href="#tagitem" aria-hidden="true">#</a> tagItem</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>/tag/:name/</code></li></ul><p>Путь маршрута списка тегов. <code>:name</code> будет заменено именем тега.</p><h3 id="star" tabindex="-1"><a class="header-anchor" href="#star" aria-hidden="true">#</a> star</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>/star/</code></li></ul><p>Путь маршрута к списку звездных статей.</p><h3 id="timeline" tabindex="-1"><a class="header-anchor" href="#timeline" aria-hidden="true">#</a> timeline</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>/timeline/</code></li></ul><p>Путь маршрута списка временной шкалы.</p><h3 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload" aria-hidden="true">#</a> hotReload</h3><ul><li>Type: <code>boolean</code></li><li>Default: Whether using <code>--debug</code> flag</li></ul><p>Whether to enable hot reload in the development server.</p>',25);function k(f,x){const s=c("RouterLink");return o(),r("div",null,[p,u,h,e("p",null,[a("Инструкции смотрите в "),t(s,{to:"/ru/guide/blog/intro.html"},{default:i(()=>[a("Введение в блог")]),_:1}),a(".")]),m,e("ul",null,[g,e("li",null,[v,e("ul",null,[e("li",null,[t(s,{to:"/ru/guide/blog/article.html#other-types-of-articles"},{default:i(()=>[a("Guide → Article List")]),_:1})])])])]),b])}const _=l(d,[["render",k],["__file","blog.html.vue"]]);export{_ as default};
