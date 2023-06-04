import{_ as e,o as s,c as n,a,b as c,f as t}from"./app-06f528c1.js";const o={},p=c("p",null,"此教程将指引你创建一个 VuePress Theme Hope 项目。",-1),i=t(`<h2 id="选择合适的项目位置" tabindex="-1"><a class="header-anchor" href="#选择合适的项目位置" aria-hidden="true">#</a> 选择合适的项目位置</h2><p>为了避免偶然间触发一些奇怪的问题，而你自己不会解决，请尽量避免使用包含中文文字、表情符号或空格的文件路径 (如: <code>C:\\Users\\小张\\Desktop\\VuePress 项目\\Hope 主题❤️\\</code>)。</p><p>建议使用纯英文路径 (如: <code>D:\\projects\\vuepress-theme-hope\\</code>)。</p><h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2><p>在选定的位置所在文件夹中打开终端。</p><div class="hint-container tip"><p class="hint-container-title">在 Windows 上打开终端</p><p>请使用文件管理器打开对应文件夹，之后在上方的地址栏中输入 <code>cmd</code> 之后按下回车。</p></div><p>在终端中执行下列命令之一:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># pnpm</span>
<span class="token function">pnpm</span> create vuepress-theme-hope my-docs

<span class="token comment"># yarn</span>
<span class="token function">yarn</span> create vuepress-theme-hope my-docs

<span class="token comment"># npm</span>
<span class="token function">npm</span> init vuepress-theme-hope my-docs
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">文件夹参数</p><p>这里的 <code>my-docs</code> 是一个参数，代表 VuePress Theme Hope 项目的文件夹名称，在本教程中，我们将项目生成至当前目录下的 <code>my-docs</code> 文件夹。</p><p>如果你有需求，你可以更改此参数来使用一个新文件夹名称。</p></div><div class="hint-container tip"><p class="hint-container-title">中文显示</p><p>如果你的英语很不好，请在第一次选择中通过键盘 <code>↓</code> 选择 <code>简体中文</code> 并回车来在后续流程中使用中文进行显示。</p></div><div class="hint-container tip"><p class="hint-container-title">开发服务器</p><p>如果你在模板初始化成功后选择立即启动开发服务器，稍等片刻，你就可以在浏览器地址栏输入 <code>localhost:8080/</code> 访问开发服务器了。</p></div>`,11);function d(r,h){return s(),n("div",null,[p,a(" more "),i])}const m=e(o,[["render",d],["__file","create.html.vue"]]);export{m as default};
