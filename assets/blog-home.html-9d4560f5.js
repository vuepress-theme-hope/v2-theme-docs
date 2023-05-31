import{_ as e,o as a,c as i,g as n}from"./app-d7067868.js";const s={},l=n(`<h2 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Enable homepage style when setting to <code>true</code></p><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Page title, will be used in breadcrumb, seo, etc.</p><h2 id="herotext" tabindex="-1"><a class="header-anchor" href="#herotext" aria-hidden="true">#</a> heroText</h2><ul><li>Type: <code>string | false</code></li><li>Default: <code>&quot;Hello&quot;</code></li></ul><p>Hero Title</p><h2 id="tagline" tabindex="-1"><a class="header-anchor" href="#tagline" aria-hidden="true">#</a> tagline</h2><ul><li>Type: <code>string | false</code></li><li>Default: <code>&quot;Welcome to your VuePress site&quot;</code></li></ul><p>Short description in hero</p><h2 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage" aria-hidden="true">#</a> heroImage</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Home hero (logo) image address, relative path is not supported.</p><h2 id="heroimagedark" tabindex="-1"><a class="header-anchor" href="#heroimagedark" aria-hidden="true">#</a> heroImageDark</h2><ul><li>Type: <code>string</code></li><li>Default: <code>heroImage</code></li></ul><p>Darkmode Home hero (logo) image address, relative path is not supported.</p><h2 id="heroimagestyle" tabindex="-1"><a class="header-anchor" href="#heroimagestyle" aria-hidden="true">#</a> heroImageStyle</h2><ul><li>Type: <code>Record&lt;string, string&gt; | string</code></li><li>Required: No</li></ul><p>CSS style for home icon</p><h2 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt" aria-hidden="true">#</a> heroAlt</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Home icon alt text</p><h2 id="bgimage" tabindex="-1"><a class="header-anchor" href="#bgimage" aria-hidden="true">#</a> bgImage</h2><ul><li>Type: <code>string | false</code></li><li>Default: A built-in picture</li></ul><p>Link of background image, relative path is not supported.</p><h2 id="bgimagedark" tabindex="-1"><a class="header-anchor" href="#bgimagedark" aria-hidden="true">#</a> bgImageDark</h2><ul><li>Type: <code>string</code></li><li>Default: <code>bgImage</code></li></ul><p>Link of darkmode background image, relative path is not supported.</p><h2 id="bgimagestyle" tabindex="-1"><a class="header-anchor" href="#bgimagestyle" aria-hidden="true">#</a> bgImageStyle</h2><ul><li>Type: <code>Record&lt;string, string&gt; | string</code></li><li>Required: No</li></ul><p>The CSS style of the background image.</p><h2 id="herofullscreen" tabindex="-1"><a class="header-anchor" href="#herofullscreen" aria-hidden="true">#</a> heroFullScreen</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether Hero is full screen displayed</p><h2 id="projects" tabindex="-1"><a class="header-anchor" href="#projects" aria-hidden="true">#</a> projects</h2><ul><li><p>Type: <code>ThemeBlogHomeProjectOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ThemeBlogHomeProjectOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Project name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Project description
   */</span>
  desc<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Project link
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Project icon
   *
   * <span class="token keyword">@description</span> image link or icon fontClass are supported, as well as \`&quot;link&quot;\`、\`&quot;project&quot;\`、\`&quot;book&quot;\`、\`&quot;article&quot;\`、\`&quot;friend&quot;\`
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Project list</p>`,39),o=[l];function t(r,d){return a(),i("div",null,o)}const p=e(s,[["render",t],["__file","blog-home.html.vue"]]);export{p as default};
