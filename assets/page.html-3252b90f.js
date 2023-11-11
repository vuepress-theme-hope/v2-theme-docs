import{_ as d,r,o as l,c as i,b as e,d as a,e as n,w as o,a as p,f as t}from"./app-fe94cd90.js";const h={},u=t(`<h2 id="图标支持" tabindex="-1"><a class="header-anchor" href="#图标支持" aria-hidden="true">#</a> 图标支持</h2><p>你可以在页面的 frontmatter 中配置 <code>icon</code> 字段，填入对应图标的 FontClass 即可绑定图标到页面。</p><p>该图标会在导航栏，侧边栏，路径导航和标题中使用。</p><details class="hint-container details"><summary>例子</summary><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">icon</span><span class="token punctuation">:</span> home</span>
<span class="token punctuation">---</span></span>
</code></pre></div></details>`,4),m={class:"hint-container info"},_=e("p",{class:"hint-container-title"},"相关信息",-1),k=e("h2",{id:"路径导航",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#路径导航","aria-hidden":"true"},"#"),a(" 路径导航")],-1),f=e("h2",{id:"文章信息展示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#文章信息展示","aria-hidden":"true"},"#"),a(" 文章信息展示")],-1),g=t('<h2 id="标题列表" tabindex="-1"><a class="header-anchor" href="#标题列表" aria-hidden="true">#</a> 标题列表</h2><p>在桌面模式下，文章的标题列表会自动显示在屏幕的右侧。(在移动视图下它们会放置在侧边栏里)</p><p>如果你不希望在桌面模式下显示右侧的标题列表，请在主题选项中设置 <code>toc: false</code>。</p><p>你也可以在特定页面的 frontmatter 中通过 <code>toc</code> 来指定它。</p><h3 id="设置标题深度" tabindex="-1"><a class="header-anchor" href="#设置标题深度" aria-hidden="true">#</a> 设置标题深度</h3><p>你可以通过在主题选项和页面 frontmatter 中设置 headerDepth 来自定义标题列表的深度。</p>',6),v={class:"hint-container note"},y=e("p",{class:"hint-container-title"},"注",-1),b={href:"https://vuejs.press/zh/reference/config.html#markdown.headers",target:"_blank",rel:"noopener noreferrer"},x={href:"https://vuejs.press/zh/reference/config.html#markdown.headers",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"[2, 3]",-1),z=e("code",null,"headerDepth",-1),C=e("code",null,"2",-1),L=e("h2",{id:"贡献者与最后更新时间",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#贡献者与最后更新时间","aria-hidden":"true"},"#"),a(" 贡献者与最后更新时间")],-1),V=e("h2",{id:"上-下一篇链接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#上-下一篇链接","aria-hidden":"true"},"#"),a(" 上 / 下一篇链接")],-1),N=t(`<p>上一篇和下一篇文章的链接将会自动地根据当前页面的侧边栏的顺序来获取。你也可以通过主题选项或 frontmatter 来明确地重写或者禁用它:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">prev</span><span class="token punctuation">:</span> ./some<span class="token punctuation">-</span>other<span class="token punctuation">-</span>page
<span class="token key atrule">next</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div><h2 id="评论" tabindex="-1"><a class="header-anchor" href="#评论" aria-hidden="true">#</a> 评论</h2>`,3),q=t(`<h2 id="自定义布局" tabindex="-1"><a class="header-anchor" href="#自定义布局" aria-hidden="true">#</a> 自定义布局</h2><p>默认情况下，每个 <code>*.md</code> 文件将会被渲染在一个 <code>&lt;div class=&quot;page&quot;&gt;</code> 容器中，同时还有侧边栏、自动生成的编辑链接，以及上 / 下一篇文章的链接。如果你想要使用一个完全自定义的组件来代替当前的页面，你可以通过 frontmatter 来指定布局组件。</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> SpecialLayout</span>
<span class="token punctuation">---</span></span>
</code></pre></div><p>这将会为当前的页面渲染 VuePress 中注册的 SpecialLayout 布局。</p>`,4),B={class:"hint-container note"},S=t('<p class="hint-container-title">注</p><p>主题只提供了 <code>Layout</code>，<code>404</code> 布局。</p><p>同时主题:</p><ul><li>在博客功能启用时提供 <code>Blog</code> 布局</li><li>在幻灯片功能启用时提供 <code>Slide</code> 布局</li></ul>',4),j={href:"https://vuejs.press/zh/advanced/cookbook/usage-of-client-config.html#layouts",target:"_blank",rel:"noopener noreferrer"},D=t(`<h2 id="自定义容器-class" tabindex="-1"><a class="header-anchor" href="#自定义容器-class" aria-hidden="true">#</a> 自定义容器 Class</h2><p>默认情况下，每个页面都会渲染在 class 为 <code>theme-container</code> 的 <code>div</code> 中。如果你需要对特定页面应用一些特殊样式，你可以通过在 frontmatter 中设置 <code>containerClass</code> 来额外指定一个类名</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">containerClass</span><span class="token punctuation">:</span> fancy<span class="token punctuation">-</span>container</span>
<span class="token punctuation">---</span></span>
</code></pre></div><p>这将会为当前的页面渲染在 <code>&lt;div class=&quot;theme-container fancy-container&quot; /&gt;</code> 中。</p>`,4);function E(I,O){const s=r("RouterLink"),c=r("ExternalLinkIcon");return l(),i("div",null,[u,e("div",m,[_,e("p",null,[a("图标的相关设置，详见 "),n(s,{to:"/zh/guide/interface/icon.html"},{default:o(()=>[a("图标支持")]),_:1})])]),k,e("p",null,[a("详见 "),n(s,{to:"/zh/guide/layout/breadcrumb.html"},{default:o(()=>[a("路径导航")]),_:1}),a(" 章节。")]),f,e("p",null,[a("详见 "),n(s,{to:"/zh/guide/feature/page-info.html"},{default:o(()=>[a("文章信息")]),_:1}),a(" 章节。")]),g,e("div",v,[y,e("p",null,[a("有效最大值取决于你通过 "),e("a",b,[a("markdown.headers.level"),n(c)]),a(" 提取了哪些级别的标题。")]),e("p",null,[a("由于 "),e("a",x,[a("markdown.headers.level"),n(c)]),a(" 的默认值是 "),w,a(" ，因此 "),z,a(" 的默认最大值是 "),C,a(" 。")])]),L,e("p",null,[a("详见 "),n(s,{to:"/zh/guide/feature/meta.html"},{default:o(()=>[a("页面元数据")]),_:1}),a(" 章节。")]),V,p(" TODO: Improve it "),N,e("p",null,[a("具体详情请见 "),n(s,{to:"/zh/guide/feature/comment.html"},{default:o(()=>[a("评论")]),_:1}),a(" 章节。")]),q,e("div",B,[S,e("p",null,[a("如果你想使用你自己的布局，你可以在 "),e("a",j,[a("客户端配置文件中注册布局"),n(c)]),a("。")])]),D])}const T=d(h,[["render",E],["__file","page.html.vue"]]);export{T as default};
