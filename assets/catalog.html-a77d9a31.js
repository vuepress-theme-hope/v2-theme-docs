import{_ as p,r as s,o as r,c as u,b as a,d as t,e,w as c,a as o,f as l}from"./app-ce8d7da6.js";const i={},_=a("code",null,"vuepress-plugin-catalog",-1),h=a("code",null,"README.md",-1),g=l('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>你可以在主题选项中使用 <code>plugin.autoCatalog</code> 来控制此功能。 如果要禁用它，请将 <code>plugin.autoCatalog</code> 设置为 <code>false</code>。</p><p>你可以使用 <code>plugin.autoCatalog.exclude</code> 从目录生成中排除一些文件夹，也可以使用 <code>plugin.autoCatalog.frontmatter</code> 来控制 frontmatter 的生成。</p>',3),m=a("h2",{id:"示例",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),t(" 示例")],-1),k=a("p",null,"主页目录:",-1),f={class:"catalog-display-container"},C=l(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutoCatalog</span> <span class="token attr-name">base</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/zh/<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,1);function x(v,b){const n=s("ProjectLink"),d=s("AutoCatalog");return r(),u("div",null,[a("p",null,[t("VuePress Theme Hope 默认使用 "),e(n,{name:"auto-catalog",path:"/zh/"},{default:c(()=>[_]),_:1}),t(" 为每个文件夹自动生成带有目录的 "),h,t("。")]),o(" more "),g,a("p",null,[t("有关详细信息，请参阅 "),e(n,{name:"auto-catalog",path:"/zh/"},{default:c(()=>[t("Auto Catalog 插件文档")]),_:1}),t("。")]),m,k,o(" markdownlint-disable MD033 "),a("div",f,[e(d,{base:"/zh/"})]),o(" markdownlint-enable MD033 "),C])}const V=p(i,[["render",x],["__file","catalog.html.vue"]]);export{V as default};
