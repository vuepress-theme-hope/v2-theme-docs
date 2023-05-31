import{_ as r,r as t,o as i,c as d,e as n,f as e,a,w as o,b as u,g as c}from"./app-d7067868.js";const k={},g=n("code",null,"vuepress-theme-hope",-1),m=n("code",null,"vuepress-plugin-seo2",-1),h=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"相关信息"),n("p",null,[n("code",null,"vuepress-theme-hope"),e(" 将主题选项中的 "),n("code",null,"plugins.seo"),e(" 作为插件选项提供给 "),n("code",null,"vuepress-plugin-seo2"),e("。")])],-1),b=n("code",null,"<head>",-1),v={href:"https://ogp.me/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.w3.org/TR/json-ld-api/",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,[e("如果不需要这个插件，请设置在主题选项中设置 "),n("code",null,"plugins.seo: false"),e("。")],-1),f=c(`<h2 id="开箱即用" tabindex="-1"><a class="header-anchor" href="#开箱即用" aria-hidden="true">#</a> 开箱即用</h2><p>插件开箱即用，在不做任何配置的情况下，会尽可能通过页面内容，提取对应的信息补全 OGP 与 JSON-LD 所需的必要标签。</p><p>默认情况下，插件会读取站点配置、主题配置与页面的 frontmatter 来尽可能自动生成。诸如站点名称，页面标题，页面类型，写作日期，最后更新日期，文章标签均会自动生成。</p><h3 id="默认的-ogp-生成逻辑" tabindex="-1"><a class="header-anchor" href="#默认的-ogp-生成逻辑" aria-hidden="true">#</a> 默认的 OGP 生成逻辑</h3><table><thead><tr><th style="text-align:center;">属性名称</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:center;"><code>og:url</code></td><td style="text-align:center;"><code>themeConfig.hostname</code> + <code>path</code></td></tr><tr><td style="text-align:center;"><code>og:site_name</code></td><td style="text-align:center;"><code>siteConfig.title</code></td></tr><tr><td style="text-align:center;"><code>og:title</code></td><td style="text-align:center;"><code>page.title</code></td></tr><tr><td style="text-align:center;"><code>og:description</code></td><td style="text-align:center;"><code>page.frontmatter.description</code> || 自动生成 (当插件选项中的 <code>autoDescription</code> 为 <code>true</code> 时)</td></tr><tr><td style="text-align:center;"><code>og:type</code></td><td style="text-align:center;"><code>&quot;article&quot;</code></td></tr><tr><td style="text-align:center;"><code>og:image</code></td><td style="text-align:center;"><code>themeConfig.hostname</code> + <code>page.frontmatter.image</code> || 页面的第一张图片|| 插件选项的 <code>fallbackImage</code></td></tr><tr><td style="text-align:center;"><code>og:updated_time</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr><tr><td style="text-align:center;"><code>og:locale</code></td><td style="text-align:center;"><code>page.lang</code></td></tr><tr><td style="text-align:center;"><code>og:locale:alternate</code></td><td style="text-align:center;"><code>themeConfig.locales</code> 包含的其他语言</td></tr><tr><td style="text-align:center;"><code>twitter:card</code></td><td style="text-align:center;"><code>&quot;summary_large_image&quot;</code> (仅在找到图片时)</td></tr><tr><td style="text-align:center;"><code>twitter:image:alt</code></td><td style="text-align:center;"><code>page.title</code> (仅在找到图片时)</td></tr><tr><td style="text-align:center;"><code>article:author</code></td><td style="text-align:center;"><code>page.frontmatter.author</code> || <code>themeConfig.author</code></td></tr><tr><td style="text-align:center;"><code>article:tag</code></td><td style="text-align:center;"><code>page.frontmatter.tags</code> || <code>page.frontmatter.tag</code></td></tr><tr><td style="text-align:center;"><code>article:published_time</code></td><td style="text-align:center;"><code>page.frontmatter.date</code> || <code>page.git.createdTime</code></td></tr><tr><td style="text-align:center;"><code>article:modified_time</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr></tbody></table><h3 id="默认的-json-ld-生成逻辑" tabindex="-1"><a class="header-anchor" href="#默认的-json-ld-生成逻辑" aria-hidden="true">#</a> 默认的 JSON-LD 生成逻辑</h3><table><thead><tr><th style="text-align:center;">属性名</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:center;"><code>@context</code></td><td style="text-align:center;"><code>&quot;https://schema.org&quot;</code></td></tr><tr><td style="text-align:center;"><code>@type</code></td><td style="text-align:center;"><code>&quot;NewsArticle&quot;</code></td></tr><tr><td style="text-align:center;"><code>headline</code></td><td style="text-align:center;"><code>page.title</code></td></tr><tr><td style="text-align:center;"><code>image</code></td><td style="text-align:center;">页面中的图片|| <code>themeConfig.hostname</code> + <code>page.frontmatter.image</code></td></tr><tr><td style="text-align:center;"><code>datePublished</code></td><td style="text-align:center;"><code>page.frontmatter.date</code> || <code>page.git.createdTime</code></td></tr><tr><td style="text-align:center;"><code>dateModified</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr><tr><td style="text-align:center;"><code>author</code></td><td style="text-align:center;"><code>page.frontmatter.author</code> || <code>themeConfig.author</code></td></tr></tbody></table><h2 id="直接添加-head-标签" tabindex="-1"><a class="header-anchor" href="#直接添加-head-标签" aria-hidden="true">#</a> 直接添加 head 标签</h2><p>你可以在页面的 frontmatter 中配置 <code>head</code> 选项，自主添加特定标签到页面 <code>&lt;head&gt;</code> 以增强 SEO。</p><p>如:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> keywords
      <span class="token key atrule">content</span><span class="token punctuation">:</span> SEO plugin</span>
<span class="token punctuation">---</span></span>
</code></pre></div><p>会自动注入 <code>&lt;meta name=&quot;keywords&quot; content=&quot;SEO plugin&quot; /&gt;</code>。</p><h2 id="自定义生成过程" tabindex="-1"><a class="header-anchor" href="#自定义生成过程" aria-hidden="true">#</a> 自定义生成过程</h2><p>插件支持让你完全控制生成逻辑。</p><h3 id="页面类型" tabindex="-1"><a class="header-anchor" href="#页面类型" aria-hidden="true">#</a> 页面类型</h3><p>对于大多数页面，基本只有文章和网页两种类型，所以插件提供了 <code>isArticle</code> 选项让你提供辨别文章的逻辑。</p><p>选项接受一个 <code>(page: Page) =&gt; boolean</code> 格式的函数，默认情况下从 Markdown 文件生成的非主页页面都会被视为文章。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果某个网页的确符合图书、音乐之类的“冷门”类型，你可以通过设置下方三个选项处理它们。</p></div><h3 id="ogp" tabindex="-1"><a class="header-anchor" href="#ogp" aria-hidden="true">#</a> OGP</h3><p>你可以在主题选项中通过 <code>plugins.seo.ogp</code> 传入一个函数来按照你的需要修改默认 OGP 对象并返回。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">ogp</span><span class="token generic class-name"><span class="token operator">&lt;</span>
  ExtraPageData <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span>
    <span class="token builtin">never</span><span class="token punctuation">,</span>
    <span class="token builtin">never</span>
  <span class="token operator">&gt;</span><span class="token punctuation">,</span>
  ExtraPageFrontmatter <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span>
    <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span>
    <span class="token builtin">unknown</span>
  <span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  ExtraPageFields <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span>
    <span class="token builtin">never</span><span class="token punctuation">,</span>
    <span class="token builtin">never</span>
  <span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  <span class="token doc-comment comment">/** 插件自动推断的 OGP 对象 */</span>
  ogp<span class="token operator">:</span> SeoContent<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** 页面对象 */</span>
  page<span class="token operator">:</span> ExtendPage<span class="token operator">&lt;</span>ExtraPageData<span class="token punctuation">,</span> ExtraPageFrontmatter<span class="token punctuation">,</span> ExtraPageFields<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** VuePress App */</span>
  app<span class="token operator">:</span> App
<span class="token punctuation">)</span><span class="token operator">:</span> SeoContent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),_=c(`<p>比如你在使用某个第三方主题，并按照主题要求为每篇文章在 front matter 中设置了 <code>banner</code>，那你可以传入这样的 <code>ogp</code>:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">ogp</span><span class="token operator">:</span> <span class="token punctuation">(</span>ogp<span class="token punctuation">,</span> page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>ogp<span class="token punctuation">,</span>
    <span class="token string-property property">&quot;og:image&quot;</span><span class="token operator">:</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>banner <span class="token operator">||</span> ogp<span class="token punctuation">[</span><span class="token string">&quot;og:image&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="json-ld" tabindex="-1"><a class="header-anchor" href="#json-ld" aria-hidden="true">#</a> JSON-LD</h3><p>同 OGP，你可以在主题选项中通过 <code>plugins.seo.jsonLd</code> 传入一个函数来按照你的需要修改默认 JSON-LD 对象并返回。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">jsonLd</span><span class="token generic class-name"><span class="token operator">&lt;</span>
  ExtraPageData <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span>
    <span class="token builtin">never</span><span class="token punctuation">,</span>
    <span class="token builtin">never</span>
  <span class="token operator">&gt;</span><span class="token punctuation">,</span>
  ExtraPageFrontmatter <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span>
    <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span>
    <span class="token builtin">unknown</span>
  <span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  ExtraPageFields <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span>
    <span class="token builtin">never</span><span class="token punctuation">,</span>
    <span class="token builtin">never</span>
  <span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  <span class="token doc-comment comment">/** 插件自动推断的 JSON-LD 对象 */</span>
  jsonLD<span class="token operator">:</span> ArticleJSONLD <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** 页面对象 */</span>
  page<span class="token operator">:</span> ExtendPage<span class="token operator">&lt;</span>ExtraPageData<span class="token punctuation">,</span> ExtraPageFrontmatter<span class="token punctuation">,</span> ExtraPageFields<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** VuePress App */</span>
  app<span class="token operator">:</span> App
<span class="token punctuation">)</span><span class="token operator">:</span> ArticleJSONLD <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请注意插件不会对非文章页生成 JSON-LD，所以函数的首个参数可能为 <code>null</code>。</p></div><h2 id="规范链接" tabindex="-1"><a class="header-anchor" href="#规范链接" aria-hidden="true">#</a> 规范链接</h2><p>如果你将内容部署到不同的站点，或不同 URL 下的相同内容，你可能需要在主题选项中通过 <code>plugins.seo.canonical</code> 选项为你的页面提供 “规范链接”。 你可以设置一个字符串，这样它会附加在页面路由链接之前，或者添加一个自定义函数 <code>(page: Page) =&gt; string | 如有必要，null</code> 返回规范链接。</p><div class="hint-container tip"><p class="hint-container-title">例子</p><p>如果你的站点部署在 <code>example.com</code> 的 docs 文件夹下，但同时在下列网址中可用:</p><ul><li><code>http://example.com/docs/xxx</code></li><li><code>https://example.com/docs/xxx</code></li><li><code>http://www.example.com/docs/xxx</code></li><li><code>https://www.example.com/docs/xxx</code> (首选)</li></ul><p>要让搜索引擎结果始终是首选，你可能需要将 <code>canonical</code> 设置为 <code>https://www.example.com/docs/</code>，以便搜索引擎知道首选第四个 URL 作为索引结果。</p></div><h3 id="自定义-head-标签" tabindex="-1"><a class="header-anchor" href="#自定义-head-标签" aria-hidden="true">#</a> 自定义 head 标签</h3><p>有些时候你可能需要符合其他协议或按照其他搜索引擎提供的格式提供对应的 SEO 标签，此时你可以在主题选项中通过 <code>plugins.seo.customHead</code> 选项自定义 head 标签，其类型为:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">customHead</span><span class="token generic class-name"><span class="token operator">&lt;</span>
  ExtraPageData <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span>
    <span class="token builtin">never</span><span class="token punctuation">,</span>
    <span class="token builtin">never</span>
  <span class="token operator">&gt;</span><span class="token punctuation">,</span>
  ExtraPageFrontmatter <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span>
    <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span>
    <span class="token builtin">unknown</span>
  <span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  ExtraPageFields <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span>
    <span class="token builtin">never</span><span class="token punctuation">,</span>
    <span class="token builtin">never</span>
  <span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  head<span class="token operator">:</span> HeadConfig<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** 页面对象 */</span>
  page<span class="token operator">:</span> Page<span class="token operator">&lt;</span>ExtraPageData<span class="token punctuation">,</span> ExtraPageFrontmatter<span class="token punctuation">,</span> ExtraPageFields<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** VuePress App */</span>
  app<span class="token operator">:</span> App
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你应该直接修改传入的 <code>head</code> 参数。</p><h2 id="seo-介绍" tabindex="-1"><a class="header-anchor" href="#seo-介绍" aria-hidden="true">#</a> SEO 介绍</h2><p>搜索引擎优化 (<strong>S</strong>earch <strong>E</strong>ngine <strong>O</strong>ptimization)，是一种透过了解搜索引擎的运作规则来调整网站，以及提高目的网站在有关搜索引擎内排名的方式。由于不少研究发现，搜索引擎的用户往往只会留意搜索结果最前面的几个条目，所以不少网站都希望透过各种形式来影响搜索引擎的排序，让自己的网站可以有优秀的搜索排名。 所谓“针对搜索引擎作最优化的处理”，是指为了要让网站更容易被搜索引擎接受。搜索引擎会将网站彼此间的内容做一些相关性的资料比对，然后再由浏览器将这些内容以最快速且接近最完整的方式，呈现给搜索者。搜索引擎优化就是通过搜索引擎的规则进行优化，为用户打造更好的用户体验，最终的目的就是做好用户体验。</p><h2 id="rdfa-1-1" tabindex="-1"><a class="header-anchor" href="#rdfa-1-1" aria-hidden="true">#</a> RDFa 1.1</h2>`,16),w={href:"https://www.w3.org/TR/rdfa-primer/",target:"_blank",rel:"noopener noreferrer"},P={class:"hint-container tip"},E=n("p",{class:"hint-container-title"},"提示",-1),R={href:"https://search.google.com/test/rich-results",target:"_blank",rel:"noopener noreferrer"},O=n("h2",{id:"相关文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关文档","aria-hidden":"true"},"#"),e(" 相关文档")],-1),S={href:"https://ogp.me/",target:"_blank",rel:"noopener noreferrer"},D=n("strong",null,"O",-1),L=n("strong",null,"G",-1),N=n("strong",null,"Pr",-1),q=n("p",null,[e("此插件完美支持该协议，会自动生成符合该协议的 "),n("code",null,"<meta>"),e(" 标签。")],-1),F={href:"https://www.w3.org/TR/json-ld-api/",target:"_blank",rel:"noopener noreferrer"},C=n("p",null,"此插件会为文章类页面生成 NewsArticle 类标签。",-1),j={href:"https://www.w3.org/TR/rdfa-primer/",target:"_blank",rel:"noopener noreferrer"},A=n("p",null,"主题结构完美支持",-1),G={href:"https://schema.org/",target:"_blank",rel:"noopener noreferrer"},J=n("p",null,"结构标记的 Schema 定义站点",-1),T=n("h2",{id:"相关工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关工具","aria-hidden":"true"},"#"),e(" 相关工具")],-1),V={href:"https://search.google.com/test/rich-results",target:"_blank",rel:"noopener noreferrer"};function z(B,H){const p=t("ProjectLink"),l=t("RouterLink"),s=t("ExternalLinkIcon");return i(),d("div",null,[n("p",null,[g,e(" 通过内置 "),a(p,{name:"seo2",path:"/zh/"},{default:o(()=>[m]),_:1}),e(" 为提供 SEO 增强功能。")]),n("p",null,[e("为了使插件能够更好的工作，你可能需要查看一下 "),a(l,{to:"/zh/config/frontmatter/info.html"},{default:o(()=>[e("页面配置")]),_:1}),e(" 并合理的配置它们。")]),h,n("p",null,[e("插件会通过向网站 "),b,e(" 注入标签，让你的网站完全支持 "),n("a",v,[e("开放内容协议 OGP"),a(s)]),e(" 和 "),n("a",x,[e("JSON-LD 1.1"),a(s)]),e("，以全面增强站点的搜索引擎优化性。")]),y,u(" more "),f,n("p",null,[e("详细的参数结构详见 "),a(p,{name:"seo2",path:"/zh/config.html"},{default:o(()=>[e("配置")]),_:1}),e("。")]),_,n("p",null,[e("主题通过遵循 "),n("a",w,[e("RDFa 1.1"),a(s)]),e("，为网站的大部分结构添加了富媒体结构支持。")]),n("div",P,[E,n("p",null,[e("你可以使用 "),n("a",R,[e("Google 富媒体结构测试工具"),a(s)]),e(" 测试本站点。")])]),O,n("ul",null,[n("li",null,[n("p",null,[n("a",S,[e("开放内容协议 OGP"),a(s)]),e(" ("),D,e("pen "),L,e("raph "),N,e("otocal)")]),q]),n("li",null,[n("p",null,[n("a",F,[e("JSON-LD 1.1"),a(s)])]),C]),n("li",null,[n("p",null,[n("a",j,[e("RDFa 1.1"),a(s)])]),A]),n("li",null,[n("p",null,[n("a",G,[e("Schema.Org"),a(s)])]),J])]),T,n("ul",null,[n("li",null,[n("a",V,[e("Google 富媒体结构测试工具"),a(s)])])])])}const M=r(k,[["render",z],["__file","seo.html.vue"]]);export{M as default};
