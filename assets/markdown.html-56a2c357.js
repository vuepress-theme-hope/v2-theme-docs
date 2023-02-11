import{a4 as h,_ as r,$ as u,a2 as n,a3 as s,a0 as a,a1 as t,a5 as i,a7 as m,a8 as v,a6 as l,k as c,ad as g}from"./framework-bb5a5b49.js";const _={},b=n("h2",{id:"语法扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#语法扩展","aria-hidden":"true"},"#"),s(" 语法扩展")],-1),f={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},q=n("p",null,"本章节将会介绍 VuePress 内置支持的 Markdown 语法扩展。",-1),x={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown",target:"_blank",rel:"noopener noreferrer"},j={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#extendsmarkdown",target:"_blank",rel:"noopener noreferrer"},y=n("h3",{id:"内置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#内置","aria-hidden":"true"},"#"),s(" 内置")],-1),E=n("p",null,"由 markdown-it 内置支持:",-1),M={href:"https://help.github.com/articles/organizing-information-with-tables/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text",target:"_blank",rel:"noopener noreferrer"},V=n("h3",{id:"标题锚点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#标题锚点","aria-hidden":"true"},"#"),s(" 标题锚点")],-1),L=n("p",null,[s("你可能已经注意到，当你把鼠标放在各个章节的标题上时，会显示出一个 "),n("code",null,"#"),s(" 锚点。点击这个 "),n("code",null,"#"),s(" 锚点，可以直接跳转到对应章节。")],-1),T={class:"hint-container tip"},P=n("p",{class:"hint-container-title"},"提示",-1),R={href:"https://github.com/valeriangalliat/markdown-it-anchor",target:"_blank",rel:"noopener noreferrer"},A={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-anchor",target:"_blank",rel:"noopener noreferrer"},B=n("h3",{id:"链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#链接","aria-hidden":"true"},"#"),s(" 链接")],-1),C={href:"https://spec.commonmark.org/0.29/#link-reference-definitions",target:"_blank",rel:"noopener noreferrer"},D=l(`<p>以我们文档的源文件为例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└─ src
    └─ zh
       ├─ cookbook
       │  └─ vuepress
       │     ├─ markdown.md &lt;- 我们在这里
       │     └─ README.md
       ├─ guide
       │  └─ README.md
       ├─ contribution.md
       └─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原始 Markdown:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 相对路径 --&gt;</span>

<span class="token url">[<span class="token content">首页</span>](<span class="token url">../../README.md</span>)</span>  
<span class="token url">[<span class="token content">贡献指南</span>](<span class="token url">../../contribution.md</span>)</span>  
<span class="token url">[<span class="token content">VuePress 配置</span>](<span class="token url">./config.md</span>)</span>

<span class="token comment">&lt;!-- 绝对路径 --&gt;</span>

<span class="token url">[<span class="token content">指南</span>](<span class="token url">/zh/guide/README.md</span>)</span>  
<span class="token url">[<span class="token content">配置参考 &gt; 多语言</span>](<span class="token url">/zh/config/i18n.md</span>)</span>

<span class="token comment">&lt;!-- URL --&gt;</span>

<span class="token url">[<span class="token content">GitHub</span>](<span class="token url">https://github.com</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换为</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/v2/zh/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/v2/zh/contribution.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>贡献指南<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/v2/zh/cookbook/vuepress/config.html<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>VuePress 配置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span>
  <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/v2/zh/guide/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>指南<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/v2/zh/reference/config.html#links<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>配置参考 <span class="token entity named-entity" title="&gt;">&amp;gt;</span> 多语言<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span>
  <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://github.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>noopener noreferrer<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>GitHub<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span>
  <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染为</p>`,7),H=n("br",null,null,-1),F=n("br",null,null,-1),S=n("br",null,null,-1),N={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},U=n("p",null,"解释:",-1),O=n("li",null,[s("内部链接会被转换为 "),n("code",null,"<RouterLink>"),s(" 以便进行 SPA 导航。")],-1),G=n("code",null,".md",-1),I=n("li",null,[s("外部链接会被添加 "),n("code",null,'target="_blank" rel="noopener noreferrer"'),s(" 属性。")],-1),J=n("p",null,"建议:",-1),W=n("p",null,"对于内部链接，尽可能使用相对路径而不是绝对路径。",-1),$=n("li",null,"相对路径是指向目标文件的有效链接，在你的编辑器或者代码仓库中浏览源文件时也可以正确跳转。",-1),K=n("li",null,"相对路径在不同 locales 下都是一致的，这样在翻译你的内容时就不需要修改 locale 路径了。",-1),Q={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#base",target:"_blank",rel:"noopener noreferrer"},X=n("code",null,'"/"',-1),Y=n("code",null,"base",-1),Z={href:"https://v2.vuepress.vuejs.org/guide/assets.html#base-helper",target:"_blank",rel:"noopener noreferrer"},nn={class:"hint-container tip"},sn=n("p",{class:"hint-container-title"},"提示",-1),an=n("p",null,"链接扩展是由我们的内置插件支持的。",-1),en={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-links",target:"_blank",rel:"noopener noreferrer"},tn=n("h3",{id:"emoji",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#emoji","aria-hidden":"true"},"#"),s(" Emoji")],-1),on=n("p",null,[s("你可以在你的 Markdown 内容中输入 "),n("code",null,":EMOJICODE:"),s(" 来添加 Emoji 表情。")],-1),ln={href:"https://github.com/ikatyang/emoji-cheat-sheet",target:"_blank",rel:"noopener noreferrer"},pn=n("p",null,"输入:",-1),cn=n("div",{class:"language-markdown","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`VuePress 2 已经发布 :tada: ！
`)])],-1),rn=n("p",null,"输出:",-1),un=n("p",null,"VuePress 2 已经发布 🎉 ！",-1),dn={class:"hint-container tip"},kn=n("p",{class:"hint-container-title"},"提示",-1),hn={href:"https://github.com/markdown-it/markdown-it-emoji",target:"_blank",rel:"noopener noreferrer"},mn={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-emoji",target:"_blank",rel:"noopener noreferrer"},vn=n("h3",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),gn=n("p",null,[s("如果你想要把当前页面的目录添加到 Markdown 内容中，你可以使用 "),n("code",null,"[[toc]]"),s(" 语法。")],-1),_n=n("p",null,"输入:",-1),bn=n("div",{class:"language-markdown","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`[[toc]]
`)])],-1),fn=n("p",null,"输出:",-1),wn={class:"table-of-contents"},qn=n("p",null,[s("目录中的标题将会链接到对应的 "),n("a",{href:"#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9"},"标题锚点"),s("，因此如果你禁用了标题锚点，可能会影响目录的功能。")],-1),xn={class:"hint-container tip"},jn=n("p",{class:"hint-container-title"},"提示",-1),yn={href:"https://github.com/nagaozen/markdown-it-toc-done-right",target:"_blank",rel:"noopener noreferrer"},En={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-toc",target:"_blank",rel:"noopener noreferrer"},Mn=l(`<h3 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h3><p>下列代码块扩展是在 Node 端进行 Markdown 解析的时候实现的。这意味着代码块并不会在客户端被处理。</p><h4 id="行高亮" tabindex="-1"><a class="header-anchor" href="#行高亮" aria-hidden="true">#</a> 行高亮</h4><p>你可以在代码块添加行数范围标记，来为对应代码行进行高亮:</p><p>输入:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts {1,6-8}</span>
<span class="token code-block language-ts language-ts"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> UserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/cli&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/theme-default&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config<span class="token operator">:</span> UserConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&quot;你好， VuePress&quot;</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">&quot;https://vuejs.org/images/logo.png&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> UserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/cli&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/theme-default&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config<span class="token operator">:</span> UserConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&quot;你好， VuePress&quot;</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">&quot;https://vuejs.org/images/logo.png&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>行数范围标记的例子:</p><ul><li>行数范围: <code>{5-8}</code></li><li>多个单行: <code>{4,7,9}</code></li><li>组合: <code>{4,7-13,16,23-27,40}</code></li></ul>`,10),zn={class:"hint-container tip"},Vn=n("p",{class:"hint-container-title"},"提示",-1),Ln={href:"https://github.com/egoist/markdown-it-highlight-lines",target:"_blank",rel:"noopener noreferrer"},Tn={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-code-highlightlines",target:"_blank",rel:"noopener noreferrer"},Pn=l(`<h4 id="行号" tabindex="-1"><a class="header-anchor" href="#行号" aria-hidden="true">#</a> 行号</h4><p>你肯定已经注意到在代码块的最左侧会展示行号。这个功能是默认启用的，你可以通过配置来禁用它。</p><p>你可以在代码块添加 <code>:line-numbers</code> / <code>:no-line-numbers</code> 标记来覆盖配置项中的设置。</p><p>输入:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts language-ts"><span class="token comment">// 行号默认是启用的</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">&quot;This is line 2&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">&quot;This is line 3&quot;</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts:no-line-numbers</span>
<span class="token code-block language-ts language-ts"><span class="token comment">// 行号被禁用</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">&#39;This is line 2&#39;</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">&#39;This is line 3&#39;</span></span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 行号默认是启用的</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">&quot;This is line 2&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">&quot;This is line 3&quot;</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 行号被禁用</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">&#39;This is line 2&#39;</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">&#39;This is line 3&#39;</span>
</code></pre></div>`,8),Rn={class:"hint-container tip"},An=n("p",{class:"hint-container-title"},"提示",-1),Bn=n("p",null,"行号扩展是由我们的内置插件支持的。",-1),Cn={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-code-linenumbers",target:"_blank",rel:"noopener noreferrer"},Dn=n("h4",{id:"添加-v-pre",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#添加-v-pre","aria-hidden":"true"},"#"),s(" 添加 v-pre")],-1),Hn=n("p",null,[s("由于 "),n("a",{href:"#%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95"},"模板语法可以在 Markdown 中使用"),s("，它也同样可以在代码块中生效。")],-1),Fn={href:"https://v3.vuejs.org/api/directives.html#v-pre",target:"_blank",rel:"noopener noreferrer"},Sn=l(`<p>你可以在代码块添加 <code>:v-pre</code> / <code>:no-v-pre</code> 标记来覆盖配置项中的设置。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>模板语法的字符有可能会被语法高亮器解析，比如 &quot;Mustache&quot; 语法 (即双花括号) 。因此，就像下面的例子一样，在某些语言中 <code>:no-v-pre</code> 可能并不能生效。</p><p>如果你无论如何都想在这种语言中使用 Vue 语法，你可以尝试禁用默认的语法高亮，然后在客户端实现你的自定义代码高亮。</p></div><p>输入:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">md</span>
<span class="token code-block language-md language-md"><span class="token comment">&lt;!-- 默认情况下，这里会被保持原样 --&gt;</span>

1 + 2 + 3 = {{ 1 + 2 + 3 }}</span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">md:no-v-pre</span>
<span class="token code-block language-md language-md"><span class="token comment">&lt;!-- 这里会被 Vue 编译 --&gt;</span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}</span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js:no-v-pre</span>
<span class="token code-block language-js language-js"><span class="token comment">// 由于 JS 代码高亮，这里不会被正确编译</span>
<span class="token keyword">const</span> onePlusTwoPlusThree <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 默认情况下，这里会被保持原样 --&gt;</span>

1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre></div><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 这里会被 Vue 编译 --&gt;</span>
1 + 2 + 3 = 6
</code></pre></div>`,7),Nn=l(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 由于 JS 代码高亮，这里不会被正确编译</span>
<span class="token keyword">const</span> onePlusTwoPlusThree <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div>`,1),Un={class:"hint-container tip"},On=n("p",{class:"hint-container-title"},"提示",-1),Gn=n("p",null,"v-pre 扩展是由我们的内置插件支持的。",-1),In={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-vpre",target:"_blank",rel:"noopener noreferrer"},Jn=l(`<h3 id="导入代码块" tabindex="-1"><a class="header-anchor" href="#导入代码块" aria-hidden="true">#</a> 导入代码块</h3><p>你可以使用下面的语法，从文件中导入代码块:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 最简单的语法 --&gt;</span>

@<span class="token url">[<span class="token content">code</span>](<span class="token url">../foo.js</span>)</span>
</code></pre></div><p>如果你只想导入这个文件的一部分:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 仅导入第 1 行至第 10 行 --&gt;</span>

@<span class="token url">[<span class="token content">code{1-10}</span>](<span class="token url">../foo.js</span>)</span>
</code></pre></div><p>代码语言会根据文件扩展名进行推断，但我们建议你显式指定:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 指定代码语言 --&gt;</span>

@<span class="token url">[<span class="token content">code js</span>](<span class="token url">../foo.js</span>)</span>
</code></pre></div><p>实际上，<code>[]</code> 内的第二部分会被作为代码块标记来处理，因此在上面 <a href="#%E4%BB%A3%E7%A0%81%E5%9D%97">代码块</a> 章节中提到的语法在这里都可以支持:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 行高亮 --&gt;</span>

@<span class="token url">[<span class="token content">code js{2,4-5}</span>](<span class="token url">../foo.js</span>)</span>
</code></pre></div><p>下面是一个复杂的例子:</p><ul><li>导入 <code>&quot;../foo.js&quot;</code> 文件的第 3 行至第 10 行</li><li>指定语言为 <code>&quot;js&quot;</code></li><li>对导入代码的第 3 行进行高亮，即 <code>&quot;../foo.js&quot;</code> 文件的第 5 行</li><li>禁用行号</li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>@<span class="token url">[<span class="token content">code{3-10} js{3}:no-line-numbers</span>](<span class="token url">../foo.js</span>)</span>
</code></pre></div><p>需要注意的是，路径别名在导入代码语法中不会生效。你可以通过下面的配置来自行处理路径别名:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/utils&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">importCode</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">handleImportPath</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^@src</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;path/to/src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 会被解析至 &#39;path/to/src/foo.js&#39; --&gt;</span>

@<span class="token url">[<span class="token content">code</span>](<span class="token url">@src/foo.js</span>)</span>
</code></pre></div>`,15),Wn={class:"hint-container tip"},$n=n("p",{class:"hint-container-title"},"提示",-1),Kn=n("p",null,"导入代码扩展是由我们的内置插件支持的。",-1),Qn={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-importcode",target:"_blank",rel:"noopener noreferrer"},Xn=n("h2",{id:"在-markdown-中使用-vue",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#在-markdown-中使用-vue","aria-hidden":"true"},"#"),s(" 在 Markdown 中使用 Vue")],-1),Yn=n("p",null,"这一章节会介绍 Vue 在 Markdown 中一些基本用法。",-1),Zn={href:"https://v2.vuepress.vuejs.org/zh/advanced/cookbook/markdown-and-vue-sfc.html",target:"_blank",rel:"noopener noreferrer"},ns=n("h3",{id:"模板语法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#模板语法","aria-hidden":"true"},"#"),s(" 模板语法")],-1),ss=n("p",null,"我们知道:",-1),as=n("ul",null,[n("li",null,"Markdown 中允许使用 HTML。"),n("li",null,"Vue 模板语法是和 HTML 兼容的。")],-1),es={href:"https://v3.vuejs.org/guide/template-syntax.html",target:"_blank",rel:"noopener noreferrer"},ts=l(`<p>输入:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>一加一等于: {{ 1 + 1 }}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> span: {{ i }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>输出:</p><p>一加一等于: 2</p>`,4),os=l('<h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h3><p>你可以在 Markdown 中直接使用 Vue 组件。</p><p>输入:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>这是默认主题内置的 <span class="token code-snippet code keyword">`&lt;Badge /&gt;`</span> 组件 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>演示<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>输出:</p>',5),ls=n("code",null,"<Badge />",-1),ps={class:"hint-container tip"},cs=n("p",{class:"hint-container-title"},"提示",-1),is={href:"https://v2.vuepress.vuejs.org/zh/reference/components.html",target:"_blank",rel:"noopener noreferrer"},rs={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/components.html",target:"_blank",rel:"noopener noreferrer"},us=n("h2",{id:"注意事项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#注意事项","aria-hidden":"true"},"#"),s(" 注意事项")],-1),ds=n("h3",{id:"已废弃的-html-标签",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#已废弃的-html-标签","aria-hidden":"true"},"#"),s(" 已废弃的 HTML 标签")],-1),ks={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center",target:"_blank",rel:"noopener noreferrer"},hs={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font",target:"_blank",rel:"noopener noreferrer"},ms=n("p",null,"这些标签不会被 Vue 模板编译器识别成原生 HTML 标签。相反，Vue 会尝试将这些标签解析为 Vue 组件，而显然这些组件通常是不存在的。",-1),vs=n("p",null,"你应该尽量避免使用已废弃的 HTML 标签。不过，如果你无论如何都要使用这些标签的话，可以尝试下面两种方法之一:",-1),gs={href:"https://v3.cn.vuejs.org/api/directives.html#v-pre",target:"_blank",rel:"noopener noreferrer"},_s={href:"https://v3.vuejs.org/api/application-config.html#compileroptions",target:"_blank",rel:"noopener noreferrer"},bs=n("code",null,"@bundler-webpack",-1),fs={href:"https://v2.vuepress.vuejs.org/zh/reference/bundler/webpack.html#vue",target:"_blank",rel:"noopener noreferrer"},ws=n("code",null,"@bundler-vite",-1),qs={href:"https://v2.vuepress.vuejs.org/zh/reference/bundler/vite.html#vuepluginoptions",target:"_blank",rel:"noopener noreferrer"};function xs(js,ys){const e=c("ExternalLinkIcon"),p=c("RouterLink"),o=c("router-link"),d=c("Badge");return r(),u("div",null,[b,n("p",null,[s("VuePress 会使用 "),n("a",f,[s("markdown-it"),a(e)]),s(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),n("a",w,[s("语法扩展"),a(e)]),s(" 。")]),q,n("p",null,[s("你也可以通过 "),n("a",x,[s("markdown"),a(e)]),s(" 和 "),n("a",j,[s("extendsMarkdown"),a(e)]),s(" 来配置这些内置扩展、加载更多 markdown-it 插件、实现你自己的扩展等。")]),y,E,n("ul",null,[n("li",null,[n("a",M,[s("表格"),a(e)]),s(" (GFM)")]),n("li",null,[n("a",z,[s("删除线"),a(e)]),s(" (GFM)")])]),V,L,n("div",T,[P,n("p",null,[s("标题锚点扩展由 "),n("a",R,[s("markdown-it-anchor"),a(e)]),s(" 支持。")]),n("p",null,[s("配置参考: "),n("a",A,[s("markdown.anchor"),a(e)])])]),B,n("p",null,[s("在你使用 Markdown 的 "),n("a",C,[s("链接语法"),a(e)]),s(" 时， VuePress 会为你进行一些转换。")]),D,n("p",null,[a(p,{to:"/zh/"},{default:t(()=>[s("首页")]),_:1}),H,a(p,{to:"/zh/contribution.html"},{default:t(()=>[s("贡献指南")]),_:1}),F,a(p,{to:"/zh/cookbook/vuepress/config.html"},{default:t(()=>[s("VuePress 配置")]),_:1}),a(p,{to:"/guide/"},{default:t(()=>[s("指南")]),_:1}),S,a(p,{to:"/config/i18n.html"},{default:t(()=>[s("配置参考 > 多语言")]),_:1}),n("a",N,[s("GitHub"),a(e)])]),U,n("ul",null,[O,n("li",null,[s("指向 "),G,s(" 文件的内部链接会被转换为目标页面的 "),a(p,{to:"/zh/cookbook/vuepress/page.html#%E8%B7%AF%E7%94%B1"},{default:t(()=>[s("路由路径")]),_:1}),s("，并且支持绝对路径和相对路径。")]),I]),J,W,n("ul",null,[$,K,n("li",null,[s("在使用绝对路径时，如果你站点的 "),n("a",Q,[s("base"),a(e)]),s(" 不是 "),X,s("，你需要手动添加 "),Y,s(" 或者使用 "),n("a",Z,[s("base helper"),a(e)]),s(" 。")])]),n("div",nn,[sn,an,n("p",null,[s("配置参考: "),n("a",en,[s("markdown.links"),a(e)])])]),tn,on,n("p",null,[s("前往 "),n("a",ln,[s("emoji-cheat-sheet"),a(e)]),s(" 来查看所有可用的 Emoji 表情和对应代码。")]),pn,cn,rn,un,n("div",dn,[kn,n("p",null,[s("Emoji 扩展由 "),n("a",hn,[s("markdown-it-emoji"),a(e)]),s(" 支持。")]),n("p",null,[s("配置参考: "),n("a",mn,[s("markdown.emoji"),a(e)])])]),vn,gn,_n,bn,fn,n("nav",wn,[n("ul",null,[n("li",null,[a(o,{to:"#语法扩展"},{default:t(()=>[s("语法扩展")]),_:1}),n("ul",null,[n("li",null,[a(o,{to:"#内置"},{default:t(()=>[s("内置")]),_:1})]),n("li",null,[a(o,{to:"#标题锚点"},{default:t(()=>[s("标题锚点")]),_:1})]),n("li",null,[a(o,{to:"#链接"},{default:t(()=>[s("链接")]),_:1})]),n("li",null,[a(o,{to:"#emoji"},{default:t(()=>[s("Emoji")]),_:1})]),n("li",null,[a(o,{to:"#目录"},{default:t(()=>[s("目录")]),_:1})]),n("li",null,[a(o,{to:"#代码块"},{default:t(()=>[s("代码块")]),_:1})]),n("li",null,[a(o,{to:"#导入代码块"},{default:t(()=>[s("导入代码块")]),_:1})])])]),n("li",null,[a(o,{to:"#在-markdown-中使用-vue"},{default:t(()=>[s("在 Markdown 中使用 Vue")]),_:1}),n("ul",null,[n("li",null,[a(o,{to:"#模板语法"},{default:t(()=>[s("模板语法")]),_:1})]),n("li",null,[a(o,{to:"#组件"},{default:t(()=>[s("组件")]),_:1})])])]),n("li",null,[a(o,{to:"#注意事项"},{default:t(()=>[s("注意事项")]),_:1}),n("ul",null,[n("li",null,[a(o,{to:"#已废弃的-html-标签"},{default:t(()=>[s("已废弃的 HTML 标签")]),_:1})])])])])]),qn,n("div",xn,[jn,n("p",null,[s("目录扩展是由我们的内置插件支持的，该扩展 Fork 并修改自 "),n("a",yn,[s("markdown-it-toc-done-right"),a(e)]),s("。")]),n("p",null,[s("配置参考: "),n("a",En,[s("markdown.toc"),a(e)])])]),Mn,n("div",zn,[Vn,n("p",null,[s("行高亮扩展是由我们的内置插件支持的，该扩展 Fork 并修改自 "),n("a",Ln,[s("markdown-it-highlight-lines"),a(e)]),s("。")]),n("p",null,[s("配置参考: "),n("a",Tn,[s("markdown.code.highlightLines"),a(e)])])]),Pn,n("div",Rn,[An,Bn,n("p",null,[s("配置参考: "),n("a",Cn,[s("markdown.code.lineNumbers"),a(e)])])]),Dn,Hn,n("p",null,[s("为了避免你的代码块被 Vue 编译， VuePress 默认会在你的代码块添加 "),n("a",Fn,[s("v-pre"),a(e)]),s(" 指令。这一默认行为可以在配置中关闭。")]),Sn,i(`
在 JS 代码块上使用 :no-v-pre 的话，会在使用 shiki 时遇到一些潜在的问题，所以这里
我们实际上没有使用 :no-v-pre ，只是作为一个错误用法的示例。
`),Nn,n("div",Un,[On,Gn,n("p",null,[s("配置参考: "),n("a",In,[s("markdown.code.vPre"),a(e)])])]),Jn,n("div",Wn,[$n,Kn,n("p",null,[s("配置参考: "),n("a",Qn,[s("markdown.importCode"),a(e)])])]),Xn,Yn,n("p",null,[s("可以前往 "),n("a",Zn,[s("Cookbook > Markdown 和 Vue SFC"),a(e)]),s(" 来了解更多内容。")]),ns,ss,as,n("p",null,[s("这意味着， Markdown 中允许直接使用 "),n("a",es,[s("Vue 模板语法"),a(e)]),s("。")]),ts,i(" markdownlint-disable "),n("p",null,[(r(),u(m,null,v(3,k=>n("span",null," span: "+g(k),1)),64))]),i(" markdownlint-restore "),os,n("p",null,[s("这是默认主题内置的 "),ls,s(" 组件 "),a(d,{text:"演示"})]),n("div",ps,[cs,n("p",null,[s("前往 "),n("a",is,[s("内置组件"),a(e)]),s(" 查看所有内置组件。")]),n("p",null,[s("前往 "),n("a",rs,[s("默认主题 > 内置组件"),a(e)]),s(" 查看默认主题中的所有内置组件。")])]),us,ds,n("p",null,[s("已废弃的 HTML 标签默认不允许在 VuePress 的 Markdown 中使用，比如 "),n("a",ks,[s("<center>"),a(e)]),s(" 和 "),n("a",hs,[s("<font>"),a(e)]),s(" 等。")]),ms,vs,n("ul",null,[n("li",null,[s("添加一个 "),n("a",gs,[s("v-pre"),a(e)]),s(" 指令来跳过这个元素和它的子元素的编译过程。注意所有的模板语法也都会失效。")]),n("li",null,[s("设置 "),n("a",_s,[s("compilerOptions.isCustomElement"),a(e)]),s(" 来告诉 Vue 模板编译器不要尝试作为组件来解析它们。 "),n("ul",null,[n("li",null,[s("对于 "),bs,s(" ，设置 "),n("a",fs,[s("vue.compilerOptions"),a(e)])]),n("li",null,[s("对于 "),ws,s(" ，设置 "),n("a",qs,[s("vuePluginOptions.template.compilerOptions"),a(e)])])])])])])}const Ms=h(_,[["render",xs],["__file","markdown.html.vue"]]);export{Ms as default};
