import{a3 as a,Z as u,_ as h,a1 as e,a2 as r,$ as o,a4 as i,a0 as t,D as s}from"./framework-32163d8a.js";const d={},c={href:"https://zh.wikipedia.org/wiki/Markdown",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"vuepress-工作原理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress-工作原理","aria-hidden":"true"},"#"),r(" VuePress 工作原理")],-1),p={href:"https://v3.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://next.router.vuejs.org",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},m=e("ul",null,[e("li",null,[e("p",null,"在开发过程中，我们启动一个常规的开发服务器 (dev-server) ，并将 VuePress 站点作为一个常规的 SPA。")]),e("li",null,[e("p",null,"在构建过程中，我们会为 VuePress 站点创建一个服务端渲染 (SSR) 的版本，然后通过虚拟访问每一条路径来渲染对应的 HTML。")])],-1),v=e("h2",{id:"vuepress-介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress-介绍","aria-hidden":"true"},"#"),r(" VuePress 介绍")],-1),V=e("h2",{id:"vuepress-官方文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress-官方文档","aria-hidden":"true"},"#"),r(" VuePress 官方文档")],-1),b={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"};function w(g,x){const l=s("ExternalLinkIcon"),n=s("RouterLink");return u(),h("div",null,[e("p",null,[r("VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 "),e("a",c,[r("Markdown"),o(l)]),r(" 来书写内容 (如文档、博客等) ，然后 VuePress 会帮助你生成一个静态网站来展示它们。")]),i(" more "),_,e("p",null,[r("一个 VuePress 站点本质上是一个由 "),e("a",p,[r("Vue"),o(l)]),r(" 和 "),e("a",k,[r("Vue Router"),o(l)]),r(" 驱动的单页面应用 (SPA)。")]),e("p",null,[r("路由会根据你的 Markdown 文件的相对路径来自动生成。每个 Markdown 文件都通过 "),e("a",f,[r("markdown-it"),o(l)]),r(" 编译为 HTML ，然后将其作为 Vue 组件的模板。因此，你可以在 Markdown 文件中直接使用 Vue 语法，便于你嵌入一些动态内容。")]),m,v,e("ul",null,[e("li",null,[e("p",null,[o(n,{to:"/zh/cookbook/vuepress/page.html"},{default:t(()=>[r("页面")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/zh/cookbook/vuepress/markdown.html"},{default:t(()=>[r("Markdown")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/zh/cookbook/vuepress/file.html"},{default:t(()=>[r("文件结构简介")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/zh/cookbook/vuepress/config.html"},{default:t(()=>[r("配置")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/zh/cookbook/vuepress/plugin.html"},{default:t(()=>[r("插件")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/zh/cookbook/vuepress/theme.html"},{default:t(()=>[r("主题")]),_:1})])])]),V,e("ul",null,[e("li",null,[e("a",b,[r("VuePress"),o(l)])])])])}const M=a(d,[["render",w],["__file","index.html.vue"]]);export{M as default};
