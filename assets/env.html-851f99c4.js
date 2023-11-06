import{_ as s,r,o as i,c as l,a as d,b as e,d as t,e as o,f as a}from"./app-1ee6e138.js";const p={},c=e("p",null,"This tutorial will guide you on how to set up a VuePress runtime environment.",-1),h=e("h2",{id:"node-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#node-js","aria-hidden":"true"},"#"),t(" Node.js")],-1),u={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://v8.dev/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"You need to download and install the latest long-term maintenance release on your computer.",-1),g=e("h3",{id:"download-node-js-lts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download-node-js-lts","aria-hidden":"true"},"#"),t(" Download Node.js LTS")],-1),_={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},v=a('<div class="hint-container note"><p class="hint-container-title">Note</p><p>In the opened page, click the green button (LTS) on the left to complete the download.</p></div><h3 id="install-node-js-lts" tabindex="-1"><a class="header-anchor" href="#install-node-js-lts" aria-hidden="true">#</a> Install Node.js LTS</h3><p>During the installation process, keep all the default settings and go all the way to the next step.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>If you are a real novice, please do not change the default installation directory.</p><p>Node.js itself will only take up a few dozen megabytes of space!</p></div><h2 id="editor" tabindex="-1"><a class="header-anchor" href="#editor" aria-hidden="true">#</a> Editor</h2><p>You need an editor to edit your project, and we recommend using VSCode to write and run your VuePress projects.</p><h3 id="download-vscode" tabindex="-1"><a class="header-anchor" href="#download-vscode" aria-hidden="true">#</a> Download VSCode</h3>',7),b={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},k=a('<div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Please click the blue button on the left to complete the download.</p></div><h3 id="install-vscode" tabindex="-1"><a class="header-anchor" href="#install-vscode" aria-hidden="true">#</a> Install VSCode</h3><ol><li><p>Double-click the installation package to open</p></li><li><p>Agree to the User Agreement.</p></li><li><p>In the installation options, be sure to <strong>select all</strong> the following options:</p><p>Tick <strong>Add to directory context menu</strong>, <strong>Add to file context menu</strong>, <strong>Register code as a supported file editor</strong>, <strong>Add to path</strong>.</p></li><li><p>After the initial startup of VS Code, if Git is not installed in advance, it may prompt that the Git software is not found, just ignore it.</p></li></ol><h2 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm" aria-hidden="true">#</a> Pnpm</h2>',4),w={href:"https://pnpm.io",target:"_blank",rel:"noopener noreferrer"},x=a(`<div class="hint-container tip"><p class="hint-container-title">Tips</p><p>We recommend you to choose pnpm as package manager, because VuePress and VuePress Theme Hope both use pnpm to manage dependencies.</p><p>Some features of pnpm ensure that you have the correct dependencies, also it can speed up your installation.</p></div><h3 id="install-pnpm" tabindex="-1"><a class="header-anchor" href="#install-pnpm" aria-hidden="true">#</a> Install Pnpm</h3><p>Install pnpm by entering the following command in the terminal:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
corepack prepare pnpm@latest <span class="token parameter variable">--activate</span>
</code></pre></div>`,4);function j(y,V){const n=r("ExternalLinkIcon");return i(),l("div",null,[c,d(" more "),h,e("p",null,[e("a",u,[t("Node.js®"),o(n)]),t(" is a JavaScript runtime built on "),e("a",m,[t("Chrome's V8 JavaScript engine"),o(n)]),t(".")]),f,g,e("p",null,[e("a",_,[t("Download link"),o(n)]),t(".")]),v,e("p",null,[e("a",b,[t("Download link"),o(n)])]),k,e("p",null,[t("After you install Node.js, please install "),e("a",w,[t("pnpm"),o(n)]),t(".")]),x])}const S=s(p,[["render",j],["__file","env.html.vue"]]);export{S as default};
