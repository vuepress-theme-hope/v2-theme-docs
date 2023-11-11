import{_ as u,r as p,o as k,c as d,a as b,b as n,d as s,e as t,w as a,f as m}from"./app-a080876e.js";const v={},g=n("p",null,"Let the Markdown file support chart in your VuePress site.",-1),h=n("h2",{id:"settings",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#settings","aria-hidden":"true"},"#"),s(" Settings")],-1),y={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},f=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` chart.js
`)])])],-1),C=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` chart.js
`)])])],-1),A=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` chart.js
`)])])],-1),w=n("p",null,"Then enabling via:",-1),x=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      mdEnhance`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        chart`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"mdEnhance"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"chart"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=m(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: chart Title

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json"><span class="token punctuation">{</span>
  <span class="token comment">// Your chart config here.</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre></div><p><code>js</code> and <code>javascript</code> code block is also supported, and you are expected to assign your export object to <code>module.exports</code>.</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2>`,4),Q=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart A bar chart

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bar"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Red"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Blue"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Yellow"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Green"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Purple"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"# of Votes"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"19"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"rgba(255, 99, 132, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(54, 162, 235, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(255, 206, 86, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(75, 192, 192, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(153, 102, 255, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(255, 159, 64, 0.2)"'),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"rgba(255, 99, 132, 1)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(54, 162, 235, 1)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(255, 206, 86, 1)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(75, 192, 192, 1)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(153, 102, 255, 1)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgba(255, 159, 64, 1)"'),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderWidth"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"scales"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"beginAtZero"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart A Bubble Chart

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bubble"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"First Dataset"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"r"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"15"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"r"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart A Line Chart

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"line"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"January"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"February"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"March"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"April"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"May"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"June"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"July"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My First Dataset"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"65"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"59"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"80"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"81"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"fill"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(75, 192, 192)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"tension"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.1"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart A Polar Area Chart

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"polarArea"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Red"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Green"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Yellow"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Grey"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Blue"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My First Dataset"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"14"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgb(75, 192, 192)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgb(255, 205, 86)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgb(201, 203, 207)"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token string"},'"rgb(54, 162, 235)"'),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart A Radar Chart

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"radar"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"labels"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},'"Eating"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Drinking"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Sleeping"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Designing"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Coding"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Cycling"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"Running"'),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My First Dataset"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"65"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"59"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"90"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"81"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"fill"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgba(255, 99, 132, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointBackgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointBorderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#fff"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointHoverBackgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#fff"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointHoverBorderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"My Second Dataset"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"28"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"48"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"19"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"96"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"27"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"fill"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgba(54, 162, 235, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"borderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(54, 162, 235)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointBackgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(54, 162, 235)"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointBorderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#fff"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointHoverBackgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#fff"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pointHoverBorderColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(54, 162, 235)"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"elements"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"line"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"borderWidth"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart A Scatter Chart

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json"},[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"scatter"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"datasets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"label"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Scatter Dataset"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"data"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"-10"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token property"},'"y"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5.5"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"backgroundColor"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(255, 99, 132)"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"options"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"scales"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"x"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"linear"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"position"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"bottom"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("h2",{id:"docs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docs","aria-hidden":"true"},"#"),s(" Docs")],-1),U={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"};function K(L,Y){const r=p("ExternalLinkIcon"),i=p("CodeTabs"),c=p("ChartJS"),l=p("MdDemo");return k(),d("div",null,[g,b(" more "),h,n("p",null,[s("Install "),n("a",y,[s("chart.js"),t(r)]),s(" in your project:")]),t(i,{id:"11",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:a(({value:e,isActive:o})=>[s("pnpm")]),title1:a(({value:e,isActive:o})=>[s("yarn")]),title2:a(({value:e,isActive:o})=>[s("npm")]),tab0:a(({value:e,isActive:o})=>[f]),tab1:a(({value:e,isActive:o})=>[C]),tab2:a(({value:e,isActive:o})=>[A]),_:1}),w,t(i,{id:"26",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:o})=>[s("TS")]),title1:a(({value:e,isActive:o})=>[s("JS")]),tab0:a(({value:e,isActive:o})=>[x]),tab1:a(({value:e,isActive:o})=>[j]),_:1}),_,t(l,{title:"Bar Chart",id:"md-demo-45"},{default:a(()=>[t(c,{id:"chart-46",config:"eJyNUj1PwzAQ3fsrLLOAZKE6IYGwAQMjiAEEVQenOUKEFUeOI1Sh/HfuLLckKCkd/HH3nt/ds+57wRh32wb4NeO5slxQolBOYYJAjLTKQbcYr/gTFFwwfqs7oPMVtDZfdLu3ADVdHjvbaA8+WFWXwNekGDRbcF7HZ1jQ/61BPZww886ejYPWtxLg0NBKRoLJTLBYsEQwDOIg71m52nyW1nR1cWe0sYNKHrZlrk6jBB9mKCFjfL48j84GdXak5ALxFPEoRvYMyStFy1SwK1wzpEvkyMx3PV9OJuhHLqkeaR6qJxNsPcX2PGnPGf2CsQXYY39A/u9/kjJ2P0kZe5+k/HE+X2nvGykHXL9UhftA1zIAvT/XuPd+sE3jKlPTDIbZbjdK46jtYsxsBwHpQlnVN+4NrEHA2Q5G0rT3i37xA75CsCY=",title:"A%20bar%20chart",type:"json"})]),code:a(()=>[Q]),_:1}),t(l,{title:"Bubble Chart",id:"md-demo-51"},{default:a(()=>[t(c,{id:"chart-52",config:"eJxNjUEOwiAURPc9xc9facKiUFnUrcZLmC7AksZIxABNbAx3FyhFN2SYeTP/0wCgX14Kj4ByllIrJMkbhRfRS3n5OeVddK7ZgZLkVAupdBq43K3zcF7hvFOIsrZ1cx/wHS3WEsAlii4JGwXlEH7VCh42kFawhVC54e+aFLfHZM38HE9Gm4SineSOcU6g7wnQju2x4OvCEN/QhOYLM1k72g==",title:"A%20Bubble%20Chart",type:"json"})]),code:a(()=>[P]),_:1}),t(l,{title:"Line Chart",id:"md-demo-57"},{default:a(()=>[t(c,{id:"chart-58",config:"eJxNTssKgzAQvPsVS04tSNHS96209CD4BeIh1tgGgsomHqT4792NKfWwr9nZmf1EAMKNvRIXEEa3SsSM1NJJQnhLk5GVMpbmQmSyHSSOIgbxUBX++lzi883NtUdtZsQvsoEluZpRlKwd1K1yXtEjEJz+bvxOPsJDo3Vwn/n+tUAKDxaHfQz7cwynhCKl/kBB2C4JZp7daMOKjTRWLeCqw1rhrTMdsh++qtWRbtPz1qf10tCp1uquJV6ySQM8+VpSnqIp+gLndFA2",title:"A%20Line%20Chart",type:"json"})]),code:a(()=>[E]),_:1}),t(l,{title:"Polar Area Chart",id:"md-demo-63"},{default:a(()=>[t(c,{id:"chart-64",config:"eJxtTrsOwjAM3PsVlieQMrQppZSNh2BiYUOIIaUWQkQEpUWoQv13nBBBhy5+3J3P944AsGkfhHPAh9HKLiwpFA6uVKMYdhLetCpJ17wfcU8VCsCtJbq74UBam1eAWteX+kl4ci7Bp6bG33oEguff133ftbC52rqB9VfvQwRRiHJMEgHJVEAuIOVpEl54TanOt4s1z3u1MtrY3jdP20s5klkmoCj4MpXjnn+gc2aTQvoyQPtrGXOZTYfomMPJmHPJOB/gs4nLzu4yzcb4Y09h6nx3Wxd10QeFAVlO",title:"A%20Polar%20Area%20Chart",type:"json"})]),code:a(()=>[B]),_:1}),t(l,{title:"Radar Chart",id:"md-demo-69"},{default:a(()=>[t(c,{id:"chart-70",config:"eJy9VD1PwzAQ3fsrrLCAFKE0/aBlpAWxsNCBoWJw6kuwauzIcZAilP/O2UloLEpTCYkhlu/53t2zny6fI0ICU+UQ3JJAU0Z1EFqIUUMRsscYCZqAKDDeuhiRe2q4zFyui9eay72HbARA7udAwTPpQSvF/LjaCQ94LqVjuPi1gZ24AkxfUCP0INZe56kiD1wXhqyb/O+qh/tt57OQzJYhWUYhWYxxP8cPsWnUNnPZKRe2otEl9NCE7vaZVqVkKyWUdi+YJfQytgWWWHQ8iUMSXcdX/c6J0gx0n+ERvNxccWnujrYZIvldLtI0/ZHzqD5AH6l+InlIe0uqO/YvtmxgpyQ75Uu8QA/sh76MrT/oS3yD++gPxsymWGCOnsQTFH2GMX3C2cYMkP7LGF9GZ0wzR7g6iwKVG66kHaR20kHAO0g3Wp13AU6k/T30vGye6oUz84YHE6+4XetRPfoCDysUmg==",title:"A%20Radar%20Chart",type:"json"})]),code:a(()=>[J]),_:1}),t(l,{title:"Scatter Chart",id:"md-demo-75"},{default:a(()=>[t(c,{id:"chart-76",config:"eJxtUEsKgzAQ3XuKIasWrKjFhd22N+iyuIgaRJoa0RQqxbt3Jh+14CYk7zeT9w0AmJ56wS7AxoprLQYWElhzzREkgXuNQo+IPAwCjjGs5KWQlHC3CXCzcpPkNC7Pu00CsA9CpyQOgU14i2FeHQvv2WSfXtzZvjvKPB+hYhEUm91KXj2bQb27+qqkGugnQ1Me0gyteR5Cck6PzMltQoGnmcZUr1vVUTGuKmxRivWNCK2xacvXLdtOcNu2Y3o1tpRGbKm0Vq//qXTOwRz8AH72Yfs=",title:"A%20Scatter%20Chart",type:"json"})]),code:a(()=>[H]),_:1}),S,n("p",null,[s("For details, please see "),n("a",U,[s("Chart.js Docs"),t(r)]),s(".")])])}const R=u(v,[["render",K],["__file","chartjs.html.vue"]]);export{R as default};
