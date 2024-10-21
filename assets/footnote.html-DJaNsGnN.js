import{aj as l,ak as h,ao as s,an as o,am as t,aq as p,as as a,ar as r,al as k,ap as i}from"./app-BLmUDr3s.js";const d={};function c(B,e){const n=r("MdDemo");return k(),h("div",null,[e[2]||(e[2]=s("p",null,"让你的 VuePress 站点中的 Markdown 文件支持脚注。",-1)),o(" more "),e[3]||(e[3]=t(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      mdEnhance</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        footnote</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><ul><li><p>在 Markdown 中使用 <code>[^锚点文字]</code> 来定义脚注。</p></li><li><p>在之后的任何位置使用 <code>[^锚点文字]: ...</code> 来描述脚注内容。</p></li><li><p>如果脚注包含多个段落，其后的段落应当保持双层缩进。</p></li></ul><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2>`,5)),p(n,{title:"",id:"md-demo-32"},{default:a(()=>e[0]||(e[0]=[s("p",null,[i("脚注 1 链接"),s("sup",{class:"footnote-ref"},[s("a",{href:"#footnote1"},"[1]"),s("a",{class:"footnote-anchor",id:"footnote-ref1"})]),i("。")],-1),s("p",null,[i("脚注 2 链接"),s("sup",{class:"footnote-ref"},[s("a",{href:"#footnote2"},"[2]"),s("a",{class:"footnote-anchor",id:"footnote-ref2"})]),i("。")],-1),s("p",null,[i("行内的脚注"),s("sup",{class:"footnote-ref"},[s("a",{href:"#footnote3"},"[3]"),s("a",{class:"footnote-anchor",id:"footnote-ref3"})]),i(" 定义。")],-1),s("p",null,[i("重复的页脚定义"),s("sup",{class:"footnote-ref"},[s("a",{href:"#footnote2"},"[2:1]"),s("a",{class:"footnote-anchor",id:"footnote-ref2:1"})]),i("。")],-1)])),code:a(()=>e[1]||(e[1]=[s("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"脚注 1 链接"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"["),s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"^first"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"]"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"脚注 2 链接"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"["),s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"^second"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"]"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"行内的脚注^"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"["),s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"行内脚注文本"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"]"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," 定义。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"重复的页脚定义"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"["),s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"^second"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"]"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"["),s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"^first"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},"]"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},": 脚注 "),s("span",{style:{"--shiki-light":"#986801","--shiki-light-font-weight":"bold","--shiki-dark":"#D19A66","--shiki-dark-font-weight":"inherit"}},"**可以包含特殊标记**")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    也可以由多个段落组成")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"[^second]"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{"--shiki-light":"#A626A4","--shiki-light-text-decoration":"inherit","--shiki-dark":"#C678DD","--shiki-dark-text-decoration":"underline"}},"脚注文字。")])])])],-1)])),_:1}),e[4]||(e[4]=t('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>脚注 <strong>可以包含特殊标记</strong></p><p>也可以由多个段落组成 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>脚注文字。 <a href="#footnote-ref2" class="footnote-backref">↩︎</a> <a href="#footnote-ref2:1" class="footnote-backref">↩︎</a></p></li><li id="footnote3" class="footnote-item"><p>行内脚注文本 <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p></li></ol></section>',2))])}const f=l(d,[["render",c],["__file","footnote.html.vue"]]),m=JSON.parse('{"path":"/zh/guide/markdown/content/footnote.html","title":"脚注","lang":"zh-CN","frontmatter":{"title":"脚注","icon":"quote-left","category":["Markdown"],"tag":["Markdown","脚注"],"description":"让你的 VuePress 站点中的 Markdown 文件支持脚注。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-hope.vuejs.press/guide/markdown/content/footnote.html"}],["meta",{"property":"og:url","content":"https://theme-hope.vuejs.press/zh/guide/markdown/content/footnote.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"脚注"}],["meta",{"property":"og:description","content":"让你的 VuePress 站点中的 Markdown 文件支持脚注。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-28T18:46:36.000Z"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:tag","content":"脚注"}],["meta",{"property":"article:modified_time","content":"2024-03-28T18:46:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"脚注\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-28T18:46:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://theme-hope.vuejs.press/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://theme-hope.vuejs.press/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://theme-hope.vuejs.press/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]}],"git":{"createdTime":1643270355000,"updatedTime":1711651596000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.17,"words":52},"filePathRelative":"zh/guide/markdown/content/footnote.md","localizedDate":"2022年1月27日","excerpt":"<p>让你的 VuePress 站点中的 Markdown 文件支持脚注。</p>\\n","autoDesc":true}');export{f as comp,m as data};