import{a3 as o,Z as r,_ as i,a4 as d,a1 as e,a2 as n,$ as t,a5 as s,D as p}from"./framework-32163d8a.js";const c="/assets/vscode-install-13810796.png",h={},l=e("p",null,"本教程将指导你如何搭建 VuePress 的运行环境。",-1),_=e("h2",{id:"node-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#node-js","aria-hidden":"true"},"#"),n(" Node.js")],-1),m={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://v8.dev/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"你需要下载并在你的电脑上安装最新的长期维护版。",-1),g=e("h3",{id:"下载-node-js-lts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载-node-js-lts","aria-hidden":"true"},"#"),n(" 下载 Node.js LTS")],-1),v={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},b=s('<div class="hint-container note"><p class="hint-container-title">注</p><p>请在打开的页面中，点击左侧的绿色按钮 (LTS)，即可完成下载。</p></div><h3 id="安装-node-js-lts" tabindex="-1"><a class="header-anchor" href="#安装-node-js-lts" aria-hidden="true">#</a> 安装 Node.js LTS</h3><p>在安装过程中，保持所有的默认设置，一路下一步即可。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果你真的是个小白，请不要改默认安装目录，以免你在出现问题时找不到对应的文件夹。</p><p>Node.js 本身只会占据几十 M 的空间!</p></div><h2 id="安装编辑器" tabindex="-1"><a class="header-anchor" href="#安装编辑器" aria-hidden="true">#</a> 安装编辑器</h2><p>一个趁手的编辑器是必要的，我们推荐你使用 VSCode 来编写和运行你的 VuePress 项目。</p><h3 id="下载-vscode" tabindex="-1"><a class="header-anchor" href="#下载-vscode" aria-hidden="true">#</a> 下载 VSCode</h3>',7),V={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},x=s('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>请点击左侧的蓝色按钮完成下载。</p></div><h3 id="安装-vscode" tabindex="-1"><a class="header-anchor" href="#安装-vscode" aria-hidden="true">#</a> 安装 VSCode</h3><ol><li><p>双击安装包打开</p></li><li><p>同意用户协议。</p></li><li><p>安装选项中，请务必 <strong>全选</strong> 以下选项:</p><figure><img src="'+c+'" alt="安装 VS Code" tabindex="0" loading="lazy"><figcaption>安装 VS Code</figcaption></figure><p>勾选 <strong>添加到目录上下文菜单</strong>、<strong>添加到文件上下文菜单</strong>、<strong>将 code 注册为受支持的文件编辑器</strong>、<strong>添加到 path</strong>。</p></li><li><p>在 VS Code 初次启动后，若未提前安装 Git 可能会提示未找到 Git 软件，忽略即可。</p></li><li><p>推荐立即执行简体中文扩展安装以保证界面语言为简体中文。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当你安装 VS Code 并第一次打开的时候，VS Code 会自动检测当前系统语言并在右下角推荐你安装对应语言的扩展，点击按钮即可自动安装。</p></div></li></ol><h2 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm" aria-hidden="true">#</a> Pnpm</h2>',4),j={href:"https://pnpm.io",target:"_blank",rel:"noopener noreferrer"},k=s(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>我们推荐你使用 pnpm 作为项目管理器，因为 VuePress 和 VuePress Theme Hope 都是通过 pnpm 来管理依赖的。</p><p>pnpm 的一些功能可以保证你拥有正确的依赖，并且它能加速安装。</p></div><h3 id="安装-pnpm" tabindex="-1"><a class="header-anchor" href="#安装-pnpm" aria-hidden="true">#</a> 安装 Pnpm</h3><p>在终端中输入下列命令安装 pnpm:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
corepack prepare pnpm@7.28.0 <span class="token parameter variable">--activate</span>
</code></pre></div>`,4);function S(C,N){const a=p("ExternalLinkIcon");return r(),i("div",null,[l,d(" more "),_,e("p",null,[e("a",m,[n("Node.js®"),t(a)]),n(" 是一个基于 "),e("a",u,[n("Chrome V8 引擎"),t(a)]),n(" 的 JavaScript 运行时环境。")]),f,g,e("p",null,[e("a",v,[n("下载地址"),t(a)]),n("。")]),b,e("p",null,[e("a",V,[n("下载地址"),t(a)])]),x,e("p",null,[n("在你安装 Node.js 之后，请安装 "),e("a",j,[n("pnpm"),t(a)]),n("。")]),k])}const L=o(h,[["render",S],["__file","env.html.vue"]]);export{L as default};
