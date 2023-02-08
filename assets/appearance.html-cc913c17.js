import{a4 as c,_ as p,$ as d,a5 as r,a2 as e,a3 as t,a0 as n,a1 as a,a6 as l,k as i}from"./framework-bb5a5b49.js";const u={},h=e("p",null,"The following options control the appearance of the theme. You don’t need to pay attention to them in most cases, they are only provided for a small amount of users with needs.",-1),_=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"Note"),e("p",null,"These options are only valid when setting directly under the theme options, setting them in each language as no effect.")],-1),k={id:"iconassets",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#iconassets","aria-hidden":"true"},"#",-1),m=l('<li><p>Type: <code>FontIconAssets</code></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Link</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">//</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">FontIconAssets</span> <span class="token operator">=</span>\n  <span class="token operator">|</span> <span class="token string">&quot;iconfont&quot;</span>\n  <span class="token operator">|</span> <span class="token string">&quot;fontawesome&quot;</span>\n  <span class="token operator">|</span> <span class="token string">&quot;fontawesome-with-brand&quot;</span>\n  <span class="token operator">|</span> Link\n  <span class="token operator">|</span> Link<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre></div></li><li><p>Required: No</p></li>',2),g=e("p",null,[t("Link of font icon asset, "),e("code",null,"'iconfont'"),t(" and "),e("code",null,"'fontawesome'"),t(" keywords are supported.")],-1),b={id:"darkmode",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#darkmode","aria-hidden":"true"},"#",-1),w=e("li",null,[t("Type: "),e("code",null,'"switch" | "toggle" | "auto" | "enable" | "disable"')],-1),x=e("li",null,[t("Default: "),e("code",null,'"switch"')],-1),v=l('<p>Dark mode support options:</p><ul><li><code>&quot;switch&quot;</code>: switch between dark, light and auto</li><li><code>&quot;toggle&quot;</code>: toggle between lightmode and darkmode</li><li><code>&quot;auto&quot;</code>: Automatically decide whether to apply dark mode based on user device’s color-scheme or current time</li><li><code>&quot;enable&quot;</code>: only dark mode</li><li><code>&quot;disable&quot;</code>: disable dark mode</li></ul><div class="hint-container note"><p class="hint-container-title">Note</p><p>If you don’t need this feature, set <code>darkmode: &quot;disable&quot;</code> to disable it.</p></div>',3),q={id:"themecolor",tabindex:"-1"},T=e("a",{class:"header-anchor",href:"#themecolor","aria-hidden":"true"},"#",-1),D=e("li",null,[t("Type: "),e("code",null,"Record<string, string> | false")],-1),R=e("li",null,[t("Default: "),e("code",null,"false")],-1),I=e("p",null,"Theme color picker configuration.",-1),N={id:"fullscreen",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#fullscreen","aria-hidden":"true"},"#",-1),A=e("li",null,[t("Type: "),e("code",null,"boolean")],-1),C=e("li",null,[t("Default: "),e("code",null,"false")],-1),L=e("p",null,'Whether show the "full screen" button.',-1),W={id:"backtotop",tabindex:"-1"},$=e("a",{class:"header-anchor",href:"#backtotop","aria-hidden":"true"},"#",-1),F=e("li",null,[t("Type: "),e("code",null,"boolean | number")],-1),P=e("li",null,[t("Default: "),e("code",null,"true")],-1),V=e("p",null,"Whether show back to top button.",-1),E=e("p",null,[t("The default trigger distance is 300px, which can be changed when you fill in the number. Filling in "),e("code",null,"false"),t(" disables the back to top button.")],-1),Y={id:"mobilebreakpoint",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#mobilebreakpoint","aria-hidden":"true"},"#",-1),U=l('<ul><li>Type: <code>number</code></li><li>Default: <code>719</code></li></ul><p>Window width switching mobile view and desktop view in pixels</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>You should keep this option same value with <code>$tablet</code> in <code>.vuepress/config.scss</code></p></div>',3),j={id:"widebreakpoint",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#widebreakpoint","aria-hidden":"true"},"#",-1),G=l('<ul><li>Type: <code>number</code></li><li>Default: <code>1440</code></li></ul><p>Window width switching wide screen view and desktop view in pixels</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>You should keep this option same value with <code>$pc</code> in <code>.vuepress/config.scss</code></p></div>',3),H={id:"pure",tabindex:"-1"},J=e("a",{class:"header-anchor",href:"#pure","aria-hidden":"true"},"#",-1),K=e("li",null,[t("Type: "),e("code",null,"boolean")],-1),M=e("li",null,[t("Default: "),e("code",null,"false")],-1),O=e("p",null,"Whether enable pure mode.",-1),Q=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"Tips"),e("p",null,"Enabling this will disable some of the fancy styles."),e("p",null,'Useful when you want to provide "A pure document site".')],-1),X={id:"print",tabindex:"-1"},Z=e("a",{class:"header-anchor",href:"#print","aria-hidden":"true"},"#",-1),ee=e("ul",null,[e("li",null,[t("Type: "),e("code",null,"boolean")]),e("li",null,[t("Default: "),e("code",null,"true")])],-1),te=e("p",null,"Whether display print icon in desktop mode.",-1),ne={id:"iconprefix",tabindex:"-1"},oe=e("a",{class:"header-anchor",href:"#iconprefix","aria-hidden":"true"},"#",-1),se=e("li",null,[t("Type: "),e("code",null,"string")],-1),ae=e("li",null,"Default: Inferred from iconAssets",-1),le=e("p",null,"Prefix of icon FontClass， usually, it can be automatically set by the theme.",-1);function ie(ce,pe){const o=i("Badge"),s=i("RouterLink");return p(),d("div",null,[h,r(" more "),_,e("h2",k,[f,t(" iconAssets "),n(o,{text:"Root only",type:"warning"})]),e("ul",null,[m,e("li",null,[e("p",null,[t("Details: "),n(s,{to:"/guide/interface/icon.html"},{default:a(()=>[t("Interface → Icon")]),_:1})])])]),g,e("h2",b,[y,t(" darkmode "),n(o,{text:"Enabled by default"}),t(),n(o,{text:"Root only",type:"warning"})]),e("ul",null,[w,x,e("li",null,[t("Details: "),n(s,{to:"/guide/interface/darkmode.html"},{default:a(()=>[t("Interface → Darkmode")]),_:1})])]),v,e("h2",q,[T,t(" themeColor "),n(o,{text:"Root only",type:"warning"})]),e("ul",null,[D,R,e("li",null,[t("Details: "),n(s,{to:"/guide/interface/theme-color.html"},{default:a(()=>[t("Interface → ThemeColor")]),_:1})])]),I,e("h2",N,[B,t(" fullscreen "),n(o,{text:"Root only",type:"warning"})]),e("ul",null,[A,C,e("li",null,[t("Details: "),n(s,{to:"/guide/interface/others.html#fullscreen-button"},{default:a(()=>[t("Interface → FullScreen")]),_:1})])]),L,e("h2",W,[$,t(" backToTop "),n(o,{text:"Root only",type:"warning"})]),e("ul",null,[F,P,e("li",null,[t("Details: "),n(s,{to:"/guide/interface/others.html#back-to-top-button"},{default:a(()=>[t("Interface → Back to top button")]),_:1})])]),V,E,e("h2",Y,[S,t(" mobileBreakPoint "),n(o,{text:"Root only",type:"warning"})]),U,e("h2",j,[z,t(" wideBreakPoint "),n(o,{text:"Root only",type:"warning"})]),G,e("h2",H,[J,t(" pure "),n(o,{text:"Root only",type:"warning"})]),e("ul",null,[K,M,e("li",null,[t("Details: "),n(s,{to:"/guide/interface/pure.html"},{default:a(()=>[t("Interface → Pure mode")]),_:1})])]),O,Q,e("h2",X,[Z,t(" print "),n(o,{text:"Root only",type:"warning"})]),ee,te,e("h2",ne,[oe,t(" iconPrefix "),n(o,{text:"Root only",type:"warning"})]),e("ul",null,[se,ae,e("li",null,[t("Details: "),n(s,{to:"/guide/interface/icon.html"},{default:a(()=>[t("Interface → Icon")]),_:1})])]),le])}const re=c(u,[["render",ie],["__file","appearance.html.vue"]]);export{re as default};