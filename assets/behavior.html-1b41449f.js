import{_ as o,r as l,o as i,c as u,a as p,e as d,w as s,d as e,b as n,f as r}from"./app-06f528c1.js";const m={},k=n("p",null,[n("code",null,"hopeTheme()"),e(" 接受可选的第二个参数，即行为选项。行为选项控制主题的行为。")],-1),v=n("p",null,"行为选项也可接受一个布尔值:",-1),h=n("ul",null,[n("li",null,[n("code",null,"false"),e(": 意味着所有选项都设置为 "),n("code",null,"false")]),n("li",null,[n("code",null,"true"),e(": 意味着 "),n("code",null,"{ check: true, compact:true, custom :false, debug: false }")])],-1),b=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token comment"},"// 站点选项"),e(`
  `),n("span",{class:"token comment"},"// ..."),e(`

  theme`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),e(`
    `),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// 主题选项"),e(`
      `),n("span",{class:"token comment"},"// ..."),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// 主题行为选项 (可选)"),e(`
    `),n("span",{class:"token punctuation"},"}"),e(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token comment"},"// 站点选项"),e(`
  `),n("span",{class:"token comment"},"// ..."),e(`

  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),e(`
    `),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// 主题选项"),e(`
      `),n("span",{class:"token comment"},"// ..."),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// 主题行为选项 (可选)"),e(`
    `),n("span",{class:"token punctuation"},"}"),e(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=r('<h2 id="check" tabindex="-1"><a class="header-anchor" href="#check" aria-hidden="true">#</a> check</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否执行附加检查。</p><p>检查包括运行时检查和 frontmatter 检查。不兼容的值将被警告。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>此选项将在稳定版本中恢复为 <code>false</code> 作为默认值。</p></div><h2 id="compact" tabindex="-1"><a class="header-anchor" href="#compact" aria-hidden="true">#</a> compact</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否兼容历史版本 (v1 最新版本和 v2 beta 版本)。</p><ul><li>仍然可以兼容的选项将继续工作，同时在控制台中留下警告。</li><li>移除的选项将在控制台中留下错误。</li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p>此选项将在稳定版本中恢复为 <code>false</code> 作为默认值。</p></div><h2 id="custom" tabindex="-1"><a class="header-anchor" href="#custom" aria-hidden="true">#</a> custom</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用通过别名导入组件的自定义支持。</p><p>默认情况下，主题将在性能模式下运行，所有文件都被捆绑并直接导入。</p><p>如果你想通过覆盖组件和布局来自定义主题，请将此选项设置为 <code>true</code>，主题将加载带有 <code>@theme-hope</code> 别名的组件和布局。</p><h2 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> debug</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否在调试模式下运行。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>这只是通过将 <code>app.env.isDebug</code> 设置为 <code>true</code> 来实现的。</p><p>你还可以在运行 <code>vuepress dev</code> 或 <code>vuepress build</code> 时添加 <code>--debug</code> 标志以启用调试模式。(推荐)</p></div>',19);function g(y,x){const c=l("CodeTabs");return i(),u("div",null,[k,v,h,p(" more "),d(c,{id:"19",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:s(({value:a,isActive:t})=>[e("TS")]),title1:s(({value:a,isActive:t})=>[e("JS")]),tab0:s(({value:a,isActive:t})=>[b]),tab1:s(({value:a,isActive:t})=>[f]),_:1}),_])}const T=o(m,[["render",g],["__file","behavior.html.vue"]]);export{T as default};
