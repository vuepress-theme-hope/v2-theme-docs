import{i as n,R as o,M as c,z as r,o as l,c as p,a as e,e as d,l as a,B as i,b as h,f as u,_ as m}from"./app-ce8d7da6.js";const f=h("p",null,"主题允许你自定义主题颜色，甚至提供选择器。",-1),_=u(`<h2 id="设置默认主题色" tabindex="-1"><a class="header-anchor" href="#设置默认主题色" aria-hidden="true">#</a> 设置默认主题色</h2><p>你应该在 <code>.vuepress/styles/palette.scss</code> 中通过 <code>$theme-color</code> 设置站点的默认主题颜色：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
</code></pre></div><h2 id="主题色选择器" tabindex="-1"><a class="header-anchor" href="#主题色选择器" aria-hidden="true">#</a> 主题色选择器</h2><p>你需要在 <code>.vuepress/styles/config.scss</code> 中通过 <code>$theme-colors</code> 设置一系列你想要启用的其他主题色：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-colors</span></span><span class="token punctuation">:</span> #2196f3<span class="token punctuation">,</span> #f26d6d<span class="token punctuation">,</span> #3eaf7c<span class="token punctuation">,</span> #fb9b5f<span class="token punctuation">;</span>
</code></pre></div><h3 id="尝试" tabindex="-1"><a class="header-anchor" href="#尝试" aria-hidden="true">#</a> 尝试</h3>`,7),k=n({__name:"theme-color.html",setup(b){const t=o(c(r).filter(([s])=>s.startsWith("theme-")));return(s,v)=>(l(),p("div",null,[f,e(" more "),_,e(" markdownlint-disable"),d(a(i),{themeColor:a(t)},null,8,["themeColor"]),e(" markdownlint-restore ")]))}}),x=m(k,[["__file","theme-color.html.vue"]]);export{x as default};
