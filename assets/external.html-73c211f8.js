import{_ as p,r as c,o as i,c as l,a as e,b as s,d as a,e as t,f as M}from"./app-a520ca79.js";const u={},N=s("p",null,[a("除了在 Markdown 内部使用新语法来增强内容外，你也可以使用 "),s("code",null,"<iframe>"),a(" 或 "),s("code",null,"<img>"),a(" 从外部引入链接来增强你的 Markdown 内容。")],-1),r={id:"shields-io",tabindex:"-1"},g=s("a",{class:"header-anchor",href:"#shields-io","aria-hidden":"true"},"#",-1),j={href:"http://shields.io",target:"_blank",rel:"noopener noreferrer"},I={href:"https://shields.io/",target:"_blank",rel:"noopener noreferrer"},T=M(`<p>输入:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">Version</span>](<span class="token url">https://img.shields.io/npm/v/vuepress-theme-hope.svg?style=flat-square&amp;logo=npm</span>)</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">Downloads</span>](<span class="token url">https://img.shields.io/npm/dm/vuepress-theme-hope.svg?style=flat-square&amp;logo=npm</span>)</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">Dependencies</span>](<span class="token url">https://img.shields.io/librariesio/release/npm/vuepress-theme-hope?style=flat-square</span>)</span>
</code></pre></div><p>输出:</p><p><img src="https://img.shields.io/npm/v/vuepress-theme-hope.svg?style=flat-square&amp;logo=npm" alt="Version" loading="lazy"><br><img src="https://img.shields.io/npm/dm/vuepress-theme-hope.svg?style=flat-square&amp;logo=npm" alt="Downloads" loading="lazy"></p><p>当然你可以单纯利用它生成静态的徽章。你可以通过修改参数来定制文字、样式、颜色与大小。</p><p>输入:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">Theme: vuepress-theme-hope</span>](<span class="token url">https://img.shields.io/badge/主题-vuepress--theme--hope-green.svg?style=for-the-badge&amp;logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGNsYXNzPSJpY29uIiB2aWV3Qm94PSIwIDAgMzI4MC45NDQgMjgwMCI+CiAgPHBhdGggZD0iTTE2NDUuMzMyIDYwMS4wMDRoMzc1LjY3NUwxMDgxLjgyIDIyMzguNDc4IDE0Mi42MzYgNjAxLjAwNGg3MTguNDc3bDIyMC43MDggMzc5LjcwNCAyMTYuMDEzLTM3OS43MDR6IiBmaWxsPSIjNDFiODgzIiAvPgogIDxwYXRoIGQ9Ik0xNDIuNjM2IDYwMS4wMDRsOTM5LjE4NSAxNjM3LjQ3NCA5MzkuMTg2LTE2MzcuNDc0aC0zNzUuNjc1bC01NjMuNTEgOTgyLjQ4NC01NjguMjA4LTk4Mi40ODR6IiBmaWxsPSIjNDFiODgzIiAvPgogIDxwYXRoIGQ9Ik01MTMuMTg4IDYwMS4wMDRsNTY4LjIwNyA5ODcuMjMgNTYzLjUxMS05ODcuMjNoLTM0Ny40OThsLTIxNi4wMTMgMzc5LjcwNC0yMjAuNzA4LTM3OS43MDR6TTE2MDcuNzkyIDEzMTEuODNsNTk0LjY3OCAyLjI5MyAxODcuMzUzLTMxNi4zMjUtNTk4LjY2MiAyLjI5MnpNMjE5OC41MDYgMTkwOS41N0MyODY3LjQzNiA3MzIuNyAyOTM5LjUwMiA2MDUuNDI2IDI5MzcuODc0IDYwMy43OGMtLjcxNS0uNzIzIDQ1LjMwMy0xLjMxNCAxMDIuMjYyLTEuMzE0czEwMy41NjIuNDI4IDEwMy41NjIuOTUxYzAgLjUyMy0yMDguNTcgMzY3Ljk3OC00NjMuNDkxIDgxNi41NjdMMjIxNi43MTUgMjIzNS42bC0xMDIuMS41OTYtMTAyLjEwMi41OTZ6IiBmaWxsPSIjMzU0OTVlIiAvPgogIDxwYXRoIGQ9Ik0xNjgwLjU2MyAyMjMzLjMyOGMwLTEuMzQgMTY4LjIwOC0yOTguMTQ1IDQ0MC4zNzUtNzc3LjA0OGE0MTM1NjQ1Ljc3NSA0MTM1NjQ1Ljc3NSAwIDAwMzM3LjYxOS01OTQuMTlsMTQ2LjEzLTI1Ny4yNSAxNzAuNzQ2LS4wNCAxNzAuNzQ3LS4wNC01LjUzNiA5Ljc0MWMtMy4wNDQgNS4zNTgtNDMuNzI3IDc3LjMwMi05MC40MDcgMTU5Ljg3NS04NS4zNTYgMTUwLjk5Mi0zMzcuNTYyIDU5NS4xNjMtNjU2LjYwMiAxMTU2LjM3M2wtMTcyIDMwMi41NTktMTcwLjUzNi41ODhjLTkzLjc5NS4zMjItMTcwLjUzNi4wNjktMTcwLjUzNi0uNTY3eiIgZmlsbD0iIzQxYjg4MyIgLz4KICA8cGF0aCBkPSJNMTQyOS43ODMgMTYyNS4zNTFsNTk0LjY3OSAyLjI5MiAxODcuMzUzLTMxNi4zMjQtNTk4LjY2MiAyLjI5MnoiIGZpbGw9IiMzNTQ5NWUiIC8+CiAgPHBhdGggZD0iTTE1MjQuMjA3IDE0NjQuOTAzbDYwOC4yODUgNi44NzcgMTczLjc0Ni0zMjAuOTA5aC02MTkuMDcyeiIgZmlsbD0iIzQxYjg4MyIgLz4KPC9zdmc+</span>)</span>
<span class="token url"><span class="token operator">!</span>[<span class="token content">Author: Mr.Hope</span>](<span class="token url">https://img.shields.io/badge/作者:Mr.Hope-关注-blue.svg?style=social</span>)</span>
</code></pre></div><p>输出:</p><p><img src="https://img.shields.io/badge/主题-vuepress--theme--hope-green.svg?style=for-the-badge&amp;logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGNsYXNzPSJpY29uIiB2aWV3Qm94PSIwIDAgMzI4MC45NDQgMjgwMCI+CiAgPHBhdGggZD0iTTE2NDUuMzMyIDYwMS4wMDRoMzc1LjY3NUwxMDgxLjgyIDIyMzguNDc4IDE0Mi42MzYgNjAxLjAwNGg3MTguNDc3bDIyMC43MDggMzc5LjcwNCAyMTYuMDEzLTM3OS43MDR6IiBmaWxsPSIjNDFiODgzIiAvPgogIDxwYXRoIGQ9Ik0xNDIuNjM2IDYwMS4wMDRsOTM5LjE4NSAxNjM3LjQ3NCA5MzkuMTg2LTE2MzcuNDc0aC0zNzUuNjc1bC01NjMuNTEgOTgyLjQ4NC01NjguMjA4LTk4Mi40ODR6IiBmaWxsPSIjNDFiODgzIiAvPgogIDxwYXRoIGQ9Ik01MTMuMTg4IDYwMS4wMDRsNTY4LjIwNyA5ODcuMjMgNTYzLjUxMS05ODcuMjNoLTM0Ny40OThsLTIxNi4wMTMgMzc5LjcwNC0yMjAuNzA4LTM3OS43MDR6TTE2MDcuNzkyIDEzMTEuODNsNTk0LjY3OCAyLjI5MyAxODcuMzUzLTMxNi4zMjUtNTk4LjY2MiAyLjI5MnpNMjE5OC41MDYgMTkwOS41N0MyODY3LjQzNiA3MzIuNyAyOTM5LjUwMiA2MDUuNDI2IDI5MzcuODc0IDYwMy43OGMtLjcxNS0uNzIzIDQ1LjMwMy0xLjMxNCAxMDIuMjYyLTEuMzE0czEwMy41NjIuNDI4IDEwMy41NjIuOTUxYzAgLjUyMy0yMDguNTcgMzY3Ljk3OC00NjMuNDkxIDgxNi41NjdMMjIxNi43MTUgMjIzNS42bC0xMDIuMS41OTYtMTAyLjEwMi41OTZ6IiBmaWxsPSIjMzU0OTVlIiAvPgogIDxwYXRoIGQ9Ik0xNjgwLjU2MyAyMjMzLjMyOGMwLTEuMzQgMTY4LjIwOC0yOTguMTQ1IDQ0MC4zNzUtNzc3LjA0OGE0MTM1NjQ1Ljc3NSA0MTM1NjQ1Ljc3NSAwIDAwMzM3LjYxOS01OTQuMTlsMTQ2LjEzLTI1Ny4yNSAxNzAuNzQ2LS4wNCAxNzAuNzQ3LS4wNC01LjUzNiA5Ljc0MWMtMy4wNDQgNS4zNTgtNDMuNzI3IDc3LjMwMi05MC40MDcgMTU5Ljg3NS04NS4zNTYgMTUwLjk5Mi0zMzcuNTYyIDU5NS4xNjMtNjU2LjYwMiAxMTU2LjM3M2wtMTcyIDMwMi41NTktMTcwLjUzNi41ODhjLTkzLjc5NS4zMjItMTcwLjUzNi4wNjktMTcwLjUzNi0uNTY3eiIgZmlsbD0iIzQxYjg4MyIgLz4KICA8cGF0aCBkPSJNMTQyOS43ODMgMTYyNS4zNTFsNTk0LjY3OSAyLjI5MiAxODcuMzUzLTMxNi4zMjQtNTk4LjY2MiAyLjI5MnoiIGZpbGw9IiMzNTQ5NWUiIC8+CiAgPHBhdGggZD0iTTE1MjQuMjA3IDE0NjQuOTAzbDYwOC4yODUgNi44NzcgMTczLjc0Ni0zMjAuOTA5aC02MTkuMDcyeiIgZmlsbD0iIzQxYjg4MyIgLz4KPC9zdmc+" alt="Theme: vuepress-theme-hope" loading="lazy"><br><img src="https://img.shields.io/badge/作者:Mr.Hope-关注-blue.svg?style=social" alt="Author: Mr.Hope" loading="lazy"></p>`,9),z={class:"hint-container info"},D=s("p",{class:"hint-container-title"},"相关信息",-1),L={href:"https://shields.io/",target:"_blank",rel:"noopener noreferrer"},d=s("h2",{id:"markmap",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markmap","aria-hidden":"true"},"#"),a(" Markmap")],-1),k=s("p",null,"Markmap 是一个将 Markdown 转换为思维导图的工具。它相对于主题内置的 flowchart 支持更多的格式与内容。",-1),m={href:"https://markmap.js.org/",target:"_blank",rel:"noopener noreferrer"},h=s("li",null,[a("将 HTML 文件放在 "),s("code",null,".vuepress/public/"),a(" 下")],-1),w=s("li",null,[a("通过 "),s("code",null,"<iframe>"),a(" 插入到 Markdown")],-1),y=M(`<p>输入:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span>
  <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$withBase(&#39;/markmap/demo-zh.html&#39;)<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">scrolling</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>No<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">leftmargin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">topmargin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>输出:</p>`,3),A=["src"];function x(o,O){const n=c("ExternalLinkIcon");return i(),l("div",null,[N,e(" more "),s("h2",r,[g,a(),s("a",j,[a("shields.io"),t(n)])]),s("p",null,[a("你可以使用 "),s("a",I,[a("shields.io"),t(n)]),a(" 生成大量的动态勋章，比如项目的 Stars，NPM 版本号，下载量等。")]),T,s("div",z,[D,s("p",null,[a("详细的参数与使用请见 "),s("a",L,[a("首页"),t(n)]),a("。")])]),d,k,s("ol",null,[s("li",null,[a("使用 "),s("a",m,[a("Markmap"),t(n)]),a(" 生成思维导图 HTML 文件")]),h,w]),y,e(" markdownlint-disable "),s("iframe",{src:o.$withBase("/markmap/demo-zh.html"),width:"100%",height:"400",frameborder:"0",scrolling:"No",leftmargin:"0",topmargin:"0"},null,8,A),e(" markdownlint-restore ")])}const S=p(u,[["render",x],["__file","external.html.vue"]]);export{S as default};
