import{_ as a,r as o,o as s,c as d,a as i,e as l,w as r,d as e,b as t,f as c}from"./app-c5a3c96d.js";const h="/assets/slides-light-4d065fbe.png",p="/assets/slides-dark-377abe9e.png",m={},u=t("p",null,[t("code",null,"vuepress-theme-hope"),e(" allows you to add slides pages.")],-1),g=t("p",null,[e("You need to set "),t("code",null,"layout: Slide"),e(" in the frontmatter of the corresponding page to enable the slides page.")],-1),_=t("h2",{id:"demo",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),e(" Demo")],-1),f=c('<p><img src="'+h+'" alt="Slide page screenshot" data-mode="lightmode-only" loading="lazy"><br><img src="'+p+`" alt="Slide page screenshot" data-mode="darkmode-only" loading="lazy"></p><h2 id="attention" tabindex="-1"><a class="header-anchor" href="#attention" aria-hidden="true">#</a> Attention</h2><div class="hint-container warning"><p class="hint-container-title">Enable presentation</p><p>You should enable presentation feature in <code>vuepress-plugin-md-enhance</code> by setting <code>plugins.mdEnhance.presentation</code> in theme options, otherwise the layout won&#39;t be rendered correctly.</p></div><div class="hint-container warning"><p class="hint-container-title">No multiple slides</p><p>You should only include a single slide syntax on this page to avoid rendering problems.</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>@slidestart [your theme]

// your slides

@slideend
</code></pre></div></div>`,4);function y(b,v){const n=o("ProjectLink");return s(),d("div",null,[u,g,i(" more "),_,l(n,{name:"md-enhance",path:"/guide/presentation/demo.html"},{default:r(()=>[e("Here is a demo containing all the slide features")]),_:1}),e("."),f])}const x=a(m,[["render",y],["__file","slides.html.vue"]]);export{x as default};
