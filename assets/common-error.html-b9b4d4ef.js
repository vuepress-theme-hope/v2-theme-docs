import{a4 as u,_ as p,$ as g,a2 as e,a3 as o,a0 as t,a1 as a,a6 as n,k as s}from"./framework-bb5a5b49.js";const f={},m=n('<h2 id="typeerror-invalid-value-used-as-weak-map-key" tabindex="-1"><a class="header-anchor" href="#typeerror-invalid-value-used-as-weak-map-key" aria-hidden="true">#</a> <code>TypeError: Invalid value used as weak map key</code></h2><p>If you are facing error like this, you are probably using non-standard tags in your project.</p><p>There are tags like <code>&lt;center&gt;</code> or <code>&lt;font&gt;</code>, which is in HTML1.0 spec, but marked as unrecommended since HTML4.0 released in 1999, then removed in HTML5 release in 2008. So Vue is not allowing you to use them by default. You should probably remove them and use standard HTML5 tag.</p><p>To remove them, run theme with <code>--debug</code> flag, and you will get warning logs telling you tags that probably not be recognized.</p>',4),b={href:"https://v2.vuepress.vuejs.org/guide/markdown.html#non-standard-html-tags",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"hydration-completed-but-contains-mismatches",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hydration-completed-but-contains-mismatches","aria-hidden":"true"},"#"),o(),e("code",null,"Hydration completed but contains mismatches.")],-1),y=e("p",null,"This error indicates that you have an SSR mismatch, and it should not be a problem with theme.",-1),x={href:"https://dash.cloudflare.com",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"YOUR_DOMAIN",-1),w=e("code",null,"JavaScript",-1),k=e("code",null,"HTML",-1),S=e("code",null,"Auto Minify",-1),T=n('<div class="hint-container warning"><p class="hint-container-title">Note</p><p>Auto Minify in CloudFlare incorrectly handle HTML spaces and line breaks, which can cause Vue triggering SSR mismatches during initialization.</p></div><p>Also you can check these:</p><ul><li><p>If you only encounter this problem on certain pages, please check whether the page has additional components you added.</p><p>If so, these components are likely to have different rendering results between SSR<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> and CSR<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>. You can try to make their behavior consistent, or wrap your components with the <code>&lt;ClientOnly /&gt;</code> component provided by <code>@vuepress/client</code>.</p></li></ul><ul><li>If you have this problem in all pages, please also follow the previous step to check the components you added in the layout or global components.</li></ul><h2 id="xxx-isn-t-assign-with-a-lang-and-will-return-en-us-instead" tabindex="-1"><a class="header-anchor" href="#xxx-isn-t-assign-with-a-lang-and-will-return-en-us-instead" aria-hidden="true">#</a> <code>xxx isn’t assign with a lang, and will return &#39;en-US&#39; instead.</code></h2><p>If you see <code>xxx isn’t assign with a lang, and will return &#39;en-US&#39; instead.</code> while the dev process is starting up, please check whether you set lang for every language.</p>',6),I=n('<h2 id="xxx-is-missing-sidebar-config" tabindex="-1"><a class="header-anchor" href="#xxx-is-missing-sidebar-config" aria-hidden="true">#</a> <code>xxx is missing sidebar config.</code></h2><p>Using object format sidebar config means you want to set different sidebar based on routes.</p><ul><li>If you want to avoid this warning, you need to add sidebar config for rootLocale path, since all pages will fallback to that.</li><li>If you want to disable sidebar in current route, set <code>sidebar: false</code> in frontmatter.</li><li>If you want to disable sidebar in current folder, add <code>[currentFolderRoute]: false</code> in sidebar config.</li><li>If you want to tell theme that you only want sidebar in routes you set, add <code>[rootLocalePath]: false</code> in sidebar config to tell theme sidebar config is disabled by default.</li></ul><h2 id="usexxx-is-called-without-provider" tabindex="-1"><a class="header-anchor" href="#usexxx-is-called-without-provider" aria-hidden="true">#</a> <code>useXXX() is called without provider</code></h2><p>Such errors are usually caused by incorrectly containing multiple versions of <code>@vue/xxx</code>, <code>@vuepress/xxx</code>, <code>vue</code> or <code>vue-router</code> in the project.</p><p>Make sure you are using the latest <code>vuepress</code> and <code>vuepress-theme-hope</code> versions and all related packages. You can use <code>vp-update</code> helper for that</p>',6),R=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),o(` dlx vp-update
`)])])],-1),L=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),o(` dlx vp-update
`)])])],-1),C=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`npx vp-update
`)])],-1),M=n('<div class="hint-container warning"><p class="hint-container-title">Note</p><p>Any official packages starting with <code>@vuepress/</code> should be upgrade to the same version as VuePress.</p><p>I.E.: if you are using <code>@vuepress/plugin-search</code> and <code>@vuepress/utils</code> , you should ensure they have the same version number as <code>vuepress</code>.</p><p>Besides, any plugin inside <code>vuepress-theme-hope</code> should be the same version as vuepress-theme-hope.</p><p>Further more, if you&#39;re using another third-party plugin, make sure it&#39;s compatible with the version of VuePress you&#39;re upgrading to.</p></div><h2 id="hotreload-not-working-in-devserver" tabindex="-1"><a class="header-anchor" href="#hotreload-not-working-in-devserver" aria-hidden="true">#</a> HotReload not working in DevServer</h2><p>Some configuration has high performance impact on dev server, so their hot reload are disabled by default. You can enable it manually via <code>hotReload: true</code> in theme options.</p><p>These include categories and tags for blog, structured sidebar and git-based information.</p><h2 id="some-page-settings-are-invalid" tabindex="-1"><a class="header-anchor" href="#some-page-settings-are-invalid" aria-hidden="true">#</a> Some page settings are invalid</h2><p>You can first review the documentation to see if the setting <strong>does not support page config</strong>.</p><p><strong>Support for page config</strong> means that the theme allows the config of the page to override the global config of the same name (same function), but not all functions meet this setting.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>You should be aware that some features will not be loaded during the prepare stage when the global setting is disabled, so they cannot be enabled locally.</p></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p><strong>SSR</strong>: <strong>S</strong>erver <strong>S</strong>ide <strong>R</strong>endering <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p><strong>CSR</strong>: <strong>C</strong>lient <strong>S</strong>ide <strong>R</strong>endering <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li></ol></section>',10);function V(A,H){const i=s("ExternalLinkIcon"),c=s("RouterLink"),h=s("CodeTabs");return p(),g("div",null,[m,e("p",null,[o("To use them anyway, check "),e("a",b,[o("here"),t(i)]),o(" to get a workaround.")]),v,y,e("p",null,[o("Please check if you are using CloudFlare related services first, if so, make sure you turn off static resource compression. Visit "),e("a",x,[o("dash.cloudflare.com"),t(i)]),o(", go to Websites → "),_,o(" → Speed → Optimization, turn "),w,o(" and "),k,o(" off in "),S,o(" options.")]),T,e("p",null,[o("Even if you only have one language, you still need to "),t(c,{to:"/config/i18n.html#setting-language"},{default:a(()=>[o("set language")]),_:1}),o(".")]),I,t(h,{id:"95",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:a(({title:r,value:d,isActive:l})=>[R]),tab1:a(({title:r,value:d,isActive:l})=>[L]),tab2:a(({title:r,value:d,isActive:l})=>[C]),_:1}),M])}const N=u(f,[["render",V],["__file","common-error.html.vue"]]);export{N as default};
