import{_ as a,r as d,o as r,c as i,a as l,b as e,d as o,e as t,w as n,f as h}from"./app-92e2b39d.js";const p={},u=e("p",null,"本指南帮助你从 V1 迁移至 V2。",-1),m=e("h2",{id:"更新到-v2-的理由",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#更新到-v2-的理由","aria-hidden":"true"},"#"),o(" 更新到 V2 的理由")],-1),_=e("h2",{id:"升级到-v1-最新版",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#升级到-v1-最新版","aria-hidden":"true"},"#"),o(" 升级到 V1 最新版")],-1),v={href:"https://vuepress-theme-hope.github.io/v1/zh/changelog.html",target:"_blank",rel:"noopener noreferrer"},V=h('<h2 id="开始从-v1-迁移" tabindex="-1"><a class="header-anchor" href="#开始从-v1-迁移" aria-hidden="true">#</a> 开始从 V1 迁移</h2><p>在大多数情况下，你应该能够将 <code>vuepress</code> 和 <code>vuepress-theme-hope</code> 更新到最新的 v2 版本，并直接运行 v1 项目。</p><p>迁移助手会自动将你的 v1 配置转换为 v2 配置，并提示你它转换的已弃用选项和删除的不支持选项。此外，所有页面的 Frontmatter 将从 v1 语法转换为 v2。</p><p>你需要做的就是:</p><ol><li><p>安装 <code>vuepress@next</code> 和 <code>vuepress-theme-hope</code>;</p></li><li><p>尝试启动项目，阅读日志;</p></li><li><p>根据日志依次更改每个页面的 Frontmatter;</p></li><li><p>根据日志更改配置文件。</p><p>如果你开始导入 <code>hopeTheme</code> 并在迁移期间调用它，则应通过 <code>hopeTheme(themeOptions, true)</code> 调用它，因为第二个参数表示在 V1 旧模式下运行。</p></li><li><p>在<code>.vuepress/styles</code>下，将你的 <code>index.styl</code> 转换为 <code>index.scss</code>，将 <code>palette.styl</code> 转换为 <code>palette.scss</code> 和<code>config.scss</code> ，因为 v2 样式系统基于 SCSS.</p></li><li><p>将 <code>.vuepress/components</code> 下的组件转换为 Vue3 语法，并使用 <code>@vuepress/plugin-register-components@next</code> 插件注册它们。</p></li><li><p>成功清除所有提示后，删除 <code>hopeTheme</code> 中的第二个参数 <code>true</code>。</p></li></ol><h2 id="v2-迁移指南" tabindex="-1"><a class="header-anchor" href="#v2-迁移指南" aria-hidden="true">#</a> V2 迁移指南</h2><p>以下页面分别列出了 V1 到 V2 之间发生的更改。</p>',7);function f(x,g){const c=d("RouterLink"),s=d("ExternalLinkIcon");return r(),i("div",null,[u,l(" more "),m,e("p",null,[o("V2 带来了很大的性能提升与很多新功能，详见 "),t(c,{to:"/zh/migration/highlight.html"},{default:n(()=>[o("V2 亮点")]),_:1}),o("。")]),_,e("p",null,[o("升级到最新版 V1 是迁移的第一步。在升级到最新版 V1 的过程中，你可以查看 "),e("a",v,[o("V1 变更日志"),t(s)]),o(" 来适配 V1 中进行的变更。")]),V,e("ul",null,[e("li",null,[t(c,{to:"/zh/migration/config.html"},{default:n(()=>[o("配置迁移指南")]),_:1})]),e("li",null,[t(c,{to:"/zh/migration/page.html"},{default:n(()=>[o("页面迁移指南")]),_:1})]),e("li",null,[t(c,{to:"/zh/migration/style.html"},{default:n(()=>[o("样式迁移指南")]),_:1})])])])}const k=a(p,[["render",f],["__file","index.html.vue"]]);export{k as default};