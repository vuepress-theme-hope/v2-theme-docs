import{aj as d,ak as k,am as l,an as c,ao as i,ap as n,aq as h,as as s,ar as o,al as g}from"./app-BLmUDr3s.js";const m={},u={id:"enable",tabindex:"-1"},A={class:"header-anchor",href:"#enable"};function y(v,e){const p=o("Badge"),r=o("CodeTabs");return g(),k("div",null,[e[19]||(e[19]=l('<p><code>vuepress-theme-hope</code> implements the comment feature with built-in <a href="https://ecosystem.vuejs.press/plugins/blog/comment/" target="_blank" rel="noopener noreferrer"><code>@vuepress/plugin-comment</code></a>.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p><code>vuepress-theme-hope</code> passes <code>plugins.comment</code> in theme options as plugin options to <code>@vuepress/plugin-comment</code>.</p></div>',2)),c(" more "),i("h2",u,[i("a",A,[i("span",null,[e[0]||(e[0]=n("Enable ")),h(p,{text:"Support page config"})])])]),e[20]||(e[20]=l(`<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      comment</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // choose a comment provider</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        provider</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Waline&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // provider options</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        serverURL</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;...&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// your serverURL</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Comment feature is enabled globally by default, controlled by <code>plugins.comment.comment</code> options.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>For the complete config item of the plugin, please see <a href="https://ecosystem.vuejs.press/plugins/blog/comment/" target="_blank" rel="noopener noreferrer">plugin documentation</a>.</p></div><h2 id="comment-provider" tabindex="-1"><a class="header-anchor" href="#comment-provider"><span>Comment Provider</span></a></h2><p>Currently, you can choose from Giscus, Waline, Twikoo and Artalk.</p><div class="hint-container tip"><p class="hint-container-title">Comment service selection</p><ul><li>Giscus is recommended if your blog or documentation is primarily geared towards programmers.</li><li>If your blog or documentation is for the general public, Waline is recommended.</li></ul></div><h2 id="giscus" tabindex="-1"><a class="header-anchor" href="#giscus"><span>Giscus</span></a></h2><p>Giscus is a GitHub Discussion based commenting system that is easy to start.</p><h3 id="preparation" tabindex="-1"><a class="header-anchor" href="#preparation"><span>Preparation</span></a></h3><ol><li>You need to create a public repository and open discussion as a place to store comments</li><li>You need to install the <a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer">Giscus App</a> to have permission to access the corresponding repository.</li></ol><p>After completing the above steps, please go to the <a href="https://giscus.app" target="_blank" rel="noopener noreferrer">Giscus page</a> to get your settings. You just need to fill in the repository and Discussion categories, then scroll to the &quot;Enable giscus&quot; section at the bottom of the page and copy the <code>data-repo</code>, <code>data-repo-id</code>, <code>data-category</code> and <code>data-category-id</code> four items as they are required.</p><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h3><p>Please pass <code>data-repo</code>, <code>data-repo-id</code>, <code>data-category</code> and <code>data-category-id</code> as plugin options as <code>repo</code>, <code>repoId</code>, <code>category</code> <code>categoryId</code>.</p><p>For other options, see <a href="https://ecosystem.vuejs.press/plugins/blog/comment/giscus/config.html" target="_blank" rel="noopener noreferrer">Giscus Config</a>.</p><h2 id="waline" tabindex="-1"><a class="header-anchor" href="#waline"><span>Waline</span></a></h2>`,15)),h(r,{id:"77",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:s(({value:a,isActive:t})=>e[1]||(e[1]=[n("pnpm")])),title1:s(({value:a,isActive:t})=>e[2]||(e[2]=[n("yarn")])),title2:s(({value:a,isActive:t})=>e[3]||(e[3]=[n("npm")])),tab0:s(({value:a,isActive:t})=>e[4]||(e[4]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pnpm"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @waline/client")])])])],-1)])),tab1:s(({value:a,isActive:t})=>e[5]||(e[5]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"yarn"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @waline/client")])])])],-1)])),tab2:s(({value:a,isActive:t})=>e[6]||(e[6]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"npm"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," i"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @waline/client")])])])],-1)])),_:1}),e[21]||(e[21]=l(`<h3 id="get-app-id-and-app-key" tabindex="-1"><a class="header-anchor" href="#get-app-id-and-app-key"><span>Get APP_ID and APP_Key</span></a></h3><p><a href="https://console.leancloud.app/login" target="_blank" rel="noopener noreferrer">Sign in</a> or <a href="https://console.leancloud.app/register" target="_blank" rel="noopener noreferrer">sign up</a> leancloud. Then create new application in Leancloud, and you will get APP ID / APP Key / APP Master Key.</p><p>After that, create a vercel app using the below button.</p><figure><a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Vercel" tabindex="0" loading="lazy"></a><figcaption>Vercel</figcaption></figure><p>Then input your new GitHub repo name and set <code>LEAN_ID</code>, <code>LEAN_KEY</code> and <code>LEAN_MASTER_KEY</code> environment variables in the &quot;Environment Variables&quot; column. <code>APP ID</code> is the value of <code>LEAN_ID</code>, and <code>APP Key</code> to <code>LEAN_KEY</code>, <code>Master Key</code> to <code>LEAN_MASTER_KEY</code>.</p><p>Click <code>Deploy</code> button to deploy. It will show you deploy successfully after some time. Then config the vercel link in your theme options:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      comment</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        provider</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Waline&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        serverURL</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;YOUR_SERVER_URL&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// your server url</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Config will be listed on <a href="https://ecosystem.vuejs.press/plugins/blog/comment/waline/config.html" target="_blank" rel="noopener noreferrer">Waline Config</a>.</p><p>For more details, please see <a href="https://waline.js.org/en/" target="_blank" rel="noopener noreferrer">Waline Docs</a>。</p></div><h2 id="twikoo" tabindex="-1"><a class="header-anchor" href="#twikoo"><span>Twikoo</span></a></h2>`,9)),h(r,{id:"118",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:s(({value:a,isActive:t})=>e[7]||(e[7]=[n("pnpm")])),title1:s(({value:a,isActive:t})=>e[8]||(e[8]=[n("yarn")])),title2:s(({value:a,isActive:t})=>e[9]||(e[9]=[n("npm")])),tab0:s(({value:a,isActive:t})=>e[10]||(e[10]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pnpm"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," twikoo")])])])],-1)])),tab1:s(({value:a,isActive:t})=>e[11]||(e[11]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"yarn"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," twikoo")])])])],-1)])),tab2:s(({value:a,isActive:t})=>e[12]||(e[12]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"npm"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," i"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," twikoo")])])])],-1)])),_:1}),e[22]||(e[22]=l(`<h3 id="vercel-deployment" tabindex="-1"><a class="header-anchor" href="#vercel-deployment"><span>Vercel Deployment</span></a></h3><ol><li><p>Apply for <a href="https://www.mongodb.com/cloud/atlas/register" target="_blank" rel="noopener noreferrer">MongoDB</a> account</p></li><li><p>Create a free MongoDB database, the recommended region is <code>AWS / N. Virginia (us-east-1)</code></p></li><li><p>Click CONNECT on the Clusters page, follow the steps to allow connections from all IP addresses (<a href="https://vercel.com/support/articles/how-to-allowlist-deployment-ip-address" target="_blank" rel="noopener noreferrer">Why?</a>), create Database user, and record the database connection string, please change the <code>&lt;password&gt;</code> in the connection string to the database password</p></li><li><p>Sign up for a <a href="https://vercel.com/signup" target="_blank" rel="noopener noreferrer">Vercel</a> account</p></li><li><p>Click the button below to deploy Twikoo to Vercel in one click</p><figure><a href="https://vercel.com/import/project?template=https://github.com/imaegoo/twikoo/tree/dev/src/vercel-min" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Vercel" tabindex="0" loading="lazy"></a><figcaption>Vercel</figcaption></figure></li><li><p>Go to Settings - Environment Variables, add the environment variable <code>MONGODB_URI</code>, the value is the database connection string in step 3</p></li><li><p>Go to Overview, click the link under Domains, if the environment configuration is correct, you can see the prompt &quot;Twikoo cloud function is running normally&quot;</p></li><li><p>Vercel Domains (with <code>https://</code> prefix, for example <code>https://xxx.vercel.app</code>) is your environment ID</p></li></ol><div class="language-js" data-highlighter="shiki" data-ext="js" data-title=".vuepress/config.js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vuepress-theme-hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hopeTheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      comment</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        provider</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Twikoo&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        envId</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;YOUR_SERVER_URL&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// your server url</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre></div><div class="hint-container note"><p class="hint-container-title">Note</p><p>Click the &quot;little gear&quot; icon in the comment window to set the administrator password</p></div><h2 id="artalk" tabindex="-1"><a class="header-anchor" href="#artalk"><span>Artalk</span></a></h2>`,5)),h(r,{id:"186",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:s(({value:a,isActive:t})=>e[13]||(e[13]=[n("pnpm")])),title1:s(({value:a,isActive:t})=>e[14]||(e[14]=[n("yarn")])),title2:s(({value:a,isActive:t})=>e[15]||(e[15]=[n("npm")])),tab0:s(({value:a,isActive:t})=>e[16]||(e[16]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"pnpm"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," artalk")])])])],-1)])),tab1:s(({value:a,isActive:t})=>e[17]||(e[17]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"yarn"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," artalk")])])])],-1)])),tab2:s(({value:a,isActive:t})=>e[18]||(e[18]=[i("div",{class:"language-bash","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"npm"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," i"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -D"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," artalk")])])])],-1)])),_:1}),e[23]||(e[23]=l('<h3 id="deploy-artalk-server" tabindex="-1"><a class="header-anchor" href="#deploy-artalk-server"><span>Deploy Artalk Server</span></a></h3><p>See the <a href="https://artalk.js.org/guide/deploy.html" target="_blank" rel="noopener noreferrer">Artalk documentation</a> for deploying artalk server.</p><h3 id="artalk-configuration" tabindex="-1"><a class="header-anchor" href="#artalk-configuration"><span>Artalk Configuration</span></a></h3><p>Please set <code>provider: &quot;Artalk&quot;</code> and pass your server link to <code>server</code> in the plugin options.</p><p>For other configuration items, see <a href="https://artalk.js.org/guide/frontend/config.html" target="_blank" rel="noopener noreferrer">Artalk Configuration</a>.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>The plugin retains the <code>el</code> option and inserts Artalk itself on the page. At the same time, the plugin will automatically set the <code>pageTitle</code>, <code>pageKey</code> and <code>site</code> options for you according to the VuePress information.</p><p>Before VuePress2 provides client configuration, the two function options <code>imgUploader</code> and <code>avatarURLBuilder</code> are not supported.</p></div>',6))])}const B=d(m,[["render",y],["__file","comment.html.vue"]]),F=JSON.parse('{"path":"/guide/feature/comment.html","title":"Comment Service","lang":"en-US","frontmatter":{"title":"Comment Service","icon":"comment-dots","category":["Feature"],"tag":["Comment","Feature"],"description":"vuepress-theme-hope implements the comment feature with built-in [@vuepress/plugin-comment][comment]. Info vuepress-theme-hope passes plugins.comment in theme options as plugin ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://theme-hope.vuejs.press/zh/guide/feature/comment.html"}],["meta",{"property":"og:url","content":"https://theme-hope.vuejs.press/guide/feature/comment.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Comment Service"}],["meta",{"property":"og:description","content":"vuepress-theme-hope implements the comment feature with built-in [@vuepress/plugin-comment][comment]. Info vuepress-theme-hope passes plugins.comment in theme options as plugin ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vercel.com/button"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-30T13:40:11.000Z"}],["meta",{"property":"article:tag","content":"Comment"}],["meta",{"property":"article:tag","content":"Feature"}],["meta",{"property":"article:modified_time","content":"2024-05-30T13:40:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Comment Service\\",\\"image\\":[\\"https://vercel.com/button\\",\\"https://vercel.com/button\\"],\\"dateModified\\":\\"2024-05-30T13:40:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://theme-hope.vuejs.press/atom.xml","title":"vuepress-theme-hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://theme-hope.vuejs.press/feed.json","title":"vuepress-theme-hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://theme-hope.vuejs.press/rss.xml","title":"vuepress-theme-hope RSS Feed"}]]},"headers":[{"level":2,"title":"Enable","slug":"enable","link":"#enable","children":[]},{"level":2,"title":"Comment Provider","slug":"comment-provider","link":"#comment-provider","children":[]},{"level":2,"title":"Giscus","slug":"giscus","link":"#giscus","children":[{"level":3,"title":"Preparation","slug":"preparation","link":"#preparation","children":[]},{"level":3,"title":"Config","slug":"config","link":"#config","children":[]}]},{"level":2,"title":"Waline","slug":"waline","link":"#waline","children":[{"level":3,"title":"Get APP_ID and APP_Key","slug":"get-app-id-and-app-key","link":"#get-app-id-and-app-key","children":[]}]},{"level":2,"title":"Twikoo","slug":"twikoo","link":"#twikoo","children":[{"level":3,"title":"Vercel Deployment","slug":"vercel-deployment","link":"#vercel-deployment","children":[]}]},{"level":2,"title":"Artalk","slug":"artalk","link":"#artalk","children":[{"level":3,"title":"Deploy Artalk Server","slug":"deploy-artalk-server","link":"#deploy-artalk-server","children":[]},{"level":3,"title":"Artalk Configuration","slug":"artalk-configuration","link":"#artalk-configuration","children":[]}]}],"git":{"createdTime":1644936187000,"updatedTime":1717076411000,"contributors":[{"name":"小孙同学","email":"sun412926@gmail.com","commits":1},{"name":"Nan Huang","email":"teddyhuangnan@gmail.com","commits":1},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":19}]},"readingTime":{"minutes":2.79,"words":838},"filePathRelative":"guide/feature/comment.md","localizedDate":"February 15, 2022","excerpt":"<p><code>vuepress-theme-hope</code> implements the comment feature with built-in [<code>@vuepress/plugin-comment</code>][comment].</p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">Info</p>\\n<p><code>vuepress-theme-hope</code> passes <code>plugins.comment</code> in theme options as plugin options to <code>@vuepress/plugin-comment</code>.</p>\\n</div>\\n","autoDesc":true}');export{B as comp,F as data};
