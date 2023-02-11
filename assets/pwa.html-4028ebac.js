import{a4 as p,_ as l,$ as h,a2 as e,a3 as o,a0 as t,a1 as r,a5 as f,a6 as s,k as n}from"./framework-bb5a5b49.js";const u={},g=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),_=e("code",null,"vuepress-plugin-pwa2",-1),b=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"Инфо"),e("p",null,[e("code",null,"vuepress-theme-hope"),o(" передает "),e("code",null,"plugins.pwa"),o(" в параметрах темы в качестве параметров плагина для "),e("code",null,"vuepress-plugin-pwa2"),o(".")]),e("p",null,[o("Если вы используете этот плагин, мы рекомендуем вам установить "),e("code",null,"shouldPrefetch: false"),o(" в файле конфигурации VuePress.")])],-1),m={id:"прямое-включение",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#прямое-включение","aria-hidden":"true"},"#",-1),S=s('<p>Вы можете установить для <code>plugins.pwa</code> значение <code>true</code> в параметрах темы, чтобы тема автоматически генерировала необходимую конфигурацию и быстро включала плагины. Однако мы рекомендуем вам вручную установить некоторые параметры, следуя приведенным ниже инструкциям.</p><h2 id="введение" tabindex="-1"><a class="header-anchor" href="#введение" aria-hidden="true">#</a> Введение</h2><p>Service Worker <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> (сокращенно SW) в основном используется для кэширования и проксирования контента сайта.</p><p>Этот плагин автоматически зарегистрирует Service Worker через <code>workbox-build</code>. Чтобы лучше контролировать то, что Service Worker может предварительно кэшировать, подключаемый модуль предоставляет следующие конфигурации.</p><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Если вы опытный пользователь, вы также можете установить <code>plugins.pwa.generateSwConfig</code> в параметрах темы напрямую, чтобы передать параметры в <code>workbox-build</code>.</p></div><h2 id="управление-кешем" tabindex="-1"><a class="header-anchor" href="#управление-кешем" aria-hidden="true">#</a> Управление кешем</h2><p>В зависимости от требования installable <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup>, плагин предоставляет соответствующие параметры для управления кешем.</p><h3 id="кэш-по-умолчанию" tabindex="-1"><a class="header-anchor" href="#кэш-по-умолчанию" aria-hidden="true">#</a> Кэш по умолчанию</h3><p>По умолчанию плагин предварительно кэширует все файлы <code>js</code> <code>css</code> и <code>svg</code>. Кешируются только домашняя страница и 404 <code>html</code>.</p><p>В то же время плагин будет кэшировать файлы шрифтов: <code>**/*.{woff,woff2,eot,ttf,otf}</code>.</p><h3 id="кэш-изображении" tabindex="-1"><a class="header-anchor" href="#кэш-изображении" aria-hidden="true">#</a> Кэш изображений</h3><p>Вы можете кэшировать изображения сайта, установив для параметра <code>plugins.pwa.cachePic</code> значение <code>true</code>.</p><p>Если ваш сайт небольшой, а изображения в основном представляют собой критические описания и вы хотите, чтобы они отображались в автономном режиме, установите для этого параметра значение <code>true</code>.</p><div class="hint-container info"><p class="hint-container-title">Распознавание изображений</p><p>Мы распознаем изображения по расширению файла. Любые файлы, оканчивающиеся на <code>.png</code>, <code>.jpg</code>, <code>.jpeg</code>, <code>.gif</code>, <code>.bmp</code>, <code>.webp</code> будут рассматриваться как изображения.</p></div><h3 id="html-кэш" tabindex="-1"><a class="header-anchor" href="#html-кэш" aria-hidden="true">#</a> HTML-кэш</h3><p>Если у вас есть небольшие сайты и вы хотите сделать документ полностью доступным в автономном режиме, вы можете установить для <code>plugins.pwa.cacheHTML</code> значение <code>true</code>, чтобы кэшировать все HTML-файлы.</p><div class="hint-container tip"><p class="hint-container-title">Почему по умолчанию кешируются только домашняя страница и страница 404?</p><p>Хотя VuePress генерирует HTML-файлы через SSG<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup> для всех страниц, эти файлы в основном используются для SEO<sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup> и позволяют напрямую настраивать серверную часть без SPA<sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup>. Перейдите по любой ссылке.</p><p>VuePress — это, по сути, SPA. Это означает, что вам нужно только кэшировать домашнюю страницу и войти с домашней страницы, чтобы получить доступ ко всем страницам в обычном режиме. Следовательно, отсутствие кэширования других HTML по умолчанию может эффективно уменьшить размер кэша (на 40% меньше по размеру) и ускорить скорость обновления ПО.</p><p>Но в этом есть и недостаток. Если пользователь входит на сайт непосредственно с не домашней страницы, файл HTML для первой страницы все равно необходимо загрузить из Интернета. Кроме того, в автономной среде пользователи могут заходить только через домашнюю страницу, а затем самостоятельно переходить на соответствующую страницу. Если они напрямую обращаются к ссылке, появится недоступная подсказка.</p></div><h3 id="контроль-размера" tabindex="-1"><a class="header-anchor" href="#контроль-размера" aria-hidden="true">#</a> Контроль размера</h3><p>Чтобы предотвратить попадание больших файлов в список предварительного кэширования, все файлы размером более 2 МБ или изображения размером более 1 МБ будут удалены.</p><p>Вы можете настроить максимальный размер файла кэша (единица измерения: КБ) с помощью параметра <code>plugins.pwa.maxSize</code> или изменить предельный размер изображения (единица измерения: КБ) с помощью <code>plugins.pwa.maxPicSize</code>.</p><h2 id="управление-обновлениями" tabindex="-1"><a class="header-anchor" href="#управление-обновлениями" aria-hidden="true">#</a> Управление обновлениями</h2><p>Мы предоставляем опцию <code>plugins.pwa.update</code> , чтобы контролировать, как пользователи получают обновления.</p><p>Значение по умолчанию для параметра <code>update</code> равно <code>&quot;available&quot;</code>, что означает, что при наличии нового контента новый SW будет автоматически установлено в фоновом режиме, а всплывающее окно предложит пользователю, что новый контент доступен. готово после завершения установки ПО. Пользователи могут выбрать, следует ли немедленно обновить страницу для просмотра нового контента.</p><p>При поведении по умолчанию пользователи по-прежнему будут читать старый контент до того, как ПО будет готово, и им не будет предложено. Если ваш проект все еще находится на стадии разработки, и вы хотите предупредить пользователя о том, что он может читать устаревший контент, вы можете установить для этого параметра значение <code>&quot;hint&quot;</code>. Это позволяет пользователям получать уведомления о публикации нового контента в течение нескольких секунд после посещения документов. Но негативным эффектом этого является то, что если пользователь решит выполнить обновление до того, как новый SW будет готово, ему потребуется получить все ресурсы страницы из Интернета до того, как новый SW установит и будет управлять страницей.</p><p>Если ваши документы стабильны или вы ведете блог и не слишком заботитесь о том, чтобы пользователи сразу же получали последнюю версию, вы можете установить для этого параметра значение <code>&quot;disabled&quot;</code>, что означает, что новый SW будет установлено полностью автоматически. в фоновом режиме и начать ждать, когда все страницы, контролируемые старой версией ПО, будут закрыты, новый SW начнет брать на себя управление и предоставлять пользователям новый контент при следующем посещении. Этот параметр может предотвратить отвлечение пользователей всплывающим окном в правом нижнем углу во время посещения.</p><p>Чтобы ускорить доступ пользователей в условиях слабой сети или ее отсутствия через ПО, а также чтобы пользователи всегда получали доступ к новому контенту, вы можете установить для этой опции значение <code>&quot;force&quot;</code>. Действие этой опции заключается в отмене регистрации старого ПО при обнаружении новый SW и обновлении страницы, чтобы убедиться, что пользователь просматривает новейший контент. Но мы настоятельно рекомендуем не использовать эту опцию без необходимости, так как после выпуска новый SW все пользователи столкнутся с неожиданным внезапным обновлением в течение нескольких секунд после входа на сайт, и им придется получить доступ к документу через Интернет и установить все последнее SW.</p><h3 id="всплывающее-окно-с-запросом-на-обновление" tabindex="-1"><a class="header-anchor" href="#всплывающее-окно-с-запросом-на-обновление" aria-hidden="true">#</a> Всплывающее окно с запросом на обновление</h3><p>При обнаружении нового контента (обнаружено новый SW), в правом нижнем углу появится всплывающее окно с запросом на обновление, которое позволит пользователю обновить и применить.</p><div class="hint-container tip"><p class="hint-container-title">пользовательское всплывающее окно</p><p>Если вас не устраивает всплывающее окно по умолчанию, вы можете написать свой собственный компонент. Вам необходимо зарегистрировать свой собственный всплывающий компонент глобально и передать имя компонента в параметр <code>plugins.pwa.hintComponent</code>.</p></div><h3 id="обновить-готовое-всплывающее-окно" tabindex="-1"><a class="header-anchor" href="#обновить-готовое-всплывающее-окно" aria-hidden="true">#</a> Обновить готовое всплывающее окно</h3><p>Когда новый контент будет готов (новый SW успешно установлен и начал ждать), в правом нижнем углу появится всплывающее окно готовности обновления, которое позволит пользователю обновить и применить.</p><div class="hint-container tip"><p class="hint-container-title">пользовательское всплывающее окно</p><p>Если вас не устраивает всплывающее окно по умолчанию, вы можете написать свой собственный компонент. Вам необходимо зарегистрировать свой всплывающий компонент глобально и передать имя компонента в параметр <code>plugins.pwa.updateComponent</code>.</p></div><h2 id="генерация-манифеста" tabindex="-1"><a class="header-anchor" href="#генерация-манифеста" aria-hidden="true">#</a> Генерация манифеста</h2><p>Чтобы обеспечить возможность установки PWA, сайт должен сгенерировать файл манифеста и объявить действительный адрес файла манифеста <sup class="footnote-ref"><a href="#footnote7">[7]</a><a class="footnote-anchor" id="footnote-ref7"></a></sup> через <code>&lt;link&gt;</code>.</p><p>Плагин автоматически сгенерирует для вас файл манифеста <code>manifest.webmanifest</code> в выходном каталоге, а также добавит оператор адреса манифеста в каждый HTML-код <code>&lt;head&gt;</code>.</p><p>Если у вас уже есть файл <code>manifest.webmanifest</code> или <code>manifest.json</code> в <code>.vuepress/public</code>, плагин прочитает и объединит его с окончательным манифестом.</p><h3 id="автоматическая-генерация" tabindex="-1"><a class="header-anchor" href="#автоматическая-генерация" aria-hidden="true">#</a> Автоматическая генерация</h3><p>Плагин будет использовать информацию из API-интерфейса плагина VuePress и максимально задавать запасной вариант для полей в манифесте. Таким образом, вам не нужно устанавливать большинство полей манифеста.</p><p>Если следующие поля не установлены, они попытаются вернуться к следующим предустановленным значениям по порядку.</p><table><thead><tr><th>Опции</th><th>Значение по умолчанию</th></tr></thead><tbody><tr><td>name</td><td><code>siteConfig.title</code> || <code>siteConfig.locales[&#39;/&#39;].title</code> || <code>&quot;Site&quot;</code></td></tr><tr><td>short_name</td><td><code>siteConfig.title</code> || <code>siteConfig.locales[&#39;/&#39;].title</code> || <code>&quot;Site&quot;</code></td></tr><tr><td>description</td><td><code>siteConfig.description</code> || <code>siteConfig.locales[&#39;/&#39;].description</code> || <code>&quot;A site built with vuepress&quot;</code></td></tr><tr><td>lang</td><td><code>siteConfig.locales[&#39;/&#39;].lang</code> || <code>&quot;en-US&quot;</code></td></tr><tr><td>start_url</td><td><code>siteConfig.base</code></td></tr><tr><td>scope</td><td><code>siteConfig.base</code></td></tr><tr><td>display</td><td><code>&quot;standalone&quot;</code></td></tr><tr><td>theme_color</td><td><code>&quot;#46bd87&quot;</code></td></tr><tr><td>background_color</td><td><code>&quot;#ffffff&quot;</code></td></tr><tr><td>orientation</td><td><code>&quot;portrait-primary&quot;</code></td></tr><tr><td>prefer_related_applications</td><td><code>false</code></td></tr></tbody></table>',40),W={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/pwa2/src/shared/manifest.ts",target:"_blank",rel:"noopener noreferrer"},k=s('<h3 id="ручная-настроика" tabindex="-1"><a class="header-anchor" href="#ручная-настроика" aria-hidden="true">#</a> Ручная настройка</h3><p>Вы можете вручную указать содержимое манифеста с помощью <code>plugins.pwa.manifest</code> в параметрах темы.</p><div class="hint-container tip"><p class="hint-container-title">Приоритет</p><p>Опция <code>plugins.pwa.manifest</code> в теме имеет наивысший приоритет, за ней следуют файлы манифеста, которые могут находиться в папке <code>public</code>.</p></div><p><strong>Вы должны, по крайней мере, установить действительный значок с помощью <code>manifest.icons</code> в <code>plugins.pwa</code> или других параметров, связанных со значком, в плагине PWA.</strong></p><div class="hint-container warning"><p class="hint-container-title">Примечание</p><p>Спецификация возможности установки <sup class="footnote-ref"><a href="#footnote3">[3:1]</a><a class="footnote-anchor" id="footnote-ref3:1"></a></sup> требует, чтобы в манифесте был объявлен хотя бы одна действительная иконка.</p><p>Таким образом, если вы не настроите <code>manifest.icons</code> в <code>plugins.pwa</code>, посетители смогут пользоваться только автономным доступом, обеспечиваемым кешем Service Worker, но не смогут установить ваш сайт как PWA.</p><p>Кроме того, плагин по умолчанию ничего не обрабатывает в манифесте, а выводит как есть. Это означает, что если вы планируете развертывание в подкаталоге, вы должны добавить префикс URL-адреса к URL-адресам манифеста самостоятельно.</p><p>Но если все, что вам нужно, находится в базовой папке, вы можете установить <code>appendBase: true</code> в <code>plugins.pwa</code>, чтобы плагин мог добавлять <code>base</code> к любым ссылкам в нем.</p></div><h2 id="другие-опции" tabindex="-1"><a class="header-anchor" href="#другие-опции" aria-hidden="true">#</a> Другие опции</h2><p>Плагин также предоставляет другие параметры, связанные с PWA, такие как значок плитки Microsoft и настройки цвета, значок Apple и так далее.</p>',7),w=e("h2",{id:"дальнеишее-чтение",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#дальнеишее-чтение","aria-hidden":"true"},"#"),o(" Дальнейшее чтение")],-1),P=e("p",null,"Для получения более подробной информации смотрите:",-1),x={href:"https://web.dev/progressive-web-apps/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",target:"_blank",rel:"noopener noreferrer"},A={href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"},C=e("hr",{class:"footnotes-sep"},null,-1),L={class:"footnotes"},M={class:"footnotes-list"},V=s('<li id="footnote1" class="footnote-item"><p><strong>Введение в PWA</strong></p><p>PWA, полное название Progressive Web app. Стандарт PWA установлен W3C.</p><p>Это позволяет сайтам устанавливать сайт как приложение на поддерживаемой платформе через браузер, поддерживающий эту функцию. <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p><strong>Введение в Service Worker</strong></p><ol><li><p>Service Worker получит и кэширует все зарегистрированные в нем файлы в процессе регистрации.</p></li><li><p>После завершения регистрации Service Worker активируется и начинает проксировать и контролировать все ваши запросы.</p></li><li><p>Всякий раз, когда вы хотите инициировать запрос доступа через браузер, Service Worker проверит, существует ли он в своем собственном списке кеша, если он существует, он напрямую вернет кешированный результат, в противном случае он вызовет свой собственный метод fetch для получения Это. Вы можете использовать настраиваемый метод выборки, чтобы полностью контролировать результат запроса ресурсов на веб-странице, например предоставлять резервную веб-страницу в автономном режиме.</p></li><li><p>Каждый раз, когда пользователь повторно открывает сайт, Service Worker будет запрашивать ссылку при его регистрации. Если будет обнаружена новая версия Service Worker, она обновится и начнет кэшировать список ресурсов, зарегистрированных в новом Service Worker. После того, как обновление содержимого будет успешно получено, Service Worker инициирует событие update. Пользователь может быть уведомлен через это событие, например, в правом нижнем углу будет отображаться всплывающее окно, сообщающее пользователю о наличии нового контента и позволяющее пользователю инициировать обновление.</p></li></ol><a href="#footnote-ref2" class="footnote-backref">↩︎</a></li><li id="footnote3" class="footnote-item"><p><strong>Устанавливаемый</strong></p><p>Чтобы сайт мог быть зарегистрирован как PWA, сайт должен сам успешно зарегистрировать действительный сервис-воркер и в то же время добавить действительный файл манифеста и объявить его.</p><p>У каждой платформы или браузера есть требования к размеру кэша Service Worker. Когда размер файла кеша Service Worker слишком велик, сайт будет помечен как не подлежащий установке. Для Safari порог составляет 50 МБ, некоторые браузеры будут устанавливать меньше или больше значений (30 МБ, 70 МБ, 80 МБ), а Chrome отметит порог в 100 МБ.</p><p>Файл манифеста должен содержать как минимум <code>name</code> (или <code>short_name</code>) <code>icons</code> <code>start_url</code></p><div class="hint-container note"><p class="hint-container-title">Заметка</p><p>Начиная с Chrome 93, Service Worker должен содержать эффективные события выборки для управления автономными запросами.</p><p>Однако в настоящее время плагин по умолчанию не содержит соответствующей логики обработки, поэтому на устройствах Android с Chrome 93 или более поздней версии сайт не будет отображать запрос на установку.</p></div><a href="#footnote-ref3" class="footnote-backref">↩︎</a> <a href="#footnote-ref3:1" class="footnote-backref">↩︎</a></li><li id="footnote4" class="footnote-item"><p><strong>SSG</strong>: <strong>S</strong>tatic <strong>S</strong>ite <strong>G</strong>neration, <a href="#footnote-ref4" class="footnote-backref">↩︎</a></p></li><li id="footnote5" class="footnote-item"><p><strong>SEO</strong>: <strong>S</strong>earch <strong>E</strong>ngine <strong>O</strong>ptimization. <a href="#footnote-ref5" class="footnote-backref">↩︎</a></p></li><li id="footnote6" class="footnote-item"><p><strong>SPA</strong>: <strong>S</strong>ingle <strong>P</strong>age <strong>A</strong>pplication, большинство из них имеют только домашнюю страницу и используют режим истории для обработки маршрутизации вместо фактического перехода между страницы. <a href="#footnote-ref6" class="footnote-backref">↩︎</a></p></li>',6),T={id:"footnote7",class:"footnote-item"},H=e("p",null,[e("strong",null,"Файл манифеста")],-1),N=e("p",null,"Файл манифеста использует формат JSON и отвечает за объявление различной информации о PWA, такой как имя, описание, иконка и действия быстрого доступа.",-1),j=e("p",null,"Чтобы ваш сайт был зарегистрирован как PWA, вам необходимо соответствовать основным спецификациям манифеста, чтобы браузер рассматривал сайт как устанавливаемое PWA и разрешал пользователям устанавливать его.",-1),B={class:"hint-container info"},E=e("p",{class:"hint-container-title"},"Инфо",-1),y={href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"},z=e("a",{href:"#footnote-ref7",class:"footnote-backref"},"↩︎",-1);function G(O,R){const c=n("ProjectLink"),d=n("Badge"),a=n("ExternalLinkIcon"),i=n("RouterLink");return l(),h("div",null,[e("p",null,[o("Тема обеспечивает прогрессивную поддержку веб-приложений "),g,o(" через встроенный "),t(c,{name:"pwa2"},{default:r(()=>[_]),_:1}),o(", и по умолчанию он отключен.")]),b,f(" more "),e("h2",m,[v,o(" Прямое включение "),t(d,{text:"Не рекомендуется",type:"warning"})]),S,e("p",null,[o("Для полных элементов конфигурации см. "),e("a",W,[o("Файл определения типа манифеста"),t(a)]),o(".")]),k,e("p",null,[o("Вы можете установить их по мере необходимости. Подробные параметры смотрите в "),t(i,{to:"/ru/config/plugins/pwa.html"},{default:r(()=>[o("Конфиг PWA")]),_:1}),o(".")]),w,P,e("ul",null,[e("li",null,[t(c,{name:"pwa2"},{default:r(()=>[o("Документация по плагину PWA")]),_:1})]),e("li",null,[e("a",x,[o("Google PWA"),t(a)])]),e("li",null,[e("a",q,[o("MDN PWA"),t(a)])]),e("li",null,[e("a",A,[o("Спецификация манифеста W3C"),t(a)])])]),C,e("section",L,[e("ol",M,[V,e("li",T,[H,N,j,e("div",B,[E,e("p",null,[o("Стандарты и спецификации манифеста смотрите в "),e("a",y,[o("Манифесте W3C"),t(a)])])]),z])])])])}const I=p(u,[["render",G],["__file","pwa.html.vue"]]);export{I as default};
