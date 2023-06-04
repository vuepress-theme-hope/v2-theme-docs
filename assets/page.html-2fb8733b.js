import{_ as c,r,o as l,c as i,b as t,d as e,e as n,w as s,f as d}from"./app-06f528c1.js";const p={},u=t("p",null,"VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。",-1),h=t("h2",{id:"路由",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#路由","aria-hidden":"true"},"#"),e(" 路由")],-1),_=t("p",null,"默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。",-1),m=t("p",null,"假设这是你的 Markdown 文件所处的目录结构:",-1),k=t("div",{class:"language-text","data-ext":"text"},[t("pre",{class:"language-text"},[t("code",null,`└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
`)])],-1),g=t("code",null,"docs",-1),f={href:"https://vuejs.press/zh/reference/cli.html",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"vuepress dev docs",-1),M=d('<table><thead><tr><th>相对路径</th><th>路由路径</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/page.md</code></td><td><code>/guide/page.html</code></td></tr></tbody></table><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2>',2),b={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},x=d(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>CN
<span class="token key atrule">title</span><span class="token punctuation">:</span> 页面的标题
<span class="token key atrule">description</span><span class="token punctuation">:</span> 页面的描述</span>
<span class="token punctuation">---</span></span>
</code></pre></div><p>你肯定注意到 Frontmatter 中的字段和 VuePress 配置文件中的站点配置十分类似。你可以通过 Frontmatter 来覆盖当前页面的 <code>lang</code>, <code>title</code>, <code>description</code> 等属性。因此，你可以把 Frontmatter 当作页面级作用域的配置。</p><p>同样的，VuePress 有一些内置支持的 Frontmatter 字段，而你使用的主题也可能有它自己的特殊 Frontmatter 。</p>`,3),v={class:"hint-container tip"},F=t("p",{class:"hint-container-title"},"提示",-1),V={href:"https://vuejs.press/zh/reference/config.html",target:"_blank",rel:"noopener noreferrer"},E=t("code",null,"vuepress-theme-hope",-1),y=t("h2",{id:"内容",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#内容","aria-hidden":"true"},"#"),e(" 内容")],-1),L=t("p",null,[e("页面的主要内容是使用 Markdown 书写的。VuePress 首先会将 Markdown 转换为 HTML ，然后将 HTML 作为 Vue 单文件组件的 "),t("code",null,"<template>"),e(" 。")],-1),P={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"};function R(z,A){const o=r("ExternalLinkIcon"),a=r("RouterLink");return l(),i("div",null,[u,h,_,m,k,t("p",null,[e("将 "),g,e(" 目录作为你的 "),t("a",f,[e("sourceDir"),n(o)]),e(" ，例如你在运行 "),w,e(" 命令。此时，你的 Markdown 文件对应的路由路径为:")]),M,t("p",null,[e("Markdown 文件可以包含一个 "),t("a",b,[e("YAML"),n(o)]),e(" Frontmatter 。Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。下面是一个基本的示例:")]),x,t("div",v,[F,t("p",null,[e("前往 "),t("a",V,[e("Frontmatter 参考"),n(o)]),e(" 查看 VuePress 支持的 Frontmatter 配置。")]),t("p",null,[e("前往 "),n(a,{to:"/zh/config/frontmatter/"},{default:s(()=>[e("配置 > Frontmatter")]),_:1}),e(" 查看 "),E,e(" 的 Frontmatter 配置。")])]),y,L,t("p",null,[e("借助 "),t("a",P,[e("markdown-it"),n(o)]),e(" 和 Vue 模板语法的能力，基础的 Markdown 可以得到很多的扩展功能。接下来，前往 "),n(a,{to:"/zh/cookbook/vuepress/markdown.html"},{default:s(()=>[e("Markdown")]),_:1}),e(" 章节来了解 VuePress 中 Markdown 的扩展功能。")])])}const N=c(p,[["render",R],["__file","page.html.vue"]]);export{N as default};
