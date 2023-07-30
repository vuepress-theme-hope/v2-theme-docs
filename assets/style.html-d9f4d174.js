import{_ as o,o as e,c as d,f as c}from"./app-c5a3c96d.js";const l={},i=c('<h2 id="预处理器变更" tabindex="-1"><a class="header-anchor" href="#预处理器变更" aria-hidden="true">#</a> 预处理器变更</h2><p>整个样式系统从 Stylus 迁移到 Scss，这带来了以下更改:</p><ul><li><code>palette.styl</code> 拆分为 <code>config.scss</code> 和 <code>palette.scss</code></li><li><code>index.styl</code> 改为 <code>index.scss</code></li></ul><h2 id="样式变更" tabindex="-1"><a class="header-anchor" href="#样式变更" aria-hidden="true">#</a> 样式变更</h2><h3 id="响应式布局断点" tabindex="-1"><a class="header-anchor" href="#响应式布局断点" aria-hidden="true">#</a> 响应式布局断点</h3><p>移动至 <code>config.scss</code>。</p><ul><li><code>$MQWide</code> 重命名为 <code>$pc</code></li><li><code>$MQNormal</code> 重命名为 <code>$laptop</code></li><li><code>$MQNarrow</code> 重命名为 <code>$pad</code></li><li><code>$MQMobile</code> 重命名为 <code>$tablet</code></li><li><code>$MQMobileNarrow</code> 重命名为 <code>$mobile</code></li></ul><h3 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h3><p>移动至 <code>palette.scss</code>。</p><ul><li><code>$mobileSidebarWidth</code> 重命名为 <code>$sidebar-mobile-width</code></li><li><code>$lineNumbersWrapperWidth</code> 重命名为 <code>$line-numbers-width</code></li></ul><h3 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色" aria-hidden="true">#</a> 颜色</h3><p>移动至 <code>palette.scss</code>。</p><ul><li><p>新增 <code>$bg-color-secondary</code>，<code>$bg-color-tertiary</code></p></li><li><p><code>$accentColor</code> 重命名为 <code>$theme-color</code></p></li><li><p><code>$textColor</code>, <code>$darkTextColor</code> 合并为 <code>$text-color</code></p></li><li><p><code>$bgColor</code>, <code>$darkBgColor</code> 合并为 <code>$bg-color</code></p></li><li><p><code>$cardShadowColor</code>, <code>$darkCardShadowColor</code> 合并为 <code>$card-shadow</code></p></li><li><p><code>$boxShadowColor</code>, <code>$darkBoxShadowColor</code> 合并为 <code>$box-shadow</code></p></li><li><p><code>$bgColorLight</code>, <code>$darkBgColorLight</code> 移除</p></li><li><p><code>$bg-color-blur</code>, <code>$darkBgColorBlur</code> 移除</p></li><li><p><code>$arrowBgColor</code> 移除</p></li><li><p><code>$colorPicker</code> 移除</p><p>现在你只需要在主题选项中设置主题色</p></li><li><p><code>$codeBgColor</code>, <code>$darkCodeBgColor</code> 移除，请在主题选项中设置 <code>plugins.prismjs</code> (prismjs)，或在 <code>config.scss</code> 中配置 <code>$code-bg-color</code> (shiki)。</p></li></ul><h3 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h3><ul><li>新增 <code>$font-family</code>, <code>$font-family-heading</code> 和 <code>$font-family-mono</code></li></ul><h3 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h3><ul><li>新增 <code>$color-transition</code> 和 <code>$transform-transition</code></li></ul>',17),a=[i];function r(t,s){return e(),d("div",null,a)}const n=o(l,[["render",r],["__file","style.html.vue"]]);export{n as default};
