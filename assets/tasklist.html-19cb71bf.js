import{_ as p,r as l,o as r,c as u,a as d,e as i,w as a,d as n,b as s,f as k}from"./app-92e2b39d.js";const m={},b=s("p",null,"让你的 VuePress 站点中的 Markdown 文件支持任务列表。",-1),v=s("h2",{id:"配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),n(" 配置")],-1),h=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{ts:"",class:"language-typescript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.ts"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" defineUserConfig "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" hopeTheme "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress-theme-hope"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token function"},"defineUserConfig"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
  theme`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token function"},"hopeTheme"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    plugins`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      mdEnhance`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
        tasklist`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{js:"",class:"language-javascript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.js"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" hopeTheme "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress-theme-hope"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token literal-property property"},"theme"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token function"},"hopeTheme"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token literal-property property"},"plugins"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token literal-property property"},"mdEnhance"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token literal-property property"},"tasklist"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),_=s("h2",{id:"语法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#语法","aria-hidden":"true"},"#"),n(" 语法")],-1),f=s("ul",null,[s("li",null,[n("使用 "),s("code",null,"- [ ] 一些文字"),n(" 渲染一个未勾选的任务项")]),s("li",null,[n("使用 "),s("code",null,"- [x] 一些文字"),n(" 渲染一个勾选了的任务项 (我们也支持大写的 "),s("code",null,"X"),n(")")])],-1),y=s("ul",{class:"task-list-container"},[s("li",{class:"task-list-item"},[s("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-0",disabled:"disabled"}),s("label",{class:"task-list-item-label",for:"task-item-0"}," 计划 A")]),s("li",{class:"task-list-item"},[s("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-1",checked:"checked",disabled:"disabled"}),s("label",{class:"task-list-item-label",for:"task-item-1"}," 计划 B")])],-1),x=s("div",{class:"language-markdown","data-ext":"md"},[s("pre",{class:"language-markdown"},[s("code",null,[s("span",{class:"token list punctuation"},"-"),n(` [ ] 计划 A
`),s("span",{class:"token list punctuation"},"-"),n(` [x] 计划 B
`)])])],-1),w=k(`<h2 id="高级" tabindex="-1"><a class="header-anchor" href="#高级" aria-hidden="true">#</a> 高级</h2><p>除了在插件选项中设置 <code>tasklist: true</code> 之外，你还可以将对象作为选项传递给它。可用选项如下:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TaskListOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 是否禁用 checkbox
   *
   * <span class="token keyword">@default</span> true
   */</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否使用 \`&lt;label&gt;\` 来包裹文字
   *
   * <span class="token keyword">@default</span> true
   */</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function T(C,A){const o=l("CodeTabs"),c=l("MdDemo");return r(),u("div",null,[b,d(" more "),v,i(o,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[n("TS")]),title1:a(({value:e,isActive:t})=>[n("JS")]),tab0:a(({value:e,isActive:t})=>[h]),tab1:a(({value:e,isActive:t})=>[g]),_:1}),_,f,i(c,{title:"案例",id:"md-demo-31"},{default:a(()=>[y]),code:a(()=>[x]),_:1}),w])}const j=p(m,[["render",T],["__file","tasklist.html.vue"]]);export{j as default};
