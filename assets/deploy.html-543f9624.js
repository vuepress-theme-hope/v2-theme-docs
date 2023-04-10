import{a3 as a,Z as n,_ as d,a4 as i,a1 as t,a2 as e,$ as s,a5 as r,D as l}from"./framework-32163d8a.js";const h={},c=t("p",null,"This tutorial guides you on how to deploy a VuePress project.",-1),u=r('<h2 id="build-project" tabindex="-1"><a class="header-anchor" href="#build-project" aria-hidden="true">#</a> Build Project</h2><p>Once you completed the starter stage development of the project locally, you can build the website using the <code>pnpm docs:build</code> command.</p><p>If you are using theme template, the website content will be output to the <code>.vuepress/dist</code> under VuePress project folder These files are the final output of VuePress.</p><p>You can deploy the contents of this folder to your website&#39;s server. The easiest way to do this is to upload to GitHub and start GitHub Pages.</p><h2 id="deploy-to-github-pages" tabindex="-1"><a class="header-anchor" href="#deploy-to-github-pages" aria-hidden="true">#</a> Deploy to GitHub Pages</h2>',5),p={href:"https://v2.vuepress.vuejs.org/reference/config.html#base",target:"_blank",rel:"noopener noreferrer"},m=r('<ul><li><p>If you are going to publish to <code>https://&lt;USERNAME&gt;.github.io/</code>, you must upload the entire project to the <code>https://github.com/&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io</code> repository . You don’t need to make any changes in this case, since base defaults to <code>&quot;/&quot;</code>.</p></li><li><p>If your repository link is in a normal format like <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, the website will be published to <code>https://&lt;USERNAME&gt;.github.io /&lt;REPO&gt;/</code> , so you need to set base to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p></li></ul><h2 id="other-deployment-methods" tabindex="-1"><a class="header-anchor" href="#other-deployment-methods" aria-hidden="true">#</a> Other deployment methods</h2>',2),g={href:"https://v2.vuepress.vuejs.org/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"};function b(f,y){const o=l("ExternalLinkIcon");return n(),d("div",null,[c,i(" more "),u,t("p",null,[e("If you're using theme template and you choose to create GitHub workflow during setup, the only thing you need to do is set the correct "),t("a",p,[e("base option"),s(o)]),e(".")]),m,t("p",null,[e("For other deployment methods, please refer to "),t("a",g,[e("VuePress → Deployment"),s(o)]),e(".")])])}const E=a(h,[["render",b],["__file","deploy.html.vue"]]);export{E as default};
