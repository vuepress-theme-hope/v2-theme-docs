import{a3 as c,Z as d,_ as a,a4 as l,a1 as e,a2 as o,$ as n,a0 as r,a5 as s,D as i}from"./framework-32163d8a.js";const p="/assets/blog-light-13fd7839.jpg",h="/assets/blog-dark-b6d51e97.jpg",m={},u=e("p",null,[e("code",null,"vuepress-theme-hope"),o(" 允许你启用博客风格的首页。")],-1),_=e("p",null,[o("你需要在相应的页面的 frontmatter 中，设置 "),e("code",null,"home: true"),o(" 和 "),e("code",null,"layout: BlogHome"),o(" 来使用博客主页。")],-1),g=s('<p><img src="'+p+'" alt="首页截图" data-mode="lightmode-only" loading="lazy"><img src="'+h+'" alt="首页截图" data-mode="darkmode-only" loading="lazy"></p><h2 id="主页信息" tabindex="-1"><a class="header-anchor" href="#主页信息" aria-hidden="true">#</a> 主页信息</h2><p>你可以使用 <code>heroText</code> 设置主标题，并通过 <code>tagline</code> 设置副标题。</p><p>如果你有一个 Logo，你可以将其放置在 <code>public</code> 文件夹中，并通过 <code>heroImage</code> 设置它，如果你在夜间模式希望展示另一个 Logo， 可以使用 <code>heroImageDark</code>。为了更好的 A11y，我们建议你设置 Logo 的描述到 <code>heroAlt</code>。</p><p>你可以通过 <code>bgImage</code> 设置背景图片，但需要注意必须填入完整 URL 或绝对路径。如果你希望信息全屏展示，你可以设置 <code>heroFullScreen: true</code>。</p><p>如果你需要定制一些样式，你可以通过 <code>heroImageStyle</code> 和 <code>bgImageStyle</code> 设置 Logo 与背景图片的样式。</p><h2 id="项目展示" tabindex="-1"><a class="header-anchor" href="#项目展示" aria-hidden="true">#</a> 项目展示</h2><p>通常情况下，你可能希望在主页中展示一些项目、书籍、文章、链接、友链等。</p><p>你可以通过 <code>projects</code> 设置它们，它是一个数组，每个元素都是一个对象，包含以下键值:</p><ul><li><p><code>name</code>: 项目名称，必填</p></li><li><p><code>link</code>: 项目链接，必填，填入外部链接或绝对路径。</p></li><li><p><code>desc</code>: 项目描述，选填</p></li><li><p><code>icon</code>: 图标，可填入完整路径或绝对路径的图片链接、图标 FontClass 等。</p><p>同时提供了如下内置图标支持: <code>&quot;link&quot;</code>、<code>&quot;project&quot;</code>、<code>&quot;book&quot;</code>、<code>&quot;article&quot;</code>、<code>&quot;friend&quot;</code></p></li></ul>',10),f={class:"hint-container info"},b=e("p",{class:"hint-container-title"},"相关信息",-1);function k(q,x){const t=i("RouterLink");return d(),a("div",null,[u,_,l(" more "),g,e("div",f,[b,e("p",null,[o("关于完整的配置项目，请参见 "),n(t,{to:"/zh/config/frontmatter/blog-home.html"},{default:r(()=>[o("博客主页 Frontmatter 配置")]),_:1}),o("。")])])])}const L=c(m,[["render",k],["__file","home.html.vue"]]);export{L as default};
