import{_ as a,r as n,o as l,c as s,b as e,d as t,e as i,a as r,f as d}from"./app-dc65bed1.js";const c={},p={href:"https://vuejs.press/reference/plugin/git.html",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"@vuepress/plugin-git",-1),u=e("p",null,"The theme also provides navigation buttons for previous and next pages depending on sidebar config.",-1),m=e("h2",{id:"git-based-information",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-based-information","aria-hidden":"true"},"#"),t(" Git-based Information")],-1),g=e("code",null,"vuepress-theme-hope",-1),f={href:"https://vuejs.press/reference/plugin/git.html",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"@vuepress/plugin-git",-1),_=d('<p>The plugin will automatically generate the page creation time and last update time from the UNIX timestamp (ms) of the last <code>git</code> commit of the page file, and generate contributors based on the commit record.</p><p>The theme will display last update time in the appropriate date format, along with all page contributors at the bottom of the page.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The theme will use <code>Date.toLocaleString(pageLang)</code> to automatically localize the text of last update time according to the current language.</p></div><div class="hint-container warning"><p class="hint-container-title">Limitations</p><ol><li><p>Since the contributors, last update time, and file creation time information are based on <code>git</code>, you can only enable it in a <code>git</code> based project.</p></li><li><p>Since related information are from git commits, they will only be displayed after the first commit for a given page, and will only be updated when some commits change that page.</p></li><li><p>Since the <code>git</code> plugin needs to call Git binary and involves file IO, this function will seriously affect the startup and hot update speed, so by default <strong>theme will not be enabled in devServer</strong>. Set <code>plugins.git: true</code> or <code>hotReload: true</code> in theme options if needed.</p></li></ol></div><h2 id="edit-link" tabindex="-1"><a class="header-anchor" href="#edit-link" aria-hidden="true">#</a> Edit Link</h2><p>You can automatically generate edit links for each page by setting the following items in theme options:</p><ul><li><code>docsRepo</code>: docs repository link, same as <code>repo</code> by default</li><li><code>docsDir</code>: the directory of docs in the repository, defaults to root directory</li><li><code>docsBranch</code>: docs branch, defaults to <code>&quot;main&quot;</code></li></ul><h2 id="display-control" tabindex="-1"><a class="header-anchor" href="#display-control" aria-hidden="true">#</a> Display Control</h2><p>To hide these items globally, set the corresponding items below to <code>false</code> in theme options. You can also enable/disable specific pages by setting these items in <code>YAML front matter</code>:</p><ul><li><code>lastUpdated</code>: whether to display last update time of the page</li><li><code>contributors</code>: whether to show page contributors</li><li><code>editLink</code>: whether to display &quot;edit page&quot; link</li></ul>',10);function y(v,w){const o=n("ExternalLinkIcon");return l(),s("div",null,[e("p",null,[t("The theme displays last update time and contributors of the page via the "),e("a",p,[h,i(o)]),t(' plugin, and provides support for an "edit this page" button.')]),u,r(" more "),m,e("p",null,[g,t(" uses the built-in "),e("a",f,[b,i(o)]),t(" plugin to automatically generate page create time, last update time and contributors.")]),_])}const x=a(c,[["render",y],["__file","meta.html.vue"]]);export{x as default};
