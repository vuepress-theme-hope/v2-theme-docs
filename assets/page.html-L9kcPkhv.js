import{aj as o,ak as i,am as p,ao as t,ap as s,aq as a,as as n,ar as l,al as d}from"./app-BLmUDr3s.js";const h={},m={class:"hint-container tip"};function k(c,e){const r=l("RouteLink");return d(),i("div",null,[e[12]||(e[12]=p(`<p>VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。</p><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由"><span>路由</span></a></h2><p>默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。</p><p>假设这是你的 Markdown 文件所处的目录结构:</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>└─ docs</span></span>
<span class="line"><span>   ├─ guide</span></span>
<span class="line"><span>   │  ├─ getting-started.md</span></span>
<span class="line"><span>   │  └─ README.md</span></span>
<span class="line"><span>   ├─ contributing.md</span></span>
<span class="line"><span>   └─ README.md</span></span></code></pre></div><p>将 <code>docs</code> 目录作为你的 <a href="https://vuejs.press/zh/reference/cli.html" target="_blank" rel="noopener noreferrer">sourceDir</a> ，例如你在运行 <code>vuepress dev docs</code> 命令。此时，你的 Markdown 文件对应的路由路径为:</p><table><thead><tr><th>相对路径</th><th>路由路径</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/page.md</code></td><td><code>/guide/page.html</code></td></tr></tbody></table><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2><p>Markdown 文件可以包含一个 <a href="https://yaml.org/" target="_blank" rel="noopener noreferrer">YAML</a> Frontmatter 。Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。下面是一个基本的示例:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">zh-CN</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">页面的标题</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">description</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">页面的描述</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre></div><p>你肯定注意到 Frontmatter 中的字段和 VuePress 配置文件中的站点配置十分类似。你可以通过 Frontmatter 来覆盖当前页面的 <code>lang</code>, <code>title</code>, <code>description</code> 等属性。因此，你可以把 Frontmatter 当作页面级作用域的配置。</p><p>同样的，VuePress 有一些内置支持的 Frontmatter 字段，而你使用的主题也可能有它自己的特殊 Frontmatter 。</p>`,12)),t("div",m,[e[5]||(e[5]=t("p",{class:"hint-container-title"},"提示",-1)),e[6]||(e[6]=t("p",null,[s("前往 "),t("a",{href:"https://vuejs.press/zh/reference/config.html",target:"_blank",rel:"noopener noreferrer"},"Frontmatter 参考"),s(" 查看 VuePress 支持的 Frontmatter 配置。")],-1)),t("p",null,[e[1]||(e[1]=s("前往 ")),a(r,{to:"/zh/config/frontmatter/"},{default:n(()=>e[0]||(e[0]=[s("配置 > Frontmatter")])),_:1}),e[2]||(e[2]=s(" 查看 ")),e[3]||(e[3]=t("code",null,"vuepress-theme-hope",-1)),e[4]||(e[4]=s(" 的 Frontmatter 配置。"))])]),e[13]||(e[13]=t("h2",{id:"内容",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#内容"},[t("span",null,"内容")])],-1)),e[14]||(e[14]=t("p",null,[s("页面的主要内容是使用 Markdown 书写的。VuePress 首先会将 Markdown 转换为 HTML ，然后将 HTML 作为 Vue 单文件组件的 "),t("code",null,"<template>"),s(" 。")],-1)),t("p",null,[e[8]||(e[8]=s("借助 ")),e[9]||(e[9]=t("a",{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},"markdown-it",-1)),e[10]||(e[10]=s(" 和 Vue 模板语法的能力，基础的 Markdown 可以得到很多的扩展功能。接下来，前往 ")),a(r,{to:"/zh/cookbook/vuepress/markdown.html"},{default:n(()=>e[7]||(e[7]=[s("Markdown")])),_:1}),e[11]||(e[11]=s(" 章节来了解 VuePress 中 Markdown 的扩展功能。"))])])}const g=o(h,[["render",k],["__file","page.html.vue"]]),f=JSON.parse('{"path":"/zh/cookbook/vuepress/page.html","title":"VuePress 页面","lang":"zh-CN","frontmatter":{"title":"VuePress 页面","icon":"file","order":1,"category":["教程","VuePress"],"tag":["页面","VuePress"],"description":"VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。 路由 默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。 假设这是你的 Markdown 文件所处的目录结构: 将 docs 目录作为你的 sourceDir ，例如你在运行 vuepress dev docs ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-hope.vuejs.press/cookbook/vuepress/page.html"}],["meta",{"property":"og:url","content":"https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"VuePress 页面"}],["meta",{"property":"og:description","content":"VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。 路由 默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。 假设这是你的 Markdown 文件所处的目录结构: 将 docs 目录作为你的 sourceDir ，例如你在运行 vuepress dev docs ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-15T11:30:22.000Z"}],["meta",{"property":"article:tag","content":"页面"}],["meta",{"property":"article:tag","content":"VuePress"}],["meta",{"property":"article:modified_time","content":"2023-12-15T11:30:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VuePress 页面\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-15T11:30:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://theme-hope.vuejs.press/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://theme-hope.vuejs.press/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://theme-hope.vuejs.press/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"路由","slug":"路由","link":"#路由","children":[]},{"level":2,"title":"Frontmatter","slug":"frontmatter","link":"#frontmatter","children":[]},{"level":2,"title":"内容","slug":"内容","link":"#内容","children":[]}],"git":{"createdTime":1644936187000,"updatedTime":1702639822000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":6}]},"readingTime":{"minutes":1.45,"words":436},"filePathRelative":"zh/cookbook/vuepress/page.md","localizedDate":"2022年2月15日","excerpt":"","autoDesc":true}');export{g as comp,f as data};
