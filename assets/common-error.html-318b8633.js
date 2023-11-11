import{_ as u,r as l,o as h,c as p,e as s,w as t,d as o,b as e,f as i}from"./app-fe94cd90.js";const g={},f=i('<h2 id="usexxx-is-called-without-provider" tabindex="-1"><a class="header-anchor" href="#usexxx-is-called-without-provider" aria-hidden="true">#</a> <code>useXXX() is called without provider</code></h2><p>Such errors are usually caused by incorrectly containing multiple versions of <code>@vue/xxx</code>, <code>@vuepress/xxx</code>, <code>vue</code> or <code>vue-router</code> in the project.</p><p>Make sure you are using the latest <code>vuepress</code> and <code>vuepress-theme-hope</code> versions and all related packages. You can use <code>vp-update</code> helper for that</p>',3),m=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),o(` dlx vp-update
`)])])],-1),v=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),o(` dlx vp-update
`)])])],-1),b=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`npx vp-update
`)])],-1),y=i('<div class="hint-container warning"><p class="hint-container-title">Note</p><p>Any official packages starting with <code>@vuepress/</code> should be upgrade to the same version as VuePress.</p><p>I.E.: if you are using <code>@vuepress/plugin-search</code> and <code>@vuepress/utils</code>, you should ensure they have the same version number as <code>vuepress</code>.</p><p>Besides, any plugin inside <code>vuepress-theme-hope</code> should be the same version as vuepress-theme-hope.</p><p>Furthermore, if you&#39;re using another third-party plugin, make sure it&#39;s compatible with the version of VuePress you&#39;re upgrading to.</p></div><h2 id="you-are-not-allowed-to-use-plugin-xxx-yourself-in-vuepress-config-file" tabindex="-1"><a class="header-anchor" href="#you-are-not-allowed-to-use-plugin-xxx-yourself-in-vuepress-config-file" aria-hidden="true">#</a> <code>You are not allowed to use plugin XXX yourself in vuepress config file.</code></h2><p>This means you are calling a theme-bundled plugin yourself in VuePress config file.</p><ul><li>In most cases, when you use some plugins with theme, the theme automatically handles some plugin options for you,</li><li>Some plugins are required by the theme. If you do not enable the features used by theme, the theme will throw errors.</li></ul><p>So when you want to customize these plugins, you should set their options in <code>plugin.PLUGIN_NAME</code> under theme options and let the theme call these plugins for you.</p>',5),x=i('<h2 id="fatal-error-xxx-javascript-heap-out-of-memory" tabindex="-1"><a class="header-anchor" href="#fatal-error-xxx-javascript-heap-out-of-memory" aria-hidden="true">#</a> <code>FATAL ERROR: XXX - JavaScript heap out of memory</code></h2><p>This means that your <code>max_old_space_size</code> setting of Node.js is too small to build this application. You can try to increase the <code>max_old_space_size</code> by setting the <code>NODE_OPTIONS</code> environment variable.</p><p><code>max_old_space_size</code> is in unit of MB, by default it is half size of your machine memory.</p><p>This value can be greater than the actual memory size of your machine.</p><ul><li>For small projects, usually it won&#39;t take more than 2 GB (2048 MB).</li><li>For large projects, usually it won&#39;t take more than 4 GB (4048 MB)</li><li>If you are enabling blog feature together with lots of markdown enhance features on large sites, usually it won&#39;t take more than 8 GB (8192 MB)</li></ul>',5),_={class:"hint-container details"},w=i(`<summary>Ways of increasing</summary><p>With GitHub workflow, set <code>env</code> in your workflow file.</p><div class="language-diff" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> - name: Build project
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   env:
</span><span class="token prefix inserted">+</span><span class="token line">     NODE_OPTIONS: --max_old_space_size=8192
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   run: pnpm run build
</span></span></code></pre></div>`,3),k={href:"https://www.technewstoday.com/how-to-set-windows-environment-variables/",target:"_blank",rel:"noopener noreferrer"},S=e("h2",{id:"xxx-isn-t-assign-with-a-lang-and-will-return-en-us-instead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#xxx-isn-t-assign-with-a-lang-and-will-return-en-us-instead","aria-hidden":"true"},"#"),o(),e("code",null,"xxx isn't assign with a lang, and will return 'en-US' instead.")],-1),T=e("p",null,[o("If you see "),e("code",null,"xxx isn't assign with a lang, and will return 'en-US' instead."),o(" while the dev process is starting up, please check whether you set lang for every language.")],-1),A=i('<h2 id="xxx-is-missing-sidebar-config" tabindex="-1"><a class="header-anchor" href="#xxx-is-missing-sidebar-config" aria-hidden="true">#</a> <code>xxx is missing sidebar config.</code></h2><p>Using object format sidebar config means you want to set different sidebar based on routes.</p><ul><li>If you want to avoid this warning, you need to add sidebar config for rootLocale path, since all pages will fall back to that.</li><li>If you want to disable sidebar in current route, set <code>sidebar: false</code> in frontmatter.</li><li>If you want to disable sidebar in current folder, add <code>[currentFolderRoute]: false</code> in sidebar config.</li><li>If you want to tell theme that you only want sidebar in routes you set, add <code>[rootLocalePath]: false</code> in sidebar config to tell theme sidebar config is disabled by default.</li></ul><h2 id="xxx-is-not-installed" tabindex="-1"><a class="header-anchor" href="#xxx-is-not-installed" aria-hidden="true">#</a> <code>xxx is not installed</code></h2><p>In order to speed up the installation of themes and plugins, we set dependencies with large size as optional, which means that when features you use require these dependencies, you need to manually install the corresponding dependencies.</p><p>Just install them in your project directly through your current package manager:</p>',6),I=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),o(),e("span",{class:"token function"},"add"),o(),e("span",{class:"token parameter variable"},"-D"),o(` xxx
`)])])],-1),R=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),o(),e("span",{class:"token function"},"add"),o(),e("span",{class:"token parameter variable"},"-D"),o(` xxx
`)])])],-1),M=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),o(" i "),e("span",{class:"token parameter variable"},"-Dxxx"),o(`
`)])])],-1),L=i('<h2 id="vue-warn-failed-to-resolve-component-xxx" tabindex="-1"><a class="header-anchor" href="#vue-warn-failed-to-resolve-component-xxx" aria-hidden="true">#</a> <code>[Vue warn]: Failed to resolve component: XXX</code></h2><p>If you are facing error like this, you are probably using non-standard tags in your project.</p><p>There are tags like <code>&lt;center&gt;</code> or <code>&lt;font&gt;</code>, which is in HTML1.0 spec, but marked as unrecommended since HTML4.0 released in 1999, then removed in HTML5 release in 2008. So Vue is not allowing you to use them by default. You should probably remove them and use standard HTML5 tag.</p><p>To remove them, run theme with <code>--debug</code> flag, and you will get warning logs telling you tags that probably not be recognized.</p>',4),N={href:"https://vuejs.press/guide/markdown.html#non-standard-html-tags",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"hydration-completed-but-contains-mismatches",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hydration-completed-but-contains-mismatches","aria-hidden":"true"},"#"),o(),e("code",null,"Hydration completed but contains mismatches.")],-1),O=e("p",null,"This error indicates that you have an SSR mismatch, and it should not be a problem with theme.",-1),X={href:"https://dash.cloudflare.com",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"YOUR_DOMAIN",-1),z=e("code",null,"JavaScript",-1),V=e("code",null,"HTML",-1),C=e("code",null,"Auto Minify",-1),E=i('<div class="hint-container warning"><p class="hint-container-title">Note</p><p>Auto Minify in CloudFlare incorrectly handle HTML spaces and line breaks, which can cause Vue triggering SSR mismatches during initialization.</p></div><p>Also, you can check these:</p><ul><li><p>If you only encounter this problem on certain pages, please check whether the page has additional components you added.</p><p>If so, these components are likely to have different rendering results between SSR<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> and CSR<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>. You can try to make their behavior consistent, or wrap your components with the <code>&lt;ClientOnly /&gt;</code> component provided by <code>@vuepress/client</code>.</p></li></ul><ul><li>If you have this problem in all pages, please also follow the previous step to check the components you added in the layout or global components.</li></ul><h2 id="hotreload-not-working-in-devserver" tabindex="-1"><a class="header-anchor" href="#hotreload-not-working-in-devserver" aria-hidden="true">#</a> HotReload not working in DevServer</h2><p>Some configuration has high performance impact on dev server, so their hot reload are disabled by default. You can enable it manually via <code>hotReload: true</code> in theme options.</p><p>These include categories and tags for blog, structured sidebar and git-based information.</p><h2 id="some-page-settings-are-invalid" tabindex="-1"><a class="header-anchor" href="#some-page-settings-are-invalid" aria-hidden="true">#</a> Some page settings are invalid</h2><p>You can first review the documentation to see if the setting <strong>does not support page config</strong>.</p><p><strong>Support for page config</strong> means that the theme allows the config of the page to override the global config of the same name (same function), but not all functions meet this setting.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>You should be aware that some features will not be loaded during the prepare stage when the global setting is disabled, so they cannot be enabled locally.</p></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p><strong>SSR</strong>: <strong>S</strong>erver <strong>S</strong>ide <strong>R</strong>endering <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p><strong>CSR</strong>: <strong>C</strong>lient <strong>S</strong>ide <strong>R</strong>endering <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li></ol></section>',13);function F(H,P){const d=l("CodeTabs"),c=l("RouterLink"),r=l("ExternalLinkIcon");return h(),p("div",null,[f,s(d,{id:"9",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:t(({value:a,isActive:n})=>[o("pnpm")]),title1:t(({value:a,isActive:n})=>[o("yarn")]),title2:t(({value:a,isActive:n})=>[o("npm")]),tab0:t(({value:a,isActive:n})=>[m]),tab1:t(({value:a,isActive:n})=>[v]),tab2:t(({value:a,isActive:n})=>[b]),_:1}),y,e("p",null,[o("For details on all plugins of the theme, please see "),s(c,{to:"/config/plugins/intro.html"},{default:t(()=>[o("Theme Plugins")]),_:1}),o(".")]),x,e("details",_,[w,e("p",null,[o("On windows, you can follow "),e("a",k,[o("this guide"),s(r)]),o(".")])]),S,T,e("p",null,[o("Even if you only have one language, you still need to "),s(c,{to:"/config/i18n.html#setting-language"},{default:t(()=>[o("set language")]),_:1}),o(".")]),A,s(d,{id:"142",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2,"tab-id":"shell"},{title0:t(({value:a,isActive:n})=>[o("pnpm")]),title1:t(({value:a,isActive:n})=>[o("yarn")]),title2:t(({value:a,isActive:n})=>[o("npm")]),tab0:t(({value:a,isActive:n})=>[I]),tab1:t(({value:a,isActive:n})=>[R]),tab2:t(({value:a,isActive:n})=>[M]),_:1}),L,e("p",null,[o("To use them anyway, check "),e("a",N,[o("here"),s(r)]),o(" to get a workaround.")]),B,O,e("p",null,[o("Please check if you are using CloudFlare related services first, if so, make sure you turn off static resource compression. Visit "),e("a",X,[o("dash.cloudflare.com"),s(r)]),o(", go to Websites → "),j,o(" → Speed → Optimization, turn "),z,o(" and "),V,o(" off in "),C,o(" options.")]),E])}const D=u(g,[["render",F],["__file","common-error.html.vue"]]);export{D as default};
