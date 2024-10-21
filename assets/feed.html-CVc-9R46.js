import{aj as i,ak as s,am as t,al as a}from"./app-BLmUDr3s.js";const l={};function n(p,e){return a(),s("div",null,e[0]||(e[0]=[t(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>主题可通过 <code>@vuepress/plugin-feed</code> 生成 Feed，你需要<strong>手动安装插件</strong>。</p><p>你可以在主题选项中设置 <code>plugins.feed: true</code> 来启用此功能。默认行为是生成 RSS 格式的 Feed。</p><h2 id="插件选项" tabindex="-1"><a class="header-anchor" href="#插件选项"><span>插件选项</span></a></h2><p>主题将主题选项中的 <code>plugins.feed</code> 作为插件选项传递给 <code>@vuepress/plugin-feed</code>。</p><p>你可以通过 <code>plugins.feed</code> 自行设置选项，以下是常见选项:</p><h3 id="atom" tabindex="-1"><a class="header-anchor" href="#atom"><span>atom</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用 Atom 格式输出。</p><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json"><span>json</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用 JSON 格式输出。</p><h3 id="rss" tabindex="-1"><a class="header-anchor" href="#rss"><span>rss</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用 RSS 格式输出。</p><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image"><span>image</span></a></h3><ul><li>类型: <code>string</code></li></ul><p>一个大的图片，用作 feed 展示。</p><h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon"><span>icon</span></a></h3><ul><li>类型: <code>string</code></li></ul><p>一个小的图标，显示在订阅列表中。</p><h3 id="count" tabindex="-1"><a class="header-anchor" href="#count"><span>count</span></a></h3><ul><li>类型: <code>number</code></li><li>默认值: <code>100</code></li></ul><p>设置 feed 的最大项目数量。在所有页面排序好后，插件会截取前 count 个项目。</p><p>如果你的站点文章很多，你应该考虑设置这个选项以减少 feed 文件大小。</p><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>filter</span></a></h3><ul><li><p>类型: <code>(page: Page)=&gt; boolean</code></p></li><li><p>默认值:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">frontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">filePathRelative</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> }) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  Boolean</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    frontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">feed</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ??</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">      frontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">article</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ??</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">filePathRelative</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> !</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">frontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">home</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  );</span></span></code></pre></div></li></ul><p>自定义的过滤函数，用于过滤哪些项目在 feed 中显示。</p><h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort"><span>sort</span></a></h3><ul><li>类型: <code>(pageA: Page, pageB: Page)=&gt; number</code></li></ul><p>Feed 项目的排序器。</p><p>默认的排序行为是通过 Git 的文件添加日期 (需要 <code>@vuepress/plugin-git</code>)。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>查看 <a href="https://ecosystem.vuejs.press/zh/plugins/blog/feed/" target="_blank" rel="noopener noreferrer">feed 插件文档</a> 以获取全部可用选项。</p></div>`,33)]))}const h=i(l,[["render",n],["__file","feed.html.vue"]]),o=JSON.parse('{"path":"/zh/config/plugins/feed.html","title":"Feed 插件配置","lang":"zh-CN","frontmatter":{"title":"Feed 插件配置","icon":"rss","order":8,"category":["配置"],"tag":["插件配置","主题配置","Feed"],"description":"介绍 主题可通过 @vuepress/plugin-feed 生成 Feed，你需要手动安装插件。 你可以在主题选项中设置 plugins.feed: true 来启用此功能。默认行为是生成 RSS 格式的 Feed。 插件选项 主题将主题选项中的 plugins.feed 作为插件选项传递给 @vuepress/plugin-feed。 你可以通过 ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-hope.vuejs.press/config/plugins/feed.html"}],["meta",{"property":"og:url","content":"https://theme-hope.vuejs.press/zh/config/plugins/feed.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Feed 插件配置"}],["meta",{"property":"og:description","content":"介绍 主题可通过 @vuepress/plugin-feed 生成 Feed，你需要手动安装插件。 你可以在主题选项中设置 plugins.feed: true 来启用此功能。默认行为是生成 RSS 格式的 Feed。 插件选项 主题将主题选项中的 plugins.feed 作为插件选项传递给 @vuepress/plugin-feed。 你可以通过 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-30T13:40:11.000Z"}],["meta",{"property":"article:tag","content":"插件配置"}],["meta",{"property":"article:tag","content":"主题配置"}],["meta",{"property":"article:tag","content":"Feed"}],["meta",{"property":"article:modified_time","content":"2024-05-30T13:40:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Feed 插件配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-30T13:40:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://theme-hope.vuejs.press/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://theme-hope.vuejs.press/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://theme-hope.vuejs.press/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"插件选项","slug":"插件选项","link":"#插件选项","children":[{"level":3,"title":"atom","slug":"atom","link":"#atom","children":[]},{"level":3,"title":"json","slug":"json","link":"#json","children":[]},{"level":3,"title":"rss","slug":"rss","link":"#rss","children":[]},{"level":3,"title":"image","slug":"image","link":"#image","children":[]},{"level":3,"title":"icon","slug":"icon","link":"#icon","children":[]},{"level":3,"title":"count","slug":"count","link":"#count","children":[]},{"level":3,"title":"filter","slug":"filter","link":"#filter","children":[]},{"level":3,"title":"sort","slug":"sort","link":"#sort","children":[]}]}],"git":{"createdTime":1643260967000,"updatedTime":1717076411000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":13}]},"readingTime":{"minutes":1.22,"words":367},"filePathRelative":"zh/config/plugins/feed.md","localizedDate":"2022年1月27日","excerpt":"","autoDesc":true}');export{h as comp,o as data};
