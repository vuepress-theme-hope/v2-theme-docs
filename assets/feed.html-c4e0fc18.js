import{a3 as d,Z as l,_ as o,a1 as e,a2 as n,$ as a,a0 as i,a4 as c,a5 as s,D as h}from"./framework-32163d8a.js";const r={},p=e("code",null,"vuepress-plugin-feed2",-1),u=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"Инфо"),e("p",null,[e("code",null,"vuepress-theme-hope"),n(" предоставляет "),e("code",null,"plugins.feed"),n(" в параметрах темы для "),e("code",null,"vuepress-plugin-feed2"),n(".")])],-1),_=s('<h2 id="включить-вывод-ленты" tabindex="-1"><a class="header-anchor" href="#включить-вывод-ленты" aria-hidden="true">#</a> Включить вывод ленты</h2><p>Плагин <code>vuepress-plugin-feed2</code> может генерировать для вас файлы каналов в следующих трех форматах:</p><ul><li>Atom 1.0</li><li>JSON 1.1</li><li>RSS 2.0</li></ul><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Atom и JSON предназначены для улучшения адаптации программного обеспечения для потоков.</p><p>Пожалуйста, используйте RSS, если это возможно.</p></div><p>Пожалуйста, установите для <code>plugins.feed.atom</code>, <code>plugins.feed.json</code> или <code>plugins.feed.rss</code> значение <code>true</code> в параметрах темы в соответствии с форматом, который вы хотите сгенерировать.</p><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Конечно, вы можете включить их все. Это не выбор 1 из 3 ситуаций.</p></div><p>Учитывая, что сейчас мало кто придерживается потока, этот плагин предоставляет минимальную настройку для настройки автоматического создания подробных файлов потока. Также это позволяет вам свободно определять выходное содержимое канала.</p><h2 id="настроики-канала" tabindex="-1"><a class="header-anchor" href="#настроики-канала" aria-hidden="true">#</a> Настройки канала</h2><p>Вы можете настроить информацию канала подачи, установив <code>plugins.feed.channel</code> в параметрах темы.</p><p>Мы рекомендуем следующие настройки:</p><ul><li>Преобразуйте дату создания потока в ISOString и запишите ее в <code>channel.pubDate</code></li><li>Период обновления контента, установленный в <code>channel.ttl</code> (единица измерения: минуты)</li><li>Установите информацию об авторских правах через <code>channel.copyright</code> или откатитесь к <code>copyright</code> в настройках темы</li><li>Установите автора канала через <code>channel.author</code> или вернитесь к <code>author</code> в настройках темы</li></ul><div class="hint-container tip"><p class="hint-container-title">Настройки канала по умолчанию</p><ul><li><p>Название и описание канала это название и описание сайта по умолчанию</p></li><li><p>Ссылка на канал и время последнего обновления будут автоматически сгенерированы плагином.</p></li></ul></div>',12),f=e("h2",{id:"управление-генерациеи",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#управление-генерациеи","aria-hidden":"true"},"#"),n(" Управление генерацией")],-1),m=e("h3",{id:"генерация-по-умолчанию",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#генерация-по-умолчанию","aria-hidden":"true"},"#"),n(" Генерация по умолчанию")],-1),g=e("p",null,"По умолчанию все статьи добавляются в ленту новостей.",-1),v=e("h3",{id:"настроить-элемент-потока",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#настроить-элемент-потока","aria-hidden":"true"},"#"),n(" Настроить элемент потока")],-1),x=e("p",null,[n("Вы можете управлять тем, как создается элемент потока в конкретной статье, настроив параметр "),e("code",null,"feed"),n(" в frontmatter.")],-1),S=e("h3",{id:"настроить-генерацию-ленты",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#настроить-генерацию-ленты","aria-hidden":"true"},"#"),n(" Настроить генерацию ленты")],-1),b=e("p",null,[n("Вы можете получить полный контроль над генерацией элементов потока, настроив "),e("code",null,"plugins.feed.getter"),n(".")],-1),N=e("h3",{id:"конфигурация-i18n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#конфигурация-i18n","aria-hidden":"true"},"#"),n(" Конфигурация I18n")],-1),V=e("p",null,"Плагин генерирует отдельные каналы для каждого языка.",-1),k=e("p",null,[n("Вы можете указать разные настройки для разных языков через "),e("code",null,"plugins.feed.locales"),n(".")],-1);function j(B,C){const t=h("ProjectLink");return l(),o("div",null,[e("p",null,[n("Тема добавляет поддержку каналов с помощью "),a(t,{name:"feed2"},{default:i(()=>[p]),_:1}),n(".")]),u,c(" more "),_,e("p",null,[n("Подробные параметры и их значения по умолчанию смотрите в разделе "),a(t,{name:"feed2",path:"/config/channel.html"},{default:i(()=>[n("Конфигурация канала подачи")]),_:1})]),f,m,g,e("p",null,[n("Содержимое, читаемое по умолчанию, смотрите в разделе "),a(t,{name:"feed2",path:"/config/item.html"},{default:i(()=>[n("Конфигурация → Управление элементами")]),_:1}),n(".")]),v,x,e("p",null,[n("Подробные параметры и их значения по умолчанию смотрите в разделе "),a(t,{name:"feed2",path:"/config/item.html"},{default:i(()=>[n("Конфигурация → Настройки проекта")]),_:1}),n(".")]),S,b,e("p",null,[n("Подробные параметры и их значения по умолчанию смотрите в разделе "),a(t,{name:"feed2",path:"/config/getter.html"},{default:i(()=>[n("Конфигурация → Геттер потоков")]),_:1}),n(".")]),N,V,k])}const y=d(r,[["render",j],["__file","feed.html.vue"]]);export{y as default};
