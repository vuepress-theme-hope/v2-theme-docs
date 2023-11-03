import{_ as l,r as a,o as r,c as i,b as e,d as n,e as s,w as c,f as o}from"./app-92e2b39d.js";const u={},d={href:"https://vuejs.press/reference/plugin-api.html",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"community-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#community-plugin","aria-hidden":"true"},"#"),n(" Community Plugin")],-1),h={href:"https://www.npmjs.com/search?q=keywords:vuepress-plugin",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin",target:"_blank",rel:"noopener noreferrer"},f={href:"https://vuejs.press/reference/config.html#plugins",target:"_blank",rel:"noopener noreferrer"},_={href:"https://vuejs.press/reference/plugin/google-analytics.html",target:"_blank",rel:"noopener noreferrer"},m=o(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> googleAnalyticsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-google-analytics&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">googleAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;G-XXXXXXXXXX&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,1),y={class:"hint-container tip"},v=e("p",{class:"hint-container-title"},"Tips",-1),w=e("p",null,"Most plugins can only be used once. If the same plugin is used multiple times, only the last one will take effect.",-1),b={href:"https://vuejs.press/reference/plugin/container.html",target:"_blank",rel:"noopener noreferrer"},j=e("h2",{id:"local-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#local-plugin","aria-hidden":"true"},"#"),n(" Local Plugin")],-1),x=e("p",null,"To use your own plugin but don't want to publish it, you can create a local plugin.",-1),P={href:"https://vuejs.press/reference/config.html#plugin-api",target:"_blank",rel:"noopener noreferrer"},X=o(`<p>But if you have too many things to do in your config file, you can consider extracting them into separate plugins, and use them in your config file:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> myPlugin <span class="token keyword">from</span> <span class="token string">&quot;./path/to/my-plugin.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">myPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,2),q={href:"https://vuejs.press/advanced/plugin.html",target:"_blank",rel:"noopener noreferrer"};function A(I,V){const t=a("ExternalLinkIcon"),p=a("RouterLink");return r(),i("div",null,[e("p",null,[n("With the help of "),e("a",d,[n("Plugin API"),s(t)]),n(", VuePress plugin can provide different features for you.")]),g,e("p",null,[n("Community users have created lots of plugins and published them to "),e("a",h,[n("NPM"),s(t)]),n(". VuePress team also maintains some official plugins under the "),e("a",k,[n("@vuepress"),s(t)]),n(" scope. You should check the plugin's own documentation for detailed guide.")]),e("p",null,[n("In general, you need to include the plugin in the "),e("a",f,[n("plugins"),s(t)]),n(" option to use it. For example, use the "),e("a",_,[n("@vuepress/plugin-google-analytics"),s(t)]),n(" to integrate Google Analytics:")]),m,e("div",y,[v,w,e("p",null,[n("However, some plugins can be used multiple times (e.g. "),e("a",b,[n("@vuepress/plugin-container"),s(t)]),n("), and you should check the documentation of the plugin itself for detailed guide.")])]),j,x,e("p",null,[n("It is recommended to use the "),s(p,{to:"/cookbook/vuepress/config.html#config-file"},{default:c(()=>[n("Config File")]),_:1}),n(" directly as a plugin, because "),e("a",P,[n("almost all the Plugin APIs are available"),s(t)]),n(", which would be more convenient in most cases.")]),X,e("p",null,[n("You can refer to "),e("a",q,[n("Advanced > Writing a Plugin"),s(t)]),n(" for how to write your own plugin.")])])}const L=l(u,[["render",A],["__file","plugin.html.vue"]]);export{L as default};
