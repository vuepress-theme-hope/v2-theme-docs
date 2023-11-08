import{_ as v,r as i,o as m,c as k,a as h,b as n,d as s,e as a,w as e,f as r}from"./app-14b9b2e5.js";const b={},g=n("p",null,"在你的 VuePress 站点中添加幻灯片。",-1),_=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),f={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},y=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` reveal.js
`)])])],-1),j=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` reveal.js
`)])])],-1),w=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` reveal.js
`)])])],-1),x=n("p",null,"之后启用它:",-1),J=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      mdEnhance`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        revealJs`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"mdEnhance"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"revealJs"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=r(`<h2 id="插件与主题" tabindex="-1"><a class="header-anchor" href="#插件与主题" aria-hidden="true">#</a> 插件与主题</h2><p><code>revealJs</code> 也接收一个配置对象，允许你控制导入的内置此插件和主题。</p><p>你可以通过将 <code>revealJs.plugins</code> 设置为插件名称数组来启用以下插件:</p><ul><li><code>highlight</code></li><li><code>math</code></li><li><code>search</code></li><li><code>notes</code></li><li><code>zoom</code></li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p>为了支持 Markdown 语法，我们总会启用 <code>markdown</code> 插件。</p></div><p>你也可以通过将 <code>revealJs.themes</code> 设置为主题名称数组来启用以下主题:</p><ul><li><code>auto</code> (默认)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul><p>默认情况下，只有 <code>auto</code> 主题被启用。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><ul><li>使用 <code>---</code> 分割幻灯片</li><li>使用 <code>--</code> 对幻灯片进行二次分割(垂直显示)</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@slidestart

<span class="token comment">&lt;!-- slide1 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide2 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide3 --&gt;</span>

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，我们使用 <code>auto</code> 主题来渲染幻灯片，你也可以通过 <code>@slidestart 主题名称</code> 使用其他主题。</p>`,12),R=n("h2",{id:"演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),s(" 演示")],-1),V=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`@slidestart

`),n("span",{class:"token title important"},[n("span",{class:"token punctuation"},"##"),s(" 幻灯片 1")]),s(`

一个有文字和 `),n("span",{class:"token url"},[s("["),n("span",{class:"token content"},"链接"),s("]("),n("span",{class:"token url"},"https://mister-hope.com"),s(")")]),s(` 的段落

`),n("span",{class:"token hr punctuation"},"---"),s(`

`),n("span",{class:"token title important"},[n("span",{class:"token punctuation"},"##"),s(" 幻灯片 2")]),s(`

`),n("span",{class:"token list punctuation"},"-"),s(` 项目 1
`),n("span",{class:"token list punctuation"},"-"),s(` 项目 2

`),n("span",{class:"token hr punctuation"},"---"),s(`

`),n("span",{class:"token title important"},[n("span",{class:"token punctuation"},"##"),s(" 幻灯片 3.1")]),s(`

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"js"),s(`
`),n("span",{class:"token code-block language-js language-js"},[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

--

`),n("span",{class:"token title important"},[n("span",{class:"token punctuation"},"##"),s(" 幻灯片 3.2")]),s(`

$$
J(\\theta_0,\\theta_1) = \\sum_{i=0}
$$

@slideend
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q={class:"hint-container tip"},T=n("p",{class:"hint-container-title"},"提示",-1),z=r(`<h2 id="自定义-reveal-js" tabindex="-1"><a class="header-anchor" href="#自定义-reveal-js" aria-hidden="true">#</a> 自定义 Reveal.js</h2><p>你也可以在客户端配置文件中导入并调用 <code>defineRevealJsConfig</code> 来自定义 reveal.js:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineRevealJsConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-md-enhance/client&quot;</span><span class="token punctuation">;</span>

<span class="token function">defineRevealJsConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 在此设置 reveal.js 选项</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),N={class:"hint-container note"},P=n("p",{class:"hint-container-title"},"注",-1),U={href:"https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"plugin",-1),B=n("code",null,"defineRevealJsConfig",-1),E=n("p",null,[s("你也可以在 Frontmatter 设置 "),n("code",null,"revealJs"),s(" 以设置特定页面的 reveal.js 选项。")],-1),L={href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"};function Q(D,G){const o=i("ExternalLinkIcon"),c=i("CodeTabs"),p=i("ProjectLink"),d=i("RevealJs"),u=i("MdDemo");return m(),k("div",null,[g,h(" more "),_,n("p",null,[s("在你的项目中安装 "),n("a",f,[s("Reveal.js"),a(o)]),s(":")]),a(c,{id:"11",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:e(({value:t,isActive:l})=>[s("pnpm")]),title1:e(({value:t,isActive:l})=>[s("yarn")]),title2:e(({value:t,isActive:l})=>[s("npm")]),tab0:e(({value:t,isActive:l})=>[y]),tab1:e(({value:t,isActive:l})=>[j]),tab2:e(({value:t,isActive:l})=>[w]),_:1}),x,a(c,{id:"26",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:t,isActive:l})=>[s("TS")]),title1:e(({value:t,isActive:l})=>[s("JS")]),tab0:e(({value:t,isActive:l})=>[J]),tab1:e(({value:t,isActive:l})=>[A]),_:1}),C,n("p",null,[s("各主题的外观，详见 "),a(p,{name:"md-enhance",path:"/zh/guide/revealjs/themes.html"},{default:e(()=>[s("幻灯片主题")]),_:1}),s("。")]),R,a(u,{title:"简单幻灯片演示",id:"md-demo-170"},{default:e(()=>[a(d,{id:"revealjs-171",code:"eJzjUlZWeLpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr5+bWVySWqSbkV+Qqpecn6up8HxWy7N1W19M2MvFpaury4VqqBFQUOHlwp3PZ68DWgBngoQx1BrrAZ2QkJCQVcyVnJ9XXKKQqGCrYGgNEgIpx1ANNERFhctLI6YkI7UkMd5AB8ow1ATqiykuzY2vzrQ1qAUpAgAALl2Z",theme:"auto"})]),code:e(()=>[V]),_:1}),n("div",q,[T,n("p",null,[s("详细与完整的演示详见 "),a(p,{name:"md-enhance",path:"/zh/guide/revealjs/demo.html"},{default:e(()=>[s("幻灯片演示")]),_:1}),s("。")])]),z,n("div",N,[P,n("p",null,[s("Reveal.js 还提供了"),n("a",U,[s("更多的插件"),a(o)]),s("，你可以通过 "),S,s(" 选项在 "),B,s(" 中添加它们。在 Node 一侧要求的内置插件将自动添加。")])]),E,n("p",null,[s("Reveal.js 选项，请参见"),n("a",L,[s("reveal.js config"),a(o)]),s("，Reveal.js 用法，请参阅 "),n("a",M,[s("reveal.js 文档"),a(o)]),s("。")])])}const I=v(b,[["render",Q],["__file","revealjs.html.vue"]]);export{I as default};
