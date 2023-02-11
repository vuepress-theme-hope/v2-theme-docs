import{a4 as c,_ as l,$ as d,a5 as i,a2 as e,a3 as s,a0 as t,a1 as n,a6 as o,k as h}from"./framework-bb5a5b49.js";const r={},p=e("p",null,"此教程指导你如何修改主题布局。",-1),_=e("h2",{id:"修改主题配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#修改主题配置","aria-hidden":"true"},"#"),s(" 修改主题配置")],-1),u=o(`<h2 id="修改-scss-变量" tabindex="-1"><a class="header-anchor" href="#修改-scss-变量" aria-hidden="true">#</a> 修改 SCSS 变量</h2><h3 id="主题断点" tabindex="-1"><a class="header-anchor" href="#主题断点" aria-hidden="true">#</a> 主题断点</h3><p>主题在不同屏幕宽度下会自动响应式应用不同布局，如果你需要修改这些断点，可以在 配置文件中修改，</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/config.scss</span>

<span class="token comment">// 修改桌面布局的断点</span>
<span class="token variable">$pc</span> = 1280px<span class="token punctuation">;</span>
</code></pre></div>`,4),m=e("code",null,".vuepress/styles/config.scss",-1),f=e("code",null,"$pc",-1),v=e("code",null,"$laptop",-1),x=e("code",null,"$pad",-1),g=e("code",null,"$tablet",-1),k=e("code",null,"$mobile",-1),b=o(`<h3 id="主题布局尺寸" tabindex="-1"><a class="header-anchor" href="#主题布局尺寸" aria-hidden="true">#</a> 主题布局尺寸</h3><p>主题在调色板文件中提供了常见尺寸的变量，你可以在调色版文件中修改这些变量，以达到修改布局尺寸的目的。</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/palette.scss</span>

<span class="token comment">// 修改导航栏高度</span>
<span class="token variable">$navbar-height</span> = 80px<span class="token punctuation">;</span>
</code></pre></div>`,3),y=e("code",null,".vuepress/styles/palette.scss",-1),$=o('<h2 id="修改其他布局" tabindex="-1"><a class="header-anchor" href="#修改其他布局" aria-hidden="true">#</a> 修改其他布局</h2><p>如果你希望改变主题布局，但主题并未提供相关选项时，你可以考虑如下方法：</p><h3 id="通过-css" tabindex="-1"><a class="header-anchor" href="#通过-css" aria-hidden="true">#</a> 通过 CSS</h3><ul><li><p>如果你对主题的样式不满意，你可以通过样式文件对主题组件的样式进行调节。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>为了覆盖原有样式，你需要使用相同或更高优先级的选择器或者直接使用 <code>!important</code>。</p></div></li><li><p>如果你希望去掉一些功能，你可以在样式文件中通过 <code>display: none</code> 隐藏相关元素。</p></li></ul>',4),S={class:"hint-container note"},z=e("p",{class:"hint-container-title"},"注",-1),C=e("code",null,".vuepress/styles/index.scss",-1),N=e("h3",{id:"通过覆盖组件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#通过覆盖组件","aria-hidden":"true"},"#"),s(" 通过覆盖组件")],-1),V=e("p",null,"所有的主题组件都是通过别名进行注册与调用的，这意味着你可以通过覆盖组件别名，将主题的任一组件替换为你自己的组件。",-1),B=e("p",null,"如果你只是想在页面的特定位置添加新内容，那么你可以通过替换组件，并引用原组件通过原组件的插槽来实现。",-1);function L(R,w){const a=h("RouterLink");return l(),d("div",null,[p,i(" more "),_,e("p",null,[s("主题提供了很多布局有关的选项，供你自定义主题的布局，关于这些选项详见 "),t(a,{to:"/zh/config/theme/layout.html"},{default:n(()=>[s("主题配置 → 布局")]),_:1}),s("。")]),u,e("p",null,[s("配置文件 "),m,s(" 以及断点变量 "),f,s("、"),v,s("、"),x,s("、"),g,s("、"),k,s(" 的具体介绍详见 "),t(a,{to:"/zh/config/style.html#configscss"},{default:n(()=>[s("主题配置 → 样式")]),_:1}),s("。")]),b,e("p",null,[s("调色板文件 "),y,s(" 以及布局变量的介绍详见 "),t(a,{to:"/zh/config/style.html#palettescss"},{default:n(()=>[s("主题配置 → 样式")]),_:1}),s("。")]),$,e("div",S,[z,e("p",null,[s("样式文件为项目目录下的 "),C,s("，详见 "),t(a,{to:"/zh/config/style.html#indexscss"},{default:n(()=>[s("主题配置 → 样式")]),_:1})])]),N,V,B,e("p",null,[s("组件别名、组件插槽与替换方式详见 "),t(a,{to:"/zh/cookbook/advanced/replace.html"},{default:n(()=>[s("高级 → 替换主题组件")]),_:1}),s("。")])])}const T=c(r,[["render",L],["__file","layout.html.vue"]]);export{T as default};
