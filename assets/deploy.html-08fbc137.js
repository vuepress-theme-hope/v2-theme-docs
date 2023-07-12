import{_ as a,r as n,o as d,c as i,a as l,b as t,d as e,e as s,f as r}from"./app-a520ca79.js";const h={},c=t("p",null,"This tutorial guides you on how to deploy a VuePress project.",-1),u=r('<h2 id="build-project" tabindex="-1"><a class="header-anchor" href="#build-project" aria-hidden="true">#</a> Build Project</h2><p>Once you completed the starter stage development of the project locally, you can build the website using the <code>pnpm docs:build</code> command.</p><p>If you are using theme template, the website content will be output to the <code>.vuepress/dist</code> under VuePress project folder These files are the final output of VuePress.</p><p>You can deploy the contents of this folder to your website&#39;s server. The easiest way to do this is to upload to GitHub and start GitHub Pages.</p><h2 id="deploy-to-github-pages" tabindex="-1"><a class="header-anchor" href="#deploy-to-github-pages" aria-hidden="true">#</a> Deploy to GitHub Pages</h2>',5),p={href:"https://vuejs.press/reference/config.html#base",target:"_blank",rel:"noopener noreferrer"},m=r('<ul><li><p>If you are going to publish to <code>https://&lt;USERNAME&gt;.github.io/</code>, you must upload the entire project to the <code>https://github.com/&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io</code> repository. You don&#39;t need to make any changes in this case, since base defaults to <code>&quot;/&quot;</code>.</p></li><li><p>If your repository link is in a normal format like <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, the website will be published to <code>https://&lt;USERNAME&gt;.github.io /&lt;REPO&gt;/</code>, so you need to set base to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p></li></ul><h2 id="other-deployment-methods" tabindex="-1"><a class="header-anchor" href="#other-deployment-methods" aria-hidden="true">#</a> Other deployment methods</h2>',2),b={href:"https://vuejs.press/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"};function g(f,y){const o=n("ExternalLinkIcon");return d(),i("div",null,[c,l(" more "),u,t("p",null,[e("If you're using theme template, and you choose to create GitHub workflow during setup, the only thing you need to do is set the correct "),t("a",p,[e("base option"),s(o)]),e(".")]),m,t("p",null,[e("For other deployment methods, please refer to "),t("a",b,[e("VuePress → Deployment"),s(o)]),e(".")])])}const E=a(h,[["render",g],["__file","deploy.html.vue"]]);export{E as default};
