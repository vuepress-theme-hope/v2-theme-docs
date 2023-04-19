import{$ as h,U as r,a0 as _,X as e,a9 as t,Y as o,W as i,ab as c,F as d}from"./framework-3a3055b3.js";const p={},u=c('<h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> components</h2><p>控制 <code>vuepress-plugin-components</code>，为 Markdown 提供一组组件。</p><p>可以在 Markdown 中使用的可用组件为:</p><ul><li><code>&quot;AudioPlayer&quot;</code></li><li><code>&quot;Badge&quot;</code></li><li><code>&quot;BiliBili&quot;</code></li><li><code>&quot;CodePen&quot;</code></li><li><code>&quot;PDF&quot;</code></li><li><code>&quot;Replit&quot;</code></li><li><code>&quot;StackBlitz&quot;</code></li><li><code>&quot;VideoPlayer&quot;</code></li><li><code>&quot;YouTube&quot;</code></li></ul><p>你可以将 <code>plugin.components.components</code> 设置为需要的组件数组，默认情况下为 <code>[&quot;Badge&quot;]</code>。</p><p>同时，你可以设置 <code>plugin.components.rootComponents</code> 来启用一些根组件，例如 addThis 和 notice。</p>',6),m={class:"hint-container info"},f=e("p",{class:"hint-container-title"},"相关信息",-1),g={id:"copycode",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#copycode","aria-hidden":"true"},"#",-1),v=e("p",null,[t("控制 "),e("code",null,"vuepress-plugin-copy-code2"),t("，提供代码复制按钮。")],-1),q=e("p",null,[t("默认情况下，不需要任何配置。如果你不需要这个功能，请设置为 "),e("code",null,"false"),t("。")],-1),j={class:"hint-container info"},b=e("p",{class:"hint-container-title"},"相关信息",-1),k={id:"git",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#",-1),P=e("p",null,[t("控制 "),e("code",null,"@vuepress/plugin-git"),t("，通过 Git 提交历史提供文件信息。")],-1),z=e("p",null,"默认情况下，为了提高开发服务器性能仅在构建模式下启用。你可以手动设置一个布尔值控制插件状态，可以设置插件选项。",-1),B={class:"hint-container info"},y=e("p",{class:"hint-container-title"},"相关信息",-1),T={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/git.html",target:"_blank",rel:"noopener noreferrer"},L={id:"nprogress",tabindex:"-1"},C=e("a",{class:"header-anchor",href:"#nprogress","aria-hidden":"true"},"#",-1),S=e("p",null,[t("控制 "),e("code",null,"@vuepress/plugin-nprogress"),t("，通过 nprogress 提供切换页面时的进度条。")],-1),V=e("p",null,[t("默认情况下，主题会启用此插件，你可以设置 "),e("code",null,"false"),t(" 禁用它。")],-1),N={id:"prismjs",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#prismjs","aria-hidden":"true"},"#",-1),M=e("p",null,[t("控制 "),e("code",null,"@vuepress/plugin-prismjs"),t("，通过 PrismJS 提供代码块高亮。")],-1),R=e("p",null,[t("默认情况下，主题会启用此插件，你可以设置 "),e("code",null,"false"),t(" 禁用它并自行高亮代码块。")],-1),F=e("h3",{id:"prismjs-light",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prismjs-light","aria-hidden":"true"},"#"),t(" prismjs.light")],-1),I=e("li",null,[t("类型: "),e("code",null,"PrismjsTheme")],-1),Y=e("li",null,[t("默认值: "),e("code",null,'"one-light"')],-1),A=e("p",null,"日间模式使用的 Prism.js 主题",-1),D=e("h3",{id:"prismjs-dark",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prismjs-dark","aria-hidden":"true"},"#"),t(" prismjs.dark")],-1),G=e("li",null,[t("类型: "),e("code",null,"PrismjsTheme")],-1),J=e("li",null,[t("默认值: "),e("code",null,'"one-dark"')],-1),U=e("p",null,"夜间模式使用的 Prism.js 主题",-1),W={id:"photoswipe",tabindex:"-1"},X=e("a",{class:"header-anchor",href:"#photoswipe","aria-hidden":"true"},"#",-1),$=e("p",null,[t("控制 "),e("code",null,"vuepress-plugin-photo-swipe"),t("，提供图片浏览功能。")],-1),H=e("p",null,[t("默认情况下，不需要任何配置。如果你不需要这个功能，请设置为 "),e("code",null,"false"),t("。")],-1),K={class:"hint-container info"},O=e("p",{class:"hint-container-title"},"相关信息",-1),Q={id:"readingtime",tabindex:"-1"},Z=e("a",{class:"header-anchor",href:"#readingtime","aria-hidden":"true"},"#",-1),ee=c('<p>控制 <code>vuepress-plugin-reading-time2</code>，为页面进行字数统计并生成预计的阅读时间。</p><h3 id="readingtime-wordperminute" tabindex="-1"><a class="header-anchor" href="#readingtime-wordperminute" aria-hidden="true">#</a> readingTime.wordPerMinute</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>300</code></li></ul><p>每分钟的阅读字数。</p>',4),te={class:"hint-container info"},oe=e("p",{class:"hint-container-title"},"相关信息",-1),ne={id:"seo",tabindex:"-1"},ie=e("a",{class:"header-anchor",href:"#seo","aria-hidden":"true"},"#",-1),se=e("p",null,[t("控制 "),e("code",null,"vuepress-plugin-seo2"),t("，提供搜索引擎增强。")],-1),de=e("p",null,[t("默认情况下，不需要任何配置。如果你不需要这个功能，请设置为 "),e("code",null,"false"),t("。")],-1),le={class:"hint-container info"},ce=e("p",{class:"hint-container-title"},"相关信息",-1),ae={id:"sitemap",tabindex:"-1"},he=e("a",{class:"header-anchor",href:"#sitemap","aria-hidden":"true"},"#",-1),re=e("p",null,[t("控制 "),e("code",null,"vuepress-plugin-sitemap2"),t("，为网站自动生成 Sitemap。")],-1),_e=e("p",null,[t("默认情况下，不需要任何配置。如果你不需要这个功能，请设置为 "),e("code",null,"false"),t("。")],-1),pe={class:"hint-container info"},ue=e("p",{class:"hint-container-title"},"相关信息",-1);function me(fe,ge){const s=d("ProjectLink"),n=d("Badge"),a=d("ExternalLinkIcon"),l=d("RouterLink");return r(),_("div",null,[u,e("div",m,[f,e("p",null,[t("插件选项请参见 "),o(s,{name:"components",path:"/zh/config.html"},{default:i(()=>[t("components 插件选项")]),_:1}),t("。")])]),e("h2",g,[x,t(" copyCode "),o(n,{text:"默认启用"})]),v,q,e("div",j,[b,e("p",null,[t("插件选项请参见 "),o(s,{name:"copy-code2",path:"/zh/config.html"},{default:i(()=>[t("copy-code2 插件选项")]),_:1}),t("。")])]),e("h2",k,[w,t(" git "),o(n,{text:"默认仅限构建模式"})]),P,z,e("div",B,[y,e("p",null,[t("插件选项请参见 "),e("a",T,[t("git 插件选项"),o(a)]),t("。")])]),e("h2",L,[C,t(" nprogress "),o(n,{text:"默认启用"})]),S,V,e("h2",N,[E,t(" prismjs "),o(n,{text:"默认启用"})]),M,R,F,e("ul",null,[I,Y,e("li",null,[t("详情: "),o(l,{to:"/zh/guide/interface/code-theme.html"},{default:i(()=>[t("界面 → 代码主题")]),_:1})])]),A,D,e("ul",null,[G,J,e("li",null,[t("详情: "),o(l,{to:"/zh/guide/interface/code-theme.html"},{default:i(()=>[t("界面 → 代码主题")]),_:1})])]),U,e("h2",W,[X,t(" photoSwipe "),o(n,{text:"默认启用"})]),$,H,e("div",K,[O,e("p",null,[t("插件选项请参见 "),o(s,{name:"photo-swipe",path:"/zh/config.html"},{default:i(()=>[t("photo-swipe 插件选项")]),_:1}),t("。")])]),e("h2",Q,[Z,t(" readingTime "),o(n,{text:"默认启用"})]),ee,e("div",te,[oe,e("p",null,[t("更多插件选项请参见 "),o(s,{name:"reading-time2",path:"/zh/config.html"},{default:i(()=>[t("reading-time2 插件文档")]),_:1}),t("。")])]),e("h2",ne,[ie,t(" seo "),o(n,{text:"默认启用"})]),se,de,e("div",le,[ce,e("p",null,[t("插件选项请参见 "),o(s,{name:"seo2",path:"/zh/config.html"},{default:i(()=>[t("seo2 插件选项")]),_:1}),t("。")])]),e("h2",ae,[he,t(" sitemap "),o(n,{text:"默认启用"})]),re,_e,e("div",pe,[ue,e("p",null,[t("插件选项请参见 "),o(s,{name:"sitemap2",path:"/zh/config.html"},{default:i(()=>[t("sitemap2 插件选项")]),_:1}),t("。")])])])}const ve=h(p,[["render",me],["__file","others.html.vue"]]);export{ve as default};
