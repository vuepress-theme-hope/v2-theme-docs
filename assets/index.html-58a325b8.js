import{_ as i,r,o as l,c as n,b as t,d as e,e as d,w as o,f as s}from"./app-0ba868ac.js";const c={},h=s('<p>Markdown is a markup language that can be written using a plain text editor that allows plain text content to be formatted with simple markup syntax.</p><p>Markdown has a series of derivative versions that extend Markdown&#39;s functionality (such as tables, footnotes, embedded HTML, etc.). These features were not available in the original Markdown. They can convert Markdown into more formats, such as LaTeX, Docbook, Markdown Extra, MultiMarkdown, Maruku, etc. are more famous in Markdown&#39;s enhanced version. These derivative versions are either based on tools such as Pandoc; or based on sites such as GitHub and Wikipedia, which are syntactically compatible, but have some changes in syntax and rendering effects.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Markdown&#39;s grammar is simple and straightforward, easy to learn, and features more powerful than plain text, so people use it to write blogs. WordPress, the world&#39;s most popular blogging platform, and large CMSs such as Joomla and Drupal all support Markdown. The blog platforms that use the Markdown editor are Ghost and Typecho.</p><p>Used to write documentation and save it under the software&#39;s directory under the filename <code>README.md</code>. Because we have a god-level editor like RStudio, we can turn Markdown into a presentation PPT, Word product documentation, LaTex papers, and even a minimally usable prototype with little code. In the field of data science, Markdown has been widely used, greatly promoting the historical process of dynamic repeatability research.</p><h2 id="shortcut-key" tabindex="-1"><a class="header-anchor" href="#shortcut-key" aria-hidden="true">#</a> ShortCut Key</h2><table><thead><tr><th>Display</th><th>Code</th><th>ShortCut Key</th></tr></thead><tbody><tr><td><strong>Bold</strong></td><td><code>**text**</code></td><td>Ctrl/⌘ + B</td></tr><tr><td><em>Emphasize</em></td><td><code>*text*</code></td><td>Ctrl/⌘ + I</td></tr><tr><td><code>Inline Code</code></td><td>`code`</td><td>Select then <code>`</code></td></tr></tbody></table><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> Title</h2><p>The title shows the structure of the article. Insert 1-6 <code>#</code> at the beginning of the line, each adding a <code>#</code> indicates a more in-depth content, corresponding to the depth of the title by 1-6.</p><ul><li>H1: <code># Header 1</code></li><li>H2: <code>## Header 2</code></li><li>H3: <code>### Header 3</code></li><li>H4: <code>#### Header 4</code></li><li>H5: <code>##### Header 5</code></li><li>H6: <code>###### Header 6</code></li></ul><h2 id="text-style" tabindex="-1"><a class="header-anchor" href="#text-style" aria-hidden="true">#</a> Text Style</h2><ul><li>Link: <code>[Title](URL)</code></li><li>Bold: <code>**Bold**</code></li><li>Italic:<code>*Italics*</code></li><li>Delete:<code>~~Italics~~</code></li><li>Paragraph: Space one link</li><li>Line break: enter two space at the end of the line</li><li>List: add <code>-</code> to become a list item</li><li>Blockquote: <code>&gt; Blockquote Content</code></li><li>HR: Enter <code>---</code> in a single line</li></ul><h2 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> Link</h2><p><code>[Title](URL)</code></p><p>Example: <code>[Baidu](https://baidu.com)</code></p><h2 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> Image</h2><p><code>![Alt](ImageLink)</code> 。</p><p>E.g: <code>![This is a title](./assets/title.jpg)</code>.</p><h2 id="tables" tabindex="-1"><a class="header-anchor" href="#tables" aria-hidden="true">#</a> Tables</h2><table><thead><tr><th style="text-align:center;">center</th><th style="text-align:right;">right</th><th style="text-align:left;">left</th></tr></thead><tbody><tr><td style="text-align:center;">For center align use <code>:-:</code></td><td style="text-align:right;">For right align use <code>-:</code></td><td style="text-align:left;">For left align use <code>:-</code></td></tr><tr><td style="text-align:center;">b</td><td style="text-align:right;">aaaaaaaaa</td><td style="text-align:left;">aaaa</td></tr><tr><td style="text-align:center;">c</td><td style="text-align:right;">aaaa</td><td style="text-align:left;">a</td></tr></tbody></table><h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji</h2><p><code>:emoji name:</code></p><p>Example: <code>:smile:</code></p>',23),u=t("h2",{id:"markdown-display",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#markdown-display","aria-hidden":"true"},"#"),e(" Markdown Display")],-1);function p(m,g){const a=r("RouterLink");return l(),n("div",null,[h,t("p",null,[e("For full emoji list, see "),d(a,{to:"/cookbook/markdown/emoji/"},{default:o(()=>[e("Emoji List")]),_:1}),e(".")]),u,t("ul",null,[t("li",null,[d(a,{to:"/cookbook/markdown/demo.html"},{default:o(()=>[e("View Detail")]),_:1})])])])}const b=i(c,[["render",p],["__file","index.html.vue"]]);export{b as default};
