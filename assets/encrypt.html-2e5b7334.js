import{_ as c,r as p,o as l,c as i,a as r,e as u,w as a,d as s,b as n,f as d}from"./app-c5a3c96d.js";const k={},m=n("p",null,"主题支持对特定文件夹或特定的路径进行加密，也支持进行全局范围的加密。",-1),v=n("div",{class:"hint-container danger"},[n("p",{class:"hint-container-title"},"警告"),n("p",null,"注意，受到 VuePress 的限制，在未解密前，文章内容仅仅被隐藏，访问者仍可以从源码中获取文章的内容。"),n("p",null,"所以请不要使用该加密功能用于任何敏感、机密的文章与档案，造成的后果请你自负。")],-1),h=n("h2",{id:"局部加密",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#局部加密","aria-hidden":"true"},"#"),s(" 局部加密")],-1),g=n("p",null,[s("你可以在主题选项中通过 "),n("code",null,"encrypt.config"),s(" 字段配置加密选项。")],-1),b=n("p",null,"字段的键名是路径，值支持填入一个或多个数组格式的密码。",-1),y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    encrypt`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      config`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 这会加密整个 guide 目录，并且两个密码都是可用的"),s(`
        `),n("span",{class:"token string-property property"},'"/guide/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"1234"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"5678"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 这只会加密 config/page.html"),s(`
        `),n("span",{class:"token string-property property"},'"/config/page.html"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1234"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"encrypt"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 这会加密整个 guide 目录，并且两个密码都是可用的"),s(`
        `),n("span",{class:"token string-property property"},'"/guide/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"1234"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"5678"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 这只会加密 config/page.html"),s(`
        `),n("span",{class:"token string-property property"},'"/config/page.html"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1234"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=d('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>请注意，你只能使用字符串格式的密码。</p><p>数字 <code>1234</code> 和 字符串 <code>&quot;1234&quot;</code> 的混淆值是不同的! 而网站只能通过输入框输入字符串格式的内容。</p></div><h2 id="全局加密" tabindex="-1"><a class="header-anchor" href="#全局加密" aria-hidden="true">#</a> 全局加密</h2><p>有些情况下，你可能想加密整个站点，你可以在主题选项中设置 <code>encrypt.global: true</code> 来实现它。</p><p>全局加密时，你可以在主题选项中通过 <code>encrypt.admin</code> 选项以字符串或字符串数组的格式设置一个或多个密码。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>多个密码的考虑是权限分离，这样你可以在日后部署中，废除或更新部分的全局密码，使得拥有密码的部分用户失去访问权限。</p></div>',5);function w(x,T){const o=p("CodeTabs");return l(),i("div",null,[m,v,r(" more "),h,g,b,u(o,{id:"21",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS")]),title1:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[y]),tab1:a(({value:e,isActive:t})=>[f]),_:1}),_])}const V=c(k,[["render",w],["__file","encrypt.html.vue"]]);export{V as default};
