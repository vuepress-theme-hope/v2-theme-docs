import{a4 as p,_ as i,$ as u,a0 as c,a1 as e,a6 as r,a2 as n,a3 as s,k}from"./framework-bb5a5b49.js";const d={},m=r('<p><code>vuepress-theme-hope</code> поддерживает расширение так же, как <code>@vuepress/theme-default</code>.</p><p>Вы можете создать свою собственную тему на основе <code>vuepress-theme-hope</code> и использовать ее локально или опубликовать в соответствии с вашими потребностями.</p><h2 id="расширение-темы" tabindex="-1"><a class="header-anchor" href="#расширение-темы" aria-hidden="true">#</a> Расширение темы</h2><p>Вам нужно создать входной файл для вашей темы и импортировать <code>hopeTheme</code> из <code>vuepress-theme-hope</code>.</p><p>В файле ввода установите <code>extends: hopeTheme(options)</code>, чтобы расширить тему <code>vuepress-theme-hope</code>.</p><p>The aliases of the same name (<code>alias</code>) and layouts (<code>layouts</code>) of your own newly created theme has higher priority over the extended theme <code>vuepress-theme-hope</code>, which means that you can override <code>vuepress-theme-hope</code> components via <code>alias</code> option in theme api, and you can add or override layouts via <code>layouts</code> in client config file.</p><p>The theme provide the following layouts:</p><ul><li>Layout</li><li>NotFound</li><li>Slide (Only available when presentation is enabled)</li><li>BlogCategory (Only available when blog is enabled)</li><li>BlogHome (Only available when blog is enabled)</li><li>BlogType (Only available when blog is enabled)</li><li>Timeline (Only available when blog is enabled)</li></ul>',8),v=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/theme/index.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" getDirname"),n("span",{class:"token punctuation"},","),s(" path "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/utils"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" ThemeOptions "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" __dirname "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getDirname"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token operator"},":"),s(" ThemeOptions"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"vuepress-theme-local"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token keyword"},"extends"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`

  alias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Вы можете переопределить или добавить псевдонимы здесь"),s(`
    `),n("span",{class:"token comment"},"// Например, здесь мы меняем компонент HomePage vuepress-theme-hope на component/HomePage.vue под нашей собственной темой"),s(`
    `),n("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s(`
      __dirname`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"./components/HomePage.vue"'),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/theme/index.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" getDirname"),n("span",{class:"token punctuation"},","),s(" path "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/utils"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" __dirname "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getDirname"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"options"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"vuepress-theme-local"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token keyword"},"extends"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token literal-property property"},"alias"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Вы можете переопределить или добавить псевдонимы здесь"),s(`
    `),n("span",{class:"token comment"},"// Например, здесь мы меняем компонент HomePage vuepress-theme-hope на component/HomePage.vue под нашей собственной темой"),s(`
    `),n("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s(`
      __dirname`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"./components/HomePage.vue"'),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("p",null,[s("Кроме того, вы можете добавить или переопределить макет, предоставленный "),n("code",null,"vuepress-theme-hope"),s(", через "),n("code",null,"layouts"),s(" в клиентском файле конфигурации вашей темы.")],-1),y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/theme/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineClientConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/client"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Changelog "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./layouts/Changelog.vue"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Layout "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./layouts/Layout.vue"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineClientConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// Вы можете переопределить или добавить макеты здесь"),s(`
  layouts`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Например, здесь мы меняем макет по умолчанию vuepress-theme-hope на layouts/Layout.vue под нашу собственную тему"),s(`
    Layout`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// Также мы добавили макет списка изменений"),s(`
    Changelog`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/theme/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineClientConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/client"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Changelog "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./layouts/Changelog.vue"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Layout "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./layouts/Layout.vue"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineClientConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// Вы можете переопределить или добавить макеты здесь"),s(`
  `),n("span",{class:"token literal-property property"},"layouts"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Например, здесь мы меняем макет по умолчанию vuepress-theme-hope на layouts/Layout.vue под нашу собственную тему"),s(`
    Layout`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// Также мы добавили макет списка изменений"),s(`
    Changelog`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function f(w,_){const l=k("CodeTabs");return i(),u("div",null,[m,c(l,{id:"58",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:a,value:t,isActive:o})=>[v]),tab1:e(({title:a,value:t,isActive:o})=>[h]),_:1}),b,c(l,{id:"69",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:a,value:t,isActive:o})=>[y]),tab1:e(({title:a,value:t,isActive:o})=>[g]),_:1})])}const C=p(d,[["render",f],["__file","extend.html.vue"]]);export{C as default};
