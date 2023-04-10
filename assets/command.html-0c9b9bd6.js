import{a3 as l,Z as d,_ as i,a4 as r,$ as u,a0 as e,a1 as s,a5 as o,D as h,a2 as c}from"./framework-32163d8a.js";const v={},_=s("p",null,"本教程介绍 VuePress 项目命令。",-1),g=o(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><ul><li><code>vuepress dev [dir]</code> 会启动一个开发服务器，以便让你在本地开发你的 VuePress 站点。</li><li><code>vuepress build [dir]</code> 会将你的 VuePress 站点构建成静态文件，以便你进行后续部署。</li></ul><div class="hint-container info"><p class="hint-container-title">使用模板</p><p>如果你在使用 VuePress Theme Hope 模板，你可以在 <code>package.json</code> 中发现下列三个命令:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build src&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:clean-dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src --clean-cache&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这意味着你可以使用:</p><ul><li><code>pnpm docs:dev</code> 启动开发服务器</li><li><code>pnpm docs:build</code> 构建项目并输出</li><li><code>pnpm docs:clean-dev</code> 清除缓存并启动开发服务器</li></ul></div><div class="hint-container tip"><p class="hint-container-title">终止开发服务器</p><p>如果你需要终止开发服务器，请点击终端，并连续两次按下 <code>Ctrl + C</code>。</p></div><h2 id="升级版本" tabindex="-1"><a class="header-anchor" href="#升级版本" aria-hidden="true">#</a> 升级版本</h2><p>如果你需要升级主题和 VuePress 版本，请执行以下命令:</p>`,6),k=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),c(` dlx vp-update
`)])])],-1),m=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),c(` dlx vp-update
`)])])],-1),b=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,`npx vp-update
`)])],-1),q=o('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>任何以 <code>@vuepress/</code> 开头的官方包应该和 VuePress 保持相同版本。</p><p>比如，如果你正在使用 <code>@vuepress/plugin-search</code> 和 <code>@vuepress/utils</code>，你应该确保他们和 <code>vuepress</code> 版本相同</p><p>另外，如果你使用了其他第三方插件，请确保它兼容你要升级到的 VuePress 版本。</p></div>',1);function x(f,V){const p=h("CodeTabs");return d(),i("div",null,[_,r(" more "),g,u(p,{id:"56",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:e(({title:a,value:n,isActive:t})=>[k]),tab1:e(({title:a,value:n,isActive:t})=>[m]),tab2:e(({title:a,value:n,isActive:t})=>[b]),_:1}),q])}const P=l(v,[["render",x],["__file","command.html.vue"]]);export{P as default};
