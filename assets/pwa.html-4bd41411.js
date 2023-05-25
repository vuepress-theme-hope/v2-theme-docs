import{_ as d,r as a,o as h,c as p,e,b as t,a as o,w as i,f as u,g as s}from"./app-a38c4918.js";const f={},g=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),m=e("code",null,"vuepress-plugin-pwa2",-1),w=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"Info"),e("p",null,[e("code",null,"vuepress-theme-hope"),t(" passes "),e("code",null,"plugins.pwa"),t(" in theme options as plugin options to "),e("code",null,"vuepress-plugin-pwa2"),t(".")]),e("p",null,[t("If you are using this plugin, we recommend you to set "),e("code",null,"shouldPrefetch: false"),t(" in your VuePress config file.")])],-1),b={id:"direct-enable",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#direct-enable","aria-hidden":"true"},"#",-1),v=s('<p>You can set <code>plugins.pwa</code> to <code>true</code> in theme options to let theme automatically generate the necessary config and enable plugins quickly. However, we recommend you to manually set some options by following the instructions below.</p><h2 id="intro" tabindex="-1"><a class="header-anchor" href="#intro" aria-hidden="true">#</a> Intro</h2><p>Service Worker <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> (SW for short) is mainly used to cache and proxy site content.</p><p>This plugin will automatically register Service Worker through <code>workbox-build</code>. To better control what the Service Worker can pre-cache, the plugin provides the following configurations.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>If you are an advanced user, you can also set <code>plugins.pwa.generateSwConfig</code> in theme options directly to pass options to <code>workbox-build</code>.</p></div><h2 id="cache-control" tabindex="-1"><a class="header-anchor" href="#cache-control" aria-hidden="true">#</a> Cache Control</h2><p>Based on the requirement of installable <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup>, the plugin provides related options for cache control.</p><h3 id="default-cache" tabindex="-1"><a class="header-anchor" href="#default-cache" aria-hidden="true">#</a> Default Cache</h3><p>By default, the plugin will pre-cache all the <code>js</code> <code>css</code> and <code>svg</code>. And only homepage and 404 <code>html</code> are cached.</p><p>At the same time, the plugin will cache font files: <code>**/*.{woff,woff2,eot,ttf,otf}</code>.</p><h3 id="image-cache" tabindex="-1"><a class="header-anchor" href="#image-cache" aria-hidden="true">#</a> Image Cache</h3><p>You can cache site pictures by setting the <code>plugins.pwa.cachePic</code> option to <code>true</code>.</p><p>If your site is not large and the pictures are mostly critical descriptions, and hope to be displayed in offline mode, please set this option to <code>true</code>.</p><div class="hint-container info"><p class="hint-container-title">Image recognition</p><p>We recognize images by file extension. Any files ending with <code>.png</code>, <code>.jpg</code>, <code>.jpeg</code>, <code>.gif</code>, <code>.bmp</code>, <code>.webp</code> will be regarded as images.</p></div><h3 id="html-cache" tabindex="-1"><a class="header-anchor" href="#html-cache" aria-hidden="true">#</a> HTML Cache</h3><p>If you have small sites, and would like to make document fully offline available, you can set <code>plugins.pwa.cacheHTML</code> to <code>true</code> to cache all HTML files.</p><div class="hint-container tip"><p class="hint-container-title">Why only home and 404 page been cached by default?</p><p>Though VuePress generates HTML files through SSG<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup> for all pages, these files are mainly used for SEO<sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup> and allow you to directly configure the backend without SPA<sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup> Visit any link.</p><p>VuePress is essentially an SPA. This means that you only need to cache the home page and enter from the home page to access all pages normally. Therefore, not caching other HTML by default can effectively reduce the cache size (40% smaller in size) and speed up the SW update speed.</p><p>But this also has the disadvantage. If the user enters the site directly from a non-home page, the HTML file for the first page still needs to be loaded from the internet. Also, in offline environment, users can only enter through the homepage and then navigate to the corresponding page by themselves. If they directly access a link, an inaccessible prompt will appear.</p></div><h3 id="size-control" tabindex="-1"><a class="header-anchor" href="#size-control" aria-hidden="true">#</a> Size Control</h3><p>To prevent large files from being included in the pre-cache list, any files larger than 2 MB or pictures larger than 1 MB will be deleted.</p><p>You can customize the maximum file size of the cache (unit: KB) with the <code>plugins.pwa.maxSize</code> option, or change the size limit of the picture (unit: KB) with <code>plugins.pwa.maxPicSize</code>.</p><h2 id="update-control" tabindex="-1"><a class="header-anchor" href="#update-control" aria-hidden="true">#</a> Update Control</h2><p>We provide the <code>plugins.pwa.update</code> option to control how users receive updates.</p><p>The default value of the <code>update</code> option is <code>&quot;available&quot;</code>, which means that when new content available, the new SW will be installed silently in the background, and a pop-up window will prompt the user that the new content is ready after SW finish installing. Users can choose whether to refresh immediately to view new content.</p><p>Under the default behavior, users will still read old content before the SW is ready, and they will not be prompted. If your project is still in building stage, and you want to alert the user that he may be reading outdated content, you can set this to <code>&quot;hint&quot;</code>. This allows users to be notified that new content has been published within seconds after visiting docs. But the negative effect of this is that if the user chooses to update before the new SW is ready, he will need to get all the resources of the page from the internet before the new SW installs and controls the page.</p><p>If your docs are stable, or you&#39;re hosting a blog and don&#39;t care much about users receiving the latest version right away, you can set this to <code>&quot;disabled&quot;</code>, which means that the new SW will be installed completely silently in the background and start waiting, when the pages controlled by the old version SW are all closed, the new SW will start to take control and provide users with new content the next time users visit. This setting can prevent users from being disturbed by the pop-up window in the bottom right corner during the visit.</p><p>To speed up user access under weak or no network conditions through SW, but also want users to always access new content, you can set this option to <code>&quot;force&quot;</code>. The behavior of this option is to unregister old SW as soon as a new SW is detected and refresh the page to ensure the user is browsing the latest content. But we strongly recommend not using this option unless necessary, as after a new SW is released, all users will experience unexpected sudden refresh within seconds after entering the site, and they will have to access the document over the internet and install the whole latest SW.</p><h3 id="update-prompt-popup" tabindex="-1"><a class="header-anchor" href="#update-prompt-popup" aria-hidden="true">#</a> Update Prompt Popup</h3><p>When new content is detected (new SW detected), an update prompt popup will appear in the bottom right corner and allow the user to refresh and apply.</p><div class="hint-container tip"><p class="hint-container-title">custom popup</p><p>If you are not satisfied with the default popup, you can write your own component. You need to register your own popup component globally and pass the name of the component to the <code>plugins.pwa.hintComponent</code> option.</p></div><h3 id="update-ready-popup" tabindex="-1"><a class="header-anchor" href="#update-ready-popup" aria-hidden="true">#</a> Update Ready Popup</h3><p>When the new content is ready (the new SW installed successfully and started waiting), the update ready popup will appear in the bottom right corner and allow the user to refresh and apply.</p><div class="hint-container tip"><p class="hint-container-title">custom popup</p><p>If you are not satisfied with the default popup, you can write your own component. You need to register your popup component globally and pass the name of the component to the <code>plugins.pwa.updateComponent</code> option.</p></div><h2 id="manifest-generation" tabindex="-1"><a class="header-anchor" href="#manifest-generation" aria-hidden="true">#</a> Manifest Generation</h2><p>To ensure the installability of PWA, the site needs to generate a manifest file and declare a valid manifest file address <sup class="footnote-ref"><a href="#footnote7">[7]</a><a class="footnote-anchor" id="footnote-ref7"></a></sup> through <code>&lt;link&gt;</code>.</p><p>The plugin will automatically generate the Manifest file <code>manifest.webmanifest</code> for you in the output directory, and will also add the manifest address statement to each HTML <code>&lt;head&gt;</code>.</p><p>If you already have a <code>manifest.webmanifest</code> or <code>manifest.json</code> in <code>.vuepress/public</code>, the plugin will read and merge it into the final manifest.</p><h3 id="automatic-generation" tabindex="-1"><a class="header-anchor" href="#automatic-generation" aria-hidden="true">#</a> Automatic Generation</h3><p>The plugin will use the information from the VuePress plugin API and set the fallback for fields in manifest as much as possible. So you don&#39;t need to set most of the manifest fields.</p><p>If the following fields are not set, they will try to fall back to the following preset values in order.</p><table><thead><tr><th>Options</th><th>Default value</th></tr></thead><tbody><tr><td>name</td><td><code>siteConfig.title</code> || <code>siteConfig.locales[&#39;/&#39;].title</code> || <code>&quot;Site&quot;</code></td></tr><tr><td>short_name</td><td><code>siteConfig.title</code> || <code>siteConfig.locales[&#39;/&#39;].title</code> || <code>&quot;Site&quot;</code></td></tr><tr><td>description</td><td><code>siteConfig.description</code> || <code>siteConfig.locales[&#39;/&#39;].description</code> || <code>&quot;A site built with vuepress&quot;</code></td></tr><tr><td>lang</td><td><code>siteConfig.locales[&#39;/&#39;].lang</code> || <code>&quot;en-US&quot;</code></td></tr><tr><td>start_url</td><td><code>siteConfig.base</code></td></tr><tr><td>scope</td><td><code>siteConfig.base</code></td></tr><tr><td>display</td><td><code>&quot;standalone&quot;</code></td></tr><tr><td>theme_color</td><td><code>&quot;#46bd87&quot;</code></td></tr><tr><td>background_color</td><td><code>&quot;#ffffff&quot;</code></td></tr><tr><td>orientation</td><td><code>&quot;portrait-primary&quot;</code></td></tr><tr><td>prefer_related_applications</td><td><code>false</code></td></tr></tbody></table>',40),_={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/pwa2/src/shared/manifest.ts",target:"_blank",rel:"noopener noreferrer"},k=s('<h3 id="manual-config" tabindex="-1"><a class="header-anchor" href="#manual-config" aria-hidden="true">#</a> Manual Config</h3><p>You can manually specify the contents of the manifest with <code>plugins.pwa.manifest</code> in theme options.</p><div class="hint-container tip"><p class="hint-container-title">Priority</p><p><code>plugins.pwa.manifest</code> option in theme option has the highest priority, followed by manifest files that may exist in the <code>public</code> folder.</p></div><p><strong>You should at least set a valid icon through <code>manifest.icons</code> in <code>plugins.pwa</code> or other icon related options in the PWA plugin.</strong></p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>The installability <sup class="footnote-ref"><a href="#footnote3">[3:1]</a><a class="footnote-anchor" id="footnote-ref3:1"></a></sup> specification requires at least one valid icon to be declared in the manifest.</p><p>So if you do not configure <code>manifest.icons</code> in <code>plugins.pwa</code>, visitors can only enjoy the offline accessibility brought by the Service Worker cache, while cannot install your site as a PWA.</p><p>Besides the plugin does not process anything in the manifest by default, but outputs them as-is. This means that if you plan to deploy to a subdirectory, you should append the URL prefix to manifest Urls yourself.</p><p>But, if everything you need is all under base folder, you can set <code>appendBase: true</code> in <code>plugins.pwa</code> to let the plugin append <code>base</code> to any links in it.</p></div><h2 id="other-options" tabindex="-1"><a class="header-anchor" href="#other-options" aria-hidden="true">#</a> Other Options</h2><p>The plugin also provides other PWA-related options, such as Microsoft tile icon and color settings, Apple icon and so on.</p>',7),S=e("h2",{id:"further-reading",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#further-reading","aria-hidden":"true"},"#"),t(" Further Reading")],-1),W=e("p",null,"For more details, please see:",-1),x={href:"https://web.dev/progressive-web-apps/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",target:"_blank",rel:"noopener noreferrer"},q={href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"},T=e("hr",{class:"footnotes-sep"},null,-1),A={class:"footnotes"},C={class:"footnotes-list"},I=s('<li id="footnote1" class="footnote-item"><p><strong>PWA introduction</strong></p><p>PWA, full name Progressive Web app. PWA standard is stipulated by W3C.</p><p>It allows sites to install the site as an App on supported platform through a browser that supports this feature. <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p><strong>Service Worker Introduction</strong></p><ol><li><p>The Service Worker will get and cache all the files registered in it during the registration process.</p></li><li><p>After the registration complete, the Service Worker is activated, and starts to proxy and control all your requests.</p></li><li><p>Whenever you want to initiate an access request through the browser, the Service Worker will check whether it exists in its own cache list, if it exists, it will directly return the cached result, otherwise it will call its own fetch method to get it. You can use a custom fetch method to fully control the result of the request for resources in the web page, such as providing a fallback web page when offline.</p></li><li><p>Every time the user reopens the site, the Service Worker will request to the link when it was registered. If a new version of Service Worker is detected, it will update itself and start caching the list of resources registered in the new Service Worker . After the content update is successfully obtained, the Service Worker will trigger the <code>update</code> event. The user can be notified through this event, for example, a pop-up window will be displayed in the lower right corner, prompting the user that new content is available and allowing the user to trigger an update.</p></li></ol><a href="#footnote-ref2" class="footnote-backref">↩︎</a></li><li id="footnote3" class="footnote-item"><p><strong>Installable</strong></p><p>To let the site be registered as a PWA, the site needs to successfully register a valid service worker by itself, and at the same time add a valid manifest file and declare it.</p><p>Each platform or browser has requirements for the size of the Service Worker cache. When the file size of the Service Worker cache is too large, the site will be marked as not installable. For Safari, the threshold is 50 MB, a few browsers will set less or more values (30MB, 70MB, 80MB), and Chrome will mark the threshold at 100 MB.</p><p>The manifest file should contain at least <code>name</code> (or <code>short_name</code>) <code>icons</code> <code>start_url</code></p><div class="hint-container note"><p class="hint-container-title">Note</p><p>Starting from Chrome 93, Service Worker must contain effective fetch events to control offline requests.</p><p>However, currently the plugin does not contain relevant processing logic by default, so on Android devices with Chrome 93 or later, the site will not pop up an installation prompt.</p></div><a href="#footnote-ref3" class="footnote-backref">↩︎</a> <a href="#footnote-ref3:1" class="footnote-backref">↩︎</a></li><li id="footnote4" class="footnote-item"><p><strong>SSG</strong>: <strong>S</strong>tatic <strong>S</strong>ite <strong>G</strong>eneration, <a href="#footnote-ref4" class="footnote-backref">↩︎</a></p></li><li id="footnote5" class="footnote-item"><p><strong>SEO</strong>: <strong>S</strong>earch <strong>E</strong>ngine <strong>O</strong>ptimization. <a href="#footnote-ref5" class="footnote-backref">↩︎</a></p></li><li id="footnote6" class="footnote-item"><p><strong>SPA</strong>: <strong>S</strong>ingle <strong>P</strong>age <strong>A</strong>pplication, most of them only have the homepage, and use history mode to handle routing instead of actually navigating between pages. <a href="#footnote-ref6" class="footnote-backref">↩︎</a></p></li>',6),M={id:"footnote7",class:"footnote-item"},B=e("p",null,[e("strong",null,"Manifest File")],-1),z=e("p",null,"The manifest file uses the JSON format and is responsible for declaring various information of the PWA, such as name, description, icon, and shortcut actions.",-1),L=e("p",null,"In order for your site to be registered as a PWA, you need to meet the basic specifications of the manifest to make the browser consider the site as an installable PWA and allow users to install it.",-1),N={class:"hint-container info"},V=e("p",{class:"hint-container-title"},"Info",-1),E={href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"},H=e("a",{href:"#footnote-ref7",class:"footnote-backref"},"↩︎",-1);function U(Y,j){const r=a("ProjectLink"),l=a("Badge"),n=a("ExternalLinkIcon"),c=a("RouterLink");return h(),p("div",null,[e("p",null,[t("The theme provides progressive web app support "),g,t(" via built-in "),o(r,{name:"pwa2"},{default:i(()=>[m]),_:1}),t(", and it's disabled by default.")]),w,u(" more "),e("h2",b,[y,t(" Direct Enable "),o(l,{text:"Not recommended",type:"warning"})]),v,e("p",null,[t("For complete configuration items, please see "),e("a",_,[t("Manifest Type Definition File"),o(n)]),t(".")]),k,e("p",null,[t("You can set them as needed. For detailed options, please see "),o(c,{to:"/config/plugins/pwa.html"},{default:i(()=>[t("PWA config")]),_:1}),t(".")]),S,W,e("ul",null,[e("li",null,[o(r,{name:"pwa2"},{default:i(()=>[t("PWA plugin docs")]),_:1})]),e("li",null,[e("a",x,[t("Google PWA"),o(n)])]),e("li",null,[e("a",P,[t("MDN PWA"),o(n)])]),e("li",null,[e("a",q,[t("W3C Manifest Specification"),o(n)])])]),T,e("section",A,[e("ol",C,[I,e("li",M,[B,z,L,e("div",N,[V,e("p",null,[t("For Manifest standards and specifications, please see "),e("a",E,[t("W3C Manifest"),o(n)])])]),H])])])])}const O=d(f,[["render",U],["__file","pwa.html.vue"]]);export{O as default};
