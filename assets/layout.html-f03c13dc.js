import{_ as r,r as i,o as d,c,a as p,b as e,d as a,e as n,w as l,f as o}from"./app-ce8d7da6.js";const u={},h=e("p",null,"The following options control theme layout.",-1),b=e("h2",{id:"navbar-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#navbar-config","aria-hidden":"true"},"#"),a(" Navbar Config")],-1),k={id:"navbar",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#navbar","aria-hidden":"true"},"#",-1),m=o(`<ul><li>Type: <code>NavbarConfig | false</code></li><li>Default: <code>false</code></li></ul><p>Navbar config</p><h3 id="navbaricon" tabindex="-1"><a class="header-anchor" href="#navbaricon" aria-hidden="true">#</a> navbarIcon</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether display icons in navbar.</p><h3 id="navbarlayout" tabindex="-1"><a class="header-anchor" href="#navbarlayout" aria-hidden="true">#</a> navbarLayout</h3><ul><li><p>Type: <code>NavbarLayoutOptions</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Navbar component
 */</span>
<span class="token keyword">type</span> <span class="token class-name">NavbarComponent</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&quot;Brand&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;Links&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;Language&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;Search&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;Outlook&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;Repo&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Navbar layout options
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">NavbarLayoutOptions</span> <span class="token punctuation">{</span>
  start<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>NavbarComponent <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  center<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>NavbarComponent <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  end<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>NavbarComponent <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>{ start: [&quot;Brand&quot;], center: [&quot;Links&quot;], end: [&quot;Language&quot;, &quot;Repo&quot;, &quot;Outlook&quot;, &quot;Search&quot;] }</code></p></li></ul><p>Customize navbar layout.</p>`,8),f={id:"logo",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#logo","aria-hidden":"true"},"#",-1),y=o('<ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Navbar logo, should be absolute path relative to <code>.vuepress/public</code> folder.</p><h3 id="logodark" tabindex="-1"><a class="header-anchor" href="#logodark" aria-hidden="true">#</a> logoDark</h3><ul><li>Type: <code>string</code></li><li>Default: <code>logo</code></li></ul><p>Navbar logo in darkmode, should be absolute path relative to <code>.vuepress/public</code> folder.</p><h3 id="navtitle" tabindex="-1"><a class="header-anchor" href="#navtitle" aria-hidden="true">#</a> navTitle</h3><ul><li>Type: <code>string | false</code></li><li>Default: <code>$siteLocale.title</code></li></ul><p>Navbar title</p><h3 id="repo" tabindex="-1"><a class="header-anchor" href="#repo" aria-hidden="true">#</a> repo</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Repository link</p><h3 id="repodisplay" tabindex="-1"><a class="header-anchor" href="#repodisplay" aria-hidden="true">#</a> repoDisplay</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether display repo link in navbar.</p><h3 id="repolabel" tabindex="-1"><a class="header-anchor" href="#repolabel" aria-hidden="true">#</a> repoLabel</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Repository aria label of navbar.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>The theme can recognize links of GitHub, Gitlab, Gitee and Bitbucket.</p></div><h3 id="navbarautohide" tabindex="-1"><a class="header-anchor" href="#navbarautohide" aria-hidden="true">#</a> navbarAutoHide</h3><ul><li>Type: <code>&quot;always&quot; | &quot;mobile&quot; | &quot;none&quot;</code></li><li>Default: <code>&quot;mobile&quot;</code></li></ul><p>Whether to hide navbar when scrolling down.</p><h3 id="hidesitenameonmobile" tabindex="-1"><a class="header-anchor" href="#hidesitenameonmobile" aria-hidden="true">#</a> hideSiteNameOnMobile</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether hide site title on mobile.</p><h2 id="sidebar-config" tabindex="-1"><a class="header-anchor" href="#sidebar-config" aria-hidden="true">#</a> Sidebar Config</h2>',25),q={id:"sidebar",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#",-1),T=o('<ul><li>Type: <code>SidebarConfig | &quot;structure&quot; | &quot;heading&quot; | false</code></li><li>Default: <code>&quot;structure&quot;</code></li></ul><p>Sidebar Config.</p><h3 id="sidebaricon" tabindex="-1"><a class="header-anchor" href="#sidebaricon" aria-hidden="true">#</a> sidebarIcon</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether show icons in the sidebar</p>',5),_={id:"sidebarsorter",tabindex:"-1"},D=e("a",{class:"header-anchor",href:"#sidebarsorter","aria-hidden":"true"},"#",-1),w=o(`<ul><li><p>Type: <code>SidebarSorter</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SidebarFileInfo</span> <span class="token punctuation">{</span>
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
  infoB<span class="token operator">:</span> SidebarInfo
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">SidebarSorter</span> <span class="token operator">=</span>
  <span class="token operator">|</span> SidebarSorterFunction
  <span class="token operator">|</span> SidebarSorterFunction<span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token operator">|</span> SidebarSorterKeyword
  <span class="token operator">|</span> SidebarSorterKeyword<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>[&quot;readme&quot;, &quot;order&quot;, &quot;title&quot;, &quot;filename&quot;]</code></p></li></ul><p>Structure sidebar sorter.</p><p>You can:</p><ul><li>fill in a custom function</li><li>provide one sorter keyword</li><li>provide an array of custom function or sorter keyword</li></ul><p>Available keywords are:</p><ul><li><code>readme</code>: <code>README.md</code> or <code>readme.md</code> first</li><li><code>order</code>: positive order first with its value ascending, negative order last with its value descending</li><li><code>date</code>: sort by date ascending</li><li><code>date-desc</code>: sort by date descending</li><li><code>title</code>: alphabetically sort by title</li><li><code>filename</code>: alphabetically sort by filename</li></ul><h3 id="headerdepth" tabindex="-1"><a class="header-anchor" href="#headerdepth" aria-hidden="true">#</a> headerDepth</h3><ul><li>Type: <code>number</code></li><li>Default: <code>2</code></li></ul><p>Nested headings depth in sidebar</p><h2 id="route-navigation" tabindex="-1"><a class="header-anchor" href="#route-navigation" aria-hidden="true">#</a> Route Navigation</h2><h3 id="breadcrumb" tabindex="-1"><a class="header-anchor" href="#breadcrumb" aria-hidden="true">#</a> breadcrumb</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether enable route navigation globally.</p><h3 id="breadcrumbicon" tabindex="-1"><a class="header-anchor" href="#breadcrumbicon" aria-hidden="true">#</a> breadcrumbIcon</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether show icons in route navigation</p><h3 id="prevlink" tabindex="-1"><a class="header-anchor" href="#prevlink" aria-hidden="true">#</a> prevLink</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether show prevLink in bottom.</p><h3 id="nextlink" tabindex="-1"><a class="header-anchor" href="#nextlink" aria-hidden="true">#</a> nextLink</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether show nextLink in bottom.</p><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> Title</h2><h3 id="titleicon" tabindex="-1"><a class="header-anchor" href="#titleicon" aria-hidden="true">#</a> titleIcon</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether display icon besides page title</p><h3 id="pageinfo" tabindex="-1"><a class="header-anchor" href="#pageinfo" aria-hidden="true">#</a> pageInfo</h3><ul><li>Type: <code>ArticleInfo[] | false</code></li><li>Default: <code>[&quot;Author&quot;, &quot;Original&quot;, &quot;Date&quot;, &quot;Category&quot;, &quot;Tag&quot;, &quot;ReadingTime&quot;]</code></li></ul><p>Article information. The order of the items decides the display order. Fill in <code>false</code> to disable it.</p><p>Available items in <code>ArticleInfo</code>:</p><ul><li><code>&quot;Author&quot;</code>: author</li><li><code>&quot;Date&quot;</code>: writing date</li><li><code>&quot;Original&quot;</code>: is original</li><li><code>&quot;Category&quot;</code>: category</li><li><code>&quot;Tag&quot;</code>: tags</li><li><code>&quot;ReadingTime&quot;</code>: expect reading time</li><li><code>&quot;Word&quot;</code>: word number for the article</li><li><code>&quot;PageView&quot;</code>: pageviews</li></ul><h2 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> Meta</h2><h3 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated" aria-hidden="true">#</a> lastUpdated</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether to show &quot;Last Updated&quot; or not.</p><h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> contributors</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether to show &quot;Contributors&quot; or not.</p><h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink" aria-hidden="true">#</a> editLink</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether to show &quot;Edit this page&quot; or not.</p><h3 id="editlinkpattern" tabindex="-1"><a class="header-anchor" href="#editlinkpattern" aria-hidden="true">#</a> editLinkPattern</h3><ul><li>Type: <code>string</code></li></ul><p>Pattern of edit link. While <code>:repo</code> <code>:branch</code> <code>:path</code> will be automatically replaced by <code>docsRepo</code> <code>docsBranch</code> and <code>docsDir + filePath</code>。</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>The theme provides built-in support for GitHub, Gitlab, Gitee and Bitbucket.</p></div><h3 id="docsrepo" tabindex="-1"><a class="header-anchor" href="#docsrepo" aria-hidden="true">#</a> docsRepo</h3><ul><li>Type: <code>string</code></li><li>Default: <code>repo</code></li></ul><p>The repo of your docs</p><h3 id="docsbranch" tabindex="-1"><a class="header-anchor" href="#docsbranch" aria-hidden="true">#</a> docsBranch</h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;main&quot;</code></li></ul><p>The branch of your docs</p><h3 id="docsdir" tabindex="-1"><a class="header-anchor" href="#docsdir" aria-hidden="true">#</a> docsDir</h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;&quot;</code></li></ul><p>Docs dir location in repo</p><h2 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> Footer</h2><h3 id="footer-1" tabindex="-1"><a class="header-anchor" href="#footer-1" aria-hidden="true">#</a> footer</h3><ul><li>Type: <code>string</code></li><li>Required: false</li></ul><p>The default content for the footer, can accept HTMLString.</p><h3 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright" aria-hidden="true">#</a> copyright</h3><ul><li>Type: <code>string | false</code></li><li>Default: <code>&quot;Copyright © &lt;author&gt;&quot;</code></li></ul><p>The default copyright info, set it to <code>false</code> to disable it by default.</p><h3 id="displayfooter" tabindex="-1"><a class="header-anchor" href="#displayfooter" aria-hidden="true">#</a> displayFooter</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to display footer by default.</p><h2 id="others" tabindex="-1"><a class="header-anchor" href="#others" aria-hidden="true">#</a> Others</h2><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h3><ul><li>Type: <code>string</code></li><li>Default: Key of current locale</li></ul><p>Home path of current locale, used as the link of back-to-home and navbar logo.</p><h3 id="rtl" tabindex="-1"><a class="header-anchor" href="#rtl" aria-hidden="true">#</a> rtl</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to use RTL layout.</p><h3 id="toc-heading" tabindex="-1"><a class="header-anchor" href="#toc-heading" aria-hidden="true">#</a> toc</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether show toc list in desktop mode.</p>`,74);function S(N,L){const t=i("RouterLink"),s=i("Badge");return d(),c("div",null,[h,p(" more  "),b,e("p",null,[a("For related guide, please see "),n(t,{to:"/guide/layout/navbar.html"},{default:l(()=>[a("Layout → Navbar")]),_:1}),a(".")]),e("h3",k,[v,a(" navbar "),n(s,{text:"Recommended",type:"tip"})]),m,e("h3",f,[g,a(" logo "),n(s,{text:"Recommended",type:"tip"})]),y,e("p",null,[a("For guide, see "),n(t,{to:"/guide/layout/sidebar.html"},{default:l(()=>[a("Layout → Sidebar")]),_:1}),a(".")]),e("h3",q,[x,a(" sidebar "),n(s,{text:"Recommended",type:"tip"})]),T,e("h3",_,[D,a(" sidebarSorter "),n(s,{text:"Root only",type:"warning"})]),w])}const W=r(u,[["render",S],["__file","layout.html.vue"]]);export{W as default};
