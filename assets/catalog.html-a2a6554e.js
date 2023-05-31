import{_ as d,r as s,o as i,c as r,b as a,d as t,e,w as o,a as n,f as p}from"./app-92e2b39d.js";const m={},g=a("code",null,"README.md",-1),_=a("code",null,"vuepress-plugin-catalog",-1),k=p('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>You can use <code>plugin.autoCatalog</code> in theme options to control this feature. If you want to disable it, set <code>plugin.autoCatalog</code> to <code>false</code>.</p><p>You can use <code>plugin.autoCatalog.exclude</code> to exclude some folders from catalog generation, and you can use <code>plugin.autoCatalog.frontmatter</code> to control frontmatter generation.</p>',3),h=a("h2",{id:"demo",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),t(" Demo")],-1),f={class:"catalog-display-container"},C=a("div",{class:"language-markdown","data-ext":"md"},[a("pre",{class:"language-markdown"},[a("code",null,[a("span",{class:"token comment"},"<!-- Used to limit height -->"),t(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("catalog-display-container"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("AutoCatalog")]),t(),a("span",{class:"token attr-name"},"base"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},"'"),t("/"),a("span",{class:"token punctuation"},"'")]),t(),a("span",{class:"token punctuation"},"/>")]),t(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function v(x,b){const c=s("ProjectLink"),l=s("AutoCatalog"),u=s("MdDemo");return i(),r("div",null,[a("p",null,[t("VuePress Theme Hope automatically generate "),g,t(" with catalog for each folder by default using "),e(c,{name:"auto-catalog"},{default:o(()=>[_]),_:1}),t(".")]),n(" more "),k,a("p",null,[t("For more details, see "),e(c,{name:"auto-catalog"},{default:o(()=>[t("Auto Catalog Plugin Docs")]),_:1}),t(".")]),h,n(" markdownlint-disable MD033 "),e(u,{title:"Home page catalog",id:"md-demo-20"},{default:o(()=>[n(" Used to limit height "),a("div",f,[e(l,{base:"/"})])]),code:o(()=>[C]),_:1}),n(" markdownlint-enable MD033 ")])}const D=d(m,[["render",v],["__file","catalog.html.vue"]]);export{D as default};