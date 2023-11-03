import{i as t,y as o,M as n,z as c,o as r,c as l,a as i,e as p,l as s,B as h,b as d,f as u,_ as m}from"./app-92e2b39d.js";const f=d("p",null,"The theme allows you to customize theme color and even provide a picker.",-1),k=u(`<h2 id="setting-default-theme-color" tabindex="-1"><a class="header-anchor" href="#setting-default-theme-color" aria-hidden="true">#</a> Setting Default Theme Color</h2><p>You should set the default theme color of your site in <code>.vuepress/styles/palette.scss</code> through <code>$theme-color</code>:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
</code></pre></div><h2 id="theme-color-picker-title" tabindex="-1"><a class="header-anchor" href="#theme-color-picker-title" aria-hidden="true">#</a> Theme Color Picker</h2><p>You should set a list of theme colors you want to use in <code>.vuepress/styles/config.scss</code> with <code>$theme-colors</code>:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-colors</span></span><span class="token punctuation">:</span> #2196f3<span class="token punctuation">,</span> #f26d6d<span class="token punctuation">,</span> #3eaf7c<span class="token punctuation">,</span> #fb9b5f<span class="token punctuation">;</span>
</code></pre></div><h3 id="try-it" tabindex="-1"><a class="header-anchor" href="#try-it" aria-hidden="true">#</a> Try it</h3>`,7),_=t({__name:"theme-color.html",setup(g){const a=o(n(c).filter(([e])=>e.startsWith("theme-")));return(e,v)=>(r(),l("div",null,[f,i(" more "),k,p(s(h),{themeColor:s(a)},null,8,["themeColor"])]))}}),b=m(_,[["__file","theme-color.html.vue"]]);export{b as default};
