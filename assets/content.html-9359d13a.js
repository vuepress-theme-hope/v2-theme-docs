import{_ as c,r as s,o as l,c as i,f as p,e,b as t,a as n,w as o,g as r}from"./app-a38c4918.js";const h={},u=e("p",null,"本教程指引你如何在 VuePress 项目中控制内容生成。",-1),m=r(`<h2 id="页面的生成" tabindex="-1"><a class="header-anchor" href="#页面的生成" aria-hidden="true">#</a> 页面的生成</h2><p>VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。</p><p>默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。</p><p>由于你的项目是通过创建助手生成的，那么你会得到以下文件结构:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>└─ src
   ├─ guide
   │  ├─ ...
   │  └─ page.md
   │  └─ markdown.md
   │  └─ README.md
   ├─ ...
   ├─ slide.md
   └─ README.md
</code></pre></div><p>你的 Markdown 文件对应的路由路径为:</p><table><thead><tr><th>相对路径</th><th>路由路径</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/slide.md</code></td><td><code>/slide.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/slide.md</code></td><td><code>/guide/slide.html</code></td></tr><tr><td><code>/guide/page.md</code></td><td><code>/guide/page.html</code></td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">README.md</p><p><code>README.md</code> 是特例，在 Markdown 中，按照约定俗成，它会作为所在文件夹的主页。所以在渲染为网页时，它的对应路径为网页中的主页路径 <code>index.html</code>。</p><p>这应该很好理解。</p></div><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2>`,9),k={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},_={class:"hint-container info"},g=e("p",{class:"hint-container-title"},"YAML",-1),w={href:"https://mrhope.site/code/language/yaml/",target:"_blank",rel:"noopener noreferrer"},M=r(`<p>Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。下面是一个基本的示例:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>CN
<span class="token key atrule">title</span><span class="token punctuation">:</span> 页面的标题
<span class="token key atrule">description</span><span class="token punctuation">:</span> 页面的描述</span>
<span class="token punctuation">---</span></span>

<span class="token comment">&lt;!-- 这里是 Markdown 内容 --&gt;</span>

...
</code></pre></div><p>你肯定注意到 Frontmatter 中的字段和 VuePress 配置文件十分类似。你可以通过 Frontmatter 来覆盖当前页面的 <code>lang</code>, <code>title</code>, <code>description</code> 等属性。因此，你可以把 Frontmatter 当作页面级作用域的配置，它通常具有最高优先级，所作配置仅对当前页面生效。</p><h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2><p>每一个 Markdown 文件都会被 VuePress Theme Hope 处理，将文件内容渲染为网页内容。</p>`,5),f={class:"hint-container tip"},x=e("p",{class:"hint-container-title"},"Markdown 语法",-1),E=e("p",null,"大概十五分钟，你就可以学会如何书写 Markdown，看完之后记得回来！",-1),v=e("p",null,"你可以尝试自己编辑 Markdown 文件来修改模板的内容。如果你已启动开发服务器，那么修改后的结果会被实时同步到开发服务器上。",-1),b={class:"hint-container info"},V=e("p",{class:"hint-container-title"},"Markdown 语法扩展",-1),A=e("code",null,"vuepress-plugin-md-enhance",-1);function y(L,R){const d=s("ExternalLinkIcon"),a=s("RouterLink");return l(),i("div",null,[u,p(" more "),m,e("p",null,[t("Frontmatter 是 VuePress 中很重要的一个概念，它用于承载 Markdown 文件的配置。Markdown 文件可以包含一个 "),e("a",k,[t("YAML"),n(d)]),t(" Frontmatter。")]),e("div",_,[g,e("p",null,[t("如果你对 YAML 也不熟悉，你可以查看 "),e("a",w,[t("YAML 教程"),n(d)]),t("。")])]),M,e("div",f,[x,e("p",null,[t("如果你尚不了解 Markdown，请查看 "),n(a,{to:"/zh/cookbook/markdown/"},{default:o(()=>[t("Markdown 教程")]),_:1}),t("。")]),E]),v,e("div",b,[V,e("ul",null,[e("li",null,[e("p",null,[t("VuePress 自身对 Markdown 语法进行了一些扩展，关于这些扩展的语法，详见 "),n(a,{to:"/zh/cookbook/vuepress/markdown.html"},{default:o(()=>[t("VuePress → Markdown")]),_:1}),t("。")])]),e("li",null,[e("p",null,[t("主题通过 "),A,t(" 额外启用了一些语法扩展，详见 "),n(a,{to:"/zh/guide/get-started/markdown.html"},{default:o(()=>[t("指南 → Markdown")]),_:1}),t("。")])])])])])}const P=c(h,[["render",y],["__file","content.html.vue"]]);export{P as default};
