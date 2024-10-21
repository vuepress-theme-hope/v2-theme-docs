import{aj as t,ak as a,ao as s,an as i,am as n,al as o}from"./app-BLmUDr3s.js";const r="/assets/category-light-DwHhcItz.png",l="/assets/category-dark-BsDJHkPI.png",p="/assets/tag-light-BxLH6gxB.png",g="/assets/tag-dark-DKBC0X4O.png",c="/assets/info-DO3buIUA.png",h="/assets/sidebar-BXFWmuDL.png",d={};function m(k,e){return o(),a("div",null,[e[0]||(e[0]=s("p",null,"You can configure category and tags for articles through frontmatter to make them appear in specific categories and tags pages.",-1)),i(" more "),e[1]||(e[1]=n(`<h2 id="category-settings" tabindex="-1"><a class="header-anchor" href="#category-settings"><span>Category Settings</span></a></h2><p>Just add category array to <code>category</code> in page frontmatter, the article will be automatically rendered in the list of the<code>/category/&lt;category name&gt;/</code> category page.</p><p>For example, add this to a certain page:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">category</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">HTML</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Web</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Page content...</span></span></code></pre></div><p>Then you can find it under the <code>/category/html</code> page.</p><p><img src="`+r+'" alt="Category" data-mode="lightmode-only" loading="lazy"><br><img src="'+l+`" alt="Category" data-mode="darkmode-only" loading="lazy"></p><h2 id="tags" tabindex="-1"><a class="header-anchor" href="#tags"><span>Tags</span></a></h2><p>Just set <code>tag</code> option in page frontmatter , and set value to one or more tags, then the article will be automatically rendered in the list of the <code>/tag/&lt;tag name&gt;/</code> tag page.</p><p>For example, after adding this in frontmatter:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">tag</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">HTML</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Web</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Page content...</span></span></code></pre></div><p>Then you can find it under the <code>/tag/html</code> and <code>/tag/web</code> pages.</p><p><img src="`+p+'" alt="Tag" data-mode="lightmode-only" loading="lazy"><br><img src="'+g+'" alt="Tag" data-mode="darkmode-only" loading="lazy"></p><h2 id="view-list" tabindex="-1"><a class="header-anchor" href="#view-list"><span>View list</span></a></h2><p>Besides directly accessing the corresponding link, the category and tag name will be displayed at the article information at the top of the article. You can click on it to navigate to the corresponding list to view the articles of the same category or tag.</p><figure><img src="'+c+'" alt="Article Information" tabindex="0" loading="lazy"><figcaption>Article Information</figcaption></figure><p>You can also select the category or tag tab in the sidebar of the blog homepage and select the corresponding item to enter the list.</p><figure><img src="'+h+'" alt="Sidebar Tab" tabindex="0" loading="lazy"><figcaption>Sidebar Tab</figcaption></figure>',17))])}const u=t(d,[["render",m],["__file","category-and-tags.html.vue"]]),f=JSON.parse('{"path":"/guide/blog/category-and-tags.html","title":"Category and tags","lang":"en-US","frontmatter":{"title":"Category and tags","icon":"tag","order":4,"category":["Blog"],"tag":["Blog","Category","Tag"],"description":"You can configure category and tags for articles through frontmatter to make them appear in specific categories and tags pages.","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://theme-hope.vuejs.press/zh/guide/blog/category-and-tags.html"}],["meta",{"property":"og:url","content":"https://theme-hope.vuejs.press/guide/blog/category-and-tags.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Category and tags"}],["meta",{"property":"og:description","content":"You can configure category and tags for articles through frontmatter to make them appear in specific categories and tags pages."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-05-25T10:15:34.000Z"}],["meta",{"property":"article:tag","content":"Blog"}],["meta",{"property":"article:tag","content":"Category"}],["meta",{"property":"article:tag","content":"Tag"}],["meta",{"property":"article:modified_time","content":"2022-05-25T10:15:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Category and tags\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-05-25T10:15:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://theme-hope.vuejs.press/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://theme-hope.vuejs.press/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://theme-hope.vuejs.press/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"Category Settings","slug":"category-settings","link":"#category-settings","children":[]},{"level":2,"title":"Tags","slug":"tags","link":"#tags","children":[]},{"level":2,"title":"View list","slug":"view-list","link":"#view-list","children":[]}],"git":{"createdTime":1644936187000,"updatedTime":1653473734000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":5}]},"readingTime":{"minutes":0.79,"words":238},"filePathRelative":"guide/blog/category-and-tags.md","localizedDate":"February 15, 2022","excerpt":"<p>You can configure category and tags for articles through frontmatter to make them appear in specific categories and tags pages.</p>\\n","autoDesc":true}');export{u as comp,f as data};
