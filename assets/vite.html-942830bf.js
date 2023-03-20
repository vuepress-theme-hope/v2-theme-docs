import{a3 as o,Z as p,_ as r,a4 as d,$ as u,a0 as e,a5 as a,D as h,a1 as s,a2 as n}from"./framework-32163d8a.js";const v={},k=a('<h2 id="медленная-холодная-загрузка-с-помощью-vite" tabindex="-1"><a class="header-anchor" href="#медленная-холодная-загрузка-с-помощью-vite" aria-hidden="true">#</a> Медленная холодная загрузка с помощью Vite</h2><p>Это ожидаемое поведение. Мы добавляем больше функций, что означает, что у нас есть от 2 до 8 строк кода по сравнению с <code>@vuepress/theme-default</code> в зависимости от используемых вами функций. Таким образом, ожидается, что транспиляция и отправка кода темы и плагинов в браузер увеличится с <code>0.8s - 2s</code> в <code>@vuepress/theme-default</code> до <code>3s - 10s</code> (диапазон зависит от производительности машины).</p><div class="hint-container info"><p class="hint-container-title">Бремя тряски деревьев</p><p>Чтобы полностью поддерживать Tree-shaking в функциональности и стилях, темы и плагины выполняют дополнительную работу, включая модульность, частичное внедрение, создание временных файлов и т. д. Эти дополнительные функции обеспечивают удаление неиспользуемого кода функции на этапе сборки, но также означает, что необходимо выполнить больше логики и загрузить больше фрагментированных файлов в режиме разработки.</p><p>Чувак, ты не можешь рассчитывать на полную поддержку древовидной структуры и при этом быть очень быстрым при запуске сервера разработки, они противоречивы.</p></div><div class="hint-container info"><p class="hint-container-title">система стилей</p><p>Чтобы стили компонентов были привязаны к компоненту, мы разделили стили по иерархии компонентов и импортировали их в компоненты, что сильно замедлило скорость.</p><ul><li><p><code>@vuepress/theme-default</code> помещает все стили вместе в папку <code>styles</code> и полностью их импортирует, так что <code>sass</code> нужно будет скомпилировать только один раз, а vite нужно будет отправить только 1 дополнительный веб-запрос. Вот почему это быстро.</p><p>Но это позволит отвязать стиль от компонентов, и они все равно будут внедрены. Таким образом, когда вы переопределяете компонент или макет, вам нужно переопределять старые стили для создания нужных стилей.</p></li><li><p><code>vuepress-theme-hope</code> связывает стили с компонентами, но это означает, что <code>sass</code> должен компилировать стили для каждого компонента, а vite должен отправлять дополнительный запрос для каждого компонента. Из-за того, что <code>vuepress-theme-hope</code> имеет от 2 до 6 компонентов (в зависимости от того, активируете ли вы функции блога или нет), по сравнению с <code>@vuepress/theme-default</code> это займет дополнительное время <code>2.4s - 4s</code> для этого.</p><p>Но таким образом вы можете легко переопределить компонент вместе с его стилями.</p></li></ul><p>Таким образом, по вышеуказанным причинам у <code>vuepress-theme-hope</code> будет в среднем в 4 раза больше кода и в 10 раз больше запросов по сравнению с <code>@vuepress/theme-default</code>, поэтому время увеличивается с <code>2s</code> до <code>10s</code> разумно и ожидаемо.</p></div><div class="hint-container tip"><p class="hint-container-title">Не влияет на HMR и скорость онлайн</p><p>Не волнуйтесь, вышеуказанные дополнительные накладные расходы в основном возникают при загрузке кода. Из-за большого размера неоптимизированного кода в среде разработки соответствующее время после обновления также увеличится.</p><ul><li><p>Эти дополнительные накладные расходы не влияют на HMR, поэтому при редактировании файла Markdown ответ HMR страницы может оставаться на уровне 100 мс.</p></li><li><p>Неиспользуемый код будет удален на этапе сборки при проектировании скважины, поэтому производственная среда обычно добавляет только дополнительные 200–500 КБ размера в запись JS по сравнению с темой по умолчанию и около 100 мс дополнительного времени выполнения скрипта, поэтому влияние онлайн очень маленький.</p></li></ul></div><h2 id="import-в-css-не-работает" tabindex="-1"><a class="header-anchor" href="#import-в-css-не-работает" aria-hidden="true">#</a> <code>@import()</code> в CSS не работает</h2><p>В VuePress2 импорт веб-CSS через <code>@import</code> в <code>index.scss</code> не имеет никакого эффекта. Возможно, вам придется вручную импортировать его в параметр <code>head</code> вашей конфигурации VuePress.</p>',7),m=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{ts:"",class:"language-typescript"},[s("code",null,[s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" defineUserConfig "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token function"},"defineUserConfig"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
  head`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
    `),s("span",{class:"token punctuation"},"["),n(`
      `),s("span",{class:"token string"},'"link"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token punctuation"},"{"),n(`
        rel`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"stylesheet"'),s("span",{class:"token punctuation"},","),n(`
        href`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"YOUR_CSS_URL"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`

  `),s("span",{class:"token comment"},"// ..."),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{js:"",class:"language-javascript"},[s("code",null,[s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token literal-property property"},"head"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
    `),s("span",{class:"token punctuation"},"["),n(`
      `),s("span",{class:"token string"},'"link"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token punctuation"},"{"),n(`
        `),s("span",{class:"token literal-property property"},"rel"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"stylesheet"'),s("span",{class:"token punctuation"},","),n(`
        `),s("span",{class:"token literal-property property"},"href"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"YOUR_CSS_URL"'),s("span",{class:"token punctuation"},","),n(`
      `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`

  `),s("span",{class:"token comment"},"// ..."),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),b=a('<div class="hint-container info"><p class="hint-container-title">Причина</p><ol><li>CSS, импортированный через <code>@import</code> в Sass, будет скомпилирован в стандартный синтаксис CSS <code>@import</code>.</li><li>Синтаксис CSS <code>@import</code> работает только в верхней части файла css.</li><li>Чтобы придать пользовательским стилям более высокий приоритет, мы будем импортировать пользовательские стили после стилей темы и плагинов.</li><li>Во время сборки приложения VuePress2 все стили сжимаются в один файл CSS.</li></ol><p>Вышеприведенное приводит к тому, что пользовательский импорт CSS <code>@import</code> в Sass появляется в середине окончательного файла CSS и, следовательно, недействителен.</p><p>Тема по умолчанию также имеет ту же проблему, и это не может быть исправлено на стороне темы.</p></div>',1);function f(_,S){const t=h("CodeTabs");return p(),r("div",null,[k,d(` \`\`\`js 5-13}
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  head: [
    [
      "link",
      {
        rel: "preload",
        as: "style",
        onload: 'this.onload=null;this.rel="stylesheet"',
        href: "//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",
      },
    ],
  ],

  // ...
});
\`\`\` `),u(t,{id:"64",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:i,value:l,isActive:c})=>[m]),tab1:e(({title:i,value:l,isActive:c})=>[g]),_:1}),b])}const C=o(v,[["render",f],["__file","vite.html.vue"]]);export{C as default};
