import{aj as a,ak as n,ao as e,ap as i,aq as l,as as r,am as p,ar as h,al as o}from"./app-BLmUDr3s.js";const d={},k={class:"hint-container info"};function c(m,s){const t=h("RouteLink");return o(),n("div",null,[s[4]||(s[4]=e("h2",{id:"配置概念",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置概念"},[e("span",null,"配置概念")])],-1)),s[5]||(s[5]=e("p",null,[i("VuePress 主要通过目录下的 "),e("code",null,".vuepress/"),i(" 文件夹存放配置和需要的文件。")],-1)),e("div",k,[s[3]||(s[3]=e("p",{class:"hint-container-title"},"相关信息",-1)),e("p",null,[s[1]||(s[1]=i("关于 VuePress 的文件结构，详见 ")),l(t,{to:"/zh/cookbook/vuepress/file.html"},{default:r(()=>s[0]||(s[0]=[i("VuePress 基础 → 文件结构")])),_:1}),s[2]||(s[2]=i("。"))])]),s[6]||(s[6]=p(`<p>在 VuePress 中，有三种配置概念:</p><ul><li>站点配置: 这是你在 <a href="https://vuejs.press/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">配置文件</a> 中直接导出的对象</li><li>主题配置: 传递给 <code>hopeTheme</code> 的第一个对象</li><li>页面配置: 由在页面顶部基于 YAML 语法的 Frontmatter 提供</li></ul><h2 id="使用主题" tabindex="-1"><a class="header-anchor" href="#使用主题"><span>使用主题</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 站点选项</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 主题选项</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 主题行为选项 (可选)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4))])}const g=a(d,[["render",c],["__file","intro.html.vue"]]),A=JSON.parse('{"path":"/zh/config/intro.html","title":"配置介绍","lang":"zh-CN","frontmatter":{"title":"配置介绍","icon":"gears","order":1,"category":["配置"],"tag":["介绍"],"description":"配置概念 VuePress 主要通过目录下的 .vuepress/ 文件夹存放配置和需要的文件。 相关信息 关于 VuePress 的文件结构，详见 。 在 VuePress 中，有三种配置概念: 站点配置: 这是你在 配置文件 中直接导出的对象 主题配置: 传递给 hopeTheme 的第一个对象 页面配置: 由在页面顶部基于 YAML 语法的 Fr...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-hope.vuejs.press/config/intro.html"}],["meta",{"property":"og:url","content":"https://theme-hope.vuejs.press/zh/config/intro.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"配置介绍"}],["meta",{"property":"og:description","content":"配置概念 VuePress 主要通过目录下的 .vuepress/ 文件夹存放配置和需要的文件。 相关信息 关于 VuePress 的文件结构，详见 。 在 VuePress 中，有三种配置概念: 站点配置: 这是你在 配置文件 中直接导出的对象 主题配置: 传递给 hopeTheme 的第一个对象 页面配置: 由在页面顶部基于 YAML 语法的 Fr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-23T11:46:45.000Z"}],["meta",{"property":"article:tag","content":"介绍"}],["meta",{"property":"article:modified_time","content":"2024-09-23T11:46:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置介绍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-23T11:46:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://theme-hope.vuejs.press/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://theme-hope.vuejs.press/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://theme-hope.vuejs.press/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"配置概念","slug":"配置概念","link":"#配置概念","children":[]},{"level":2,"title":"使用主题","slug":"使用主题","link":"#使用主题","children":[]}],"git":{"createdTime":1644936187000,"updatedTime":1727092005000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":16}]},"readingTime":{"minutes":0.62,"words":185},"filePathRelative":"zh/config/intro.md","localizedDate":"2022年2月15日","excerpt":"","autoDesc":true}');export{g as comp,A as data};
