import{_ as t,r as o,o as p,c as e,a as c,b as n,d as s,e as i,f as l}from"./app-fe94cd90.js";const u={},r=n("p",null,[s("你可以创建 "),n("code",null,".vuepress/client.ts"),s(" 作为客户端配置文件来自定义你的站点。")],-1),k={class:"hint-container info"},d=n("p",{class:"hint-container-title"},"相关信息",-1),m={href:"https://vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ExampleGlobalComponent <span class="token keyword">from</span> <span class="token string">&quot;./components/ExampleGlobalComponent.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ExampleRootComponent <span class="token keyword">from</span> <span class="token string">&quot;./components/ExampleRootComponent.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setupExampleCompositionAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./composables/exampleCompositionAPI&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ExampleLayout <span class="token keyword">from</span> <span class="token string">&quot;./layouts/ExampleLayout.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 客户端增强</span>
  <span class="token function-variable function">enhance</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注册全局组件</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;ExampleGlobalComponent&quot;</span><span class="token punctuation">,</span> ExampleGlobalComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 注册路由守卫</span>
    router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;before navigation&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;after navigation&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 全局注册</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注册全局组合式 API</span>
    <span class="token function">setupExampleCompositionAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 在客户端中访问 DOM</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 在挂在后 使用 DOM API</span>
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 添加或覆盖组件</span>
  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
    ExampleLayout<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 全局组件</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;ExampleRootComponent&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(f,g){const a=o("ExternalLinkIcon");return p(),e("div",null,[r,c(" more "),n("div",k,[d,n("p",null,[s("了解更多客户端配置文件的信息，请参考 "),n("a",m,[s("高级 > 教程 > 客户端配置的使用"),i(a)])])]),v])}const h=t(u,[["render",b],["__file","client.html.vue"]]);export{h as default};
