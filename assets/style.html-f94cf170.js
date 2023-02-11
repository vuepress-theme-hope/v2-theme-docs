import{a4 as e,_ as n,$ as o,a5 as c,a2 as s,a3 as a,a6 as t}from"./framework-bb5a5b49.js";const l={},i=s("p",null,[a("Вы можете изменить стили темы в "),s("code",null,".vuepress/styles"),a(", установив значения переменных в файлах "),s("code",null,"config.scss"),a(" и "),s("code",null,"palette.scss"),a(".")],-1),p=s("p",null,[a("Также вы можете добавить свои собственные стили в "),s("code",null,".vuepress/styles/index.scss"),a(".")],-1),d=t(`<h2 id="config-scss" tabindex="-1"><a class="header-anchor" href="#config-scss" aria-hidden="true">#</a> config.scss</h2><p><code>config.scss</code> используется для чистой конфигурации переменных, ниже перечислены поддерживаемые переменные и значения по умолчанию.</p><p>Отзывчивые контрольные точки:</p><ul><li><code>$pc</code></li><li><code>$laptop</code></li><li><code>$pad</code></li><li><code>$tablet</code></li><li><code>$mobile</code></li></ul><p>Блок кода:</p><ul><li><code>$code-light-theme</code>: тема блока кода в светлом режиме</li><li><code>$code-dark-theme</code>: тема блока кода в темном режиме</li></ul><p>Класс контента: <code>$content-class</code></p><p>Список цветов: <code>$colors</code></p><details class="hint-container details"><summary>Демо</summary><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// modify code theme in lightmode</span>
<span class="token property"><span class="token variable">$code-light-theme</span></span><span class="token punctuation">:</span> <span class="token string">&quot;coy&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// update pc breakpoint</span>
<span class="token property"><span class="token variable">$pc</span></span><span class="token punctuation">:</span> 1920px<span class="token punctuation">;</span>
</code></pre></div></details><details class="hint-container details"><summary>Значение по умолчанию</summary><div class="language-scss" data-ext="scss"><pre class="language-scss"><code>File <span class="token operator">not</span> found</code></pre></div></details><h2 id="palette-scss" tabindex="-1"><a class="header-anchor" href="#palette-scss" aria-hidden="true">#</a> palette.scss</h2><p><code>palette.scss</code> используется для вставки переменных CSS, ниже приведены поддерживаемые конфигурации и значения по умолчанию.</p><div class="hint-container info"><p class="hint-container-title">Инфо</p><p>Все переменные здесь (включая недавно добавленные переменные) будут преобразованы в формат kebab-case и введены как переменные CSS.</p><p>Например, <code>$theme-color</code> будет введено как <code>--theme-color</code>, а <code>$backgroundColor</code> будет введено как <code>--$background-color</code>.</p></div><h3 id="конфигурация-цвета" tabindex="-1"><a class="header-anchor" href="#конфигурация-цвета" aria-hidden="true">#</a> Конфигурация цвета</h3><p>Для всех цветов, если они одинаковы в светлом и темном режимах, вы можете установить их напрямую; в противном случае установите переменную Sass типа Map, чтобы задать значения цвета в светлом и темном режимах соответственно.</p><p>Доступные цветовые переменные:</p><ul><li><code>$theme-color</code>: цвет темы</li><li><code>$text-color</code>: цвет текста</li><li><code>$bg-color</code>: цвет фона</li><li><code>$bg-color-secondary</code>: более светлый цвет фона</li><li><code>$bg-color-tertiary</code>: более светлый цвет фона</li><li><code>$border-color</code>: цвет границы</li><li><code>$box-shadow</code>: использование цвета тени для элементов</li><li><code>$card-shadow</code>: использование цвета тени на картах</li></ul><details class="hint-container details"><summary>Демо</summary><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// set theme color to red</span>
<span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>

<span class="token comment">// setting border color with a darker value</span>
<span class="token property"><span class="token variable">$border-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #444<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><details class="hint-container details"><summary>Значение по умолчанию</summary><div class="language-scss" data-ext="scss"><pre class="language-scss"><code>File <span class="token operator">not</span> found</code></pre></div></details><h3 id="конфигурация-макета" tabindex="-1"><a class="header-anchor" href="#конфигурация-макета" aria-hidden="true">#</a> Конфигурация макета</h3><p>Доступные переменные макета:</p><p>Панель навигации:</p><ul><li><code>$navbar-height</code>: высота панели навигации</li><li><code>$navbar-horizontal-padding</code>: горизонтальное заполнение навигационной панели</li><li><code>$navbar-vertical-padding</code>: вертикальное заполнение навигационной панели</li><li><code>$navbar-mobile-height</code>: высота панели навигации на мобильных устройствах</li><li><code>$navbar-mobile-horizontal-padding</code>: горизонтальное заполнение панели навигации на мобильных устройствах</li><li><code>$navbar-mobile-vertical-padding</code>: вертикальное заполнение панели навигации на мобильных устройствах</li></ul><p>Боковая панель:</p><ul><li><code>$sidebar-width</code>: ширина боковой панели</li><li><code>$sidebar-mobile-width</code>: ширина боковой панели на мобильных устройствах</li></ul><p>Содержание:</p><ul><li><code>$content-width</code>: ширина основного содержимого</li><li><code>$home-page-width</code>: ширина содержимого главной страницы</li></ul><p>Шрифты:</p><ul><li><code>$font-family</code>: семейство шрифтов, используемое для обычного текста</li><li><code>$font-family-fancy:</code> семейство шрифтов, используемое в причудливых элементах</li></ul><p>Код:</p><ul><li><code>$font-family-code</code>: семейство шрифтов, используемое в коде</li><li><code>$line-numbers-width</code>: ширина номера строки в кодовых блоках</li></ul><p>Переход:</p><ul><li><code>$color-transition</code>: переход, используемый для цветов</li><li><code>$transform-transition</code>: переход, используемый при анимации преобразования</li></ul><details class="hint-container details"><summary>Демо</summary><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// update navbar height on mobile</span>
<span class="token property"><span class="token variable">$navbar-mobile-height</span></span><span class="token punctuation">:</span> 3.5rem<span class="token punctuation">;</span>

<span class="token comment">// Override default font</span>
<span class="token property"><span class="token variable">$font-family</span></span><span class="token punctuation">:</span> <span class="token string">&#39;Georgia, -apple-system, &quot;Nimbus Roman No9 L&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, sans-serif&#39;</span><span class="token punctuation">;</span>
</code></pre></div></details><details class="hint-container details"><summary>Значение по умолчанию</summary><div class="language-scss" data-ext="scss"><pre class="language-scss"><code>File <span class="token operator">not</span> found</code></pre></div></details><h2 id="index-scss" tabindex="-1"><a class="header-anchor" href="#index-scss" aria-hidden="true">#</a> index.scss</h2><p>Все, что заполняет это, будет проанализировано до стандартного CSS, а затем вставлено после стилей темы и плагинов.</p><p>Таким образом, вы можете добавить новые стили или переопределить стили здесь:</p><details class="hint-container details"><summary>Демо</summary><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// make site name in navbar italic</span>
<span class="token selector">.site-name </span><span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>`,39);function r(u,m){return n(),o("div",null,[i,p,c(" more "),d])}const k=e(l,[["render",r],["__file","style.html.vue"]]);export{k as default};
