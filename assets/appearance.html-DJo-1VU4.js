import{aj as r,ak as h,ao as i,an as d,ap as t,aq as l,am as o,as as a,ar as p,al as k}from"./app-BLmUDr3s.js";const u={},g={id:"iconassets",tabindex:"-1"},m={class:"header-anchor",href:"#iconassets"},y={id:"darkmode",tabindex:"-1"},B={class:"header-anchor",href:"#darkmode"},C={id:"externallinkicon",tabindex:"-1"},A={class:"header-anchor",href:"#externallinkicon"},f={id:"pure",tabindex:"-1"},c={class:"header-anchor",href:"#pure"},F={id:"print",tabindex:"-1"},x={class:"header-anchor",href:"#print"},v={id:"iconprefix",tabindex:"-1"},b={class:"header-anchor",href:"#iconprefix"};function E(D,s){const e=p("Badge"),n=p("RouteLink");return k(),h("div",null,[s[30]||(s[30]=i("p",null,"以下选项控制主题的外观，一般情况下你无需关注他们，它们仅为有相关配置需求的少数用户提供。",-1)),d(" more "),s[31]||(s[31]=i("div",{class:"hint-container warning"},[i("p",{class:"hint-container-title"},"注意"),i("p",null,[t("这些选项"),i("strong",null,"仅支持在主题配置中直接配置"),t("，而不支持在各语言中分别配置。")])],-1)),i("h2",g,[i("a",m,[i("span",null,[s[0]||(s[0]=t("iconAssets ")),l(e,{text:"仅限 Root",type:"warning"})])])]),i("ul",null,[s[3]||(s[3]=o('<li><p>类型: <code>FontIconAssets</code></p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Link</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `/</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">${</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `//</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">${</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `http://</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">${</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `https://</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">${</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> BuiltInFontIcon</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;iconify&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;fontawesome&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;fontawesome-with-brands&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> FontIconAssets</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> BuiltInFontIcon</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Link</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">BuiltInFontIcon</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Link</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)[];</span></span></code></pre></div></li><li><p>必填: 否</p></li>',2)),i("li",null,[s[2]||(s[2]=i("p",null,"详情:",-1)),i("ul",null,[i("li",null,[l(n,{to:"/zh/guide/interface/icon.html"},{default:a(()=>s[1]||(s[1]=[t("界面 → 图标")])),_:1})])])])]),s[32]||(s[32]=i("p",null,[t("字体图标资源链接，支持 "),i("code",null,"'iconify'"),t(),i("code",null,"'fontawesome'"),t(" 和 "),i("code",null,"'fontawesome-with-brands'"),t(" 关键字。")],-1)),i("h2",y,[i("a",B,[i("span",null,[s[4]||(s[4]=t("darkmode ")),l(e,{text:"默认启用"}),s[5]||(s[5]=t()),l(e,{text:"仅限 Root",type:"warning"})])])]),i("ul",null,[s[8]||(s[8]=i("li",null,[t("类型: "),i("code",null,'"switch" | "toggle" | "auto" | "enable" | "disable"')],-1)),s[9]||(s[9]=i("li",null,[t("默认值: "),i("code",null,'"switch"')],-1)),i("li",null,[s[7]||(s[7]=t("详情: ")),i("ul",null,[i("li",null,[l(n,{to:"/zh/guide/interface/darkmode.html"},{default:a(()=>s[6]||(s[6]=[t("界面 → 深色模式")])),_:1})])])])]),s[33]||(s[33]=o('<p>深色模式支持选项:</p><ul><li><code>&quot;switch&quot;</code>: 在深色模式，浅色模式和自动之间切换</li><li><code>&quot;toggle&quot;</code>: 在深色模式和浅色模式之间切换</li><li><code>&quot;auto&quot;</code>: 自动根据用户设备主题或当前时间决定是否应用深色模式</li><li><code>&quot;enable&quot;</code>: 强制深色模式</li><li><code>&quot;disable&quot;</code>: 禁用深色模式</li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p>如果你不需要这项功能，请设置 <code>darkmode: &quot;disable&quot;</code> 将其禁用。</p></div>',3)),i("h2",C,[i("a",A,[i("span",null,[s[10]||(s[10]=t("externalLinkIcon ")),l(e,{text:"enabled by default"})])])]),s[34]||(s[34]=i("ul",null,[i("li",null,[t("类型: "),i("code",null,"boolean")]),i("li",null,[t("默认值: "),i("code",null,"true")])],-1)),s[35]||(s[35]=i("p",null,"控制是否在外部链接上显示图标。",-1)),s[36]||(s[36]=i("h2",{id:"fullscreen",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#fullscreen"},[i("span",null,"fullscreen")])],-1)),i("ul",null,[s[13]||(s[13]=i("li",null,[t("类型: "),i("code",null,"boolean")],-1)),s[14]||(s[14]=i("li",null,[t("默认值: "),i("code",null,"false")],-1)),i("li",null,[s[12]||(s[12]=t("详情: ")),i("ul",null,[i("li",null,[l(n,{to:"/zh/guide/interface/others.html#%E5%85%A8%E5%B1%8F%E6%8C%89%E9%92%AE"},{default:a(()=>s[11]||(s[11]=[t("界面 → 全屏按钮")])),_:1})])])])]),s[37]||(s[37]=i("p",null,"是否显示全屏按钮。",-1)),i("h2",f,[i("a",c,[i("span",null,[s[15]||(s[15]=t("pure ")),l(e,{text:"仅限 Root",type:"warning"})])])]),i("ul",null,[s[18]||(s[18]=i("li",null,[t("类型: "),i("code",null,"boolean")],-1)),s[19]||(s[19]=i("li",null,[t("默认值: "),i("code",null,"false")],-1)),i("li",null,[s[17]||(s[17]=t("详情: ")),i("ul",null,[i("li",null,[l(n,{to:"/zh/guide/interface/others.html#%E7%BA%AF%E5%87%80%E6%A8%A1%E5%BC%8F"},{default:a(()=>s[16]||(s[16]=[t("界面 → 纯净模式")])),_:1})])])])]),s[38]||(s[38]=i("p",null,"是否开启纯净模式。",-1)),s[39]||(s[39]=i("div",{class:"hint-container tip"},[i("p",{class:"hint-container-title"},"提示"),i("p",null,"启用此功能将禁用一些花哨的样式。"),i("p",null,"当你想提供“纯文档站点”时很有用。")],-1)),i("h2",F,[i("a",x,[i("span",null,[s[20]||(s[20]=t("print ")),l(e,{text:"仅限 Root",type:"warning"})])])]),i("ul",null,[s[23]||(s[23]=i("li",null,[t("类型: "),i("code",null,"boolean")],-1)),s[24]||(s[24]=i("li",null,[t("默认值: "),i("code",null,"true")],-1)),i("li",null,[s[22]||(s[22]=t("详情: ")),i("ul",null,[i("li",null,[l(n,{to:"/zh/guide/interface/others.html#%E6%89%93%E5%8D%B0%E6%8C%89%E9%92%AE"},{default:a(()=>s[21]||(s[21]=[t("界面 → 打印按钮")])),_:1})])])])]),s[40]||(s[40]=i("p",null,"是否在桌面模式下显示打印按钮。",-1)),i("h2",v,[i("a",b,[i("span",null,[s[25]||(s[25]=t("iconPrefix ")),l(e,{text:"仅限 Root",type:"warning"})])])]),i("ul",null,[s[28]||(s[28]=i("li",null,[t("类型: "),i("code",null,"string")],-1)),s[29]||(s[29]=i("li",null,"默认值: 尝试从 iconAssets 推断",-1)),i("li",null,[s[27]||(s[27]=t("详情: ")),i("ul",null,[i("li",null,[l(n,{to:"/zh/guide/interface/icon.html"},{default:a(()=>s[26]||(s[26]=[t("界面 → 图标")])),_:1})])])])]),s[41]||(s[41]=i("p",null,"通常情况下，它可以识别 iconAssets 并自动设置，如果识别失败，你可以手动设置图标的 FontClass 前缀。",-1))])}const w=r(u,[["render",E],["__file","appearance.html.vue"]]),z=JSON.parse('{"path":"/zh/config/theme/appearance.html","title":"主题外观选项","lang":"zh-CN","frontmatter":{"title":"主题外观选项","icon":"palette","order":4,"category":["配置"],"tag":["主题配置","外观"],"description":"以下选项控制主题的外观，一般情况下你无需关注他们，它们仅为有相关配置需求的少数用户提供。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-hope.vuejs.press/config/theme/appearance.html"}],["meta",{"property":"og:url","content":"https://theme-hope.vuejs.press/zh/config/theme/appearance.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"主题外观选项"}],["meta",{"property":"og:description","content":"以下选项控制主题的外观，一般情况下你无需关注他们，它们仅为有相关配置需求的少数用户提供。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-25T17:04:37.000Z"}],["meta",{"property":"article:tag","content":"主题配置"}],["meta",{"property":"article:tag","content":"外观"}],["meta",{"property":"article:modified_time","content":"2024-09-25T17:04:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"主题外观选项\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-25T17:04:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://theme-hope.vuejs.press/zh/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://theme-hope.vuejs.press/zh/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://theme-hope.vuejs.press/zh/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"iconAssets","slug":"iconassets","link":"#iconassets","children":[]},{"level":2,"title":"darkmode","slug":"darkmode","link":"#darkmode","children":[]},{"level":2,"title":"externalLinkIcon","slug":"externallinkicon","link":"#externallinkicon","children":[]},{"level":2,"title":"fullscreen","slug":"fullscreen","link":"#fullscreen","children":[]},{"level":2,"title":"pure","slug":"pure","link":"#pure","children":[]},{"level":2,"title":"print","slug":"print","link":"#print","children":[]},{"level":2,"title":"iconPrefix","slug":"iconprefix","link":"#iconprefix","children":[]}],"git":{"createdTime":1644936187000,"updatedTime":1727283877000,"contributors":[{"name":"Trezedo","email":"75014380+Trezedo@users.noreply.github.com","commits":1},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Ackerven","email":"ackerven@gmail.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":22}]},"readingTime":{"minutes":1.76,"words":527},"filePathRelative":"zh/config/theme/appearance.md","localizedDate":"2022年2月15日","excerpt":"<p>以下选项控制主题的外观，一般情况下你无需关注他们，它们仅为有相关配置需求的少数用户提供。</p>\\n","autoDesc":true}');export{w as comp,z as data};
