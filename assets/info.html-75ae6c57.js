import{_ as t,r as s,o as l,c as o,e,b as a,a as r,w as c,g as n}from"./app-a38c4918.js";const d={},p=n('<p>You can set information for page with the following frontmatter options.</p><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Current page&#39;s title. Markdown&#39;s first h1 by default.</p><h2 id="shorttitle" tabindex="-1"><a class="header-anchor" href="#shorttitle" aria-hidden="true">#</a> shortTitle</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Current page&#39;s short title. Will be used as in navbar, sidebar and breadcrumb.</p><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Current page&#39;s description.</p><h2 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h2>',11),u=e("li",null,[a("Type: "),e("code",null,"string")],-1),h=e("li",null,"Required: No",-1),m=n(`<p>FontClass / Image link of the current page icon (recommended).</p><h2 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h2><ul><li><p>Type: <code>Author | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AuthorName</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Author name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author website
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author email
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Author</span> <span class="token operator">=</span> AuthorName <span class="token operator">|</span> AuthorName<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> AuthorInfo <span class="token operator">|</span> AuthorInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Show the author of the current page. If you don&#39;t fill it, you will fall back to the default author.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>When setting default author in theme options, you can set <code>false</code> to prevent showing the default author.</p></div><h2 id="isoriginal" tabindex="-1"><a class="header-anchor" href="#isoriginal" aria-hidden="true">#</a> isOriginal</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether the current article is original.</p><h2 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> date</h2><ul><li>Type: <code>DateString</code></li><li>Required: No</li><li>Format: <code>YYYY-MM-DD</code> or <code>YYYY-MM-DD hh:mm:ss</code></li></ul><p>Set the writing time of the current page.</p><h2 id="category" tabindex="-1"><a class="header-anchor" href="#category" aria-hidden="true">#</a> category</h2><ul><li>Type: <code>string | string[]</code></li><li>Required: No</li></ul><p>Set the category of the current page.</p><h2 id="tag" tabindex="-1"><a class="header-anchor" href="#tag" aria-hidden="true">#</a> tag</h2><ul><li>Type: <code>string | string []</code></li><li>Required: No</li></ul><p>Set the label of the current page.</p><h2 id="sticky" tabindex="-1"><a class="header-anchor" href="#sticky" aria-hidden="true">#</a> sticky</h2><ul><li>Type: <code>boolean | number</code></li><li>Default: <code>false</code></li></ul><p>Sets whether the current article is pinned in the list. When fill in with number, greater ones come before smaller ones.</p><h2 id="star" tabindex="-1"><a class="header-anchor" href="#star" aria-hidden="true">#</a> star</h2><ul><li>Type: <code>boolean | number</code></li><li>Default: <code>false</code></li></ul><p>Sets whether the current article is pinned in the article list in blog theme. When fill in with number, greater ones come before smaller ones.</p><h2 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> article</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether to add the article to the article list.</p><h2 id="timeline" tabindex="-1"><a class="header-anchor" href="#timeline" aria-hidden="true">#</a> timeline</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether to add the article to the timeline list.</p><h2 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Current page&#39;s image, needs an absolute path.</p>`,32);function b(f,g){const i=s("RouterLink");return l(),o("div",null,[p,e("ul",null,[u,h,e("li",null,[a("Details: "),e("ul",null,[e("li",null,[r(i,{to:"/guide/interface/icon.html"},{default:c(()=>[a("Guide → Icon Support")]),_:1})])])])]),m])}const k=t(d,[["render",b],["__file","info.html.vue"]]);export{k as default};
