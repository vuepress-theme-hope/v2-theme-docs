import{_ as c,r as a,o as d,c as r,e,b as n,a as i,w as p,g as s}from"./app-a38c4918.js";const u={},h=e("h2",{id:"intro",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#intro","aria-hidden":"true"},"#"),n(" Intro")],-1),m=e("p",null,[n("The "),e("code",null,"vuepress-plugin-pwa2"),n(" plugin provides progressive web app support.")],-1),v=e("p",null,[e("code",null,"vuepress-theme-hope"),n(" passes "),e("code",null,"plugins.pwa"),n(" in theme options as plugin options to "),e("code",null,"vuepress-plugin-pwa2"),n(" plugin.")],-1),b={class:"hint-container tip"},f=e("p",{class:"hint-container-title"},"Quick Enable",-1),g=e("code",null,"pwa: true",-1),k={class:"hint-container info"},w=e("p",{class:"hint-container-title"},"Info",-1),x=s('<h2 id="plugin-options" tabindex="-1"><a class="header-anchor" href="#plugin-options" aria-hidden="true">#</a> Plugin Options</h2><h3 id="showinstall" tabindex="-1"><a class="header-anchor" href="#showinstall" aria-hidden="true">#</a> showInstall</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether display install button when Service Worker is first registered successfully.</p><h3 id="manifest" tabindex="-1"><a class="header-anchor" href="#manifest" aria-hidden="true">#</a> manifest</h3><ul><li>Type: <code>ManifestOption</code></li><li>Required: No</li></ul><p>You can fill with an object which will be parsed to manifest.webmanifest.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Some options have their fallback if you do not set them.</p><ul><li><p>name: <code>siteConfig.title</code> || <code>siteConfig.locales[&#39;/&#39;].title</code> || <code>&quot;Site&quot;</code></p></li><li><p>short_name: <code>siteConfig.title</code> || <code>siteConfig.locales[&#39;/&#39;].title</code> || <code>&quot;Site&quot;</code></p></li><li><p>description: <code>siteConfig.description</code> || <code>siteConfig.locales[&#39;/&#39;].description</code> || <code>&quot;A site built with vuepress&quot;</code></p></li><li><p>lang: <code>siteConfig.locales[&#39;/&#39;].lang</code> || <code>&quot;en-US&quot;</code></p></li><li><p>start_url: <code>context.base</code></p></li><li><p>scope: <code>context.base</code></p></li><li><p>display: <code>&quot;standalone&quot;</code></p></li><li><p>theme_color: <code>&quot;#46bd87&quot;</code></p></li><li><p>background_color: <code>&quot;#ffffff&quot;</code></p></li><li><p>orientation: <code>&quot;portrait-primary&quot;</code></p></li><li><p>prefer_related_applications: <code>false</code></p></li></ul></div>',8),y={class:"hint-container info"},_=e("p",{class:"hint-container-title"},"More",-1),q={href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"},T=s('<h3 id="favicon" tabindex="-1"><a class="header-anchor" href="#favicon" aria-hidden="true">#</a> favicon</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Path of favicon.ico with absolute path.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>We recommend you to set favicon for your site</p></div><h3 id="themecolor" tabindex="-1"><a class="header-anchor" href="#themecolor" aria-hidden="true">#</a> themeColor</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;#46bd87&quot;</code></li></ul><p>Theme Color, default is theme green</p><h3 id="maxsize" tabindex="-1"><a class="header-anchor" href="#maxsize" aria-hidden="true">#</a> maxSize</h3><ul><li>Type: <code>number</code></li><li>Default: <code>2048</code></li></ul><p>Max size allowed to be cached, with KB unit</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>This option has the highest priority, and any files exceeding this value will be excluded.</p><p>So if you generate very large HTML or JS files, please consider increasing this value, otherwise your PWA may not work normally in offline mode.</p></div><h3 id="cachehtml" tabindex="-1"><a class="header-anchor" href="#cachehtml" aria-hidden="true">#</a> cacheHTML</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether cache HTML files besides home page and 404 page.</p><h3 id="cachepic" tabindex="-1"><a class="header-anchor" href="#cachepic" aria-hidden="true">#</a> cachePic</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether cache pictures</p><h3 id="maxpicsize" tabindex="-1"><a class="header-anchor" href="#maxpicsize" aria-hidden="true">#</a> maxPicSize</h3><ul><li>Type: <code>number</code></li><li>Default: <code>1024</code></li></ul><p>Max picture size allowed to be cached, with KB unit</p><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h3><ul><li>Type: <code>&quot;disabled&quot; | &quot;available&quot; | &quot;hint&quot; | &quot;force&quot;</code></li><li>Default: <code>&quot;available&quot;</code></li></ul><p>Control logic when new content is found.</p><ul><li><p><code>&quot;disabled&quot;</code>: Do nothing even when new service worker is available. After new service work succeeds installing and starts waiting, it will control page and provide new content in next visit.</p></li><li><p><code>&quot;available&quot;</code>: Only display update popup when the new service worker is available</p></li><li><p><code>&quot;hint&quot;</code>: Display a hint to let user choose to refresh immediately</p><p>This is helpful when you want users to see new docs immediately.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>If users choose to refresh, the current service worker will be unregistered, and request will start coming to web. Later the new service worker will start installing and control current page after installed.</p></div></li><li><p><code>&quot;force&quot;</code>: unregister current service worker immediately then refresh to get new content</p><div class="hint-container danger"><p class="hint-container-title">Warning</p><p>Though this ensures users are visiting the newest content, but this may affect visiting experiences.</p></div></li></ul><div class="hint-container warning"><p class="hint-container-title">Note</p><p>How docs are updated is controlled by a previous version, so the current option only effect next update from this version.</p></div><h3 id="apple" tabindex="-1"><a class="header-anchor" href="#apple" aria-hidden="true">#</a> apple</h3><p>Special settings for Apple</p><blockquote><p>If you don&#39;t want to make detailed settings, you can safely ignore it; if you don&#39;t want your site compatible with safari on apple, please set it to <code>false</code>.</p></blockquote><h4 id="apple-icon" tabindex="-1"><a class="header-anchor" href="#apple-icon" aria-hidden="true">#</a> apple.icon</h4><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Fill in the icon address used by Apple, the recommended size is 152×152</p><h4 id="apple-statusbarcolor" tabindex="-1"><a class="header-anchor" href="#apple-statusbarcolor" aria-hidden="true">#</a> apple.statusBarColor</h4><ul><li>Type: <code>&quot;black&quot; | &quot;white&quot;</code></li><li>Default: <code>&quot;black&quot;</code></li></ul><p>Apple&#39;s status bar color</p><h4 id="apple-maskicon" tabindex="-1"><a class="header-anchor" href="#apple-maskicon" aria-hidden="true">#</a> apple.maskIcon</h4><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Safari mask icon</p><h3 id="mstile" tabindex="-1"><a class="header-anchor" href="#mstile" aria-hidden="true">#</a> msTile</h3><p>Special settings for Microsoft tiles</p><blockquote><p>If you don&#39;t want to make detailed settings, you can safely ignore it; if you don&#39;t want your site compatible with windows, please set it to <code>false</code>.</p></blockquote><h4 id="mstile-image" tabindex="-1"><a class="header-anchor" href="#mstile-image" aria-hidden="true">#</a> msTile.image</h4><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Tile icon</p><h4 id="mstile-color" tabindex="-1"><a class="header-anchor" href="#mstile-color" aria-hidden="true">#</a> msTile.color</h4><ul><li>Type: <code>string</code></li><li>Default value: <code>themeColor</code></li></ul><p>The tile color will automatically fall back to themeColor if you don&#39;t set it.</p><h3 id="hintcomponent" tabindex="-1"><a class="header-anchor" href="#hintcomponent" aria-hidden="true">#</a> hintComponent</h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;SWHintPopup&quot;</code></li></ul><p>You can fill in the custom hint popup component path.</p><h3 id="updatecomponent" tabindex="-1"><a class="header-anchor" href="#updatecomponent" aria-hidden="true">#</a> updateComponent</h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;SWUpdatePopup&quot;</code></li></ul><p>You can fill in the custom update popup component path.</p><h3 id="appendbase" tabindex="-1"><a class="header-anchor" href="#appendbase" aria-hidden="true">#</a> appendBase</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether append base to all absolute links.</p><h3 id="generateswconfig" tabindex="-1"><a class="header-anchor" href="#generateswconfig" aria-hidden="true">#</a> generateSwConfig</h3>',56),C=e("code",null,"workbox-build",-1),S={href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW",target:"_blank",rel:"noopener noreferrer"},W=s(`<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>PWALocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PWALocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Install button text
   */</span>
  install<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * iOS install hint text
   */</span>
  iOSInstall<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Cancel button text
   */</span>
  cancel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Close button text
   */</span>
  close<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Previous image text
   */</span>
  prevImage<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Next image text
   */</span>
  nextImage<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Install explain text
   */</span>
  explain<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Description label text
   */</span>
  desc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Feature label text
   */</span>
  feature<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Update hint text
   */</span>
  hint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Update available text
   */</span>
  update<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PWALocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> PWALocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Locales config for pwa plugin.</p>`,3);function D(N,P){const o=a("Badge"),l=a("ProjectLink"),t=a("ExternalLinkIcon");return d(),r("div",null,[h,m,v,e("div",b,[f,e("p",null,[n("To simply enable this feature, you can set "),g,n(". "),i(o,{text:"Quick Enable Not recommended",type:"warning"})])]),e("div",k,[w,e("p",null,[n("See the "),i(l,{name:"pwa2",path:"/config.html"},{default:p(()=>[n("pwa2 plugin documentation")]),_:1}),n(" for more details.")])]),x,e("div",y,[_,e("p",null,[n("For docs of Manifest, please see "),e("a",q,[n("W3C Manifest"),i(t)])])]),T,e("p",null,[n("Options passed to "),C,n(", for details, see "),e("a",S,[n("Workbox documentation"),i(t)])]),W])}const L=c(u,[["render",D],["__file","pwa.html.vue"]]);export{L as default};