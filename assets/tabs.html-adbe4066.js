import{a3 as u,Z as p,_ as v,a4 as b,$ as l,a0 as s,a1 as n,a2 as e,a5 as d,D as o}from"./framework-32163d8a.js";const m={},h=n("p",null,"Let the Markdown file in your VuePress site support tabs.",-1),k=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),e(" Config")],-1),g=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  theme`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
    plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
      mdEnhance`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
        tabs`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token literal-property property"},"mdEnhance"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
        `),n("span",{class:"token literal-property property"},"tabs"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=d(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>You need to wrap your tabs in <code>tabs</code> container.</p><p>You can add an id suffix in <code>tabs</code> container, which will be used as tab id. All tabs with same id will share same switch event.</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

<span class="token comment">&lt;!-- here, fruit will be used as id, it&#39;s optional --&gt;</span>

<span class="token comment">&lt;!-- tabs content --&gt;</span>

:::
</code></pre></div><p>Inside this container, you should use <code>@tab</code> marker to mark and separate tab contents.</p><p>Behind <code>@tab</code> marker, you can add text <code>:active</code> to activate the tab by default, and the text will be resolved as tab title.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab title 1

<span class="token comment">&lt;!-- tab 1 content --&gt;</span>

@tab title 2

<span class="token comment">&lt;!-- tab 2 content --&gt;</span>

@tab:active title 3

<span class="token comment">&lt;!-- tab 3 will be activated by default --&gt;</span>

<span class="token comment">&lt;!-- tab 3 content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, the title will be used as value of tab, but you can override it using id suffix.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab title 1

<span class="token comment">&lt;!-- here, tab 1&#39;s title &quot;title 1&quot; will be used as value. --&gt;</span>

<span class="token comment">&lt;!-- tab 1 content --&gt;</span>

@tab title 2#value2

<span class="token comment">&lt;!-- here, tab 2&#39;s title will be &quot;title 2&quot;, but it will bind a value with &quot;value2&quot; --&gt;</span>

<span class="token comment">&lt;!-- tab 2 content --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),w={class:"hint-container info"},y=n("p",{class:"hint-container-title"},"Switching together and persisting choice",-1),x=n("p",null,"If you want to make some tab groups switch together, you can use same tab id to bind them.",-1),A=n("p",null,"Also, your choice with that tab id will be stored and persisted.",-1),B=n("p",null,"Here is an example:",-1),T=n("p",null,"Choose a package manager:",-1),C=n("p",null,"npm should be installed with Node.js.",-1),j=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("corepack prepare pnpm@latest "),n("span",{class:"token parameter variable"},"--activated"),e(`
`)])])],-1),q=n("p",null,[e("Install "),n("code",null,"vuepress-plugin-md-enhance"),e(":")],-1),N=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(" i "),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-md-enhance
`)])])],-1),V=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-md-enhance
`)])])],-1),U=n("h2",{id:"demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),e(" Demo")],-1),D=n("p",null,"A tab of fruit:",-1),O=n("p",null,"Apple",-1),S=n("p",null,"Banana",-1),E=d(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another tab of fruit:</p>`,2),I=n("p",null,"Apple",-1),Y=n("p",null,"Banana",-1),H=n("p",null,"Orange",-1),J=d(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A tab of fruit without id:</p>`,2),L=n("p",null,"Apple",-1),M=n("p",null,"Banana",-1),P=n("p",null,"Orange",-1),Z=d(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function $(z,F){const r=o("CodeTabs"),c=o("Tabs");return p(),v("div",null,[h,b(" more "),k,l(r,{id:"7",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:s(({title:a,value:t,isActive:i})=>[g]),tab1:s(({title:a,value:t,isActive:i})=>[_]),_:1}),f,n("div",w,[y,x,A,B,T,l(c,{id:"49",data:[{title:"npm"},{title:"pnpm"}],"tab-id":"shell"},{tab0:s(({title:a,value:t,isActive:i})=>[C]),tab1:s(({title:a,value:t,isActive:i})=>[j]),_:1}),q,l(c,{id:"62",data:[{title:"Using npm",id:"npm"},{title:"Using pnpm",id:"pnpm"}],"tab-id":"shell"},{tab0:s(({title:a,value:t,isActive:i})=>[N]),tab1:s(({title:a,value:t,isActive:i})=>[V]),_:1})]),U,D,l(c,{id:"77",data:[{title:"apple",id:"apple"},{title:"banana",id:"banana"}],"tab-id":"fruit"},{tab0:s(({title:a,value:t,isActive:i})=>[O]),tab1:s(({title:a,value:t,isActive:i})=>[S]),_:1}),E,l(c,{id:"93",data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},{tab0:s(({title:a,value:t,isActive:i})=>[I]),tab1:s(({title:a,value:t,isActive:i})=>[Y]),tab2:s(({title:a,value:t,isActive:i})=>[H]),_:1}),J,l(c,{id:"114",data:[{title:"apple"},{title:"banana"},{title:"orange"}]},{tab0:s(({title:a,value:t,isActive:i})=>[L]),tab1:s(({title:a,value:t,isActive:i})=>[M]),tab2:s(({title:a,value:t,isActive:i})=>[P]),_:1}),Z])}const K=u(m,[["render",$],["__file","tabs.html.vue"]]);export{K as default};
