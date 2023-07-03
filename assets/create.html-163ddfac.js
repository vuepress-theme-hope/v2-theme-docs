import{_ as e,o as t,c as a,a as n,b as o,f as s}from"./app-b495a394.js";const r={},c=o("p",null,"This tutorial will guide you through creating a VuePress Theme Hope project.",-1),i=s(`<h2 id="choose-an-appropriate-location" tabindex="-1"><a class="header-anchor" href="#choose-an-appropriate-location" aria-hidden="true">#</a> Choose an Appropriate Location</h2><p>To avoid accidentally triggering some strange problems that you cannot solve by yourself, please try to avoid using file paths that contain CJK characters, emoji or spaces (e.g. <code>C:\\Users\\毛泽东\\Desktop\\VuePress Project\\Hope theme ❤️\\</code>).</p><p>It is recommended to use plain English paths (e.g. <code>D:\\projects\\vuepress-theme-hope\\</code>).</p><h2 id="initialize-project" tabindex="-1"><a class="header-anchor" href="#initialize-project" aria-hidden="true">#</a> Initialize Project</h2><p>Open a terminal in the folder in the chosen location.</p><div class="hint-container tip"><p class="hint-container-title">Opening terminal on Windows</p><p>Please use file explorer to open that folder, then enter <code>cmd</code> in the address bar above and press Enter.</p></div><p>Execute one of the following command in terminal:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># pnpm</span>
<span class="token function">pnpm</span> create vuepress-theme-hope my-docs

<span class="token comment"># yarn</span>
<span class="token function">yarn</span> create vuepress-theme-hope my-docs

<span class="token comment"># npm</span>
<span class="token function">npm</span> init vuepress-theme-hope my-docs
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">Folder Argument</p><p>Here <code>my-docs</code> is an argument representing the folder name of the VuePress Theme Hope project. In this tutorial, we will generate the project to the <code>my-docs</code> folder in the current directory.</p><p>You can change this parameter to use a new folder if you want.</p></div><div class="hint-container tip"><p class="hint-container-title">Dev Server</p><p>If you choose to start the development server after the template is initialized, you can enter <code>localhost:8080/</code> in the browser address bar to access the development server after the dev server starts.</p></div>`,10);function p(l,d){return t(),a("div",null,[c,n(" more "),i])}const m=e(r,[["render",p],["__file","create.html.vue"]]);export{m as default};
