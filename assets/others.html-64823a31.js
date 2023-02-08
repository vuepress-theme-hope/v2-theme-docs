import{a4 as l,_ as r,$ as h,a2 as e,a3 as o,a0 as t,a1 as i,a6 as d,k as c}from"./framework-bb5a5b49.js";const p={},_=d('<h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> components</h2><p>Controls <code>vuepress-plugin-components</code>, providing a set of components for Markdown.</p><p>Available component which can be used in markdown files are:</p><ul><li><code>&quot;Badge&quot;</code></li><li><code>&quot;BiliBili&quot;</code></li><li><code>&quot;CodePen&quot;</code></li><li><code>&quot;PDF&quot;</code></li><li><code>&quot;StackBlitz&quot;</code></li><li><code>&quot;VideoPlayer&quot;</code></li><li><code>&quot;YouTube&quot;</code></li></ul><p>You can set <code>plugin.components.components</code> with an array of components you want, by default it will be <code>[&quot;Badge&quot;]</code>.</p><p>Also, you can set <code>plugin.components.rootComponents</code> to enable some root components, such as addThis and notice.</p>',6),u={class:"hint-container info"},m=e("p",{class:"hint-container-title"},"Инфо",-1),f={id:"copycode",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#copycode","aria-hidden":"true"},"#",-1),v=e("p",null,[o("Управляет "),e("code",null,"vuepress-plugin-copy-code2"),o(", предоставляя кнопку копирования кода.")],-1),x=e("p",null,[o("По умолчанию никаких настроек не требуется. Если вам не нужна эта функция, установите значение "),e("code",null,"false"),o(".")],-1),b={class:"hint-container info"},q=e("p",{class:"hint-container-title"},"Инфо",-1),w={id:"git",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#",-1),y=e("p",null,[o("Управляет "),e("code",null,"@vuepress/plugin-git"),o(" для предоставления информации о файле через историю коммитов Git.")],-1),j=e("p",null,"По умолчанию он включен только в режиме сборки для повышения производительности сервера разработки. Вы можете вручную установить логическое значение для управления состоянием плагина или указать параметры плагина.",-1),B={class:"hint-container info"},P=e("p",{class:"hint-container-title"},"Инфо",-1),C={href:"https://v2.vuepress.vuejs.org/reference/plugin/git.html",target:"_blank",rel:"noopener noreferrer"},T={id:"nprogress",tabindex:"-1"},V=e("a",{class:"header-anchor",href:"#nprogress","aria-hidden":"true"},"#",-1),L=e("p",null,[o("Управляет "),e("code",null,"@vuepress/plugin-nprogress"),o(" и предоставляет индикатор выполнения при переключении страниц через nprogress.")],-1),N=e("p",null,[o("По умолчанию тема включает этот плагин, вы можете установить "),e("code",null,"false"),o(", чтобы отключить его.")],-1),S={id:"prismjs",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#prismjs","aria-hidden":"true"},"#",-1),A=e("p",null,[o("Управляет "),e("code",null,"@vuepress/plugin-prismjs"),o(", чтобы обеспечить подсветку блока кода через PrismJS.")],-1),F=e("p",null,[o("По умолчанию тема включает этот плагин, вы можете установить "),e("code",null,"false"),o(", чтобы отключить его и самостоятельно выделять блоки кода.")],-1),I={class:"hint-container info"},M=e("p",{class:"hint-container-title"},"Инфо",-1),Y={href:"https://v2.vuepress.vuejs.org/reference/plugin/prismjs.html",target:"_blank",rel:"noopener noreferrer"},z={id:"photoswipe",tabindex:"-1"},D=e("a",{class:"header-anchor",href:"#photoswipe","aria-hidden":"true"},"#",-1),G=e("p",null,[o("Управляет "),e("code",null,"vuepress-plugin-photo-swipe"),o(", обеспечивая функцию просмотра изображений.")],-1),J=e("p",null,[o("По умолчанию никаких настроек не требуется. Если вам не нужна эта функция, установите значение "),e("code",null,"false"),o(".")],-1),$={class:"hint-container info"},H=e("p",{class:"hint-container-title"},"Инфо",-1),K={id:"readingtime",tabindex:"-1"},O=e("a",{class:"header-anchor",href:"#readingtime","aria-hidden":"true"},"#",-1),Q=d('<p>Управляет <code>vuepress-plugin-reading-time2</code>, подсчитывая количество слов на странице и генерируя расчетное время чтения.</p><h3 id="readingtime-wordperminute" tabindex="-1"><a class="header-anchor" href="#readingtime-wordperminute" aria-hidden="true">#</a> readingTime.wordPerMinute</h3><ul><li>Тип: <code>number</code></li><li>По умолчанию: <code>300</code></li></ul><p>Слов, прочитанных за минуту.</p>',4),R={class:"hint-container info"},U=e("p",{class:"hint-container-title"},"Инфо",-1),W={id:"seo",tabindex:"-1"},X=e("a",{class:"header-anchor",href:"#seo","aria-hidden":"true"},"#",-1),Z=e("p",null,[o("Управляет "),e("code",null,"vuepress-plugin-seo2"),o(", обеспечивая улучшения поисковой системы.")],-1),ee=e("p",null,[o("По умолчанию никаких настроек не требуется. Если вам не нужна эта функция, установите значение "),e("code",null,"false"),o(".")],-1),oe={class:"hint-container info"},te=e("p",{class:"hint-container-title"},"Инфо",-1),ne={id:"sitemap",tabindex:"-1"},se=e("a",{class:"header-anchor",href:"#sitemap","aria-hidden":"true"},"#",-1),ie=e("p",null,[o("Управляет "),e("code",null,"vuepress-plugin-seo2"),o(", обеспечивая автоматическое создание карты сайта.")],-1),ce=e("p",null,[o("По умолчанию никаких настроек не требуется. Если вам не нужна эта функция, установите значение "),e("code",null,"false"),o(".")],-1),ae={class:"hint-container info"},de=e("p",{class:"hint-container-title"},"Инфо",-1);function le(re,he){const s=c("ProjectLink"),n=c("Badge"),a=c("ExternalLinkIcon");return r(),h("div",null,[_,e("div",u,[m,e("p",null,[o("For plugin options, please refer to "),t(s,{name:"components",path:"/config.html"},{default:i(()=>[o("components plugin options")]),_:1}),o(".")])]),e("h2",f,[g,o(" copyCode "),t(n,{text:"включено по умолчанию"})]),v,x,e("div",b,[q,e("p",null,[o("Параметры плагина см. в разделе "),t(s,{name:"copy-code2",path:"/config.html"},{default:i(()=>[o("параметры плагина copy-code2")]),_:1}),o(".")])]),e("h2",w,[k,o(" git "),t(n,{text:"enabled in production"})]),y,j,e("div",B,[P,e("p",null,[o("Смотрите "),e("a",C,[o("Параметры плагина git"),t(a)]),o(" для опций плагина.")])]),e("h2",T,[V,o(" nprogress "),t(n,{text:"включено по умолчанию"})]),L,N,e("h2",S,[E,o(" prismjs "),t(n,{text:"включено по умолчанию"})]),A,F,e("div",I,[M,e("p",null,[o("Смотрите "),e("a",Y,[o("Параметры плагина prismjs"),t(a)]),o(" для опций плагина.")])]),e("h2",z,[D,o(" photoSwipe "),t(n,{text:"включено по умолчанию"})]),G,J,e("div",$,[H,e("p",null,[o("Параметры плагина смотрите в разделе "),t(s,{name:"photo-swipe",path:"/config.html"},{default:i(()=>[o("параметры плагина photo-swipe")]),_:1}),o(".")])]),e("h2",K,[O,o(" readingTime "),t(n,{text:"включено по умолчанию"})]),Q,e("div",R,[U,e("p",null,[o("Дополнительные параметры плагина смотрите в "),t(s,{name:"reading-time2",path:"/config.html"},{default:i(()=>[o("документации плагина reading-time2")]),_:1}),o(".")])]),e("h2",W,[X,o(" seo "),t(n,{text:"включено по умолчанию"})]),Z,ee,e("div",oe,[te,e("p",null,[o("Конфигурацию плагина см. в разделе "),t(s,{name:"seo2",path:"/config.html"},{default:i(()=>[o("параметры плагина seo2")]),_:1}),o(".")])]),e("h2",ne,[se,o(" sitemap "),t(n,{text:"включено по умолчанию"})]),ie,ce,e("div",ae,[de,e("p",null,[o("Конфигурацию плагина смотрите в разделе "),t(s,{name:"sitemap2",path:"/config.html"},{default:i(()=>[o("параметры плагина sitemap2")]),_:1}),o(".")])])])}const _e=l(p,[["render",le],["__file","others.html.vue"]]);export{_e as default};
