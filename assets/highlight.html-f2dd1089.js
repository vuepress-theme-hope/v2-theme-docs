import{_ as s,r,o as d,c as h,f as u,e,b as t,a,w as l,g as i}from"./app-a38c4918.js";const c={},p=e("p",null,"We strongly recommend you to switch to V2 version, as V2 version provides the following improvements.",-1),g=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),t(" Overview")],-1),m={href:"https://vuejs.press",target:"_blank",rel:"noopener noreferrer"},b=e("em",null,"VuePress2",-1),f={href:"https://vitejs.dev",target:"_blank",rel:"noopener noreferrer"},_=e("em",null,"Vite4",-1),w={href:"https://webpack.js.org",target:"_blank",rel:"noopener noreferrer"},y=e("em",null,"Webpack5",-1),v={href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"},k=e("em",null,"Vue3",-1),x=i('<p>V2 is a full rewrite including:</p><ul><li>All the components are rewritten with <em>Composition API in Vue3</em></li><li>All the styles are migrated to <em>Sass</em></li></ul><p>Also, V2 has a better performance:🚀</p><ul><li>DevServer cold start time reduced by <strong>50%</strong></li><li>Build memory usage reduced by <strong>65%</strong></li><li>Build time reduced by <strong>30%</strong></li><li>Output Size reduced by <strong>35%</strong></li><li>Webpage performance up to <strong>70%</strong></li></ul><h2 id="vue3-changes" tabindex="-1"><a class="header-anchor" href="#vue3-changes" aria-hidden="true">#</a> Vue3 Changes</h2><p>Vue 3 uses proxy to provide reactivity and composition api. The proxy-based reactivity is a lot faster than the old-style reactivity based on setter/getter.</p><p>Additionally, the Composition API is tree-shaking friendly, meaning features that are not enabled can be removed during the build process.</p><h2 id="vuepress2-changes" tabindex="-1"><a class="header-anchor" href="#vuepress2-changes" aria-hidden="true">#</a> VuePress2 Changes</h2><p>VuePress v2 is developed with TypeScript, so it provides better TS support now.</p><p>VuePress@v2 also decouple bundler with core. VuePress v2 add supports both Webpack and Vite as bundler. Now Vite is the default bundler, while you can still choose use Webpack. You can even use Vite in dev mode to get better development experience, and use Webpack in build mode to get better browser compatibility.</p><p>VuePress@v2 is a lot more flexible than VuePress@v1, it removes siteData and siteData.pages, which greatly increase scalability (specially on large sites with lots of pages). It has a higher score on lighthouse comparing with V1 with less loaded time and higher performance.</p><h2 id="vuepress-theme-hope-changes" tabindex="-1"><a class="header-anchor" href="#vuepress-theme-hope-changes" aria-hidden="true">#</a> VuePress Theme Hope Changes</h2><p>VuePressThemeHope@v2 is rewritten with composition API and it&#39;s style system is migrated from stylus to sass.</p><p>By rewriting theme and plugins with composition api, almost feature you disabled can be removed by tree-shaking when bundling, so that you can get a smaller size easily.</p><p>Also, we are adding new features to VuePressThemeHope@v2.</p><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h3><h4 id="blog" tabindex="-1"><a class="header-anchor" href="#blog" aria-hidden="true">#</a> Blog</h4>',17),V=e("li",null,[e("p",null,"Now the whole blog feature is tree-shakable, and is disabled by default."),e("p",null,[t("To enable it, you need to set "),e("code",null,"plugins.blog"),t(" to "),e("code",null,"true"),t(".")])],-1),S=i('<h4 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h4><p>Valine and Vssue are no longer supported.</p><p>Instead, we add Artalk, Giscus and Twikoo support besides Waline.</p><h4 id="encrypt" tabindex="-1"><a class="header-anchor" href="#encrypt" aria-hidden="true">#</a> Encrypt</h4><ul><li>Encryption functions are now also tree-shakable, and encryption checks are only done when necessary.</li><li>Password in frontmatter is removed</li></ul><h4 id="feed" tabindex="-1"><a class="header-anchor" href="#feed" aria-hidden="true">#</a> Feed</h4><ul><li>Feed is no longer generated by default</li><li>Support <code>getter</code> option for you to fully customize feed generation.</li></ul><h4 id="photoswipe" tabindex="-1"><a class="header-anchor" href="#photoswipe" aria-hidden="true">#</a> PhotoSwipe</h4><p>We now use PhotoSwipe@v5, which is smaller in size.</p><h4 id="pwa" tabindex="-1"><a class="header-anchor" href="#pwa" aria-hidden="true">#</a> PWA</h4><ul><li>Support update control</li><li>Support base appending for manifest</li></ul><h4 id="seo" tabindex="-1"><a class="header-anchor" href="#seo" aria-hidden="true">#</a> SEO</h4><ul><li>Add canonical link support</li><li>Add JSON-LD support</li><li>Support injecting any head tags in V2 now.</li></ul><h4 id="auto-generating-catalog-page" tabindex="-1"><a class="header-anchor" href="#auto-generating-catalog-page" aria-hidden="true">#</a> Auto-generating Catalog Page</h4><ul><li>The new <code>auto-catalog</code> plugin can automatically generate catalog pages for you</li></ul><h4 id="others" tabindex="-1"><a class="header-anchor" href="#others" aria-hidden="true">#</a> Others</h4>',16),T=e("p",null,"pure mode",-1),P=e("li",null,[e("p",null,"RTL layout"),e("p",null,"Themes now fully support RTL layouts")],-1),C=e("li",null,[e("p",null,"printing support"),e("p",null,"You can now print theme pages using the print button")],-1),A=i('<h3 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h3><h4 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> Home</h4><ul><li>New homepage style</li><li>Added multi-feature support</li><li>Feature added icon support</li></ul><h4 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> Page</h4>',4),N=e("li",null,[e("p",null,"Appearance update")],-1),I=e("li",null,[e("p",null,"TOC rebuild, now TOC automatically scrolls to the active heading")],-1),W=e("h4",{id:"navbar-and-sidebar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#navbar-and-sidebar","aria-hidden":"true"},"#"),t(" Navbar and Sidebar")],-1),z=e("li",null,[e("p",null,"Outlook updated")],-1),B=e("li",null,[e("p",null,"They now shares same config options")],-1),L=e("li",null,[e("p",null,[t("New "),e("code",null,"activeMatch"),t(" option controlling whether the item should be activated.")])],-1),O=e("code",null,'"structure"',-1),j=e("li",null,[e("p",null,"Sidebar now automatically opens and scrolls to the activated item.")],-1),E=e("h4",{id:"print",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#print","aria-hidden":"true"},"#"),t(" Print")],-1),F=e("p",null,"Now you can print website pages.",-1),H=e("h4",{id:"code-block-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#code-block-theme","aria-hidden":"true"},"#"),t(" Code Block Theme")],-1),M=e("h3",{id:"markdown",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),t(" Markdown")],-1),D=e("p",null,"The following new features are added:",-1);function R(Y,G){const n=r("ExternalLinkIcon"),o=r("RouterLink");return d(),h("div",null,[p,u(" more "),g,e("p",null,[t("V2 is coming together with "),e("a",m,[b,a(n)]),t(", with the power of "),e("a",f,[_,a(n)]),t(" / "),e("a",w,[y,a(n)]),t(" and "),e("a",v,[k,a(n)]),t(".")]),x,e("ul",null,[V,e("li",null,[e("p",null,[t("Social media icons is now tree-shakable, and "),a(o,{to:"/guide/blog/blogger.html"},{default:l(()=>[t("icons can be customized")]),_:1})])]),e("li",null,[e("p",null,[t("Support "),a(o,{to:"/guide/blog/home.html"},{default:l(()=>[t("disabling the Hero section or background image of blog homepage")]),_:1})])]),e("li",null,[e("p",null,[t("Support "),a(o,{to:"/guide/blog/home.html"},{default:l(()=>[t("customizing icons for projects")]),_:1}),t(" in blog homepage")])]),e("li",null,[e("p",null,[t("Support "),a(o,{to:"/guide/blog/path.html"},{default:l(()=>[t("customizing blog page path")]),_:1}),t(" now")])]),e("li",null,[e("p",null,[t("Support "),a(o,{to:"/guide/blog/article.html#other-types-of-articles"},{default:l(()=>[t("customizing blog post type")]),_:1})])]),e("li",null,[e("p",null,[t("Support "),a(o,{to:"/guide/blog/article.html#automatically-generate-excerpt"},{default:l(()=>[t("automatic abstract generation")]),_:1})])])]),S,e("ul",null,[e("li",null,[T,e("p",null,[t("The theme now supports "),a(o,{to:"/guide/interface/pure.html"},{default:l(()=>[t("pure mode")]),_:1}),t(" with less fancy styles and animations.")])]),P,C]),A,e("ul",null,[N,I,e("li",null,[e("p",null,[t("Support for "),a(o,{to:"/guide/markdown/components.html"},{default:l(()=>[t("more Markdown components")]),_:1})])])]),W,e("ul",null,[z,B,L,e("li",null,[e("p",null,[t("New "),O,t(" keyword support to "),a(o,{to:"/guide/layout/sidebar.html#auto-sidebar"},{default:l(()=>[t("generate Sidebar from file structure")]),_:1})])]),j]),E,F,H,e("p",null,[t("You can now "),a(o,{to:"/guide/interface/code-theme.html"},{default:l(()=>[t("set different themes")]),_:1}),t(" for code blocks in dark mode and light mode.")]),M,D,e("ul",null,[e("li",null,[e("p",null,[a(o,{to:"/guide/markdown/image.html#image-mark"},{default:l(()=>[t("Image Mark")]),_:1})])]),e("li",null,[e("p",null,[a(o,{to:"/guide/markdown/others.html#gfm"},{default:l(()=>[t("GFM")]),_:1})])]),e("li",null,[e("p",null,[a(o,{to:"/guide/markdown/chart.html"},{default:l(()=>[t("Chart.js")]),_:1})])]),e("li",null,[e("p",null,[a(o,{to:"/guide/markdown/echarts.html"},{default:l(()=>[t("ECharts")]),_:1})])]),e("li",null,[e("p",null,[a(o,{to:"/guide/markdown/include.html"},{default:l(()=>[t("File Include")]),_:1})])]),e("li",null,[e("p",null,[a(o,{to:"/guide/markdown/code-tabs.html"},{default:l(()=>[t("Code Tabs")]),_:1})])]),e("li",null,[e("p",null,[a(o,{to:"/guide/markdown/tabs.html"},{default:l(()=>[t("Tabs")]),_:1})])])])])}const q=s(c,[["render",R],["__file","highlight.html.vue"]]);export{q as default};
