import{a4 as i,_ as l,$ as r,a5 as d,a0 as u,a1 as s,a2 as e,a6 as o,k as h,a3 as c}from"./framework-bb5a5b49.js";const m={},v=e("p",null,"This tutorial introduces VuePress project commands.",-1),g=o(`<h2 id="common-commands" tabindex="-1"><a class="header-anchor" href="#common-commands" aria-hidden="true">#</a> Common Commands</h2><ul><li><code>vuepress dev [dir]</code> will start a development server to allow you to develop your VuePress site locally.</li><li><code>vuepress build [dir]</code> will build your VuePress site into static files for your subsequent deployment.</li></ul><div class="hint-container info"><p class="hint-container-title">Using Template</p><p>If you are using the VuePress Theme Hope template, you can find the following three commands in <code>package.json</code>:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build src&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:clean-dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src --clean-cache&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>This means you can use:</p><ul><li><code>pnpm docs:dev</code> starts the development server</li><li><code>pnpm docs:build</code> builds the project and outputs</li><li><code>pnpm docs:clean-dev</code> to clear cache and start development server</li></ul></div><div class="hint-container info"><p class="hint-container-title">Terminate DevServer</p><p>To terminate the development server, please click on the terminal and press <code>Ctrl + C</code> twice.</p></div><h2 id="update-version" tabindex="-1"><a class="header-anchor" href="#update-version" aria-hidden="true">#</a> Update Version</h2><p>If you need to upgrade your theme and VuePress version, execute the following command:</p>`,6),_=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),c(` dlx vp-update
`)])])],-1),k=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),c(` dlx vp-update
`)])])],-1),f=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`npx vp-update
`)])],-1),b=o('<div class="hint-container warning"><p class="hint-container-title">Note</p><p>Any official packages starting with <code>@vuepress/</code> should be upgrade to the same version as VuePress.</p><p>I.E.: if you are using <code>@vuepress/plugin-search</code> and <code>@vuepress/utils</code> , you should ensure they have the same version number as <code>vuepress</code>.</p><p>Also, if you&#39;re using another third-party plugin, make sure it&#39;s compatible with the version of VuePress you&#39;re upgrading to.</p></div>',1);function y(q,x){const p=h("CodeTabs");return l(),r("div",null,[v,d(" more "),g,u(p,{id:"56",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:s(({title:a,value:n,isActive:t})=>[_]),tab1:s(({title:a,value:n,isActive:t})=>[k]),tab2:s(({title:a,value:n,isActive:t})=>[f]),_:1}),b])}const w=i(m,[["render",y],["__file","command.html.vue"]]);export{w as default};
