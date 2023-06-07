import{_ as t,r as o,o as s,c as p,b as e,d as a,e as i,a as c,f as l}from"./app-0ba868ac.js";const r={},d=e("code",null,"vuepress-theme-hope",-1),u=l(`<h2 id="global-config" tabindex="-1"><a class="header-anchor" href="#global-config" aria-hidden="true">#</a> Global Config</h2><p>You can set the default footer content and copyright information globally using <code>footer</code> and <code>copyright</code> in theme options.</p><p>The footer is not displayed by default. To display the footer, you need to set <code>displayFooter: true</code> in theme options.</p><div class="hint-container info"><p class="hint-container-title">Different Locales</p><p>You can set footers for each language individually under <code>locales</code> field in theme options.</p></div><h2 id="page-config" tabindex="-1"><a class="header-anchor" href="#page-config" aria-hidden="true">#</a> Page Config</h2><p>You can configure <code>footer</code> and <code>copyright</code> options in the frontmatter of the page to set footer content of a specific page.</p><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3><ul><li><p>When setting <code>displayFooter: true</code> in theme options, you can set <code>footer: false</code> in frontmatter to disable footer in a specific page.</p></li><li><p>When the global display of footer is not enabled, setting <code>footer: true</code> means displaying the default footer.</p></li><li><p>If you fill in a string, it will be inserted into the footer as content with <code>v-html</code> command, so you can fill in HTMLString.</p></li></ul><h3 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright" aria-hidden="true">#</a> copyright</h3><p>The <code>copyright</code> field is used as copyright information of a specific page. It also supports HTMLString (useful when you cite an article and the article uses a specific license).</p><p>When setting <code>displayFooter: true</code> in theme options, you can also set <code>copyright: false</code> to hide the copyright information in a specific page.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><ul><li><p>Display default footer text:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div></li><li><p>Customize footer text without displaying copyright information:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> This site is served by GitHub Pages
<span class="token key atrule">copyright</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div></li><li><p>Customize footer content and copyright information:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> &lt;a href=&quot;https<span class="token punctuation">:</span>//github.com/Mister<span class="token punctuation">-</span>Hope&quot;<span class="token punctuation">&gt;</span> Mr.Hope &lt;/a<span class="token punctuation">&gt;</span>
<span class="token key atrule">copyright</span><span class="token punctuation">:</span> MIT LICENSE</span>
<span class="token punctuation">---</span></span>
</code></pre></div></li><li><p>When you set <code>displayFooter: true</code> in theme options, you can also disable it locally:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div></li><li><p>To remove the default footer content while keeping copyright information displayed, please use an empty string.</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span></span>
<span class="token punctuation">---</span></span>
</code></pre></div></li></ul>`,13);function f(g,h){const n=o("Badge");return s(),p("div",null,[e("p",null,[d,a(" provides footer feature for all pages "),i(n,{text:"Support page config"}),a(".")]),c(" more "),u])}const k=t(r,[["render",f],["__file","footer.html.vue"]]);export{k as default};
