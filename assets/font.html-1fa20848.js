import{a as p}from"./index-b0894847.js";import{d as c,_ as f,$ as i,a5 as l,a2 as a,a3 as t,a0 as d,a6 as o,k as v,ab as r,ac as u,a4 as k}from"./framework-bb5a5b49.js";const s=e=>(r("data-v-692f19ad"),e=e(),u(),e),h=s(()=>a("p",null,"此页面指导你如何自定义主题字体。",-1)),m=o('<h2 id="字体族" tabindex="-1" data-v-692f19ad><a class="header-anchor" href="#字体族" aria-hidden="true" data-v-692f19ad>#</a> 字体族</h2><p data-v-692f19ad>对于常见的字体族，一般可以分为 <strong data-v-692f19ad>衬线体</strong><sup class="footnote-ref" data-v-692f19ad><a href="#footnote1" data-v-692f19ad>[1]</a><a class="footnote-anchor" id="footnote-ref1" data-v-692f19ad></a></sup> 和 <strong data-v-692f19ad>无衬线体</strong><sup class="footnote-ref" data-v-692f19ad><a href="#footnote2" data-v-692f19ad>[2]</a><a class="footnote-anchor" id="footnote-ref2" data-v-692f19ad></a></sup>。</p><div class="hint-container tip" data-v-692f19ad><p class="hint-container-title" data-v-692f19ad>中文字体</p><p data-v-692f19ad>对于中文字体来说，常见的无衬线体有黑体、微软雅黑等，而常见的衬线体包括楷体、宋体、仿宋等。</p></div><h2 id="修改主题字体" tabindex="-1" data-v-692f19ad><a class="header-anchor" href="#修改主题字体" aria-hidden="true" data-v-692f19ad>#</a> 修改主题字体</h2><p data-v-692f19ad>主题在 <code data-v-692f19ad>.vuepress/styles/palette.scss</code> 中提供了 <code data-v-692f19ad>$font-family</code>、<code data-v-692f19ad>$font-family-fancy</code> 和 <code data-v-692f19ad>$font-family-code</code> 三个变量控制字体。</p><ul data-v-692f19ad><li data-v-692f19ad><code data-v-692f19ad>$font-family</code>: 普通文本上使用的字体</li><li data-v-692f19ad><code data-v-692f19ad>$font-family-fancy:</code> 用于花哨元素的字体</li><li data-v-692f19ad><code data-v-692f19ad>$font-family-code</code>: 代码上使用的字体</li></ul><p data-v-692f19ad>默认情况下，主题在普通文本上使用无衬线体。</p>',7),g={class:"hint-container tip"},_=s(()=>a("p",{class:"hint-container-title"},"使用衬线体",-1)),q=s(()=>a("p",null,[t("如果你更喜欢衬线体，你可以自行修改 "),a("code",null,"$font-family"),t(" 为你想要的字体。")],-1)),b=s(()=>a("sup",{class:"footnote-ref"},[a("a",{href:"#footnote3"},"[3]"),a("a",{class:"footnote-anchor",id:"footnote-ref3"})],-1)),y={href:"https://github.com/googlefonts/noto-cjk",target:"_blank",rel:"noopener noreferrer"},S={href:"https://fonts.google.com/noto/specimen/Noto+Serif+SC",target:"_blank",rel:"noopener noreferrer"},w=o(`<p data-v-692f19ad>如下字体族是我们推荐的衬线体首选:</p><div class="language-scss" data-ext="scss" data-v-692f19ad><pre class="language-scss" data-v-692f19ad><code data-v-692f19ad><span class="token property" data-v-692f19ad><span class="token variable" data-v-692f19ad>$font-family</span></span><span class="token punctuation" data-v-692f19ad>:</span> <span class="token string" data-v-692f19ad>&#39;Georgia, -apple-system, &quot;Nimbus Roman No9 L&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Noto Serif SC&quot;, &quot;Microsoft Yahei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;ST Heiti&quot;, sans-serif&#39;</span><span class="token punctuation" data-v-692f19ad>;</span>
</code></pre></div>`,2),x=o('<h2 id="后备字体" tabindex="-1" data-v-692f19ad><a class="header-anchor" href="#后备字体" aria-hidden="true" data-v-692f19ad>#</a> 后备字体</h2><p data-v-692f19ad>由于不同平台、不同操作系统以及不同的安装方式 (slim/full) 会导致字体库中的字体数量以及类别产生较大差异，你应该尽可能地设置多个字体，并确保后备字体<sup class="footnote-ref" data-v-692f19ad><a href="#footnote4" data-v-692f19ad>[4]</a><a class="footnote-anchor" id="footnote-ref4" data-v-692f19ad></a></sup>存在。</p><div class="hint-container tip" data-v-692f19ad><p class="hint-container-title" data-v-692f19ad>最佳实践</p><p data-v-692f19ad>后备字体<sup class="footnote-ref" data-v-692f19ad><a href="#footnote4" data-v-692f19ad>[4:1]</a><a class="footnote-anchor" id="footnote-ref4:1" data-v-692f19ad></a></sup>可以确保你的网站在不同操作系统以及安装了不同字体的设备上显示良好。</p></div><h2 id="字体库" tabindex="-1" data-v-692f19ad><a class="header-anchor" href="#字体库" aria-hidden="true" data-v-692f19ad>#</a> 字体库</h2>',4),C={href:"https://fonts.google.com/",target:"_blank",rel:"noopener noreferrer"},N=o(`<p data-v-692f19ad>请在网页中搜索并选择你想要的字体与粗细，然后点击右侧的 <code data-v-692f19ad>Select</code> 按钮，将其添加到你的选择列表中，之后点击右上角的按钮查看你的收藏字体，并获取链接在 VuePress 的配置文件中导入。</p><p data-v-692f19ad>我们假定你选择了思源宋体 (Noto Serif SC) 字体的 400，500，700 字体，点击右上角按钮后，Google 会在侧边栏给出下方的代码:</p><div class="language-html" data-ext="html" data-v-692f19ad><pre class="language-html" data-v-692f19ad><code data-v-692f19ad><span class="token tag" data-v-692f19ad><span class="token tag" data-v-692f19ad><span class="token punctuation" data-v-692f19ad>&lt;</span>link</span> <span class="token attr-name" data-v-692f19ad>rel</span><span class="token attr-value" data-v-692f19ad><span class="token punctuation attr-equals" data-v-692f19ad>=</span><span class="token punctuation" data-v-692f19ad>&quot;</span>preconnect<span class="token punctuation" data-v-692f19ad>&quot;</span></span> <span class="token attr-name" data-v-692f19ad>href</span><span class="token attr-value" data-v-692f19ad><span class="token punctuation attr-equals" data-v-692f19ad>=</span><span class="token punctuation" data-v-692f19ad>&quot;</span>https://fonts.googleapis.com<span class="token punctuation" data-v-692f19ad>&quot;</span></span> <span class="token punctuation" data-v-692f19ad>/&gt;</span></span>
<span class="token tag" data-v-692f19ad><span class="token tag" data-v-692f19ad><span class="token punctuation" data-v-692f19ad>&lt;</span>link</span> <span class="token attr-name" data-v-692f19ad>rel</span><span class="token attr-value" data-v-692f19ad><span class="token punctuation attr-equals" data-v-692f19ad>=</span><span class="token punctuation" data-v-692f19ad>&quot;</span>preconnect<span class="token punctuation" data-v-692f19ad>&quot;</span></span> <span class="token attr-name" data-v-692f19ad>href</span><span class="token attr-value" data-v-692f19ad><span class="token punctuation attr-equals" data-v-692f19ad>=</span><span class="token punctuation" data-v-692f19ad>&quot;</span>https://fonts.gstatic.com<span class="token punctuation" data-v-692f19ad>&quot;</span></span> <span class="token attr-name" data-v-692f19ad>crossorigin</span> <span class="token punctuation" data-v-692f19ad>/&gt;</span></span>
<span class="token tag" data-v-692f19ad><span class="token tag" data-v-692f19ad><span class="token punctuation" data-v-692f19ad>&lt;</span>link</span>
  <span class="token attr-name" data-v-692f19ad>href</span><span class="token attr-value" data-v-692f19ad><span class="token punctuation attr-equals" data-v-692f19ad>=</span><span class="token punctuation" data-v-692f19ad>&quot;</span>https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&amp;display=swap<span class="token punctuation" data-v-692f19ad>&quot;</span></span>
  <span class="token attr-name" data-v-692f19ad>rel</span><span class="token attr-value" data-v-692f19ad><span class="token punctuation attr-equals" data-v-692f19ad>=</span><span class="token punctuation" data-v-692f19ad>&quot;</span>stylesheet<span class="token punctuation" data-v-692f19ad>&quot;</span></span>
<span class="token punctuation" data-v-692f19ad>/&gt;</span></span>
</code></pre></div><div class="language-css" data-ext="css" data-v-692f19ad><pre class="language-css" data-v-692f19ad><code data-v-692f19ad><span class="token property" data-v-692f19ad>font-family</span><span class="token punctuation" data-v-692f19ad>:</span> <span class="token string" data-v-692f19ad>&quot;Noto Serif SC&quot;</span><span class="token punctuation" data-v-692f19ad>,</span> serif<span class="token punctuation" data-v-692f19ad>;</span>
</code></pre></div><p data-v-692f19ad>那么你需要做的就是在 VuePress 配置文件中添加如下代码导入并使用它们:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-v-692f19ad><pre class="language-typescript" data-v-692f19ad><code data-v-692f19ad><span class="token comment" data-v-692f19ad>// .vuepress/config.ts</span>
<span class="token keyword" data-v-692f19ad>import</span> <span class="token punctuation" data-v-692f19ad>{</span> defineUserConfig <span class="token punctuation" data-v-692f19ad>}</span> <span class="token keyword" data-v-692f19ad>from</span> <span class="token string" data-v-692f19ad>&quot;vuepress&quot;</span><span class="token punctuation" data-v-692f19ad>;</span>

<span class="token keyword" data-v-692f19ad>export</span> <span class="token keyword" data-v-692f19ad>default</span> <span class="token function" data-v-692f19ad>defineUserConfig</span><span class="token punctuation" data-v-692f19ad>(</span><span class="token punctuation" data-v-692f19ad>{</span>
  <span class="token comment" data-v-692f19ad>// ...</span>

  head<span class="token operator" data-v-692f19ad>:</span> <span class="token punctuation" data-v-692f19ad>[</span>
    <span class="token comment" data-v-692f19ad>// ...</span>

    <span class="token comment" data-v-692f19ad>// 导入相应链接</span>
    <span class="token punctuation" data-v-692f19ad>[</span><span class="token string" data-v-692f19ad>&quot;link&quot;</span><span class="token punctuation" data-v-692f19ad>,</span> <span class="token punctuation" data-v-692f19ad>{</span> rel<span class="token operator" data-v-692f19ad>:</span> <span class="token string" data-v-692f19ad>&quot;preconnect&quot;</span><span class="token punctuation" data-v-692f19ad>,</span> href<span class="token operator" data-v-692f19ad>:</span> <span class="token string" data-v-692f19ad>&quot;https://fonts.googleapis.com&quot;</span> <span class="token punctuation" data-v-692f19ad>}</span><span class="token punctuation" data-v-692f19ad>]</span><span class="token punctuation" data-v-692f19ad>,</span>
    <span class="token punctuation" data-v-692f19ad>[</span>
      <span class="token string" data-v-692f19ad>&quot;link&quot;</span><span class="token punctuation" data-v-692f19ad>,</span>
      <span class="token punctuation" data-v-692f19ad>{</span> rel<span class="token operator" data-v-692f19ad>:</span> <span class="token string" data-v-692f19ad>&quot;preconnect&quot;</span><span class="token punctuation" data-v-692f19ad>,</span> href<span class="token operator" data-v-692f19ad>:</span> <span class="token string" data-v-692f19ad>&quot;https://fonts.gstatic.com&quot;</span><span class="token punctuation" data-v-692f19ad>,</span> crossorigin<span class="token operator" data-v-692f19ad>:</span> <span class="token string" data-v-692f19ad>&quot;&quot;</span> <span class="token punctuation" data-v-692f19ad>}</span><span class="token punctuation" data-v-692f19ad>,</span>
    <span class="token punctuation" data-v-692f19ad>]</span><span class="token punctuation" data-v-692f19ad>,</span>
    <span class="token punctuation" data-v-692f19ad>[</span>
      <span class="token string" data-v-692f19ad>&quot;link&quot;</span><span class="token punctuation" data-v-692f19ad>,</span>
      <span class="token punctuation" data-v-692f19ad>{</span>
        href<span class="token operator" data-v-692f19ad>:</span> <span class="token string" data-v-692f19ad>&quot;https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&amp;display=swap&quot;</span><span class="token punctuation" data-v-692f19ad>,</span>
        rel<span class="token operator" data-v-692f19ad>:</span> <span class="token string" data-v-692f19ad>&quot;stylesheet&quot;</span><span class="token punctuation" data-v-692f19ad>,</span>
      <span class="token punctuation" data-v-692f19ad>}</span><span class="token punctuation" data-v-692f19ad>,</span>
    <span class="token punctuation" data-v-692f19ad>]</span><span class="token punctuation" data-v-692f19ad>,</span>
  <span class="token punctuation" data-v-692f19ad>]</span><span class="token punctuation" data-v-692f19ad>,</span>

  <span class="token comment" data-v-692f19ad>// ...</span>
<span class="token punctuation" data-v-692f19ad>}</span><span class="token punctuation" data-v-692f19ad>)</span><span class="token punctuation" data-v-692f19ad>;</span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-692f19ad><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div><div class="line-number" data-v-692f19ad></div></div></div><p data-v-692f19ad>同时在调色板文件中修改 <code data-v-692f19ad>$font-family</code> 变量:</p><div class="language-scss" data-ext="scss" data-v-692f19ad><pre class="language-scss" data-v-692f19ad><code data-v-692f19ad><span class="token comment" data-v-692f19ad>// .vuepress/styles/palette.scss</span>

<span class="token comment" data-v-692f19ad>// 应用字体</span>
<span class="token property" data-v-692f19ad><span class="token variable" data-v-692f19ad>$font-family</span></span><span class="token punctuation" data-v-692f19ad>:</span> <span class="token string" data-v-692f19ad>&#39;&quot;Noto Serif SC&quot;, serif&#39;</span><span class="token punctuation" data-v-692f19ad>;</span>
</code></pre></div><p data-v-692f19ad>这样你就可以在网站中使用思源宋体字体了。</p><details class="hint-container details" data-v-692f19ad><summary data-v-692f19ad>思源宋体 Demo</summary><!-- markdownlint-disable MD033 --><div class="noto-serif" data-v-692f19ad><h2 id="人人生而自由" tabindex="-1" data-v-692f19ad><a class="header-anchor" href="#人人生而自由" aria-hidden="true" data-v-692f19ad>#</a> 人人生而自由</h2><p data-v-692f19ad>人人生而自由，在尊严和权利上一律平等。他们赋有理性和良心，并应以弟兄关系的精神相对待。</p></div><!-- markdownlint-enable MD033 --></details><hr class="footnotes-sep" data-v-692f19ad>`,11),$={class:"footnotes"},F={class:"footnotes-list"},V={id:"footnote1",class:"footnote-item"},G={href:"https://www.zhihu.com/topic/19559432/intro",target:"_blank",rel:"noopener noreferrer"},I=s(()=>a("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1)),D={id:"footnote2",class:"footnote-item"},U={href:"https://www.zhihu.com/topic/19559433/intro",target:"_blank",rel:"noopener noreferrer"},z=s(()=>a("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1)),B=o('<li id="footnote3" class="footnote-item" data-v-692f19ad><p data-v-692f19ad>基于「开源字体授权发布」，并且在文档中说明可以基于其源代码进行二次修改后使用 (商用或者个人使用)，所以没有任何版权问题。 <a href="#footnote-ref3" class="footnote-backref" data-v-692f19ad>↩︎</a></p></li><li id="footnote4" class="footnote-item" data-v-692f19ad><p data-v-692f19ad>摘自维基百科</p><p data-v-692f19ad>后备字体 (Fallback font) 是指在当时显示的字型缺乏某些字元时，被用于显示缺失字元的字体。因为其作为显示的最后一道防线，后备字体应该尽可能包含所有 Unicode 字元。</p><p data-v-692f19ad>当缺失字元没有后备字体用于显示时，通常会将缺失字元改为黑色方块、白色空心方块、问号、Unicode 占位字元(U+FFFD)显示，或者干脆略过该字元。在实务上，像是 CSS 等支援字体列表依序显示的系统，通常会将一或多套后备字体置入列表最后，以防止缺字的情况发生。 <a href="#footnote-ref4" class="footnote-backref" data-v-692f19ad>↩︎</a> <a href="#footnote-ref4:1" class="footnote-backref" data-v-692f19ad>↩︎</a></p></li>',2),H=c({__name:"font.html",setup(e){return p("https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@600;900&display=swap"),(M,E)=>{const n=v("ExternalLinkIcon");return f(),i("div",null,[h,l(" more "),m,a("div",g,[_,q,a("p",null,[t("中文博客下最常使用的字体是 Adobe 发布的思源宋体"),b,t("，因为它具有非常宽松的协议。当然，思源宋体并不存在于大多设备上，所以你可能需要导入这个字体。你可以通过 "),a("a",y,[t("GitHub"),d(n)]),t(" 下载该字体引入或直接使用 "),a("a",S,[t("Google Font CDN"),d(n)]),t("。")]),w]),x,a("p",null,[t("你可以在 "),a("a",C,[t("Google Fonts"),d(n)]),t(" 中找到更多字体，并可以在线预览与下载。")]),N,a("section",$,[a("ol",F,[a("li",V,[a("p",null,[t("相关简介: "),a("a",G,[t("https://www.zhihu.com/topic/19559432/intro"),d(n)]),t(),I])]),a("li",D,[a("p",null,[t("相关简介: "),a("a",U,[t("https://www.zhihu.com/topic/19559433/intro"),d(n)]),t(),z])]),B])])])}}});const T=k(H,[["__scopeId","data-v-692f19ad"],["__file","font.html.vue"]]);export{T as default};
