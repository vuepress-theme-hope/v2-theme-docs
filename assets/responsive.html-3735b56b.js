import{_ as e,o as i,c as o,a as t,b as a,f as l}from"./app-ce8d7da6.js";const n={},s=a("p",null,"The whole theme is responsive, which means it works well on different screen sizes.",-1),d=l('<h2 id="introduction-to-responsive-layout" tabindex="-1"><a class="header-anchor" href="#introduction-to-responsive-layout" aria-hidden="true">#</a> Introduction to Responsive Layout</h2><p>On mobile devices:</p><ul><li>In navbar, site name will be hidden, and elements such as navbar links, theme switch, and full-screen button will be collapsed into additional pop-up window, and toggled through the button on the right side of navbar;</li><li>The sidebar will be displayed in the form of a side menu and hidden by default, and the sidebar toggle button is displayed on the left side of navbar to control the pop-up and retraction of the sidebar;</li><li>Path navigation, body text, back to top button text has smaller font size</li><li>The title of the current page is collapsed into the sidebar</li></ul><p>On tablet/laptop devices:</p><ul><li>Navbar links will appear in the navbar</li><li>The sidebar will be displayed as a collapsible menu</li><li>The title of the current page is collapsed into the sidebar</li></ul><p>On pc device:</p><ul><li>Navbar links will appear in the navbar</li><li>The sidebar will stick to the left side of the content on the page</li><li>The title of the current page will be displayed on the right side of the page</li></ul><h2 id="responsive-configuration" tabindex="-1"><a class="header-anchor" href="#responsive-configuration" aria-hidden="true">#</a> Responsive configuration</h2><p>Themes provide breakpoint variables for controlling responsive layout behavior. You can modify them in <code>.vuepress/styles/config.scss</code>:</p><ul><li><code>$pc</code>: PC responsive layout breakpoint, default is <code>1440px</code></li><li><code>$laptop</code>: notebook responsive layout breakpoint, default is <code>1280px</code></li><li><code>$pad</code>: Large pad responsive layout breakpoint, defaults to <code>959px</code></li><li><code>$tablet</code>: Tablet responsive layout breakpoint, default is <code>768px</code></li><li><code>$mobile</code>: Mobile responsive layout breakpoint, default is <code>480px</code></li></ul><div class="hint-container warning"><p class="hint-container-title">Note</p><p><code>$tablet</code> and <code>$pc</code> can only be based on the pixel size.</p></div>',11);function r(c,p){return i(),o("div",null,[s,t(" more "),d])}const u=e(n,[["render",r],["__file","responsive.html.vue"]]);export{u as default};
