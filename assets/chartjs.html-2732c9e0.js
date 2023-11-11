import{_ as u,r,o as b,c as m,a as p,b as n,d as s,e as a,w as e,f as v}from"./app-fe94cd90.js";const k={},g=n("p",null,"让你 VuePress 站点中的 Markdown 文件支持图表。",-1),h=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),E={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},f=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` chart.js
`)])])],-1),B=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` chart.js
`)])])],-1),A=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` chart.js
`)])])],-1),C=n("p",null,"之后启用它:",-1),w=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
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
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
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
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=v(`<h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: chart 标题

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // 此处为图表配置
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre></div><p>我们也支持 <code>js</code> 和 <code>javascript</code> 的代码块，你应当将导出对象赋值给 <code>module.exports</code>。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2>`,4),_=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart 一个块状图案例

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json"},`{
  "type": "bar",
  "data": {
    "labels": ["红色", "蓝色", "黄色", "绿色", "紫色", "橙色"],
    "datasets": [
      {
        "label": "投票数",
        "data": [12, 19, 3, 5, 2, 3],
        "backgroundColor": [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        "borderColor": [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        "borderWidth": 1
      }
    ]
  },
  "options": {
    "scales": {
      "y": {
        "beginAtZero": true
      }
    }
  }
}`),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart 一个气泡图案例

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json"},`{
  "type": "bubble",
  "data": {
    "datasets": [
      {
        "label": "第一个数据集",
        "data": [
          { "x": 20, "y": 30, "r": 15 },
          { "x": 40, "y": 10, "r": 10 }
        ],
        "backgroundColor": "rgb(255, 99, 132)"
      }
    ]
  }
}`),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart 一个线状图案例

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json"},`{
  "type": "line",
  "data": {
    "labels": ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
    "datasets": [
      {
        "label": "我的第一个数据集",
        "data": [65, 59, 80, 81, 56, 55, 40],
        "fill": false,
        "borderColor": "rgb(75, 192, 192)",
        "tension": 0.1
      }
    ]
  }
}`),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart 一个玫瑰图案例

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json"},`{
  "type": "polarArea",
  "data": {
    "labels": ["红色", "绿色", "黄色", "灰色", "蓝色"],
    "datasets": [
      {
        "label": "我的第一个数据集",
        "data": [11, 16, 7, 3, 14],
        "backgroundColor": [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)"
        ]
      }
    ]
  }
}`),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart 一个雷达图案例

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json"},`{
  "type": "radar",
  "data": {
    "labels": ["吃饭", "喝水", "睡觉", "设计", "编程", "骑车", "跑步"],
    "datasets": [
      {
        "label": "我的第一个数据集",
        "data": [65, 59, 90, 81, 56, 55, 40],
        "fill": true,
        "backgroundColor": "rgba(255, 99, 132, 0.2)",
        "borderColor": "rgb(255, 99, 132)",
        "pointBackgroundColor": "rgb(255, 99, 132)",
        "pointBorderColor": "#fff",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgb(255, 99, 132)"
      },
      {
        "label": "我的第二个数据集",
        "data": [28, 48, 40, 19, 96, 27, 100],
        "fill": true,
        "backgroundColor": "rgba(54, 162, 235, 0.2)",
        "borderColor": "rgb(54, 162, 235)",
        "pointBackgroundColor": "rgb(54, 162, 235)",
        "pointBorderColor": "#fff",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgb(54, 162, 235)"
      }
    ]
  },
  "options": {
    "elements": {
      "line": {
        "borderWidth": 3
      }
    }
  }
}`),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: chart 一个散点图案例

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"json"),s(`
`),n("span",{class:"token code-block language-json"},`{
  "type": "scatter",
  "data": {
    "datasets": [
      {
        "label": "散点数据集",
        "data": [
          { "x": -10, "y": 0 },
          { "x": 0, "y": 10 },
          { "x": 10, "y": 5 },
          { "x": 0.5, "y": 5.5 }
        ],
        "backgroundColor": "rgb(255, 99, 132)"
      }
    ]
  },
  "options": {
    "scales": {
      "x": {
        "type": "linear",
        "position": "bottom"
      }
    }
  }
}`),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("h2",{id:"文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文档","aria-hidden":"true"},"#"),s(" 文档")],-1),I={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"};function V(W,S){const o=r("ExternalLinkIcon"),d=r("CodeTabs"),c=r("ChartJS"),t=r("MdDemo");return b(),m("div",null,[g,p(" more "),h,n("p",null,[s("在你的项目中安装 "),n("a",E,[s("chart.js"),a(o)]),s(":")]),a(d,{id:"11",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:e(({value:l,isActive:i})=>[s("pnpm")]),title1:e(({value:l,isActive:i})=>[s("yarn")]),title2:e(({value:l,isActive:i})=>[s("npm")]),tab0:e(({value:l,isActive:i})=>[f]),tab1:e(({value:l,isActive:i})=>[B]),tab2:e(({value:l,isActive:i})=>[A]),_:1}),C,a(d,{id:"26",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:l,isActive:i})=>[s("TS")]),title1:e(({value:l,isActive:i})=>[s("JS")]),tab0:e(({value:l,isActive:i})=>[w]),tab1:e(({value:l,isActive:i})=>[y]),_:1}),x,a(t,{title:"块状图",id:"md-demo-45"},{default:e(()=>[a(c,{id:"chart-46",config:"eJyNUrtOwzAU3fsVlieQLBQnJBA2xEcgUXVwGitERHHluEOFsrHAijowsCAhgVgQYqIDf5OUv+DactsEJaVDnPs4Puce614PEMJqNuH4BOGISUx0IWaKQUE3IctYxLMC8iGuv56Wtx+YILy8f7TRz+LGRvXiexV9vtmoen3Q0UjzWuaCK8NmKsiqbJT0JNXdvH5+qebvZh7btVMNqUsQDQnyCPIJgsSz7AYVsfFVIsU0j89EJmRDyLRlErE914eLIVBQD647B+5+Q2cF8g+hH0Df9QDdAzJMrhMQdAxfD+gIMDQ0U/fLUR/8UEfrac5tetSH0QMYz4DWmNYrCBlzuesL0P/9d0La7jshbe+dkD/O+5XWvgGyxfV5GqtLcE1tozT/EZyl2W4xUanI9QraBS/GLOObHCqzRqJ5eZLmp+qCSwENJae8Ra3PclAOfgFjv8GB",title:"%E4%B8%80%E4%B8%AA%E5%9D%97%E7%8A%B6%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"})]),code:e(()=>[_]),_:1}),a(t,{title:"气泡图",id:"md-demo-51"},{default:e(()=>[a(c,{id:"chart-52",config:"eJyr5lJQUCqpLEhVslJQSipNSspJVdIBiaUkliQCxUDyUF5xakkxUCQaLKIAlQHL5iQmpeaADHi+Zs2THQ1Pdqx6NnXDs951L2e3gQ2DKoMaCTMAbIiCUgVQyMhAR0GpEsgwBjGKgAxDU4VahFa4QhOYQkO4QgOFWri6WCTbkhKTs9OL8kvzUpzzc/JBSpWK0pM0jExNdRQsLXUUDI2NNJWgyiEmxALJWq5aLgCVmkPj",title:"%E4%B8%80%E4%B8%AA%E6%B0%94%E6%B3%A1%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"})]),code:e(()=>[j]),_:1}),a(t,{title:"线状图",id:"md-demo-57"},{default:e(()=>[a(c,{id:"chart-58",config:"eJyr5lJQUCqpLEhVslJQysnMS1XSAYmkJJYkAkVAskBeTmJSak4xkB+t9GRHw7M5HUo6CkpPdvXAWDs6oayns2fDZafAxFrXwtU1g1ixIBugdhSnloDNBYsoQO1D2Aly1LOOic9ntTxfswZo9ZMdq55N3fCsd93L2W1gh0IVQ50bbWaqo2BqqaNgYQDEhkC2GRADxUwMoJaCVadl5oBMTkvMKU5FEk7KL0pJLXLOz8kvAtlblJ6kYQ7Ua2hpBCY0kS0sSc0rzszPA6oz0DOECteC6VggWctVywUAjFhqNw==",title:"%E4%B8%80%E4%B8%AA%E7%BA%BF%E7%8A%B6%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"})]),code:e(()=>[U]),_:1}),a(t,{title:"玫瑰图",id:"md-demo-63"},{default:e(()=>[a(c,{id:"chart-64",config:"eJyr5lJQUCqpLEhVslJQKsjPSSxyLEpNVNIBCackliQChUFKgLycxKTUnGIgP1rp+a5FLzo3KekoKD3fvR/Kerm7BSbWuAHKejF5LogVCzINal5xagnYDLCIAtRshPkgVzzrmPh8VsvzNWue7Gh4smPVs6kbnvWuezm7DewoqGKo06INDXUUDM10FMx1FIyBLBOoVWA1SYnJ2elF+aV5Kc75OflFSLaCpYvSkzSMTE11FCwtgTqNjTSRzIdKmwNlDS2NwAQWabBuIwMgYWGGTdoA6DgjA6C7jAzMscibmoDcDjTdyNhUUwkuGwtl1YJpEK+Wq5YLALKFcXk=",title:"%E4%B8%80%E4%B8%AA%E7%8E%AB%E7%91%B0%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"})]),code:e(()=>[J]),_:1}),a(t,{title:"雷达图",id:"md-demo-69"},{default:e(()=>[a(c,{id:"chart-70",config:"eJy9k81Kw0AQx+99imW9KARJ0w9bj3rxDTyUHhKzqcGYLdtUECkIiigq2IM9KD30UJXSlh4Ei6hP0ybpWzi7pphgaQpCD7s7Ozsz/2F/zEkCIewclwneRJipusqwxF266qjg4s9ws1SNWBW4F/D47mzS7mEJ4XGj6Q5eueU1W/7zFbf8/pffbwnfR8N7uebWpFP3P5/E61vd7bVxkSsEGhXiiLrCgwK9X03elXtZ9x7OvW53NDwdDTvu/cC97U8eL0SjQXDQbiGbkVAmL6G8LKFcEuwsLPCl5UBURBumxSs7rEpCXk3dOygxWrX1bWpRJj6kpKmrCi+Qh6LJlCIheV1ZCytrlOmEhTMiCZHYMjVtZ2umTFxSVGXFMIw/MTv0iLAZ1ecEx/UeJNWm2fPxvN/E4VFygIIvwJPkmACPsgG2/A8+mTQUyAIaJQW9L8AnnLAwn5ikZfGJtjHlI84i7IIUpmXHpDafq2B+iUUOiS0mbYoQW6bNhz6E9Oerdk3d2YeHVKQ432uJWuIbidwvfg==",title:"%E4%B8%80%E4%B8%AA%E9%9B%B7%E8%BE%BE%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"})]),code:e(()=>[L]),_:1}),a(t,{title:"散点图",id:"md-demo-75"},{default:e(()=>[a(c,{id:"chart-76",config:"eJxtULsOgjAU3fmKppMmaETDoKufYRgKNIRYKYGaSAyLg5sjk6O7cfWHMP6F95byMGFp2vO6t+dsEUJVkXK6ITQPmFI8ozaCIVMMQBSYV85VDshOI8QwmhXM5wIT6urxubzr6lXfnt/7VScZjclr3TqB0BNAM2dhE1rAbUHK3tHxLeuM053bHXfP3Zafg6ITeIPdfBbso0wek3ArhczwJ1nkT5YuWNdrmzir5ZQaeZPgwamnUZmqWCZYjKkKWhS8fwOCawzaausWccJZ07ZhUpnHmIasL5WSh/+peJZWaf0ALadm1Q==",title:"%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"})]),code:e(()=>[Q]),_:1}),D,n("p",null,[s("相关详情，详见 "),n("a",I,[s("Chart.js 文档"),a(o)]),s(".")])])}const z=u(k,[["render",V],["__file","chartjs.html.vue"]]);export{z as default};
