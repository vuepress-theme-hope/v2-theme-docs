import{a4 as v,_ as h,$ as k,a2 as n,a3 as e,a0 as s,a5 as c,a1 as t,a6 as l,k as i}from"./framework-bb5a5b49.js";const b={},g=n("p",null,"让你的 VuePress 站点中的 Markdown 文件支持幻灯片。",-1),_={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),e(" 配置")],-1),q=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  theme`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
    plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
      mdEnhance`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
        presentation`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token literal-property property"},"mdEnhance"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
        `),n("span",{class:"token literal-property property"},"presentation"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=l('<p>你也可以传入一个对象以进行更详细的配置。</p><p><code>presentation.plugins</code> 接收一个字符串数组，可以自由配置是否启用一些预设的插件。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>可接受的插件有:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul><!-- - `&quot;anything&quot;`\n- `&quot;audio&quot;`\n- `&quot;chalkboard&quot;` --></div><p>你还可以使用 <code>presentation.revealConfig</code> 来配置全局传递给 Reveal.js 的配置选项。</p>',4),j={href:"https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/new?assignees=Mister-Hope&labels=enhancement&template=feature_request.md&title=%5BFeature+Request%5D",target:"_blank",rel:"noopener noreferrer"},U=l(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><ul><li>使用 <code>---</code> 分割幻灯片</li><li>使用 <code>--</code> 对幻灯片进行二次分割(垂直显示)</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@slidestart [theme]

<span class="token comment">&lt;!-- slide1 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide2 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide3 --&gt;</span>

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前可用的主题(请使用它们直接替换 <code>[theme]</code>):</p><ul><li><code>auto</code> (默认)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul>`,5),C=n("h2",{id:"演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),e(" 演示")],-1),P=l(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@slidestart

<span class="token title important"><span class="token punctuation">##</span> 幻灯片 1</span>

一个有文字和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">https://mrhope.site</span>)</span> 的段落

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> 幻灯片 2</span>

<span class="token list punctuation">-</span> 项目 1
<span class="token list punctuation">-</span> 项目 2

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> 幻灯片 3.1</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

--

<span class="token title important"><span class="token punctuation">##</span> 幻灯片 3.2</span>

$$
J(\\theta_0,\\theta_1) = \\sum_{i=0}
$$

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),z={class:"hint-container tip"},V=n("p",{class:"hint-container-title"},"提示",-1),F=n("h2",{id:"选项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#选项","aria-hidden":"true"},"#"),e(" 选项")],-1),R=n("p",null,[e("你可以在 Frontmatter 设置 "),n("code",null,"reveal"),e(" 以设置特定页面的 reveal.js 选项，也可以在插件选项中设置 "),n("code",null,"presentation"),e(" 以全局设置 reveal.js。")],-1),T={href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"};function L(A,J){const a=i("ExternalLinkIcon"),r=i("CodeTabs"),o=i("ProjectLink"),p=i("Presentation");return h(),k("div",null,[g,n("p",null,[e("我们使用 "),n("a",_,[e("reveal.js"),s(a)]),e(" 来支持这一功能。")]),c(" more "),c("lint disable no-duplicate-headings"),f,s(r,{id:"11",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:t(({title:d,value:u,isActive:m})=>[q]),tab1:t(({title:d,value:u,isActive:m})=>[y]),_:1}),w,n("p",null,[e("Reveal.js 还提供了"),n("a",j,[e("更多的插件"),s(a)]),e("。如果你需要某个特定的插件，请在 GitHub 上提出 "),n("a",x,[e("Feature Request"),s(a)])]),U,n("p",null,[e("主题演示，请详见 "),s(o,{name:"md-enhance",path:"/zh/guide/presentation/themes.html"},{default:t(()=>[e("幻灯片主题")]),_:1}),e("。")]),C,s(p,{id:"presentation-151",code:"eJzjUlZWeLpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr59blJFfkKpXnFmSqqnwfFbLs3VbX0zYy8Wlq6vLhWqgEVBQ4eXCnc9nrwMaDmeChDHUGusBrU9ISMgq5krOzysuUUhUsFUwtAYJgZRjqAYaoqLC5aURU5KRWpIYb6ADZRhqAvXFFJfmxldn2hrUghQBAI9BXC0=",theme:"auto"}),P,n("div",z,[V,n("p",null,[e("详细与完整的演示详见 "),s(o,{name:"md-enhance",path:"/zh/guide/presentation/demo.html"},{default:t(()=>[e("幻灯片演示")]),_:1}),e("。")])]),F,R,n("p",null,[e("更多选项，请参见"),n("a",T,[e("reveal.js config"),s(a)]),e("，更多用法，请参阅 "),n("a",B,[e("reveal.js 文档"),s(a)]),e("。")])])}const G=v(b,[["render",L],["__file","presentation.html.vue"]]);export{G as default};
