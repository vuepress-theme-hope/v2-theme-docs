import{_ as i,r as l,o as d,c,e,b as a,a as t,w as o,g as s}from"./app-a38c4918.js";const r={},p=s('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><code>vuepress-theme-hope</code> 通过 <code>vuepress-plugin-feed2</code> 插件提供 Feed 生成支持。它将主题选项中的 <code>plugins.feed</code> 作为插件选项传递给 <code>vuepress-plugin-feed2</code> 插件。</p><p><code>vuepress-plugin-feed2</code> 插件可为你生成以下三种格式的 feed 文件:</p><ul><li>Atom 1.0</li><li>JSON 1.1</li><li>RSS 2.0</li></ul><p>请按照需要生成的格式，在 <code>plugins.feed</code> 中设置 <code>atom</code>, <code>json</code> 或 <code>rss</code> 为 <code>true</code> 来启用插件。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Atom 和 JSON 是为了提供更多 Feed 软件的适配而提供的。</p><p>如果可以，请尽可能使用 RSS。</p></div>',6),h={class:"hint-container info"},u=e("p",{class:"hint-container-title"},"相关信息",-1),f=s(`<h2 id="插件选项" tabindex="-1"><a class="header-anchor" href="#插件选项" aria-hidden="true">#</a> 插件选项</h2><h3 id="atom" tabindex="-1"><a class="header-anchor" href="#atom" aria-hidden="true">#</a> atom</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用 Atom 格式输出。</p><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用 JSON 格式输出。</p><h3 id="rss" tabindex="-1"><a class="header-anchor" href="#rss" aria-hidden="true">#</a> rss</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用 RSS 格式输出。</p><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3><ul><li>类型: <code>string</code></li></ul><p>一个大的图片，用作 feed 展示。</p><h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h3><ul><li>类型: <code>string</code></li></ul><p>一个小的图标，显示在订阅列表中。</p><h3 id="count" tabindex="-1"><a class="header-anchor" href="#count" aria-hidden="true">#</a> count</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>1000</code></li></ul><p>设置 feed 的最大项目数量。在所有页面排序好后，插件会截取前 count 个项目。</p><p>如果你的站点文章很多，你应该考虑设置这个选项以减少 feed 文件大小。</p><h3 id="preservedelements" tabindex="-1"><a class="header-anchor" href="#preservedelements" aria-hidden="true">#</a> preservedElements</h3><ul><li>类型: <code>(RegExp | string)[] | (tagName: string) =&gt; boolean</code></li><li>默认值: <code>[]</code></li></ul><p>应在 Feed 中保留的自定义元素或组件。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>默认情况下，所有的未知标签都会被移除。</p></div><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h3><ul><li><p>类型: <code>(page: Page)=&gt; boolean</code></p></li><li><p>默认值:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token punctuation">{</span> frontmatter<span class="token punctuation">,</span> filePathRelative <span class="token punctuation">}</span><span class="token operator">:</span> Page<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span>
  <span class="token operator">!</span><span class="token punctuation">(</span>
    frontmatter<span class="token punctuation">.</span>home <span class="token operator">||</span>
    <span class="token operator">!</span>filePathRelative <span class="token operator">||</span>
    frontmatter<span class="token punctuation">.</span>article <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token operator">||</span>
    frontmatter<span class="token punctuation">.</span>feed <span class="token operator">===</span> <span class="token boolean">false</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><p>自定义的过滤函数，用于过滤哪些项目在 feed 中显示。</p><h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h3><ul><li>类型: <code>(pageA: Page, pageB: Page)=&gt; number</code></li></ul><p>自定义排序函数，用于对站点中的页面进行排序。</p><p>最终生成的 feed 文件将会按照这个顺序对项目进行显示。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>强烈建议设置这个选项，否则 feed 流中，项目的顺序完全由 VuePress 默认输出的 pages 顺序决定。</p><p>你可以按照自己的需求对站点内的页面进行排序。</p></div><h3 id="channel" tabindex="-1"><a class="header-anchor" href="#channel" aria-hidden="true">#</a> channel</h3><p><code>channel</code> 选项用于配置 Feed 频道。</p>`,34),m=s('<h3 id="atomoutputfilename" tabindex="-1"><a class="header-anchor" href="#atomoutputfilename" aria-hidden="true">#</a> atomOutputFilename</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>atom.xml</code></li></ul><p>Atom 格式输出路径，相对于输出路径。</p><h3 id="jsonoutputfilename" tabindex="-1"><a class="header-anchor" href="#jsonoutputfilename" aria-hidden="true">#</a> jsonOutputFilename</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>feed.json</code></li></ul><p>JSON 格式输出路径，相对于输出路径。</p><h3 id="rssoutputfilename" tabindex="-1"><a class="header-anchor" href="#rssoutputfilename" aria-hidden="true">#</a> rssOutputFilename</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>rss.xml</code></li></ul><p>RSS 格式输出路径，相对于输出路径。</p><h3 id="getter" tabindex="-1"><a class="header-anchor" href="#getter" aria-hidden="true">#</a> getter</h3><p>Feed 生成控制器</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>插件已经在默认情况下提供了合理的获取器，如果你需要完全控制 Feed 生成，你可以设置此项。</p></div>',12),g=e("h3",{id:"locales",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#locales","aria-hidden":"true"},"#"),a(" locales")],-1),_=e("ul",null,[e("li",null,[a("类型: "),e("code",null,"Record<string, BaseFeedOptions>")]),e("li",null,"必填: 否")],-1),b=e("p",null,"你可以将它用于每个语言环境的特定选项。",-1),k=e("p",null,[a("除 "),e("code",null,"hostname"),a(" 外，上述任何选项均受支持。")],-1);function x(v,S){const n=l("ProjectLink");return d(),c("div",null,[p,e("div",h,[u,e("p",null,[a("有关更多详细信息，请参见 "),t(n,{name:"feed2",path:"/zh/config/"},{default:o(()=>[a("feed2 插件文档")]),_:1}),a("。")])]),f,e("p",null,[a("可用选项详见 "),t(n,{name:"feed2",path:"/config/channel.html"},{default:o(()=>[a("配置 → 频道设置")]),_:1}),a("。")]),m,e("p",null,[a("详见 "),t(n,{name:"feed2",path:"/zh/config/getter.html"},{default:o(()=>[a("Feed 生成器")]),_:1}),a(".")]),g,_,b,k])}const j=i(r,[["render",x],["__file","feed.html.vue"]]);export{j as default};
