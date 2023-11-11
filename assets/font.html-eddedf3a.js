import{g as i,u as d,r as p,o as c,c as l,a as r,b as a,d as t,e as o,f,p as u,k as v,_ as h}from"./app-fe94cd90.js";const n=e=>(u("data-v-e1af89f6"),e=e(),v(),e),k=n(()=>a("p",null,"This page guides you how to customize theme fonts.",-1)),m=f(`<h2 id="font-family" tabindex="-1" data-v-e1af89f6><a class="header-anchor" href="#font-family" aria-hidden="true" data-v-e1af89f6>#</a> Font Family</h2><p data-v-e1af89f6>For common font families, they can generally be divided into <strong data-v-e1af89f6>serif</strong><sup class="footnote-ref" data-v-e1af89f6><a href="#footnote1" data-v-e1af89f6>[1]</a><a class="footnote-anchor" id="footnote-ref1" data-v-e1af89f6></a></sup> and <strong data-v-e1af89f6>sans-serif</strong><sup class="footnote-ref" data-v-e1af89f6><a href="#footnote2" data-v-e1af89f6>[2]</a><a class="footnote-anchor" id="footnote-ref2" data-v-e1af89f6></a></sup>.</p><h2 id="modifying-fonts" tabindex="-1" data-v-e1af89f6><a class="header-anchor" href="#modifying-fonts" aria-hidden="true" data-v-e1af89f6>#</a> Modifying Fonts</h2><p data-v-e1af89f6>The theme provides <code data-v-e1af89f6>$font-family</code>, <code data-v-e1af89f6>$font-family-heading</code> and <code data-v-e1af89f6>$font-family-mono</code> three variables to control the font in <code data-v-e1af89f6>.vuepress/styles/palette.scss</code>.</p><ul data-v-e1af89f6><li data-v-e1af89f6><code data-v-e1af89f6>$font-family</code>: the font used on normal text</li><li data-v-e1af89f6><code data-v-e1af89f6>$font-family-heading:</code> font for heading elements</li><li data-v-e1af89f6><code data-v-e1af89f6>$font-family-mono</code>: the font used in code block and inline codes</li></ul><p data-v-e1af89f6>By default, the theme uses sans serif with normal text.</p><div class="hint-container tip" data-v-e1af89f6><p class="hint-container-title" data-v-e1af89f6>Use Serifs</p><p data-v-e1af89f6>If you prefer serif fonts, you can modify <code data-v-e1af89f6>$font-family</code> to the font you want.</p><p data-v-e1af89f6>The following font families are our recommended first choice for serif fonts:</p><div class="language-scss" data-ext="scss" data-v-e1af89f6><pre class="language-scss" data-v-e1af89f6><code data-v-e1af89f6><span class="token property" data-v-e1af89f6><span class="token variable" data-v-e1af89f6>$font-family</span></span><span class="token punctuation" data-v-e1af89f6>:</span> <span class="token string" data-v-e1af89f6>&#39;Georgia, -apple-system, &quot;Nimbus Roman No9 L&quot;, sans-serif&#39;</span><span class="token punctuation" data-v-e1af89f6>;</span>
</code></pre></div></div><h2 id="fallback-font" tabindex="-1" data-v-e1af89f6><a class="header-anchor" href="#fallback-font" aria-hidden="true" data-v-e1af89f6>#</a> Fallback Font</h2><p data-v-e1af89f6>Because different platforms, different operating systems, and different installation methods (slim/full) will cause huge differences in the number and types of fonts in the font library, you should set as many fonts as possible, and ensure that the fallback fonts <sup class="footnote-ref" data-v-e1af89f6><a href="#footnote3" data-v-e1af89f6>[3]</a><a class="footnote-anchor" id="footnote-ref3" data-v-e1af89f6></a></sup> exists.</p><div class="hint-container tip" data-v-e1af89f6><p class="hint-container-title" data-v-e1af89f6>Best Practices</p><p data-v-e1af89f6>The fallback font <sup class="footnote-ref" data-v-e1af89f6><a href="#footnote3" data-v-e1af89f6>[3:1]</a><a class="footnote-anchor" id="footnote-ref3:1" data-v-e1af89f6></a></sup> can ensure that your website displays well on different operating systems and devices with different fonts installed.</p></div><h2 id="font-library" tabindex="-1" data-v-e1af89f6><a class="header-anchor" href="#font-library" aria-hidden="true" data-v-e1af89f6>#</a> Font Library</h2>`,11),g={href:"https://fonts.google.com/",target:"_blank",rel:"noopener noreferrer"},y=f(`<p data-v-e1af89f6>Please search and select the font and weight you want in the webpage, then click the <code data-v-e1af89f6>Select</code> button on the right to add it to your selection list, then click the button in the upper right corner to view your favorite fonts and get the link Imported in the configuration file of VuePress.</p><p data-v-e1af89f6>We assume that you have selected the 400 and 700 italic fonts of Lora font. After clicking the button in the upper right corner, Google will give the following code in the sidebar:</p><div class="language-html" data-ext="html" data-v-e1af89f6><pre class="language-html" data-v-e1af89f6><code data-v-e1af89f6><span class="token tag" data-v-e1af89f6><span class="token tag" data-v-e1af89f6><span class="token punctuation" data-v-e1af89f6>&lt;</span>link</span> <span class="token attr-name" data-v-e1af89f6>rel</span><span class="token attr-value" data-v-e1af89f6><span class="token punctuation attr-equals" data-v-e1af89f6>=</span><span class="token punctuation" data-v-e1af89f6>&quot;</span>preconnect<span class="token punctuation" data-v-e1af89f6>&quot;</span></span> <span class="token attr-name" data-v-e1af89f6>href</span><span class="token attr-value" data-v-e1af89f6><span class="token punctuation attr-equals" data-v-e1af89f6>=</span><span class="token punctuation" data-v-e1af89f6>&quot;</span>https://fonts.googleapis.com<span class="token punctuation" data-v-e1af89f6>&quot;</span></span> <span class="token punctuation" data-v-e1af89f6>/&gt;</span></span>
<span class="token tag" data-v-e1af89f6><span class="token tag" data-v-e1af89f6><span class="token punctuation" data-v-e1af89f6>&lt;</span>link</span> <span class="token attr-name" data-v-e1af89f6>rel</span><span class="token attr-value" data-v-e1af89f6><span class="token punctuation attr-equals" data-v-e1af89f6>=</span><span class="token punctuation" data-v-e1af89f6>&quot;</span>preconnect<span class="token punctuation" data-v-e1af89f6>&quot;</span></span> <span class="token attr-name" data-v-e1af89f6>href</span><span class="token attr-value" data-v-e1af89f6><span class="token punctuation attr-equals" data-v-e1af89f6>=</span><span class="token punctuation" data-v-e1af89f6>&quot;</span>https://fonts.gstatic.com<span class="token punctuation" data-v-e1af89f6>&quot;</span></span> <span class="token attr-name" data-v-e1af89f6>crossorigin</span> <span class="token punctuation" data-v-e1af89f6>/&gt;</span></span>
<span class="token tag" data-v-e1af89f6><span class="token tag" data-v-e1af89f6><span class="token punctuation" data-v-e1af89f6>&lt;</span>link</span>
  <span class="token attr-name" data-v-e1af89f6>href</span><span class="token attr-value" data-v-e1af89f6><span class="token punctuation attr-equals" data-v-e1af89f6>=</span><span class="token punctuation" data-v-e1af89f6>&quot;</span>https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,700&amp;display=swap<span class="token punctuation" data-v-e1af89f6>&quot;</span></span>
  <span class="token attr-name" data-v-e1af89f6>rel</span><span class="token attr-value" data-v-e1af89f6><span class="token punctuation attr-equals" data-v-e1af89f6>=</span><span class="token punctuation" data-v-e1af89f6>&quot;</span>stylesheet<span class="token punctuation" data-v-e1af89f6>&quot;</span></span>
<span class="token punctuation" data-v-e1af89f6>/&gt;</span></span>
</code></pre></div><div class="language-css" data-ext="css" data-v-e1af89f6><pre class="language-css" data-v-e1af89f6><code data-v-e1af89f6><span class="token property" data-v-e1af89f6>font-family</span><span class="token punctuation" data-v-e1af89f6>:</span> <span class="token string" data-v-e1af89f6>&quot;Lora&quot;</span><span class="token punctuation" data-v-e1af89f6>,</span> serif<span class="token punctuation" data-v-e1af89f6>;</span>
</code></pre></div><p data-v-e1af89f6>Then all you need to do is import and use them by adding the following code in the VuePress configuration file:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-v-e1af89f6><pre class="language-typescript" data-v-e1af89f6><code data-v-e1af89f6><span class="token comment" data-v-e1af89f6>// .vuepress/config.ts</span>
<span class="token keyword" data-v-e1af89f6>import</span> <span class="token punctuation" data-v-e1af89f6>{</span> defineUserConfig <span class="token punctuation" data-v-e1af89f6>}</span> <span class="token keyword" data-v-e1af89f6>from</span> <span class="token string" data-v-e1af89f6>&quot;vuepress&quot;</span><span class="token punctuation" data-v-e1af89f6>;</span>

<span class="token keyword" data-v-e1af89f6>export</span> <span class="token keyword" data-v-e1af89f6>default</span> <span class="token function" data-v-e1af89f6>defineUserConfig</span><span class="token punctuation" data-v-e1af89f6>(</span><span class="token punctuation" data-v-e1af89f6>{</span>
  <span class="token comment" data-v-e1af89f6>//...</span>

  head<span class="token operator" data-v-e1af89f6>:</span> <span class="token punctuation" data-v-e1af89f6>[</span>
    <span class="token comment" data-v-e1af89f6>//...</span>

    <span class="token comment" data-v-e1af89f6>// Import the corresponding link</span>
    <span class="token punctuation" data-v-e1af89f6>[</span><span class="token string" data-v-e1af89f6>&quot;link&quot;</span><span class="token punctuation" data-v-e1af89f6>,</span> <span class="token punctuation" data-v-e1af89f6>{</span> rel<span class="token operator" data-v-e1af89f6>:</span> <span class="token string" data-v-e1af89f6>&quot;preconnect&quot;</span><span class="token punctuation" data-v-e1af89f6>,</span> href<span class="token operator" data-v-e1af89f6>:</span> <span class="token string" data-v-e1af89f6>&quot;https://fonts.googleapis.com&quot;</span> <span class="token punctuation" data-v-e1af89f6>}</span><span class="token punctuation" data-v-e1af89f6>]</span><span class="token punctuation" data-v-e1af89f6>,</span>
    <span class="token punctuation" data-v-e1af89f6>[</span>
      <span class="token string" data-v-e1af89f6>&quot;link&quot;</span><span class="token punctuation" data-v-e1af89f6>,</span>
      <span class="token punctuation" data-v-e1af89f6>{</span> rel<span class="token operator" data-v-e1af89f6>:</span> <span class="token string" data-v-e1af89f6>&quot;preconnect&quot;</span><span class="token punctuation" data-v-e1af89f6>,</span> href<span class="token operator" data-v-e1af89f6>:</span> <span class="token string" data-v-e1af89f6>&quot;https://fonts.gstatic.com&quot;</span><span class="token punctuation" data-v-e1af89f6>,</span> crossorigin<span class="token operator" data-v-e1af89f6>:</span> <span class="token string" data-v-e1af89f6>&quot;&quot;</span> <span class="token punctuation" data-v-e1af89f6>}</span><span class="token punctuation" data-v-e1af89f6>,</span>
    <span class="token punctuation" data-v-e1af89f6>]</span><span class="token punctuation" data-v-e1af89f6>,</span>
    <span class="token punctuation" data-v-e1af89f6>[</span>
      <span class="token string" data-v-e1af89f6>&quot;link&quot;</span><span class="token punctuation" data-v-e1af89f6>,</span>
      <span class="token punctuation" data-v-e1af89f6>{</span>
        href<span class="token operator" data-v-e1af89f6>:</span> <span class="token string" data-v-e1af89f6>&quot;https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&amp;display=swap&quot;</span><span class="token punctuation" data-v-e1af89f6>,</span>
        rel<span class="token operator" data-v-e1af89f6>:</span> <span class="token string" data-v-e1af89f6>&quot;stylesheet&quot;</span><span class="token punctuation" data-v-e1af89f6>,</span>
      <span class="token punctuation" data-v-e1af89f6>}</span><span class="token punctuation" data-v-e1af89f6>,</span>
    <span class="token punctuation" data-v-e1af89f6>]</span><span class="token punctuation" data-v-e1af89f6>,</span>
  <span class="token punctuation" data-v-e1af89f6>]</span><span class="token punctuation" data-v-e1af89f6>,</span>

  <span class="token comment" data-v-e1af89f6>//...</span>
<span class="token punctuation" data-v-e1af89f6>}</span><span class="token punctuation" data-v-e1af89f6>)</span><span class="token punctuation" data-v-e1af89f6>;</span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-e1af89f6><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div><div class="line-number" data-v-e1af89f6></div></div></div><p data-v-e1af89f6>Also modify the <code data-v-e1af89f6>$font-family</code> variable in the palette file:</p><div class="language-scss" data-ext="scss" data-v-e1af89f6><pre class="language-scss" data-v-e1af89f6><code data-v-e1af89f6><span class="token comment" data-v-e1af89f6>// .vuepress/styles/palette.scss</span>

<span class="token comment" data-v-e1af89f6>// apply font</span>
<span class="token property" data-v-e1af89f6><span class="token variable" data-v-e1af89f6>$font-family</span></span><span class="token punctuation" data-v-e1af89f6>:</span> <span class="token string" data-v-e1af89f6>&quot;Lora, serif&quot;</span><span class="token punctuation" data-v-e1af89f6>;</span>
</code></pre></div><p data-v-e1af89f6>In this way, you can use lora font in your website.</p><details class="hint-container details" data-v-e1af89f6><summary data-v-e1af89f6>lora Demo</summary><!-- markdownlint-disable MD033 --><div class="lora" data-v-e1af89f6><h2 id="whereas-recognition-of-the-inherent-dignity" tabindex="-1" data-v-e1af89f6><a class="header-anchor" href="#whereas-recognition-of-the-inherent-dignity" aria-hidden="true" data-v-e1af89f6>#</a> Whereas recognition of the inherent dignity</h2><p data-v-e1af89f6>No one shall be subjected to arbitrary arrest, detention or exile.<br data-v-e1af89f6> Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.<br data-v-e1af89f6> No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.</p></div><!-- markdownlint-enable MD033 --></details><hr class="footnotes-sep" data-v-e1af89f6>`,11),b={class:"footnotes"},_={class:"footnotes-list"},w={id:"footnote1",class:"footnote-item"},q={href:"https://www.zhihu.com/topic/19559432/intro",target:"_blank",rel:"noopener noreferrer"},x=n(()=>a("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1)),F={id:"footnote2",class:"footnote-item"},S={href:"https://www.zhihu.com/topic/19559433/intro",target:"_blank",rel:"noopener noreferrer"},I=n(()=>a("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1)),N=n(()=>a("li",{id:"footnote3",class:"footnote-item"},[a("p",null,"From Wikipedia"),a("p",null,"Fallback fonts are fonts that are used to display missing characters when the displayed font lacks certain characters. Because it serves as the last line of defense for display, fallback fonts should contain all Unicode characters where possible."),a("p",null,[t("When a missing character has no fallback font for display, the missing character is usually displayed as a black square, white hollow square, question mark, Unicode placeholder (U+FFFD), or simply skipped. In practice, systems such as CSS that support sequential display of font lists usually put one or more sets of fallback fonts at the end of the list to prevent missing characters. "),a("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎"),t(),a("a",{href:"#footnote-ref3:1",class:"footnote-backref"},"↩︎")])],-1)),$=i({__name:"font.html",setup(e){return d("https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@600;900&display=swap"),(C,L)=>{const s=p("ExternalLinkIcon");return c(),l("div",null,[k,r(" more "),m,a("p",null,[t("You can find more fonts in "),a("a",g,[t("Google Fonts"),o(s)]),t(", and you can preview and download them online.")]),y,a("section",b,[a("ol",_,[a("li",w,[a("p",null,[t("Related introduction: "),a("a",q,[t("https://www.zhihu.com/topic/19559432/intro"),o(s)]),t(),x])]),a("li",F,[a("p",null,[t("Related introduction: "),a("a",S,[t("https://www.zhihu.com/topic/19559433/intro"),o(s)]),t(),I])]),N])])])}}});const T=h($,[["__scopeId","data-v-e1af89f6"],["__file","font.html.vue"]]);export{T as default};
