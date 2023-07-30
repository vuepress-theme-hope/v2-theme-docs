import{_ as c,r as i,o as d,c as p,b as e,d as n,e as a,w as r,f as s}from"./app-c5a3c96d.js";const u={},h=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),m=e("p",null,[e("code",null,"vuepress-plugin-pwa2"),n(" 插件默认禁用，提供渐进式网络应用程序支持。")],-1),v=e("p",null,[e("code",null,"vuepress-theme-hope"),n(" 将主题选项中的 "),e("code",null,"plugins.pwa"),n(" 作为插件选项传递给 "),e("code",null,"vuepress-plugin-pwa2"),n(" 插件。")],-1),b={class:"hint-container tip"},k=e("p",{class:"hint-container-title"},"快速启用",-1),f=e("code",null,"pwa: true",-1),g={class:"hint-container info"},_=e("p",{class:"hint-container-title"},"相关信息",-1),q=s('<h2 id="插件选项" tabindex="-1"><a class="header-anchor" href="#插件选项" aria-hidden="true">#</a> 插件选项</h2><h3 id="showinstall" tabindex="-1"><a class="header-anchor" href="#showinstall" aria-hidden="true">#</a> showInstall</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在 Service Worker 首次成功注册时显示 PWA 安装按钮</p><h3 id="manifest" tabindex="-1"><a class="header-anchor" href="#manifest" aria-hidden="true">#</a> manifest</h3><ul><li>类型: <code>ManifestOption</code></li><li>必填: 否</li></ul><p>填充一个将被解析为 manifest.webmanifest 的对象。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果未设置某些选项，它们会回退到插件预设值。</p><ul><li><p>name: <code>siteConfig.title</code> || <code>siteConfig.locales[&#39;/&#39;].title</code> || <code>&quot;Site&quot;</code></p></li><li><p>short_name: <code>siteConfig.title</code> || <code>siteConfig.locales[&#39;/&#39;].title</code> || <code>&quot;Site&quot;</code></p></li><li><p>description: <code>siteConfig.description</code> || <code>siteConfig.locales[&#39;/&#39;].description</code> || <code>&quot;A site built with vuepress&quot;</code></p></li><li><p>lang: <code>siteConfig.locales[&#39;/&#39;].lang</code> || <code>&quot;en-US&quot;</code></p></li><li><p>start_url: <code>context.base</code></p></li><li><p>scope: <code>context.base</code></p></li><li><p>display: <code>&quot;standalone&quot;</code></p></li><li><p>theme_color: <code>&quot;#46bd87&quot;</code></p></li><li><p>background_color: <code>&quot;#ffffff&quot;</code></p></li><li><p>orientation: <code>&quot;portrait-primary&quot;</code></p></li><li><p>prefer_related_applications: <code>false</code></p></li></ul></div>',8),x={class:"hint-container info"},w=e("p",{class:"hint-container-title"},"更多",-1),S={href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"},C=s('<h3 id="favicon" tabindex="-1"><a class="header-anchor" href="#favicon" aria-hidden="true">#</a> favicon</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p><code>favicon.ico</code> 地址，填入绝对路径。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>我们建议你为你的站点生成 favicon</p></div><h3 id="themecolor" tabindex="-1"><a class="header-anchor" href="#themecolor" aria-hidden="true">#</a> themeColor</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;#46bd87&quot;</code></li></ul><p>主题色，默认为主题绿</p><h3 id="maxsize" tabindex="-1"><a class="header-anchor" href="#maxsize" aria-hidden="true">#</a> maxSize</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>2048</code></li></ul><p>允许缓存的最大大小 (以 KB 为单位)</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>此选项具有最高优先级，任何超过此值的文件都会被排除。</p><p>所以你如果生成了很大的 HTML 或 JS 文件，请考虑调高此值，否则你的 PWA 可能无法在离线模式下正常运行。</p></div><h3 id="cachehtml" tabindex="-1"><a class="header-anchor" href="#cachehtml" aria-hidden="true">#</a> cacheHTML</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否缓存主页和 404 错误页之外的 HTML 文件</p><h3 id="cachepic" tabindex="-1"><a class="header-anchor" href="#cachepic" aria-hidden="true">#</a> cachePic</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否缓存图片。</p><h3 id="maxpicsize" tabindex="-1"><a class="header-anchor" href="#maxpicsize" aria-hidden="true">#</a> maxPicSize</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>1024</code></li></ul><p>图片允许缓存的最大大小 (以 KB 为单位)</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该选项不能大于 <code>maxSize</code>。</p></div><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h3><ul><li>类型: <code>&quot;disabled&quot; | &quot;available&quot; | &quot;hint&quot; | &quot;force&quot;</code></li><li>默认值: <code>&quot;available&quot;</code></li></ul><p>发现新内容时的控制逻辑。</p><ul><li><p><code>&quot;disabled&quot;</code>: 即使有新的 service worker 也不做任何事情，新的 service work 开始等待后，会在用户下次访问时接管页面，让用户获得新内容。</p></li><li><p><code>&quot;available&quot;</code>: 仅当新的 service worker 可用时才显示更新弹出窗口</p></li><li><p><code>&quot;hint&quot;</code>: 显示更新内容可用提示，并允许用户立即刷新。当新的 SW 成功注册后，将转为更新内容就绪弹窗。</p><p>当你希望用户立即查看新文档时，这很有帮助。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果用户在新 SW 就绪前选择刷新，当前的 Service Worker 将被注销，并且请求将开始向 Web 发出。新的 service worker 将开始安装并在安装后接管页面。</p></div></li><li><p><code>&quot;force&quot;</code>: 立即注销当前 Service Worker 然后刷新以获取新内容</p><div class="hint-container danger"><p class="hint-container-title">警告</p><p>虽然这可以确保用户访问的是最新内容，但这可能会影响访问体验。</p></div></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>文档的更新方式由以前的版本控制，因此当前选项仅影响此版本的下一次更新。</p></div><h3 id="apple" tabindex="-1"><a class="header-anchor" href="#apple" aria-hidden="true">#</a> apple</h3><p>针对苹果的特殊设置</p><blockquote><p>如果你不想进行精细的设置，可以忽略它；如果你不想兼容 Apple 上的 Safari，请设置为 <code>false</code>。</p></blockquote><h4 id="apple-icon" tabindex="-1"><a class="header-anchor" href="#apple-icon" aria-hidden="true">#</a> apple.icon</h4><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>填入苹果使用的图标地址，推荐 152×152 大小</p><h4 id="apple-statusbarcolor" tabindex="-1"><a class="header-anchor" href="#apple-statusbarcolor" aria-hidden="true">#</a> apple.statusBarColor</h4><ul><li>类型: <code>&quot;black&quot; | &quot;white&quot;</code></li><li>默认值: <code>&quot;black&quot;</code></li></ul><p>苹果的状态栏颜色</p><h4 id="apple-maskicon" tabindex="-1"><a class="header-anchor" href="#apple-maskicon" aria-hidden="true">#</a> apple.maskIcon</h4><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>Safari 图标</p><h3 id="mstile" tabindex="-1"><a class="header-anchor" href="#mstile" aria-hidden="true">#</a> msTile</h3><p>针对微软磁贴的特殊设置</p><blockquote><p>如果你不想进行精细的设置，可以忽略它；如果你不想兼容 windows，请设置为 <code>false</code>。</p></blockquote><h4 id="mstile-image" tabindex="-1"><a class="header-anchor" href="#mstile-image" aria-hidden="true">#</a> msTile.image</h4><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>磁贴图标</p><h4 id="mstile-color" tabindex="-1"><a class="header-anchor" href="#mstile-color" aria-hidden="true">#</a> msTile.color</h4><ul><li>类型: <code>string</code></li><li>默认值: <code>themeColor</code></li></ul><p>磁贴颜色，缺省会自动回退到主题色。</p><h3 id="hintcomponent" tabindex="-1"><a class="header-anchor" href="#hintcomponent" aria-hidden="true">#</a> hintComponent</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;SWHintPopup&quot;</code></li></ul><p>可填入自定义的提示弹窗组件路径。</p><h3 id="updatecomponent" tabindex="-1"><a class="header-anchor" href="#updatecomponent" aria-hidden="true">#</a> updateComponent</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;SWUpdatePopup&quot;</code></li></ul><p>可填入自定义的更新弹窗组件路径。</p><h3 id="appendbase" tabindex="-1"><a class="header-anchor" href="#appendbase" aria-hidden="true">#</a> appendBase</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否为所有绝对链接添加 base。</p><h3 id="generateswconfig" tabindex="-1"><a class="header-anchor" href="#generateswconfig" aria-hidden="true">#</a> generateSwConfig</h3>',57),W=e("code",null,"workbox-build",-1),P={href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW",target:"_blank",rel:"noopener noreferrer"},L=s(`<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>类型: <code>PWALocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PWALocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 安装按钮文字
   */</span>
  install<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * iOS 安装文字
   */</span>
  iOSInstall<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 取消按钮文字
   */</span>
  cancel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 关闭按钮文字
   */</span>
  close<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 上一张图片文字
   */</span>
  prevImage<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 下一张图片文字
   */</span>
  nextImage<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 安装解释
   */</span>
  explain<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 描述标签文字
   */</span>
  desc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 特性标签文字
   */</span>
  feature<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 更新内容提示文字
   */</span>
  hint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 更新内容可用文字
   */</span>
  update<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PWALocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> PWALocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>PWA 插件的国际化配置。</p>`,3);function A(B,z){const l=i("Badge"),t=i("ProjectLink"),o=i("ExternalLinkIcon");return d(),p("div",null,[h,m,v,e("div",b,[k,e("p",null,[n("你可以设置 "),f,n(" 来以默认设置启用插件。"),a(l,{text:"不推荐使用默认设置",type:"warning"})])]),e("div",g,[_,e("p",null,[n("有关更多详细信息，请参见 "),a(t,{name:"pwa2",path:"/zh/config.html"},{default:r(()=>[n("pwa2 插件文档")]),_:1}),n("。")])]),q,e("div",x,[w,e("p",null,[n("更多内容，请详见 "),e("a",S,[n("W3C Manifest"),a(o)])])]),C,e("p",null,[n("传递给 "),W,n(" 的选项，具体详情，请见 "),e("a",P,[n("Workbox 文档"),a(o)])]),L])}const I=c(u,[["render",A],["__file","pwa.html.vue"]]);export{I as default};
