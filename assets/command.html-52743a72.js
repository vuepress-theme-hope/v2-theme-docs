import{_ as p,r as d,o as l,c as i,a as r,e as u,w as s,d as t,b as e,f as o}from"./app-92e2b39d.js";const v={},h=e("p",null,"本教程介绍 VuePress 项目命令。",-1),_=o(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><ul><li><code>vuepress dev [dir]</code> 会启动一个开发服务器，以便让你在本地开发你的 VuePress 站点。</li><li><code>vuepress build [dir]</code> 会将你的 VuePress 站点构建成静态文件，以便你进行后续部署。</li></ul><div class="hint-container info"><p class="hint-container-title">使用模板</p><p>如果你在使用 VuePress Theme Hope 模板，你可以在 <code>package.json</code> 中发现下列三个命令:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build src&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:clean-dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src --clean-cache&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这意味着你可以使用:</p><ul><li><code>pnpm docs:dev</code> 启动开发服务器</li><li><code>pnpm docs:build</code> 构建项目并输出</li><li><code>pnpm docs:clean-dev</code> 清除缓存并启动开发服务器</li></ul></div><div class="hint-container tip"><p class="hint-container-title">终止开发服务器</p><p>如果你需要终止开发服务器，请点击终端，并连续两次按下 <code>Ctrl + C</code>。</p></div><h2 id="升级版本" tabindex="-1"><a class="header-anchor" href="#升级版本" aria-hidden="true">#</a> 升级版本</h2><p>如果你需要升级主题和 VuePress 版本，请执行以下命令:</p>`,6),m=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),t(` dlx vp-update
`)])])],-1),g=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),t(` dlx vp-update
`)])])],-1),k=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`npx vp-update
`)])],-1),b=o('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>任何以 <code>@vuepress/</code> 开头的官方包应该和 VuePress 保持相同版本。</p><p>比如，如果你正在使用 <code>@vuepress/plugin-search</code> 和 <code>@vuepress/utils</code>，你应该确保他们和 <code>vuepress</code> 版本相同</p><p>另外，如果你使用了其他第三方插件，请确保它兼容你要升级到的 VuePress 版本。</p></div>',1);function q(x,f){const c=d("CodeTabs");return l(),i("div",null,[h,r(" more "),_,u(c,{id:"56",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:s(({value:a,isActive:n})=>[t("pnpm")]),title1:s(({value:a,isActive:n})=>[t("yarn")]),title2:s(({value:a,isActive:n})=>[t("npm")]),tab0:s(({value:a,isActive:n})=>[m]),tab1:s(({value:a,isActive:n})=>[g]),tab2:s(({value:a,isActive:n})=>[k]),_:1}),b])}const y=p(v,[["render",q],["__file","command.html.vue"]]);export{y as default};
