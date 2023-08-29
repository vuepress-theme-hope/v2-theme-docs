import{_ as r,r as c,o as u,c as m,b as e,d as o,e as a,w as n,a as h,f as p}from"./app-dc65bed1.js";const k={},g=e("code",null,"{ custom: true }",-1),b=e("code",null,"@theme-hope",-1),v=e("h2",{id:"replace-components",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#replace-components","aria-hidden":"true"},"#"),o(" Replace Components")],-1),f=e("p",null,[o("You need to replace the component alias used in the theme with "),e("code",null,"alias"),o(" option in your own VuePress config file.")],-1),y=e("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.ts"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" getDirname"),e("span",{class:"token punctuation"},","),o(" path "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"@vuepress/utils"'),e("span",{class:"token punctuation"},";"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" defineUserConfig "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"vuepress"'),e("span",{class:"token punctuation"},";"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" hopeTheme "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"vuepress-theme-hope"'),e("span",{class:"token punctuation"},";"),o(`

`),e("span",{class:"token keyword"},"const"),o(" __dirname "),e("span",{class:"token operator"},"="),o(),e("span",{class:"token function"},"getDirname"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"import"),e("span",{class:"token punctuation"},"."),o("meta"),e("span",{class:"token punctuation"},"."),o("url"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),o(`

`),e("span",{class:"token keyword"},"export"),o(),e("span",{class:"token keyword"},"default"),o(),e("span",{class:"token function"},"defineUserConfig"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),o(`
  theme`),e("span",{class:"token operator"},":"),o(),e("span",{class:"token function"},"hopeTheme"),e("span",{class:"token punctuation"},"("),o(`
    `),e("span",{class:"token punctuation"},"{"),o(`
      `),e("span",{class:"token comment"},"// your theme config here"),o(`
    `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o(`
    `),e("span",{class:"token punctuation"},"{"),o(" custom"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token boolean"},"true"),o(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o(`
  `),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),o(`

  alias`),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"{"),o(`
    `),e("span",{class:"token comment"},"// Here you can redirect aliases to your own components"),o(`
    `),e("span",{class:"token comment"},"// For example, here we change the theme's home page component to HomePage.vue under user .vuepress/components"),o(`
    `),e("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),e("span",{class:"token operator"},":"),o(" path"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"resolve"),e("span",{class:"token punctuation"},"("),o(`
      __dirname`),e("span",{class:"token punctuation"},","),o(`
      `),e("span",{class:"token string"},'"./components/HomePage.vue"'),e("span",{class:"token punctuation"},","),o(`
    `),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),o(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),o(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.js"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" getDirname"),e("span",{class:"token punctuation"},","),o(" path "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"@vuepress/utils"'),e("span",{class:"token punctuation"},";"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" hopeTheme "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"vuepress-theme-hope"'),e("span",{class:"token punctuation"},";"),o(`

`),e("span",{class:"token keyword"},"const"),o(" __dirname "),e("span",{class:"token operator"},"="),o(),e("span",{class:"token function"},"getDirname"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"import"),e("span",{class:"token punctuation"},"."),o("meta"),e("span",{class:"token punctuation"},"."),o("url"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),o(`

`),e("span",{class:"token keyword"},"export"),o(),e("span",{class:"token keyword"},"default"),o(),e("span",{class:"token punctuation"},"{"),o(`
  `),e("span",{class:"token literal-property property"},"theme"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token function"},"hopeTheme"),e("span",{class:"token punctuation"},"("),o(`
    `),e("span",{class:"token punctuation"},"{"),o(`
      `),e("span",{class:"token comment"},"// your theme config here"),o(`
    `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o(`
    `),e("span",{class:"token punctuation"},"{"),o(),e("span",{class:"token literal-property property"},"custom"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token boolean"},"true"),o(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o(`
  `),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),o(`

  `),e("span",{class:"token literal-property property"},"alias"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"{"),o(`
    `),e("span",{class:"token comment"},"// Here you can redirect aliases to your own components"),o(`
    `),e("span",{class:"token comment"},"// For example, here we change the theme's home page component to HomePage.vue under user .vuepress/components"),o(`
    `),e("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),e("span",{class:"token operator"},":"),o(" path"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"resolve"),e("span",{class:"token punctuation"},"("),o(`
      __dirname`),e("span",{class:"token punctuation"},","),o(`
      `),e("span",{class:"token string"},'"./components/HomePage.vue"'),e("span",{class:"token punctuation"},","),o(`
    `),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),o(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),o(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=p('<p>Here are list of aliases.</p><details class="hint-container details"><summary>Theme components alias</summary><p>Components:</p><ul><li><code>@theme-hope/components/AutoLink</code>: basic link</li><li><code>@theme-hope/components/BreadCrumb</code>: breadcrumb</li><li><code>@theme-hope/components/CommonWrapper</code>: basic layout integration</li><li><code>@theme-hope/components/FeaturePanel</code>: homepage features</li><li><code>@theme-hope/components/HeroInfo</code>: homepage logo and introduction</li><li><code>@theme-hope/components/HighlightPanel</code>: homepage highlights</li><li><code>@theme-hope/components/HomePage</code>: home page</li><li><code>@theme-hope/components/HopeIcon</code>: icon</li><li><code>@theme-hope/components/MarkdownContent</code>: Markdown content</li><li><code>@theme-hope/components/NormalPage</code>: normal page</li><li><code>@theme-hope/components/PageFooter</code>: page footer</li><li><code>@theme-hope/components/PageNav</code>: page navigation</li><li><code>@theme-hope/components/PageTitle</code>: page title</li><li><code>@theme-hope/components/SkipLink</code>: skip to main content</li><li><code>@theme-hope/components/transitions/DropTransition</code>: drop transition component</li><li><code>@theme-hope/components/transitions/FadeSlideY</code>: fade slide y transition component</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/components/icons/index</code>: theme icons</li><li><code>@theme-hope/composables/index</code>: theme Composition API</li><li><code>@theme-hope/utils/index</code>: theme utility functions</li></ul></details><details class="hint-container details"><summary>Navbar component alias</summary><p>Components:</p><ul><li><code>@theme-hope/modules/navbar/components/DropdownLink</code>: dropdown list</li><li><code>@theme-hope/modules/navbar/components/LanguageDropdown</code>: language dropdown</li><li><code>@theme-hope/modules/navbar/components/NavActions</code>: navbar functions</li><li><code>@theme-hope/modules/navbar/components/Navbar</code>: navbar</li><li><code>@theme-hope/modules/navbar/components/NavbarBrand</code>: navbar brand information</li><li><code>@theme-hope/modules/navbar/components/NavbarLinks</code>: navbar links</li><li><code>@theme-hope/modules/navbar/components/NavScreen</code>: navigation screen in mobile view</li><li><code>@theme-hope/modules/navbar/components/NavScreenDropdown</code>: mobile view navbar dropdown menu</li><li><code>@theme-hope/modules/navbar/components/NavScreenLinks</code>: mobile view navbar links</li><li><code>@theme-hope/modules/navbar/components/RepoLink</code>: repository link</li><li><code>@theme-hope/modules/navbar/components/ToggleNavbarButton</code>: navbar toggle button</li><li><code>@theme-hope/modules/navbar/components/ToggleSidebarButton</code>: sidebar toggle button</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/modules/navbar/components/icons/index</code>: navbar icons</li><li><code>@theme-hope/modules/navbar/composables/index</code>: navbar Composition API</li></ul></details><details class="hint-container details"><summary>Sidebar component alias</summary><p>Components:</p><ul><li><code>@theme-hope/modules/sidebar/components/Sidebar</code>: sidebar</li><li><code>@theme-hope/modules/sidebar/components/SidebarChild</code>: sidebar link item</li><li><code>@theme-hope/modules/sidebar/components/SidebarGroup</code>: sidebar grouping links</li><li><code>@theme-hope/modules/sidebar/components/SidebarLinks</code>: sidebar links</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/modules/sidebar/composables/index</code>: sidebar Composition API</li><li><code>@theme-hope/modules/sidebar/utils/index</code>: sidebar utility functions</li></ul></details><details class="hint-container details"><summary>Info module component alias</summary><p>Components:</p><ul><li><code>@theme-hope/modules/info/components/AuthorInfo</code>: author information</li><li><code>@theme-hope/modules/info/components/CategoryInfo</code>: category information</li><li><code>@theme-hope/modules/info/components/DateInfo</code>: date information</li><li><code>@theme-hope/modules/info/components/OriginalInfo</code>: original mark</li><li><code>@theme-hope/modules/info/components/PageInfo</code>: page information</li><li><code>@theme-hope/modules/info/components/PageMeta</code>: page meta information</li><li><code>@theme-hope/modules/info/components/PageViewInfo</code>: page views information</li><li><code>@theme-hope/modules/info/components/ReadingTimeInfo</code>: reading time information</li><li><code>@theme-hope/modules/info/components/TagInfo</code>: tag information</li><li><code>@theme-hope/modules/info/components/TOC</code>: table of contents</li><li><code>@theme-hope/modules/info/components/WordInfo</code>: word information</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/modules/blog/components/icons</code>: info icons</li><li><code>@theme-hope/modules/blog/composables/index</code>: info Composables API</li><li><code>@theme-hope/modules/blog/utils/index</code>: info utility functions</li></ul></details><details class="hint-container details"><summary>Blog module component alias</summary><p>Components:</p><ul><li><code>@theme-hope/modules/blog/components/ArticleItem</code>: article item</li><li><code>@theme-hope/modules/blog/components/ArticleList</code>: article list</li><li><code>@theme-hope/modules/blog/components/ArticleType</code>: article type</li><li><code>@theme-hope/modules/blog/components/BloggerInfo</code>: blogger info</li><li><code>@theme-hope/modules/blog/components/BlogHero</code>: blog homepage logo and introduction</li><li><code>@theme-hope/modules/blog/components/BlogHome</code>: blog home page</li><li><code>@theme-hope/modules/blog/components/BlogWrapper</code>: common wrapper for blog page</li><li><code>@theme-hope/modules/blog/components/CategoryList</code>: Category list</li><li><code>@theme-hope/modules/blog/components/InfoList</code>: blog info list</li><li><code>@theme-hope/modules/blog/components/InfoPanel</code>: blog info panel</li><li><code>@theme-hope/modules/blog/components/Pagination</code>: pagination</li><li><code>@theme-hope/modules/blog/components/ProjectPanel</code>: blog homepage project panel</li><li><code>@theme-hope/modules/blog/components/SocialMedia</code>: social media links</li><li><code>@theme-hope/modules/blog/components/TagList</code>: tag list</li><li><code>@theme-hope/modules/blog/components/TimelineItems</code>: timeline items</li><li><code>@theme-hope/modules/blog/components/TimelineList</code>: timeline List</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/modules/blog/components/icons/index</code>: blog icons</li><li><code>@theme-hope/modules/blog/composables/index</code>: blog Composables API</li></ul></details><details class="hint-container details"><summary>Encryption module component alias</summary><p>Components:</p><ul><li><code>@theme-hope/modules/encrypt/components/GlobalEncrypt</code>: global encrypt wrapper</li><li><code>@theme-hope/modules/encrypt/components/LocalEncrypt</code>: local encrypt wrapper</li><li><code>@theme-hope/modules/encrypt/components/PasswordModal</code>: password input box</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/modules/encrypt/composables/index</code>: encryption Composition API</li><li><code>@theme-hope/modules/encrypt/utils/index</code>: encryption utility functions</li></ul></details><details class="hint-container details"><summary>Appearance module component alias</summary><ul><li><code>@theme-hope/modules/outlook/components/AppearanceMode</code>: theme mode</li><li><code>@theme-hope/modules/outlook/components/AppearanceSwitch</code>: theme appearance switch</li><li><code>@theme-hope/modules/outlook/components/OutlookButton</code>: appearance button</li><li><code>@theme-hope/modules/outlook/components/OutlookSettings</code>: appearance settings</li><li><code>@theme-hope/modules/outlook/components/ThemeColor</code>: theme color</li><li><code>@theme-hope/modules/outlook/components/ThemeColorPicker</code>: theme color picker</li><li><code>@theme-hope/modules/outlook/components/ToggleFullScreenButton</code>: fullscreen toggle button</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/modules/outlook/components/icons/index</code>: appearance icons</li><li><code>@theme-hope/modules/outlook/composables/index</code>: appearance Composition API</li></ul></details><h2 id="using-slots" tabindex="-1"><a class="header-anchor" href="#using-slots" aria-hidden="true">#</a> Using Slots</h2><p>Some components provide slots, in this case, you can directly import the original component when overriding the component, and pass in the content you need through the slot.</p>',10),x={class:"hint-container tip"},P=e("p",{class:"hint-container-title"},"Tips",-1),S=e("p",null,"For example, if your site has strong social attributes, and you want to display a comment box on the homepage, you can display it like this:",-1),C=e("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.ts"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" getDirname"),e("span",{class:"token punctuation"},","),o(" path "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"@vuepress/utils"'),e("span",{class:"token punctuation"},";"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" defineUserConfig "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"vuepress"'),e("span",{class:"token punctuation"},";"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" hopeTheme "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"vuepress-theme-hope"'),e("span",{class:"token punctuation"},";"),o(`

`),e("span",{class:"token keyword"},"const"),o(" __dirname "),e("span",{class:"token operator"},"="),o(),e("span",{class:"token function"},"getDirname"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"import"),e("span",{class:"token punctuation"},"."),o("meta"),e("span",{class:"token punctuation"},"."),o("url"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),o(`

`),e("span",{class:"token keyword"},"export"),o(),e("span",{class:"token keyword"},"default"),o(),e("span",{class:"token function"},"defineUserConfig"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),o(`
  theme`),e("span",{class:"token operator"},":"),o(),e("span",{class:"token function"},"hopeTheme"),e("span",{class:"token punctuation"},"("),o(`
    `),e("span",{class:"token punctuation"},"{"),o(`
      `),e("span",{class:"token comment"},"// your theme config here"),o(`
    `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o(`
    `),e("span",{class:"token punctuation"},"{"),o(" custom"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token boolean"},"true"),o(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o(`
  `),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),o(`

  alias`),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"{"),o(`
    `),e("span",{class:"token comment"},"// Here you can direct aliases to your own components"),o(`
    `),e("span",{class:"token comment"},"// For example, here we change the theme's home page component to HomePage.vue under user .vuepress/components"),o(`
    `),e("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),e("span",{class:"token operator"},":"),o(" path"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"resolve"),e("span",{class:"token punctuation"},"("),o(`
      __dirname`),e("span",{class:"token punctuation"},","),o(`
      `),e("span",{class:"token string"},'"./components/HomePage.vue"'),e("span",{class:"token punctuation"},","),o(`
    `),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),o(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),o(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),A=e("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[e("pre",{class:"language-vue"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),o("template")]),e("span",{class:"token punctuation"},">")]),o(`
  `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),o("HopeHomePage")]),e("span",{class:"token punctuation"},">")]),o(`
    `),e("span",{class:"token comment"},"<!-- Introduce comment component using bottom slot -->"),o(`
    `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),o("template")]),o(),e("span",{class:"token attr-name"},"#bottom"),e("span",{class:"token punctuation"},">")]),o(`
      `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),o("CommentService")]),o(),e("span",{class:"token punctuation"},"/>")]),o(`
    `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),o("template")]),e("span",{class:"token punctuation"},">")]),o(`
  `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),o("HopeHomePage")]),e("span",{class:"token punctuation"},">")]),o(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),o("template")]),e("span",{class:"token punctuation"},">")]),o(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),o("script")]),o(),e("span",{class:"token attr-name"},"setup"),o(),e("span",{class:"token attr-name"},"lang"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),o("ts"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[o(`
`),e("span",{class:"token keyword"},"import"),o(" HopeHomePage "),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"vuepress-theme-hope/components/HomePage.js"'),e("span",{class:"token punctuation"},";"),o(`
`)])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),o("script")]),e("span",{class:"token punctuation"},">")]),o(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),I=p("<p>Components that provide slots are as follows:</p><p><strong>Theme</strong>:</p><ul><li><p><code>AutoLink</code>: <code>default</code>, <code>before</code>, <code>after</code></p></li><li><p><code>CommonWrapper</code>: <code>default</code>, <code>navbarStartBefore</code>, <code>navbarStartAfter</code>, <code>navbarCenterBefore</code>, <code>navbarCenterAfter</code>, <code>navbarEndBefore</code>, <code>navbarEndAfter</code>, <code>navScreenTop</code>, <code>navScreenBottom</code>, <code>sidebar</code>, <code>sidebarTop</code>, <code>sidebarBottom</code></p></li><li><p><code>HeroInfo</code>: <code>heroImage</code>, <code>heroInfo</code>, <code>heroBg</code></p><ul><li><code>heroInfo</code> slot will receive <code>text</code> <code>tagline</code> and <code>isFullScreen</code> props.</li><li><code>heroImage</code> slot will receive <code>image</code> <code>imageDark</code> <code>heroStyle</code> <code>alt</code> and <code>isFullScreen</code> props.</li><li><code>heroBg</code> slot will receive <code>image</code> <code>bgStyle</code> and <code>isFullScreen</code> props.</li></ul></li><li><p><code>HomePage</code>: <code>top</code>, <code>center</code>, <code>bottom</code></p></li><li><p><code>NormalPage</code>: <code>top</code>, <code>contentBefore</code>, <code>contentAfter</code>, <code>bottom</code>, <code>tocBefore</code>, <code>tocAfter</code></p></li></ul><p><strong>Blog</strong>:</p><ul><li><p><code>ArticleItem</code>: <code>title</code>, <code>cover</code>, <code>info</code>, <code>excerpt</code></p><ul><li><code>title</code> slot will receive <code>title</code> <code>isEncrypted</code> and <code>type</code> props.</li><li><code>excerpt</code> slot will receive <code>excerpt</code> props.</li><li><code>cover</code> slot will receive <code>cover</code> props.</li><li><code>info</code> slot will receive <code>info</code> props.</li></ul></li><li><p><code>BlogHero</code>: <code>heroBg</code>, <code>heroInfo</code></p><ul><li><code>heroInfo</code> slot will receive <code>text</code> <code>tagline</code> <code>image</code> <code>imageDark</code> <code>heroStyle</code> <code>alt</code> and <code>isFullScreen</code> props.</li><li><code>heroBg</code> slot will receive <code>image</code> <code>bgStyle</code> and <code>isFullScreen</code> props.</li></ul></li></ul><p><strong>NavBar</strong>:</p><ul><li><code>DropdownLink</code>: <code>title</code></li><li><code>NavActions</code>: <code>before</code>, <code>after</code></li><li><code>Navbar</code>: <code>startBefore</code>, <code>startAfter</code>, <code>centerBefore</code>, <code>centerAfter</code>, <code>endBefore</code>, <code>endAfter</code></li><li><code>NavbarBrand</code>: <code>default</code></li><li><code>NavScreen</code>: <code>before</code>, <code>after</code></li><li><code>NavScreenDropdown</code>: <code>before</code>, <code>after</code></li></ul><p><strong>SideBar</strong>:</p><ul><li><code>Sidebar</code>: <code>top</code>, <code>default</code>, <code>bottom</code></li></ul><p><strong>TOC</strong>:</p><ul><li><code>TOC</code>: <code>before</code>, <code>after</code></li></ul>",11),B={class:"hint-container tip"},T=e("p",{class:"hint-container-title"},"Tips",-1),H={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/theme/src/client/",target:"_blank",rel:"noopener noreferrer"};function N(L,D){const l=c("RouterLink"),i=c("CodeTabs"),d=c("ExternalLinkIcon");return u(),m("div",null,[e("p",null,[o("When setting "),g,o(" in "),a(l,{to:"/config/theme/behavior.html"},{default:n(()=>[o("Behavior options")]),_:1}),o(", the theme will import components through "),b,o(" alias, so you can use it to replace any component of the theme.")]),h(" more "),v,f,a(i,{id:"10",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:n(({value:s,isActive:t})=>[o("TS")]),title1:n(({value:s,isActive:t})=>[o("JS")]),tab0:n(({value:s,isActive:t})=>[y]),tab1:n(({value:s,isActive:t})=>[w]),_:1}),_,e("div",x,[P,e("p",null,[o("For demo of common slots, please refer "),a(l,{to:"/demo/slot.html"},{default:n(()=>[o("Main Layout Slot demo")]),_:1}),o("。")])]),S,a(i,{id:"541",data:[{id:"config.ts"},{id:"HomePage.vue"}]},{title0:n(({value:s,isActive:t})=>[o("config.ts")]),title1:n(({value:s,isActive:t})=>[o("HomePage.vue")]),tab0:n(({value:s,isActive:t})=>[C]),tab1:n(({value:s,isActive:t})=>[A]),_:1},8,["data"]),I,e("div",B,[T,e("p",null,[o("For the corresponding location and function of each slot, please refer to "),e("a",H,[o("theme source code"),a(d)]),o(".")])])])}const M=r(k,[["render",N],["__file","replace.html.vue"]]);export{M as default};
