import{_ as i,r,o as a,c,b as d,e,f as t,a as s,g as n}from"./app-25dbeecb.js";const l={},h=e("p",null,"本教程指引你如何部署 VuePress 项目。",-1),p=n('<h2 id="构建项目" tabindex="-1"><a class="header-anchor" href="#构建项目" aria-hidden="true">#</a> 构建项目</h2><p>当你在本地完成项目的初步开发后，你就可以使用 <code>pnpm docs:build</code> 命令构建网站。</p><p>如果你在使用模板，网站内容将会输出到 VuePress 项目的 <code>.vuepress/dist</code> 文件夹下。这些文件就是 VuePress 的最终输出结果。</p><p>你可以将此文件夹的内容部署到你网站的服务器上。最简单的做法是上传到 GitHub 并开启 GitHub Pages。</p><h2 id="部署到-github-pages" tabindex="-1"><a class="header-anchor" href="#部署到-github-pages" aria-hidden="true">#</a> 部署到 GitHub Pages</h2>',5),u={href:"https://vuejs.press/zh/reference/config.html#base",target:"_blank",rel:"noopener noreferrer"},_=n("<ul><li><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/</code>，你必须将整个项目上传至 <code>https://github.com/&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io</code> 仓库。在这种情况下你无需进行任何更改，因为 base 默认就是 <code>&quot;/&quot;</code>。</p></li><li><p>如果你的仓库地址是一个普通的形如 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> 的格式，网站将会被发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> ，也就是说，你需要将 base 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p></li></ul>",1),g={class:"hint-container tip"},b=e("p",{class:"hint-container-title"},"Github 教程",-1),E={href:"https://mrhope.site/code/github/",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"其他部署方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其他部署方式","aria-hidden":"true"},"#"),t(" 其他部署方式")],-1),m={href:"https://vuejs.press/zh/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},N=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"Gitee"),e("p",null,[t("如果你在使用码云，你需要注意码云的特殊仓库是 "),e("code",null,"https://gitee.com/<USERNAME>/<USERNAME>"),t("。如果你推送到这个仓库，你的文档将会发布在 "),e("code",null,"https://<USERNAME>.gitee.io"),t(" 上。")])],-1);function R(x,P){const o=r("ExternalLinkIcon");return a(),c("div",null,[h,d(" more "),p,e("p",null,[t("如果你在使用模板，且在创建过程中选择了创建自动部署文档的 GitHub 工作流，那么你唯一要做的就是设置正确的 "),e("a",u,[t("base 选项"),s(o)]),t("。")]),_,e("div",g,[b,e("p",null,[t("关于 GitHub 的相关教程，你可以参考 "),e("a",E,[t("GitHub 简介"),s(o)]),t("。")])]),f,e("p",null,[t("关于其他部署方式，请参阅 "),e("a",m,[t("VuePress → 部署"),s(o)]),t("。")]),N])}const V=i(l,[["render",R],["__file","deploy.html.vue"]]);export{V as default};
