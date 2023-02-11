import{a4 as o,_ as n,$ as i,a5 as r,a2 as e,a3 as t,a0 as d,a6 as s,k as c}from"./framework-bb5a5b49.js";const l={},h=e("p",null,[t("Тема поддерживает функцию блога с "),e("code",null,"vuepress-plugin-blog2"),t(" по умолчанию, и по умолчанию она "),e("strong",null,"отключена"),t(".")],-1),p=e("p",null,[t("Если вам нужна функциональность блога, вы можете установить "),e("code",null,"plugins.blog: true"),t(" в параметрах темы, чтобы включить функциональность блога.")],-1),u=e("h2",{id:"введение",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#введение","aria-hidden":"true"},"#"),t(" Введение")],-1),f=e("p",null,"После включения функции блога тема позволяет настраивать категории, теги, будь то статья, появляется ли она на временной шкале, звездочки, липкие и другие функции через переднюю часть страницы.",-1),_={class:"hint-container tip"},m=e("p",{class:"hint-container-title"},"Демо",-1),g={href:"https://mrhope.site/en/",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"vuepress-theme-hope",-1),v=s('<h2 id="поддержка-i18n" tabindex="-1"><a class="header-anchor" href="#поддержка-i18n" aria-hidden="true">#</a> Поддержка I18n</h2><p>Тема добавляет поддержку i18n в систему блогов. Вы можете установить разные настройки блога для каждого языка, используя <code>locales</code> в настройках темы.</p><p>Если у вас несколько языков, список статей, временная шкала и т. д. для каждого языка останутся независимыми.</p><h2 id="боковая-панель" tabindex="-1"><a class="header-anchor" href="#боковая-панель" aria-hidden="true">#</a> Боковая панель</h2><p>Тема предоставляет боковую панель с информацией о блоге. Боковая панель будет отображаться на странице, связанной с блогом (она будет отображаться справа на рабочем столе и убираться в боковую панель в мобильном представлении).</p><p>Вы можете управлять поведением отображения боковой панели на страницах, не связанных с блогом, с помощью <code>blog.sidebarDisplay</code> в параметрах темы. Необязательные значения: <code>&quot;mobile&quot; | &quot;none&quot; | &quot;always&quot;</code>. По умолчанию используется <code>&quot;mobile&quot;</code>, то есть когда вы посещаете страницы, не связанные с блогом, в мобильном представлении, вы также можете увидеть его на боковой панели.</p><h2 id="пагинация" tabindex="-1"><a class="header-anchor" href="#пагинация" aria-hidden="true">#</a> Пагинация</h2><p>Для списка статей на всех страницах мы отобразим компонент пагинации внизу. Вы можете использовать этот компонент для быстрого перехода к первой странице, последней странице и двум страницам до и после. Вы также можете ввести номер для перехода на указанную страницу.</p><p>Количество статей на странице по умолчанию равно <code>10</code>, вы можете установить <code>blog.articlePerPage</code> в параметрах темы, чтобы переопределить это значение.</p><h2 id="limitation" tabindex="-1"><a class="header-anchor" href="#limitation" aria-hidden="true">#</a> Limitation</h2><div class="hint-container warning"><p class="hint-container-title">Hot update disabled by default</p><p>For performance reasons, hot updates are not enabled for blog-related data by default in devServer, i.e. if you add new articles or modify the categories, time, tags, sticky, star, etc. of existing articles, the related data of the entire site will not update until you restart devServer.</p><p>In addition, since the blog information will be written to the underlying data of VuePress, modifying this file will cause application restart, so reading time (including word count information) which are sensitive to Markdown content will not take effect in devServer.</p><p>If you want these to take effect or be updated in real time, you need to set <code>hotReload: true</code> and accept the fact that each modification will trigger a page refresh and some time having white screen due to heavy recomputing work.</p></div>',11);function w(y,x){const a=c("ExternalLinkIcon");return n(),i("div",null,[h,p,r(" more "),u,f,e("div",_,[m,e("p",null,[e("a",g,[t("Вот демонстрация"),d(a)]),t(" для предварительного просмотра блогов, созданных с помощью "),b,t(".")])]),v])}const q=o(l,[["render",w],["__file","intro.html.vue"]]);export{q as default};
