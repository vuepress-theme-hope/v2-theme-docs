import{_ as c,r as a,o as i,c as l,a as u,b as n,d as s,e as t,w as r,f as e}from"./app-ce8d7da6.js";const d={},k=n("p",null,"This tutorial will guide you on how to use Vue components and Vue syntax in your VuePress project.",-1),m=n("h2",{id:"import-vue-components-globally",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#import-vue-components-globally","aria-hidden":"true"},"#"),s(" Import Vue Components Globally")],-1),g=n("h3",{id:"register-via-vuepress-plugin-register-components",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#register-via-vuepress-plugin-register-components","aria-hidden":"true"},"#"),s(" Register via "),n("code",null,"@vuepress/plugin-register-components")],-1),h=n("p",null,[s("You can automatically register components via the "),n("code",null,"@vuepress/plugin-register-components"),s(" plugin.")],-1),v={href:"https://vuejs.press/reference/plugin/register-components.html",target:"_blank",rel:"noopener noreferrer"},y=e(`<h3 id="register-via-clientconfigfile" tabindex="-1"><a class="header-anchor" href="#register-via-clientconfigfile" aria-hidden="true">#</a> Register via ClientConfigFile</h3><p>You can create <code>.vuepress/client.ts</code> and register components manually.</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">&quot;./MyComponent.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">enhance</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;MyComponent&quot;</span><span class="token punctuation">,</span> MyComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="using-vue-syntax-and-components-in-markdown" tabindex="-1"><a class="header-anchor" href="#using-vue-syntax-and-components-in-markdown" aria-hidden="true">#</a> Using Vue syntax and components in Markdown</h2>`,4),f=e(`<p>If you need to import Vue components in Markdown, please note that you cannot use relative paths to import, nor write multiple <code>&lt;script&gt;</code> blocks.</p><div class="hint-container info"><p class="hint-container-title">Markdown with Vue SFC</p><p>Every Markdown file is first compiled to HTML and then converted to a Vue Single File Component (SFC). In other words, you can write Markdown files like Vue SFC:</p><p><code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> tags are directly treated as tags in Vue SFC. In other words, they are promoted from the <code>&lt;template&gt;</code> tag to the top level of the SFC. All content other than <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> tags will be compiled to HTML and then treated as <code>&lt;template&gt;</code> tags in Vue SFC.</p><p>Since Vue single-file components can only contain one <code>&lt;script&gt;</code> tag, you should avoid using more than one <code>&lt;script&gt;</code> tag in VuePress Markdown.</p><p>In addition, since Markdown will be converted to Vue single-file components in the cache directory, any relative path import will be invalid in Vue SFC.</p></div><p>In order to import your own components correctly, you need to create aliases for them, you can do this with the <code>alias</code> option:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/utils&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  alias<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;@MyComponent&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;components/MyComponent.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
import MyComponent from &quot;@MyComponent&quot;;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>It&#39;s a bit more complicated, but if the component is only used in one page, importing like this has advantages:</p><ul><li>Global import means that the component code needs to be loaded when VuePress is initialized, that is, when visiting the first page</li><li>Importing in Markdown causes the component code to be included in the page code so that it will only be loaded when visiting the page</li></ul>`,7);function w(_,b){const o=a("ExternalLinkIcon"),p=a("RouterLink");return i(),l("div",null,[k,u(" more "),m,g,h,n("p",null,[s("For details about how to use the plugin, see "),n("a",v,[s("Official Documentation"),t(o)]),s(".")]),y,n("p",null,[s("You can use Vue syntax directly in Markdown, for details see "),t(p,{to:"/cookbook/vuepress/markdown.html#using-vue-in-markdown"},{default:r(()=>[s("VuePress → Markdown")]),_:1}),s(".")]),f])}const V=c(d,[["render",w],["__file","component.html.vue"]]);export{V as default};
