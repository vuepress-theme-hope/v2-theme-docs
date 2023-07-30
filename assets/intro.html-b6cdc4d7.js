import{_ as u,r as l,o as d,c as s,b as t,d as e,e as o,w as n,f as i}from"./app-c5a3c96d.js";const h={},c=i('<h2 id="original-intention" tabindex="-1"><a class="header-anchor" href="#original-intention" aria-hidden="true">#</a> Original Intention</h2><p>The original intention of building this theme was to find that VuePress default theme is just a theme to provide basic documentation layout.</p><p>For example, it will not inject meta tags for SEO optimization, nor will it generate a Sitemap to help search engines index the content of the document.</p><p>Though VuePress has extended Markdown syntax to a certain extent, it still lacks some commonly used functions, such as text alignment, mark, flowchart, formula, presentation, etc. At the same time, some features provided by the default theme are weak or missing, such as picture preview, dark mode, etc.</p><p>In this case, the design of <code>vuepress-theme-hope</code> was born.</p><p>This theme not only <strong>greatly improve outlook</strong> comparing to <code>@vuepress/theme-default</code>, but also <strong>dedicates to provide a full range of enhancements for VuePress</strong> with its plugins.</p>',6),p={class:"hint-container warning"},m=t("p",{class:"hint-container-title"},"A project with plugins and powerful theme",-1),f={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope",target:"_blank",rel:"noopener noreferrer"},g=t("p",null,[e("Based on such a dozen plugins, Mr.Hope can confidently say that "),t("code",null,"vuepress-theme-hope"),e(' is "'),t("strong",null,"A powerful theme with tons of features"),e('". It can also be seen as the most versatile and comprehensive theme among all VuePress themes.')],-1),_=i('<h2 id="design-goals" tabindex="-1"><a class="header-anchor" href="#design-goals" aria-hidden="true">#</a> Design Goals</h2><ul><li><h3 id="powerful-and-independent-features" tabindex="-1"><a class="header-anchor" href="#powerful-and-independent-features" aria-hidden="true">#</a> Powerful and independent features</h3><p>We extract each feature into a plugin, so that users can use them in other themes or customize their behavior standalone.</p></li><li><h3 id="minimum-configuration" tabindex="-1"><a class="header-anchor" href="#minimum-configuration" aria-hidden="true">#</a> Minimum Configuration</h3><p>All features will try to generate a default value if possible, so you can use them under zero or minimum configuration.</p><p>This helps a lot to reduce your migration or learning costs while directly enjoy their convenience.</p></li><li><h3 id="improved-layout" tabindex="-1"><a class="header-anchor" href="#improved-layout" aria-hidden="true">#</a> Improved Layout</h3><p>The theme interface has been completely refactored to provide customizable and beautiful layouts.</p></li><li><h3 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> Tree-shaking</h3><p>With the help of Vue3&#39;s composition API, the theme fully achieve &quot;Tree-shaking&quot; while remaining powerful.</p><p>The theme will only run with features you want, without being slowed down by other features or affecting the bundle size.</p></li></ul><h2 id="why-powerful" tabindex="-1"><a class="header-anchor" href="#why-powerful" aria-hidden="true">#</a> Why Powerful</h2><h3 id="content-richness" tabindex="-1"><a class="header-anchor" href="#content-richness" aria-hidden="true">#</a> Content Richness</h3><p>The theme provides a lot of extended syntax support for Markdown, allowing you to insert more content in the body.</p>',5),y=t("p",null,"In short, anyone can enjoy the convenience of Markdown's enhanced syntax.",-1),w=t("h3",{id:"ui-improvements",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#ui-improvements","aria-hidden":"true"},"#"),e(" UI Improvements")],-1),b=t("h3",{id:"layouts-improvement",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#layouts-improvement","aria-hidden":"true"},"#"),e(" Layouts Improvement")],-1),v=t("p",null,"Icons and path prefixes are supported.",-1),k=t("p",null,"Navbar on mobile layout has been fully rebuilt.",-1),x=t("p",null,"Icons and path prefixes are supported.",-1),P=t("p",null,"Brand-new outlook, supports icons and links in features.",-1),I=t("p",null,"Automatically catalog page generation.",-1),T=t("p",null,"More:",-1),A=t("h3",{id:"search",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#search","aria-hidden":"true"},"#"),e(" Search")],-1),S=t("h3",{id:"blog-support",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#blog-support","aria-hidden":"true"},"#"),e(" Blog Support")],-1),V=t("h3",{id:"search-engine-optimization",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#search-engine-optimization","aria-hidden":"true"},"#"),e(" Search Engine Optimization")],-1),z=t("h3",{id:"others",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#others","aria-hidden":"true"},"#"),e(" Others")],-1);function C(E,B){const r=l("ExternalLinkIcon"),a=l("RouterLink");return d(),s("div",null,[c,t("div",p,[m,t("p",null,[e("Although "),t("a",f,[e("vuepress-theme-hope/vuepress-theme-hope"),o(r)]),e(" itself marked as a theme repository, it also contains more than a dozen equally complete and powerful plugin. Each plugin is also powerful, can be used with the default theme or third-party themes.")]),g]),_,t("ul",null,[t("li",null,[t("p",null,[e("If you are a literature lover and want to place some essays, the theme provides "),o(a,{to:"/guide/markdown/align.html"},{default:n(()=>[e("Custom Alignment")]),_:1}),e(" and "),o(a,{to:"/guide/markdown/footnote.html"},{default:n(()=>[e("footnote")]),_:1}),e(".")])]),t("li",null,[t("p",null,[e("To store some knowledge notes, the theme provides "),o(a,{to:"/guide/markdown/container.html"},{default:n(()=>[e("Custom container")]),_:1}),e(", "),o(a,{to:"/guide/markdown/mark.html"},{default:n(()=>[e("Mark")]),_:1}),e(", "),o(a,{to:"/guide/markdown/components.html"},{default:n(()=>[e("Badge")]),_:1}),e(", "),o(a,{to:"/guide/markdown/tasklist.html"},{default:n(()=>[e("Task list")]),_:1}),e(" and "),o(a,{to:"/guide/markdown/tex.html"},{default:n(()=>[e("Tex")]),_:1}),e(" support.")])]),t("li",null,[t("p",null,[e("If you are a programmer and need to show a lot of codes and demos, this theme provides light and dark themes for code blocks, "),o(a,{to:"/guide/markdown/code-tabs.html"},{default:n(()=>[e("code tabs")]),_:1}),e(" and the "),o(a,{to:"/guide/feature/copy-code.html"},{default:n(()=>[e('"one-click copy" button')]),_:1}),e(". At the same time, we also provide the "),o(a,{to:"/guide/markdown/demo.html"},{default:n(()=>[e("Code Demo")]),_:1}),e(", "),o(a,{to:"/guide/markdown/playground.html"},{default:n(()=>[e("Playground")]),_:1}),e(" and "),o(a,{to:"/guide/markdown/vue-playground.html"},{default:n(()=>[e("Vue Playground")]),_:1}),e(" functions, which is convenient for you to show your own Vue, React components or other demos and provide playground for visitors.")])]),t("li",null,[t("p",null,[e("If you are providing product documentation and presentation, the theme provides "),o(a,{to:"/guide/markdown/tabs.html"},{default:n(()=>[e("tabs")]),_:1}),e(", "),o(a,{to:"/guide/markdown/presentation.html"},{default:n(()=>[e("slide")]),_:1}),e(", "),o(a,{to:"/guide/markdown/chart.html"},{default:n(()=>[e("chart")]),_:1}),e(", "),o(a,{to:"/guide/markdown/flowchart.html"},{default:n(()=>[e("flowchart")]),_:1}),e(", "),o(a,{to:"/guide/markdown/mermaid.html"},{default:n(()=>[e("mermaid diagram")]),_:1}),e(" functions.")])])]),y,w,t("ul",null,[t("li",null,[t("p",null,[o(a,{to:"/guide/interface/darkmode.html"},{default:n(()=>[e("Darkmode Support")]),_:1})])]),t("li",null,[t("p",null,[o(a,{to:"/guide/interface/icon.html"},{default:n(()=>[e("Icon Support")]),_:1})])]),t("li",null,[t("p",null,[o(a,{to:"/guide/interface/code-theme.html"},{default:n(()=>[e("Customizing Code Block Theme")]),_:1})])]),t("li",null,[t("p",null,[o(a,{to:"/guide/interface/accessibility.html"},{default:n(()=>[e("Full A11y support")]),_:1})])]),t("li",null,[t("p",null,[o(a,{to:"/guide/feature/page-info.html"},{default:n(()=>[e("Page information")]),_:1})])]),t("li",null,[t("p",null,[o(a,{to:"/guide/feature/photo-swipe.html"},{default:n(()=>[e("Picture Preview function")]),_:1}),e(".")])])]),b,t("ul",null,[t("li",null,[t("p",null,[o(a,{to:"/guide/layout/navbar.html"},{default:n(()=>[e("Navbar")]),_:1}),e(":")]),v,k]),t("li",null,[t("p",null,[o(a,{to:"/guide/layout/sidebar.html"},{default:n(()=>[e("Sidebar")]),_:1}),e(":")]),x,t("p",null,[e("Sidebar can be generated from "),o(a,{to:"/guide/layout/sidebar.html#generate-from-headers"},{default:n(()=>[e("page headings")]),_:1}),e(" and "),o(a,{to:"/guide/layout/sidebar.html#generate-from-file-structure"},{default:n(()=>[e("file structure")]),_:1}),e(" automatically.")])]),t("li",null,[t("p",null,[o(a,{to:"/guide/layout/home.html"},{default:n(()=>[e("Homepage")]),_:1})]),P]),t("li",null,[t("p",null,[o(a,{to:"/guide/layout/catalog.html"},{default:n(()=>[e("Catalog")]),_:1})]),I]),t("li",null,[T,t("p",null,[e("Adds "),o(a,{to:"/guide/layout/breadcrumb.html"},{default:n(()=>[e("breadcrumb")]),_:1}),e(", "),o(a,{to:"/guide/layout/page.html#header-list"},{default:n(()=>[e("toc")]),_:1}),e(" and "),o(a,{to:"/guide/layout/footer.html"},{default:n(()=>[e("footer")]),_:1}),e(" support.")])])]),A,t("ul",null,[t("li",null,[t("p",null,[e("built-in support for "),o(a,{to:"/guide/feature/search.html"},{default:n(()=>[e("official VuePress search plugins")]),_:1}),e(".")])]),t("li",null,[t("p",null,[e("search-pro plugin to "),o(a,{to:"/guide/feature/search.html#use-vuepress-plugin-search-pro"},{default:n(()=>[e("provide powerful client search")]),_:1}),e(".")])])]),S,t("p",null,[e("The theme supports blogging layout, you can use the brand-new "),o(a,{to:"/guide/blog/home.html"},{default:n(()=>[e("blog homepage")]),_:1}),e(".")]),t("ul",null,[t("li",null,[t("p",null,[e("Provides "),o(a,{to:"/guide/blog/category-and-tags.html"},{default:n(()=>[e("categories, tags")]),_:1}),e(", "),o(a,{to:"/guide/blog/timeline.html"},{default:n(()=>[e("timeline")]),_:1}),e(", "),o(a,{to:"/guide/blog/article.html"},{default:n(()=>[e("star articles")]),_:1}),e(" and other functions.")])]),t("li",null,[t("p",null,[e("Provides "),o(a,{to:"/guide/feature/comment.html"},{default:n(()=>[e("Comment and PageViews")]),_:1}),e(" feature to let you communicate with your visitors")])]),t("li",null,[t("p",null,[e("Provides "),o(a,{to:"/guide/advanced/feed.html"},{default:n(()=>[e("Feed")]),_:1}),e(" generation, so that others can subscribe your site.")])])]),V,t("ul",null,[t("li",null,[t("p",null,[e("Provides "),o(a,{to:"/guide/advanced/seo.html"},{default:n(()=>[e("SEO Enhance")]),_:1}),e(", will automatically inject information to fully support OGP and JSON-LD protocols, and enhance search engine indexing.")])]),t("li",null,[t("p",null,[e("Provides "),o(a,{to:"/guide/advanced/sitemap.html"},{default:n(()=>[e("Sitemap Generation")]),_:1})])]),t("li",null,[t("p",null,[e("Provides "),o(a,{to:"/guide/advanced/pwa.html"},{default:n(()=>[e("PWA")]),_:1})])])]),z,t("ul",null,[t("li",null,[t("p",null,[o(a,{to:"/guide/feature/copyright.html"},{default:n(()=>[e("Appending copyright information")]),_:1}),e(" while copying, or disable page copy and selection")])]),t("li",null,[t("p",null,[e("Provide "),o(a,{to:"/guide/feature/encrypt.html"},{default:n(()=>[e("Page Encryption")]),_:1}),e(" function to protect private information")])])])])}const M=u(h,[["render",C],["__file","intro.html.vue"]]);export{M as default};
