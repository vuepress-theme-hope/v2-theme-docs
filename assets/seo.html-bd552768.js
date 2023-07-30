import{_ as l,r as s,o as r,c as d,b as e,d as n,e as t,w as o,a as u,f as p}from"./app-c5a3c96d.js";const g={},h=e("code",null,"vuepress-theme-hope",-1),k=e("code",null,"vuepress-plugin-seo2",-1),m=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"Info"),e("p",null,[e("code",null,"vuepress-theme-hope"),n(" passes "),e("code",null,"plugins.seo"),n(" in theme options as plugin options to "),e("code",null,"vuepress-plugin-seo2"),n(".")])],-1),b={href:"https://ogp.me/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.w3.org/TR/json-ld-api/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[n("If you don't need this plugin, please set "),e("code",null,"plugins.seo"),n(" to "),e("code",null,"false"),n(" in theme options.")],-1),y=p(`<h2 id="out-of-box" tabindex="-1"><a class="header-anchor" href="#out-of-box" aria-hidden="true">#</a> Out of Box</h2><p>The plugin works out of the box. Without any config, it will extract information from the page content as much as possible to complete the necessary tags required by OGP and JSON-LD.</p><p>By default, the plugin will read the site config and page frontmatter to automatically generate tags as much as possible. Such as site name, page title, page type, writing date, last update date, and article tags are all automatically generated.</p><p>The following are the <code>&lt;meta&gt;</code> tags and their values that will be injected into <code>&lt;head&gt;</code> by default:</p><h3 id="default-ogp-generation" tabindex="-1"><a class="header-anchor" href="#default-ogp-generation" aria-hidden="true">#</a> Default OGP Generation</h3><p>The following are the <code>&lt;meta&gt;</code> tags and their value injected into <code>&lt;head&gt;</code> by default to satisfy OGP:</p><table><thead><tr><th style="text-align:center;">Meta Name</th><th style="text-align:center;">Value</th></tr></thead><tbody><tr><td style="text-align:center;"><code>og:url</code></td><td style="text-align:center;"><code>themeConfig.hostname</code> + <code>path</code></td></tr><tr><td style="text-align:center;"><code>og:site_name</code></td><td style="text-align:center;"><code>siteConfig.title</code></td></tr><tr><td style="text-align:center;"><code>og:title</code></td><td style="text-align:center;"><code>page.title</code></td></tr><tr><td style="text-align:center;"><code>og:description</code></td><td style="text-align:center;"><code>page.frontmatter.description</code> || auto generated (when <code>autoDescription</code> is <code>true</code> in plugin options)</td></tr><tr><td style="text-align:center;"><code>og:type</code></td><td style="text-align:center;"><code>&quot;article&quot;</code></td></tr><tr><td style="text-align:center;"><code>og:image</code></td><td style="text-align:center;"><code>themeConfig.hostname</code> + <code>page.frontmatter.image</code> ||first image in page || <code>fallbackImage</code> in plugin options</td></tr><tr><td style="text-align:center;"><code>og:updated_time</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr><tr><td style="text-align:center;"><code>og:locale</code></td><td style="text-align:center;"><code>page.lang</code></td></tr><tr><td style="text-align:center;"><code>og:locale:alternate</code></td><td style="text-align:center;">Other languages including in <code>siteData.locales</code></td></tr><tr><td style="text-align:center;"><code>twitter:card</code></td><td style="text-align:center;"><code>&quot;summary_large_image&quot;</code> (only available when image found)</td></tr><tr><td style="text-align:center;"><code>twitter:image:alt</code></td><td style="text-align:center;"><code>page.title</code> (only available when image found)</td></tr><tr><td style="text-align:center;"><code>article:author</code></td><td style="text-align:center;"><code>page.frontmatter.author</code> || <code>themeConfig.author</code></td></tr><tr><td style="text-align:center;"><code>article:tag</code></td><td style="text-align:center;"><code>page.frontmatter.tags</code> || <code>page.frontmatter.tag</code></td></tr><tr><td style="text-align:center;"><code>article:published_time</code></td><td style="text-align:center;"><code>page.frontmatter.date</code> || <code>page.git.createdTime</code></td></tr><tr><td style="text-align:center;"><code>article:modified_time</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr></tbody></table><h3 id="default-json-ld-generation" tabindex="-1"><a class="header-anchor" href="#default-json-ld-generation" aria-hidden="true">#</a> Default JSON-LD Generation</h3><table><thead><tr><th style="text-align:center;">Property Name</th><th style="text-align:center;">Value</th></tr></thead><tbody><tr><td style="text-align:center;"><code>@context</code></td><td style="text-align:center;"><code>&quot;https://schema.org&quot;</code></td></tr><tr><td style="text-align:center;"><code>@type</code></td><td style="text-align:center;"><code>&quot;NewsArticle&quot;</code></td></tr><tr><td style="text-align:center;"><code>headline</code></td><td style="text-align:center;"><code>page.title</code></td></tr><tr><td style="text-align:center;"><code>image</code></td><td style="text-align:center;">image in page || <code>themeConfig.hostname</code> + <code>page.frontmatter.image</code> || <code>siteFavIcon</code> in plugin options</td></tr><tr><td style="text-align:center;"><code>datePublished</code></td><td style="text-align:center;"><code>page.frontmatter.date</code> || <code>page.git.createdTime</code></td></tr><tr><td style="text-align:center;"><code>dateModified</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr><tr><td style="text-align:center;"><code>author</code></td><td style="text-align:center;"><code>page.frontmatter.author</code> || <code>themeConfig.author</code></td></tr></tbody></table><h2 id="setting-tags-directly" tabindex="-1"><a class="header-anchor" href="#setting-tags-directly" aria-hidden="true">#</a> Setting Tags Directly</h2><p>You can configure the <code>head</code> option in the page&#39;s frontmatter to add specific tags to the page <code>&lt;head&gt;</code> to enhance SEO.<br> For example:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> keywords
      <span class="token key atrule">content</span><span class="token punctuation">:</span> SEO plugin</span>
<span class="token punctuation">---</span></span>
</code></pre></div><p>Will automatically inject <code>&lt;meta name=&quot;keywords&quot; content=&quot;SEO plugin&quot; /&gt;</code>.</p><h2 id="customize-generation" tabindex="-1"><a class="header-anchor" href="#customize-generation" aria-hidden="true">#</a> Customize Generation</h2><p>The plugin also gives you full control over the build logic.</p><h3 id="page-type" tabindex="-1"><a class="header-anchor" href="#page-type" aria-hidden="true">#</a> Page Type</h3><p>For most pages, there are basically only two types: articles and website, so the plugin provides the <code>isArticle</code> option to allow you to provide logic for identifying articles.</p><p>The option accepts a function in the format <code>(page: Page) =&gt; boolean</code>, by default all non-home pages generated from Markdown files are treated as articles.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>If a page does fit into the &quot;unpopular&quot; genre like books, music, etc., you can handle them by setting the three options below.</p></div><h3 id="ogp" tabindex="-1"><a class="header-anchor" href="#ogp" aria-hidden="true">#</a> OGP</h3><p>You can use options <code>plugins.seo.ogp</code> in theme options. To pass in a function to modify the default OGP object to your needs and return it.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">ogp</span><span class="token generic class-name"><span class="token operator">&lt;</span>
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
  <span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  <span class="token doc-comment comment">/** OGP Object inferred by plugin */</span>
  ogp<span class="token operator">:</span> SeoContent<span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** Page Object */</span>
  page<span class="token operator">:</span> ExtendPage<span class="token operator">&lt;</span>ExtraPageData<span class="token punctuation">,</span> ExtraPageFrontmatter<span class="token punctuation">,</span> ExtraPageFields<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** VuePress App */</span>
  app<span class="token operator">:</span> App<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> SeoContent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),x=p(`<p>For example, if you are using a third-party theme and set a <code>banner</code> in frontmatter for each article according to the theme requirements, then you can pass in the following <code>ogp</code>:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">ogp</span><span class="token operator">:</span> <span class="token punctuation">(</span>ogp<span class="token punctuation">,</span> page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>ogp<span class="token punctuation">,</span>
    <span class="token string-property property">&quot;og:image&quot;</span><span class="token operator">:</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>banner <span class="token operator">||</span> ogp<span class="token punctuation">[</span><span class="token string">&quot;og:image&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="json-ld" tabindex="-1"><a class="header-anchor" href="#json-ld" aria-hidden="true">#</a> JSON-LD</h3><p>Like OGP, you can use <code>plugins.seo.jsonLd</code> options in theme options to pass in a function to modify the default JSON-LD object to your needs and return it.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">jsonLd</span><span class="token generic class-name"><span class="token operator">&lt;</span>
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
  <span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  <span class="token doc-comment comment">/** JSON-LD Object inferred by plugin */</span>
  jsonLD<span class="token operator">:</span> ArticleJSONLD <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** Page Object */</span>
  page<span class="token operator">:</span> ExtendPage<span class="token operator">&lt;</span>ExtraPageData<span class="token punctuation">,</span> ExtraPageFrontmatter<span class="token punctuation">,</span> ExtraPageFields<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** VuePress App */</span>
  app<span class="token operator">:</span> App<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> ArticleJSONLD <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>Please note that the plugin does not generate JSON-LD for non-article pages, so the first parameter of the function may be null.</p></div><h2 id="canonical-link" tabindex="-1"><a class="header-anchor" href="#canonical-link" aria-hidden="true">#</a> Canonical Link</h2><p>If you are deploying your content to different sites, or same content under different URLs, you may need to set <code>plugins.seo.canonical</code> in theme options to provide a &quot;Canonical Link&quot; for your page. You can either set a string which will be prepended before page route link, or adding a custom function <code>(page: Page) =&gt; string | null</code> to return a canonical link if necessary.</p><div class="hint-container tip"><p class="hint-container-title">Example</p><p>If your sites are deployed under docs folder in <code>example.com</code>, but available in:</p><ul><li><code>http://example.com/docs/xxx</code></li><li><code>https://example.com/docs/xxx</code></li><li><code>http://www.example.com/docs/xxx</code></li><li><code>https://www.example.com/docs/xxx</code> (primary)</li></ul><p>To let search engine results always be the primary choice, you may need to set <code>plugins.seo.canonical</code> to <code>https://www.example.com/docs/</code>, so that search engine will know that the fourth URL is preferred to be indexed.</p></div><h3 id="customize-head-tags" tabindex="-1"><a class="header-anchor" href="#customize-head-tags" aria-hidden="true">#</a> Customize head Tags</h3><p>Sometimes you may need to fit other protocols or provide the corresponding SEO tags in the format provided by other search engines. In this case, you can use the <code>plugins.seo.customHead</code> in theme options, whose type is:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">customHead</span><span class="token generic class-name"><span class="token operator">&lt;</span>
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
  <span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  <span class="token doc-comment comment">/** Head config */</span>
  head<span class="token operator">:</span> HeadConfig<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** Page Object */</span>
  page<span class="token operator">:</span> Page<span class="token operator">&lt;</span>ExtraPageData<span class="token punctuation">,</span> ExtraPageFrontmatter<span class="token punctuation">,</span> ExtraPageFields<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** VuePress App */</span>
  app<span class="token operator">:</span> App<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You should modify the <code>head</code> array in this function directly.</p><h2 id="rdfa-1-1" tabindex="-1"><a class="header-anchor" href="#rdfa-1-1" aria-hidden="true">#</a> RDFa 1.1</h2>`,14),w={href:"https://www.w3.org/TR/rdfa-primer/",target:"_blank",rel:"noopener noreferrer"},_={class:"hint-container tip"},P=e("p",{class:"hint-container-title"},"Tips",-1),O={href:"https://search.google.com/test/rich-results",target:"_blank",rel:"noopener noreferrer"},E=p('<h2 id="seo-introduction" tabindex="-1"><a class="header-anchor" href="#seo-introduction" aria-hidden="true">#</a> SEO Introduction</h2><p><strong>S</strong>earch <strong>e</strong>ngine <strong>optimization</strong> (SEO) is the process of improving the quality and quantity of site traffic to a site or a web page from search engines. SEO targets unpaid traffic (known as &quot;natural&quot; or &quot;organic&quot; results) rather than direct traffic or paid traffic. Unpaid traffic may originate from different kinds of searches, including image search, video search, academic search, news search, and industry-specific vertical search engines.</p><p>As an internet marketing strategy, SEO considers how search engines work, the computer-programmed algorithms that dictate search engine behavior, what people search for, the actual search terms or keywords typed into search engines, and which search engines are preferred by their targeted audience. SEO is performed because a site will receive more visitors from a search engine when sites rank higher on the search engine results page (SERP). These visitors can then potentially be converted into customers.</p><h2 id="related-documents" tabindex="-1"><a class="header-anchor" href="#related-documents" aria-hidden="true">#</a> Related Documents</h2>',4),S={href:"https://ogp.me/",target:"_blank",rel:"noopener noreferrer"},R=e("strong",null,"O",-1),T=e("strong",null,"G",-1),q=e("strong",null,"Pr",-1),D=e("p",null,[n("SEO plugin perfectly supports this protocol and will automatically generate "),e("code",null,"<meta>"),n(" tags that conform to the protocol.")],-1),L={href:"https://www.w3.org/TR/json-ld-api/",target:"_blank",rel:"noopener noreferrer"},j=e("p",null,'SEO will generate "NewsArticle" scheme for article pages.',-1),N={href:"https://www.w3.org/TR/rdfa-primer/",target:"_blank",rel:"noopener noreferrer"},F=e("p",null,[e("code",null,"vuepress-theme-hope"),n(" support this")],-1),C={href:"https://schema.org/",target:"_blank",rel:"noopener noreferrer"},G=e("p",null,"Schema definition site for structural markup",-1),A=e("h2",{id:"related-tools",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#related-tools","aria-hidden":"true"},"#"),n(" Related Tools")],-1),I={href:"https://search.google.com/test/rich-results",target:"_blank",rel:"noopener noreferrer"};function J(V,z){const c=s("ProjectLink"),i=s("RouterLink"),a=s("ExternalLinkIcon");return r(),d("div",null,[e("p",null,[h,n(" provides SEO enhancements via built-in "),t(c,{name:"seo2"},{default:o(()=>[k]),_:1}),n(".")]),e("p",null,[n("To make the plugin work better, you may need to check the "),t(i,{to:"/config/frontmatter/info.html"},{default:o(()=>[n("page config")]),_:1}),n(" and configure them properly.")]),m,e("p",null,[n("The plugin will make your site fully support "),e("a",b,[n("Open Content Protocol OGP"),t(a)]),n(" and "),e("a",v,[n("JSON-LD 1.1"),t(a)]),n(" to enhance the SEO of the site.")]),f,u(" more "),y,e("p",null,[n("For detailed parameter structure, see "),t(c,{name:"seo2",path:"/config.html"},{default:o(()=>[n("config")]),_:1}),n(".")]),x,e("p",null,[n("The theme adds rich media structure support to most of the site structure by following "),e("a",w,[n("RDFa 1.1"),t(a)]),n(".")]),e("div",_,[P,e("p",null,[n("You can use "),e("a",O,[n("Google Rich Media Structure Test Tool"),t(a)]),n(" to test this site.")])]),E,e("ul",null,[e("li",null,[e("p",null,[e("a",S,[n("Open Content Protocol OGP"),t(a)]),n(" ("),R,n("pen "),T,n("raph "),q,n("otocal)")]),D]),e("li",null,[e("p",null,[e("a",L,[n("JSON-LD 1.1"),t(a)])]),j]),e("li",null,[e("p",null,[e("a",N,[n("RDFa 1.1"),t(a)])]),F]),e("li",null,[e("p",null,[e("a",C,[n("Schema.Org"),t(a)])]),G])]),A,e("ul",null,[e("li",null,[e("a",I,[n("Google Rich Media Structure Test Tool"),t(a)])])])])}const M=l(g,[["render",J],["__file","seo.html.vue"]]);export{M as default};
