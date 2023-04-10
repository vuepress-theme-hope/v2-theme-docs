import{a3 as r,Z as d,_ as c,a1 as e,a2 as a,$ as t,a0 as n,a5 as s,D as i}from"./framework-32163d8a.js";const p={},u={id:"intro",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#intro","aria-hidden":"true"},"#",-1),f=s('<p><code>vuepress-theme-hope</code> provides feed generation support via the <code>vuepress-plugin-feed2</code> plugin.</p><p><code>vuepress-theme-hope</code> passes <code>plugins.feed</code> in theme options as plugin options to <code>vuepress-plugin-feed2</code> plugin.</p><p>The <code>vuepress-plugin-feed2</code> plugin can generate feed files in the following three formats for you:</p><ul><li>Atom 1.0</li><li>JSON 1.1</li><li>RSS 2.0</li></ul><p>Please enable the plugin by setting <code>atom</code>, <code>json</code> or <code>rss</code> to <code>true</code> in the plugin options according to the format you want to generate.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Atom and JSON are provided to provide more adaptations for Feed software.</p><p>If possible, use RSS as first choice.</p></div>',6),m={class:"hint-container info"},g=e("p",{class:"hint-container-title"},"Info",-1),b=s(`<h2 id="plugin-options" tabindex="-1"><a class="header-anchor" href="#plugin-options" aria-hidden="true">#</a> Plugin Options</h2><h3 id="atom" tabindex="-1"><a class="header-anchor" href="#atom" aria-hidden="true">#</a> atom</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to output Atom syntax files.</p><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether output JSON syntax files.</p><h3 id="rss" tabindex="-1"><a class="header-anchor" href="#rss" aria-hidden="true">#</a> rss</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to output RSS syntax files.</p><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3><ul><li>Type: <code>string</code></li></ul><p>A large image/icon of the feed, probably used as banner.</p><h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h3><ul><li>Type: <code>string</code></li></ul><p>A small icon of the feed, probably used as favicon.</p><h3 id="count" tabindex="-1"><a class="header-anchor" href="#count" aria-hidden="true">#</a> count</h3><ul><li>Type: <code>number</code></li><li>Default: <code>1000</code></li></ul><p>Set the maximum number of items in the feed. After all pages are sorted, the first <code>count</code> items will be intercepted.</p><p>If your site has a lot of articles, you may consider this option to reduce feed file size.</p><h3 id="removedelements" tabindex="-1"><a class="header-anchor" href="#removedelements" aria-hidden="true">#</a> removedElements</h3><ul><li>Type: <code>string[]</code></li><li>Default: <code>[&quot;ExternalLinkIcon&quot;]</code></li></ul><p>Custom element or component which should be removed in feed.</p><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h3><ul><li><p>Type: <code>(page: Page)=&gt; boolean</code></p></li><li><p>Default:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token punctuation">{</span> frontmatter<span class="token punctuation">,</span> filePathRelative <span class="token punctuation">}</span><span class="token operator">:</span> Page<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span>
  <span class="token operator">!</span><span class="token punctuation">(</span>
    frontmatter<span class="token punctuation">.</span>home <span class="token operator">||</span>
    <span class="token operator">!</span>filePathRelative <span class="token operator">||</span>
    frontmatter<span class="token punctuation">.</span>article <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token operator">||</span>
    frontmatter<span class="token punctuation">.</span>feed <span class="token operator">===</span> <span class="token boolean">false</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><p>A custom filter function, used to filter feed items.</p><h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h3><ul><li>Type: <code>(pageA: Page, pageB: Page)=&gt; number</code></li></ul><p>A custom sort function, used to sort feed items.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>We strongly recommend you setting this option, otherwise the order of items in the feed stream is completely determined by the order of pages output by VuePress.</p><p>You can sort the pages in the site according to your needs.</p></div><h3 id="channel" tabindex="-1"><a class="header-anchor" href="#channel" aria-hidden="true">#</a> channel</h3><p><code>channel</code> option is used to config <em>Feed Channels</em>.</p>`,32),y=s('<h3 id="atomoutputfilename" tabindex="-1"><a class="header-anchor" href="#atomoutputfilename" aria-hidden="true">#</a> atomOutputFilename</h3><ul><li>Type: <code>string</code></li><li>Default: <code>atom.xml</code></li></ul><p>Atom syntax output filename, relative to output directory.</p><h3 id="jsonoutputfilename" tabindex="-1"><a class="header-anchor" href="#jsonoutputfilename" aria-hidden="true">#</a> jsonOutputFilename</h3><ul><li>Type: <code>string</code></li><li>Default: <code>feed.json</code></li></ul><p>JSON syntax output filename, relative to output directory.</p><h3 id="rssoutputfilename" tabindex="-1"><a class="header-anchor" href="#rssoutputfilename" aria-hidden="true">#</a> rssOutputFilename</h3><ul><li>Type: <code>string</code></li><li>Default: <code>rss.xml</code></li></ul><p>RSS syntax output filename, relative to output directory.</p><h3 id="getter" tabindex="-1"><a class="header-anchor" href="#getter" aria-hidden="true">#</a> getter</h3><p>Feed generation controller.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The plugin is providing a reasonable getter by default, if you want full control of feed generating, you can set this field.</p></div>',12),_=e("h3",{id:"locales",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#locales","aria-hidden":"true"},"#"),a(" locales")],-1),x=e("ul",null,[e("li",null,[a("Type: "),e("code",null,"Record<string, BaseFeedOptions>")]),e("li",null,"Required: No")],-1),v=e("p",null,"You can use it to specific options for each locale.",-1),k=e("p",null,[a("Any options above are supported except "),e("code",null,"hostname"),a(".")],-1);function T(S,A){const l=i("Badge"),o=i("ProjectLink");return d(),c("div",null,[e("h2",u,[h,a(" Intro "),t(l,{text:"enabled by default"})]),f,e("div",m,[g,e("p",null,[a("See the "),t(o,{name:"feed2",path:"/config/"},{default:n(()=>[a("feed2 plugin documentation")]),_:1}),a(" for more details.")])]),b,e("p",null,[a("For available options, please see "),t(o,{name:"feed2",path:"/config/channel.html"},{default:n(()=>[a("Config → Channel")]),_:1}),a(".")]),y,e("p",null,[a("For details, see "),t(o,{name:"feed2",path:"/config/getter.html"},{default:n(()=>[a("Feed Getter")]),_:1}),a(".")]),_,x,v,k])}const j=r(p,[["render",T],["__file","feed.html.vue"]]);export{j as default};
