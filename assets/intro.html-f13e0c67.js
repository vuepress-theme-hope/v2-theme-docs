import{_ as d,r as i,o as h,c as o,b as e,d as l,e as t,w as a,f as r}from"./app-a080876e.js";const s={},p=r('<h2 id="主题初衷" tabindex="-1"><a class="header-anchor" href="#主题初衷" aria-hidden="true">#</a> 主题初衷</h2><p>VuePress 默认主题只是一个提供基础文档布局的主题。 例如：它不会注入元标记或生成用于 SEO 优化的站点地图。此外，虽然 VuePress 在一定程度上扩展了 Markdown 语法，但仍然缺少一些常用的功能，例如文本对齐、标记、流程图、公式、演示等，同时默认主题提供的一些功能较弱或缺失，如图片预览、代码块复制、目录页等。</p><p>在这种情况下，<code>vuepress-theme-hope</code> 和一些系列插件就应运诞生。</p><p>与默认主题相比，我们不仅<strong>大大改进了美观度</strong>，而且<strong>通过主题插件为 VuePress</strong> 提供了全方位的增强功能。</p><h2 id="设计目标" tabindex="-1"><a class="header-anchor" href="#设计目标" aria-hidden="true">#</a> 设计目标</h2><div class="hint-container info"><p class="hint-container-title">强大且独立的功能</p><p>我们将每个功能提取到一个插件中，以便用户可以在其他主题中使用它们或单独自定义它们的行为。</p></div><div class="hint-container info"><p class="hint-container-title">最小化配置</p><p>如果可能，所有功能都会尝试使用默认值，因此你可以在零配置或最小配置下使用它们。</p><p>这有助于减少你的迁移或学习成本，同时直接享受它们的便利。</p></div><div class="hint-container info"><p class="hint-container-title">改进的布局</p><p>主题界面已经完全重构，以提供可定制和漂亮的布局。</p></div><div class="hint-container info"><p class="hint-container-title">可拆分</p><p>借助 Vue3 的组合 API，主题在保持强大的同时充分实现了“Tree-shaking”。</p><p>主题将只运行你想要的功能，而不会因其他功能而变慢或影响打包大小。</p></div><h2 id="因何强大" tabindex="-1"><a class="header-anchor" href="#因何强大" aria-hidden="true">#</a> 因何强大</h2><h3 id="更丰富的内容" tabindex="-1"><a class="header-anchor" href="#更丰富的内容" aria-hidden="true">#</a> 更丰富的内容</h3><p>主题为 Markdown 提供了大量的扩展语法支持，让你在正文插入更多的内容。</p>',12),c=e("p",null,"总之，任何人都可以享受 Markdown 增强语法带来的便利。",-1),m=e("h3",{id:"ui-改进",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ui-改进","aria-hidden":"true"},"#"),l(" UI 改进")],-1),_=e("p",null,"更多:",-1),f=e("h3",{id:"布局改进",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#布局改进","aria-hidden":"true"},"#"),l(" 布局改进")],-1),g=e("ul",null,[e("li",null,"支持图标和路径前缀。"),e("li",null,"改进了移动设备上的布局。")],-1),z=e("li",null,"支持图标和路径前缀。",-1),E=e("p",null,"更多:",-1),v=e("a",{href:"../layout/page#%E6%A0%87%E9%A2%98%E5%88%97%E8%A1%A8"},"页面标题",-1),w=e("h3",{id:"页面元数据",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#页面元数据","aria-hidden":"true"},"#"),l(" 页面元数据")],-1),k=e("ul",null,[e("li",null,"作者"),e("li",null,"书写日期"),e("li",null,"字数统计和预计阅读时间"),e("li",null,"标签和类别"),e("li",null,"浏览量")],-1),b=e("h3",{id:"功能",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#功能","aria-hidden":"true"},"#"),l(" 功能")],-1),A=e("p",null,"搜索功能",-1),y=e("p",null,"搜索引擎优化",-1),B=e("h3",{id:"完整的博客支持",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#完整的博客支持","aria-hidden":"true"},"#"),l(" 完整的博客支持")],-1),x=e("h2",{id:"内置插件-🧩",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#内置插件-🧩","aria-hidden":"true"},"#"),l(" 内置插件 🧩")],-1),P=e("p",null,"本主题包含了以下内建插件，如果有需要，你也可以单独进行使用或搭配其他主题。",-1),V={class:"hint-container tip"},F=e("p",{class:"hint-container-title"},"提示",-1),S=e("p",null,"这里还有一些其他没有被主题捆绑的插件，你可以根据自己的需求自行启用。",-1);function L(C,M){const u=i("RouterLink"),n=i("ProjectLink");return h(),o("div",null,[p,e("ul",null,[e("li",null,[e("p",null,[l("如果你是一名文学爱好者想放置一些随笔，主题提供了 "),t(u,{to:"/zh/guide/markdown/align.html"},{default:a(()=>[l("自定义对齐")]),_:1}),l(" 与 "),t(u,{to:"/zh/guide/markdown/footnote.html"},{default:a(()=>[l("脚注")]),_:1}),l("。")])]),e("li",null,[e("p",null,[l("我们对 "),t(u,{to:"/zh/guide/markdown/image.html"},{default:a(()=>[l("图片进行了一些内置增强")]),_:1}),l("。")])]),e("li",null,[e("p",null,[l("如果你希望存放一些知识笔记，主题提供了 "),t(u,{to:"/zh/guide/markdown/container.html"},{default:a(()=>[l("自定义容器")]),_:1}),l("、"),t(u,{to:"/zh/guide/markdown/mark.html"},{default:a(()=>[l("标记")]),_:1}),l("、"),t(u,{to:"/zh/guide/markdown/components.html"},{default:a(()=>[l("徽章")]),_:1}),l("、"),t(u,{to:"/zh/guide/markdown/tasklist.html"},{default:a(()=>[l("任务列表")]),_:1}),l(" 与 "),t(u,{to:"/zh/guide/markdown/tex.html"},{default:a(()=>[l("公式")]),_:1}),l(" 支持。")])]),e("li",null,[e("p",null,[l("如果你是一名程序员需要大量展示代码与 demo，本主题为代码块提供了浅色与深色两种主题，"),t(u,{to:"/zh/guide/markdown/code-tabs.html"},{default:a(()=>[l("代码组")]),_:1}),l(" 与 "),t(u,{to:"/zh/guide/feature/copy-code.html"},{default:a(()=>[l('"一键复制" 按钮')]),_:1}),l("。同时我们还提供 "),t(u,{to:"/zh/guide/markdown/demo.html"},{default:a(()=>[l("代码演示")]),_:1}),l("，"),t(u,{to:"/zh/guide/markdown/playground.html"},{default:a(()=>[l("Playground")]),_:1}),l(" 和 "),t(u,{to:"/zh/guide/markdown/vue-playground.html"},{default:a(()=>[l("Vue Playground")]),_:1}),l(" 功能，方便你展示自己的 Vue、React 组件或者其他 demo。")])]),e("li",null,[e("p",null,[l("如果你需要提供产品文档与展示，主题提供了 "),t(u,{to:"/zh/guide/markdown/tabs.html"},{default:a(()=>[l("选项卡")]),_:1}),l("、"),t(u,{to:"/zh/guide/markdown/revealjs.html"},{default:a(()=>[l("幻灯片")]),_:1}),l("、"),t(u,{to:"/zh/guide/markdown/chartjs.html"},{default:a(()=>[l("图表")]),_:1}),l("、"),t(u,{to:"/zh/guide/markdown/echarts.html"},{default:a(()=>[l("echarts")]),_:1}),l("、"),t(u,{to:"/zh/guide/markdown/flowchart.html"},{default:a(()=>[l("流程图")]),_:1}),l(" 与 "),t(u,{to:"/zh/guide/markdown/mermaid.html"},{default:a(()=>[l("Mermaid 图表")]),_:1}),l(" 功能。")])]),e("li",null,[e("p",null,[l("为了重新组织您的内容，主题提供了"),t(u,{to:"/zh/guide/markdown/include.html"},{default:a(()=>[l("文件包含")]),_:1}),l("功能。")])]),e("li",null,[e("p",null,[l("为了设置内容的样式，主题提供了"),t(u,{to:"/zh/guide/markdown/sup-sub.html"},{default:a(()=>[l("下标和上标")]),_:1}),l("、"),t(u,{to:"/zh/guide/markdown/attrs.html"},{default:a(()=>[l("属性设置")]),_:1}),l("和 [样式化](../markdown/stylize. md) 功能，并为您提供了很多"),t(u,{to:"/zh/guide/markdown/components.html"},{default:a(()=>[l("有用的组件")]),_:1}),l("。")])])]),c,m,e("ul",null,[e("li",null,[e("p",null,[t(u,{to:"/zh/guide/interface/darkmode.html"},{default:a(()=>[l("夜间模式支持")]),_:1})])]),e("li",null,[e("p",null,[t(u,{to:"/zh/guide/interface/icon.html"},{default:a(()=>[l("图标支持")]),_:1})])]),e("li",null,[e("p",null,[t(u,{to:"/zh/guide/interface/code-theme.html"},{default:a(()=>[l("自定义代码块主题")]),_:1})])]),e("li",null,[e("p",null,[t(u,{to:"/zh/guide/interface/theme-color.html"},{default:a(()=>[l("主题颜色")]),_:1}),l(": 允许您在浏览过程中动态切换")])]),e("li",null,[_,e("p",null,[t(u,{to:"/zh/guide/interface/others.html#%E5%85%A8%E5%B1%8F%E6%8C%89%E9%92%AE"},{default:a(()=>[l("全屏按钮")]),_:1}),l("、"),t(u,{to:"/zh/guide/interface/others.html#%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8%E6%8C%89%E9%92%AE"},{default:a(()=>[l("返回顶部按钮")]),_:1}),l("、"),t(u,{to:"/zh/guide/interface/others.html#%E6%89%93%E5%8D%B0%E6%8C%89%E9%92%AE"},{default:a(()=>[l("打印按钮")]),_:1}),l("、"),t(u,{to:"/zh/guide/interface/accessibility.html"},{default:a(()=>[l("无障碍完整支持")]),_:1}),l(" 和 "),t(u,{to:"/zh/guide/interface/others.html#rtl-%E5%B8%83%E5%B1%80"},{default:a(()=>[l("RTL 布局")]),_:1}),l("。")])])]),f,e("ul",null,[e("li",null,[e("p",null,[t(u,{to:"/zh/guide/layout/navbar.html"},{default:a(()=>[l("导航栏")]),_:1}),l(":")]),g]),e("li",null,[e("p",null,[t(u,{to:"/zh/guide/layout/sidebar.html"},{default:a(()=>[l("侧边栏")]),_:1}),l(":")]),e("ul",null,[z,e("li",null,[l("从 "),t(u,{to:"/zh/guide/layout/sidebar.html#%E9%80%9A%E8%BF%87%E6%A0%87%E9%A2%98%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90"},{default:a(()=>[l("页面标题")]),_:1}),l(" 和 "),t(u,{to:"/zh/guide/layout/sidebar.html#%E9%80%9A%E8%BF%87%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90"},{default:a(()=>[l("文件结构")]),_:1}),l(" 自动生成。")])])]),e("li",null,[e("p",null,[t(u,{to:"/zh/guide/layout/home.html"},{default:a(()=>[l("全新主页外观，支持特性与亮点")]),_:1})])]),e("li",null,[E,e("p",null,[l("增加 "),t(u,{to:"/zh/guide/layout/breadcrumb.html"},{default:a(()=>[l("路径导航")]),_:1}),l(", "),v,l(" 与 "),t(u,{to:"/zh/guide/layout/footer.html"},{default:a(()=>[l("页脚")]),_:1}),l(" 支持。")])])]),w,e("ul",null,[e("li",null,[e("p",null,[t(u,{to:"/zh/guide/feature/page-info.html"},{default:a(()=>[l("页面信息")]),_:1}),l(" 包括：")]),k]),e("li",null,[e("p",null,[t(u,{to:"/zh/guide/feature/meta.html#git-based-information"},{default:a(()=>[l("贡献者和最后更新时间")]),_:1})])]),e("li",null,[e("p",null,[t(u,{to:"/zh/guide/feature/meta.html#edit-link"},{default:a(()=>[l("编辑链接")]),_:1})])])]),b,e("ul",null,[e("li",null,[e("p",null,[t(u,{to:"/zh/guide/feature/photo-swipe.html"},{default:a(()=>[l("图片预览")]),_:1}),l(" 支持缩放、拖动、幻灯片浏览、分享和下载")])]),e("li",null,[e("p",null,[t(u,{to:"/zh/guide/feature/catalog.html"},{default:a(()=>[l("自动生成目录页")]),_:1})])]),e("li",null,[A,e("ul",null,[e("li",null,[t(u,{to:"/zh/guide/feature/search.html#%E4%BD%BF%E7%94%A8-vuepressplugin-docsearch"},{default:a(()=>[l("基于 docsearch 的爬虫搜索支持")]),_:1})]),e("li",null,[t(u,{to:"/zh/guide/feature/search.html#%E4%BD%BF%E7%94%A8-vuepress-plugin-search-pro"},{default:a(()=>[l("基于 slimsearch 的强大客户端搜索支持")]),_:1}),l("。")])])]),e("li",null,[e("p",null,[t(u,{to:"/zh/guide/feature/encrypt.html"},{default:a(()=>[l("页面加密")]),_:1}),l(" 功能来限制访问。")])]),e("li",null,[e("p",null,[l("复制时 "),t(u,{to:"/zh/guide/feature/copyright.html"},{default:a(()=>[l("附加版权信息")]),_:1}),l("，或直接禁用页面复制和选择")])]),e("li",null,[y,e("ul",null,[e("li",null,[e("p",null,[t(u,{to:"/zh/guide/advanced/seo.html"},{default:a(()=>[l("SEO 增强")]),_:1}),l(" 完全支持 OGP 和 JSON-LD 协议")])]),e("li",null,[e("p",null,[t(u,{to:"/zh/guide/advanced/sitemap.html"},{default:a(()=>[l("站点地图生成")]),_:1})])]),e("li",null,[e("p",null,[t(u,{to:"/zh/guide/advanced/pwa.html"},{default:a(()=>[l("PWA 功能")]),_:1})])])])])]),B,e("p",null,[l("该主题支持"),t(u,{to:"/zh/guide/blog/intro.html"},{default:a(()=>[l("博客")]),_:1}),l("，"),t(u,{to:"/zh/guide/blog/article.html"},{default:a(()=>[l("有置顶功能的文章列表，星标文章，自动摘录生成，自动摘要")]),_:1}),l("。")]),e("ul",null,[e("li",null,[e("p",null,[l("支持"),t(u,{to:"/zh/guide/blog/category-and-tags.html"},{default:a(()=>[l("类别和标签")]),_:1}),l("、"),t(u,{to:"/zh/guide/blog/timeline.html"},{default:a(()=>[l("时间线")]),_:1}),l("。")])]),e("li",null,[e("p",null,[l("全新的"),t(u,{to:"/zh/guide/blog/home.html"},{default:a(()=>[l("博客主页")]),_:1}),l("。")])]),e("li",null,[e("p",null,[l("提供 "),t(u,{to:"/zh/guide/feature/comment.html"},{default:a(()=>[l("评论功能")]),_:1}),l(" 以便你可以与你的访客交流。")])]),e("li",null,[e("p",null,[l("支持创建 "),t(u,{to:"/zh/guide/advanced/feed.html"},{default:a(()=>[l("Feed")]),_:1}),l("，以便他人可以订阅你的网站。")])])]),x,P,e("ul",null,[e("li",null,[t(n,{name:"auto-catalog",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-auto-catalog")]),_:1}),l(": VuePress2 的目录自动生成插件")]),e("li",null,[t(n,{name:"blog2",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-blog2")]),_:1}),l(": VuePress2 的博客插件")]),e("li",null,[t(n,{name:"comment2",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-comment2")]),_:1}),l(": 评论与浏览量功能")]),e("li",null,[t(n,{name:"components",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-components")]),_:1}),l(": 提供一些开箱即用的插件")]),e("li",null,[t(n,{name:"copy-code2",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-copy-code2")]),_:1}),l(": 提供一键复制代码块功能。")]),e("li",null,[t(n,{name:"copyright2",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-copyright2")]),_:1}),l(": 在用户复制时追加版权信息，或禁用站点的复制与选择。")]),e("li",null,[t(n,{name:"feed2",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-feed2")]),_:1}),l(": Feed 支持")]),e("li",null,[t(n,{name:"md-enhance",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-md-enhance")]),_:1}),l(": 提供更多 Markdown 语法")]),e("li",null,[t(n,{name:"photo-swipe",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-photo-swipe")]),_:1}),l(": 基于 Photo Swipe 的图片浏览插件")]),e("li",null,[t(n,{name:"pwa2",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-pwa2")]),_:1}),l(": 增强的 PWA 支持")]),e("li",null,[t(n,{name:"reading-time2",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-reading-time2")]),_:1}),l(": 阅读时间与字数统计")]),e("li",null,[t(n,{name:"sass-palette",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-sass-palette")]),_:1}),l(": 面向全部插件和主题的 Sass 配置插件")]),e("li",null,[t(n,{name:"seo2",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-seo2")]),_:1}),l(": SEO 增强插件")]),e("li",null,[t(n,{name:"sitemap2",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-sitemap2")]),_:1}),l(": Sitemap 插件")])]),e("div",V,[F,S,e("ul",null,[e("li",null,[t(n,{name:"lightgallery",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-lightgallery")]),_:1}),l(": 基于 lightgallery 图片浏览插件")]),e("li",null,[t(n,{name:"redirect",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-redirect")]),_:1}),l(": 重定向插件")]),e("li",null,[t(n,{name:"remove-pwa",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-remove-pwa")]),_:1}),l(": 移除 PWA 插件")]),e("li",null,[t(n,{name:"search-pro",path:"/zh/"},{default:a(()=>[l("vuepress-plugin-search-pro")]),_:1}),l(": 客户端搜索插件")])])])])}const O=d(s,[["render",L],["__file","intro.html.vue"]]);export{O as default};