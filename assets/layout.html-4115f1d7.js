import{_ as d,r as t,o as r,c,a as p,b as a,d as n,e,w as l,f as o}from"./app-92e2b39d.js";const u={},h=a("p",null,"以下选项控制主题布局。",-1),b=a("h2",{id:"导航栏",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#导航栏","aria-hidden":"true"},"#"),n(" 导航栏")],-1),k={id:"navbar",tabindex:"-1"},v=a("a",{class:"header-anchor",href:"#navbar","aria-hidden":"true"},"#",-1),m=o(`<ul><li>类型: <code>NavbarConfig | false</code></li><li>默认值: <code>false</code></li></ul><p>导航栏配置，具体配置方式见上方详情。</p><h3 id="navbaricon" tabindex="-1"><a class="header-anchor" href="#navbaricon" aria-hidden="true">#</a> navbarIcon</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在导航栏显示图标。</p><h3 id="navbarlayout" tabindex="-1"><a class="header-anchor" href="#navbarlayout" aria-hidden="true">#</a> navbarLayout</h3><ul><li><p>类型: <code>NavbarLayoutOptions</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 内置导航栏组件
 */</span>
<span class="token keyword">type</span> <span class="token class-name">NavbarComponent</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&quot;Brand&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;Links&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;Language&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;Search&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;Outlook&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;Repo&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 导航栏布局选项
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">NavbarLayoutOptions</span> <span class="token punctuation">{</span>
  start<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>NavbarComponent <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  center<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>NavbarComponent <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  end<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>NavbarComponent <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>{ start: [&quot;Brand&quot;], center: [&quot;Links&quot;], end: [&quot;Language&quot;, &quot;Repo&quot;, &quot;Outlook&quot;, &quot;Search&quot;] }</code></p></li></ul><p>自定义导航栏布局</p>`,8),q={id:"logo",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#logo","aria-hidden":"true"},"#",-1),g=o('<ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>导航栏图标，应为基于 <code>.vuepress/public</code> 文件夹的绝对路径。</p><h3 id="logodark" tabindex="-1"><a class="header-anchor" href="#logodark" aria-hidden="true">#</a> logoDark</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>logo</code></li></ul><p>夜间模式下导航栏图标，应为基于 <code>.vuepress/public</code> 文件夹的绝对路径。</p><h3 id="navtitle" tabindex="-1"><a class="header-anchor" href="#navtitle" aria-hidden="true">#</a> navTitle</h3><ul><li>类型: <code>string | false</code></li><li>默认值: <code>$siteLocale.title</code></li></ul><p>导航栏标题</p><h3 id="repo" tabindex="-1"><a class="header-anchor" href="#repo" aria-hidden="true">#</a> repo</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>仓库配置，用于在导航栏中显示仓库链接。</p><h3 id="repodisplay" tabindex="-1"><a class="header-anchor" href="#repodisplay" aria-hidden="true">#</a> repoDisplay</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在导航栏显示仓库链接。</p><h3 id="repolabel" tabindex="-1"><a class="header-anchor" href="#repolabel" aria-hidden="true">#</a> repoLabel</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>用于导航栏仓库按钮的无障碍标签。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>主题可以正确识别 GitHub, Gitlab, Gitee, Bitbucket 的链接。</p></div><h3 id="navbarautohide" tabindex="-1"><a class="header-anchor" href="#navbarautohide" aria-hidden="true">#</a> navbarAutoHide</h3><ul><li>类型: <code>&quot;always&quot; | &quot;mobile&quot; | &quot;none&quot;</code></li><li>默认值: <code>&quot;mobile&quot;</code></li></ul><p>是否在向下滚动时自动隐藏导航栏。</p><h3 id="hidesitenameonmobile" tabindex="-1"><a class="header-anchor" href="#hidesitenameonmobile" aria-hidden="true">#</a> hideSiteNameOnMobile</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在移动视图下隐藏站点名称。</p><h2 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏" aria-hidden="true">#</a> 侧边栏</h2>',25),x={id:"sidebar",tabindex:"-1"},y=a("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#",-1),_=o('<ul><li>类型: <code>SidebarConfig | &quot;structure&quot; | &quot;heading&quot; | false</code></li><li>默认值: <code>&quot;structure&quot;</code></li></ul><p>侧边栏配置。</p><h3 id="sidebaricon" tabindex="-1"><a class="header-anchor" href="#sidebaricon" aria-hidden="true">#</a> sidebarIcon</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在侧边栏显示图标。</p>',5),S={id:"sidebarsorter",tabindex:"-1"},w=a("a",{class:"header-anchor",href:"#sidebarsorter","aria-hidden":"true"},"#",-1),L=o(`<ul><li><p>类型: <code>SidebarSorter</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SidebarFileInfo</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">;</span>
  filename<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  order<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  frontmatter<span class="token operator">:</span> ThemeNormalPageFrontmatter<span class="token punctuation">;</span>
  pageData<span class="token operator">:</span> ThemePageData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SidebarDirInfo</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&quot;dir&quot;</span><span class="token punctuation">;</span>
  dirname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">:</span> SidebarInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  order<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  groupInfo<span class="token operator">:</span> <span class="token punctuation">{</span>
    icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    collapsible<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  frontmatter<span class="token operator">:</span> ThemeNormalPageFrontmatter <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  pageData<span class="token operator">:</span> ThemePageData <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarInfo</span> <span class="token operator">=</span> SidebarFileInfo <span class="token operator">|</span> SidebarDirInfo<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarSorterKeyword</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&quot;readme&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;order&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;date&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;date-desc&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;filename&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarSorterFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  infoA<span class="token operator">:</span> SidebarInfo<span class="token punctuation">,</span>
  infoB<span class="token operator">:</span> SidebarInfo<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarSorter</span> <span class="token operator">=</span>
  <span class="token operator">|</span> SidebarSorterFunction
  <span class="token operator">|</span> SidebarSorterFunction<span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token operator">|</span> SidebarSorterKeyword
  <span class="token operator">|</span> SidebarSorterKeyword<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>[&quot;readme&quot;, &quot;order&quot;, &quot;title&quot;, &quot;filename&quot;]</code></p></li></ul><p>结构侧边栏排序器。</p><p>你可以:</p><ul><li>填写自定义函数</li><li>提供一个排序器关键字</li><li>提供一组自定义函数或排序器关键字</li></ul><p>可用的关键字有:</p><ul><li><code>readme</code>: <code>README.md</code> 或 <code>readme.md</code> 在前</li><li><code>order</code>: 正序在前并按其值升序排列，负序在后并按其值降序排列</li><li><code>date</code>: 按日期升序排序</li><li><code>date-desc</code>: 按日期降序排序</li><li><code>title</code>: 按标题字母顺序排序</li><li><code>filename</code>: 按文件名字母顺序排序</li></ul><h3 id="headerdepth" tabindex="-1"><a class="header-anchor" href="#headerdepth" aria-hidden="true">#</a> headerDepth</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>2</code></li></ul><p>侧边栏嵌套的标题深度。</p><h2 id="路径导航" tabindex="-1"><a class="header-anchor" href="#路径导航" aria-hidden="true">#</a> 路径导航</h2><h3 id="breadcrumb" tabindex="-1"><a class="header-anchor" href="#breadcrumb" aria-hidden="true">#</a> breadcrumb</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否全局启用路径导航。</p><h3 id="breadcrumbicon" tabindex="-1"><a class="header-anchor" href="#breadcrumbicon" aria-hidden="true">#</a> breadcrumbIcon</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在路径导航显示图标。</p><h3 id="prevlink" tabindex="-1"><a class="header-anchor" href="#prevlink" aria-hidden="true">#</a> prevLink</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在页面底部显示上一篇链接。</p><h3 id="nextlink" tabindex="-1"><a class="header-anchor" href="#nextlink" aria-hidden="true">#</a> nextLink</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在页面底部显示下一篇链接。</p><h2 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h2><h3 id="titleicon" tabindex="-1"><a class="header-anchor" href="#titleicon" aria-hidden="true">#</a> titleIcon</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在页面标题旁显示图标。</p><h3 id="pageinfo" tabindex="-1"><a class="header-anchor" href="#pageinfo" aria-hidden="true">#</a> pageInfo</h3><ul><li>类型: <code>ArticleInfo[] | false</code></li><li>默认值: <code>[&quot;Author&quot;, &quot;Original&quot;, &quot;Date&quot;, &quot;Category&quot;, &quot;Tag&quot;, &quot;ReadingTime&quot;]</code></li></ul><p>文章信息，可以填入数组，数组的顺序是各条目显示的顺序。填入 <code>false</code> 使其被禁用。</p><p>可以填入的条目如下:</p><ul><li><code>&quot;Author&quot;</code>: 作者</li><li><code>&quot;Date&quot;</code>: 写作日期</li><li><code>&quot;Original&quot;</code>: 是否原创</li><li><code>&quot;Category&quot;</code>: 分类</li><li><code>&quot;Tag&quot;</code>: 标签</li><li><code>&quot;ReadingTime&quot;</code>: 预计阅读时间</li><li><code>&quot;Word&quot;</code>: 字数</li><li><code>&quot;PageView&quot;</code>: 页面浏览量</li></ul><h2 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> Meta</h2><h3 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated" aria-hidden="true">#</a> lastUpdated</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否显示页面最后更新时间</p><h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> contributors</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否显示页面贡献者</p><h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink" aria-hidden="true">#</a> editLink</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否展示编辑此页链接</p><h3 id="editlinkpattern" tabindex="-1"><a class="header-anchor" href="#editlinkpattern" aria-hidden="true">#</a> editLinkPattern</h3><ul><li>类型: <code>string</code></li></ul><p>编辑链接的匹配。其中 <code>:repo</code> <code>:branch</code> <code>:path</code> 会被自动替换为 <code>docsRepo</code> <code>docsBranch</code> 和 <code>docsDir + filePath</code>。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>主题已经为 GitHub、Gitlab、Gitee 和 Bitbucket 提供了内置支持。</p></div><h3 id="docsrepo" tabindex="-1"><a class="header-anchor" href="#docsrepo" aria-hidden="true">#</a> docsRepo</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>repo</code></li></ul><p>文档仓库</p><h3 id="docsbranch" tabindex="-1"><a class="header-anchor" href="#docsbranch" aria-hidden="true">#</a> docsBranch</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;main&quot;</code></li></ul><p>文档所在分支</p><h3 id="docsdir" tabindex="-1"><a class="header-anchor" href="#docsdir" aria-hidden="true">#</a> docsDir</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;&quot;</code></li></ul><p>文档在仓库中的目录</p><h2 id="页脚" tabindex="-1"><a class="header-anchor" href="#页脚" aria-hidden="true">#</a> 页脚</h2><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>页脚的默认内容，可输入 HTMLString。</p><h3 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright" aria-hidden="true">#</a> copyright</h3><ul><li>类型: <code>string | false</code></li><li>默认值: <code>&quot;Copyright © &lt;作者&gt;&quot;</code></li></ul><p>默认的版权信息，设置为 <code>false</code> 来默认禁用它。</p><h3 id="displayfooter" tabindex="-1"><a class="header-anchor" href="#displayfooter" aria-hidden="true">#</a> displayFooter</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否默认显示页脚</p><h2 id="杂项" tabindex="-1"><a class="header-anchor" href="#杂项" aria-hidden="true">#</a> 杂项</h2><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h3><ul><li>类型: <code>string</code></li><li>默认值: 当前 <code>locale</code> 的键名</li></ul><p>当前语言的主页路径，用于导航栏图标和返回主页按钮的链接。</p><h3 id="rtl" tabindex="-1"><a class="header-anchor" href="#rtl" aria-hidden="true">#</a> rtl</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否使用 RTL 布局</p><h3 id="toc-heading" tabindex="-1"><a class="header-anchor" href="#toc-heading" aria-hidden="true">#</a> toc</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在桌面模式下右侧展示标题列表</p>`,74);function I(N,D){const i=t("RouterLink"),s=t("Badge");return r(),c("div",null,[h,p(" more "),b,a("p",null,[n("具体介绍详见 "),e(i,{to:"/zh/guide/layout/navbar.html"},{default:l(()=>[n("布局 → 导航栏")]),_:1}),n("。")]),a("h3",k,[v,n(" navbar "),e(s,{text:"建议配置",type:"tip"})]),m,a("h3",q,[f,n(" logo "),e(s,{text:"建议配置",type:"tip"})]),g,a("p",null,[n("关于配置指南，详见 "),e(i,{to:"/zh/guide/layout/sidebar.html"},{default:l(()=>[n("布局 → 侧边栏")]),_:1}),n("。")]),a("h3",x,[y,n(" sidebar "),e(s,{text:"建议配置",type:"tip"})]),_,a("h3",S,[w,n(" sidebarSorter "),e(s,{text:"仅限 Root",type:"warning"})]),L])}const C=d(u,[["render",I],["__file","layout.html.vue"]]);export{C as default};
