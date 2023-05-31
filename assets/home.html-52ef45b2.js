import{_ as t,r as p,o as l,c as i,b as c,e as n,f as s,a as o,w as u,g as a}from"./app-d7067868.js";const k="/assets/home-light-048c8ffb.jpg",d="/assets/home-dark-c80b26db.jpg",r={},v=n("p",null,[n("code",null,"vuepress-theme-hope"),s(" 保留了默认主题的首页配置，在此基础上改进样式与配置。")],-1),m=n("p",null,[s("如果想要使用它，请在 frontmatter 中设置 "),n("code",null,"home: true"),s("。任何 frontmatter 之后的内容将会以普通的 Markdown 被渲染，并插入到主页渲染内容的底部。")],-1),b=n("p",null,[n("img",{src:k,alt:"首页截图","data-mode":"lightmode-only",loading:"lazy"}),n("img",{src:d,alt:"首页截图","data-mode":"darkmode-only",loading:"lazy"})],-1),h=a('<h2 id="站点信息" tabindex="-1"><a class="header-anchor" href="#站点信息" aria-hidden="true">#</a> 站点信息</h2><p>你可以使用 <code>heroText</code> 设置主标题，并通过 <code>tagline</code> 设置副标题。</p><p>如果你有一个 Logo，你可以将其放置在 <code>public</code> 文件夹中，并通过 <code>heroImage</code> 设置它，如果你在夜间模式希望展示另一个 Logo， 可以使用 <code>heroImageDark</code>。为了更好的 A11y，我们建议你设置 Logo 的描述到 <code>heroAlt</code>。</p><p>你可以通过 <code>bgImage</code> 和 <code>bgImageDark</code> 设置背景图片，但需要注意必须填入完整 URL 或绝对路径。如果你希望信息全屏展示，你可以设置 <code>heroFullScreen: true</code>。</p><p>如果你需要定制一些样式，你可以通过 <code>heroImageStyle</code> 和 <code>bgImageStyle</code> 设置 Logo 与背景图片的样式。</p><h2 id="主页按钮" tabindex="-1"><a class="header-anchor" href="#主页按钮" aria-hidden="true">#</a> 主页按钮</h2><p>你可以将一些重要的链接以按钮的形式展示在主页中。</p><p>你可以通过 <code>actions</code> 设置它们，它是一个数组，每个元素都是一个对象，包含以下键值:</p><ul><li><code>text</code>: 按钮文字</li><li><code>link</code>: 按钮链接</li><li><code>type</code>: 按钮类型 (仅支持 <code>&quot;primary&quot;</code> 与 <code>&quot;default&quot;</code> (默认))</li></ul><h2 id="项目亮点与功能" tabindex="-1"><a class="header-anchor" href="#项目亮点与功能" aria-hidden="true">#</a> 项目亮点与功能</h2><p>你可以通过 <code>highlights</code> 来设置和显示项目亮点，它是一个数组，每个元素都是一个对象，代表一个亮点部分。</p><p>你也可以通过 <code>features</code> 来设置和显示项目特性，它是一个数组，每个元素都是一个对象，代表一个特性部分。</p><p>亮点和功能都支持 <code>header</code> 和 <code>description</code> 属性。 其中 <code>header</code> 是章节的标题，<code>description</code> 是章节的描述。 你可以为它们设置 HTML 字符串。</p><p>亮点使用 <code>highlights</code> 来设置亮点，功能使用 <code>features</code> 来设置功能。两者都是数组，每个元素都是一个对象，代表一个亮点或者功能项：</p><ul><li><code>title</code>: 标题，支持 HTML 字符串</li><li><code>details</code>: 细节，支持 HTML 字符串</li><li><code>icon</code> (可选)：可以填写完整路径或绝对路径图片链接，或 FontClass</li><li><code>link</code> (可选)：链接地址</li></ul><p>亮点还支持以下属性：</p><ul><li><code>color</code>: 文字颜色</li><li><code>image</code>: 章节图像</li><li><code>imageDark</code>：在深色模式中使用的章节图像</li><li><code>bgImage</code>：章节背景图像</li><li><code>bgImageDark</code>：在暗深色模式中使用的章节背景图像</li><li><code>type</code>: <code>&quot;order&quot;</code>, <code>&quot;un-order&quot;</code> (默认) 或 <code>&quot;no-order&quot;</code></li></ul>',17),g={class:"hint-container info"},y=n("p",{class:"hint-container-title"},"相关信息",-1),f=a(`<h2 id="配置案例" tabindex="-1"><a class="header-anchor" href="#配置案例" aria-hidden="true">#</a> 配置案例</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> 主页
<span class="token key atrule">icon</span><span class="token punctuation">:</span> home
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /logo.svg
<span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/6<span class="token punctuation">-</span>light.svg
<span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/6<span class="token punctuation">-</span>dark.svg
<span class="token key atrule">bgImageStyle</span><span class="token punctuation">:</span>
  <span class="token key atrule">background-attachment</span><span class="token punctuation">:</span> fixed
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> VuePress Theme Hope
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> 一个具有强大功能的 vuepress 主题✨
<span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 使用教程 🧭
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/cookbook/tutorial/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 介绍 💡
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/get<span class="token punctuation">-</span>started/intro.html

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 配置 🛠
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/config/

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 在线案例 🪀
    <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//stackblitz.com/fork/vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope

<span class="token key atrule">highlights</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> 易于安装
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/box.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/3<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/3<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">highlights</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 运行 &lt;code<span class="token punctuation">&gt;</span>pnpm create vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope hope<span class="token punctuation">-</span>project&lt;/code<span class="token punctuation">&gt;</span> 以创建一个新的主题项目。
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 在已有项目根目录下运行 &lt;code<span class="token punctuation">&gt;</span>pnpm create vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope add .&lt;/code<span class="token punctuation">&gt;</span> 以在项目中添加主题。

  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> Add things you want in markdown
    <span class="token key atrule">description</span><span class="token punctuation">:</span> We extended the standard commonMark specification and added tons of new features for you.
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/markdown.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/2<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/2<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">bgImageStyle</span><span class="token punctuation">:</span>
      <span class="token key atrule">background-repeat</span><span class="token punctuation">:</span> repeat
      <span class="token key atrule">background-size</span><span class="token punctuation">:</span> initial
    <span class="token key atrule">highlights</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 标记内容
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> highlighter
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 自定义容器，属性，高亮和样式化支持

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 文章创作
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> feather
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 自定义对齐，角标，片段导入和新的图片格式支持

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 丰富你的内容
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> star
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Tex，幻灯片，选项卡，上下角标，任务列表和卡片支持

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 插入图表
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> chart<span class="token punctuation">-</span>simple
        <span class="token key atrule">details</span><span class="token punctuation">:</span> Chart.js<span class="token punctuation">,</span> ECharts<span class="token punctuation">,</span> 流程图和 Mermaid 支持

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 展示你的代码和工作
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> lightbulb
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 代码选项卡，在线演示，代码交互和 Vue Playground。

  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> 布局
    <span class="token key atrule">description</span><span class="token punctuation">:</span> 一个带有完整无障碍支持的响应式布局。
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/layout.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/5<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/5<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">highlights</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 布局增强
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> object<span class="token punctuation">-</span>group
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 添加路径导航、页脚、改进的导航栏、改进的页面导航等。
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/layout/

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 深色模式
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> circle<span class="token punctuation">-</span>half<span class="token punctuation">-</span>stroke
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 可以自由切换浅色模式与深色模式
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/interface/darkmode.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 主题色切换
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> palette
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 支持自定义主题色并允许用户在预设的主题颜色之间切换
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/interface/theme<span class="token punctuation">-</span>color.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 幻灯片页面
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> person<span class="token punctuation">-</span>chalkboard
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 添加幻灯片页面以显示你喜欢的内容
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/layout/slides

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 更多
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> ellipsis
        <span class="token key atrule">details</span><span class="token punctuation">:</span> RTL 布局，打印支持，全局按钮等
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/interface/others.html

  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> 新功能
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/features.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/1<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/1<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">highlights</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 浏览量与评论
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> comment<span class="token punctuation">-</span>dots
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 配合 Waline 来开启阅读量统计与评论支持
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/comment.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 文章信息
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> circle<span class="token punctuation">-</span>info
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/page<span class="token punctuation">-</span>info.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 文章加密
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> lock
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 你可以为你的特定页面或特定目录进行加密，以便陌生人不能随意访问它们
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/encrypt.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 搜索支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> search
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 支持 docsearch 和基于客户端的搜索
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/search.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 代码复制
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> copy
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 一键复制代码块中的代码
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/copy<span class="token punctuation">-</span>code.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 图片预览
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> image
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 像相册一样允许你浏览、缩放并分享你的页面图片
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/photo<span class="token punctuation">-</span>swipe.html

  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> Blogging
    <span class="token key atrule">description</span><span class="token punctuation">:</span> Create personal blog with theme
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/blog.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/5<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/5<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">highlights</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 博客功能
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> blog
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 通过文章的日期、标签和分类展示文章
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/blog/intro.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 博客主页
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> home
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 全新播客主页
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/blog/home.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 博主信息
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> home
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 自定义名称、头像、座右铭和社交媒体链接
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/blog/blogger.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 时间线
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> home
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 在时间线中浏览和通读博文
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/blog/timeline.html

  <span class="token punctuation">-</span> <span class="token key atrule">header</span><span class="token punctuation">:</span> 高级
    <span class="token key atrule">description</span><span class="token punctuation">:</span> 增强站点与用户体验的高级功能
    <span class="token key atrule">image</span><span class="token punctuation">:</span> /assets/image/advanced.svg
    <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/4<span class="token punctuation">-</span>light.svg
    <span class="token key atrule">bgImageDark</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//theme<span class="token punctuation">-</span>hope<span class="token punctuation">-</span>assets.vuejs.press/bg/4<span class="token punctuation">-</span>dark.svg
    <span class="token key atrule">highlights</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> SEO 增强
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> dumbbell
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 将最终生成的网页针对搜索引擎进行优化。
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/advanced/seo.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Sitemap
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> sitemap
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 自动为你的网站生成 Sitemap
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/advanced/sitemap.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Feed 支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> rss
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 生成你的 Feed，并通知你的用户订阅它
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/advanced/feed.html

      <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> PWA 支持
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> mobile<span class="token punctuation">-</span>screen
        <span class="token key atrule">details</span><span class="token punctuation">:</span> 让你的网站更像一个 APP
        <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/advanced/pwa.html

<span class="token key atrule">copyright</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright © 2019<span class="token punctuation">-</span>present Mr.Hope</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function _(z,I){const e=p("RouterLink");return l(),i("div",null,[v,m,b,c(" more "),h,n("div",g,[y,n("p",null,[s("关于完整的配置项目，请参见 "),o(e,{to:"/zh/config/frontmatter/home.html"},{default:u(()=>[s("主页 Frontmatter 配置")]),_:1}),s("。")])]),f])}const j=t(r,[["render",_],["__file","home.html.vue"]]);export{j as default};
