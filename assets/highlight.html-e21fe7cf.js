import{_ as o,r,o as d,c as s,a as u,b as e,d as l,e as a,w as n,f as h}from"./app-c5a3c96d.js";const c={},p=e("p",null,"我们强烈建议你切换到 V2 版本，因为 V2 版本提供了以下改进。",-1),_=e("h2",{id:"总览",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总览","aria-hidden":"true"},"#"),l(" 总览")],-1),f={href:"https://vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},m=e("em",null,"VuePress2",-1),g={href:"https://cn.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},b=e("em",null,"Vite4",-1),k={href:"https://webpack.docschina.org/",target:"_blank",rel:"noopener noreferrer"},E=e("em",null,"Webpack5",-1),V={href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},x=e("em",null,"Vue3",-1),v=h('<p>V2 完全重写，包括:</p><ul><li>所有组件都用 Vue3 中的 <em>Composition API</em> 重写</li><li>所有样式都迁移到 <em>Sass</em></li></ul><p>V2 也有更好的表现: 🚀</p><ul><li>DevServer 冷启动时间减少了 <strong>50%</strong></li><li>构建内存使用量减少了 <strong>65%</strong></li><li>构建时间减少了 <strong>30%</strong></li><li>输出尺寸减少 <strong>35%</strong></li><li>网页性能高达 <strong>70%</strong></li></ul><h2 id="vue3-变更" tabindex="-1"><a class="header-anchor" href="#vue3-变更" aria-hidden="true">#</a> Vue3 变更</h2><p>Vue 3 使用 Proxy 来提供响应式并支持全新的组合 API。基于 Proxy 的响应式比基于 setter/getter 的旧的响应式快得多。</p><p>此外，Composition API 是 tree-shaking 友好的，这意味着没有开启的功能可以在构建过程中被移除。</p><h2 id="vuepress2-变更" tabindex="-1"><a class="header-anchor" href="#vuepress2-变更" aria-hidden="true">#</a> VuePress2 变更</h2><p>VuePress v2 是使用 TypeScript 开发的，因此它现在提供了更好的 TS 支持。</p><p>VuePress@v2 也将打包器与核心解耦。 VuePress v2 添加了 Webpack 和 Vite 打包器的支持。现在 Vite 是默认的打包器，而你仍然可以选择使用 Webpack。你可以在开发模式下使用 Vite 以获得更好的开发体验，在构建模式下使用 Webpack 以获得更好的浏览器兼容性。</p><p>VuePress@v2 比 VuePress@v1 灵活得多，它删除了 siteData 和 siteData.pages，这大大提高了可扩展性 (特别是在具有大量页面的大型网站上)。与 V1 相比，它的性能得分更高，加载时间更少，网页性能更高。</p><h2 id="vuepress-theme-hope-变更" tabindex="-1"><a class="header-anchor" href="#vuepress-theme-hope-变更" aria-hidden="true">#</a> VuePress Theme Hope 变更</h2><p>VuePressThemeHope@v2 使用组合 API 重写，其样式系统从 stylus 迁移到 sass。</p><p>通过使用 composition api 重写主题和插件，在捆绑时通过 tree-shaking 几乎可以删除所有你禁用的功能，以便你轻松获得更小的尺寸。</p><p>此外，我们正在向 VuePressThemeHope@v2 添加新功能。</p><h3 id="新功能" tabindex="-1"><a class="header-anchor" href="#新功能" aria-hidden="true">#</a> 新功能</h3><h4 id="博客" tabindex="-1"><a class="header-anchor" href="#博客" aria-hidden="true">#</a> 博客</h4>',17),w=e("li",null,[e("p",null,"现在整个博客功能都 tree-shakable，并且默认禁用。"),e("p",null,[l("要启用它，你需要将 "),e("code",null,"plugins.blog"),l(" 设置为 "),e("code",null,"true"),l("。")])],-1),A=h('<h4 id="评论" tabindex="-1"><a class="header-anchor" href="#评论" aria-hidden="true">#</a> 评论</h4><p>不再支持 Valine 和 Vssue。</p><p>相反，我们在 Waline 之外添加了 Artalk、Giscus 和 Twikoo 支持。</p><h4 id="加密" tabindex="-1"><a class="header-anchor" href="#加密" aria-hidden="true">#</a> 加密</h4><ul><li><p>现在加密功能同样 tree-shakable，并且只有在必要时才进行加密检查。</p></li><li><p>Frontmatter 中的密码支持被删除</p></li></ul><h4 id="feed" tabindex="-1"><a class="header-anchor" href="#feed" aria-hidden="true">#</a> Feed</h4><ul><li>不再默认生成 feed</li><li>提供 <code>getter</code> 选项让你完全自定义 feed 生成。</li></ul><h4 id="photoswipe" tabindex="-1"><a class="header-anchor" href="#photoswipe" aria-hidden="true">#</a> PhotoSwipe</h4><p>使用体积更小的 PhotoSwipe@v5。</p><h4 id="pwa" tabindex="-1"><a class="header-anchor" href="#pwa" aria-hidden="true">#</a> PWA</h4><ul><li>支持更新提示控制</li><li>支持自动为 Manifest 补充 Base。</li></ul><h4 id="搜索引擎优化" tabindex="-1"><a class="header-anchor" href="#搜索引擎优化" aria-hidden="true">#</a> 搜索引擎优化</h4><ul><li>添加规范链接支持</li><li>添加 JSON-LD 支持</li><li>你现在也可以在 V2 中注入任何 <code>&lt;head&gt;</code> 标签。</li></ul><h4 id="自动目录页" tabindex="-1"><a class="header-anchor" href="#自动目录页" aria-hidden="true">#</a> 自动目录页</h4><ul><li>新增的 <code>auto-catalog</code> 插件可以为你自动生成目录页</li></ul><h4 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h4>',16),P=e("p",null,"纯净模式",-1),z=e("li",null,[e("p",null,"RTL 布局"),e("p",null,"主题现在完全支持 RTL 布局")],-1),B=e("li",null,[e("p",null,"打印支持"),e("p",null,"你现在可以使用打印按钮打印主题页面")],-1),T=h('<h3 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h3><h4 id="主页" tabindex="-1"><a class="header-anchor" href="#主页" aria-hidden="true">#</a> 主页</h4><ul><li>全新主页样式</li><li>添加了多特性支持</li><li>特性添加图标支持</li></ul><h4 id="页面" tabindex="-1"><a class="header-anchor" href="#页面" aria-hidden="true">#</a> 页面</h4>',4),S=e("li",null,[e("p",null,"外观更新")],-1),C=e("li",null,[e("p",null,"目录重构，现在目录自动滚动到活动标题")],-1),L=e("h4",{id:"导航栏和侧边栏",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#导航栏和侧边栏","aria-hidden":"true"},"#"),l(" 导航栏和侧边栏")],-1),F=e("li",null,[e("p",null,"更新了外观")],-1),I=e("li",null,[e("p",null,"现在共享相同的配置选项")],-1),N=e("li",null,[e("p",null,[l("新的 "),e("code",null,"activeMatch"),l(" 选项控制项目是否应该被激活")])],-1),W=e("code",null,'"structure"',-1),y=e("li",null,[e("p",null,"侧边栏现在会自动打开并滚动到激活项目")],-1),M=e("h4",{id:"打印",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#打印","aria-hidden":"true"},"#"),l(" 打印")],-1),j=e("p",null,"现在你可以打印网站页面。",-1),D=e("h4",{id:"代码块主题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码块主题","aria-hidden":"true"},"#"),l(" 代码块主题")],-1),H=e("h3",{id:"markdown",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),l(" Markdown")],-1),R=e("p",null,"添加了以下新功能:",-1);function G(J,O){const i=r("ExternalLinkIcon"),t=r("RouterLink");return d(),s("div",null,[p,u(" more "),_,e("p",null,[l("V2 基于 "),e("a",f,[m,a(i)]),l("， 带有 "),e("a",g,[b,a(i)]),l(" / "),e("a",k,[E,a(i)]),l(" 和 "),e("a",V,[x,a(i)]),l(" 的强大功能。")]),v,e("ul",null,[w,e("li",null,[e("p",null,[l("社交媒体图标支持 tree-shakable，并且可以 "),a(t,{to:"/zh/guide/blog/blogger.html"},{default:n(()=>[l("自定义图标")]),_:1})])]),e("li",null,[e("p",null,[l("支持 "),a(t,{to:"/zh/guide/blog/home.html"},{default:n(()=>[l("禁用博客主页的 Hero 部分或背景图片")]),_:1})])]),e("li",null,[e("p",null,[l("博客主页的项目支持 "),a(t,{to:"/zh/guide/blog/home.html"},{default:n(()=>[l("自定义图标")]),_:1})])]),e("li",null,[e("p",null,[l("支持 "),a(t,{to:"/zh/guide/blog/path.html"},{default:n(()=>[l("配置博客页面的路径")]),_:1})])]),e("li",null,[e("p",null,[l("支持 "),a(t,{to:"/zh/guide/blog/article.html#%E5%85%B6%E4%BB%96%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%96%87%E7%AB%A0"},{default:n(()=>[l("自定义博客文章类型")]),_:1})])]),e("li",null,[e("p",null,[l("支持 "),a(t,{to:"/zh/guide/blog/article.html#%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E6%91%98%E8%A6%81"},{default:n(()=>[l("自动摘要生成")]),_:1})])])]),A,e("ul",null,[e("li",null,[P,e("p",null,[l("该主题现在支持具有较少花哨样式与动画的 "),a(t,{to:"/zh/guide/interface/pure.html"},{default:n(()=>[l("纯净模式")]),_:1}),l("。")])]),z,B]),T,e("ul",null,[S,C,e("li",null,[e("p",null,[l("支持 "),a(t,{to:"/zh/guide/markdown/components.html"},{default:n(()=>[l("更多 Markdown 组件")]),_:1})])])]),L,e("ul",null,[F,I,N,e("li",null,[e("p",null,[l("新的 "),W,l(" 关键字支持 "),a(t,{to:"/zh/guide/layout/sidebar.html#%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E4%BE%A7%E8%BE%B9%E6%A0%8F"},{default:n(()=>[l("从文件结构生成侧边栏")]),_:1})])]),y]),M,j,D,e("p",null,[l("现在你可以在深色模式和浅色模式下为代码块 "),a(t,{to:"/zh/guide/interface/code-theme.html"},{default:n(()=>[l("设置不同的主题")]),_:1}),l("。")]),H,R,e("ul",null,[e("li",null,[e("p",null,[a(t,{to:"/zh/guide/markdown/image.html#%E5%9B%BE%E7%89%87-id-%E6%A0%87%E8%AE%B0"},{default:n(()=>[l("图像标记")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/zh/guide/markdown/others.html#gfm"},{default:n(()=>[l("GFM")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/zh/guide/markdown/chart.html"},{default:n(()=>[l("Chart.js")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/zh/guide/markdown/echarts.html"},{default:n(()=>[l("ECharts")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/zh/guide/markdown/include.html"},{default:n(()=>[l("文件引入")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/zh/guide/markdown/code-tabs.html"},{default:n(()=>[l("代码组")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/zh/guide/markdown/tabs.html"},{default:n(()=>[l("选项卡")]),_:1})])])])])}const K=o(c,[["render",G],["__file","highlight.html.vue"]]);export{K as default};
