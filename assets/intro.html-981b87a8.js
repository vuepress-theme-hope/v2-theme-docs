import{_ as o,r as a,o as p,c as i,b as e,d as l,e as n,a as u,w as r,f as h}from"./app-c5a3c96d.js";const c={},d=e("p",null,[e("code",null,"vuepress-theme-hope"),l(" 会调用很多 VuePress 插件。")],-1),_=e("ul",null,[e("li",null,"一些插件会自动启用，如果你不需要，可以在主题选项中将其禁用;"),e("li",null,"一些插件只有你在进行必要配置后才会启用。")],-1),m={class:"hint-container note"},g=e("p",{class:"hint-container-title"},"注",-1),f={href:"https://github.com/orgs/vuepress/people",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,[e("code",null,"vuepress-theme-hope"),l(" 调用的所有插件均为官方插件或托管在 "),e("code",null,"vuepress-theme-hope"),l(" 仓库下由 Mr.Hope 自己开发的插件。")],-1),z={href:"https://vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,"Mr.Hope 自己开发的插件也全部拥有自己的文档，可以搭配其他主题使用。",-1),b=h('<h2 id="插件选项" tabindex="-1"><a class="header-anchor" href="#插件选项" aria-hidden="true">#</a> 插件选项</h2><p>主题提供 <code>plugins</code> 选项向对应的插件传递所需选项。</p><div class="hint-container info"><p class="hint-container-title">插件选项名称</p><p>所有的配置键名均为插件名称的驼峰式 (camelCase) 版本，并去除名称中可能存在的数字 2 结尾。</p><p>例如:</p><ul><li><code>vuepress-plugin-copy-code2</code> 的配置键名为 <code>copyCode</code>。</li><li><code>vuepress-plugin-md-enhance</code> 的配置键名为 <code>mdEnhance</code></li></ul></div><h2 id="插件列表" tabindex="-1"><a class="header-anchor" href="#插件列表" aria-hidden="true">#</a> 插件列表</h2><h3 id="mr-hope-提供的插件" tabindex="-1"><a class="header-anchor" href="#mr-hope-提供的插件" aria-hidden="true">#</a> Mr.Hope 提供的插件</h3>',5),j={class:"hint-container tip"},x=e("p",{class:"hint-container-title"},"提示",-1),P=e("p",null,"这里还有一些其他没有被主题捆绑的插件，你可以根据自己的需求自行启用。",-1),w=e("h3",{id:"官方插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#官方插件","aria-hidden":"true"},"#"),l(" 官方插件")],-1),V={href:"https://vuejs.press/zh/reference/plugin/active-header-links.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://vuejs.press/zh/reference/plugin/container.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://vuejs.press/zh/reference/plugin/external-link-icon.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://vuejs.press/zh/reference/plugin/git.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://vuejs.press/zh/reference/plugin/nprogress.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://vuejs.press/zh/reference/plugin/prismjs.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://vuejs.press/zh/reference/plugin/theme-data.html",target:"_blank",rel:"noopener noreferrer"};function S(L,A){const s=a("ExternalLinkIcon"),t=a("ProjectLink");return p(),i("div",null,[d,_,e("div",m,[g,e("p",null,[l("作为 "),e("a",f,[l("VuePress Org"),n(s)]),l(" 的成员之一，Mr.Hope 开发了很多 VuePress 插件。")]),v,e("ul",null,[e("li",null,[l("官方插件的文档详见 "),e("a",z,[l("VuePress2 官网"),n(s)])]),k])]),u(" more "),b,e("ul",null,[e("li",null,[n(t,{name:"auto-catalog",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-auto-catalog")]),_:1}),l(": VuePress2 的目录自动生成插件")]),e("li",null,[n(t,{name:"blog2",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-blog2")]),_:1}),l(": VuePress2 的博客插件")]),e("li",null,[n(t,{name:"comment2",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-comment2")]),_:1}),l(": 提供评论与浏览量功能")]),e("li",null,[n(t,{name:"components",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-components")]),_:1}),l(": 提供一些开箱即用的插件")]),e("li",null,[n(t,{name:"copy-code2",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-copy-code2")]),_:1}),l(": 提供一键复制代码块功能。")]),e("li",null,[n(t,{name:"copyright2",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-copyright2")]),_:1}),l(": 在用户复制时追加版权信息，或禁用站点的复制与选择。")]),e("li",null,[n(t,{name:"feed2",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-feed2")]),_:1}),l(": Feed 支持")]),e("li",null,[n(t,{name:"md-enhance",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-md-enhance")]),_:1}),l(": 提供更多 Markdown 语法")]),e("li",null,[n(t,{name:"photo-swipe",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-photo-swipe")]),_:1}),l(": 基于 Photo Swipe 的图片浏览插件")]),e("li",null,[n(t,{name:"pwa2",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-pwa2")]),_:1}),l(": 增强的 PWA 支持")]),e("li",null,[n(t,{name:"reading-time2",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-reading-time2")]),_:1}),l(": 阅读时间与字数统计")]),e("li",null,[n(t,{name:"sass-palette",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-sass-palette")]),_:1}),l(": 面向全部插件和主题的 Sass 配置插件")]),e("li",null,[n(t,{name:"seo2",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-seo2")]),_:1}),l(": SEO 增强插件")]),e("li",null,[n(t,{name:"sitemap2",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-sitemap2")]),_:1}),l(": Sitemap 插件")])]),e("div",j,[x,P,e("ul",null,[e("li",null,[n(t,{name:"lightgallery",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-lightgallery")]),_:1}),l(": 基于 lightgallery 图片浏览插件")]),e("li",null,[n(t,{name:"redirect",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-redirect")]),_:1}),l(": 重定向插件")]),e("li",null,[n(t,{name:"remove-pwa",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-remove-pwa")]),_:1}),l(": 移除 PWA 插件")]),e("li",null,[n(t,{name:"search-pro",path:"/zh/"},{default:r(()=>[l("vuepress-plugin-search-pro")]),_:1}),l(": 客户端搜索插件")])])]),w,e("ul",null,[e("li",null,[e("p",null,[e("a",V,[l("@vuepress/plugin-active-header-links"),n(s)]),l(": 自动更新路由 Hash")])]),e("li",null,[e("p",null,[e("a",y,[l("@vuepress/plugin-container"),n(s)]),l(": 自定义容器")])]),e("li",null,[e("p",null,[e("a",C,[l("@vuepress/external-link-icon"),n(s)]),l(": 为 Markdown 的外部链接添加外部链接图标。")])]),e("li",null,[e("p",null,[e("a",M,[l("@vuepress/plugin-git"),n(s)]),l(": 基于 Git 的信息插件")])]),e("li",null,[e("p",null,[e("a",E,[l("@vuepress/plugin-nprogress"),n(s)]),l(": 进度条")])]),e("li",null,[e("p",null,[e("a",H,[l("@vuepress/plugin-prismjs"),n(s)]),l(": 基于 prism.js 的代码高亮插件")])]),e("li",null,[e("p",null,[e("a",N,[l("@vuepress/plugin-theme-data"),n(s)]),l(": 主题配置的 Composition API 插件")])])])])}const I=o(c,[["render",S],["__file","intro.html.vue"]]);export{I as default};
