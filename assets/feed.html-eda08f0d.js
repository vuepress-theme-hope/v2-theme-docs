import{a4 as c,_ as d,$ as r,a2 as e,a3 as a,a0 as n,a1 as o,a6 as s,k as i}from"./framework-bb5a5b49.js";const p={},h={id:"введение",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#введение","aria-hidden":"true"},"#",-1),f=s('<p><code>vuepress-theme-hope</code> обеспечивает поддержку генерации каналов через плагин <code>vuepress-plugin-feed2</code>.</p><p><code>vuepress-theme-hope</code> передает <code>plugins.feed</code> в параметрах темы в качестве параметров плагина для плагина <code>vuepress-plugin-feed2</code>.</p><p>Плагин <code>vuepress-plugin-feed2</code> может генерировать для вас файлы каналов в следующих трех форматах:</p><ul><li>Atom 1.0</li><li>JSON 1.1</li><li>RSS 2.0</li></ul><p>Включите плагин, установив для <code>atom</code>, <code>json</code> или <code>rss</code> значение <code>true</code> в параметрах плагина в соответствии с форматом, который вы хотите сгенерировать.</p><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Atom и JSON предназначены для обеспечения дополнительной адаптации программного обеспечения Feed.</p><p>Если возможно, используйте RSS в качестве первого выбора.</p></div>',6),m={class:"hint-container info"},_=e("p",{class:"hint-container-title"},"Инфо",-1),g=s(`<h2 id="опции-плагина" tabindex="-1"><a class="header-anchor" href="#опции-плагина" aria-hidden="true">#</a> Опции плагина</h2><h3 id="atom" tabindex="-1"><a class="header-anchor" href="#atom" aria-hidden="true">#</a> atom</h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Выводить ли файлы синтаксиса Atom.</p><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Выводить ли файлы синтаксиса JSON.</p><h3 id="rss" tabindex="-1"><a class="header-anchor" href="#rss" aria-hidden="true">#</a> rss</h3><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Выводить ли файлы синтаксиса RSS.</p><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3><ul><li>Тип: <code>string</code></li></ul><p>Большое изображение/иконка ленты, вероятно, используемая в качестве баннера.</p><h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h3><ul><li>Тип: <code>string</code></li></ul><p>Маленькая иконка ленты, вероятно, используемая в качестве фавиконки.</p><h3 id="count" tabindex="-1"><a class="header-anchor" href="#count" aria-hidden="true">#</a> count</h3><ul><li>Тип: <code>number</code></li><li>По умолчанию: <code>1000</code></li></ul><p>Установите максимальное количество элементов в ленте. После того, как все страницы отсортированы, будут перехвачены первые элементы <code>count</code>.</p><p>Если на вашем сайте много статей, вы можете рассмотреть этот вариант, чтобы уменьшить размер файла потока.</p><h3 id="removedelements" tabindex="-1"><a class="header-anchor" href="#removedelements" aria-hidden="true">#</a> removedElements</h3><ul><li>Тип: <code>string[]</code></li><li>По умолчанию: <code>[&quot;ExternalLinkIcon&quot;]</code></li></ul><p>Пользовательский элемент или компонент, который следует удалить из потока.</p><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h3><ul><li><p>Тип: <code>(page: Page)=&gt; boolean</code></p></li><li><p>По умолчанию:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token punctuation">{</span> frontmatter<span class="token punctuation">,</span> filePathRelative <span class="token punctuation">}</span><span class="token operator">:</span> Page<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span>
  <span class="token operator">!</span><span class="token punctuation">(</span>
    frontmatter<span class="token punctuation">.</span>home <span class="token operator">||</span>
    <span class="token operator">!</span>filePathRelative <span class="token operator">||</span>
    frontmatter<span class="token punctuation">.</span>article <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token operator">||</span>
    frontmatter<span class="token punctuation">.</span>feed <span class="token operator">===</span> <span class="token boolean">false</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><p>Пользовательская функция фильтра, используемая для фильтрации элементов потока.</p><h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h3><ul><li>Тип: <code>(pageA: Page, pageB: Page)=&gt; number</code></li></ul><p>Пользовательская функция сортировки, используемая для сортировки элементов потока.</p><div class="hint-container warning"><p class="hint-container-title">Примечание</p><p>Мы настоятельно рекомендуем вам установить этот параметр, иначе порядок элементов в потоке потока полностью определяется порядком страниц, выводимых VuePress.</p><p>Вы можете сортировать страницы на сайте в соответствии с вашими потребностями.</p></div><h3 id="channel" tabindex="-1"><a class="header-anchor" href="#channel" aria-hidden="true">#</a> channel</h3><p>Параметр <code>channel</code> используется для настройки <em>Каналов подачи</em>.</p>`,32),k=s('<h3 id="atomoutputfilename" tabindex="-1"><a class="header-anchor" href="#atomoutputfilename" aria-hidden="true">#</a> atomOutputFilename</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>atom.xml</code></li></ul><p>Имя выходного файла синтаксиса Atom относительно выходного каталога.</p><h3 id="jsonoutputfilename" tabindex="-1"><a class="header-anchor" href="#jsonoutputfilename" aria-hidden="true">#</a> jsonOutputFilename</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>feed.json</code></li></ul><p>Имя выходного файла синтаксиса JSON относительно выходного каталога.</p><h3 id="rssoutputfilename" tabindex="-1"><a class="header-anchor" href="#rssoutputfilename" aria-hidden="true">#</a> rssOutputFilename</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>rss.xml</code></li></ul><p>Имя выходного файла синтаксиса RSS относительно выходного каталога.</p><h3 id="getter" tabindex="-1"><a class="header-anchor" href="#getter" aria-hidden="true">#</a> getter</h3><p>Контроллер генерации потока.</p><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Плагин предоставляет разумный геттер по умолчанию, если вы хотите получить полный контроль над генерацией ленты, вы можете установить это поле.</p></div>',12),b=e("h3",{id:"locales",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#locales","aria-hidden":"true"},"#"),a(" locales")],-1),x=e("ul",null,[e("li",null,[a("Тип: "),e("code",null,"Record<string, BaseFeedOptions>")]),e("li",null,"Обязательный: Нет")],-1),v=e("p",null,"Вы можете использовать его для определенных параметров для каждой локали.",-1),S=e("p",null,[a("Поддерживаются любые указанные выше параметры, кроме "),e("code",null,"hostname"),a(".")],-1);function j(P,N){const l=i("Badge"),t=i("ProjectLink");return d(),r("div",null,[e("h2",h,[u,a(" Введение "),n(l,{text:"включено по умолчанию"})]),f,e("div",m,[_,e("p",null,[a("Подробнее смотрите в "),n(t,{name:"feed2",path:"/config/"},{default:o(()=>[a("документации плагина feed2")]),_:1}),a(".")])]),g,e("p",null,[a("Доступные параметры см. в разделе "),n(t,{name:"feed2",path:"/config/channel.html"},{default:o(()=>[a("Конфигурация → Канал")]),_:1}),a(".")]),k,e("p",null,[a("Подробности смотрите в разделе "),n(t,{name:"feed2",path:"/config/getter.html"},{default:o(()=>[a("Получатель потока")]),_:1}),a(".")]),b,x,v,S])}const B=c(p,[["render",j],["__file","feed.html.vue"]]);export{B as default};
