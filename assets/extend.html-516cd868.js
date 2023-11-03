import{_ as c,r as p,o as i,c as u,e as l,w as s,d as e,f as r,b as n}from"./app-92e2b39d.js";const d={},k=r('<p><code>vuepress-theme-hope</code> supports extending just like <code>@vuepress/theme-default</code>.</p><p>You can create your own theme based on <code>vuepress-theme-hope</code> and use it locally or publish it according to your needs.</p><h2 id="theme-extending" tabindex="-1"><a class="header-anchor" href="#theme-extending" aria-hidden="true">#</a> Theme extending</h2><p>You need to create an entry file for your theme and import <code>hopeTheme</code> from <code>vuepress-theme-hope</code>.</p><p>In your entry file, set <code>extends: hopeTheme(options)</code> to extend the <code>vuepress-theme-hope</code> theme.</p><p>The aliases of the same name (<code>alias</code>) and layouts (<code>layouts</code>) of your own newly created theme has higher priority over the extended theme <code>vuepress-theme-hope</code>, which means that you can override <code>vuepress-theme-hope</code> components via <code>alias</code> option in theme api, and you can add or override layouts via <code>layouts</code> in client config file.</p><p>The theme provides the following layouts:</p><ul><li>Layout</li><li>NotFound</li><li>Slide (Only available when presentation is enabled)</li><li>BlogCategory (Only available when blog is enabled)</li><li>BlogHome (Only available when blog is enabled)</li><li>BlogType (Only available when blog is enabled)</li><li>Timeline (Only available when blog is enabled)</li></ul>',8),m=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/theme/index.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" getDirname"),n("span",{class:"token punctuation"},","),e(" path "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"@vuepress/utils"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token keyword"},"type"),e(),n("span",{class:"token punctuation"},"{"),e(" ThemeOptions "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"const"),e(" __dirname "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"getDirname"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),e("meta"),n("span",{class:"token punctuation"},"."),e("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"("),e("options"),n("span",{class:"token operator"},":"),e(" ThemeOptions"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token operator"},"=>"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  name`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token string"},'"vuepress-theme-local"'),n("span",{class:"token punctuation"},","),e(`

  `),n("span",{class:"token keyword"},"extends"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),e("options"),n("span",{class:"token punctuation"},","),e(),n("span",{class:"token punctuation"},"{"),e(" custom"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),e(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`

  alias`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"// You can override or add aliases here"),e(`
    `),n("span",{class:"token comment"},"// For example, here we change the vuepress-theme-hope HomePage component to components/HomePage.vue under our own theme"),e(`
    `),n("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),n("span",{class:"token operator"},":"),e(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),e(`
      __dirname`),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token string"},'"./components/HomePage.vue"'),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/theme/index.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" getDirname"),n("span",{class:"token punctuation"},","),e(" path "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"@vuepress/utils"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"const"),e(" __dirname "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"getDirname"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),e("meta"),n("span",{class:"token punctuation"},"."),e("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"options"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token operator"},"=>"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token string"},'"vuepress-theme-local"'),n("span",{class:"token punctuation"},","),e(`

  `),n("span",{class:"token keyword"},"extends"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),e("options"),n("span",{class:"token punctuation"},","),e(),n("span",{class:"token punctuation"},"{"),e(),n("span",{class:"token literal-property property"},"custom"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),e(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`

  `),n("span",{class:"token literal-property property"},"alias"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"// You can override or add aliases here"),e(`
    `),n("span",{class:"token comment"},"// For example, here we change the vuepress-theme-hope HomePage component to components/HomePage.vue under our own theme"),e(`
    `),n("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),n("span",{class:"token operator"},":"),e(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),e(`
      __dirname`),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token string"},'"./components/HomePage.vue"'),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("p",null,[e("Also, you can add or override layout provided by "),n("code",null,"vuepress-theme-hope"),e(" via "),n("code",null,"layouts"),e(" in your theme client config file.")],-1),b=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/client.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" defineClientConfig "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"@vuepress/client"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(" Changelog "),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"./layouts/Changelog.vue"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(" Layout "),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"./layouts/Layout.vue"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineClientConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token comment"},"// You can override or add layouts here"),e(`
  layouts`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"// For example, here we change the default layout of vuepress-theme-hope to layouts/Layout.vue under our own theme"),e(`
    Layout`),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token comment"},"// Also we added a Changelog layout"),e(`
    Changelog`),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/client.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" defineClientConfig "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"@vuepress/client"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(" Changelog "),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"./layouts/Changelog.vue"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(" Layout "),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"./layouts/Layout.vue"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineClientConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token comment"},"// You can override or add layouts here"),e(`
  `),n("span",{class:"token literal-property property"},"layouts"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"// For example, here we change the default layout of vuepress-theme-hope to layouts/Layout.vue under our own theme"),e(`
    Layout`),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token comment"},"// Also we added a Changelog layout"),e(`
    Changelog`),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function g(w,f){const o=p("CodeTabs");return i(),u("div",null,[k,l(o,{id:"58",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:s(({value:a,isActive:t})=>[e("TS")]),title1:s(({value:a,isActive:t})=>[e("JS")]),tab0:s(({value:a,isActive:t})=>[m]),tab1:s(({value:a,isActive:t})=>[v]),_:1}),h,l(o,{id:"69",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:s(({value:a,isActive:t})=>[e("TS")]),title1:s(({value:a,isActive:t})=>[e("JS")]),tab0:s(({value:a,isActive:t})=>[b]),tab1:s(({value:a,isActive:t})=>[y]),_:1})])}const x=c(d,[["render",g],["__file","extend.html.vue"]]);export{x as default};
