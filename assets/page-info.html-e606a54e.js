import{_ as r,r as d,o as i,c as l,a as p,b as t,d as e,e as n,w as c,f as s}from"./app-0ba868ac.js";const u={},h=t("p",null,[t("code",null,"vuepress-theme-hope"),e(" 实现了文章信息展示。")],-1),m=t("h2",{id:"启用",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#启用","aria-hidden":"true"},"#"),e(" 启用")],-1),k=t("p",null,[e("页面信息默认全局启用，同时支持页面配置。你可以在特定页面的 front matter 中设置 "),t("code",null,"pageInfo: false"),e(" 来局部禁用它。")],-1),g=t("p",null,[e("如果你需要保持全局禁用，请在主题选项中设置 "),t("code",null,"pageInfo: false"),e("。这样你可以在特定页面的 front matter 中设置 "),t("code",null,"pageInfo"),e(" 来局部启用它。")],-1),v={id:"参数",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#参数","aria-hidden":"true"},"#",-1),f=s("<p><code>pageInfo</code> 默认接受一个字符串数组，可以填入各条目名称，填入的顺序即是各条目显示的顺序。</p><p>条目可选的值和对应内容如下:</p><table><thead><tr><th>条目</th><th>对应内容</th><th>页面 frontmatter 值</th><th>主题设置的配置项</th></tr></thead><tbody><tr><td><code>&quot;Author&quot;</code></td><td>作者</td><td><code>author</code></td><td><code>author</code></td></tr><tr><td><code>&quot;Date&quot;</code></td><td>写作日期</td><td><code>date</code></td><td>N/A</td></tr><tr><td><code>&quot;Original&quot;</code></td><td>是否原创</td><td><code>isOriginal</code></td><td>N/A</td></tr><tr><td><code>&quot;Category&quot;</code></td><td>分类</td><td><code>category</code></td><td>N/A</td></tr><tr><td><code>&quot;Tag&quot;</code></td><td>标签</td><td><code>tag</code></td><td>N/A</td></tr><tr><td><code>&quot;ReadingTime&quot;</code></td><td>预计阅读时间</td><td>N/A(自动生成)</td><td>N/A</td></tr><tr><td><code>&quot;Word&quot;</code></td><td>字数</td><td>N/A(自动生成)</td><td>N/A</td></tr><tr><td><code>&quot;PageView&quot;</code></td><td>访问量</td><td><code>pageview</code> (仅 Waline 可用)</td><td><code>plugins.comment.pageview</code></td></tr></tbody></table><p>默认会显示 “作者，访问量，写作日期，分类，标签，预计阅读时间”。</p>",4),b={id:"作者",tabindex:"-1"},x=t("a",{class:"header-anchor",href:"#作者","aria-hidden":"true"},"#",-1),y=s(`<p>例子:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">author</span><span class="token punctuation">:</span> Mr.Hope</span>
<span class="token punctuation">---</span></span>
</code></pre></div><p>作者姓名也可以在主题选项中通过 <code>author</code> 全局配置，这样每篇文章都会显示默认作者。这时，你仍可以在页面中配置 front matter 中的 <code>author</code> 为一个新值来覆盖默认作者，或者设置 <code>author</code> 为 <code>false</code> 取消作者显示。</p><p>作者支持 <code>string[]</code>、<code>string</code>、<code>AuthorInfo</code> 和 <code>AuthorInfo[]</code>。</p><p>其中 AuthorInfo 格式如下:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 作者姓名
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者网站
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者 Email
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="写作日期" tabindex="-1"><a class="header-anchor" href="#写作日期" aria-hidden="true">#</a> 写作日期</h3><p>建议 time 以标准格式输入日期，即 <code>xxxx-xx-xx</code> 的形式，如 “2020 年 4 月 1 日” 应当输入为 <code>2020-04-01</code></p><p>例子:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2020-01-01</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div><div class="hint-container note"><p class="hint-container-title">注</p><p>在基于 Git 的项目中运行时，写作日期将回退到当前文件的首次提交日期。</p></div><h3 id="分类与标签" tabindex="-1"><a class="header-anchor" href="#分类与标签" aria-hidden="true">#</a> 分类与标签</h3>`,12),q=t("h3",{id:"阅读时间",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#阅读时间","aria-hidden":"true"},"#"),e(" 阅读时间")],-1),w=t("p",null,[e("默认的统计方式是一分钟 300 字，你可以设置在主题选项中设置 "),t("code",null,"plugins.readingTime.wordPerMinute"),e(" 来覆盖它，该选项不支持在页面单独配置。")],-1),A={id:"浏览量",tabindex:"-1"},N=t("a",{class:"header-anchor",href:"#浏览量","aria-hidden":"true"},"#",-1),I=s(`<p>例子:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">pageview</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div>`,2);function V(B,C){const a=d("Badge"),o=d("RouterLink");return i(),l("div",null,[h,p(" more "),m,k,g,t("h2",v,[_,e(" 参数 "),n(a,{text:"支持页面配置"})]),f,t("h3",b,[x,e(" 作者 "),n(a,{text:"支持页面配置"})]),y,t("p",null,[e("详见 "),n(o,{to:"/zh/guide/blog/category-and-tags.html"},{default:c(()=>[e("博客章节")]),_:1})]),q,w,t("h3",A,[N,e(" 浏览量 "),n(a,{text:"支持页面配置"})]),t("p",null,[e("当配置 Waline 作为 "),n(o,{to:"/zh/guide/feature/comment.html"},{default:c(()=>[e("评论功能")]),_:1}),e(" 的提供者时，该功能默认启用。")]),I])}const R=r(u,[["render",V],["__file","page-info.html.vue"]]);export{R as default};
