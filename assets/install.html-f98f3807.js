import{_ as i,r as p,o as u,c as r,e as o,w as e,d as n,b as s,f as d}from"./app-c5a3c96d.js";const h={},k=s("h2",{id:"安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),n(" 安装")],-1),v=s("p",null,[n("在 "),s("code",null,"[dir]"),n(" 文件夹内新建 vuepress-theme-hope 项目:")],-1),m=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),n(" create vuepress-theme-hope "),s("span",{class:"token punctuation"},"["),n("dir"),s("span",{class:"token punctuation"},"]"),n(`
`)])])],-1),_=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),n(" create vuepress-theme-hope "),s("span",{class:"token punctuation"},"["),n("dir"),s("span",{class:"token punctuation"},"]"),n(`
`)])])],-1),g=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),n(" init vuepress-theme-hope "),s("span",{class:"token punctuation"},"["),n("dir"),s("span",{class:"token punctuation"},"]"),n(`
`)])])],-1),f=s("p",null,"要将 vuepress-theme-hope 作为文档构建器添加到现有项目中，请在项目根目录中运行以下命令:",-1),b=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),n(" create vuepress-theme-hope "),s("span",{class:"token function"},"add"),n(),s("span",{class:"token punctuation"},"["),n("dir"),s("span",{class:"token punctuation"},"]"),n(`
`)])])],-1),y=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),n(" create vuepress-theme-hope "),s("span",{class:"token function"},"add"),n(),s("span",{class:"token punctuation"},"["),n("dir"),s("span",{class:"token punctuation"},"]"),n(`
`)])])],-1),x=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),n(" init vuepress-theme-hope "),s("span",{class:"token function"},"add"),n(),s("span",{class:"token punctuation"},"["),n("dir"),s("span",{class:"token punctuation"},"]"),n(`
`)])])],-1),A=d('<div class="hint-container note"><p class="hint-container-title">注</p><p>这里的 <code>[dir]</code> 是一个参数，你需要使用真实的文件夹名称替换它，例如 <code>docs</code>、<code>blog</code> 或其他你喜欢的名称。</p></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>请在配置文件中导入并使用 <code>hopeTheme</code> 以使用 <code>vuepress-theme-hope</code>。</p>',3),w=s("div",{class:"language-typescript","data-ext":"ts"},[s("pre",{class:"language-typescript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.ts"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" defineUserConfig "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" hopeTheme "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress-theme-hope"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token function"},"defineUserConfig"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
  theme`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token function"},"hopeTheme"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token comment"},"// 此处放置主题配置"),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])])],-1),T=s("div",{class:"language-javascript","data-ext":"js"},[s("pre",{class:"language-javascript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.js"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" hopeTheme "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress-theme-hope"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token literal-property property"},"theme"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token function"},"hopeTheme"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token comment"},"// 此处放置主题配置"),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])])],-1),C={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/docs/theme/src/.vuepress/config.ts",target:"_blank",rel:"noopener noreferrer"};function S(j,N){const c=p("CodeTabs"),l=p("ExternalLinkIcon");return u(),r("div",null,[k,v,o(c,{id:"6",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>[n("pnpm")]),title1:e(({value:a,isActive:t})=>[n("yarn")]),title2:e(({value:a,isActive:t})=>[n("npm")]),tab0:e(({value:a,isActive:t})=>[m]),tab1:e(({value:a,isActive:t})=>[_]),tab2:e(({value:a,isActive:t})=>[g]),_:1}),f,o(c,{id:"20",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>[n("pnpm")]),title1:e(({value:a,isActive:t})=>[n("yarn")]),title2:e(({value:a,isActive:t})=>[n("npm")]),tab0:e(({value:a,isActive:t})=>[b]),tab1:e(({value:a,isActive:t})=>[y]),tab2:e(({value:a,isActive:t})=>[x]),_:1}),A,o(c,{id:"42",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:a,isActive:t})=>[n("TS")]),title1:e(({value:a,isActive:t})=>[n("JS")]),tab0:e(({value:a,isActive:t})=>[w]),tab1:e(({value:a,isActive:t})=>[T]),_:1}),s("p",null,[n("你可以查看 "),s("a",C,[n("本文档配置"),o(l)]),n(" 作为一个配置参考。")])])}const B=i(h,[["render",S],["__file","install.html.vue"]]);export{B as default};
