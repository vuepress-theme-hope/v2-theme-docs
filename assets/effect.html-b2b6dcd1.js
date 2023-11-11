import{_ as s,o as a,c as e,a as n,b as t,f as o}from"./app-fe94cd90.js";const c={},l=t("p",null,"此教程引导你如何自定义主题特效。",-1),p=o(`<h2 id="清除特效" tabindex="-1"><a class="header-anchor" href="#清除特效" aria-hidden="true">#</a> 清除特效</h2><p>主题在默认情况下，会:</p><ul><li>使用色卡对分类、标签进行装饰</li><li>在切换页面、元素时添加动画</li><li>为主页元素添加缓入动画、以及为特性添加悬浮特效。</li><li>使用较为显眼的代码复制按钮</li><li>使用较为花哨的提示框。</li><li>在日间模式和夜间模式切换时添加渐入</li></ul><p>如果你需要清除这些花哨的样式，请在主题选项中配置 <code>pure: true</code> 开启纯净模式。</p><p>同时，你可以通过控制调色板文件中的 <code>$color-transition</code> 和 <code>transform-transition</code> 来控制动画的时长:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/palette.scss</span>

<span class="token property"><span class="token variable">$color-transition</span></span><span class="token punctuation">:</span> 0s<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$transform-transition</span></span><span class="token punctuation">:</span> 0s<span class="token punctuation">;</span>
</code></pre></div>`,6);function r(i,d){return a(),e("div",null,[l,n(" more "),p])}const _=s(c,[["render",r],["__file","effect.html.vue"]]);export{_ as default};
