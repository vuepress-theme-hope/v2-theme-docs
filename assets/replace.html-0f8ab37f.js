import{a4 as u,_ as r,$ as m,a5 as h,a0 as c,a1 as n,a2 as e,a3 as o,a6 as p,k as i}from"./framework-bb5a5b49.js";const k={},b=e("p",null,[o("The theme imports components through "),e("code",null,"alias"),o(", so you can use it to replace any component of the theme.")],-1),g=e("h2",{id:"replace-components",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#replace-components","aria-hidden":"true"},"#"),o(" Replace Components")],-1),v=e("p",null,[o("You need to replace the component alias used in the theme with "),e("code",null,"alias"),o(" option in your own VuePress config file.")],-1),f=e("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.ts"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" getDirname"),e("span",{class:"token punctuation"},","),o(" path "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"@vuepress/utils"'),e("span",{class:"token punctuation"},";"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" defineUserConfig "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"vuepress"'),e("span",{class:"token punctuation"},";"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" hopeTheme "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"vuepress-theme-hope"'),e("span",{class:"token punctuation"},";"),o(`

`),e("span",{class:"token keyword"},"const"),o(" __dirname "),e("span",{class:"token operator"},"="),o(),e("span",{class:"token function"},"getDirname"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"import"),e("span",{class:"token punctuation"},"."),o("meta"),e("span",{class:"token punctuation"},"."),o("url"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),o(`

`),e("span",{class:"token keyword"},"export"),o(),e("span",{class:"token keyword"},"default"),o(),e("span",{class:"token function"},"defineUserConfig"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),o(`
  theme`),e("span",{class:"token operator"},":"),o(),e("span",{class:"token function"},"hopeTheme"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),o(`
    `),e("span",{class:"token comment"},"// your theme config here"),o(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),o(`

  alias`),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"{"),o(`
    `),e("span",{class:"token comment"},"// Here you can redirect aliases to your own components"),o(`
    `),e("span",{class:"token comment"},"// For example, here we change the theme’s home page component to HomePage.vue under user .vuepress/components"),o(`
    `),e("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),e("span",{class:"token operator"},":"),o(" path"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"resolve"),e("span",{class:"token punctuation"},"("),o(`
      __dirname`),e("span",{class:"token punctuation"},","),o(`
      `),e("span",{class:"token string"},'"./components/HomePage.vue"'),o(`
    `),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),o(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),o(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.js"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" getDirname"),e("span",{class:"token punctuation"},","),o(" path "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"@vuepress/utils"'),e("span",{class:"token punctuation"},";"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" hopeTheme "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"vuepress-theme-hope"'),e("span",{class:"token punctuation"},";"),o(`

`),e("span",{class:"token keyword"},"const"),o(" __dirname "),e("span",{class:"token operator"},"="),o(),e("span",{class:"token function"},"getDirname"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"import"),e("span",{class:"token punctuation"},"."),o("meta"),e("span",{class:"token punctuation"},"."),o("url"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),o(`

`),e("span",{class:"token keyword"},"export"),o(),e("span",{class:"token keyword"},"default"),o(),e("span",{class:"token punctuation"},"{"),o(`
  `),e("span",{class:"token literal-property property"},"theme"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token function"},"hopeTheme"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),o(`
    `),e("span",{class:"token comment"},"// your theme config here"),o(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),o(`

  `),e("span",{class:"token literal-property property"},"alias"),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"{"),o(`
    `),e("span",{class:"token comment"},"// Here you can redirect aliases to your own components"),o(`
    `),e("span",{class:"token comment"},"// For example, here we change the theme’s home page component to HomePage.vue under user .vuepress/components"),o(`
    `),e("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),e("span",{class:"token operator"},":"),o(" path"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"resolve"),e("span",{class:"token punctuation"},"("),o(`
      __dirname`),e("span",{class:"token punctuation"},","),o(`
      `),e("span",{class:"token string"},'"./components/HomePage.vue"'),o(`
    `),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),o(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),o(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=p('<p>Here are list of aliases.</p><details class="hint-container details"><summary>Theme components alias</summary><p>Components:</p><ul><li><code>@theme-hope/components/AutoLink</code>: basic link</li><li><code>@theme-hope/components/BreadCrumb</code>: breadcrumb</li><li><code>@theme-hope/components/CommonWrapper</code>: basic layout integration</li><li><code>@theme-hope/components/FeaturePanel</code>: homepage features</li><li><code>@theme-hope/components/HeroInfo</code>: homepage logo and introduction</li><li><code>@theme-hope/components/HomePage</code>: home page</li><li><code>@theme-hope/components/Icon</code>: icon</li><li><code>@theme-hope/components/MarkdownContent</code>: Markdown content</li><li><code>@theme-hope/components/NormalPage</code>: normal page</li><li><code>@theme-hope/components/PageFooter</code>: page footer</li><li><code>@theme-hope/components/PageNav</code>: page navigation</li><li><code>@theme-hope/components/PageTitle</code>: page title</li><li><code>@theme-hope/components/SkipLink</code>: skip to main content</li><li><code>@theme-hope/components/transitions/DropTransition</code>: drop transition component</li><li><code>@theme-hope/components/transitions/FadeSlideY</code>: fade slide y transition component</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/components/icons/index</code>: theme icons</li><li><code>@theme-hope/composables/index</code>: theme Composition API</li><li><code>@theme-hope/utils/index</code>: theme utility functions</li></ul></details><details class="hint-container details"><summary>Navbar component alias</summary><p>Components:</p><ul><li><code>@theme-hope/modules/navbar/components/DropdownLink</code>: dropdown list</li><li><code>@theme-hope/modules/navbar/components/LanguageDropdown</code>: language dropdown</li><li><code>@theme-hope/modules/navbar/components/NavActions</code>: navbar functions</li><li><code>@theme-hope/modules/navbar/components/Navbar</code>: navbar</li><li><code>@theme-hope/modules/navbar/components/NavbarBrand</code>: navbar brand information</li><li><code>@theme-hope/modules/navbar/components/NavbarLinks</code>: navbar links</li><li><code>@theme-hope/modules/navbar/components/NavScreen</code>: navigation screen in mobile view</li><li><code>@theme-hope/modules/navbar/components/NavScreenDropdown</code>: mobile view navbar dropdown menu</li><li><code>@theme-hope/modules/navbar/components/NavScreenLinks</code>: mobile view navbar links</li><li><code>@theme-hope/modules/navbar/components/RepoLink</code>: repository link</li><li><code>@theme-hope/modules/navbar/components/ToggleNavbarButton</code>: navbar toggle button</li><li><code>@theme-hope/modules/navbar/components/ToggleSidebarButton</code>: sidebar toggle button</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/modules/navbar/components/icons/index</code>: navbar icons</li><li><code>@theme-hope/modules/navbar/composables/index</code>: navbar Composition API</li></ul></details><details class="hint-container details"><summary>Sidebar component alias</summary><p>Components:</p><ul><li><code>@theme-hope/modules/sidebar/components/Sidebar</code>: sidebar</li><li><code>@theme-hope/modules/sidebar/components/SidebarChild</code>: sidebar link item</li><li><code>@theme-hope/modules/sidebar/components/SidebarGroup</code>: sidebar grouping links</li><li><code>@theme-hope/modules/sidebar/components/SidebarLinks</code>: sidebar links</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/modules/sidebar/composables/index</code>: sidebar Composition API</li><li><code>@theme-hope/modules/sidebar/utils/index</code>: sidebar utility functions</li></ul></details><details class="hint-container details"><summary>Info module component alias</summary><p>Components:</p><ul><li><code>@theme-hope/modules/info/components/AuthorInfo</code>: author information</li><li><code>@theme-hope/modules/info/components/CategoryInfo</code>: category information</li><li><code>@theme-hope/modules/info/components/DateInfo</code>: date information</li><li><code>@theme-hope/modules/info/components/OriginalInfo</code>: original mark</li><li><code>@theme-hope/modules/info/components/PageInfo</code>: page information</li><li><code>@theme-hope/modules/info/components/PageMeta</code>: page meta information</li><li><code>@theme-hope/modules/info/components/PageViewInfo</code>: page views information</li><li><code>@theme-hope/modules/info/components/ReadingTimeInfo</code>: reading time information</li><li><code>@theme-hope/modules/info/components/TagInfo</code>: tag information</li><li><code>@theme-hope/modules/info/components/TOC</code>: table of contents</li><li><code>@theme-hope/modules/info/components/WordInfo</code>: word information</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/modules/blog/components/icons</code>: info icons</li><li><code>@theme-hope/modules/blog/composables/index</code>: info Composables API</li><li><code>@theme-hope/modules/blog/utils/index</code>: info utility functions</li></ul></details><details class="hint-container details"><summary>Blog module component alias</summary><p>Components:</p><ul><li><code>@theme-hope/modules/blog/components/ArticleItem</code>: article item</li><li><code>@theme-hope/modules/blog/components/ArticleList</code>: article list</li><li><code>@theme-hope/modules/blog/components/ArticleType</code>: article type</li><li><code>@theme-hope/modules/blog/components/BloggerInfo</code>: blogger info</li><li><code>@theme-hope/modules/blog/components/BlogHero</code>: blog homepage logo and introduction</li><li><code>@theme-hope/modules/blog/components/BlogHome</code>: blog home page</li><li><code>@theme-hope/modules/blog/components/BlogWrapper</code>: common wrapper for blog page</li><li><code>@theme-hope/modules/blog/components/CategoryList</code>: Category list</li><li><code>@theme-hope/modules/blog/components/InfoList</code>: blog info list</li><li><code>@theme-hope/modules/blog/components/InfoPanel</code>: blog info panel</li><li><code>@theme-hope/modules/blog/components/Pagination</code>: pagination</li><li><code>@theme-hope/modules/blog/components/ProjectPanel</code>: blog homepage project panel</li><li><code>@theme-hope/modules/blog/components/SocialMedia</code>: social media links</li><li><code>@theme-hope/modules/blog/components/TagList</code>: tag list</li><li><code>@theme-hope/modules/blog/components/TimelineItems</code>: timeline items</li><li><code>@theme-hope/modules/blog/components/TimelineList</code>: timeline List</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/modules/blog/components/icons/index</code>: blog icons</li><li><code>@theme-hope/modules/blog/composables/index</code>: blog Composables API</li></ul></details><details class="hint-container details"><summary>Encryption module component alias</summary><p>Components:</p><ul><li><code>@theme-hope/modules/encrypt/components/GlobalEncrypt</code>: global encrypt wrapper</li><li><code>@theme-hope/modules/encrypt/components/LocalEncrypt</code>: local encrypt wrapper</li><li><code>@theme-hope/modules/encrypt/components/PasswordModal</code>: password input box</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/modules/encrypt/composables/index</code>: encryption Composition API</li><li><code>@theme-hope/modules/encrypt/utils/index</code>: encryption utility functions</li></ul></details><details class="hint-container details"><summary>Appearance module component alias</summary><ul><li><code>@theme-hope/modules/outlook/components/AppearanceMode</code>: theme mode</li><li><code>@theme-hope/modules/outlook/components/AppearanceSwitch</code>: theme appearance switch</li><li><code>@theme-hope/modules/outlook/components/OutlookButton</code>: appearance button</li><li><code>@theme-hope/modules/outlook/components/OutlookSettings</code>: appearance settings</li><li><code>@theme-hope/modules/outlook/components/ThemeColor</code>: theme color</li><li><code>@theme-hope/modules/outlook/components/ThemeColorPicker</code>: theme color picker</li><li><code>@theme-hope/modules/outlook/components/ToggleFullScreenButton</code>: fullscreen toggle button</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/modules/outlook/components/icons/index</code>: appearance icons</li><li><code>@theme-hope/modules/outlook/composables/index</code>: appearance Composition API</li></ul></details><h2 id="using-slots" tabindex="-1"><a class="header-anchor" href="#using-slots" aria-hidden="true">#</a> Using Slots</h2><p>Some components provide slots, in this case, you can directly import the original component when overriding the component, and pass in the content you need through the slot.</p><p>For example, if your site has strong social attributes, and you want to display a comment box on the homepage, you can display it like this:</p>',11),_=e("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token comment"},"// .vuepress/config.ts"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" getDirname"),e("span",{class:"token punctuation"},","),o(" path "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"@vuepress/utils"'),e("span",{class:"token punctuation"},";"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" defineUserConfig "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"vuepress"'),e("span",{class:"token punctuation"},";"),o(`
`),e("span",{class:"token keyword"},"import"),o(),e("span",{class:"token punctuation"},"{"),o(" hopeTheme "),e("span",{class:"token punctuation"},"}"),o(),e("span",{class:"token keyword"},"from"),o(),e("span",{class:"token string"},'"vuepress-theme-hope"'),e("span",{class:"token punctuation"},";"),o(`

`),e("span",{class:"token keyword"},"const"),o(" __dirname "),e("span",{class:"token operator"},"="),o(),e("span",{class:"token function"},"getDirname"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"import"),e("span",{class:"token punctuation"},"."),o("meta"),e("span",{class:"token punctuation"},"."),o("url"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),o(`

`),e("span",{class:"token keyword"},"export"),o(),e("span",{class:"token keyword"},"default"),o(),e("span",{class:"token function"},"defineUserConfig"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),o(`
  theme`),e("span",{class:"token operator"},":"),o(),e("span",{class:"token function"},"hopeTheme"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),o(`
    `),e("span",{class:"token comment"},"// your theme config here"),o(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),o(`

  alias`),e("span",{class:"token operator"},":"),o(),e("span",{class:"token punctuation"},"{"),o(`
    `),e("span",{class:"token comment"},"// Here you can direct aliases to your own components"),o(`
    `),e("span",{class:"token comment"},"// For example, here we change the theme’s home page component to HomePage.vue under user .vuepress/components"),o(`
    `),e("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),e("span",{class:"token operator"},":"),o(" path"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"resolve"),e("span",{class:"token punctuation"},"("),o(`
      __dirname`),e("span",{class:"token punctuation"},","),o(`
      `),e("span",{class:"token string"},'"./components/HomePage.vue"'),o(`
    `),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),o(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),o(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),o(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),P=e("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[e("pre",{class:"language-vue"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),o("template")]),e("span",{class:"token punctuation"},">")]),o(`
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
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=p("<p>Components that provide slots are as follows:</p><p><strong>theme</strong>:</p><ul><li><code>AutoLink</code>: <code>default</code>, <code>before</code>, <code>after</code></li><li><code>CommonWrapper</code>: <code>default</code>, <code>navbarStartBefore</code>, <code>navbarStartAfter</code>, <code>navbarCenterBefore</code>, <code>navbarCenterAfter</code>, <code>navbarEndBegin</code>, <code>navbarEndAfter</code>, <code>navScreenTop</code>, <code>navScreenBottom</code>, <code>sidebar</code>, <code>sidebarTop</code>, <code>sidebarBottom</code></li><li><code>HeroInfo</code>: <code>heroImage</code>, <code>heroInfo</code></li><li><code>HomePage</code>: <code>top</code>, <code>center</code>, <code>bottom</code></li><li><code>NormalPage</code>: <code>top</code>, <code>contentBefore</code>, <code>contentAfter</code>, <code>bottom</code></li></ul><p><strong>Navigation Bar</strong>:</p><ul><li><code>DropdownLink</code>: <code>title</code></li><li><code>NavActions</code>: <code>before</code>, <code>after</code></li><li><code>Navbar</code>: <code>startBefore</code>, <code>startAfter</code>, <code>centerBefore</code>, <code>centerAfter</code>, <code>endBegin</code>, <code>endAfter</code></li><li><code>NavbarBrand</code>: <code>default</code></li><li><code>NavScreen</code>: <code>before</code>, <code>after</code></li><li><code>NavScreenDropdown</code>: <code>before</code>, <code>after</code></li></ul><p><strong>Sidebar</strong>:</p><ul><li><code>Sidebar</code>: <code>top</code>, <code>default</code>, <code>bottom</code></li></ul>",7),x={class:"hint-container tip"},I=e("p",{class:"hint-container-title"},"Tips",-1),A={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/theme/src/client/",target:"_blank",rel:"noopener noreferrer"};function S(T,H){const l=i("CodeTabs"),d=i("ExternalLinkIcon");return r(),m("div",null,[b,h(" more "),g,v,c(l,{id:"10",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:n(({title:s,value:t,isActive:a})=>[f]),tab1:n(({title:s,value:t,isActive:a})=>[y]),_:1}),w,c(l,{id:"531",data:[{title:"config.ts"},{title:"HomePage.vue"}]},{tab0:n(({title:s,value:t,isActive:a})=>[_]),tab1:n(({title:s,value:t,isActive:a})=>[P]),_:1},8,["data"]),C,e("div",x,[I,e("p",null,[o("For the corresponding location and function of each slot, please refer to "),e("a",A,[o("theme source code"),c(d)]),o(".")])])])}const N=u(k,[["render",S],["__file","replace.html.vue"]]);export{N as default};
