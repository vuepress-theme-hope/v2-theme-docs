import{_ as l,r as i,o as a,c,b as e,e as s,w as n,d as o,f as d}from"./app-8382b37b.js";const u={},r=e("p",null,"This section shows you the relevant codes involved in common customization.",-1),h=e("h2",{id:"adding-component",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#adding-component","aria-hidden":"true"},"#"),o(" Adding Component")],-1),m=e("p",null,"Each markdown file will be converted to a Vue component in VuePress, so you and import and use Vue components easily.",-1),p=d('<h2 id="how-to-customize-styles" tabindex="-1"><a class="header-anchor" href="#how-to-customize-styles" aria-hidden="true">#</a> How to Customize Styles</h2><p>You can create three files under <code>.vuepress/styles</code> folder in your own document for style customization.</p><ul><li><p><code>index.scss</code>: You can place your own styles via CSS or SCSS syntax to modify the appearance of the theme here.</p><p>These styles will be injected after theme and plugin styles.</p></li><li><p><code>config.scss</code>: You can set some style related variables here, including responsive breakpoints, container class names, code themes, etc.</p></li><li><p><code>palette.scss</code>: You can set some color and layout related variables here, such as theme color, background color, navbar height, etc.</p></li></ul>',3),f=e("h2",{id:"details",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#details","aria-hidden":"true"},"#"),o(" Details")],-1);function _(y,b){const t=i("RouterLink");return a(),c("div",null,[r,h,m,e("ul",null,[e("li",null,[s(t,{to:"/cookbook/customize/component.html"},{default:n(()=>[o("Adding Components")]),_:1})])]),p,e("p",null,[o("For the complete config list supported by the above files, see "),s(t,{to:"/config/style.html"},{default:n(()=>[o("Config → Style")]),_:1}),o(".")]),f,e("ul",null,[e("li",null,[e("p",null,[s(t,{to:"/cookbook/customize/layout.html"},{default:n(()=>[o("Customizing layouts")]),_:1})])]),e("li",null,[e("p",null,[s(t,{to:"/cookbook/customize/color.html"},{default:n(()=>[o("Customizing colors")]),_:1})])]),e("li",null,[e("p",null,[s(t,{to:"/cookbook/customize/font.html"},{default:n(()=>[o("Customizing fonts")]),_:1})])]),e("li",null,[e("p",null,[s(t,{to:"/cookbook/customize/effect.html"},{default:n(()=>[o("Customizing effects")]),_:1})])])])])}const g=l(u,[["render",_],["__file","index.html.vue"]]);export{g as default};