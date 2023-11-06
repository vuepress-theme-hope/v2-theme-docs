import{_ as p,r as c,o as r,c as u,e as i,w as a,d as n,b as e,f as s}from"./app-1ee6e138.js";const g={},h=e("div",{class:"language-diff line-numbers-mode","data-ext":"diff"},[e("pre",{class:"language-diff"},[e("code",null,[e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},` // .vuepress/config.ts
`)]),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},` import theme from "vuepress-theme-hope";
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},` import { defineUserConfig } from "vuepress";
`),e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},` import { hopeTheme } from "vuepress-theme-hope";
`)]),n(`
`),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},` export default theme.config({
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},` export default defineUserConfig({
`)]),e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`   // your site config here
`),e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`   // ...
`)]),n(`
`),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},`   themeConfig:{
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},`   theme: hopeTheme({
`)]),e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`     // your theme config here
`),e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`     // ...
`)]),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},`   },
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},`   }),
`)]),e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},` });
`)])])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),m=e("div",{class:"language-diff line-numbers-mode","data-ext":"diff"},[e("pre",{class:"language-diff"},[e("code",null,[n(`// .vuepress/config.js
`),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},` const { config } = require("vuepress-theme-hope");
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},` import { hopeTheme } from "vuepress-theme-hope";
`)]),n(`
`),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},` module.exports = theme.config({
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},` export default {
`)]),e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`   // your site config here
`),e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`   // ...
`)]),n(`
`),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},`   themeConfig:{
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},`   theme: hopeTheme({
`)]),e("span",{class:"token unchanged"},[e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`     // your theme config here
`),e("span",{class:"token prefix unchanged"}," "),e("span",{class:"token line"},`     // ...
`)]),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},`   },
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},`   }),
`)]),e("span",{class:"token deleted-sign deleted"},[e("span",{class:"token prefix deleted"},"-"),e("span",{class:"token line"},` });
`)]),e("span",{class:"token inserted-sign inserted"},[e("span",{class:"token prefix inserted"},"+"),e("span",{class:"token line"},` };
`)])])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),b=s(`<h2 id="主题使用" tabindex="-1"><a class="header-anchor" href="#主题使用" aria-hidden="true">#</a> 主题使用</h2><ul><li>移除 <code>config</code></li><li><code>themeConfig</code> 重命名为 <code>hopeTheme</code></li><li><code>navbarConfig</code> 重命名为 <code>navbar</code></li><li><code>sidebarConfig</code> 重命名为 <code>sidebar</code></li><li>新增 <code>arraySidebar</code>, <code>objectSidebar</code></li></ul><h2 id="主题配置" tabindex="-1"><a class="header-anchor" href="#主题配置" aria-hidden="true">#</a> 主题配置</h2><ul><li><p><code>author</code> 类型从 <code>string | undefined</code> 改为 <code>AuthorInfo[] | AuthorInfo | string[] | string | undefined</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 作者姓名
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者网站
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 作者 Email
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此改动允许你添加多个作者，并为其设置网站。</p></li></ul><h3 id="导航栏" tabindex="-1"><a class="header-anchor" href="#导航栏" aria-hidden="true">#</a> 导航栏</h3><ul><li><p><code>nav</code>, <code>navbar</code> 统一为 <code>navbar</code></p></li><li><p><code>darkLogo</code> 重命名为 <code>logoDark</code></p></li><li><p><code>navAutoHide</code> 重命名为 <code>navbarAutoHide</code></p></li><li><p>新增 <code>navbarIcon</code> 选项控制导航栏图标</p></li><li><p>新增 <code>navbarLayout</code> 选项控制导航栏布局</p></li></ul><p>由于主题不再内置搜索:</p><ul><li><p>移除 <code>search</code>, <code>searchPlaceholder</code>, <code>searchMaxSuggestions</code></p></li><li><p>移除 <code>algolia</code>, <code>algoliaType</code></p></li></ul><h3 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏" aria-hidden="true">#</a> 侧边栏</h3><ul><li><p><code>sidebarDepth</code> 重命名为 <code>headerDepth</code></p></li><li><p>移除 <code>displayAllHeaders</code></p></li><li><p>支持从文件结构中生成侧边栏</p></li></ul><h3 id="导航栏侧边栏配置统一" tabindex="-1"><a class="header-anchor" href="#导航栏侧边栏配置统一" aria-hidden="true">#</a> 导航栏侧边栏配置统一</h3><ul><li><p>导航栏配置中的 <code>items</code> 改为 <code>children</code></p></li><li><p>侧边栏配置中的 <code>title</code> 改为 <code>text</code>, <code>path</code> 改为 <code>link</code>。</p></li><li><p>V2 导航栏支持像侧边栏一样直接设置 Markdown 文件路径自动生成文字、图标与链接</p></li></ul><p>这样他们的配置统一为 <code>text</code>, <code>icon</code>, <code>prefix</code>, <code>link</code>, <code>children</code>。</p><ul><li>两者配置新增 <code>activeMatch</code> 控制激活情况</li></ul><h3 id="页面链接" tabindex="-1"><a class="header-anchor" href="#页面链接" aria-hidden="true">#</a> 页面链接</h3><ul><li><p><code>prevLinks</code> 重命名为 <code>prevLink</code></p></li><li><p><code>nextLinks</code> 重命名为 <code>nextLink</code></p></li><li><p><code>editLinks</code> 重命名为 <code>editLink</code></p></li><li><p><code>updateTime</code> 重命名为 <code>lastUpdated</code></p></li></ul><h3 id="外观" tabindex="-1"><a class="header-anchor" href="#外观" aria-hidden="true">#</a> 外观</h3><ul><li><p>新增 <code>iconAssets</code> 选项</p></li><li><p><code>iconPrefix</code> 默认值从 <code>iconAssets</code> 推断</p></li><li><p>更新 <code>darkmode</code> 选项的值</p><ul><li>添加 <code>&quot;enable&quot;</code></li><li>将 <code>&quot;switch&quot;</code> 重命名为 <code>&quot;toggle&quot;</code></li><li>将 <code>&quot;auto-switch&quot;</code> 重命名为 <code>&quot;switch&quot;</code></li></ul></li><li><p>默认禁用 <code>themeColor</code> 与 <code>fullscreen</code></p></li></ul><h3 id="博客配置" tabindex="-1"><a class="header-anchor" href="#博客配置" aria-hidden="true">#</a> 博客配置</h3><ul><li><p>博客配置现在支持在每个语言中单独配置</p></li><li><p>新增 <code>blog.description</code> 配置博主描述或座右铭</p></li><li><p><code>blog.links</code> 重命名为 <code>blog.medias</code></p></li><li><p><code>blog.roundAvatar</code> 默认值由 <code>true</code> 改为 <code>false</code></p></li><li><p><code>blog.perPage</code> 重命名为 <code>blog.articlePerPage</code></p></li><li><p><code>blog.autoExcerpt</code> 移动至 <code>plugins.blog.excerptLength</code></p></li></ul><h3 id="加密配置" tabindex="-1"><a class="header-anchor" href="#加密配置" aria-hidden="true">#</a> 加密配置</h3><ul><li><p><code>encrypt.status: &quot;global&quot; | &quot;local&quot;</code> (默认 <code>&quot;local&quot;</code>) 改为 <code>encrypt.global: boolean</code> (默认 <code>false</code>)</p></li><li><p><code>encrypt.global</code> 重命名为 <code>encrypt.admin</code></p></li></ul><h3 id="自定义布局" tabindex="-1"><a class="header-anchor" href="#自定义布局" aria-hidden="true">#</a> 自定义布局</h3><ul><li>移除 <code>custom</code></li></ul><h3 id="页面布局" tabindex="-1"><a class="header-anchor" href="#页面布局" aria-hidden="true">#</a> 页面布局</h3><ul><li><code>anchorDisplay</code> 重命名为 <code>toc</code></li></ul><h3 id="阅读速度" tabindex="-1"><a class="header-anchor" href="#阅读速度" aria-hidden="true">#</a> 阅读速度</h3><ul><li><code>wordPerMinute</code> 移至 <code>plugins.readingTime.wordPerMinute</code></li></ul><h2 id="插件变更" tabindex="-1"><a class="header-anchor" href="#插件变更" aria-hidden="true">#</a> 插件变更</h2><h3 id="新增" tabindex="-1"><a class="header-anchor" href="#新增" aria-hidden="true">#</a> 新增</h3><ul><li>新增 <code>plugins.blog</code> 控制博客地址</li><li>新增 <code>plugins.nprogress</code> 控制加载进度条</li><li>新增 <code>plugins.prismjs</code> 控制是否启用 Prism.js 高亮代码块</li></ul><h3 id="改动" tabindex="-1"><a class="header-anchor" href="#改动" aria-hidden="true">#</a> 改动</h3><p>所有插件相关选项均被移至 <code>plugins</code> 下。</p>`,33),v=e("li",null,[e("p",null,[e("code",null,"activeHash"),n(" 移动至 "),e("code",null,"plugins.activeHeaderLinks")]),e("p",null,[n("主题现在使用 "),e("code",null,"@vuepress/plugin-active-header-links"),n(" 官方插件。 "),e("img",{src:"https://img.shields.io/badge/-warning-yellow",alt:"警告",loading:"lazy"})])],-1),k=e("p",null,[e("code",null,"comment"),n(" 移动至 "),e("code",null,"plugins.comment")],-1),f=e("li",null,[e("p",null,[n("添加 "),e("code",null,"artalk"),n("、"),e("code",null,"twikoo"),n(" 和 "),e("code",null,"giscus"),n(" 评论服务的支持 "),e("img",{src:"https://img.shields.io/badge/-New-brightgreen",alt:"新增",loading:"lazy"})])],-1),y=e("p",null,[n("Vssue 目前缺失 "),e("img",{src:"https://img.shields.io/badge/-warning-yellow",alt:"警告",loading:"lazy"})],-1),w={href:"https://github.com/meteorlxy",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,[n("Valine 服务被移除 "),e("img",{src:"https://img.shields.io/badge/-removed-red",alt:"移除",loading:"lazy"})],-1),_={href:"https://waline.js.org",target:"_blank",rel:"noopener noreferrer"},z=s('<li><p><code>copyCode</code> 移动至 <code>plugins.copyCode</code></p></li><li><p><code>copyright</code> 移动至 <code>plugins.copyright</code></p><p>插件默认禁用 <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p></li><li><p><code>feed</code> 移动至 <code>plugins.feed</code></p><ul><li><p>支持通过 <code>plugins.feed.preservedElements</code> 选项保留自定义组件和元素 <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy"></p></li><li><p>可视化的 Atom 和 RSS 流，支持通过 <code>plugins.feed.atomXslFilename</code> <code>plugins.feed.atomXslTemplate</code> <code>plugins.feed.rssXslFilename</code> 和 <code>plugins.feed.rssXslTemplate</code> 配置 <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy"></p></li><li><p>通过 <code>plugins.feed.getter</code> 选项完全自定义 Feed 生成 <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy"></p></li><li><p>多分类支持 <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy"></p></li><li><p>所有的输出选项从插件选项中的 <code>output</code> 选项移出到根选项下，并进行了重命名。</p><ul><li><p><code>feed.output.atom.enable</code> 重命名为 <code>plugins.feed.atom</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p></li><li><p><code>feed.output.json.enable</code> 重命名为 <code>plugins.feed.json</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p></li><li><p><code>feed.output.rss.enable</code> 重命名为 <code>plugins.feed.rss</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p></li><li><p><code>feed.output.atom.path</code> 重命名为 <code>plugins.feed.atomOutputFilename</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p></li><li><p><code>feed.output.json.path</code> 重命名为 <code>plugins.feed.jsonOutputFilename</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p></li><li><p><code>feed.output.rss.path</code> 重命名为 <code>plugins.feed.rssOutputFilename</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p></li></ul></li><li><p><code>plugins.feed.atom</code>, <code>plugins.feed.json</code> 和 <code>plugins.feed.rss</code> 现在默认为 <code>false</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p><p>主题不再默认输出三种格式的 Feed 文件，你需要手动启用以输出需要的格式。</p></li></ul></li><li><p><code>git</code> 移动至 <code>plugins.git</code></p><p>主题现在使用官方插件 <code>@vuepress/plugin-git</code>，所以支持选项有变化。 <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p></li>',4),j=e("p",null,[e("code",null,"mdEnhance"),n(" 移动至 "),e("code",null,"plugins.mdEnhance")],-1),q=s('<li><p>Markdown 链接检查 <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy"></p><p>该插件现在检查你的 Markdown 链接，并在检测到损坏的链接时警告你。</p><p>你可以通过 <code>plugins.mdEnhance.checkLinks</code> 选项控制此行为</p></li><li><p>图像标记支持 <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy"></p><p>通过 <code>plugins.mdEnhance.imgMark</code> 使用 <code>#light</code> 和 <code>#dark</code> 后缀标记图像以在日间模式或夜间模式下显示它们。</p></li>',2),E=e("p",null,[n("Chart.js 支持 "),e("img",{src:"https://img.shields.io/badge/-新增-brightgreen",alt:"新增",loading:"lazy"})],-1),S=e("code",null,"plugins.mdEnhance.chart",-1),L={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},C=s(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 标题

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json language-json"><span class="token punctuation">{</span>
  <span class="token comment">// chart.js 配置</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: chart 标题

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// chart.js 配置</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),T=e("p",null,[n("ECharts 支持 "),e("img",{src:"https://img.shields.io/badge/-新增-brightgreen",alt:"新增",loading:"lazy"})],-1),A=e("code",null,"plugins.mdEnhance.echarts",-1),V={href:"https://echarts.apache.org/en/index.html",target:"_blank",rel:"noopener noreferrer"},P=s(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: echarts 标题

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json language-json"><span class="token punctuation">{</span>
  <span class="token comment">// echarts 配置</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: echarts 标题

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// echarts 配置</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),F=s(`<li><p>包含文件支持 <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy"></p><p>新增 <code>plugins.mdEnhance.include</code> 选项使用 <code>@include</code> 将其他文件内容导入到 Markdown 中。</p><p>使用 <code>&lt;!-- @include: filename --&gt;</code> 导入文件。</p><p>如果要部分导入文件，你可以指定导入的行数</p><ul><li><code>&lt;!-- @include: filename{start-end} --&gt;</code></li><li><code>&lt;!-- @include: filename{start-} --&gt;</code></li><li><code>&lt;!-- @include: filename{-end} --&gt;</code></li></ul><p>同时你也可以导入文件区域:</p><ul><li><code>&lt;!-- @include: filename#region --&gt;</code></li></ul></li><li><p>选项卡支持 <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy"></p><p>新增 <code>plugins.mdEnhance.tabs</code> 选项通过 <code>tabs</code> 容器创建选项卡。</p></li><li><p><code>plugins.mdEnhance.gfm</code> <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy"></p><p>一键支持 GFM</p></li><li><p><code>plugins.mdEnhance.vPre</code> <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy"></p><p>VuePress 2 从 <code>@vuepress/core</code> 中删除了以下容器支持，因此添加了此选项</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: v-pre

一些 {{vue 语法}}。

:::
</code></pre></div></li><li><p><code>mdEnhance.codegroup</code> 重命名为 <code>plugins.mdEnhance.codetabs</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p></li><li><p><code>plugins.mdEnhance.lazyLoad</code> 改为 <code>plugins.mdEnhance.imgLazyload</code>，默认值由 <code>true</code> 改为 <code>false</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p></li><li><p>移除 <code>plugins.mdEnhance.enableAll</code> <img src="https://img.shields.io/badge/-removed-red" alt="移除" loading="lazy"></p><p>有太多不知道自己在做什么的菜鸟用户，他们只是启用此选项而没有使用提供的所有功能，但他们抱怨加载速度。</p></li><li><p>移除 <code>plugins.mdEnhance.lineNumbers</code> <img src="https://img.shields.io/badge/-removed-red" alt="移除" loading="lazy"></p><p>VuePress2 支持单独对代码块配置行号</p></li><li><p>移除 <code>plugins.mdEnhance.imageFix</code> <img src="https://img.shields.io/badge/-removed-red" alt="移除" loading="lazy"></p><p>图片相关问题已在 V2 中得到修正</p></li>`,9),M=s('<li><p><code>photoSwipe</code> 移动至 <code>plugins.photoSwipe</code></p></li><li><p><code>pwa</code> 移动至 <code>plugins.pwa</code></p><ul><li><p><code>plugins.pwa.update</code> <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy">: 控制 SW 的更新逻辑</p><ul><li><p><code>&quot;disabled&quot;</code>: 即使有新的 service worker 也不做任何事情，新的 service work 开始等待后，会在用户下次访问时接管页面，让用户获得新内容。</p></li><li><p><code>&quot;available&quot;</code>: 仅当新的 service worker 可用时才显示更新弹出窗口</p></li><li><p><code>&quot;hint&quot;</code>: 显示更新内容可用提示，并允许用户立即刷新。当新的 SW 成功注册后，将转为更新内容就绪弹窗。</p><p>当你希望用户立即查看新文档时，这很有帮助。</p></li><li><p><code>&quot;force&quot;</code>: 立即注销当前 Service Worker 然后刷新以获取新内容</p></li></ul></li><li><p><code>plugins.pwa.appendBase</code> <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy">: 自动向 <code>manifest</code> 选项插入 <code>base</code></p></li><li><p><code>plugins.pwa.hintComponent</code> <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy">: 检测到新内容的提示组件</p></li><li><p>shouldPrefetch 提示 <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy">: 现在插件将检查配置文件中的 <code>shouldPrefetch</code> 选项并警告你禁用它。</p></li><li><p><code>plugins.pwa.cacheHTML</code> 默认值由 <code>true</code> 改为 <code>false</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p><p>这能有效降低 SW 更新时间</p></li><li><p><code>pwa.popupComponent</code> 重命名为 <code>plugins.pwa.updateComponent</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p><p>这是因为我们新增了一个提示弹窗，所以需要避免名称混淆</p></li></ul></li><li><p><code>readingTime</code> 移动至 <code>plugins.readingTime</code></p></li><li><p><code>seo</code> 移动至 <code>plugins.seo</code></p><ul><li><p>JSON-LD 支持 <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy"></p><p>该插件现在可以为你生成 JSON-LD 脚本标签，并提供一个选项 <code>plugins.seo.jsonLd</code> 让你自定义 JSON-LD 属性。</p></li><li><p>自动描述生成 <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy"></p><p>该插件可以通过 <code>plugins.seo.autoDescription</code> 选项自动为你生成描述</p></li><li><p>规范链接 <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy"></p><p>你可以通过 <code>plugins.seo.canonicalLink</code> 选项设置规范链接。当你的文档部署在多个地方时，它很有用。</p></li><li><p><code>seo.customMeta</code> 重命名为 <code>plugins.seo.customHead</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p><p>现在你可以编辑所有 <code>&lt;head&gt;</code> 标签，而不是仅 <code>&lt;meta&gt;</code> 标签。</p></li></ul></li><li><p><code>sitemap</code> 移动至 <code>plugins.sitemap</code></p><ul><li><p>可视化的站点地图，支持通过 <code>plugins.sitemap.sitemapXSLFilename</code> 和 <code>plugins.sitemap.sitemapXSLTemplate</code> 配置 <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy"></p></li><li><p><code>plugins.sitemap.priority</code> <img src="https://img.shields.io/badge/-新增-brightgreen" alt="新增" loading="lazy">: 设置优先级的默认值</p></li><li><p><code>sitemap.urls</code> 重命名为 <code>plugins.sitemap.extraUrls</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p></li><li><p><code>sitemap.exclude</code> 重命名为 <code>plugins.sitemap.excludeUrls</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p></li><li><p><code>sitemap.outFile</code> 重命名为 <code>plugins.sitemap.sitemapFilename</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p></li><li><p><code>sitemap.modifyTimeGetter</code> 重命名为 <code>plugins.sitemap.modifyTimeGetter</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="警告" loading="lazy"></p></li></ul></li>',5),N=s('<h3 id="移除" tabindex="-1"><a class="header-anchor" href="#移除" aria-hidden="true">#</a> 移除</h3><ul><li><p>移除 <code>chunkRename</code></p><p>主题不再提供此功能。</p></li><li><p>移除 <code>cleanUrl</code></p><p>主题不再提供此功能。</p></li><li><p>移除 <code>smoothScroll</code></p><p>主题现在通过 CSS 提供平滑滚动，不再对旧浏览器提供兼容。</p></li></ul>',2);function D(H,I){const t=c("CodeTabs"),l=c("ExternalLinkIcon");return r(),u("div",null,[i(t,{id:"0",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:d,isActive:o})=>[n("TS")]),title1:a(({value:d,isActive:o})=>[n("JS")]),tab0:a(({value:d,isActive:o})=>[h]),tab1:a(({value:d,isActive:o})=>[m]),_:1}),b,e("ul",null,[v,e("li",null,[k,e("ul",null,[f,e("li",null,[y,e("p",null,[n("Vssue 是用 Vue2 编写的，作者 "),e("a",w,[n("meteorlxy"),i(l)]),n(" 尚未使其与 Vue3 兼容")])]),e("li",null,[x,e("p",null,[n("Valine 缺乏维护，并且它可能会泄露你的隐私。你应该改用 "),e("a",_,[n("Waline"),i(l)]),n("。")])])])]),z,e("li",null,[j,e("ul",null,[q,e("li",null,[E,e("p",null,[n("新增 "),S,n(" 选项提供 "),e("a",L,[n("chart.js"),i(l)]),n(" 支持")]),C]),e("li",null,[T,e("p",null,[n("新增 "),A,n(" 选项提供 "),e("a",V,[n("ECharts"),i(l)]),n(" 支持。")]),P]),F])]),M]),N])}const U=p(g,[["render",D],["__file","config.html.vue"]]);export{U as default};
