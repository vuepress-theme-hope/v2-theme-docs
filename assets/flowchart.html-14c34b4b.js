import{g as m,r as c,o as h,c as b,a as g,b as e,d as n,e as s,w as a,l as k,f as r,C as v,D as w,_ as f}from"./app-fe94cd90.js";const _=e("p",null,"Let the Markdown file support flow chart in your VuePress site.",-1),y=e("h2",{id:"settings",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#settings","aria-hidden":"true"},"#"),n(" Settings")],-1),x={href:"http://flowchart.js.org/",target:"_blank",rel:"noopener noreferrer"},V=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),n(),e("span",{class:"token function"},"add"),n(),e("span",{class:"token parameter variable"},"-D"),n(` flowchart.ts
`)])])],-1),q=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),n(),e("span",{class:"token function"},"add"),n(),e("span",{class:"token parameter variable"},"-D"),n(` flowchart.ts
`)])])],-1),S=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),n(" i "),e("span",{class:"token parameter variable"},"-D"),n(` flowchart.ts
`)])])],-1),T=e("p",null,"Then enabling via:",-1),C=e("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[e("pre",{ts:"",class:"language-typescript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.ts"),n(`
`),e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" defineUserConfig "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"vuepress"'),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" hopeTheme "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"vuepress-theme-hope"'),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token keyword"},"export"),n(),e("span",{class:"token keyword"},"default"),n(),e("span",{class:"token function"},"defineUserConfig"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),n(`
  theme`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token function"},"hopeTheme"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),n(`
    plugins`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"{"),n(`
      mdEnhance`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"{"),n(`
        flowchart`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),n(`
      `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
    `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),E=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{js:"",class:"language-javascript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.js"),n(`
`),e("span",{class:"token keyword"},"import"),n(),e("span",{class:"token punctuation"},"{"),n(" hopeTheme "),e("span",{class:"token punctuation"},"}"),n(),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},'"vuepress-theme-hope"'),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token keyword"},"export"),n(),e("span",{class:"token keyword"},"default"),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token literal-property property"},"theme"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token function"},"hopeTheme"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),n(`
    `),e("span",{class:"token literal-property property"},"plugins"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"{"),n(`
      `),e("span",{class:"token literal-property property"},"mdEnhance"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"{"),n(`
        `),e("span",{class:"token literal-property property"},"flowchart"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),n(`
      `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
    `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),A=r(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- ↓ :preset is optional --&gt;</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">flow:preset</span>
<span class="token code-block language-flow language-flow">
&lt;!-- Your flowchart code here. --&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div><p>Available presets for now:</p><ul><li><code>vue</code> (default)</li><li><code>ant</code></li><li><code>pie</code></li></ul><h2 id="playground" tabindex="-1"><a class="header-anchor" href="#playground" aria-hidden="true">#</a> Playground</h2>`,5),I=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),n(" Demo")],-1),N=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[e("span",{class:"token code"},[e("span",{class:"token punctuation"},"```"),e("span",{class:"token code-language"},"flow"),n(`
`),e("span",{class:"token code-block language-flow language-flow"},`st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e`),n(`
`),e("span",{class:"token punctuation"},"```")]),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),R=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[e("span",{class:"token code"},[e("span",{class:"token punctuation"},"```"),e("span",{class:"token code-language"},"flow:ant"),n(`
`),e("span",{class:"token code-block language-flow language-flow"},`st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e`),n(`
`),e("span",{class:"token punctuation"},"```")]),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),J=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[e("span",{class:"token code"},[e("span",{class:"token punctuation"},"```"),e("span",{class:"token code-language"},"flow:pie"),n(`
`),e("span",{class:"token code-block language-flow language-flow"},`st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e`),n(`
`),e("span",{class:"token punctuation"},"```")]),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),P=e("h2",{id:"flowchart-intro",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flowchart-intro","aria-hidden":"true"},"#"),n(" Flowchart Intro")],-1),U=e("h3",{id:"node-types",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#node-types","aria-hidden":"true"},"#"),n(" Node Types")],-1),j=e("p",null,"Defines the shape that the node will take.",-1),L=e("ul",null,[e("li",null,[e("p",null,[e("code",null,"[Variable]->start: [Text]")]),e("p",null,[n("Used as the first node where flows start from."),e("br"),n(" Default text is "),e("code",null,"Start"),n(".")])]),e("li",null,[e("p",null,[e("code",null,"[Variable]->end: [Text]")]),e("p",null,[n("Used as the last node where a flow ends."),e("br"),n(" Default text is "),e("code",null,"End"),n(".")])])],-1),K=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[e("span",{class:"token list punctuation"},"-"),n(),e("span",{class:"token code-snippet code keyword"},"`[Variable]->start: [Text]`"),n(`

  Used as the first node where flows start from.
  Default text is `),e("span",{class:"token code-snippet code keyword"},"`Start`"),n(`.

`),e("span",{class:"token list punctuation"},"-"),n(),e("span",{class:"token code-snippet code keyword"},"`[Variable]->end: [Text]`"),n(`

  Used as the last node where a flow ends.
  Default text is `),e("span",{class:"token code-snippet code keyword"},"`End`"),n(`.

`),e("span",{class:"token code"},[e("span",{class:"token punctuation"},"```"),e("span",{class:"token code-language"},"flow"),n(`
`),e("span",{class:"token code-block language-flow language-flow"},`st=>start: Start
e=>end: End

st->e`),n(`
`),e("span",{class:"token punctuation"},"```")]),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),O=e("p",null,"Indicates that an operation needs to happen in the flow.",-1),F=e("ul",null,[e("li",null,[e("code",null,"[Variable]->operation: [Text]")])],-1),Y=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[n(`Indicates that an operation needs to happen in the flow.

`),e("span",{class:"token list punctuation"},"-"),n(),e("span",{class:"token code-snippet code keyword"},"`[Variable]->operation: [Text]`"),n(`

`),e("span",{class:"token code"},[e("span",{class:"token punctuation"},"```"),e("span",{class:"token code-language"},"flow"),n(`
`),e("span",{class:"token code-block language-flow language-flow"},`process=>operation: Operation
e=>end: End

process->e`),n(`
`),e("span",{class:"token punctuation"},"```")]),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),D=e("p",null,"Indicates that IO happens in a flow.",-1),M=e("ul",null,[e("li",null,[e("code",null,"[Variable]->inputoutput: [Text]")])],-1),Q=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[n(`Indicates that IO happens in a flow.

`),e("span",{class:"token list punctuation"},"-"),n(),e("span",{class:"token code-snippet code keyword"},"`[Variable]->inputoutput: [Text]`"),n(`

`),e("span",{class:"token code"},[e("span",{class:"token punctuation"},"```"),e("span",{class:"token code-language"},"flow"),n(`
`),e("span",{class:"token code-block language-flow language-flow"},`process=>inputoutput: Inputoutput
e=>end: End

process->e`),n(`
`),e("span",{class:"token punctuation"},"```")]),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Z=e("p",null,"Indicates that a subroutine happens in the flow and that there should be another flowchart that documents this subroutine.",-1),z=e("ul",null,[e("li",null,[e("code",null,"[Variable]->subroutine: [Text]")])],-1),H=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[n(`Indicates that a subroutine happens in the flow and that there should be another flowchart that documents this subroutine.

`),e("span",{class:"token list punctuation"},"-"),n(),e("span",{class:"token code-snippet code keyword"},"`[Variable]->subroutine: [Text]`"),n(`

`),e("span",{class:"token code"},[e("span",{class:"token punctuation"},"```"),e("span",{class:"token code-language"},"flow"),n(`
`),e("span",{class:"token code-block language-flow language-flow"},`process=>subroutine: Subroutine
e=>end: End

process->e`),n(`
`),e("span",{class:"token punctuation"},"```")]),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),X=e("p",null,"Allows for a conditional or logical statement to direct the flow into one of two or more paths.",-1),W=e("ul",null,[e("li",null,[e("p",null,[e("code",null,"[Variable]->condition: [Text]")])]),e("li",null,[e("p",null,[e("code",null,"[Variable]([yesText])->[Position]")])]),e("li",null,[e("p",null,[e("code",null,"[Variable]([noText])->[Position]")])])],-1),B=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[n(`Allows for a conditional or logical statement to direct the flow into one of two or more paths.

`),e("span",{class:"token list punctuation"},"-"),n(),e("span",{class:"token code-snippet code keyword"},"`[Variable]->condition: [Text]`"),n(`

`),e("span",{class:"token list punctuation"},"-"),n(),e("span",{class:"token code-snippet code keyword"},"`[Variable]([yesText])->[Position]`"),n(`
`),e("span",{class:"token list punctuation"},"-"),n(),e("span",{class:"token code-snippet code keyword"},"`[Variable]([noText])->[Position]`"),n(`

`),e("span",{class:"token code"},[e("span",{class:"token punctuation"},"```"),e("span",{class:"token code-language"},"flow"),n(`
`),e("span",{class:"token code-block language-flow language-flow"},`cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e`),n(`
`),e("span",{class:"token punctuation"},"```")]),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),G=e("p",null,"Allows for multiple flows to happen simultaneously.",-1),$=e("ul",null,[e("li",null,[e("code",null,"[Variable]->parallel: [Text]")]),e("li",null,[e("code",null,"[Variable](path1, direction)->[Position]")]),e("li",null,[e("code",null,"[Variable](path1, direction)->[Position]")])],-1),ee=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[n(`Allows for multiple flows to happen simultaneously.

`),e("span",{class:"token list punctuation"},"-"),n(),e("span",{class:"token code-snippet code keyword"},"`[Variable]->parallel: [Text]`"),n(`
`),e("span",{class:"token list punctuation"},"-"),n(),e("span",{class:"token code-snippet code keyword"},"`[Variable](path1, direction)->[Position]`"),n(`
`),e("span",{class:"token list punctuation"},"-"),n(),e("span",{class:"token code-snippet code keyword"},"`[Variable](path1, direction)->[Position]`"),n(`

`),e("span",{class:"token code"},[e("span",{class:"token punctuation"},"```"),e("span",{class:"token code-language"},"flow"),n(`
`),e("span",{class:"token code-block language-flow language-flow"},`para=>parallel: parallel tasks
process=>operation: Process
e=>end: End

para(path1, bottom)->process->e
para(path2)->e`),n(`
`),e("span",{class:"token punctuation"},"```")]),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ne=r(`<h2 id="connections" tabindex="-1"><a class="header-anchor" href="#connections" aria-hidden="true">#</a> Connections</h2><p>Connections are defined in their own section below the node definitions.</p><p>The <code>-&gt;</code> operator specifies a connection from one node to another like <code>nodeVar1-&gt;nodeVar2-&gt;nodeVar3</code>.</p><p>Not all nodes need to be specified in one string and can be separated like so</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>nodeVar1-&gt;nodeVar2
nodeVar2-&gt;nodeVar3
</code></pre></div><p>Connection syntax is as follows:</p><p><code>&lt;node variable name&gt;[(&lt;specification1&gt;[, &lt;specification2])]-&gt;&lt;node variable name&gt;[[(&lt;specification1&gt;[, &lt;specification2])]-&gt;&lt;node variable name&gt;]</code></p><p>Items in <code>[]</code> are optional.</p><h3 id="directions" tabindex="-1"><a class="header-anchor" href="#directions" aria-hidden="true">#</a> Directions</h3><p>The following directions are available and define the direction the connection will leave the node from. If there are more than one specifier, it is always the last. All nodes have a default direction making this an optional specification. <code>&lt;direction&gt;</code> will be used and one of the below list should be used in its place.</p><ul><li><code>left</code></li><li><code>right</code></li><li><code>top</code></li><li><code>bottom</code></li></ul><h3 id="node-specific-specifiers-by-type" tabindex="-1"><a class="header-anchor" href="#node-specific-specifiers-by-type" aria-hidden="true">#</a> Node Specific Specifiers by Type</h3><p>Each node variable has optional specifiers, like direction, and some have special specifiers depending on the node type that are defined below. Specifiers are added after the variable name in <code>()</code> and separated with <code>,</code> like <code>nodeVar(spec1, spec2)</code>.</p><ul><li><p><strong>start</strong><br><strong>operation</strong><br><strong>inputoutput</strong><br><strong>subroutine</strong></p><p>Optional direction</p><p><code>startVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>operationVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>inputoutputVar(&lt;direction&gt;)-&gt;nextNode</code></p><p><code>subroutineVar(&lt;direction&gt;)-&gt;nextNode</code></p></li><li><p><strong>condition</strong></p><p>Required logical specification of <code>yes</code> or <code>no</code></p><p>Optional direction</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>conditionalVar(yes, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode1
conditionalVar(no, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode2
</code></pre></div></li><li><p><strong>parallel</strong></p><p>Required path specification of <code>path1</code>, <code>path2</code>, or <code>path3</code></p><p>Optional direction</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>parallelVar(path1, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode1
parallelVar(path2, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode2
parallelVar(path3, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>direction</span><span class="token punctuation">&gt;</span></span>)-&gt;nextNode3
</code></pre></div></li></ul><h3 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> Links</h3><p>An external link can be added to a node with the <code>:&gt;</code> operator.</p><p>The <code>st</code> node is linked with <code>http://www.google.com</code> and will open a new tab because <code>[blank]</code> is at the end of the URL.</p><p>The <code>e</code> node is linked with <code>http://www.yahoo.com</code> and will cause the page to navigate to that page instead of opening a new tab.</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>st=&gt;start: Start:&gt;http://www.google.com[blank]
e=&gt;end: End:&gt;http://www.yahoo.com
</code></pre></div><h2 id="advice" tabindex="-1"><a class="header-anchor" href="#advice" aria-hidden="true">#</a> Advice</h2><p>Symbols that should possibly not be used in the text: <code>=&gt;</code> and <code>-&gt;</code> and <code>:&gt;</code> and <code>|</code> and <code>@&gt;</code> and <code>:$</code></p><p>To emphasize a specific path in your flowchart, you can define it like this:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>st@&gt;op1({&quot;stroke&quot;:&quot;Red&quot;})@&gt;cond({&quot;stroke&quot;:&quot;Red&quot;,&quot;stroke-width&quot;:6,&quot;arrow-end&quot;:&quot;classic-wide-long&quot;})@&gt;c2({&quot;stroke&quot;:&quot;Red&quot;})@&gt;op2({&quot;stroke&quot;:&quot;Red&quot;})@&gt;e({&quot;stroke&quot;:&quot;Red&quot;})
</code></pre></div>`,23),ae=m({__name:"flowchart.html",setup(se){const u=v(()=>w(()=>import("./FlowChartPlayground-25500d33.js"),["assets/FlowChartPlayground-25500d33.js","assets/app-fe94cd90.js"]));return(te,oe)=>{const p=c("ExternalLinkIcon"),d=c("CodeTabs"),t=c("FlowChart"),o=c("MdDemo");return h(),b("div",null,[_,g(" more "),y,e("p",null,[n("Install "),e("a",x,[n("flowchart.ts"),s(p)]),n(" in your project:")]),s(d,{id:"11",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:a(({value:l,isActive:i})=>[n("pnpm")]),title1:a(({value:l,isActive:i})=>[n("yarn")]),title2:a(({value:l,isActive:i})=>[n("npm")]),tab0:a(({value:l,isActive:i})=>[V]),tab1:a(({value:l,isActive:i})=>[q]),tab2:a(({value:l,isActive:i})=>[S]),_:1}),T,s(d,{id:"26",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:l,isActive:i})=>[n("TS")]),title1:a(({value:l,isActive:i})=>[n("JS")]),tab0:a(({value:l,isActive:i})=>[C]),tab1:a(({value:l,isActive:i})=>[E]),_:1}),A,s(k(u)),I,s(o,{title:"Vue theme",id:"md-demo-67"},{default:a(()=>[s(t,{id:"flowchart-68",code:"eJx1ULFOwzAQ3f0VHotEUrWjpZgJMQFDJoQYXPuSGFKfZZ8bVfLHY6dQwdDlrHd+7927i9TJSCqQ4H19sleRhJyIvNhul2VpR8Rxhlbj8f0wK/f1waCT4Izgj87kIVEKcEPA0O86iR6CIotO8Oczf/1F66TC2P9j9JSGIesUAjhiMR2KQakBE1kHq0N/hdm6k5qtYRqd6WSt9mLzBpFh4C/4kJX3AU9gbmXUJcAf5ROi4daAygE+QRMYZrGT1vlEZWqpgmtFeuIRj0CTdWPbtj93YCxSU9bZbYIdJ7prVuc13uYM8Z5f2/tL02EBdcvNDEP9KNqSqJILsNhIqHCllVNV+A2yapmT",preset:"vue"})]),code:a(()=>[N]),_:1}),s(o,{title:"Ant theme",id:"md-demo-71"},{default:a(()=>[s(t,{id:"flowchart-72",code:"eJx1ULFOwzAQ3f0VHotEUrWjpZgJMQFDJoQYXPuSGFKfZZ8bVfLHY6dQwdDlrHd+7927i9TJSCqQ4H19sleRhJyIvNhul2VpR8Rxhlbj8f0wK/f1waCT4Izgj87kIVEKcEPA0O86iR6CIotO8Oczf/1F66TC2P9j9JSGIesUAjhiMR2KQakBE1kHq0N/hdm6k5qtYRqd6WSt9mLzBpFh4C/4kJX3AU9gbmXUJcAf5ROi4daAygE+QRMYZrGT1vlEZWqpgmtFeuIRj0CTdWPbtj93YCxSU9bZbYIdJ7prVuc13uYM8Z5f2/tL02EBdcvNDEP9KNqSqJILsNhIqHCllVNV+A2yapmT",preset:"ant"})]),code:a(()=>[R]),_:1}),s(o,{title:"Pie theme",id:"md-demo-75"},{default:a(()=>[s(t,{id:"flowchart-76",code:"eJx1ULFOwzAQ3f0VHotEUrWjpZgJMQFDJoQYXPuSGFKfZZ8bVfLHY6dQwdDlrHd+7927i9TJSCqQ4H19sleRhJyIvNhul2VpR8Rxhlbj8f0wK/f1waCT4Izgj87kIVEKcEPA0O86iR6CIotO8Oczf/1F66TC2P9j9JSGIesUAjhiMR2KQakBE1kHq0N/hdm6k5qtYRqd6WSt9mLzBpFh4C/4kJX3AU9gbmXUJcAf5ROi4daAygE+QRMYZrGT1vlEZWqpgmtFeuIRj0CTdWPbtj93YCxSU9bZbYIdJ7prVuc13uYM8Z5f2/tL02EBdcvNDEP9KNqSqJILsNhIqHCllVNV+A2yapmT",preset:"pie"})]),code:a(()=>[J]),_:1}),P,U,j,s(o,{title:"Start & End",id:"md-demo-88"},{default:a(()=>[L,s(t,{id:"flowchart-107",code:"eJwrLrG1Ky5JLCqxUggGUVyptnapeSlWCq55KVxcxSW6dqlcAOP4C2A=",preset:"vue"})]),code:a(()=>[K]),_:1}),s(o,{title:"Operation",id:"md-demo-110"},{default:a(()=>[O,F,s(t,{id:"flowchart-121",code:"eJwrKMpPTi0utrXLL0gtSizJzM+zUvCHMblSbe1S81KsFFzzUri4oEp17VK5ACXfEtY=",preset:"vue"})]),code:a(()=>[Y]),_:1}),s(o,{title:"Input / Output",id:"md-demo-124"},{default:a(()=>[D,M,s(t,{id:"flowchart-135",code:"eJwrKMpPTi0utrXLzCsoLckvLQGSVgqeCA5Xqq1dal6KlYJrXgoXF1S5rl0qFwCSlRT2",preset:"vue"})]),code:a(()=>[Q]),_:1}),s(o,{title:"Subroutine",id:"md-demo-138"},{default:a(()=>[Z,z,s(t,{id:"flowchart-149",code:"eJwrKMpPTi0utrUrLk0qyi8tycxLtVIIhrO5Um3tUvNSrBRc81K4uKCKde1SuQBZbhPU",preset:"vue"})]),code:a(()=>[H]),_:1}),s(o,{title:"Condition",id:"md-demo-152"},{default:a(()=>[X,W,s(t,{id:"flowchart-173",code:"eJxLzs9LsbUDkZklmfl5VgoBRfnJqcXF9lwFEIatXX5BalEiiiRXqq1dal6KlYJrXgoXF0izRmVqsaauHVSPrl0qRDQvHyiYygUAPWgiyQ==",preset:"vue"})]),code:a(()=>[B]),_:1}),s(o,{title:"Parallel",id:"md-demo-176"},{default:a(()=>[G,$,s(t,{id:"flowchart-197",code:"eJxFizEKgDAMRfecIqOCDjoWms3dK0QNKNamtLk/Kioun897vMSZPd0bggSH30PjshdIWWcpxZMmyWybRofjw0A8SVwcDnEBuLsqsa1dg5Oa6VG39NYtye/7iwucDNwpNA==",preset:"vue"})]),code:a(()=>[ee]),_:1}),ne])}}}),ie=f(ae,[["__file","flowchart.html.vue"]]);export{ie as default};
