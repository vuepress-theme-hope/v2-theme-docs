import{_ as u,r as d,o as r,c as p,a as v,e as t,w as a,d as e,b as n,f as c}from"./app-b495a394.js";const b={},m=n("p",null,"Let the Markdown file in your VuePress site support tabs.",-1),h=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),e(" Config")],-1),k=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
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
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
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
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=c(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>You need to wrap your tabs in <code>tabs</code> container.</p><p>You can add an id suffix in <code>tabs</code> container, which will be used as tab id. All tabs with same id will share same switch event.</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use Vue syntax and components in each tab, and you can access <code>value</code> and <code>isActive</code>, indicating the tab&#39;s binding value and whether the tab is active.</p>`,10),f={class:"hint-container info"},w=n("p",{class:"hint-container-title"},"Switching together and persisting choice",-1),A=n("p",null,"If you want to make some tab groups switch together, you can use same tab id to bind them.",-1),y=n("p",null,"Also, your choice with that tab id will be stored and persisted.",-1),x=n("p",null,"Here is an example:",-1),B=n("p",null,"Choose a package manager:",-1),T=n("p",null,"npm should be installed with Node.js.",-1),C=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("corepack prepare pnpm@latest "),n("span",{class:"token parameter variable"},"--activated"),e(`
`)])])],-1),V=n("p",null,[e("Install "),n("code",null,"vuepress-plugin-md-enhance"),e(":")],-1),j=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(" i "),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-md-enhance
`)])])],-1),q=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-md-enhance
`)])])],-1),N=n("h2",{id:"demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),e(" Demo")],-1),S=n("p",null,"A tab of fruit:",-1),U=n("p",null,"Apple",-1),O=n("p",null,"Banana",-1),D=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another tab of fruit:</p>`,2),E=n("p",null,"Apple",-1),I=n("p",null,"Banana",-1),Y=n("p",null,"Orange",-1),J=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A tab of fruit without id:</p>`,2),H=n("p",null,"Apple",-1),L=n("p",null,"Banana",-1),M=n("p",null,"Orange",-1),P=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function z(F,G){const o=d("CodeTabs"),l=d("Tabs");return r(),p("div",null,[m,v(" more "),h,t(o,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:s,isActive:i})=>[e("TS")]),title1:a(({value:s,isActive:i})=>[e("JS")]),tab0:a(({value:s,isActive:i})=>[k]),tab1:a(({value:s,isActive:i})=>[g]),_:1}),_,n("div",f,[w,A,y,x,B,t(l,{id:"52",data:[{id:"npm"},{id:"pnpm"}],"tab-id":"shell"},{title0:a(({value:s,isActive:i})=>[e("npm")]),title1:a(({value:s,isActive:i})=>[e("pnpm")]),tab0:a(({value:s,isActive:i})=>[T]),tab1:a(({value:s,isActive:i})=>[C]),_:1}),V,t(l,{id:"65",data:[{id:"npm"},{id:"pnpm"}],"tab-id":"shell"},{title0:a(({value:s,isActive:i})=>[e("Using npm")]),title1:a(({value:s,isActive:i})=>[e("Using pnpm")]),tab0:a(({value:s,isActive:i})=>[j]),tab1:a(({value:s,isActive:i})=>[q]),_:1})]),N,S,t(l,{id:"80",data:[{id:"apple"},{id:"banana"}],"tab-id":"fruit"},{title0:a(({value:s,isActive:i})=>[e("apple")]),title1:a(({value:s,isActive:i})=>[e("banana")]),tab0:a(({value:s,isActive:i})=>[U]),tab1:a(({value:s,isActive:i})=>[O]),_:1}),D,t(l,{id:"96",data:[{id:"apple"},{id:"banana"},{id:"orange"}],"tab-id":"fruit"},{title0:a(({value:s,isActive:i})=>[e("apple")]),title1:a(({value:s,isActive:i})=>[e("banana")]),title2:a(({value:s,isActive:i})=>[e("orange")]),tab0:a(({value:s,isActive:i})=>[E]),tab1:a(({value:s,isActive:i})=>[I]),tab2:a(({value:s,isActive:i})=>[Y]),_:1}),J,t(l,{id:"117",data:[{id:"apple"},{id:"banana"},{id:"orange"}]},{title0:a(({value:s,isActive:i})=>[e("apple")]),title1:a(({value:s,isActive:i})=>[e("banana")]),title2:a(({value:s,isActive:i})=>[e("orange")]),tab0:a(({value:s,isActive:i})=>[H]),tab1:a(({value:s,isActive:i})=>[L]),tab2:a(({value:s,isActive:i})=>[M]),_:1}),P])}const Q=u(b,[["render",z],["__file","tabs.html.vue"]]);export{Q as default};
