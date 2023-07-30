import{_ as u,r as a,o as s,c as r,a as p,b as o,d as e,e as t,w as i,f as c}from"./app-c5a3c96d.js";const h={},q=o("p",null,"以下选项控制主题功能。",-1),g=o("h2",{id:"博客选项",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#博客选项","aria-hidden":"true"},"#"),e(" 博客选项")],-1),b=o("code",null,"vuepress-plugin-blog2",-1),m=o("strong",null,"禁用",-1),_=o("p",null,[e("要启用博客插件并使用默认选项，你可以在主题选项中设置 "),o("code",null,"plugins.blog: true"),e("。")],-1),f={class:"hint-container warning"},k=o("p",{class:"hint-container-title"},"注意",-1),y=o("p",null,"除非你启用博客插件，否则以下选项将不起作用。",-1),v=c('<h3 id="blog-name" tabindex="-1"><a class="header-anchor" href="#blog-name" aria-hidden="true">#</a> blog.name</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>author</code></li></ul><p>博主姓名。</p><h3 id="blog-avatar" tabindex="-1"><a class="header-anchor" href="#blog-avatar" aria-hidden="true">#</a> blog.avatar</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>logo</code></li></ul><p>博主头像。</p><h3 id="blog-description" tabindex="-1"><a class="header-anchor" href="#blog-description" aria-hidden="true">#</a> blog.description</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>口号、座右铭或介绍语。</p><h3 id="blog-intro" tabindex="-1"><a class="header-anchor" href="#blog-intro" aria-hidden="true">#</a> blog.intro</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>博主的个人介绍地址。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>填写后将可以点击“博主信息”中的头像或姓名进入个人介绍页。</p></div><h3 id="blog-medias" tabindex="-1"><a class="header-anchor" href="#blog-medias" aria-hidden="true">#</a> blog.medias</h3><ul><li>类型: <code>Record&lt;MediaType, string&gt;</code></li><li>必填: 否</li></ul><p>博主的媒体链接配置。</p><ul><li><p>如果社交媒体已在下方列表中，你可以直接设置 <code>社交媒体名称: 社交媒体地址</code>。</p></li><li><p>否则，你应该传入一个元组 <code>社交媒体名称: [社交媒体地址, 社交媒体 SVG 图标字符串或路径]</code></p><p>元组的第二个元素应该是一个合法的 SVG 字符串或是一个完整的 SVG 文件路径。</p></li></ul><div class="hint-container info"><p class="hint-container-title">可用的社交媒体</p><p>以下社交媒体具有内置图标:</p><ul><li><code>&quot;Baidu&quot;</code>: 百度</li><li><code>&quot;BiliBili&quot;</code>: 哔哩哔哩</li><li><code>&quot;Bitbucket&quot;</code>: Bitbucket</li><li><code>&quot;Dingding&quot;</code>: 钉钉</li><li><code>&quot;Discord&quot;</code>: Discord</li><li><code>&quot;Douban&quot;</code>: 豆瓣</li><li><code>&quot;Dribbble&quot;</code>: Dribbble</li><li><code>&quot;Email&quot;</code>: 邮件</li><li><code>&quot;Evernote&quot;</code>: 印象笔记</li><li><code>&quot;Facebook&quot;</code>: 脸书</li><li><code>&quot;Flipboard&quot;</code>: 红板报</li><li><code>&quot;Gitee&quot;</code>: 码云</li><li><code>&quot;GitHub&quot;</code>: GitHub</li><li><code>&quot;Gitlab&quot;</code>: Gitlab</li><li><code>&quot;Gmail&quot;</code>: 谷歌邮箱</li><li><code>&quot;Instagram&quot;</code>: Instagram</li><li><code>&quot;Lark&quot;</code>: 飞书</li><li><code>&quot;Line&quot;</code>: Line</li><li><code>&quot;Linkedin&quot;</code>: 领英</li><li><code>&quot;Pinterest&quot;</code>: 拼趣</li><li><code>&quot;Pocket&quot;</code>: Pocket</li><li><code>&quot;QQ&quot;</code>: QQ</li><li><code>&quot;Qzone&quot;</code>: QQ 空间</li><li><code>&quot;Reddit&quot;</code>: 红迪</li><li><code>&quot;Rss&quot;</code>: RSS 地址</li><li><code>&quot;Steam&quot;</code>: 蒸汽</li><li><code>&quot;Skype&quot;</code>: Skype</li><li><code>&quot;Telegram&quot;</code>: 电报</li><li><code>&quot;Twitter&quot;</code>: 推特</li><li><code>&quot;Wechat&quot;</code>: 微信</li><li><code>&quot;Weibo&quot;</code>: 微博</li><li><code>&quot;Whatsapp&quot;</code>:瓦次艾普</li><li><code>&quot;Youtube&quot;</code>: 油管</li><li><code>&quot;Zhihu&quot;</code>: 知乎</li></ul><p>(请不要好奇为什么这里一定要加上特别奇怪的中文翻译)</p></div><h3 id="blog-roundavatar" tabindex="-1"><a class="header-anchor" href="#blog-roundavatar" aria-hidden="true">#</a> blog.roundAvatar</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否剪裁头像为圆形形状</p><h3 id="blog-sidebardisplay" tabindex="-1"><a class="header-anchor" href="#blog-sidebardisplay" aria-hidden="true">#</a> blog.sidebarDisplay</h3><ul><li>类型: <code>&quot;mobile&quot; | &quot;none&quot; | &quot;always&quot;</code></li><li>默认值: <code>&quot;mobile&quot;</code></li></ul><p>是否在侧边栏展示博主信息。</p><ul><li><code>&quot;mobile&quot;</code>: 在移动视图中显示在侧边栏中</li><li><code>&quot;always&quot;</code>: 总是展示在侧边栏中</li><li><code>&quot;none&quot;</code>: 永远不在侧边栏展示</li></ul><h3 id="blog-timeline" tabindex="-1"><a class="header-anchor" href="#blog-timeline" aria-hidden="true">#</a> blog.timeline</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;昨日不在&quot;</code></li></ul><p>时间轴的顶部文字。</p><h3 id="blog-articleperpage" tabindex="-1"><a class="header-anchor" href="#blog-articleperpage" aria-hidden="true">#</a> blog.articlePerPage</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>10</code></li></ul><p>每页的文章数量。</p><h3 id="blog-articleinfo" tabindex="-1"><a class="header-anchor" href="#blog-articleinfo" aria-hidden="true">#</a> blog.articleInfo</h3><ul><li>类型: <code>ArticleInfo[]</code></li><li>默认值: <code>[&quot;Author&quot;, &quot;Original&quot;, &quot;Date&quot;, &quot;PageView&quot;, &quot;Category&quot;, &quot;Tag&quot;, &quot;ReadingTime&quot;]</code></li></ul><p>文章列表中展示的文章信息</p><p><code>ArticleInfo</code> 的可选值如下:</p><ul><li><code>&quot;Author&quot;</code></li><li><code>&quot;Category&quot;</code></li><li><code>&quot;Date&quot;</code></li><li><code>&quot;Original&quot;</code></li><li><code>&quot;Tag&quot;</code></li><li><code>&quot;ReadingTime&quot;</code></li><li><code>&quot;Word&quot;</code></li></ul>',36),x={class:"hint-container warning"},R=o("p",{class:"hint-container-title"},"限制",-1),B={id:"加密配置",tabindex:"-1"},w=o("a",{class:"header-anchor",href:"#加密配置","aria-hidden":"true"},"#",-1),D=c(`<div class="hint-container note"><p class="hint-container-title">注</p><p>你只能在主题选项下直接设置此选项，在各语言中分别配置<strong>没有任何效果</strong>。</p></div><h3 id="encrypt-global" tabindex="-1"><a class="header-anchor" href="#encrypt-global" aria-hidden="true">#</a> encrypt.global</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否全局加密。</p><h3 id="encrypt-admin" tabindex="-1"><a class="header-anchor" href="#encrypt-admin" aria-hidden="true">#</a> encrypt.admin</h3><ul><li>类型: <code>string | string[]</code></li><li>必填: 否</li></ul><p>最高权限密码，可以以数组的形式设置多个。</p><h3 id="encrypt-config" tabindex="-1"><a class="header-anchor" href="#encrypt-config" aria-hidden="true">#</a> encrypt.config</h3><ul><li>类型: <code>Record&lt;string, string | string[]&gt;</code></li><li>必填: 否</li></ul><p>加密配置，为一个对象，键名为匹配的路径，键值为对应的密码，接受字符串或字符串数组。</p><details class="hint-container details"><summary>例子</summary><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// 这会加密整个 guide 目录，并且两个密码都是可用的</span>
  <span class="token string-property property">&quot;/guide/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1234&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5678&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 这只会加密 config/page.html</span>
  <span class="token string-property property">&quot;/config/page.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>`,11);function G(S,T){const d=a("ProjectLink"),l=a("RouterLink"),n=a("Badge");return s(),r("div",null,[q,p(" more "),g,o("p",null,[e("主题通过使用 "),t(d,{name:"blog2",path:"/zh/"},{default:i(()=>[b]),_:1}),e(" 提供博客功能，且该功能默认"),m,e("。")]),_,o("div",f,[k,y,o("p",null,[e("有关详细信息，请参阅 "),t(l,{to:"/zh/guide/blog/intro.html"},{default:i(()=>[e("博客功能介绍")]),_:1}),e("。")])]),v,o("div",x,[R,o("p",null,[e("默认情况下，ReadingTime 和 Word 在开发服务器中不可用，"),t(l,{to:"/zh/config/theme/basic.html#hotreload"},{default:i(()=>[e("查看原因以及如何启用它")]),_:1}),e("。")])]),o("h2",B,[w,e(" 加密配置 "),t(n,{text:"仅限 Root",type:"warning"})]),o("p",null,[e("有关详细信息，请参阅 "),t(l,{to:"/zh/guide/feature/encrypt.html"},{default:i(()=>[e("加密功能介绍")]),_:1}),e("。")]),D])}const L=u(h,[["render",G],["__file","feature.html.vue"]]);export{L as default};
