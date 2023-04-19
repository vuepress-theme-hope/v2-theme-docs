const e=JSON.parse('{"key":"v-79fb0b6e","path":"/zh/guide/advanced/seo.html","title":"SEO","lang":"zh-CN","frontmatter":{"title":"SEO","icon":"dumbbell","category":["高级"],"tag":["高级","SEO"],"description":"vuepress-theme-hope 通过内置 为提供 SEO 增强功能。 为了使插件能够更好的工作，你可能需要查看一下 页面配置 并合理的配置它们。 相关信息 vuepress-theme-hope 将主题选项中的 plugins.seo 作为插件选项提供给 vuepress-plugin-seo2。 插件会通过向网站 &lt;head&gt; 注入标签，让你的网站完全支持 开放内容协议 OGP 和 JSON-LD 1.1，以全面增强站点的搜索引擎优化性。 如果不需要这个插件，请设置在主题选项中设置 plugins.seo: false。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-hope.vuejs.press/guide/advanced/seo.html"}],["meta",{"property":"og:url","content":"https://theme-hope.vuejs.press/zh/guide/advanced/seo.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"SEO"}],["meta",{"property":"og:description","content":"vuepress-theme-hope 通过内置 为提供 SEO 增强功能。 为了使插件能够更好的工作，你可能需要查看一下 页面配置 并合理的配置它们。 相关信息 vuepress-theme-hope 将主题选项中的 plugins.seo 作为插件选项提供给 vuepress-plugin-seo2。 插件会通过向网站 &lt;head&gt; 注入标签，让你的网站完全支持 开放内容协议 OGP 和 JSON-LD 1.1，以全面增强站点的搜索引擎优化性。 如果不需要这个插件，请设置在主题选项中设置 plugins.seo: false。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-01-19T06:41:47.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"高级"}],["meta",{"property":"article:tag","content":"SEO"}],["meta",{"property":"article:modified_time","content":"2023-01-19T06:41:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SEO\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-19T06:41:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"开箱即用","slug":"开箱即用","link":"#开箱即用","children":[{"level":3,"title":"默认的 OGP 生成逻辑","slug":"默认的-ogp-生成逻辑","link":"#默认的-ogp-生成逻辑","children":[]},{"level":3,"title":"默认的 JSON-LD 生成逻辑","slug":"默认的-json-ld-生成逻辑","link":"#默认的-json-ld-生成逻辑","children":[]}]},{"level":2,"title":"直接添加 head 标签","slug":"直接添加-head-标签","link":"#直接添加-head-标签","children":[]},{"level":2,"title":"自定义生成过程","slug":"自定义生成过程","link":"#自定义生成过程","children":[{"level":3,"title":"页面类型","slug":"页面类型","link":"#页面类型","children":[]},{"level":3,"title":"OGP","slug":"ogp","link":"#ogp","children":[]},{"level":3,"title":"JSON-LD","slug":"json-ld","link":"#json-ld","children":[]}]},{"level":2,"title":"规范链接","slug":"规范链接","link":"#规范链接","children":[{"level":3,"title":"自定义 head 标签","slug":"自定义-head-标签","link":"#自定义-head-标签","children":[]}]},{"level":2,"title":"SEO 介绍","slug":"seo-介绍","link":"#seo-介绍","children":[]},{"level":2,"title":"RDFa 1.1","slug":"rdfa-1-1","link":"#rdfa-1-1","children":[]},{"level":2,"title":"相关文档","slug":"相关文档","link":"#相关文档","children":[]},{"level":2,"title":"相关工具","slug":"相关工具","link":"#相关工具","children":[]}],"git":{"createdTime":1645520226000,"updatedTime":1674110507000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":9},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5}]},"readingTime":{"minutes":5.68,"words":1705},"filePathRelative":"zh/guide/advanced/seo.md","localizedDate":"2022年2月22日","excerpt":"<p><code>vuepress-theme-hope</code> 通过内置  为提供 SEO 增强功能。</p>\\n<p>为了使插件能够更好的工作，你可能需要查看一下 <a href=\\"/zh/config/frontmatter/info.html\\" target=\\"blank\\">页面配置</a> 并合理的配置它们。</p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p><code>vuepress-theme-hope</code> 将主题选项中的 <code>plugins.seo</code> 作为插件选项提供给 <code>vuepress-plugin-seo2</code>。</p>\\n</div>\\n<p>插件会通过向网站 <code>&lt;head&gt;</code> 注入标签，让你的网站完全支持 <a href=\\"https://ogp.me/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">开放内容协议 OGP</a> 和 <a href=\\"https://www.w3.org/TR/json-ld-api/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JSON-LD 1.1</a>，以全面增强站点的搜索引擎优化性。</p>\\n<p>如果不需要这个插件，请设置在主题选项中设置 <code>plugins.seo: false</code>。</p>\\n","copyright":{"author":"Mr.Hope"},"autoDesc":true}');export{e as data};
