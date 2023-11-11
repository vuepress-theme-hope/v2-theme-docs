import{g as k,r as i,o as g,c as m,a as b,b as n,d as e,e as s,w as a,l as v,f as p,C as h,D as w,_ as f}from"./app-a080876e.js";const _=n("p",null,"让你的 VuePress 站点中的 Markdown 文件支持流程图。",-1),x=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),e(" 配置")],-1),y={href:"http://flowchart.js.org/",target:"_blank",rel:"noopener noreferrer"},V=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token parameter variable"},"-D"),e(` flowchart.ts
`)])])],-1),q=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token parameter variable"},"-D"),e(` flowchart.ts
`)])])],-1),C=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(" i "),n("span",{class:"token parameter variable"},"-D"),e(` flowchart.ts
`)])])],-1),L=n("p",null,"之后启用它:",-1),T=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  theme`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
    plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
      mdEnhance`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
        flowchart`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token literal-property property"},"mdEnhance"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
        `),n("span",{class:"token literal-property property"},"flowchart"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=p(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- ↓ :preset 是可选的 --&gt;</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow:preset</span>
<span class="token code-block language-flow language-flow">
&lt;!-- 放置你的流程图代码 --&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div><p>目前可用的预设:</p><ul><li><code>vue</code> (默认)</li><li><code>ant</code></li><li><code>pie</code></li></ul><h2 id="在此尝试" tabindex="-1"><a class="header-anchor" href="#在此尝试" aria-hidden="true">#</a> 在此尝试</h2>`,5),N=n("h2",{id:"演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),e(" 演示")],-1),M=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"flow"),e(`
`),n("span",{class:"token code-block language-flow language-flow"},`st=>start: 开始|past:>http://www.google.com[blank]
e=>end: 结束|future:>http://www.google.com
op1=>operation: 操作1|past
op2=>operation: 操作2|current
sub1=>subroutine: 子程序|invalid
cond=>condition: 是/否?|approved:>http://www.google.com
c2=>condition: 判断2|rejected
io=>inputoutput: 进行反思...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e`),e(`
`),n("span",{class:"token punctuation"},"```")]),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"flow:ant"),e(`
`),n("span",{class:"token code-block language-flow language-flow"},`st=>start: 开始|past:>http://www.google.com[blank]
e=>end: 结束|future:>http://www.google.com
op1=>operation: 操作1|past
op2=>operation: 操作2|current
sub1=>subroutine: 子程序|invalid
cond=>condition: 是/否?|approved:>http://www.google.com
c2=>condition: 判断2|rejected
io=>inputoutput: 进行反思...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e`),e(`
`),n("span",{class:"token punctuation"},"```")]),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"flow:pie"),e(`
`),n("span",{class:"token code-block language-flow language-flow"},`st=>start: 开始|past:>http://www.google.com[blank]
e=>end: 结束|future:>http://www.google.com
op1=>operation: 操作1|past
op2=>operation: 操作2|current
sub1=>subroutine: 子程序|invalid
cond=>condition: 是/否?|approved:>http://www.google.com
c2=>condition: 判断2|rejected
io=>inputoutput: 进行反思...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e`),e(`
`),n("span",{class:"token punctuation"},"```")]),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("h2",{id:"流程图介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#流程图介绍","aria-hidden":"true"},"#"),e(" 流程图介绍")],-1),z=n("h3",{id:"节点类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#节点类型","aria-hidden":"true"},"#"),e(" 节点类型")],-1),J=n("p",null,"定义了结点形状",-1),P=n("ul",null,[n("li",null,[n("p",null,[n("code",null,"[Variable]->start: [Text]")]),n("p",null,[e("被用于流程开始的第一个节点。"),n("br"),e(" 默认文字为 "),n("code",null,"Start"),e(".")])]),n("li",null,[n("p",null,[n("code",null,"[Variable]->end: [Text]")]),n("p",null,[e("被用于流程结束的最后一个节点。"),n("br"),e(" 默认文字为 "),n("code",null,"End"),e(".")])])],-1),j=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token list punctuation"},"-"),e(),n("span",{class:"token code-snippet code keyword"},"`[Variable]->start: [Text]`"),e(`

  被用于流程开始的第一个节点。
  默认文字为 `),n("span",{class:"token code-snippet code keyword"},"`Start`"),e(`.

`),n("span",{class:"token list punctuation"},"-"),e(),n("span",{class:"token code-snippet code keyword"},"`[Variable]->end: [Text]`"),e(`

  被用于流程结束的最后一个节点。
  默认文字为 `),n("span",{class:"token code-snippet code keyword"},"`End`"),e(`.

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"flow"),e(`
`),n("span",{class:"token code-block language-flow language-flow"},`st=>start: 开始
e=>end: 结束

st->e`),e(`
`),n("span",{class:"token punctuation"},"```")]),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("ul",null,[n("li",null,[n("code",null,"[Variable]->operation: [Text]")])],-1),O=n("div",{class:"language-markdown","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token list punctuation"},"-"),e(),n("span",{class:"token code-snippet code keyword"},"`[Variable]->operation: [Text]`"),e(`

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"flow"),e(`
`),n("span",{class:"token code-block language-flow language-flow"},`process=>operation: 操作
e=>end: 结束

process->e`),e(`
`),n("span",{class:"token punctuation"},"```")]),e(`
`)])])],-1),X=n("ul",null,[n("li",null,[n("code",null,"[Variable]->inputoutput: [Text]")])],-1),Z=n("div",{class:"language-markdown","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token list punctuation"},"-"),e(),n("span",{class:"token code-snippet code keyword"},"`[Variable]->inputoutput: [Text]`"),e(`

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"flow"),e(`
`),n("span",{class:"token code-block language-flow language-flow"},`process=>inputoutput: 输入输出
e=>end: 结束

process->e`),e(`
`),n("span",{class:"token punctuation"},"```")]),e(`
`)])])],-1),D=n("ul",null,[n("li",null,[n("code",null,"[Variable]->subroutine: [Text]")])],-1),I=n("div",{class:"language-markdown","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token list punctuation"},"-"),e(),n("span",{class:"token code-snippet code keyword"},"`[Variable]->subroutine: [Text]`"),e(`

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"flow"),e(`
`),n("span",{class:"token code-block language-flow language-flow"},`process=>subroutine: 子程序
e=>end: 结束

process->e`),e(`
`),n("span",{class:"token punctuation"},"```")]),e(`
`)])])],-1),G=n("ul",null,[n("li",null,[n("p",null,[n("code",null,"[Variable]->condition: [Text]")])]),n("li",null,[n("p",null,[n("code",null,"[Variable]([yesText])->[Position]")])]),n("li",null,[n("p",null,[n("code",null,"[Variable]([noText])->[Position]")])])],-1),R=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token list punctuation"},"-"),e(),n("span",{class:"token code-snippet code keyword"},"`[Variable]->condition: [Text]`"),e(`

`),n("span",{class:"token list punctuation"},"-"),e(),n("span",{class:"token code-snippet code keyword"},"`[Variable]([yesText])->[Position]`"),e(`
`),n("span",{class:"token list punctuation"},"-"),e(),n("span",{class:"token code-snippet code keyword"},"`[Variable]([noText])->[Position]`"),e(`

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"flow"),e(`
`),n("span",{class:"token code-block language-flow language-flow"},`cond=>condition: 是否执行操作?
process=>operation: 操作
e=>end: 结束

cond(yes)->process->e
cond(no)->e`),e(`
`),n("span",{class:"token punctuation"},"```")]),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("p",null,"定义同时开始的多个程序。",-1),Y=n("ul",null,[n("li",null,[n("code",null,"[Variable]->parallel: [Text]")]),n("li",null,[n("code",null,"[Variable](path1, direction)->[Position]")]),n("li",null,[n("code",null,"[Variable](path1, direction)->[Position]")])],-1),H=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[e(`定义同时开始的多个程序。

`),n("span",{class:"token list punctuation"},"-"),e(),n("span",{class:"token code-snippet code keyword"},"`[Variable]->parallel: [Text]`"),e(`
`),n("span",{class:"token list punctuation"},"-"),e(),n("span",{class:"token code-snippet code keyword"},"`[Variable](path1, direction)->[Position]`"),e(`
`),n("span",{class:"token list punctuation"},"-"),e(),n("span",{class:"token code-snippet code keyword"},"`[Variable](path1, direction)->[Position]`"),e(`

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"flow"),e(`
`),n("span",{class:"token code-block language-flow language-flow"},`para=>parallel: 平行任务
process=>operation: 操作
e=>end: 结束

para(path1, bottom)->process->e
para(path2)->e`),e(`
`),n("span",{class:"token punctuation"},"```")]),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=p(`<h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h3><p>连接方式在流程图中节点定义后描述，使用 <code>-&gt;</code> 指定一个节点之间的链接，例如 <code>nodeVar1-&gt;nodeVar2-&gt;nodeVar3</code></p><p>流程可以被分开:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>nodeVar1-&gt;nodeVar2
nodeVar2-&gt;nodeVar3
</code></pre></div><p>连接格式定义如下:</p><p><code>&lt;node variable name&gt;[(&lt;specification1&gt;[, &lt;specification2])]-&gt;&lt;node variable name&gt;[[(&lt;specification1&gt;[, &lt;specification2])]-&gt;&lt;node variable name&gt;]</code></p><p>在 <code>[]</code> 中的项是可选的。</p><h3 id="方向" tabindex="-1"><a class="header-anchor" href="#方向" aria-hidden="true">#</a> 方向</h3><p>以下方向可用，并定义了连接将从节点离开的方向。如果指定符不止一个，则总是最后一个。所有节点都有默认方向，这使其成为可选规范。<code>&lt;direction&gt;</code> 的可选值为:</p><ul><li><code>left</code></li><li><code>right</code></li><li><code>top</code></li><li><code>bottom</code></li></ul><h3 id="节点特定说明符" tabindex="-1"><a class="header-anchor" href="#节点特定说明符" aria-hidden="true">#</a> 节点特定说明符</h3><p>每个节点变量都有可选的说明符，例如方向，有些变量有特殊的说明符，具体取决于下面定义的节点类型。在 <code>()</code> 中的变量名后添加说明符，并用<code>,</code> 分隔，例如 <code>nodeVar (spec1，spec2)</code>。</p><ul><li><p><strong>start</strong><br><strong>operation</strong><br><strong>inputoutput</strong><br><strong>subroutine</strong></p><p>可选方向</p><p><code>startVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>operationVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>inputoutputVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>subroutineVar(&lt;direction&gt;)-&gt;nextNode</code></p></li><li><p><strong>condition</strong></p><p>必需指定 <code>yes</code> or <code>no</code></p><p>可选方向</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>conditionalVar(yes, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode1
conditionalVar(no, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode2
</code></pre></div></li><li><p><strong>parallel</strong></p><p>必需指定路径方向 <code>path1</code>, <code>path2</code>, 或 <code>path3</code></p><p>可选方向</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>parallelVar(path1, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode1
parallelVar(path2, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode2
parallelVar(path3, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode3
</code></pre></div></li></ul><h3 id="网址" tabindex="-1"><a class="header-anchor" href="#网址" aria-hidden="true">#</a> 网址</h3><p>可以使用 <code>:&gt;</code> 运算符将外部链接添加到节点。</p><p><code>[blank]</code> 指定打开新的页面</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>st=&gt;start: Start:&gt;http://www.google.com[blank]
e=&gt;end: End:&gt;http://www.yahoo.com
</code></pre></div><h3 id="建议" tabindex="-1"><a class="header-anchor" href="#建议" aria-hidden="true">#</a> 建议</h3><p>文本中可能不应该使用的符号: <code>=&gt;</code>、<code>-&gt;</code>、 <code>:&gt;</code>、<code>|</code>、<code>@&gt;</code> 和 <code>:$</code></p><p>如果要在流程图中强调特定路径，则可以另外定义它，如下所示:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>st@&gt;op1({&quot;stroke&quot;:&quot;Red&quot;})@&gt;cond({&quot;stroke&quot;:&quot;Red&quot;,&quot;stroke-width&quot;:6,&quot;arrow-end&quot;:&quot;classic-wide-long&quot;})@&gt;c2({&quot;stroke&quot;:&quot;Red&quot;})@&gt;op2({&quot;stroke&quot;:&quot;Red&quot;})@&gt;e({&quot;stroke&quot;:&quot;Red&quot;})
</code></pre></div>`,21),W=k({__name:"flowchart.html",setup($){const r=h(()=>w(()=>import("./FlowChartPlayground-62612a0e.js"),["assets/FlowChartPlayground-62612a0e.js","assets/app-a080876e.js"]));return(nn,en)=>{const u=i("ExternalLinkIcon"),d=i("CodeTabs"),t=i("FlowChart"),o=i("MdDemo");return g(),m("div",null,[_,b(" more "),x,n("p",null,[e("在你的项目中安装 "),n("a",y,[e("flowchart.ts"),s(u)]),e(":")]),s(d,{id:"11",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:a(({value:l,isActive:c})=>[e("pnpm")]),title1:a(({value:l,isActive:c})=>[e("yarn")]),title2:a(({value:l,isActive:c})=>[e("npm")]),tab0:a(({value:l,isActive:c})=>[V]),tab1:a(({value:l,isActive:c})=>[q]),tab2:a(({value:l,isActive:c})=>[C]),_:1}),L,s(d,{id:"26",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:l,isActive:c})=>[e("TS")]),title1:a(({value:l,isActive:c})=>[e("JS")]),tab0:a(({value:l,isActive:c})=>[T]),tab1:a(({value:l,isActive:c})=>[U]),_:1}),A,s(v(r)),N,s(o,{title:"Vue 主题",id:"md-demo-67"},{default:a(()=>[s(t,{id:"flowchart-68",code:"eJx1UE1Lw0AQve+vyLGCSUiOgaw/RDykyTRdjbvLZtIg5NCjUEsLBRG0iCDqpXj3A/+MSfsznMQiHtrLwJuZN++9yTHkOUYGA6v+GNfPk0pHOQZ8iKgD1y3L0kmVSjNwYnV+3M8ieXbCIOQgk8Bavy+a5X01KLAwsIfDlPZCrjSYCIWSgdUspt+fd16nQ0N/x9Cv4sIYkMjyok9sqkYVKCSQy9V8/TKp32aVkKMoEwmLlUxC3laxPXLz6tbzp6Mq0tqoEST7rMUk/o9XXz421yu/MnAKMULChAq5kLpAEqcaWJuv283DVT2bNuOl4zjb5IzlaFMKr2dEOsQDuzva+epdQH5o/bX936ZUBNpovQwG7YC4ZKZdJiCUzaGF3Rp9qIU/mOynsw==",preset:"vue"})]),code:a(()=>[M]),_:1}),s(o,{title:"Ant 主题",id:"md-demo-71"},{default:a(()=>[s(t,{id:"flowchart-72",code:"eJx1UE1Lw0AQve+vyLGCSUiOgaw/RDykyTRdjbvLZtIg5NCjUEsLBRG0iCDqpXj3A/+MSfsznMQiHtrLwJuZN++9yTHkOUYGA6v+GNfPk0pHOQZ8iKgD1y3L0kmVSjNwYnV+3M8ieXbCIOQgk8Bavy+a5X01KLAwsIfDlPZCrjSYCIWSgdUspt+fd16nQ0N/x9Cv4sIYkMjyok9sqkYVKCSQy9V8/TKp32aVkKMoEwmLlUxC3laxPXLz6tbzp6Mq0tqoEST7rMUk/o9XXz421yu/MnAKMULChAq5kLpAEqcaWJuv283DVT2bNuOl4zjb5IzlaFMKr2dEOsQDuzva+epdQH5o/bX936ZUBNpovQwG7YC4ZKZdJiCUzaGF3Rp9qIU/mOynsw==",preset:"ant"})]),code:a(()=>[S]),_:1}),s(o,{title:"Pie 主题",id:"md-demo-75"},{default:a(()=>[s(t,{id:"flowchart-76",code:"eJx1UE1Lw0AQve+vyLGCSUiOgaw/RDykyTRdjbvLZtIg5NCjUEsLBRG0iCDqpXj3A/+MSfsznMQiHtrLwJuZN++9yTHkOUYGA6v+GNfPk0pHOQZ8iKgD1y3L0kmVSjNwYnV+3M8ieXbCIOQgk8Bavy+a5X01KLAwsIfDlPZCrjSYCIWSgdUspt+fd16nQ0N/x9Cv4sIYkMjyok9sqkYVKCSQy9V8/TKp32aVkKMoEwmLlUxC3laxPXLz6tbzp6Mq0tqoEST7rMUk/o9XXz421yu/MnAKMULChAq5kLpAEqcaWJuv283DVT2bNuOl4zjb5IzlaFMKr2dEOsQDuzva+epdQH5o/bX936ZUBNpovQwG7YC4ZKZdJiCUzaGF3Rp9qIU/mOynsw==",preset:"pie"})]),code:a(()=>[K]),_:1}),Q,z,J,s(o,{title:"开始 & 结束",id:"md-demo-88"},{default:a(()=>[P,s(t,{id:"flowchart-107",code:"eJwrLrG1Ky5JLCqxUni6p+Hp8m6uVFu71LwUK4Xnuyc/mzufi6u4RNculQsAZJUQyg==",preset:"vue"})]),code:a(()=>[j]),_:1}),s(o,{title:"操作",id:"md-demo-110"},{default:a(()=>[E,s(t,{id:"flowchart-118",code:"eJwrKMpPTi0utrXLL0gtSizJzM+zUng2uffJ3jlcqbZ2qXkpVgrPd09+Nnc+FxdUqa5dKhcAfbsWqA==",preset:"vue"})]),code:a(()=>[O]),_:1}),s(o,{title:"输入输出",id:"md-demo-121"},{default:a(()=>[X,s(t,{id:"flowchart-129",code:"eJwrKMpPTi0utrXLzCsoLckvLQGSVgov9k1+2roURLbv4kq1tUvNS7FSeL578rO587m4oFp07VK5AI5GHBw=",preset:"vue"})]),code:a(()=>[Z]),_:1}),s(o,{title:"子程序",id:"md-demo-132"},{default:a(()=>[D,s(t,{id:"flowchart-140",code:"eJwrKMpPTi0utrUrLk0qyi8tycxLtVJ4unbC8xXdT3f1c6Xa2qXmpVgpPN89+dnc+VxcUOW6dqlcAP5nGU4=",preset:"vue"})]),code:a(()=>[I]),_:1}),s(o,{title:"条件",id:"md-demo-143"},{default:a(()=>[G,s(t,{id:"flowchart-161",code:"eJxLzs9LsbUDkZklmfl5VgrPZqx/OmHZs87lLxb2PJvc+2TvHHuugqL85NTiYlu7/ILUokSoOrAcV6qtXWpeipXC892Tn82dz8UFMkmjMrVYU9cOqkvXLhUimpcPFEzlAgD7FTFE",preset:"vue"})]),code:a(()=>[R]),_:1}),s(o,{title:"平行",id:"md-demo-164"},{default:a(()=>[F,Y,s(t,{id:"flowchart-185",code:"eJwrSCxKtLUDkTk5qTlWCk93bn6xsOfJ7t1PuxZyFRTlJ6cWF9va5RekFiWWZObnWSk8m9z7ZO8crlRbu9S8FCuF57snP5s7n4sLZIJGQWJJhqGOQlJ+SUl+rqauHVS/rl0qQt4IKJ7KBQB5mDEV",preset:"vue"})]),code:a(()=>[H]),_:1}),B])}}}),sn=f(W,[["__file","flowchart.html.vue"]]);export{sn as default};
