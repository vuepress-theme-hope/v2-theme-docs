import{_ as i}from"./favicon-d825ebf3.js";import{_ as u,r as c,o as r,c as d,a as k,e,w as a,d as s,b as n,f as m}from"./app-fe94cd90.js";const v={},b=n("p",null,"你可以使用特殊标记为 Markdown 元素添加属性。",-1),g=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),h=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      mdEnhance`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        attrs`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"mdEnhance"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"attrs"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=m(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>你可以使用语法 <code>{attrs}</code> 来为 Markdown 元素添加属性。</p><p>比如，如果你想要一个 id 为 say-hello-world，文字为 Hello World 的二级标题，你可以使用:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> Hello World {#say-hello-world}</span>
</code></pre></div><p>如果你想要一个有 full-width Class 的图片，你可以使用:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">img</span>](<span class="token url">link/to/image.png</span>)</span> {.full-width}
</code></pre></div><p>同时也支持其他属性:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>一个包含文字的段落。 {#p .a .b align=center customize-attr=&quot;content with spaces&quot;}
</code></pre></div><p>会被渲染为:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a b<span class="token punctuation">&quot;</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">customize-attr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content with spaces<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  一个包含文字的段落。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="高级" tabindex="-1"><a class="header-anchor" href="#高级" aria-hidden="true">#</a> 高级</h2><p>你可以向 <code>attrs</code> 传递选项以自定义插件行为。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MarkdownItAttrRuleName</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&quot;fence&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;inline&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;table&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;list&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;hr&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;softbreak&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;block&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">MarkdownItAttrsOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 左分隔符
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">{</span>&#39;
   */</span>
  left<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 右分隔符
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">}</span>&#39;
   */</span>
  right<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 允许的属性
   *
   * <span class="token keyword">@description</span> 设置空数组意味着允许所有属性
   *
   * <span class="token keyword">@default</span> []
   */</span>
  allowed<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 启用的规则
   *
   * <span class="token keyword">@default</span> &quot;all&quot;
   */</span>
  rule<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span> <span class="token operator">|</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> MarkdownItAttrRuleName<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><blockquote><p>所有的 class 都使用 <code>margin: 4px;padding: 4px;border: 1px solid red;</code> 进行显示以展示效果。</p></blockquote>`,15),f=n("p",null,[s("包含 "),n("code",{class:"inline-code"},"行内代码"),s(" 和 "),n("img",{src:i,alt:"favicon",class:"image",loading:"lazy"}),s(" 的文字，也支持 "),n("em",{class:"inline-emphasis"},"强调"),s(" 和 "),n("strong",{class:"inline-bold"},"加粗"),s("。")],-1),y=n("div",{class:"language-markdown","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s("包含 "),n("span",{class:"token code-snippet code keyword"},"`行内代码`"),s("{.inline-code} 和 "),n("span",{class:"token url"},[n("span",{class:"token operator"},"!"),s("["),n("span",{class:"token content"},"favicon"),s("]("),n("span",{class:"token url"},"/favicon.ico"),s(")")]),s("{.image} 的文字，也支持 "),n("span",{class:"token italic"},[n("span",{class:"token punctuation"},"_"),n("span",{class:"token content"},"强调"),n("span",{class:"token punctuation"},"_")]),s("{.inline-emphasis} 和 "),n("span",{class:"token bold"},[n("span",{class:"token punctuation"},"**"),n("span",{class:"token content"},"加粗"),n("span",{class:"token punctuation"},"**")]),s(`{.inline-bold}。
`)])])],-1),q=n("p",{class:"block"},"块级元素",-1),x=n("div",{class:"language-markdown","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`块级元素 {.block}
`)])],-1),j=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"fence language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),T=n("div",{class:"language-markdown","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"js {.fence}"),s(`
`),n("span",{class:"token code-block language-js"},[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`
`)])])],-1),C=n("table",{class:"md-table"},[n("thead",null,[n("tr",null,[n("th",null,"表格")])]),n("tbody",null,[n("tr",null,[n("td",null,"内容")])])],-1),A=n("div",{class:"language-markdown","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`| 表格 |
| ---- |
| 内容 |

{.md-table}
`)])],-1),M=n("ul",{class:"list-wrapper"},[n("li",{class:"list-item"},[n("p",null,"列表内容"),n("ul",{class:"nested"},[n("li",null,"嵌套列表内容")])])],-1),N=n("div",{class:"language-markdown","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token list punctuation"},"-"),s(` 列表内容{.list-item}

  `),n("span",{class:"token list punctuation"},"-"),s(` 嵌套列表内容
    {.nested}

{.list-wrapper}
`)])])],-1),z=n("hr",{class:"horizontal"},null,-1),S=n("div",{class:"language-markdown","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`--- {.horizontal}
`)])],-1),V=n("p",{class:"break"},[s("一行换行的文字"),n("br")],-1),E=n("div",{class:"language-markdown","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`一行换行的文字  
{.break}
`)])],-1);function B(I,R){const p=c("CodeTabs"),t=c("MdDemo");return r(),d("div",null,[b,k(" more "),g,e(p,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:o,isActive:l})=>[s("TS")]),title1:a(({value:o,isActive:l})=>[s("JS")]),tab0:a(({value:o,isActive:l})=>[h]),tab1:a(({value:o,isActive:l})=>[_]),_:1}),w,e(t,{title:"行内元素",id:"md-demo-53"},{default:a(()=>[f]),code:a(()=>[y]),_:1}),e(t,{title:"块级元素",id:"md-demo-59"},{default:a(()=>[q]),code:a(()=>[x]),_:1}),e(t,{title:"代码块",id:"md-demo-65"},{default:a(()=>[j]),code:a(()=>[T]),_:1}),e(t,{title:"表格",id:"md-demo-69"},{default:a(()=>[C]),code:a(()=>[A]),_:1}),e(t,{title:"列表",id:"md-demo-88"},{default:a(()=>[M]),code:a(()=>[N]),_:1}),e(t,{title:"水平线",id:"md-demo-105"},{default:a(()=>[z]),code:a(()=>[S]),_:1}),e(t,{title:"换行",id:"md-demo-109"},{default:a(()=>[V]),code:a(()=>[E]),_:1})])}const J=u(v,[["render",B],["__file","attrs.html.vue"]]);export{J as default};
