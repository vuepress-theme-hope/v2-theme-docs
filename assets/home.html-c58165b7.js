import{_ as c,r as i,o as l,c as d,b as r,e,f as o,a,w as n,g as s}from"./app-25dbeecb.js";const h="/assets/blog-light-13fd7839.jpg",u="/assets/blog-dark-b6d51e97.jpg",p={},m=e("p",null,[e("code",null,"vuepress-theme-hope"),o(" allows you to enable a blog-style homepage.")],-1),g=e("p",null,[o("You need to set "),e("code",null,"layout: BlogHome"),o(" and "),e("code",null,"home: true"),o(" in the frontmatter of homepage.")],-1),f=s('<p><img src="'+h+'" alt="Homepage screenshot" data-mode="lightmode-only" loading="lazy"><img src="'+u+'" alt="Homepage screenshot" data-mode="darkmode-only" loading="lazy"></p><h2 id="homepage-information" tabindex="-1"><a class="header-anchor" href="#homepage-information" aria-hidden="true">#</a> Homepage information</h2><p>You can use <code>heroText</code> to set the main title and <code>tagline</code> to set the subtitle.</p><p>If you have a logo, you can place it in the <code>public</code> folder and set it via <code>heroImage</code>, if you want to display another logo in night mode, you can use <code>heroImageDark</code>. For better A11y, we recommend that you set the description of Logo to <code>heroAlt</code>.</p><p>You can set the background image through <code>bgImage</code> and <code>bgImageDark</code>, but you need to pay attention that you must fill in the full URL or absolute path. If you want the information to be displayed in full screen, you can set <code>heroFullScreen: true</code>.</p><p>If you need to customize some styles, you can set the style of the logo and background image through <code>heroImageStyle</code> and <code>bgImageStyle</code>.</p><h2 id="project-display" tabindex="-1"><a class="header-anchor" href="#project-display" aria-hidden="true">#</a> Project Display</h2><p>Typically, you might want to display some projects, books, articles, links, friend links, etc. on your homepage.</p><p>You can set them via <code>projects</code>, which is an array where each element is an object with the following keys:</p><ul><li><p><code>name</code>: required, project name</p></li><li><p><code>link</code>: required, project link, fill in an external path or absolute path</p></li><li><p><code>desc</code>: project description</p></li><li><p><code>icon</code>: Icon, you can fill in full path or absolute path image link, also icon FontClass is supported</p><p>We provide these icons as built-in support either: <code>&quot;link&quot;</code>, <code>&quot;project&quot;</code>, <code>&quot;book&quot;</code>, <code>&quot;article&quot;</code>, <code>&quot;friend&quot;</code>。</p></li></ul>',10),y={class:"hint-container info"},_=e("p",{class:"hint-container-title"},"Info",-1),b=e("h2",{id:"living-demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#living-demo","aria-hidden":"true"},"#"),o(" Living Demo")],-1);function k(j,q){const t=i("RouterLink");return l(),d("div",null,[m,g,r(" more "),f,e("div",y,[_,e("p",null,[o("For complete configuration items, see "),a(t,{to:"/config/frontmatter/blog-home.html"},{default:n(()=>[o("Blog Home Frontmatter Configuration")]),_:1}),o(".")])]),b,e("ul",null,[e("li",null,[a(t,{to:"/demo/blog-home.html"},{default:n(()=>[o("A blog homepage for current docs")]),_:1})]),e("li",null,[a(t,{to:"/demo/custom-blog-home.html"},{default:n(()=>[o("A customized blog homepage for current docs")]),_:1})])])])}const w=c(p,[["render",k],["__file","home.html.vue"]]);export{w as default};
