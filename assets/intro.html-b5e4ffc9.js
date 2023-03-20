import{a3 as a,Z as i,_ as u,a1 as e,a2 as l,$ as n,a4 as p,a0 as s,a5 as c,D as o}from"./framework-32163d8a.js";const d={},h=e("p",null,[e("code",null,"vuepress-theme-hope"),l(" объединяет множество плагинов VuePress.")],-1),_=e("ul",null,[e("li",null,"Некоторые плагины включаются автоматически, вы можете отключить их в настройках темы, если они вам не нужны."),e("li",null,"Некоторые плагины включаются только тогда, когда вы указываете необходимые параметры.")],-1),g={class:"hint-container note"},m=e("p",{class:"hint-container-title"},"Заметка",-1),v={href:"https://github.com/orgs/vuepress/people",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[l("Все плагины, называемые "),e("code",null,"vuepress-theme-hope"),l(", являются официальными плагинами или плагинами, разработанными г-ном Хоупом, которые размещены в репозитории "),e("code",null,"vuepress-theme-hope"),l(".")],-1),k={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,"Все плагины, разработанные Mr.Hope, имеют собственную документацию и могут использоваться с другими темами.",-1),j=c('<h2 id="опции-плагина" tabindex="-1"><a class="header-anchor" href="#опции-плагина" aria-hidden="true">#</a> Опции плагина</h2><p>Тема предоставляет опцию <code>plugins</code> для передачи параметров плагинам.</p><div class="hint-container info"><p class="hint-container-title">Имя параметров плагина</p><p>Все имена ключей в опции <code>plugins</code> представляют собой версию имени плагина в верблюжьем регистре, с удаленным необязательным суффиксом цифры <code>2</code>.</p><p>Например:</p><ul><li><code>vuepress-plugin-copy-code2</code> управляется именем ключа <code>copyCode</code>.</li><li><code>vuepress-plugin-md-enhance2</code> управляется именем ключа <code>mdEnhance</code>.</li></ul></div><h2 id="список-плагинов" tabindex="-1"><a class="header-anchor" href="#список-плагинов" aria-hidden="true">#</a> Список плагинов</h2><h3 id="плагины-предоставлены-mr-hope" tabindex="-1"><a class="header-anchor" href="#плагины-предоставлены-mr-hope" aria-hidden="true">#</a> Плагины предоставлены Mr.Hope</h3>',5),x={class:"hint-container tip"},P=e("p",{class:"hint-container-title"},"Совет",-1),V=e("p",null,"Вот некоторые другие плагины, которые по умолчанию не включены в тему, вы можете включить их в соответствии со своими потребностями.",-1),w=e("h3",{id:"официальныи-плагин",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#официальныи-плагин","aria-hidden":"true"},"#"),l(" Официальный плагин")],-1),y={href:"https://v2.vuepress.vuejs.org/reference/plugin/active-header-links.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://v2.vuepress.vuejs.org/reference/plugin/container.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://v2.vuepress.vuejs.org/reference/plugin/external-link-icon.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://v2.vuepress.vuejs.org/reference/plugin/git.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://v2.vuepress.vuejs.org/reference/plugin/nprogress.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://v2.vuepress.vuejs.org/reference/plugin/prismjs.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://v2.vuepress.vuejs.org/reference/plugin/theme-data.html",target:"_blank",rel:"noopener noreferrer"};function H(I,S){const t=o("ExternalLinkIcon"),r=o("ProjectLink");return i(),u("div",null,[h,_,e("div",g,[m,e("p",null,[l("Как член "),e("a",v,[l("VuePress Org"),n(t)]),l(", Mr. Hope разработал множество плагинов VuePress.")]),f,e("ul",null,[e("li",null,[l("Документацию по официальному плагину см. на "),e("a",k,[l("официальном сайте VuePress2"),n(t)])]),b])]),p(" more "),j,e("ul",null,[e("li",null,[n(r,{name:"auto-catalog"},{default:s(()=>[l("vuepress-plugin-auto-catalog")]),_:1}),l(": Catalog automatically generation for VuePress2")]),e("li",null,[n(r,{name:"blog2"},{default:s(()=>[l("vuepress-plugin-blog2")]),_:1}),l(": Плагин блога для VuePress2")]),e("li",null,[n(r,{name:"comment2"},{default:s(()=>[l("vuepress-plugin-comment2")]),_:1}),l(": Обеспечивает функцию комментариев и просмотра страниц")]),e("li",null,[n(r,{name:"components"},{default:s(()=>[l("vuepress-plugin-components")]),_:1}),l(": Предоставляет некоторые плагины из коробки")]),e("li",null,[n(r,{name:"copy-code2"},{default:s(()=>[l("vuepress-plugin-copy-code2")]),_:1}),l(": Обеспечивает функцию блокировки кода копирования одним щелчком мыши.")]),e("li",null,[n(r,{name:"copyright2"},{default:s(()=>[l("vuepress-plugin-copyright2")]),_:1}),l(": Добавление информации об авторских правах при копировании или отключении копирования и выбора.")]),e("li",null,[n(r,{name:"feed2"},{default:s(()=>[l("vuepress-plugin-feed2")]),_:1}),l(": Поддержка каналов")]),e("li",null,[n(r,{name:"md-enhance"},{default:s(()=>[l("vuepress-plugin-md-enhance")]),_:1}),l(": Предоставляет больше синтаксиса Markdown")]),e("li",null,[n(r,{name:"photo-swipe"},{default:s(()=>[l("vuepress-plugin-photo-swipe")]),_:1}),l(": Плагин предварительного просмотра изображений, основанный на фотопролистывании")]),e("li",null,[n(r,{name:"pwa2"},{default:s(()=>[l("vuepress-plugin-pwa2")]),_:1}),l(": Расширенная поддержка PWA")]),e("li",null,[n(r,{name:"reading-time2"},{default:s(()=>[l("vuepress-plugin-reading-time2")]),_:1}),l(": Время чтения и количество слов")]),e("li",null,[n(r,{name:"sass-palette"},{default:s(()=>[l("vuepress-plugin-sass-palette")]),_:1}),l(": Плагин в стиле Sass для всех плагинов и тем")]),e("li",null,[n(r,{name:"seo2"},{default:s(()=>[l("vuepress-plugin-seo2")]),_:1}),l(": Плагин для улучшения SEO")]),e("li",null,[n(r,{name:"sitemap2"},{default:s(()=>[l("vuepress-plugin-sitemap2")]),_:1}),l(": Плагин карты сайта")])]),e("div",x,[P,V,e("ul",null,[e("li",null,[n(r,{name:"lightgallery"},{default:s(()=>[l("vuepress-plugin-lightgallery")]),_:1}),l(": Плагин предварительного просмотра изображений на основе lightgallery")]),e("li",null,[n(r,{name:"redirect"},{default:s(()=>[l("vuepress-plugin-redirect")]),_:1}),l(": Перенаправления страницы")]),e("li",null,[n(r,{name:"remove-pwa"},{default:s(()=>[l("vuepress-plugin-remove-pwa")]),_:1}),l(": Plugins to remove pwa")]),e("li",null,[n(r,{name:"search-pro"},{default:s(()=>[l("vuepress-plugin-search-pro")]),_:1}),l(": Client search plugin")])])]),w,e("ul",null,[e("li",null,[e("p",null,[e("a",y,[l("@vuepress/plugin-active-header-links"),n(t)]),l(": Автоматически обновлять хэш маршрута")])]),e("li",null,[e("p",null,[e("a",C,[l("@vuepress/plugin-container"),n(t)]),l(": Пользовательский контейнер")])]),e("li",null,[e("p",null,[e("a",E,[l("@vuepress/external-link-icon"),n(t)]),l(": Добавить значок внешней ссылки для внешних ссылок в Markdown")])]),e("li",null,[e("p",null,[e("a",M,[l("@vuepress/plugin-git"),n(t)]),l(": Информационный плагин на основе Git")])]),e("li",null,[e("p",null,[e("a",N,[l("@vuepress/plugin-nprogress"),n(t)]),l(": Индикатор")])]),e("li",null,[e("p",null,[e("a",L,[l("@vuepress/plugin-prismjs"),n(t)]),l(": Плагин подсветки кода с использованием Prism.js")])]),e("li",null,[e("p",null,[e("a",B,[l("@vuepress/plugin-theme-data"),n(t)]),l(": Плагин Composition API для данных темы")])])])])}const O=a(d,[["render",H],["__file","intro.html.vue"]]);export{O as default};
