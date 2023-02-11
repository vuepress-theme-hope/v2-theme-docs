import{a4 as n,_ as r,$ as s,a5 as d,a2 as e,a3 as a,a0 as o,a1 as i,a6 as l,k as h}from"./framework-bb5a5b49.js";const u={},p=e("p",null,"We strongly recommend you to switch to V2 version, as V2 version provides the following improvements.",-1),c=l('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>V2 is powered by <em>VuePress2</em>, using <em>Vite2</em> / <em>Webpack5</em> and <em>Vue3</em>.</p><p>V2 is a full rewrite including:</p><ul><li>All the components are rewritten with <em>Composition API in Vue3</em></li><li>All the styles are migrated to <em>Sass</em></li></ul><p>Also V2 has a better performance:🚀</p><ul><li>DevServer cold start time reduced by <strong>50%</strong></li><li>Build memory usage reduced by <strong>65%</strong></li><li>Build time reduced by <strong>30%</strong></li><li>Output Size reduced by <strong>25%</strong></li><li>Webpage performance up to <strong>70%</strong></li></ul><h2 id="vue3-changes" tabindex="-1"><a class="header-anchor" href="#vue3-changes" aria-hidden="true">#</a> Vue3 Changes</h2><p>Vue 3 uses proxy to provide reactivity and composition api. The proxy-based reactivity is a lot faster than the old-style reactivity based on setter/getter.</p><p>Also, composition api is tree-shaking friendly.</p><h2 id="vuepress2-changes" tabindex="-1"><a class="header-anchor" href="#vuepress2-changes" aria-hidden="true">#</a> VuePress2 Changes</h2><p>VuePress v2 is developed with TypeScript, so it provides better TS support now.</p><p>VuePress@v2 also decouple bundler with core. VuePress v2 add supports both Webpack and Vite as bundler. Now Vite is the default bundler, while you can still choose use Webpack. You can even use Vite in dev mode to get better development experience, and use Webpack in build mode to get better browser compatibility.</p><p>VuePress@v2 is a lot more flexible than VuePress@v1, it removes siteData and siteData.pages, which greatly increase scalability (specially on large sites with lots of pages). It has a higher score on lighthouse comparing with V1 with less loaded time and higher performance.</p><h2 id="vuepress-theme-hope-changes" tabindex="-1"><a class="header-anchor" href="#vuepress-theme-hope-changes" aria-hidden="true">#</a> VuePress Theme Hope Changes</h2><p>VuePressThemeHope@v2 is rewritten with composition API and it&#39;s style system is migrated from stylus to sass.</p><p>By rewriting theme and plugins with composition api, almost feature you disabled can be removed by tree-shaking when bundling, so that you can get a smaller size easily.</p><p>Also, we are adding new features to VuePressThemeHope@v2.</p><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h3><h4 id="blog" tabindex="-1"><a class="header-anchor" href="#blog" aria-hidden="true">#</a> Blog</h4>',19),m=e("li",null,[e("p",null,"Now the whole blog feature is tree-shakable, and is disabled by default."),e("p",null,[a("To enable it, you need to set "),e("code",null,"plugins.blog"),a(" to "),e("code",null,"true"),a(".")])],-1),g=l('<h4 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h4><p>Valine and Vssue are not longer supported.</p><p>Instead, we add Artalk, Giscus and Twikoo support besides Waline.</p><h4 id="encrypt" tabindex="-1"><a class="header-anchor" href="#encrypt" aria-hidden="true">#</a> Encrypt</h4><ul><li><p>Now encrypt feature is tree-shaking friendly, and encrypt checking is only done when necessary.</p></li><li><p>Password in frontmatter is removed</p></li></ul><h4 id="feed" tabindex="-1"><a class="header-anchor" href="#feed" aria-hidden="true">#</a> Feed</h4><ul><li><p>Feed is no longer generated by default</p></li><li><p>Support <code>getter</code> option for you to fully customize feed generation.</p></li></ul><h4 id="photoswipe" tabindex="-1"><a class="header-anchor" href="#photoswipe" aria-hidden="true">#</a> PhotoSwipe</h4><p>We now use PhotoSwipe@v5, which is smaller in size.</p><h4 id="pwa" tabindex="-1"><a class="header-anchor" href="#pwa" aria-hidden="true">#</a> PWA</h4><ul><li><p>Support update control</p></li><li><p>Support base appending for manifest</p></li></ul><h4 id="seo" tabindex="-1"><a class="header-anchor" href="#seo" aria-hidden="true">#</a> SEO</h4><ul><li>Add canonical link support</li><li>Add JSON-LD support</li><li>Support injecting any head tags in V2 now.</li></ul><h3 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h3><h4 id="pure-mode" tabindex="-1"><a class="header-anchor" href="#pure-mode" aria-hidden="true">#</a> Pure Mode</h4>',15),b=e("h4",{id:"code-block-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#code-block-theme","aria-hidden":"true"},"#"),a(" Code Block Theme")],-1),f=l('<h4 id="homepage" tabindex="-1"><a class="header-anchor" href="#homepage" aria-hidden="true">#</a> Homepage</h4><ul><li>Features now can have icons</li></ul><h4 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> Page</h4><ul><li><p>Appearance update</p></li><li><p>TOC rebuild, now TOC automatically scrolls to the active heading</p></li><li><p>Support <code>Badge</code>, <code>CodePen</code>, <code>FontIcon</code> and <code>PDF</code> components</p></li></ul><h4 id="navbar-and-sidebar" tabindex="-1"><a class="header-anchor" href="#navbar-and-sidebar" aria-hidden="true">#</a> Navbar and Sidebar</h4>',5),w=e("li",null,[e("p",null,"Outlook updated")],-1),y=e("li",null,[e("p",null,"They now shares same config options")],-1),_=e("li",null,[e("p",null,[a("New "),e("code",null,"activeMatch"),a(" option controlling whether the item should be activated.")])],-1),v=e("code",null,'"structure"',-1),k=e("li",null,[e("p",null,"Sidebar now automatically opens and scrolls to the activated item.")],-1),V=e("h3",{id:"markdown",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),a(" Markdown")],-1),x=e("p",null,"The following new features are added:",-1);function S(P,T){const t=h("RouterLink");return r(),s("div",null,[p,d(" more "),c,e("ul",null,[m,e("li",null,[e("p",null,[a("Social media icons is now tree-shakable, and "),o(t,{to:"/guide/blog/blogger.html"},{default:i(()=>[a("icons can be customized")]),_:1})])]),e("li",null,[e("p",null,[a("Support "),o(t,{to:"/guide/blog/home.html"},{default:i(()=>[a("disabling the Hero section or background image of blog homepage")]),_:1})])]),e("li",null,[e("p",null,[a("Support "),o(t,{to:"/guide/blog/home.html"},{default:i(()=>[a("customizing icons for projects")]),_:1}),a(" in blog homepage")])]),e("li",null,[e("p",null,[a("Support "),o(t,{to:"/guide/blog/path.html"},{default:i(()=>[a("customizing blog page path")]),_:1}),a(" now")])])]),g,e("p",null,[a("The theme now supports "),o(t,{to:"/guide/interface/pure.html"},{default:i(()=>[a("pure mode")]),_:1}),a(" with less fancy styles.")]),b,e("p",null,[a("Now you can set "),o(t,{to:"/guide/interface/code-theme.html"},{default:i(()=>[a("different themes for code blocks")]),_:1}),a(" in darkmode and lightmode.")]),f,e("ul",null,[w,y,_,e("li",null,[e("p",null,[a("New "),v,a(" keyword support to "),o(t,{to:"/guide/layout/sidebar.html#auto-sidebar"},{default:i(()=>[a("generate Sidebar from file structure")]),_:1})])]),k]),V,x,e("ul",null,[e("li",null,[e("p",null,[o(t,{to:"/guide/markdown/image.html#image-mark"},{default:i(()=>[a("Image Mark")]),_:1})])]),e("li",null,[e("p",null,[o(t,{to:"/guide/markdown/others.html#gfm"},{default:i(()=>[a("GFM")]),_:1})])]),e("li",null,[e("p",null,[o(t,{to:"/guide/markdown/chart.html"},{default:i(()=>[a("Chart.js")]),_:1})])]),e("li",null,[e("p",null,[o(t,{to:"/guide/markdown/echarts.html"},{default:i(()=>[a("ECharts")]),_:1})])]),e("li",null,[e("p",null,[o(t,{to:"/guide/markdown/include.html"},{default:i(()=>[a("File Include")]),_:1})])]),e("li",null,[e("p",null,[o(t,{to:"/guide/markdown/code-tabs.html"},{default:i(()=>[a("Code Tabs")]),_:1})])]),e("li",null,[e("p",null,[o(t,{to:"/guide/markdown/tabs.html"},{default:i(()=>[a("Tabs")]),_:1})])])])])}const N=n(u,[["render",S],["__file","highlight.html.vue"]]);export{N as default};
