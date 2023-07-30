import{_ as c,r as i,o as p,c as u,a as r,b as n,d as s,e as a,w as o,f as l}from"./app-c5a3c96d.js";const d={},k=n("p",null,"以下选项控制主题的外观，一般情况下你无需关注他们，它们仅为有相关配置需求的少数用户提供。",-1),h=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,[s("这些选项"),n("strong",null,"仅支持在主题配置中直接配置"),s("，而不支持在各语言中分别配置。")])],-1),_={id:"iconassets",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#iconassets","aria-hidden":"true"},"#",-1),v=l(`<li><p>类型: <code>FontIconAssets</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Link</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">//</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">BuiltInFontIcon</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&quot;iconify&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;iconfont&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;fontawesome&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;fontawesome-with-brands&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">FontIconAssets</span> <span class="token operator">=</span> BuiltInFontIcon <span class="token operator">|</span> Link <span class="token operator">|</span> <span class="token punctuation">(</span>BuiltInFontIcon <span class="token operator">|</span> Link<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li>`,2),b=n("p",null,[s("字体图标资源链接，支持 "),n("code",null,"'iconfont'"),s(" 和 "),n("code",null,"'fontawesome'"),s(" 关键字。")],-1),g={id:"darkmode",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#darkmode","aria-hidden":"true"},"#",-1),x=n("li",null,[s("类型: "),n("code",null,'"switch" | "toggle" | "auto" | "enable" | "disable"')],-1),w=n("li",null,[s("默认值: "),n("code",null,'"switch"')],-1),q=l('<p>深色模式支持选项:</p><ul><li><code>&quot;switch&quot;</code>: 在深色模式，浅色模式和自动之间切换</li><li><code>&quot;toggle&quot;</code>: 在深色模式和浅色模式之间切换</li><li><code>&quot;auto&quot;</code>: 自动根据用户设备主题或当前时间决定是否应用深色模式</li><li><code>&quot;enable&quot;</code>: 强制深色模式</li><li><code>&quot;disable&quot;</code>: 禁用深色模式</li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p>如果你不需要这项功能，请设置 <code>darkmode: &quot;disable&quot;</code> 将其禁用。</p></div><h2 id="fullscreen" tabindex="-1"><a class="header-anchor" href="#fullscreen" aria-hidden="true">#</a> fullscreen</h2>',4),y=n("li",null,[s("类型: "),n("code",null,"boolean")],-1),B=n("li",null,[s("默认值: "),n("code",null,"false")],-1),I=n("p",null,"是否显示全屏按钮。",-1),R={id:"backtotop",tabindex:"-1"},A=n("a",{class:"header-anchor",href:"#backtotop","aria-hidden":"true"},"#",-1),F=l(`<ul><li><p>类型: <code>BackToTopOptions | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BackToTopOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 滚动距离阈值，用于显示返回顶部按钮 (单位: 像素)
   *
   * <span class="token keyword">@default</span> 100
   */</span>
  threshold<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否显示滚动进度
   *
   * <span class="token keyword">@default</span> true
   */</span>
  progress<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>true</code></p></li></ul><p>自定义返回顶部按钮，将其设置为 <code>false</code> 会禁用该按钮。</p>`,2),T={id:"pure",tabindex:"-1"},E=n("a",{class:"header-anchor",href:"#pure","aria-hidden":"true"},"#",-1),z=n("li",null,[s("类型: "),n("code",null,"boolean")],-1),C=n("li",null,[s("默认值: "),n("code",null,"false")],-1),L=n("p",null,"是否开启纯净模式。",-1),N=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"启用此功能将禁用一些花哨的样式。"),n("p",null,"当你想提供“纯文档站点”时很有用。")],-1),V={id:"print",tabindex:"-1"},$=n("a",{class:"header-anchor",href:"#print","aria-hidden":"true"},"#",-1),O=n("ul",null,[n("li",null,[s("类型: "),n("code",null,"boolean")]),n("li",null,[s("默认值: "),n("code",null,"true")])],-1),P=n("p",null,"是否在桌面模式下显示打印按钮。",-1),S={id:"iconprefix",tabindex:"-1"},j=n("a",{class:"header-anchor",href:"#iconprefix","aria-hidden":"true"},"#",-1),D=n("li",null,[s("类型: "),n("code",null,"string")],-1),G=n("li",null,"默认值: 尝试从 iconAssets 推断",-1),H=n("p",null,"通常情况下，它可以识别 iconAssets 并自动设置，如果识别失败，你可以手动设置图标的 FontClass 前缀。",-1);function J(K,M){const t=i("Badge"),e=i("RouterLink");return p(),u("div",null,[k,r(" more "),h,n("h2",_,[m,s(" iconAssets "),a(t,{text:"仅限 Root",type:"warning"})]),n("ul",null,[v,n("li",null,[n("p",null,[s("详情: "),a(e,{to:"/zh/guide/interface/icon.html"},{default:o(()=>[s("界面 → 图标")]),_:1})])])]),b,n("h2",g,[f,s(" darkmode "),a(t,{text:"默认启用"}),s(),a(t,{text:"仅限 Root",type:"warning"})]),n("ul",null,[x,w,n("li",null,[s("详情: "),a(e,{to:"/zh/guide/interface/darkmode.html"},{default:o(()=>[s("界面 → 深色模式")]),_:1})])]),q,n("ul",null,[y,B,n("li",null,[s("详情: "),a(e,{to:"/zh/guide/interface/others.html#%E5%85%A8%E5%B1%8F%E6%8C%89%E9%92%AE"},{default:o(()=>[s("界面 → 全屏按钮")]),_:1})])]),I,n("h2",R,[A,s(" backToTop "),a(t,{text:"仅限 Root",type:"warning"})]),F,n("h2",T,[E,s(" pure "),a(t,{text:"仅限 Root",type:"warning"})]),n("ul",null,[z,C,n("li",null,[s("详情: "),a(e,{to:"/zh/guide/interface/pure.html"},{default:o(()=>[s("界面 → 纯净模式")]),_:1})])]),L,N,n("h2",V,[$,s(" print "),a(t,{text:"仅限 Root",type:"warning"})]),O,P,n("h2",S,[j,s(" iconPrefix "),a(t,{text:"仅限 Root",type:"warning"})]),n("ul",null,[D,G,n("li",null,[s("详情: "),a(e,{to:"/zh/guide/interface/icon.html"},{default:o(()=>[s("界面 → 图标")]),_:1})])]),H])}const U=c(d,[["render",J],["__file","appearance.html.vue"]]);export{U as default};
