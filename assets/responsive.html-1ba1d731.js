import{a3 as t,Z as a,_ as d,a4 as n,a1 as e,a2 as o,$ as c,a0 as i,a5 as s,D as r}from"./framework-32163d8a.js";const p={},h=e("p",null,"整个主题都是响应式的，这意味着它可以在不同的屏幕尺寸上正常工作。",-1),_=s('<h2 id="响应式布局介绍" tabindex="-1"><a class="header-anchor" href="#响应式布局介绍" aria-hidden="true">#</a> 响应式布局介绍</h2><p>在中小型设备上:</p><ul><li>导航栏中，站点名称会被隐藏，导航栏链接以及主题切换、全屏按钮之类的元素会被收起至额外的弹窗，并通过导航栏右侧的按钮进行切换；</li><li>侧边栏会以侧拉菜单的形式显示并默认隐藏，导航栏左侧显示侧边栏切换按钮控制侧边栏侧弹出与收回；</li><li>路径导航、正文、返回顶部按钮文字缩小</li><li>当前页面的标题收起至侧边栏中</li></ul><p>在平板/笔记本设备上:</p><ul><li>导航栏链接会显示在导航栏中</li><li>侧边栏会以折叠菜单的形式显示</li><li>当前页面的标题收起至侧边栏中</li></ul><p>在电脑设备上:</p><ul><li>导航栏链接会显示在导航栏中</li><li>侧边栏会紧贴在页面著内容的左侧</li><li>当前页面的标题将显示在页面右侧</li></ul><h2 id="响应式配置" tabindex="-1"><a class="header-anchor" href="#响应式配置" aria-hidden="true">#</a> 响应式配置</h2><p>主题提供了断点变量用于控制响应式布局的行为。你可以在 <code>.vuepress/styles/config.scss</code> 中修改它们:</p><ul><li><code>$pc</code>: 电脑响应式布局断点，默认为 <code>1440px</code></li><li><code>$laptop</code>: 笔记本响应式布局断点，默认为 <code>1280px</code></li><li><code>$pad</code>: 大型平板响应式布局断点，默认为 <code>959px</code></li><li><code>$tablet</code>: 平板响应式布局断点，默认为 <code>768px</code></li><li><code>$mobile</code>: 手机响应式布局断点，默认为 <code>480px</code></li></ul>',10),u=e("code",null,"$tablet",-1),m=e("code",null,"$pc",-1),f=e("code",null,"mobileBreakPoint",-1),x=e("code",null,"pcBreakPoint",-1);function b(k,$){const l=r("RouterLink");return a(),d("div",null,[h,n(" more "),_,e("p",null,[o("特别的，"),u,o(" 和 "),m,o(" 将只能基于像素大小，如果你修改了它们，你需要同时在主题配置中修改 "),c(l,{to:"/zh/config/theme/appearance.html#mobilebreakpoint"},{default:i(()=>[f]),_:1}),o(" 和 "),c(l,{to:"/zh/config/theme/appearance.html#pcbreakpoint"},{default:i(()=>[x]),_:1}),o(" 为修改后的像素大小。")])])}const B=t(p,[["render",b],["__file","responsive.html.vue"]]);export{B as default};
