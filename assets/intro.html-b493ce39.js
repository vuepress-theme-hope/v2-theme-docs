import{$ as p,U as r,a0 as d,X as n,a9 as s,Y as t,W as e,F as a}from"./framework-3a3055b3.js";const m={},k=n("h2",{id:"config-concepts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config-concepts","aria-hidden":"true"},"#"),s(" Config Concepts")],-1),h=n("p",null,[s("VuePress mainly stores config and required files through the "),n("code",null,".vuepress/"),s(" folder in the directory.")],-1),v={class:"hint-container info"},f=n("p",{class:"hint-container-title"},"Info",-1),b=n("p",null,"In VuePress, there are three config concepts:",-1),g=n("ul",null,[n("li",null,"Site Config: this is the object you export directly in the config file"),n("li",null,[s("Theme Config: first option passed to "),n("code",null,"hopeTheme"),s(" function")]),n("li",null,"Page Config: provided by Frontmatter at the top of the page based on YAML syntax")],-1),_=n("h2",{id:"theme-usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#theme-usage","aria-hidden":"true"},"#"),s(" Theme Usage")],-1),y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// siteConfig here"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`

  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// themeConfig here"),s(`
      `),n("span",{class:"token comment"},"// ..."),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// theme behavior options here (optional)"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// siteConfig here"),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`

  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// themeConfig here"),s(`
      `),n("span",{class:"token comment"},"// ..."),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// theme behavior options here (optional)"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function w(x,T){const o=a("RouterLink"),c=a("CodeTabs");return r(),d("div",null,[k,h,n("div",v,[f,n("p",null,[s("For the file structure of VuePress, see "),t(o,{to:"/cookbook/vuepress/file.html"},{default:e(()=>[s("VuePress Basics → File Structure")]),_:1}),s(".")])]),b,g,_,t(c,{id:"34",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:i,value:l,isActive:u})=>[y]),tab1:e(({title:i,value:l,isActive:u})=>[C]),_:1})])}const U=p(m,[["render",w],["__file","intro.html.vue"]]);export{U as default};
