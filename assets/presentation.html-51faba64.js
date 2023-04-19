import{$ as m,U as v,a0 as h,aa as k,Y as s,W as t,X as n,a9 as e,ab as o,F as i}from"./framework-3a3055b3.js";const b={},g=n("p",null,"Let the Markdown file in your VuePress site support presentation.",-1),_=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),e(" Config")],-1),f=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
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
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
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
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("code",null,"vuepress-plugin-md-enhance",-1),x={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},j=o('<p>You can also pass an object for configuration.</p><p><code>presentation.plugins</code> receives an array of strings, allowing you to freely config whether to enable some preset plugins.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Acceptable plugins are:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul></div><p>You can also use <code>presentation.revealConfig</code> set configuration options passed to Reveal.js globally.</p>',4),q={href:"https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/new?assignees=Mister-Hope&labels=enhancement&template=feature_request.md&title=%5BFeature+Request%5D",target:"_blank",rel:"noopener noreferrer"},T=o(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><ul><li>Use <code>---</code> to split slides</li><li>Use <code>--</code> to split the slides second time (vertical display)</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@slidestart [theme]

<span class="token comment">&lt;!-- slide1 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide2 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide3 --&gt;</span>

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Theme available(replace <code>[theme]</code> with them):</p><ul><li><code>auto</code> (Default)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul>`,5),C=n("h2",{id:"demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),e(" Demo")],-1),R=o(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@slidestart

<span class="token title important"><span class="token punctuation">##</span> Slide 1</span>

A paragraph with some text and a <span class="token url">[<span class="token content">link</span>](<span class="token url">https://mrhope.site</span>)</span>

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> Slide 2</span>

<span class="token list punctuation">-</span> Item 1
<span class="token list punctuation">-</span> Item 2

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> Slide 3.1</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

--

<span class="token title important"><span class="token punctuation">##</span> Slide 3.2</span>

$$
J(\\theta_0,\\theta_1) = \\sum_{i=0}
$$

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S={class:"hint-container info"},A=n("p",{class:"hint-container-title"},"Info",-1),M=n("h2",{id:"options",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),e(" Options")],-1),I=n("p",null,[e("You can set "),n("code",null,"reveal"),e(" to pass options to reveal.js per page in frontmatter, you can also set "),n("code",null,"presentation"),e(" in plugin options to set reveal.js globally.")],-1),P={href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"};function D(N,V){const c=i("CodeTabs"),a=i("ExternalLinkIcon"),l=i("ProjectLink"),r=i("Presentation");return v(),h("div",null,[g,k(" more "),_,s(c,{id:"7",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:t(({title:p,value:d,isActive:u})=>[f]),tab1:t(({title:p,value:d,isActive:u})=>[y]),_:1}),n("p",null,[w,e(" uses "),n("a",x,[e("reveal.js"),s(a)]),e(" to support this feature.")]),j,n("p",null,[e("Reveal.js also provides "),n("a",q,[e("more plugins"),s(a)]),e(". If you need a specific plugin, please submit a "),n("a",F,[e("Feature Request"),s(a)]),e(" on GitHub.")]),T,n("p",null,[e("For details, see "),s(l,{name:"md-enhance",path:"/guide/presentation/themes.html"},{default:t(()=>[e("Themes demo")]),_:1}),e(".")]),C,s(r,{id:"presentation-149",code:"eJxVjc0KwjAQhO/7FAvtoQX7pzelB4969WilDXYx0aYNyYqC+O4mUJDeho9vZiCK8DSonrAC2KMRVtysMBJfiiW6SRMyvRnF2KPA86DGxyWRzMZti0JbORnKnWJKAbIsg//c2gM8MGk/PIeAFs4m96dd190dXKfR+RessdoFFNSF6ctxDMekYUks2nI1hyr1ncY9dftRdfkN0g8aMTop",theme:"auto"}),R,n("div",S,[A,n("p",null,[e("For detailed demo, please see "),s(l,{name:"md-enhance",path:"/guide/presentation/demo.html"},{default:t(()=>[e("Presentation demo")]),_:1})])]),M,I,n("p",null,[e("For more options, see "),n("a",P,[e("reveal.js config"),s(a)]),e(". For more usage, see "),n("a",Y,[e("reveal.js documentation"),s(a)])])])}const K=m(b,[["render",D],["__file","presentation.html.vue"]]);export{K as default};
