import{_ as o,r as c,o as u,c as p,e as n,a as t,w as e,f as s,g as r}from"./app-d7067868.js";const d={},h=r('<h2 id="with-prism-js-highlighter" tabindex="-1"><a class="header-anchor" href="#with-prism-js-highlighter" aria-hidden="true">#</a> With Prism.js Highlighter</h2><p><code>vuepress-theme-hope</code> bundles <code>@vuepress/plugin-prismjs</code> to support code highlighting by default, and we allow you to set code block themes for lightmode and darkmode globally.</p><p>By default, we use <code>one-light</code> and <code>one-dark</code> for lightmode and darkmode respectively, and you can change them by setting <code>light</code> and <code>dark</code> in <code>plugin.prismjs</code>.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Due to output size consideration, we will not import all styles globally to support code theme config per code block.</p></div><h3 id="available-themes" tabindex="-1"><a class="header-anchor" href="#available-themes" aria-hidden="true">#</a> Available Themes</h3><div class="hint-container info"><p class="hint-container-title">Light themes</p><ul><li>ateliersulphurpool-light</li><li>coldark-cold</li><li>coy</li><li>duotone-light</li><li>ghcolors</li><li>gruvbox-light</li><li>material-light</li><li>one-light</li><li>vs</li></ul></div><div class="hint-container info"><p class="hint-container-title">Dark themes</p><ul><li>atom-dark</li><li>cb</li><li>coldark-dark</li><li>dark</li><li>dracula</li><li>duotone-dark</li><li>duotone-earth</li><li>duotone-forest</li><li>duotone-sea</li><li>duotone-space</li><li>gruvbox-dark</li><li>holi</li><li>hopscotch</li><li>lucario</li><li>material-dark</li><li>material-oceanic</li><li>night-owl</li><li>nord</li><li>one-dark</li><li>pojoaque</li><li>shades-of-purple</li><li>solarized-dark-atom</li><li>tomorrow</li><li>vsc-dark-plus</li><li>xonokai</li><li>z-touch</li></ul></div><h2 id="with-shiki-highlighter" tabindex="-1"><a class="header-anchor" href="#with-shiki-highlighter" aria-hidden="true">#</a> With Shiki Highlighter</h2><p>Prism.js is fast and lightweight, but it can not highlight all syntax correctly. If you want a more accurate highlight result, you can use <code>@vuepress/plugin-shiki</code>.</p>',9),k=n("li",null,[n("p",null,[s("Disable "),n("code",null,"@vuepress/plugin-prismjs"),s(" plugin by setting "),n("code",null,"plugins.prismjs: false"),s(" in theme options.")])],-1),g=n("p",null,"Install the plugin:",-1),m=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-shiki@next
`)])])],-1),v=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-shiki@next
`)])])],-1),b=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-shiki@next
`)])])],-1),f=n("p",null,"Import shiki plugin and use it:",-1),y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" shikiPlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/plugin-shiki"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"shikiPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// your options"),s(`
      theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"one-dark-pro"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" shikiPlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/plugin-shiki"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"shikiPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// your options"),s(`
      `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"one-dark-pro"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("li",null,[n("p",null,[s("Set background color and font color for code blocks according to theme you want to use by adding these variables in "),n("code",null,".vuepress/styles/config.scss"),s(":.")]),n("ul",null,[n("li",null,[n("code",null,"$code-bg-color"),s(": background color for code blocks")]),n("li",null,[n("code",null,"$code-color"),s(": font color for code blocks")])])],-1);function x(j,A){const l=c("CodeTabs");return u(),p("div",null,[h,n("ol",null,[k,n("li",null,[g,t(l,{id:"216",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:e(({value:a,isActive:i})=>[s("pnpm")]),title1:e(({value:a,isActive:i})=>[s("yarn")]),title2:e(({value:a,isActive:i})=>[s("npm")]),tab0:e(({value:a,isActive:i})=>[m]),tab1:e(({value:a,isActive:i})=>[v]),tab2:e(({value:a,isActive:i})=>[b]),_:1})]),n("li",null,[f,t(l,{id:"232",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:a,isActive:i})=>[s("TS")]),title1:e(({value:a,isActive:i})=>[s("JS")]),tab0:e(({value:a,isActive:i})=>[y]),tab1:e(({value:a,isActive:i})=>[_]),_:1})]),w])])}const S=o(d,[["render",x],["__file","code-theme.html.vue"]]);export{S as default};
