import{_ as a,r as d,o as l,c as s,b as e,d as t,e as o,w as i,a as c,f as r}from"./app-1ee6e138.js";const h={},u=e("code",null,"vuepress-plugin-feed2",-1),f=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"Info"),e("p",null,[e("code",null,"vuepress-theme-hope"),t(" provides "),e("code",null,"plugins.feed"),t(" in theme options to "),e("code",null,"vuepress-plugin-feed2"),t(".")])],-1),p=r('<h2 id="enable-feed-output" tabindex="-1"><a class="header-anchor" href="#enable-feed-output" aria-hidden="true">#</a> Enable Feed Output</h2><p>The <code>vuepress-plugin-feed2</code> plugin can generate feed files in the following three formats for you:</p><ul><li>Atom 1.0</li><li>JSON 1.1</li><li>RSS 2.0</li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Atom and JSON are provided to improve more feed software adaptation.</p><p>Please use RSS if possible.</p></div><p>Please set <code>plugins.feed.atom</code>, <code>plugins.feed.json</code> or <code>plugins.feed.rss</code> to <code>true</code> in theme options according to the format you want to generate.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Of course, you can enable them all. This is not a &quot;choose 1 from 3&quot; situation.</p></div><p>Considering that rare people stick to feed now, this plugin provides a minimal configuration to adjust the automatic generation of detailed feed files. Also, it allows you to freely define the output content of the feed.</p><h2 id="channel-settings" tabindex="-1"><a class="header-anchor" href="#channel-settings" aria-hidden="true">#</a> Channel Settings</h2><p>You can customize the feed channel information by setting the <code>plugins.feed.channel</code> in theme options.</p><p>We recommend the following settings:</p><ul><li>Convert the date of creating the feed to ISOString and write it into <code>channel.pubDate</code></li><li>The update period of the content set in <code>channel.ttl</code> (unit: minutes)</li><li>Set copyright information via <code>channel.copyright</code>, or fallback to <code>copyright</code> in theme options</li><li>Set the channel author via <code>channel.author</code>, or fallback to <code>author</code> in theme options</li></ul><div class="hint-container tip"><p class="hint-container-title">Default channel settings</p><ul><li><p>The title and description of the channel is the name and description of the site by default</p></li><li><p>The link of the channel and the last update time will be automatically generated by the plugin.</p></li></ul></div>',12),g=e("h2",{id:"generation-control",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#generation-control","aria-hidden":"true"},"#"),t(" Generation Control")],-1),m=e("h3",{id:"default-generation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#default-generation","aria-hidden":"true"},"#"),t(" Default Generation")],-1),_=e("p",null,"By default, all articles are added to the feed stream.",-1),v=e("h3",{id:"customize-feed-item",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#customize-feed-item","aria-hidden":"true"},"#"),t(" Customize Feed item")],-1),b=e("p",null,[t("You can control how feed item is generated in specific article by configuring the "),e("code",null,"feed"),t(" option in frontmatter.")],-1),y=e("h3",{id:"customize-feed-generation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#customize-feed-generation","aria-hidden":"true"},"#"),t(" Customize Feed Generation")],-1),C=e("p",null,[t("You can take full control of feed items generation by configuring the "),e("code",null,"plugins.feed.getter"),t(".")],-1),S=e("h3",{id:"i18n-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#i18n-config","aria-hidden":"true"},"#"),t(" I18n Config")],-1),x=e("p",null,"The plugin generates separate feeds for each language.",-1),w=e("p",null,[t("You can provide different settings for different languages via "),e("code",null,"plugins.feed.locales"),t(".")],-1);function T(k,F){const n=d("ProjectLink");return l(),s("div",null,[e("p",null,[t("The theme adds feed support using "),o(n,{name:"feed2"},{default:i(()=>[u]),_:1}),t(".")]),f,c(" more "),p,e("p",null,[t("For detailed options and their default values, see "),o(n,{name:"feed2",path:"/config/channel.html"},{default:i(()=>[t("Feed Channel Config")]),_:1}),t(".")]),g,m,_,e("p",null,[t("For the content read by default, see "),o(n,{name:"feed2",path:"/config/item.html"},{default:i(()=>[t("Configuration → Item Control")]),_:1}),t(".")]),v,b,e("p",null,[t("For detailed options and their default values, see "),o(n,{name:"feed2",path:"/config/item.html"},{default:i(()=>[t("Configuration → Project Settings")]),_:1}),t(".")]),y,C,e("p",null,[t("For detailed options and their default values, see "),o(n,{name:"feed2",path:"/config/getter.html"},{default:i(()=>[t("Configuration → Feed Getter")]),_:1}),t(".")]),S,x,w])}const N=a(h,[["render",T],["__file","feed.html.vue"]]);export{N as default};
