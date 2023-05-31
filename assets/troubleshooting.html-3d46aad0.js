import{_ as d,r as a,o as u,c as p,e,f as o,a as r,w as n,g as l}from"./app-d7067868.js";const h={},v=e("h2",{id:"ensure-running-under-correct-environment",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ensure-running-under-correct-environment","aria-hidden":"true"},"#"),o(" Ensure running under correct environment")],-1),g=e("p",null,[e("code",null,"vuepress-theme-hope"),o(" only supports node version of "),e("code",null,">=16.0.0"),o(".")],-1),m=e("code",null,"node -v",-1),f=l('<p>Also, you should use a package manager satisfying the following requirements:</p><ul><li><p>npm: &gt;= 8</p><p>Check: <code>npm -v</code></p><p>Install: <code>npm i -g npm</code></p></li><li><p>yarn: &gt;= 1.22.15</p><p>Check: <code>yarn -v</code></p><p>Install: <code>npm i -g yarn</code></p></li><li><p>pnpm: &gt;= 7</p><p>Check: <code>pnpm -v</code></p><p>Install: <code>npm i -g pnpm</code></p></li></ul><h2 id="ensure-using-the-latest-version-and-having-correct-deps-tree" tabindex="-1"><a class="header-anchor" href="#ensure-using-the-latest-version-and-having-correct-deps-tree" aria-hidden="true">#</a> Ensure using the latest version and having correct deps tree</h2><p>Please make sure you are using the latest <code>vuepress</code> and <code>vuepress-theme-hope</code> V2 version, because some bugs you encountered may have been fixed in new versions.</p><p>Also in some cases, you may generate incorrect dependency tree after upgrading some dependencies, this is because both <code>vuepress</code> and <code>vue</code> have many packages named <code>@vuepress/xxx</code> and <code>@vue/xxx</code>.</p><p>To let VuePress work correctly, there should only be one version of <code>@vuepress/xxx</code> <code>@vue/xxx</code> <code>vue</code> and <code>vue-router</code> in the whole project. Multiple versions of a package can cause different parts of the application to use different instances of Vue and the corresponding package, resulting in errors like <code>useXXX() is called without provider</code>.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>Any official packages starting with <code>@vuepress/</code> should be upgrade to the same version as VuePress.</p><p>I.E.: if you are using <code>@vuepress/plugin-search</code> and <code>@vuepress/utils</code>, you should ensure they have the same version number as <code>vuepress</code>.</p><p>Besides, any plugin inside <code>vuepress-theme-hope</code> should be the same version as vuepress-theme-hope.</p><p>Furthermore, if you&#39;re using another third-party plugin, make sure it&#39;s compatible with the version of VuePress you&#39;re upgrading to.</p></div><p>You can execute the following command to make sure you are using the latest version and having correct deps tree.</p>',8),_=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),o(` dlx vp-update
`)])])],-1),y=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),o(` dlx vp-update
`)])])],-1),b=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`npx vp-update
`)])],-1),x=e("h2",{id:"ensure-having-correct-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ensure-having-correct-config","aria-hidden":"true"},"#"),o(" Ensure having correct config")],-1),k=e("p",null,"Please confirm that there are no errors in your config file (such as red wavy lines), if so, please modify the config file according to the prompts until you correctly configured VuePress and themes.",-1);function w(V,A){const i=a("RouterLink"),c=a("CodeTabs");return u(),p("div",null,[v,g,e("p",null,[o("If the output of "),m,o(" does not satisfy the requirement, you should "),r(i,{to:"/cookbook/tutorial/env.html#nodejs"},{default:n(()=>[o("download and install the LTS version of Node.js")]),_:1}),o(".")]),f,r(c,{id:"76",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:n(({value:s,isActive:t})=>[o("pnpm")]),title1:n(({value:s,isActive:t})=>[o("yarn")]),title2:n(({value:s,isActive:t})=>[o("npm")]),tab0:n(({value:s,isActive:t})=>[_]),tab1:n(({value:s,isActive:t})=>[y]),tab2:n(({value:s,isActive:t})=>[b]),_:1}),x,k])}const N=d(h,[["render",w],["__file","troubleshooting.html.vue"]]);export{N as default};
