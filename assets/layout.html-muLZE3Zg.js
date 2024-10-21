import{aj as o,ak as r,ao as t,an as p,ap as i,aq as e,as as n,am as a,ar as h,al as d}from"./app-BLmUDr3s.js";const k={};function g(u,s){const l=h("RouteLink");return d(),r("div",null,[s[35]||(s[35]=t("p",null,"此教程指导你如何修改主题布局。",-1)),p(" more "),s[36]||(s[36]=t("h2",{id:"修改主题配置",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#修改主题配置"},[t("span",null,"修改主题配置")])],-1)),t("p",null,[s[1]||(s[1]=i("主题提供了很多布局有关的选项，供你自定义主题的布局，关于这些选项详见 ")),e(l,{to:"/zh/config/theme/layout.html"},{default:n(()=>s[0]||(s[0]=[i("主题配置 → 布局")])),_:1}),s[2]||(s[2]=i("。"))]),s[37]||(s[37]=t("h2",{id:"响应式断点",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#响应式断点"},[t("span",null,"响应式断点")])],-1)),t("p",null,[s[4]||(s[4]=i("主题在不同屏幕宽度下会自动响应式应用不同布局，如果你需要修改这些断点，可以在 ")),e(l,{to:"/zh/config/style.html#configscss"},{default:n(()=>s[3]||(s[3]=[i("样式配置文件")])),_:1}),s[5]||(s[5]=i("中修改，"))]),s[38]||(s[38]=a(`<div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title=".vuepress/styles/config.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 修改桌面布局的断点</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$pc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = 1280px;</span></span></code></pre></div>`,1)),t("p",null,[s[7]||(s[7]=i("断点变量 ")),s[8]||(s[8]=t("code",null,"$pc",-1)),s[9]||(s[9]=i("、")),s[10]||(s[10]=t("code",null,"$laptop",-1)),s[11]||(s[11]=i("、")),s[12]||(s[12]=t("code",null,"$pad",-1)),s[13]||(s[13]=i("、")),s[14]||(s[14]=t("code",null,"$tablet",-1)),s[15]||(s[15]=i("、")),s[16]||(s[16]=t("code",null,"$mobile",-1)),s[17]||(s[17]=i(" 的具体介绍详见 ")),e(l,{to:"/zh/config/style.html#configscss"},{default:n(()=>s[6]||(s[6]=[i("主题配置 → 样式")])),_:1}),s[18]||(s[18]=i("。"))]),s[39]||(s[39]=t("h2",{id:"布局尺寸",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#布局尺寸"},[t("span",null,"布局尺寸")])],-1)),t("p",null,[s[20]||(s[20]=i("主题在调色板文件中提供了常见尺寸的变量，你可以在 ")),e(l,{to:"/zh/config/style.html#palettescss"},{default:n(()=>s[19]||(s[19]=[i("调色版文件")])),_:1}),s[21]||(s[21]=i(" 中修改这些变量，以达到修改布局尺寸的目的。"))]),s[40]||(s[40]=a(`<div class="language-scss" data-highlighter="shiki" data-ext="scss" data-title=".vuepress/styles/palette.scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 修改导航栏高度</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$navbar-height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = 80px;</span></span></code></pre></div>`,1)),t("p",null,[s[23]||(s[23]=i("布局变量的介绍详见 ")),e(l,{to:"/zh/config/style.html#palettescss"},{default:n(()=>s[22]||(s[22]=[i("主题配置 → 样式")])),_:1}),s[24]||(s[24]=i("。"))]),s[41]||(s[41]=t("h2",{id:"通过样式文件",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#通过样式文件"},[t("span",null,"通过样式文件")])],-1)),t("p",null,[e(l,{to:"/zh/config/style.html#indexscss"},{default:n(()=>s[25]||(s[25]=[i("样式文件")])),_:1}),s[26]||(s[26]=i(" 为项目目录下的 ")),s[27]||(s[27]=t("code",null,".vuepress/styles/index.scss",-1)),s[28]||(s[28]=i("，你可以通过它自行添加样式。"))]),s[42]||(s[42]=a('<ul><li><p>如果你对主题的样式不满意，你可以通过样式文件对主题组件的样式进行调节。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>为了覆盖原有样式，你需要使用相同或更高优先级的选择器或者直接使用 <code>!important</code>。</p></div></li><li><p>如果你希望去掉一些功能，你可以在样式文件中通过 <code>display: none</code> 隐藏相关元素。</p></li></ul><h3 id="通过添加-覆盖布局" tabindex="-1"><a class="header-anchor" href="#通过添加-覆盖布局"><span>通过添加/覆盖布局</span></a></h3>',2)),t("p",null,[s[30]||(s[30]=i("你可以通过 ")),e(l,{to:"/zh/cookbook/vuepress/config.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:n(()=>s[29]||(s[29]=[i("客户端配置文件")])),_:1}),s[31]||(s[31]=i(" 中的“layouts”选项添加新布局或覆盖现有布局。"))]),p(" #region layout "),s[43]||(s[43]=a(`<div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/client.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineClientConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress/client&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> Changelog</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;./layouts/Changelog.vue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> Layout</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;./layouts/Layout.vue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineClientConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 你可以在这里添加或覆盖布局</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  layouts</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 例如，在这里我们将 vuepress-theme-hope 的默认布局更改为 layouts/Layout.vue</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    Layout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 我们还添加了一个 Changelog 布局</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    Changelog</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div>`,1)),p(" #endregion layout "),s[44]||(s[44]=a('<p>主题提供了如下布局:</p><ul><li><p>Layout</p><p>基础布局，具有以下插槽：</p><ul><li><code>default</code>: 页面内容插槽</li><li><code>top</code>: 页面顶部插槽</li><li><code>bottom</code>: 页面底部插槽</li><li><code>contentBefore</code>: 页面内容前插槽</li><li><code>contentAfter</code>: 页面内容后插槽</li><li><code>tocBefore</code>: 页面 TOC 前插槽</li><li><code>tocAfter</code>: 页面 TOC 后插槽</li></ul></li><li><p>NotFound</p><p>404 页面布局，具有以下插槽：</p><ul><li><code>default</code>: 404 内容插槽</li></ul></li><li><p>Slide: 仅当幻灯片启用时有效</p></li><li><p>BlogCategory: 仅当博客启用时有效</p></li><li><p>BlogHome: 仅当博客启用时有效</p></li><li><p>BlogType: 仅当博客启用时有效</p></li><li><p>Timeline: 仅当博客启用时有效</p></li></ul><h3 id="通过覆盖组件" tabindex="-1"><a class="header-anchor" href="#通过覆盖组件"><span>通过覆盖组件</span></a></h3>',3)),t("p",null,[s[33]||(s[33]=i("请参见")),e(l,{to:"/zh/guide/advanced/replace.html"},{default:n(()=>s[32]||(s[32]=[i("替换主题组件")])),_:1}),s[34]||(s[34]=i(" 。"))])])}const m=o(k,[["render",g],["__file","layout.html.vue"]]),A=JSON.parse('{"path":"/zh/guide/customize/layout.html","title":"自定义布局","lang":"zh-CN","frontmatter":{"title":"自定义布局","icon":"clone","category":["教程","自定义"],"tag":["自定义","布局"],"description":"此教程指导你如何修改主题布局。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-hope.vuejs.press/guide/customize/layout.html"}],["meta",{"property":"og:url","content":"https://theme-hope.vuejs.press/zh/guide/customize/layout.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"自定义布局"}],["meta",{"property":"og:description","content":"此教程指导你如何修改主题布局。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-23T11:46:45.000Z"}],["meta",{"property":"article:tag","content":"自定义"}],["meta",{"property":"article:tag","content":"布局"}],["meta",{"property":"article:modified_time","content":"2024-09-23T11:46:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义布局\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-23T11:46:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://theme-hope.vuejs.press/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://theme-hope.vuejs.press/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://theme-hope.vuejs.press/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"修改主题配置","slug":"修改主题配置","link":"#修改主题配置","children":[]},{"level":2,"title":"响应式断点","slug":"响应式断点","link":"#响应式断点","children":[]},{"level":2,"title":"布局尺寸","slug":"布局尺寸","link":"#布局尺寸","children":[]},{"level":2,"title":"通过样式文件","slug":"通过样式文件","link":"#通过样式文件","children":[{"level":3,"title":"通过添加/覆盖布局","slug":"通过添加-覆盖布局","link":"#通过添加-覆盖布局","children":[]},{"level":3,"title":"通过覆盖组件","slug":"通过覆盖组件","link":"#通过覆盖组件","children":[]}]}],"git":{"createdTime":1699526999000,"updatedTime":1727092005000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":8}]},"readingTime":{"minutes":2.19,"words":657},"filePathRelative":"zh/guide/customize/layout.md","localizedDate":"2023年11月9日","excerpt":"<p>此教程指导你如何修改主题布局。</p>\\n","autoDesc":true}');export{m as comp,A as data};
