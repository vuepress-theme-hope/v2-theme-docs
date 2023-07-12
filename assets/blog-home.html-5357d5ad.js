import{_ as e,o as a,c as n,f as i}from"./app-a520ca79.js";const s={},l=i(`<h2 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>设置为 <code>true</code> 时启用首页样式</p><h2 id="hero" tabindex="-1"><a class="header-anchor" href="#hero" aria-hidden="true">#</a> hero</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否显示主页的图标与描述。</p><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>设置页面标题，会用于路径导航、页面增强等。</p><h2 id="herotext" tabindex="-1"><a class="header-anchor" href="#herotext" aria-hidden="true">#</a> heroText</h2><ul><li>类型: <code>string | false</code></li><li>默认值: <code>&quot;Hello&quot;</code></li></ul><p>主页标题</p><h2 id="tagline" tabindex="-1"><a class="header-anchor" href="#tagline" aria-hidden="true">#</a> tagline</h2><ul><li>类型: <code>string | false</code></li><li>默认值: <code>&quot;Welcome to your VuePress site&quot;</code></li></ul><p>附加文字描述</p><h2 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage" aria-hidden="true">#</a> heroImage</h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>主页图标 (logo) 地址，不支持相对路径。</p><h2 id="heroimagedark" tabindex="-1"><a class="header-anchor" href="#heroimagedark" aria-hidden="true">#</a> heroImageDark</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>heroImage</code></li></ul><p>深色模式下主页图标 (logo) 地址，不支持相对路径。</p><h2 id="heroimagestyle" tabindex="-1"><a class="header-anchor" href="#heroimagestyle" aria-hidden="true">#</a> heroImageStyle</h2><ul><li>类型: <code>Record&lt;string, string&gt; | string</code></li><li>必填: 否</li></ul><p>首页图标的 CSS 样式</p><h2 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt" aria-hidden="true">#</a> heroAlt</h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>主页图标的替代文字</p><h2 id="bgimage" tabindex="-1"><a class="header-anchor" href="#bgimage" aria-hidden="true">#</a> bgImage</h2><ul><li>类型: <code>string | false</code></li><li>默认值: 一张内置风景图片</li></ul><p>背景图片的地址，不支持相对路径。如果不填写，会自动应用一张默认的风景图片。</p><h2 id="bgimagedark" tabindex="-1"><a class="header-anchor" href="#bgimagedark" aria-hidden="true">#</a> bgImageDark</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>bgImage</code></li></ul><p>深色模式下背景图片的地址，不支持相对路径。</p><h2 id="bgimagestyle" tabindex="-1"><a class="header-anchor" href="#bgimagestyle" aria-hidden="true">#</a> bgImageStyle</h2><ul><li>类型: <code>Record&lt;string, string&gt; | string</code></li><li>必填: 否</li></ul><p>背景图片的 CSS 样式。</p><h2 id="herofullscreen" tabindex="-1"><a class="header-anchor" href="#herofullscreen" aria-hidden="true">#</a> heroFullScreen</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否全屏显示 Hero</p><h2 id="projects" tabindex="-1"><a class="header-anchor" href="#projects" aria-hidden="true">#</a> projects</h2><ul><li><p>类型: <code>ThemeBlogHomeProjectOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeBlogHomeProjectOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 项目名称
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 项目描述
   */</span>
  desc<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 项目链接
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 项目图标
   *
   * <span class="token keyword">@description</span> 支持图片链接或者图标字体类，同时也支持 \`&quot;link&quot;\`、\`&quot;project&quot;\`、\`&quot;book&quot;\`、\`&quot;article&quot;\`、\`&quot;friend&quot;\`
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>项目列表</p>`,42),o=[l];function r(d,t){return a(),n("div",null,o)}const h=e(s,[["render",r],["__file","blog-home.html.vue"]]);export{h as default};
