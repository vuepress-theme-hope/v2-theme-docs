import{_ as p,r as c,o as u,c as h,e as t,w as a,d as s,b as e,f as i}from"./app-1ee6e138.js";const f={},g=i('<h2 id="usexxx-is-called-without-provider" tabindex="-1"><a class="header-anchor" href="#usexxx-is-called-without-provider" aria-hidden="true">#</a> <code>useXXX() is called without provider</code></h2><p>此类错误通常是因为项目中错误的含有多个 <code>@vue/xxx</code>, <code>@vuepress/xxx</code>, <code>vue</code> 或 <code>vue-router</code> 版本引起的。</p><p>请确保你正在使用最新的 <code>vuepress</code> 和 <code>vuepress-theme-hope</code> 版本:</p>',3),x=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),s(),e("span",{class:"token function"},"add"),s(" @vuepress/client@next vuepress@next vuepress-theme-hope vue@latest "),e("span",{class:"token parameter variable"},"-E"),s(`
`)])])],-1),_=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),s(),e("span",{class:"token function"},"add"),s(" vuepress@next vuepress-theme-hope@latest "),e("span",{class:"token parameter variable"},"-E"),s(`
`)])])],-1),v=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),s(" i vuepress@next vuepress-theme-hope@latest "),e("span",{class:"token parameter variable"},"-E"),s(`
`)])])],-1),m=e("p",null,"同时，升级依赖以确保你的项目只包含单个版本的相关包:",-1),b=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),s(` dlx vp-update
`)])])],-1),k=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),s(` dlx vp-update
`)])])],-1),A=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`npx vp-update
`)])],-1),E=i('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>任何以 <code>@vuepress/</code> 开头的官方包应该和 VuePress 保持相同版本。</p><p>比如，如果你正在使用 <code>@vuepress/plugin-search</code> 和 <code>@vuepress/utils</code>，你应该确保他们和 <code>vuepress</code> 版本相同。</p><p>另外，<code>vuepress-theme-hope</code> 仓库的插件应与 <code>vuepress-theme-hope</code> 版本相同。</p><p>此外，如果你使用了其他第三方插件，请确保它兼容你要升级到的 VuePress 版本。</p></div><h2 id="vue-warn-failed-to-resolve-component-xxx" tabindex="-1"><a class="header-anchor" href="#vue-warn-failed-to-resolve-component-xxx" aria-hidden="true">#</a> <code>[Vue warn]: Failed to resolve component: XXX</code></h2><p>如果你遇到这样的错误，你可能在项目中使用了非标准标签。</p><p>有像 <code>&lt;center&gt;</code> 或 <code>&lt;font&gt;</code> 这样的标签，它们在 HTML1.0 规范中，但自 1999 年发布的 HTML4.0 以来被标记为不推荐，然后在 2008 年的 HTML5 版本中被删除。所以 Vue 在默认设置下不允许你使用它们。 你应当移除它们并使用标准的 HTML5 标签。</p><p>如果要删除它们，请使用 <code>--debug</code> Flag 运行主题，你将收到警告日志，告诉你可能无法识别的标签。</p>',5),w={href:"https://vuejs.press/zh/guide/markdown.html#%E9%9D%9E%E6%A0%87%E5%87%86%E7%9A%84-html-%E6%A0%87%E7%AD%BE",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"hydration-completed-but-contains-mismatches",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hydration-completed-but-contains-mismatches","aria-hidden":"true"},"#"),s(),e("code",null,"Hydration completed but contains mismatches.")],-1),S=e("p",null,"这个错误表明你遇到了 SSR 错配，而且这应该不是主题的问题。",-1),B={href:"https://dash.cloudflare.com",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"域名",-1),R=i('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>CloudFlare 的 Auto Minify 会错误的对 HTML 的空格和换行进行处理，这会导致 Vue 在初始化时产生 SSR 错配。</p></div><p>另外你还可以检查:</p><ul><li><p>如果你只是在个别页面遇到了这个问题，请检查该界面是否有你额外添加的组件。</p><p>如果有，那这些组件大概率在 SSR<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> 和 CSR<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> 拥有不同的渲染结果，你可以尝试让其行为一致，或用 <code>@vuepress/client</code> 提供的 <code>&lt;ClientOnly /&gt;</code> 组件包裹你的组件。</p></li></ul><ul><li>如果你在所有页面都遇到了这个问题，请同样按照上一步检查你在布局或全局组件中添加的组件。</li></ul><h2 id="you-are-not-allowed-to-use-plugin-xxx-yourself-in-vuepress-config-file" tabindex="-1"><a class="header-anchor" href="#you-are-not-allowed-to-use-plugin-xxx-yourself-in-vuepress-config-file" aria-hidden="true">#</a> <code>You are not allowed to use plugin XXX yourself in vuepress config file.</code></h2><p>这意味着你在 VuePress 配置文件中自己调用主题捆绑插件。</p>',6),L=e("code",null,"plugin.PLUGIN_NAME",-1),T=i('<h2 id="fatal-error-xxx-javascript-heap-out-of-memory" tabindex="-1"><a class="header-anchor" href="#fatal-error-xxx-javascript-heap-out-of-memory" aria-hidden="true">#</a> <code>FATAL ERROR: XXX - JavaScript heap out of memory</code></h2><p>这意味着你的 Node.js 的 <code>max_old_space_size</code> 设置太小而无法构建此应用程序。 你可以尝试通过设置 <code>NODE_OPTIONS</code> 环境变量来增加 <code>max_old_space_size</code>。</p><p><code>max_old_space_size</code> 以 MB 为单位，默认情况下 <code>max_old_space_size</code> 是机器内存大小的一半。该值可以大于你机器的实际内存大小。</p><ul><li>对于小型项目，通常不会超过 2 GB (2048 MB)。</li><li>对于大型项目，通常不会超过 4 GB (4048 MB)</li><li>如果你在大型网站上同时启用博客功能和大量 Markdown 增强功能，通常不会超过 8 GB (8192 MB)</li></ul>',4),X={class:"hint-container details"},N=i(`<summary>增加方法</summary><p>使用 GitHub 工作流时，在你的工作流文件中设置 <code>env</code>:</p><div class="language-diff" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> - name: Build project
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   env:
</span><span class="token prefix inserted">+</span><span class="token line">     NODE_OPTIONS: --max_old_space_size=8192
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   run: pnpm run build
</span></span></code></pre></div>`,3),C={href:"https://blog.csdn.net/weixin_37204973/article/details/82504570",target:"_blank",rel:"noopener noreferrer"},V=e("h2",{id:"xxx-isn-t-assign-with-a-lang-and-will-return-en-us-instead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#xxx-isn-t-assign-with-a-lang-and-will-return-en-us-instead","aria-hidden":"true"},"#"),s(),e("code",null,"xxx isn't assign with a lang, and will return 'en-US' instead.")],-1),z=e("p",null,[s("如果你在开发进程启动时看到 "),e("code",null,"xxx is not assign with a lang, and will return 'en-US'."),s("，请检查是否为每种语言设置了语言。")],-1),H=i('<h2 id="xxx-is-missing-sidebar-config" tabindex="-1"><a class="header-anchor" href="#xxx-is-missing-sidebar-config" aria-hidden="true">#</a> <code>xxx is missing sidebar config.</code></h2><p>使用对象格式侧边栏配置意味着你想根据路由设置不同的侧边栏。</p><ul><li>如果你想避免这个警告，你需要为当前语言根路径添加侧边栏配置，因为所有页面都会回退到那个配置。</li><li>如果你想在当前路由中禁用侧边栏，请在 frontmatter 中设置 <code>sidebar: false</code>。</li><li>如果要在当前文件夹中禁用侧边栏，请在侧边栏配置中添加 <code>[当前文件夹路由]: false</code>。</li><li>如果你想告诉主题你仅在设置的路由中需要侧边栏，请在侧边栏配置中添加 <code>[当前语言根路径]: false</code> 以告诉主题侧边栏配置默认禁用。</li></ul><h2 id="热更新在开发服务器中不工作" tabindex="-1"><a class="header-anchor" href="#热更新在开发服务器中不工作" aria-hidden="true">#</a> 热更新在开发服务器中不工作</h2><p>某些配置对开发服务器有高性能影响，因此默认情况下禁用它们的热重载，你可以通过在主题选项中设置 <code>hotReload: true</code> 手动开启。</p><p>其中包括博客的类别和标签、结构化侧边栏和基于 git 的信息。</p><h2 id="部分页面设置无效" tabindex="-1"><a class="header-anchor" href="#部分页面设置无效" aria-hidden="true">#</a> 部分页面设置无效</h2><p>你可以先查看文档以查看设置是否<strong>不支持页面配置</strong>。</p><p><strong>支持页面配置</strong>表示主题允许页面的配置覆盖同名的全局配置 (相同功能) ，但并非所有功能都满足此设置。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>你应该了解，当某些功能的全局设置被禁用时，在准备阶段它们压根就不会加载，因此无法局部启用它们。</p></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p><strong>SSR</strong>: <strong>S</strong>erver <strong>S</strong>ide <strong>R</strong>endering，服务端渲染 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p><strong>CSR</strong>: <strong>C</strong>lient <strong>S</strong>ide <strong>R</strong>endering，客户端渲染 <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li></ol></section>',12);function O(D,F){const d=c("CodeTabs"),l=c("ExternalLinkIcon"),r=c("RouterLink");return u(),h("div",null,[g,t(d,{id:"9",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:a(({value:n,isActive:o})=>[s("pnpm")]),title1:a(({value:n,isActive:o})=>[s("yarn")]),title2:a(({value:n,isActive:o})=>[s("npm")]),tab0:a(({value:n,isActive:o})=>[x]),tab1:a(({value:n,isActive:o})=>[_]),tab2:a(({value:n,isActive:o})=>[v]),_:1}),m,t(d,{id:"23",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:a(({value:n,isActive:o})=>[s("pnpm")]),title1:a(({value:n,isActive:o})=>[s("yarn")]),title2:a(({value:n,isActive:o})=>[s("npm")]),tab0:a(({value:n,isActive:o})=>[b]),tab1:a(({value:n,isActive:o})=>[k]),tab2:a(({value:n,isActive:o})=>[A]),_:1}),E,e("p",null,[s("如果你仍然想使用它们，请查看 "),e("a",w,[s("此处"),t(l)]),s(" 以获得解决方法。")]),y,S,e("p",null,[s("请首先检查你是否在使用 CloudFlare 相关服务，如果有，请确保你关闭静态资源压缩。方法: "),e("a",B,[s("dash.cloudflare.com"),t(l)]),s(" → 网站 → "),M,s(" → 速度 → 优化 → Auto Minify，关闭 JavaScript 和 HTML 即可。")]),R,e("p",null,[s("大多数情况下，当你将一些插件与主题一起使用时，主题会自动为你处理一些插件选项，所以当你想自定义这些插件时，你应该在主题选项下的 "),L,s(" 中将它们的选项设置为 让主题为你调用这些插件。详见 "),t(r,{to:"/zh/config/plugins/intro.html"},{default:a(()=>[s("插件配置")]),_:1}),s("。")]),T,e("details",X,[N,e("p",null,[s("在 Windows，你可以参考 "),e("a",C,[s("此指南"),t(l)]),s(".")])]),V,z,e("p",null,[s("即使你只有一种语言，你仍然需要 "),t(r,{to:"/zh/config/i18n.html#%E8%AE%BE%E7%BD%AE%E8%AF%AD%E8%A8%80"},{default:a(()=>[s("设置你的根目录语言")]),_:1}),s("。")]),H])}const j=p(f,[["render",O],["__file","common-error.html.vue"]]);export{j as default};
