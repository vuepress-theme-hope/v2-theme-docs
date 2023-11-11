import{_ as a,o as t,c as e,a as n,b as o,f as s}from"./app-fe94cd90.js";const c="/assets/category-light-6c718e62.png",r="/assets/category-dark-246c8f0b.png",i="/assets/tag-light-47a1c660.png",d="/assets/tag-dark-5ed3b77e.png",l="/assets/info-ad92e395.png",g="/assets/sidebar-73d1cb4f.png",p={},m=o("p",null,"You can configure category and tags for articles through frontmatter to make them appear in specific categories and tags pages.",-1),h=s(`<h2 id="category-settings" tabindex="-1"><a class="header-anchor" href="#category-settings" aria-hidden="true">#</a> Category Settings</h2><p>Just add category array to <code>category</code> in page frontmatter, the article will be automatically rendered in the list of the<code>/category/&lt;category name&gt;/</code> category page.</p><p>For example, add this to a certain page:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">category</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> HTML
  <span class="token punctuation">-</span> Web</span>
<span class="token punctuation">---</span></span>

Page content...
</code></pre></div><p>Then you can find it under the <code>/category/html</code> page.</p><p><img src="`+c+'" alt="Category" data-mode="lightmode-only" loading="lazy"><br><img src="'+r+`" alt="Category" data-mode="darkmode-only" loading="lazy"></p><h2 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> Tags</h2><p>Just set <code>tag</code> option in page frontmatter , and set value to one or more tags, then the article will be automatically rendered in the list of the <code>/tag/&lt;tag name&gt;/</code> tag page.</p><p>For example, after adding this in frontmatter:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">tag</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> HTML
  <span class="token punctuation">-</span> Web</span>
<span class="token punctuation">---</span></span>

Page content...
</code></pre></div><p>Then you can find it under the <code>/tag/html</code> and <code>/tag/web</code> pages.</p><p><img src="`+i+'" alt="Tag" data-mode="lightmode-only" loading="lazy"><br><img src="'+d+'" alt="Tag" data-mode="darkmode-only" loading="lazy"></p><h2 id="view-list" tabindex="-1"><a class="header-anchor" href="#view-list" aria-hidden="true">#</a> View list</h2><p>Besides directly accessing the corresponding link, the category and tag name will be displayed at the article information at the top of the article. You can click on it to navigate to the corresponding list to view the articles of the same category or tag.</p><figure><img src="'+l+'" alt="Article Information" tabindex="0" loading="lazy"><figcaption>Article Information</figcaption></figure><p>You can also select the category or tag tab in the sidebar of the blog homepage and select the corresponding item to enter the list.</p><figure><img src="'+g+'" alt="Sidebar Tab" tabindex="0" loading="lazy"><figcaption>Sidebar Tab</figcaption></figure>',17);function u(f,y){return t(),e("div",null,[m,n(" more "),h])}const _=a(p,[["render",u],["__file","category-and-tags.html.vue"]]);export{_ as default};
