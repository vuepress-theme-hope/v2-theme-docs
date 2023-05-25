import{_ as l,r as a,o as p,c as h,e,b as o,a as t,w as s,f,g as r}from"./app-a38c4918.js";const u={},_=e("code",null,"vuepress-plugin-pwa2",-1),g=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),m=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"相关信息"),e("p",null,[e("code",null,"vuepress-theme-hope"),o(" 将主题选项中的 "),e("code",null,"plugins.pwa"),o(" 作为插件选项提供给 "),e("code",null,"vuepress-plugin-pwa2"),o("。")]),e("p",null,[o("如果你正在使用此插件，我们推荐在你的 VuePress 配置文件中设置 "),e("code",null,"shouldPrefetch: false"),o("。")])],-1),b={id:"快速启用",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#快速启用","aria-hidden":"true"},"#",-1),W=r('<p>你可以在主题选项中设置 <code>plugins.pwa: true</code> 来让主题自动生成必要配置并快速启用插件。但我们推荐你按照下方说明对部分选项进行手动配置。</p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Service Worker <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> (简称 SW) 主要用于获取并托管网站内容。</p><p>此插件会自动通过 <code>workbox-build</code> 注册 Service Worker。为了更好地控制 Service Worker 可以预缓存的内容，插件提供了下列设置。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你是一个高级用户，你可以直接在主题选项中设置 <code>plugins.pwa.generateSwConfig</code> 来将选项传递给 <code>workbox-build</code>。</p></div><h2 id="缓存控制" tabindex="-1"><a class="header-anchor" href="#缓存控制" aria-hidden="true">#</a> 缓存控制</h2><p>基于可安装性<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup>的要求，插件提供了缓存控制的相关选项。</p><h3 id="默认缓存" tabindex="-1"><a class="header-anchor" href="#默认缓存" aria-hidden="true">#</a> 默认缓存</h3><p>默认情况下插件会预缓存所有的 JS、CSS 和 SVG 文件，但仅缓存主页和 404 页面的 HTML。</p><p>同时插件还会缓存字体文件: <code>**/*.{woff,woff2,eot,ttf,otf}</code>。</p><h3 id="图片缓存" tabindex="-1"><a class="header-anchor" href="#图片缓存" aria-hidden="true">#</a> 图片缓存</h3><p>你可以在主题选项中设置 <code>plugins.pwa.cachePic: true</code> 来缓存站点图片。</p><p>如果你的站点体积不大，且配图大多为关键性说明，希望可以在离线模式下显示，建议将此项设置为 <code>true</code>。</p><div class="hint-container info"><p class="hint-container-title">图片识别</p><p>我们通过文件后缀名识别图片，任何以 <code>.png</code>, <code>.jpg</code>, <code>.jpeg</code>, <code>.gif</code>, <code>.bmp</code>, <code>.webp</code> 结尾的文件都会视为图片。</p></div><h3 id="html-缓存" tabindex="-1"><a class="header-anchor" href="#html-缓存" aria-hidden="true">#</a> HTML 缓存</h3><p>当你网站体积不大，并且希望文档完全离线可用时，你可以在主题选项中设置 <code>plugins.pwa.cacheHTML: true</code> 来缓存所有 HTML 页面。</p><div class="hint-container tip"><p class="hint-container-title">为什么默认不缓存非主页和 404 页面</p><p>虽然说 VuePress 为所有的页面通过 SSG<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup> 生成了 HTML 文件，但是这些文件主要用于 SEO<sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup>，并能够让你在后端不做 SPA<sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup> 配置的情况下能够直接访问任何链接。</p><p>VuePress 本质上是一个 SPA。这意味着你只需要缓存主页并从主页进入即可正常访问所有页面。所以默认不缓存其他 HTML 能够有效减小缓存大小 (可以缩减大约 40% 的体积)，加快 SW 更新速度。</p><p>但是这样做也有缺点，如果用户直接从非主页进入网站，首个页面的 HTML 文件仍需要从互联网加载。同时离线环境下，用户只能通过主页进入再自行导航到对应页面，直接访问某个链接会出现无法访问的提示。</p></div><h3 id="大小控制" tabindex="-1"><a class="header-anchor" href="#大小控制" aria-hidden="true">#</a> 大小控制</h3><p>为了防止在预缓存列表中包含大文件，任何大于 2 MB 的文件或大于 1 MB 的图片都将被删除。</p><p>你可以在主题选项中通过 <code>plugins.pwa.maxSize</code> 选项自定义缓存的最大文件大小 (单位 KB)，或通过 <code>plugins.pwa.maxPicSize</code> 来更改图片的大小限制 (单位: KB)。</p><h2 id="更新控制" tabindex="-1"><a class="header-anchor" href="#更新控制" aria-hidden="true">#</a> 更新控制</h2><p>我们在主题选项中提供 <code>plugins.pwa.update</code> 选项控制用户如何接收更新。</p><p><code>update</code> 选项的默认值是 <code>&quot;available&quot;</code>，这意味着当网站内容更新后，新的 SW 会在后台静默安装，并在安装结束后弹窗提示用户新内容就绪。用户可以自主选择是否立即刷新查看新内容。</p><p>由于默认行为下，用户访问途中在 SW 就绪前都会阅读旧版本文档并且得不到相关提示。如果你的文档仍在建设期，希望尽早提示用户他可能在阅读已过时的内容，你可以将其设置为 <code>&quot;hint&quot;</code>。这样用户在进入文档后数秒内就可以收到新内容已发布的提示。但这样做的负面效果是如果用户在新 SW 就绪前选择更新，那么他将在新 SW 安装并接管页面前，需要从互联网获取页面的全部资源。</p><p>如果你的文档很稳定，或者你在托管博客，不太关心用户立即接收到最新版本，你可以将其设置为 <code>&quot;disabled&quot;</code>，这意味着新的 SW 将在后台完全静默安装并在安装后等待，当旧版本 SW 控制的页面全部关闭后，用户下一次访问时，新 SW 将开始接管并提供用户新内容。此设置可以避免用户在访问途中被右下角的弹窗所打扰。</p><p>如果你希望通过 SW 来加速用户在弱网或无网条件下的访问，但同时希望用户时刻访问新内容，你可以将此选项设置为 <code>&quot;force&quot;</code>。此选项的行为是在检测到新 SW 后立即注销旧 SW 并刷新页面以确保用户浏览最新内容。但我们强烈推荐除非必要不适用此选项，因为这会导致新 SW 发布后，用户在进入网站后的几秒内会遇到预期之外的突然刷新，并且他们将必须通过互联网访问文档并完全重新安装最新的 SW。</p><h3 id="更新提示弹窗" tabindex="-1"><a class="header-anchor" href="#更新提示弹窗" aria-hidden="true">#</a> 更新提示弹窗</h3><p>当检测到新内容 (检测到新的 SW) 时， 更新提示弹窗将会在右下角显示，并允许用户刷新并应用。</p><div class="hint-container tip"><p class="hint-container-title">自定义弹窗</p><p>如果你对默认的弹窗不满意，你可以自行编写组件更换。你需要全局注册自己的弹窗组件，并将组件的名称传递给主题选项中的 <code>plugins.pwa.hintComponent</code> 选项。</p></div><h3 id="更新就绪弹窗" tabindex="-1"><a class="header-anchor" href="#更新就绪弹窗" aria-hidden="true">#</a> 更新就绪弹窗</h3><p>当新内容就绪 (新的 SW 安装成功并开始等待) 后，更新就绪弹窗将会在右下角显示，并允许用户刷新并应用。</p><div class="hint-container tip"><p class="hint-container-title">自定义弹窗</p><p>如果你对默认的弹窗不满意，你可以自行编写组件更换。你需要全局注册自己的弹窗组件，并将组件的名称传递给主题选项中的 <code>plugins.pwa.updateComponent</code> 选项。</p></div><h2 id="清单文件生成" tabindex="-1"><a class="header-anchor" href="#清单文件生成" aria-hidden="true">#</a> 清单文件生成</h2><p>为了保证 PWA 的可安装性，网站需要生成清单文件，并通过 <code>&lt;link&gt;</code> 声明有效的 manifest 清单文件地址<sup class="footnote-ref"><a href="#footnote7">[7]</a><a class="footnote-anchor" id="footnote-ref7"></a></sup>。</p><p>插件会在输出目录自动为你生成 Manifest 文件 <code>manifest.webmanifest</code>，同时还会添加清单地址声明到每一个 HTML 的 <code>&lt;head&gt;</code> 中。</p><p>如果你在 <code>.vuepress/public</code> 中已有一个 <code>manifest.webmanifest</code> 或 <code>manifest.json</code>，该插件将读取它并合并到最终 manifest 中。</p><h3 id="自动生成" tabindex="-1"><a class="header-anchor" href="#自动生成" aria-hidden="true">#</a> 自动生成</h3><p>插件会尽可能的通过 VuePress 插件接口的信息，为 manifest 的大部分设置项设置 fallback，这意味着即使你无需设置 manifest 的大多数内容。</p><p>如果未设置下列选项，它们会按照顺序依次尝试回退到以下预设值。</p><table><thead><tr><th>选项</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td><code>siteConfig.title</code> || <code>siteConfig.locales[&#39;/&#39;].title</code> || <code>&quot;Site&quot;</code></td></tr><tr><td>short_name</td><td><code>siteConfig.title</code> || <code>siteConfig.locales[&#39;/&#39;].title</code> || <code>&quot;Site&quot;</code></td></tr><tr><td>description</td><td><code>siteConfig.description</code> || <code>siteConfig.locales[&#39;/&#39;].description</code> || <code>&quot;A site built with vuepress&quot;</code></td></tr><tr><td>lang</td><td><code>siteConfig.locales[&#39;/&#39;].lang</code> || <code>&quot;en-US&quot;</code></td></tr><tr><td>start_url</td><td><code>siteConfig.base</code></td></tr><tr><td>scope</td><td><code>siteConfig.base</code></td></tr><tr><td>display</td><td><code>&quot;standalone&quot;</code></td></tr><tr><td>theme_color</td><td><code>&quot;#46bd87&quot;</code></td></tr><tr><td>background_color</td><td><code>&quot;#ffffff&quot;</code></td></tr><tr><td>orientation</td><td><code>&quot;portrait-primary&quot;</code></td></tr><tr><td>prefer_related_applications</td><td><code>false</code></td></tr></tbody></table>',40),v={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/pwa2/src/shared/manifest.ts",target:"_blank",rel:"noopener noreferrer"},k=r('<h3 id="手动配置" tabindex="-1"><a class="header-anchor" href="#手动配置" aria-hidden="true">#</a> 手动配置</h3><p>你可以在主题选项中通过 <code>plugins.pwa.manifest</code> 手动指定 manifest 的各项内容。</p><div class="hint-container tip"><p class="hint-container-title">优先级</p><p><code>manifest</code> 选项的设置具有最高的优先级，之后是 <code>public</code> 文件夹下可能存在的 manifest 文件。</p></div><p><strong>你至少应该通过 <code>manifest.icons</code> 或 PWA 插件中的其他选项设置一个有效的图标。</strong> 因为这是我们没法默认生成的。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>可安装性<sup class="footnote-ref"><a href="#footnote3">[3:1]</a><a class="footnote-anchor" id="footnote-ref3:1"></a></sup>规范要求 manifest 中至少声明一个有效的图标。</p><p>所以如果你不在 <code>plugins.pwa</code> 中配置 <code>manifest.icons</code>，访问者只能享受到 Service Worker 缓存带来的离线可访问性，而并不能作为 PWA 进行安装。</p><p>此外，该插件默认不处理清单中的任何内容，而是按原样输出。 这意味着，如果你计划部署到子目录，则应自行将 URL 前缀附加到自己的清单 Urls 中。</p><p>但是，如果你需要的所有东西都在 base 文件夹下，你可以在 <code>plugins.pwa</code> 中设置 <code>appendBase: true</code> 让插件将 <code>base</code> 自动附加到任何地址。</p></div><h2 id="其他选项" tabindex="-1"><a class="header-anchor" href="#其他选项" aria-hidden="true">#</a> 其他选项</h2><p>插件还提供了其他 PWA 相关选项，比如微软磁贴图标与颜色设置，苹果图标等。</p>',7),w=e("h2",{id:"相关阅读",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相关阅读","aria-hidden":"true"},"#"),o(" 相关阅读")],-1),P=e("p",null,"更多内容，请详见:",-1),x={href:"https://web.dev/progressive-web-apps/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps",target:"_blank",rel:"noopener noreferrer"},C={href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"},M=e("hr",{class:"footnotes-sep"},null,-1),A={class:"footnotes"},B={class:"footnotes-list"},L=r('<li id="footnote1" class="footnote-item"><p><strong>PWA 介绍</strong></p><p>PWA 全称 Progressive Web app，即渐进式网络应用程序，标准由 W3C 规定。</p><p>它允许网站通过支持该特性的浏览器将网站作为 App 安装在对应平台上。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p><strong>Service Worker 简要介绍</strong></p><ol><li><p>Service Worker 会在注册过程中获取注册在其中的所有文件并缓存它们。</p></li><li><p>注册成功后，Service Worker 激活，并开始代理并控制你的全部请求。</p></li><li><p>每当你想要通过浏览器发起访问请求后，Service Worker 将会查看其是否存在与自身缓存列表中，若存在则直接返回缓存好的结果，否则调用自身的 fetch 方法进行获取。你可以通过自定义 fetch 方法，来完全控制网页内资源获取请求的结果，比如在离线时提供一个 fallback 的网页。</p></li><li><p>每次用户重新打开网站时，Service Worker 会向自身注册时的地址发出校验命令，如果检测到新版本的 Service Worker，则会更新自身，并开始缓存注册在新 Service Worker 中的资源列表。成功获取内容更新后，Service Worker 将会触发 <code>update</code> 事件。可以通过此事件提示用户，比如将在右下角显示一个弹出窗口，提示用户新内容可用并允许用户触发更新。</p></li></ol><a href="#footnote-ref2" class="footnote-backref">↩︎</a></li><li id="footnote3" class="footnote-item"><p><strong>可安装性</strong></p><p>想要让网站可以注册为 PWA，网站需要自行成功注册有效的 Service Worker，同时添加合法的 manifest 清单文件并在网站中声明它。</p><p>各平台或浏览器对 Service Worker 缓存的大小有要求，当 Service Worker 缓存的文件体积过大后，该网站将会被标记为不可安装。对于 Safari 这个阈值是 50 MB，少数浏览器会设置更少或更多的值 (30MB, 70MB, 80MB)，最大的 Chrome 也将阈值标识在 100 MB。</p><p>另外，清单文件应至少包含 <code>name</code>(或 <code>short_name</code>) <code>icons</code> <code>start_url</code>。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>从 Chrome 93 起 Service Worker 必须含有有效的控制离线请求的 fetch 事件，才符合可安装性标准。</p><p>但是插件目前并没有默认包含相关处理逻辑，所以在 Chrome 93 或更高版本的安卓设备上，网站不会弹出安装提示。</p></div><a href="#footnote-ref3" class="footnote-backref">↩︎</a> <a href="#footnote-ref3:1" class="footnote-backref">↩︎</a></li><li id="footnote4" class="footnote-item"><p><strong>SSG</strong>: <strong>S</strong>tatic <strong>S</strong>ite <strong>G</strong>enerating，静态站点生成。 <a href="#footnote-ref4" class="footnote-backref">↩︎</a></p></li>',4),V={id:"footnote5",class:"footnote-item"},T=e("p",null,[e("strong",null,"SEO"),o(": "),e("strong",null,"S"),o("earch "),e("strong",null,"E"),o("ngine "),e("strong",null,"O"),o("ptimization，搜索引擎增强，")],-1),z={href:"https://mrhope.site/code/website/html/definition/seo.html",target:"_blank",rel:"noopener noreferrer"},H=e("a",{href:"#footnote-ref5",class:"footnote-backref"},"↩︎",-1),N=e("li",{id:"footnote6",class:"footnote-item"},[e("p",null,[e("strong",null,"SPA"),o(": "),e("strong",null,"S"),o("ingle "),e("strong",null,"P"),o("age "),e("strong",null,"A"),o("pplication, 单页应用")]),e("p",null,[o("大多只有主页，并使用 history mode 处理路由，而不是真的在页面之间导航。 "),e("a",{href:"#footnote-ref6",class:"footnote-backref"},"↩︎")])],-1),E={id:"footnote7",class:"footnote-item"},y=e("p",null,[e("strong",null,"清单文件")],-1),j=e("p",null,"清单文件使用 JSON 格式，负责声明 PWA 各项信息，如名称、描述、图标、快捷动作等。",-1),G=e("p",null,"为了使你的站点能够被注册为 PWA，你需要满足 manifest 基本的规范，才能使浏览器认为该网站为一个可安装的 PWA 并允许用户安装它。",-1),O={class:"hint-container info"},R=e("p",{class:"hint-container-title"},"相关信息",-1),U={href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"},I=e("a",{href:"#footnote-ref7",class:"footnote-backref"},"↩︎",-1);function J(K,D){const i=a("ProjectLink"),c=a("Badge"),n=a("ExternalLinkIcon"),d=a("RouterLink");return p(),h("div",null,[e("p",null,[o("该主题将通过内置 "),t(i,{name:"pwa2",path:"/zh/"},{default:s(()=>[_]),_:1}),o(" 提供渐进式 Web 应用程序支持"),g,o("，该功能默认禁用。")]),m,f(" more "),e("h2",b,[S,o(" 快速启用 "),t(c,{text:"不推荐",type:"warning"})]),W,e("p",null,[o("完整的配置项详见 "),e("a",v,[o("Manifest 类型定义文件"),t(n)]),o("。")]),k,e("p",null,[o("你可以酌情根据需要设置它们。详细的选项请见 "),t(d,{to:"/zh/config/plugins/pwa.html"},{default:s(()=>[o("PWA 插件配置")]),_:1}),o("。")]),w,P,e("ul",null,[e("li",null,[t(i,{name:"pwa2",path:"/zh/"},{default:s(()=>[o("PWA 插件文档")]),_:1})]),e("li",null,[e("a",x,[o("Google PWA"),t(n)])]),e("li",null,[e("a",q,[o("MDN PWA"),t(n)])]),e("li",null,[e("a",C,[o("W3C Manifest 规范"),t(n)])])]),M,e("section",A,[e("ol",B,[L,e("li",V,[T,e("p",null,[o("详见 "),e("a",z,[o("SEO 介绍"),t(n)]),o(),H])]),N,e("li",E,[y,j,G,e("div",O,[R,e("p",null,[o("Manifest 的标准与规范，请详见 "),e("a",U,[o("W3C Manifest"),t(n)])])]),I])])])])}const Q=l(u,[["render",J],["__file","pwa.html.vue"]]);export{Q as default};
