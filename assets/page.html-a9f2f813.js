import{_ as c,r,o as i,c as l,b as e,d as t,e as o,w as s,f as d}from"./app-a520ca79.js";const u={},h=e("p",null,"VuePress is markdown-centered. Each Markdown file inside your project is a standalone page.",-1),p=e("h2",{id:"routing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#routing","aria-hidden":"true"},"#"),t(" Routing")],-1),f=e("p",null,"By default, the route path of a page is determined by the relative path of your Markdown file.",-1),m=e("p",null,"Assuming this is the directory structure of your Markdown files:",-1),_=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
`)])],-1),g=e("code",null,"docs",-1),k={href:"https://vuejs.press/reference/cli.html",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"vuepress dev docs",-1),b=d('<table><thead><tr><th>Relative Path</th><th>Route Path</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/page.md</code></td><td><code>/guide/page.html</code></td></tr></tbody></table><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2>',2),y={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},x=d(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> en<span class="token punctuation">-</span>US
<span class="token key atrule">title</span><span class="token punctuation">:</span> Title of this page
<span class="token key atrule">description</span><span class="token punctuation">:</span> Description of this page</span>
<span class="token punctuation">---</span></span>
</code></pre></div><p>You must have noticed that those fields are similar with the Site Config in Config File. You can override <code>lang</code>, <code>title</code>, <code>description</code>, etc., of current page via frontmatter. So you can take frontmatter as page scope config.</p><p>Also, VuePress has built-in support for some frontmatter fields, and your theme may have its own special frontmatter, too.</p>`,3),v={class:"hint-container tip"},M=e("p",{class:"hint-container-title"},"Tips",-1),E={href:"https://vuejs.press/reference/frontmatter.html",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"vuepress-theme-hope",-1),R=e("h2",{id:"content",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#content","aria-hidden":"true"},"#"),t(" Content")],-1),C=e("p",null,[t("The main content of your page is written in Markdown. VuePress will firstly transform your Markdown to HTML code, then treat the HTML code as "),e("code",null,"<template>"),t(" of Vue SFC.")],-1),T={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"};function A(L,P){const n=r("ExternalLinkIcon"),a=r("RouterLink");return i(),l("div",null,[h,p,f,m,_,e("p",null,[t("Take the "),g,t(" directory as your "),e("a",k,[t("sourceDir"),o(n)]),t(", e.g. you are running "),w,t(" command. Then the route paths of your Markdown files would be:")]),b,e("p",null,[t("A Markdown file could contain a "),e("a",y,[t("YAML"),o(n)]),t(" frontmatter. The frontmatter must be at the top of the Markdown file and must be wrapped with a couple of triple-dashed lines. Here is a basic example:")]),x,e("div",v,[M,e("p",null,[t("Check out the "),e("a",E,[t("Frontmatter Reference"),o(n)]),t(" for a full list of VuePress built-in frontmatter.")]),e("p",null,[t("Check out the "),o(a,{to:"/config/frontmatter/"},{default:s(()=>[t("Config > Frontmatter")]),_:1}),t(" for the frontmatter of "),V,t(".")])]),R,C,e("p",null,[t("With the power of "),e("a",T,[t("markdown-it"),o(n)]),t(" and Vue template syntax, the basic Markdown can be extended a lot. Next, check out the "),o(a,{to:"/cookbook/vuepress/markdown.html"},{default:s(()=>[t("Markdown")]),_:1}),t(" guide for all the extensions of Markdown in VuePress.")])])}const F=c(u,[["render",A],["__file","page.html.vue"]]);export{F as default};
