import{_ as n,r as l,o as r,c,b as a,d as e,e as t,w as i,f as o}from"./app-1ee6e138.js";const s={},h=o('<p>你可以在页面的 frontmatter 配置以下选项控制页面布局。</p><h2 id="pageinfo" tabindex="-1"><a class="header-anchor" href="#pageinfo" aria-hidden="true">#</a> pageInfo</h2><ul><li>类型: <code>PageInfo[] | false</code></li><li>默认值: 主题选项中的值</li></ul><p><code>PageInfo</code> 可选的值和对应内容如下:</p><table><thead><tr><th>条目</th><th>对应内容</th><th>页面 frontmatter 值</th></tr></thead><tbody><tr><td><code>&quot;Author&quot;</code></td><td>作者</td><td><code>author</code></td></tr><tr><td><code>&quot;Date&quot;</code></td><td>写作日期</td><td><code>date</code></td></tr><tr><td><code>&quot;Original&quot;</code></td><td>是否原创</td><td><code>isOriginal</code></td></tr><tr><td><code>&quot;Category&quot;</code></td><td>分类</td><td><code>category</code></td></tr><tr><td><code>&quot;Tag&quot;</code></td><td>标签</td><td><code>tag</code></td></tr><tr><td><code>&quot;ReadingTime&quot;</code></td><td>预计阅读时间</td><td>N/A(自动生成)</td></tr><tr><td><code>&quot;Word&quot;</code></td><td>字数</td><td>N/A(自动生成)</td></tr><tr><td><code>&quot;PageView&quot;</code></td><td>访问量</td><td><code>pageview</code> (仅 Waline 可用)</td></tr></tbody></table><p>文章信息展示项目。</p><h2 id="pageview" tabindex="-1"><a class="header-anchor" href="#pageview" aria-hidden="true">#</a> pageview</h2><ul><li>类型: <code>boolean</code></li><li>默认值: 主题选项中的值</li></ul><p>是否显示浏览量。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>显示浏览量功能需要你拥有有效的 Waline 评论服务配置。</p></div><h2 id="breadcrumb" tabindex="-1"><a class="header-anchor" href="#breadcrumb" aria-hidden="true">#</a> breadcrumb</h2><ul><li>类型: <code>boolean</code></li><li>默认值: 主题选项中的值</li></ul><p>是否开启路径导航。</p><h2 id="breadcrumbicon" tabindex="-1"><a class="header-anchor" href="#breadcrumbicon" aria-hidden="true">#</a> breadcrumbIcon</h2><ul><li>类型: <code>boolean</code></li><li>默认值: 主题选项中的值</li></ul><p>是否开启路径导航图标。</p><h2 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h2><ul><li>类型: <code>boolean</code></li></ul><p>导航栏配置，填入 <code>false</code> 会禁用导航栏</p><h2 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> sidebar</h2><ul><li>类型: <code>&quot;heading&quot; | false</code></li></ul><p>侧边栏配置选项。支持 <code>&quot;heading&quot;</code> 或 <code>false</code>。</p><h2 id="headerdepth" tabindex="-1"><a class="header-anchor" href="#headerdepth" aria-hidden="true">#</a> headerDepth</h2><ul><li>类型: <code>number</code></li><li>默认值: <code>2</code></li></ul><p>标题渲染深度。</p><h2 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> index</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在侧边栏中索引当前页面。</p><h2 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> order</h2><ul><li>类型: <code>number</code></li></ul><p>指定当前页面在侧边栏中的排序</p><ul><li>当填写正数的时候，页面将排在靠前的位置，数字越小出现的位置越前。</li><li>当填写负数的时候，页面将排在靠后的位置，数字越大出现的位置越前（比如 -1 在 -2 之后）。</li></ul><h2 id="dir" tabindex="-1"><a class="header-anchor" href="#dir" aria-hidden="true">#</a> dir</h2>',33),u=o(`<h3 id="dir-text" tabindex="-1"><a class="header-anchor" href="#dir-text" aria-hidden="true">#</a> dir.text</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>README.md</code> 的标题</li></ul><p>分组标题。</p><h3 id="dir-icon" tabindex="-1"><a class="header-anchor" href="#dir-icon" aria-hidden="true">#</a> dir.icon</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>README.md</code> 的图标</li></ul><p>分组图标。</p><h3 id="dir-collapsible" tabindex="-1"><a class="header-anchor" href="#dir-collapsible" aria-hidden="true">#</a> dir.collapsible</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>分组是否可折叠。</p><h3 id="dir-link" tabindex="-1"><a class="header-anchor" href="#dir-link" aria-hidden="true">#</a> dir.link</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>分组是否可点击</p><div class="hint-container note"><p class="hint-container-title">注</p><p>设置为 <code>true</code> 意味着将分组链接设置为 <code>README.md</code> 链接。</p></div><h3 id="dir-index" tabindex="-1"><a class="header-anchor" href="#dir-index" aria-hidden="true">#</a> dir.index</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否索引当前目录</p><h3 id="dir-order" tabindex="-1"><a class="header-anchor" href="#dir-order" aria-hidden="true">#</a> dir.order</h3><ul><li>类型: <code>number</code></li></ul><p>分组在侧边栏的顺序</p><ul><li>填写正数，页面会出现在最前，较小的数字会出现在前面。</li><li>填写负数，页面会出现在最后，较大的数字会出现在前面。 (如 -1 在 -2 之后)</li></ul><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> comment</h2><ul><li>类型: <code>boolean</code></li><li>默认值: 主题选项中的值</li></ul><p>当前页面是否开启评论功能。</p><h2 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated" aria-hidden="true">#</a> lastUpdated</h2><ul><li>类型: <code>boolean</code></li><li>默认值: 主题选项中的值</li></ul><p>是否显示最后更新时间。</p><h2 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink" aria-hidden="true">#</a> editLink</h2><ul><li>类型: <code>boolean</code></li><li>默认值: 主题选项中的值</li></ul><p>是否显示编辑链接。</p><h2 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> contributors</h2><ul><li>类型: <code>boolean</code></li><li>默认值: 主题选项中的值</li></ul><p>是否显示贡献者。</p><h2 id="prev" tabindex="-1"><a class="header-anchor" href="#prev" aria-hidden="true">#</a> prev</h2><ul><li><p>类型: <code>AutoLinkOptions | string | false</code></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AutoLinkOptions</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  icon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><p>上一篇文章链接。</p><h2 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> next</h2><ul><li><p>类型: <code>AutoLinkOptions | string | false</code></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AutoLinkOptions</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  icon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><p>下一篇文章链接。</p><h2 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h2><ul><li>类型: <code>boolean | string | HTMLString</code></li></ul><p>设置页脚内容。</p><ul><li>设置为 <code>false</code> 以禁用页脚</li><li>设置为 <code>&quot;&quot;</code> 以移除默认的页脚内容，</li><li>设置为 <code>true</code> 以使用默认页脚。</li></ul>`,42),p=a("h2",{id:"copyright",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#copyright","aria-hidden":"true"},"#"),e(" copyright")],-1),b=a("ul",null,[a("li",null,[e("类型: "),a("code",null,"string | false")]),a("li",null,"默认值: 主题选项中的值")],-1),f=o('<h2 id="backtotop" tabindex="-1"><a class="header-anchor" href="#backtotop" aria-hidden="true">#</a> backToTop</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>设置是否显示返回顶部按钮</p><h2 id="toc-heading" tabindex="-1"><a class="header-anchor" href="#toc-heading" aria-hidden="true">#</a> toc</h2><ul><li>类型: <code>boolean</code></li><li>默认值: 主题选项中的值</li></ul><p>设置在桌面模式下是否在右侧显示标题列表。</p><h2 id="containerclass" tabindex="-1"><a class="header-anchor" href="#containerclass" aria-hidden="true">#</a> containerClass</h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>额外的页面容器 Class。</p><h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;Layout&quot;</code></li></ul><p>页面的自定义布局名称。</p>',12);function g(x,k){const d=l("RouterLink");return r(),c("div",null,[h,a("p",null,[e("用于 "),t(d,{to:"/zh/guide/layout/sidebar.html"},{default:i(()=>[e("结构侧边栏")]),_:1}),e(" 的分组信息。")]),u,a("p",null,[e("更多详情请看 "),t(d,{to:"/zh/guide/layout/footer.html"},{default:i(()=>[e("页面 → 页脚支持")]),_:1})]),p,b,a("p",null,[e("设置版权信息，更多详情请看 "),t(d,{to:"/zh/guide/layout/footer.html"},{default:i(()=>[e("页面 → 页脚支持")]),_:1})]),f])}const _=n(s,[["render",g],["__file","layout.html.vue"]]);export{_ as default};
