import{$ as c,U as p,a0 as u,X as n,Y as o,W as a,ab as r,a9 as s,F as d}from"./framework-3a3055b3.js";const k={},h=r('<h2 id="使用-prism-js-高亮" tabindex="-1"><a class="header-anchor" href="#使用-prism-js-高亮" aria-hidden="true">#</a> 使用 Prism.js 高亮</h2><p><code>vuepress-theme-hope</code> 捆绑了 <code>@vuepress/plugin-prismjs</code> 以默认支持代码高亮，我们允许你全局设置日间模式和夜间模式的代码块主题。</p><p>默认情况下，我们分别为在日间模式和夜间模式使用 <code>one-light</code> 和 <code>one-dark</code> 主题，你可以通过在 <code>plugin.prismjs</code> 中设置 <code>light</code> 和 <code>dark</code> 来更改它们。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>处于对输出样式大小的考量，我们不会全局引入所有样式。所以我们不支持在代码块单独配置主题。</p></div><h3 id="可用的主题" tabindex="-1"><a class="header-anchor" href="#可用的主题" aria-hidden="true">#</a> 可用的主题</h3><div class="hint-container info"><p class="hint-container-title">浅色主题</p><ul><li>ateliersulphurpool-light</li><li>coldark-cold</li><li>coy</li><li>duotone-light</li><li>ghcolors</li><li>gruvbox-light</li><li>material-light</li><li>one-light</li><li>vs</li></ul></div><div class="hint-container info"><p class="hint-container-title">深色主题</p><ul><li>atom-dark</li><li>cb</li><li>coldark-dark</li><li>dark</li><li>dracula</li><li>duotone-dark</li><li>duotone-earth</li><li>duotone-forest</li><li>duotone-sea</li><li>duotone-space</li><li>gruvbox-dark</li><li>holi</li><li>hopscotch</li><li>lucario</li><li>material-dark</li><li>material-oceanic</li><li>night-owl</li><li>nord</li><li>one-dark</li><li>pojoaque</li><li>shades-of-purple</li><li>solarized-dark-atom</li><li>tomorrow</li><li>vsc-dark-plus</li><li>xonokai</li><li>z-touch</li></ul></div><h2 id="使用-shiki-高亮器" tabindex="-1"><a class="header-anchor" href="#使用-shiki-高亮器" aria-hidden="true">#</a> 使用 Shiki 高亮器</h2><p>Prism.js 快速且轻量，但它无法正确高亮所有语法。如果你想要更准确的高亮结果，可以使用 <code>@vuepress/plugin-shiki</code>。</p>',9),m=n("li",null,[n("p",null,[s("通过在主题选项中设置 "),n("code",null,"plugins.prismjs: false"),s(" 来禁用 "),n("code",null,"@vuepress/plugin-prismjs"),s(" 插件。")])],-1),v=n("p",null,"安装插件:",-1),g=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-shiki@next
`)])])],-1),b=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-shiki@next
`)])])],-1),f=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-shiki@next
`)])])],-1),_=n("p",null,"导入 shiki 插件并使用:",-1),x=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" shikiPlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/plugin-shiki"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"shikiPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 你的选项"),s(`
      theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"one-dark-pro"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" shikiPlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/plugin-shiki"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"shikiPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 你的选项"),s(`
      `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"one-dark-pro"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("li",null,[n("p",null,[s("根据你要使用的主题，通过在 "),n("code",null,".vuepress/styles/config.scss"),s(" 中添加这些变量来设置代码块的背景颜色和字体颜色：")]),n("ul",null,[n("li",null,[n("code",null,"$code-bg-color"),s(": 代码块的背景颜色")]),n("li",null,[n("code",null,"$code-color"),s(": 代码块的字体颜色")])])],-1);function w(C,P){const t=d("CodeTabs");return p(),u("div",null,[h,n("ol",null,[m,n("li",null,[v,o(t,{id:"216",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:a(({title:e,value:l,isActive:i})=>[g]),tab1:a(({title:e,value:l,isActive:i})=>[b]),tab2:a(({title:e,value:l,isActive:i})=>[f]),_:1})]),n("li",null,[_,o(t,{id:"232",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:e,value:l,isActive:i})=>[x]),tab1:a(({title:e,value:l,isActive:i})=>[y]),_:1})]),j])])}const T=c(k,[["render",w],["__file","code-theme.html.vue"]]);export{T as default};
