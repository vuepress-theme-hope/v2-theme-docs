import{a4 as i,_ as l,$ as t,a2 as a,a3 as e,a0 as o,a1 as c,a6 as n,k as r}from"./framework-bb5a5b49.js";const d={},p=n('<p>Вы можете установить информацию для страницы со следующими параметрами frontmatter.</p><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2><ul><li>Тип: <code>string</code></li><li>Обязательный: Нет</li></ul><p>Название текущей страницы. Первый h1 в Markdown по умолчанию.</p><h2 id="shorttitle" tabindex="-1"><a class="header-anchor" href="#shorttitle" aria-hidden="true">#</a> shortTitle</h2><ul><li>Тип: <code>string</code></li><li>Обязательный: Нет</li></ul><p>Краткое название текущей страницы. Будет использоваться как в навигационной панели, боковой панели и хлебных крошках.</p><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h2><ul><li>Тип: <code>string</code></li><li>Обязательный: Нет</li></ul><p>Описание текущей страницы.</p><h2 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h2>',11),u=a("li",null,[e("Тип: "),a("code",null,"string")],-1),h=a("li",null,"Обязательный: Нет",-1),m=n(`<p>Ссылка FontClass/Image иконки текущей страницы (рекомендуется).</p><h2 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h2><ul><li><p>Тип: <code>Author | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AuthorName</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Author name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author website
   */</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Author email
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Author</span> <span class="token operator">=</span> AuthorName <span class="token operator">|</span> AuthorName<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> AuthorInfo <span class="token operator">|</span> AuthorInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Обязательный: Нет</p></li></ul><p>Показать автора текущей страницы. Если вы не заполните его, вы вернетесь к автору по умолчанию.</p><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>При настройке автора по умолчанию в параметрах темы вы можете установить <code>false</code>, чтобы запретить отображение автора по умолчанию.</p></div><h2 id="isoriginal" tabindex="-1"><a class="header-anchor" href="#isoriginal" aria-hidden="true">#</a> isOriginal</h2><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>false</code></li></ul><p>Является ли текущая статья оригинальной.</p><h2 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> date</h2><ul><li>Тип: <code>DateString</code></li><li>Обязательный: Нет</li><li>Формат: <code>YYYY-MM-DD</code> или <code>YYYY-MM-DD hh:mm:ss</code></li></ul><p>Устанавливает время записи текущей страницы.</p><h2 id="category" tabindex="-1"><a class="header-anchor" href="#category" aria-hidden="true">#</a> category</h2><ul><li>Тип: <code>string | string[]</code></li><li>Обязательный: Нет</li></ul><p>Устанавливает категорию текущей страницы.</p><h2 id="tag" tabindex="-1"><a class="header-anchor" href="#tag" aria-hidden="true">#</a> tag</h2><ul><li>Тип: <code>string | string []</code></li><li>Обязательный: Нет</li></ul><p>Устанавливает метку текущей страницы.</p><h2 id="sticky" tabindex="-1"><a class="header-anchor" href="#sticky" aria-hidden="true">#</a> sticky</h2><ul><li>Тип: <code>boolean | number</code></li><li>По умолчанию: <code>false</code></li></ul><p>Устанавливает, будет ли текущая статья закреплена в списке. При заполнении числом большие идут перед меньшими.</p><h2 id="star" tabindex="-1"><a class="header-anchor" href="#star" aria-hidden="true">#</a> star</h2><ul><li>Тип: <code>boolean | number</code></li><li>По умолчанию: <code>false</code></li></ul><p>Устанавливает, будет ли текущая статья закреплена в списке статей в теме блога. При заполнении числом большие идут перед меньшими.</p><h2 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> article</h2><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>true</code></li></ul><p>Добавлять ли статью в список статей.</p><h2 id="timeline" tabindex="-1"><a class="header-anchor" href="#timeline" aria-hidden="true">#</a> timeline</h2><ul><li>Тип: <code>boolean</code></li><li>По умолчанию: <code>true</code></li></ul><p>Добавлять ли статью в список временной шкалы.</p><h2 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h2><ul><li>Тип: <code>string</code></li><li>Обязательный: Нет</li></ul><p>Изображение текущей страницы требует абсолютного пути.</p>`,32);function b(v,k){const s=r("RouterLink");return l(),t("div",null,[p,a("ul",null,[u,h,a("li",null,[e("Ссылка: "),a("ul",null,[a("li",null,[o(s,{to:"/ru/guide/interface/icon.html"},{default:c(()=>[e("Руководство → Поддержка иконок")]),_:1})])])])]),m])}const g=i(d,[["render",b],["__file","info.html.vue"]]);export{g as default};
