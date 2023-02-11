import{a4 as u,_ as h,$ as m,a5 as k,a0 as n,a1 as a,a2 as s,a3 as e,a6 as o,k as c}from"./framework-bb5a5b49.js";const v="/assets/vscode-hint-light-829d10ed.png",_="/assets/vscode-hint-dark-c5d6cf83.png",g="/assets/vscode-error-light-3c214af5.png",f="/assets/vscode-error-dark-4177ebab.png",y="/assets/vscode-autocomplete-light-3523f41e.png",b="/assets/vscode-autocomplete-dark-ff24938c.png",x={},V=s("p",null,"本教程指引你如何配置 VuePress 项目。",-1),w=o('<h2 id="配置-vuepress" tabindex="-1"><a class="header-anchor" href="#配置-vuepress" aria-hidden="true">#</a> 配置 VuePress</h2><p>如果没有配置文件，一个 VuePress 项目只能按照预设实现有限的功能，所以为了更好的自定义你的网站，VuePress 提供了配置文件。</p><p>VuePress 使用文档文件夹中的 <code>.vuepress</code> 文件夹存放配置，所有 VuePress 相关的文件都将会被放在这里。</p><p>对于 VuePress 站点来说，<code>.vuepress/config.ts</code> (或 <code>.vuepress/config.js</code>) 是必要的配置文件。</p><div class="hint-container tip"><p class="hint-container-title">使用 TS 配置文件</p><p>我们建议你使用 TypeScript 配置文件，以得到更好的类型提示、自动补全与错误检查。</p><p>如果你不熟悉 TypeScript，使用 JavaScript 配置文件也是可以的，但你最好使用诸如 VSCode 这种全面支持 TS/JS 语法的编辑器，以避免丢失下方提及的类型检查、自动补全与选项提示等功能。</p></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>你需要在配置文件<code>.vuepress/config.ts</code> (或 <code>.vuepress/config.js</code>) 中，设置一个配置对象并将其导出。</p><p>为了能够得到正确的提示，我们建议从 <code>vuepress</code> 导入 <code>defineUserConfig</code> 并包裹配置对象:</p>',8),S=s("div",{class:"language-typescript","data-ext":"ts"},[s("pre",{class:"language-typescript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),s("span",{class:"token keyword"},"import"),e(),s("span",{class:"token punctuation"},"{"),e(" defineUserConfig "),s("span",{class:"token punctuation"},"}"),e(),s("span",{class:"token keyword"},"from"),e(),s("span",{class:"token string"},'"vuepress"'),s("span",{class:"token punctuation"},";"),e(`

`),s("span",{class:"token keyword"},"export"),e(),s("span",{class:"token keyword"},"default"),e(),s("span",{class:"token function"},"defineUserConfig"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token comment"},"// 此处放置配置"),e(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`)])])],-1),P=s("div",{class:"language-javascript","data-ext":"js"},[s("pre",{class:"language-javascript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),s("span",{class:"token keyword"},"import"),e(),s("span",{class:"token punctuation"},"{"),e(" defineUserConfig "),s("span",{class:"token punctuation"},"}"),e(),s("span",{class:"token keyword"},"from"),e(),s("span",{class:"token string"},'"vuepress"'),s("span",{class:"token punctuation"},";"),e(`

`),s("span",{class:"token keyword"},"export"),e(),s("span",{class:"token keyword"},"default"),e(),s("span",{class:"token function"},"defineUserConfig"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token comment"},"// 此处放置配置"),e(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`)])])],-1),T=o(`<p>在模板中，为了避免配置文件过长，我们使用 JavaScript 原生提供的 ESM 特性，将主题配置、导航栏和侧边栏配置拆分到了单独的文件夹中。</p><p>模板将主题函数抽离到了 <code>.vuepress/theme.js</code>，并通过 <code>export default</code> 导出。</p><p><code>.vuepress/theme.ts</code>:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 我们默认导出了主题对象</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 主题配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>随后在配置文件中直接引入:</p><p><code>.vuepress/config.ts</code>:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// ...</span>
<span class="token comment">// 我们在这里引入了主题</span>
<span class="token keyword">import</span> theme <span class="token keyword">from</span> <span class="token string">&quot;./theme.js&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token comment">// 这和 \`theme: hopeTheme({/* 你的配置 */})\` 是等价的</span>
  theme<span class="token punctuation">,</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这也能更清晰的帮助你理解配置中的站点配置和主题配置。</p><h2 id="配置作用域" tabindex="-1"><a class="header-anchor" href="#配置作用域" aria-hidden="true">#</a> 配置作用域</h2><h3 id="站点配置" tabindex="-1"><a class="header-anchor" href="#站点配置" aria-hidden="true">#</a> 站点配置</h3><p>站点配置中的配置项被 VuePress 直接读取，和主题无关且在所有主题均可生效。</p><p>我们知道，每一个站点都应该有它的 <code>lang</code>, <code>title</code> 和 <code>description</code> 等属性，因此 VuePress 内置支持了这些属性的配置。</p>`,12),C={class:"hint-container info"},z=s("p",{class:"hint-container-title"},"站点配置",-1),j={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html",target:"_blank",rel:"noopener noreferrer"},U=s("h3",{id:"主题配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#主题配置","aria-hidden":"true"},"#"),e(" 主题配置")],-1),J=s("p",null,[e("主题配置是你传递给 "),s("code",null,"hopeTheme"),e(" 函数的对象，它将由 VuePress Theme Hope 处理。")],-1),L=o('<div class="hint-container tip"><p class="hint-container-title">提示与检查</p><p>如果你在使用支持 TS/JS 语言特性的编辑器 (如 VSCode)，你可以很方便的得到选项提示与检查。</p><ul><li><p>你可以将鼠标悬停在某个选项以获得提示:</p><p><img src="'+v+'" alt="选项提示" data-mode="lightmode-only" loading="lazy"><img src="'+_+'" alt="选项提示" data-mode="darkmode-only" loading="lazy"></p></li><li><p>如果你输入了错误的选项名称或非法的值，你会得到错误提示:</p><p><img src="'+g+'" alt="错误提示" data-mode="lightmode-only" loading="lazy"><img src="'+f+'" alt="错误提示" data-mode="darkmode-only" loading="lazy"></p></li><li><p>你可以在输入时得到自动补全:</p><p><img src="'+y+'" alt="自动补全" data-mode="lightmode-only" loading="lazy"><img src="'+b+'" alt="自动补全" data-mode="darkmode-only" loading="lazy"></p></li></ul></div><h3 id="更多" tabindex="-1"><a class="header-anchor" href="#更多" aria-hidden="true">#</a> 更多</h3>',2),N={class:"hint-container info"},q=s("p",{class:"hint-container-title"},"插件配置",-1),E=s("code",null,"plugins.插件名称",-1),A={class:"hint-container info"},B=o('<p class="hint-container-title">样式配置</p><p>VuePress Theme Hope 主题按照约定俗称，使用 <code>.vuepress/styles</code> 文件夹存放样式配置。</p><p>你可以在此文件夹中:</p><ul><li>创建 <code>index.scss</code> 来注入额外的 CSS 样式</li><li>创建 <code>config.scss</code> 来进行样式配置</li><li>创建 <code>palette.scss</code> 来配置颜色与布局</li></ul>',4),H={class:"hint-container info"},M=s("p",{class:"hint-container-title"},"页面配置",-1);function F(I,R){const p=c("CodeTabs"),i=c("ExternalLinkIcon"),t=c("RouterLink");return h(),m("div",null,[V,k(" more "),w,n(p,{id:"33",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:l,value:d,isActive:r})=>[S]),tab1:a(({title:l,value:d,isActive:r})=>[P]),_:1}),T,s("div",C,[z,s("p",null,[e("你可以前往 "),s("a",j,[e("VuePress2 → 参考 → 配置"),n(i)]),e(" 查看所有 VuePress 配置。")])]),U,J,s("p",null,[e("你可以在 "),n(t,{to:"/zh/config/"},{default:a(()=>[e("配置 → 主题配置")]),_:1}),e(" 中找到全部的主题配置。")]),L,s("div",N,[q,s("p",null,[e("VuePress Theme Hope 主题捆绑了一些插件，你可以在主题选项中通过 "),E,e(" 来传递插件选项，详见 "),n(t,{to:"/zh/config/plugins/"},{default:a(()=>[e("配置 → 主题插件配置")]),_:1}),e("。")]),s("p",null,[e("如果你想要额外使用插件，请自行调用插件并传递插件选项，详见 "),n(t,{to:"/zh/cookbook/vuepress/plugin.html"},{default:a(()=>[e("VuePress → 插件")]),_:1}),e("。")])]),s("div",A,[B,s("p",null,[e("更多详情，详见 "),n(t,{to:"/zh/config/style.html"},{default:a(()=>[e("配置 → 样式配置")]),_:1}),e("。")])]),s("div",H,[M,s("p",null,[e("VuePress 支持在页面范围内通过 Markdown 文件中的 YAML Frontmatter 进行特定页面的配置，详见之前章节中的 "),n(t,{to:"/zh/cookbook/tutorial/content.html#frontmatter"},{default:a(()=>[e("项目内容 → Frontmatter")]),_:1}),e("。")])])])}const $=u(x,[["render",F],["__file","config.html.vue"]]);export{$ as default};
