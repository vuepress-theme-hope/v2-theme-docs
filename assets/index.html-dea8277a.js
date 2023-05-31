import{_ as n,r as s,o as a,c as d,a as i,b as e,e as l,w as c,d as o,f as u}from"./app-b495a394.js";const r={},h=e("p",null,"此章节向你演示常见的自定义需求涉及的相关代码。",-1),_=e("h2",{id:"添加组件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#添加组件","aria-hidden":"true"},"#"),o(" 添加组件")],-1),p=e("p",null,"每个 markdown 文件将在 VuePress 中转换为一个 Vue 组件，因此你可以轻松导入和使用 Vue 组件。",-1),m=u('<h2 id="自定义样式的方式" tabindex="-1"><a class="header-anchor" href="#自定义样式的方式" aria-hidden="true">#</a> 自定义样式的方式</h2><p>你可以在自己文档内的 <code>.vuepress/styles</code> 文件夹下放置三个文件进行样式配置。</p><ul><li><p><code>index.scss</code>: 你可以在这里通过 CSS 或 SCSS 语法放置自己的样式以对主题的外观进行修改。</p><p>填入的样式会注入到主题和插件样式的后部。</p></li><li><p><code>config.scss</code>: 你可以在这里设置一些样式相关变量，包括响应式断点、容器类名、代码主题等。</p></li><li><p><code>palette.scss</code>: 你可以在这里设置一些颜色和布局的相关变量，比如主题色、背景色、导航栏高度等。</p></li></ul>',3),f=e("h2",{id:"详情",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#详情","aria-hidden":"true"},"#"),o(" 详情")],-1);function k(x,z){const t=s("RouterLink");return a(),d("div",null,[h,i(" more "),_,p,e("ul",null,[e("li",null,[l(t,{to:"/zh/cookbook/customize/component.html"},{default:c(()=>[o("添加组件")]),_:1})])]),m,e("p",null,[o("上述文件支持的完整配置列表详见 "),l(t,{to:"/zh/config/style.html"},{default:c(()=>[o("配置 → 样式")]),_:1}),o("。")]),f,e("ul",null,[e("li",null,[e("p",null,[l(t,{to:"/zh/cookbook/customize/layout.html"},{default:c(()=>[o("修改布局")]),_:1})])]),e("li",null,[e("p",null,[l(t,{to:"/zh/cookbook/customize/color.html"},{default:c(()=>[o("修改颜色")]),_:1})])]),e("li",null,[e("p",null,[l(t,{to:"/zh/cookbook/customize/font.html"},{default:c(()=>[o("自定义字体")]),_:1})])]),e("li",null,[e("p",null,[l(t,{to:"/zh/cookbook/customize/effect.html"},{default:c(()=>[o("修改特效")]),_:1})])])])])}const V=n(r,[["render",k],["__file","index.html.vue"]]);export{V as default};