import{_ as n,r as s,o as c,c as r,b as e,d as t,e as a,w as i,a as l,f as d}from"./app-a520ca79.js";const p={},h=e("p",null,"Sometimes, you may not want some of your articles to be copied by others, or you want others to automatically generate a piece of copyright information to the clipboard when copying.",-1),u=e("code",null,"vuepress-theme-hope",-1),y=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"Info"),e("p",null,[e("code",null,"vuepress-theme-hope"),t(" passes "),e("code",null,"plugins.copyright"),t(" in theme options as plugin options to "),e("code",null,"vuepress-plugin-copyright2"),t(".")])],-1),g=d('<h2 id="enable-plugin" tabindex="-1"><a class="header-anchor" href="#enable-plugin" aria-hidden="true">#</a> Enable plugin</h2><p>Since half of the users use this theme to build documents, and document sites usually do not need to add copyright information, this plugin is not enabled by default.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>To enable this plugin, you need to set <code>plugins.copyright</code> in theme options to <code>true</code> or an object.</p><p>Setting to <code>true</code> is equivalent to setting <code>{ global: true }</code>.</p></div><ul><li>When the <code>global</code> option of the plugin is not <code>true</code>, the plugin is disabled globally, and you need to manually enable it by setting <code>copy: true</code> in page frontmatter.</li><li>Setting <code>global: true</code> makes it enabled globally, and allows setting <code>copy: false</code> in page frontmatter to disable it.</li></ul><p>To avoid disturbing visitors, copyright information will be appended only when the length of content copied by the user is not less than <code>100</code>. If you want to change this trigger value, please set <code>triggerWords</code>, and this option supports being overridden via <code>copy.triggerWord</code> in page frontmatter.</p><h2 id="disable-copy-and-selection" tabindex="-1"><a class="header-anchor" href="#disable-copy-and-selection" aria-hidden="true">#</a> Disable Copy and Selection</h2><ul><li>If you don&#39;t want users to copy your entire site or specific page text, you can disable copying in plugin options or page frontmatter by setting <code>disableCopy</code>, the latter has higher priority.</li><li>If you don&#39;t want users to select your entire site or specific page text, you can disable selection in plugin options or page frontmatter by setting <code>disableSelection</code>, the latter has higher priority.</li></ul><h2 id="copyright-information" tabindex="-1"><a class="header-anchor" href="#copyright-information" aria-hidden="true">#</a> Copyright Information</h2><p>You can set author and license information via <code>author</code> and <code>license</code> in plugin options. If your site have different authors and license in different pages, you can pass in a function <code>(page: Page) =&gt; string</code> that takes the current page object as parameter and returns the corresponding information.</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><p>Please copy this text and paste it to any location to see the effect. Please copy this text and paste it to any location to see the effect. Please copy this text and paste it to any location to see the effect. Please copy this text and paste it to any location to see the effect. Please copy this text and paste it to any location to see the effect. Please copy this text and paste it to any location to see the effect. Please copy this text and paste it to any location to see the effect. Please copy this text and paste it to any location to see the effect. Please copy this text and paste it to any location to see the effect. Please copy this text and paste it to any location to see the effect.</p><h2 id="more" tabindex="-1"><a class="header-anchor" href="#more" aria-hidden="true">#</a> More</h2>',12);function f(m,b){const o=s("ProjectLink");return c(),r("div",null,[h,e("p",null,[u,t(" use "),a(o,{name:"copyright2"},{default:i(()=>[t("vuepress-plugin-copyright2")]),_:1}),t(" to provide related features.")]),y,l(" more "),g,e("p",null,[t("For plugin documentation, please visit "),a(o,{name:"copyright2"},{default:i(()=>[t("vuepress-plugin-copyright2 docs")]),_:1}),t(" .")])])}const x=n(p,[["render",f],["__file","copyright.html.vue"]]);export{x as default};
