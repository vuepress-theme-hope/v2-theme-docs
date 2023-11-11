import{_ as c,r as i,o as l,c as p,a as u,b as n,e as r,w as e,d as s,f as d}from"./app-fe94cd90.js";const k="/assets/blogger-info-light-a216fefe.png",m="/assets/blogger-info-dark-6ddb26a0.png",b={},v=n("p",null,"主题允许你展示博主的基本信息。",-1),g=d('<p><img src="'+k+'" alt="博主信息" data-mode="lightmode-only" loading="lazy"><br><img src="'+m+'" alt="博主信息" data-mode="darkmode-only" loading="lazy"></p><h2 id="头像和博主名称" tabindex="-1"><a class="header-anchor" href="#头像和博主名称" aria-hidden="true">#</a> 头像和博主名称</h2><p>你可以通过 <code>blog.avatar</code> 和 <code>blog.name</code> 自由配置博客页面中显示的的博主头像和姓名。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果你没有填写它们，它们会自动回退到站点 Logo (主题选项中的 <code>logo</code>) 和 站点名称。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你希望头像被剪裁成圆形，请设置 <code>blog.roundAvatar: true</code>。</p></div><h2 id="座右铭、社交媒体与个人介绍页地址" tabindex="-1"><a class="header-anchor" href="#座右铭、社交媒体与个人介绍页地址" aria-hidden="true">#</a> 座右铭、社交媒体与个人介绍页地址</h2><p>你可以通过 <code>blog.description</code> 设置自己的一句话介绍、座右铭或口号。</p><p>你也可以通过 <code>blog.intro</code> 指定一个个人介绍页地址，点击头像与姓名时会自动进行跳转。</p><p>你还可以通过 <code>blog.medias</code> 这个对象配置你的社交媒体链接。</p><ul><li><p>如果社交媒体已在下方列表中，你可以直接设置 <code>社交媒体名称: 社交媒体地址</code>。</p></li><li><p>否则，你应该传入一个元组 <code>社交媒体名称: [社交媒体地址, 社交媒体 SVG 图标字符串或路径]</code></p><p>元组的第二个元素应该是一个合法的 SVG 字符串或是一个完整的 SVG 文件路径。</p></li></ul><div class="hint-container tip"><p class="hint-container-title">可用的社交媒体:</p><ul><li><code>&quot;Baidu&quot;</code>: 百度</li><li><code>&quot;BiliBili&quot;</code>: 哔哩哔哩</li><li><code>&quot;Bitbucket&quot;</code>: Bitbucket</li><li><code>&quot;Dingding&quot;</code>: 钉钉</li><li><code>&quot;Discord&quot;</code>: Discord</li><li><code>&quot;Douban&quot;</code>: 豆瓣</li><li><code>&quot;Dribbble&quot;</code>: Dribbble</li><li><code>&quot;Email&quot;</code>: 邮件</li><li><code>&quot;Evernote&quot;</code>: 印象笔记</li><li><code>&quot;Facebook&quot;</code>: 脸书</li><li><code>&quot;Flipboard&quot;</code>: 红板报</li><li><code>&quot;Gitee&quot;</code>: 码云</li><li><code>&quot;GitHub&quot;</code>: GitHub</li><li><code>&quot;Gitlab&quot;</code>: Gitlab</li><li><code>&quot;Gmail&quot;</code>: 谷歌邮箱</li><li><code>&quot;Instagram&quot;</code>: Instagram</li><li><code>&quot;Lark&quot;</code>: 飞书</li><li><code>&quot;Line&quot;</code>: Line</li><li><code>&quot;Linkedin&quot;</code>: 领英</li><li><code>&quot;Pinterest&quot;</code>: 拼趣</li><li><code>&quot;Pocket&quot;</code>: Pocket</li><li><code>&quot;QQ&quot;</code>: QQ</li><li><code>&quot;Qzone&quot;</code>: QQ 空间</li><li><code>&quot;Reddit&quot;</code>: 红迪</li><li><code>&quot;Rss&quot;</code>: RSS 地址</li><li><code>&quot;Steam&quot;</code>: 蒸汽</li><li><code>&quot;Skype&quot;</code>: Skype</li><li><code>&quot;Telegram&quot;</code>: 电报</li><li><code>&quot;Twitter&quot;</code>: 推特</li><li><code>&quot;Wechat&quot;</code>: 微信</li><li><code>&quot;Weibo&quot;</code>: 微博</li><li><code>&quot;Whatsapp&quot;</code>:瓦次艾普</li><li><code>&quot;Youtube&quot;</code>: 油管</li><li><code>&quot;Zhihu&quot;</code>: 知乎</li></ul><p>(请不要好奇为什么这里一定要加上特别奇怪的中文翻译)</p></div>',11),q={class:"hint-container details"},h=n("summary",null,"例子",-1),y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" getDirname"),n("span",{class:"token punctuation"},","),s(" path "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/utils"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" __dirname "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getDirname"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    blog`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      medias`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// GitHub 已经内置了图标"),s(`
        GitHub`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://github.com/Mister-Hope"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 一个自定义媒体 MediaX (仅作示例)"),s(`
        MediaX`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// 链接"),s(`
          `),n("span",{class:"token string"},'"https://mediax.com/UserX/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// 图标 SVG 字符串"),s(`
          `),n("span",{class:"token string"},'"<svg ....</svg>"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 一个自定义媒体 MediaY (仅作示例)"),s(`
        MediaY`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// 链接"),s(`
          `),n("span",{class:"token string"},'"https://mediay.com/UserY/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// 图标地址"),s(`
          path`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"icons/mediay.svg"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" getDirname"),n("span",{class:"token punctuation"},","),s(" path "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@vuepress/utils"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" __dirname "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getDirname"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"blog"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"medias"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// GitHub 已经内置了图标"),s(`
        `),n("span",{class:"token literal-property property"},"GitHub"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://github.com/Mister-Hope"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 一个自定义媒体 MediaX (仅作示例)"),s(`
        `),n("span",{class:"token literal-property property"},"MediaX"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// 链接"),s(`
          `),n("span",{class:"token string"},'"https://mediax.com/UserX/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// 图标 SVG 字符串"),s(`
          `),n("span",{class:"token string"},'"<svg ....</svg>"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 一个自定义媒体 MediaY (仅作示例)"),s(`
        `),n("span",{class:"token literal-property property"},"MediaY"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token comment"},"// 链接"),s(`
          `),n("span",{class:"token string"},'"https://mediay.com/UserY/"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// 图标地址"),s(`
          path`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"icons/mediay.svg"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function f(w,G){const o=i("CodeTabs");return l(),p("div",null,[v,u(" more "),g,n("details",q,[h,r(o,{id:"228",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:a,isActive:t})=>[s("TS")]),title1:e(({value:a,isActive:t})=>[s("JS")]),tab0:e(({value:a,isActive:t})=>[y]),tab1:e(({value:a,isActive:t})=>[_]),_:1})])])}const x=c(b,[["render",f],["__file","blogger.html.vue"]]);export{x as default};
