import{_ as n,r as s,o,c as d,a as i,e as c,w as r,d as e,b as a,f as l}from"./app-ce8d7da6.js";const h="/assets/slides-light-77be1ca0.png",p="/assets/slides-dark-9d1f282d.png",m={},_=a("p",null,[a("code",null,"vuepress-theme-hope"),e(" 允许你添加幻灯片页面。")],-1),u=a("p",null,[e("你需要在相应的页面的 frontmatter 中，设置 "),a("code",null,"layout: Slide"),e(" 来开启幻灯片风格。")],-1),g=a("h2",{id:"演示",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),e(" 演示")],-1),f=l('<p><img src="'+h+'" alt="幻灯片页截图" data-mode="lightmode-only" loading="lazy"><img src="'+p+`" alt="幻灯片页截图" data-mode="darkmode-only" loading="lazy"></p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><div class="hint-container warning"><p class="hint-container-title">启用功能</p><p>你应该在主题选项中通过设置 <code>plugins.mdEnhance.presentation</code> 在 <code>vuepress-plugin-md-enhance</code> 中启用幻灯片功能，否则幻灯片无法被正确渲染。</p></div><div class="hint-container warning"><p class="hint-container-title">不含多个幻灯片</p><p>该页面只能拥有一个幻灯片语法。多个幻灯片可能会引发渲染问题。</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>@slidestart [your theme]

// your slides

@slideend
</code></pre></div></div>`,4);function v(k,x){const t=s("ProjectLink");return o(),d("div",null,[_,u,i(" more "),g,c(t,{name:"md-enhance",path:"/zh/guide/presentation/demo.html"},{default:r(()=>[e("这里是一个展示了所有幻灯片功能的案例")]),_:1}),e("."),f])}const w=n(m,[["render",v],["__file","slides.html.vue"]]);export{w as default};
