import{_ as d,r as p,o as r,c as h,a as i,b as n,d as e,e as a,w as s,f as o}from"./app-fe94cd90.js";const m={},k=n("p",null,"此教程指导你如何修改主题布局。",-1),v=n("h2",{id:"修改主题配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#修改主题配置","aria-hidden":"true"},"#"),e(" 修改主题配置")],-1),g=o(`<h2 id="响应式断点" tabindex="-1"><a class="header-anchor" href="#响应式断点" aria-hidden="true">#</a> 响应式断点</h2><p>主题在不同屏幕宽度下会自动响应式应用不同布局，如果你需要修改这些断点，可以在 配置文件中修改，</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/config.scss</span>

<span class="token comment">// 修改桌面布局的断点</span>
<span class="token variable">$pc</span> = 1280px<span class="token punctuation">;</span>
</code></pre></div>`,3),b=n("code",null,".vuepress/styles/config.scss",-1),y=n("code",null,"$pc",-1),_=n("code",null,"$laptop",-1),f=n("code",null,"$pad",-1),w=n("code",null,"$tablet",-1),C=n("code",null,"$mobile",-1),x=o(`<h2 id="布局尺寸" tabindex="-1"><a class="header-anchor" href="#布局尺寸" aria-hidden="true">#</a> 布局尺寸</h2><p>主题在调色板文件中提供了常见尺寸的变量，你可以在调色版文件中修改这些变量，以达到修改布局尺寸的目的。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/palette.scss</span>

<span class="token comment">// 修改导航栏高度</span>
<span class="token variable">$navbar-height</span> = 80px<span class="token punctuation">;</span>
</code></pre></div>`,3),L=n("code",null,".vuepress/styles/palette.scss",-1),S=o('<h2 id="通过样式文件" tabindex="-1"><a class="header-anchor" href="#通过样式文件" aria-hidden="true">#</a> 通过样式文件</h2><ul><li><p>如果你对主题的样式不满意，你可以通过样式文件对主题组件的样式进行调节。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>为了覆盖原有样式，你需要使用相同或更高优先级的选择器或者直接使用 <code>!important</code>。</p></div></li><li><p>如果你希望去掉一些功能，你可以在样式文件中通过 <code>display: none</code> 隐藏相关元素。</p></li></ul>',2),T={class:"hint-container note"},B=n("p",{class:"hint-container-title"},"注",-1),O=n("code",null,".vuepress/styles/index.scss",-1),$=n("h3",{id:"通过添加-覆盖布局",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#通过添加-覆盖布局","aria-hidden":"true"},"#"),e(" 通过添加/覆盖布局")],-1),A=n("p",null,"您可以通过客户端配置文件中的“layouts”选项添加新布局或覆盖现有布局。",-1),N=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/client.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" defineClientConfig "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"@vuepress/client"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(" Changelog "),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"./layouts/Changelog.vue"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(" Layout "),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"./layouts/Layout.vue"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineClientConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token comment"},"// 你可以在这里添加或覆盖布局"),e(`
  layouts`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"// 例如，在这里我们将 vuepress-theme-hope 的默认布局更改为 layouts/Layout.vue"),e(`
    Layout`),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token comment"},"// 我们还添加了一个 Changelog 布局"),e(`
    Changelog`),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/client.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" defineClientConfig "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"@vuepress/client"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(" Changelog "),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"./layouts/Changelog.vue"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(" Layout "),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"./layouts/Layout.vue"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineClientConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token comment"},"// 你可以在这里添加或覆盖布局"),e(`
  `),n("span",{class:"token literal-property property"},"layouts"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"// 例如，在这里我们将 vuepress-theme-hope 的默认布局更改为 layouts/Layout.vue"),e(`
    Layout`),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token comment"},"// 我们还添加了一个 Changelog 布局"),e(`
    Changelog`),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=o('<p>The theme provides the following layouts:</p><ul><li><p>Layout</p><p>Basic layout, having the following slots:</p><ul><li><code>default</code>: Page content slot</li><li><code>top</code>: Page top slot</li><li><code>bottom</code>: Page bottom slot</li><li><code>contentBefore</code>: Slot before page content</li><li><code>contentAfter</code>: Slot after page content</li><li><code>tocBefore</code>: Slot before page TOC</li><li><code>tocAfter</code>: Slot after page TOC</li></ul></li><li><p>NotFound</p><p>404 page layout, having the following slots:</p><ul><li><code>default</code>: 404 content slot</li></ul></li><li><p>Slide (Only available when presentation is enabled)</p></li><li><p>BlogCategory (Only available when blog is enabled)</p></li><li><p>BlogHome (Only available when blog is enabled)</p></li><li><p>BlogType (Only available when blog is enabled)</p></li><li><p>Timeline (Only available when blog is enabled)</p></li></ul><h3 id="通过覆盖组件" tabindex="-1"><a class="header-anchor" href="#通过覆盖组件" aria-hidden="true">#</a> 通过覆盖组件</h3>',3);function j(P,J){const t=p("RouterLink"),u=p("CodeTabs");return r(),h("div",null,[k,i(" more "),v,n("p",null,[e("主题提供了很多布局有关的选项，供你自定义主题的布局，关于这些选项详见 "),a(t,{to:"/zh/config/theme/layout.html"},{default:s(()=>[e("主题配置 → 布局")]),_:1}),e("。")]),g,n("p",null,[e("配置文件 "),b,e(" 以及断点变量 "),y,e("、"),_,e("、"),f,e("、"),w,e("、"),C,e(" 的具体介绍详见 "),a(t,{to:"/zh/config/style.html#configscss"},{default:s(()=>[e("主题配置 → 样式")]),_:1}),e("。")]),x,n("p",null,[e("调色板文件 "),L,e(" 以及布局变量的介绍详见 "),a(t,{to:"/zh/config/style.html#palettescss"},{default:s(()=>[e("主题配置 → 样式")]),_:1}),e("。")]),S,n("div",T,[B,n("p",null,[e("样式文件为项目目录下的 "),O,e("，详见 "),a(t,{to:"/zh/config/style.html#indexscss"},{default:s(()=>[e("主题配置 → 样式")]),_:1})])]),$,A,i(" #region layout "),a(u,{id:"62",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:s(({value:l,isActive:c})=>[e("TS")]),title1:s(({value:l,isActive:c})=>[e("JS")]),tab0:s(({value:l,isActive:c})=>[N]),tab1:s(({value:l,isActive:c})=>[z]),_:1}),i(" #endregion layout "),V,n("p",null,[e("请参见"),a(t,{to:"/zh/guide/advanced/replace.html"},{default:s(()=>[e("替换主题组件")]),_:1}),e(" 。")])])}const E=d(m,[["render",j],["__file","layout.html.vue"]]);export{E as default};
