import{$ as s,U as e,a0 as o,X as n,a9 as i,Y as p,ab as a,F as c}from"./framework-3a3055b3.js";const l="/assets/article-list-light-59ec6845.png",r="/assets/article-list-dark-499fe30c.png",u={},d=a('<p>The topic provides you with a list of all articles under the path <code>/article/</code> by default.</p><h2 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> Article</h2><p>All articles will be added to the article list by default and rendered under the path <code>/article/</code>.</p><p><img src="'+l+'" alt="Article list" data-mode="lightmode-only" loading="lazy"><img src="'+r+'" alt="Article list" data-mode="darkmode-only" loading="lazy"></p><p>If you don’t want the list to contain some specific articles, just set the <code>article</code> to <code>false</code> in the frontmatter of the article, or you may customize it through <code>plugins.blog.filter</code> in theme options.</p><p>To sticky a specific article in the article list, just set <code>sticky</code> to <code>true</code> in the frontmatter of the article.</p><div class="hint-container tip"><p class="hint-container-title">Order</p><p>For sticky articles, you can set <code>sticky</code> with a number to set their order. Articles with large numbers will be listed first.</p></div><h2 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt" aria-hidden="true">#</a> Excerpt</h2><h3 id="adding-excerpt" tabindex="-1"><a class="header-anchor" href="#adding-excerpt" aria-hidden="true">#</a> Adding Excerpt</h3><p>If you want to add an excerpt for an article, you can mark contents with <code>&lt;!-- more --&gt;</code> comment. Any content before this comment will be considered as an excerpt.</p><p>Meanwhile, if the excerpt you want to set is not what you want to show at the beginning of the article, you can also set the HTML string through the <code>excerpt</code> option in Frontmatter.</p><h3 id="automatically-generate-excerpt" tabindex="-1"><a class="header-anchor" href="#automatically-generate-excerpt" aria-hidden="true">#</a> Automatically Generate Excerpt</h3><p>By default, the theme extract article excerpts for you automatically,.</p><p>If you want the theme only display excerpt which you specify, set <code>plugins.blog.excerptLength: 0</code> in theme options.</p><div class="hint-container warning"><p class="hint-container-title">Excerpt Limitation</p><p>We recommend you to use <code>&lt;!-- more --&gt;</code> to mark excerpt as first choice. If you do need a special excerpt, set it in frontmatter yourself.</p><p>In addition, excerpt is directly inserted into the DOM through <code>innerHTML</code>, this means that no Vue features are available.</p></div><h2 id="star-articles" tabindex="-1"><a class="header-anchor" href="#star-articles" aria-hidden="true">#</a> Star Articles</h2><p>You can star an article by setting <code>star</code> to <code>true</code> in frontmatter. After staring, users can view these articles on the <code>/star/</code> page.</p><p>At the same time, any star articles will be displayed in the article column on the sidebar of the blog homepage.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>Our consideration for providing star options: Theme users may want to show visitors some high-quality articles, but do not want sticky articles to flood the homepage, resulting in visitors not being able to see the recently updated articles.</p></div><div class="hint-container tip"><p class="hint-container-title">Order</p><p>Similar to sticky articles, you can also set <code>star</code> to number to set their order. Articles with large numbers will be listed first.</p></div>',20),h={id:"other-types-of-articles",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#other-types-of-articles","aria-hidden":"true"},"#",-1),m=a(`<p>The theme provides separate lists for additional article type.</p><p>To add additional article type, you should set <code>plugins.blog.type</code> in theme options with an array of objects describing type you want.</p><p>Each type should have a unique key (without special characters), and a <code>filter</code> function to determine whether a page should be the type. The <code>filter</code> function should accept page object and return a boolean value.</p><p>To sort pages in the type list, you can also set a <code>sorter</code> function. The <code>sorter</code> function should accept two page objects and return a number.</p><p>By default, the type list path will be <code>/key/</code> (with <code>key</code> replaced by your actual key). You can also set a custom path by setting <code>path</code> in options.</p><p><code>frontmatter</code> option controls the frontmatter of the layout page, with is a function accepting <code>localePath</code> and returning a frontmatter object. This option is useful when setting the title of the layout page.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p><code>layout</code> is the layout name, by default it will be <code>BlogType</code>, a layout <code>vuepress-theme-hope</code> registered. ONLY IF you build a custom layout for the type list, shall you set this option to your layout value.</p></div><p>Also you need to set <code>blogLocales[key]</code> in theme locales with the actual type name, so that the theme can display the type name correctly.</p><p>To get start with, we would like to show you some examples.</p><details class="hint-container details"><summary>Examples</summary><ol><li><p>Adding a type of slide pages.</p><p>All slide pages should have <code>layout: Slide</code> in frontmatter. And the sequence doesn&#39;t matter.</p></li><li><p>Adding a original type.</p></li></ol><p>You shall set the following options:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// you may need to install vuepress-shared to use its \`compareDate\`</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> compareDate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-shared/node&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// other config</span>
  <span class="token comment">// ...</span>

  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    blogLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
      slide<span class="token operator">:</span> <span class="token string">&quot;Slides&quot;</span><span class="token punctuation">,</span>
      original<span class="token operator">:</span> <span class="token string">&quot;Original&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
      blog<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            key<span class="token operator">:</span> <span class="token string">&quot;slide&quot;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>layout <span class="token operator">===</span> <span class="token string">&quot;Slide&quot;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">frontmatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;Slides&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            key<span class="token operator">:</span> <span class="token string">&quot;original&quot;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>original<span class="token punctuation">,</span>
            <span class="token function-variable function">sorter</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageA<span class="token punctuation">,</span> pageB<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
              <span class="token function">compareDate</span><span class="token punctuation">(</span>pageA<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>date <span class="token operator">-</span> pageB<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>date<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function-variable function">frontmatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;Original&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,10);function y(v,f){const t=c("Badge");return e(),o("div",null,[d,n("h2",h,[k,i(" Other types of articles "),p(t,{text:"Advanced",type:"info"})]),m])}const b=s(u,[["render",y],["__file","article.html.vue"]]);export{b as default};
