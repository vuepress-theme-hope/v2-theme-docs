import{_ as r,r as d,o as c,c as l,b as p,e,f as t,a,w as i,g as n}from"./app-d7067868.js";const u={},h=e("p",null,[e("code",null,"vuepress-theme-hope"),t(" can display article information for you.")],-1),m=n('<h2 id="enable" tabindex="-1"><a class="header-anchor" href="#enable" aria-hidden="true">#</a> Enable</h2><p>Page information display is enabled globally by default, while supports page config. You can disable it by setting <code>pageInfo: false</code> in frontmatter of a specific page.</p><p>To keep it globally disabled, please set <code>pageInfo</code> to <code>false</code> in the plugin options. Then you can set <code>pageInfo</code> in frontmatter of a specific page to enable it locally.</p>',3),g={id:"parameters",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#",-1),v=n("<p><code>pageInfo</code> accepts an array of strings by default, filling in a group of items. The order of filling is the order in which the items are displayed.</p><p>The optional values and corresponding contents of the entry are as follows:</p><table><thead><tr><th>Entry</th><th>Corresponding content</th><th>page frontmatter value</th><th>Theme Options</th></tr></thead><tbody><tr><td><code>&quot;Author&quot;</code></td><td>author</td><td><code>author</code></td><td><code>author</code></td></tr><tr><td><code>&quot;Date&quot;</code></td><td>Writing Date</td><td><code>time</code></td><td>N/A</td></tr><tr><td><code>&quot;Original&quot;</code></td><td>Whether is original</td><td><code>isOriginal</code></td><td>N/A</td></tr><tr><td><code>&quot;Category&quot;</code></td><td>Category</td><td><code>category</code></td><td>N/A</td></tr><tr><td><code>&quot;Tag&quot;</code></td><td>Tag</td><td><code>tag</code></td><td>N/A</td></tr><tr><td><code>&quot;ReadingTime&quot;</code></td><td>Estimated reading time</td><td>N/A (automatically generated)</td><td>N/A</td></tr><tr><td><code>&quot;Word&quot;</code></td><td>Word count</td><td>N/A (automatically generated)</td><td>N/A</td></tr><tr><td><code>&quot;PageView&quot;</code></td><td>Pageviews</td><td><code>pageview</code> (only available in Waline)</td><td><code>plugins.comment.pageview</code></td></tr></tbody></table><p>By default, it will display &quot;Author, Visit Number, Writing Date, Category, Tags, Expect Reading Time&quot;.</p>",4),b={id:"author",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#author","aria-hidden":"true"},"#",-1),y=n(`<p>Example:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">author</span><span class="token punctuation">:</span> Mr.Hope</span>
<span class="token punctuation">---</span></span>
</code></pre></div><p>You can configure <code>author</code> in the plugin options to set the default author. And you can also configure <code>author</code> in frontmatter with a new value in the page to override the default author, or set it to <code>false</code> to cancel the author display.</p><p>Authors support <code>string[]</code>, <code>string</code>, <code>AuthorInfo</code> and <code>AuthorInfo[]</code>.</p><p>The format of AuthorInfo is as follows:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="writing-date" tabindex="-1"><a class="header-anchor" href="#writing-date" aria-hidden="true">#</a> Writing Date</h3><p>We recommend filling it with a standard date format. A standard format is in the form of <code>xxxx-xx-xx</code>, such as &quot;April 1, 2020&quot; should be written as <code>2020-04-01</code>.</p><p>Example:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2020-01-01</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div><div class="hint-container note"><p class="hint-container-title">Note</p><p>When running in a Git-based project, the writing date will fall back to first commit date of current file.</p></div><h3 id="category-and-tags" tabindex="-1"><a class="header-anchor" href="#category-and-tags" aria-hidden="true">#</a> Category and Tags</h3>`,12),_=e("h3",{id:"reading-time",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reading-time","aria-hidden":"true"},"#"),t(" Reading Time")],-1),w=e("p",null,[t("The default statistic method is 300 words per minute. You can override it by setting "),e("code",null,"plugins.readingTime.wordPerMinute"),t(" in theme options. This option does not support individual configuration on the page.")],-1),x={id:"view-count",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#view-count","aria-hidden":"true"},"#",-1),q=n(`<p>Example:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">pageview</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div>`,2);function T(N,W){const o=d("Badge"),s=d("RouterLink");return c(),l("div",null,[h,p(" more "),m,e("h2",g,[f,t(" Parameters "),a(o,{text:"Support page config"})]),v,e("h3",b,[k,t(" author "),a(o,{text:"Support page config"})]),y,e("p",null,[t("See "),a(s,{to:"/guide/blog/category-and-tags.html"},{default:i(()=>[t("blog section")]),_:1}),t(" for details")]),_,w,e("h3",x,[A,t(" View Count "),a(o,{text:"Support page config"})]),e("p",null,[t("When using Waline as "),a(s,{to:"/guide/feature/comment.html"},{default:i(()=>[t("Comment Service")]),_:1}),t(", this function is enabled by default.")]),q])}const I=r(u,[["render",T],["__file","page-info.html.vue"]]);export{I as default};
