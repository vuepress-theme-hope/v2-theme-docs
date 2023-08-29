import{_ as r,r as l,o as v,c as m,a as k,e as a,w as t,d as s,b as n,f as e}from"./app-dc65bed1.js";const g={},b=n("p",null,"Let the Markdown file support playground in your VuePress site.",-1),h=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),s(" Config")],-1),y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      mdEnhance`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// playground config here"),s(`
        playground`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token comment"},"// add presets here"),s(`
          presets`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"ts"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token string"},'"unocss"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"playground#language"'),n("span",{class:"token punctuation"},","),s(`
              component`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"PlaygroundComponent"'),n("span",{class:"token punctuation"},","),s(`
              propsGetter`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s(`
                playgroundData`),n("span",{class:"token operator"},":"),s(" PlaygroundData"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" Record"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// playground props"),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// configure built-in presets (optional)"),s(`
          config`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            ts`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token comment"},"// ..."),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            vue`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token comment"},"// ..."),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            unocss`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token comment"},"// ..."),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"mdEnhance"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// playground config here"),s(`
        `),n("span",{class:"token literal-property property"},"playground"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token comment"},"// add presets here"),s(`
          `),n("span",{class:"token literal-property property"},"presets"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token string"},'"ts"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token string"},'"unocss"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"playground#language"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"PlaygroundComponent"'),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"propsGetter"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s(`
                `),n("span",{class:"token literal-property property"},"playgroundData"),n("span",{class:"token operator"},":"),s(` PlaygroundData
              `),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" Record"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token punctuation"},","),s(" string"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// playground props"),s(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// configure built-in presets (optional)"),s(`
          `),n("span",{class:"token literal-property property"},"config"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"ts"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token comment"},"// ..."),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"vue"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token comment"},"// ..."),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"unocss"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token comment"},"// ..."),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=e('<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>You should add presets through <code>playground.presets</code> in <code>plugins.mdEnhance</code>.</p><p>To use playground, you should use a container named <code>playground#preset</code>.</p><p>In it, you can use 3 directives:</p><ul><li><code>@file fileName</code> then a code block to add files</li><li><code>@import importMapFileName</code> then a json block to customize &quot;import map&quot;</li><li><code>@setting</code> then a json block to customize settings</li></ul><p>You can see the below demos to see more details.</p><h2 id="available-presets" tabindex="-1"><a class="header-anchor" href="#available-presets" aria-hidden="true">#</a> Available presets</h2><p>Currently, we support <code>ts</code>, <code>vue</code> and <code>unocss</code> presets, and we are looking forward to more presets coming from PRs.</p><p>If you want to add a playground of your own, you can add a preset by you own in <a href="#advanced">Advanced Section</a>, and welcome to open a PR about your fantastic preset.</p><div class="hint-container info"><p class="hint-container-title">TS preset</p><p>TS preset is using official playground by default, and do not support multiple ts files, so all you need to do is add one single ts file through <code>@file xxx.ts</code> directive (the filename is not important but the <code>.ts</code> file extension is).</p><p>To use customized compilerOptions, you can provide one through <code>@setting</code> directive. But attention, official TS playground does not support all compiler options.</p><p>Meanwhile, you can customize the default compilerOption through <code>playground.config.ts</code>, and you can use another service besides the official playground through <code>service</code> option, just in case you want to deploy your own playground site.</p></div>',10),A={class:"hint-container info"},C=n("p",{class:"hint-container-title"},"Vue Preset",-1),_=n("p",null,[s("But if you only want a few demos instead of bundling a whole vue playground, you can use this preset to create a "),n("code",null,"<iframe>"),s(".")],-1),I=n("p",null,[s("Only "),n("code",null,"service"),s(", "),n("code",null,"dev"),s(" and "),n("code",null,"ssr"),s(" option is available in "),n("code",null,"@setting"),s(" directive.")],-1),x={class:"hint-container info"},j=n("p",{class:"hint-container-title"},"UnoCSS Preset",-1),B={href:"https://unocss.dev/play",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"@file",-1),D=n("code",null,"index.html",-1),P=n("code",null,"config.js",-1),V=n("code",null,"style.css",-1),S=e("<ul><li><code>@file index.html</code> match <code>HTML</code> content. If no html file, The official default value will be used.</li><li><code>@file config.js</code> match <code>Config</code> content. If no config file, The official default value will be used.</li><li><code>@file style.css</code> match <code>Custom CSS</code> content.</li></ul><p>❗ every file type (html/js/css) only support one file.<br> If you need, you can set your own service url through <code>playground.config.unocss.service</code> in config file.</p>",2),G=n("h2",{id:"demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),s(" Demo")],-1),X=n("h3",{id:"ts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ts","aria-hidden":"true"},"#"),s(" TS")],-1),Z=e(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: playground#ts TS demo 1

@file index.ts

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts language-ts"><span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">speak</span> <span class="token operator">=</span> <span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">speak</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),T=e(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: playground#ts TS demo 2

@file index.ts

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts language-ts"><span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">speak</span> <span class="token operator">=</span> <span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">speak</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

@setting

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h3>`,2),F=e(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: playground#vue Vue demo with customized imports

@file App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue language-vue">&lt;script setup&gt;
import { ref } from &quot;vue&quot;;

import Comp from &quot;./Comp.vue&quot;;

const msg = ref(&quot;Hello World!&quot;);
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;{{ msg }}&lt;/h1&gt;
  &lt;input v-model=&quot;msg&quot; /&gt;
  &lt;Comp /&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

@file Comp.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue language-vue">&lt;template&gt;
  &lt;div&gt;Comp&lt;/div&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

@import

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;imports&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://sfc.vuejs.org/vue.runtime.esm-browser.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),L=e(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: playground#vue Vue demo with customized settings

@file App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue language-vue">&lt;script setup&gt;
import { ref } from &quot;vue&quot;;

const msg = ref(&quot;Hello Playground!&quot;);
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;{{ msg }}&lt;/h1&gt;
  &lt;input v-model=&quot;msg&quot; /&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

@setting

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ssr&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="unocss" tabindex="-1"><a class="header-anchor" href="#unocss" aria-hidden="true">#</a> UnoCSS</h3>`,2),Y=e(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: playground#unocss UnoCSS demo

@file index.html

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">html</span>
<span class="token code-block language-html language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex flex-col text-center h-full justify-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-red<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>TEST for default preset<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-$fd-color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>TEST for custom css<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">\`\`\`</span></span>

@file config.js

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> presetUno <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;unocss&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">presetUno</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

@file style.css

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">css</span>
<span class="token code-block language-css language-css"><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--fd-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced" aria-hidden="true">#</a> Advanced</h2><p>You can provide your own presets.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PlaygroundCodeConfig</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Code block extension
   *
   * <span class="token keyword">@description</span> It&#39;s based on filename, not code fence language
   */</span>
  ext<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Code block content
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Title of Playground
   */</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Import map file name
   *
   * <span class="token keyword">@default</span> &#39;import-map.json&#39;
   */</span>
  importMap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Playground files info
   */</span>
  files<span class="token operator">:</span> Record<span class="token operator">&lt;</span>
    <span class="token doc-comment comment">/** File name */</span>
    <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** File detail */</span>
    PlaygroundCodeConfig
  <span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Playground settings
   *
   * <span class="token keyword">@description</span> It&#39;s parsed result of json content after setting directive
   */</span>
  settings<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * hash key based on playground content
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PlaygroundOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Playground container name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Playground component name
   *
   * <span class="token keyword">@default</span> &#39;Playground&#39;
   */</span>
  component<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Props getter
   */</span>
  <span class="token function-variable function">propsGetter</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> PlaygroundData<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Basically, we provide a <code>playgroundData</code> object to <code>getter</code> function, and you are supposed to provide:</p><ul><li>A container name via <code>name</code> option</li><li>A client component name via <code>component</code> option</li><li>A function receiving playgroundData and returning a props map with <code>attr</code> → <code>value</code> via <code>propsGetter</code> option</li></ul>`,6);function z(N,J){const u=l("CodeTabs"),p=l("RouterLink"),d=l("ExternalLinkIcon"),i=l("Playground");return v(),m("div",null,[b,k(" more "),h,a(u,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"config"},{title0:t(({value:o,isActive:c})=>[s("TS")]),title1:t(({value:o,isActive:c})=>[s("JS")]),tab0:t(({value:o,isActive:c})=>[y]),tab1:t(({value:o,isActive:c})=>[f]),_:1}),w,n("div",A,[C,n("p",null,[s("Vue preset is using the official playground by default, and do not support customizing options like "),a(p,{to:"/guide/markdown/vue-playground.html"},{default:t(()=>[s("Vue Playground")]),_:1}),s(". So if you are heavily relying on interacting vue playground, we suggest you to use "),a(p,{to:"/guide/markdown/vue-playground.html"},{default:t(()=>[s("Vue Playground")]),_:1}),s(" instead.")]),_,I]),n("div",x,[j,n("p",null,[s("UnoCSS preset is using "),n("a",B,[s("official playground"),a(d)]),s(") by default. You can use "),q,s(" to add three file ("),D,s(", "),P,s(", "),V,s("), . You can set three file types as follows:")]),S]),G,X,a(i,{key:"05d9ff51",title:"TS%20demo%201",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),Z,a(i,{key:"387b81a2",title:"TS%20demo%202",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%3F1%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),T,a(i,{key:"4f11e5d6",title:"Vue%20demo%20with%20customized%20imports",link:"https%3A%2F%2Fsfc.vuejs.org%2F%23eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuaW1wb3J0IENvbXAgZnJvbSBcIi4vQ29tcC52dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbiAgPENvbXAgLz5cbjwvdGVtcGxhdGU%2BXG4iLCJDb21wLnZ1ZSI6Ijx0ZW1wbGF0ZT5cbiAgPGRpdj5Db21wPC9kaXY%2BXG48L3RlbXBsYXRlPlxuIiwiaW1wb3J0LW1hcC5qc29uIjoie1xuICBcImltcG9ydHNcIjoge1xuICAgIFwidnVlXCI6IFwiaHR0cHM6Ly9zZmMudnVlanMub3JnL3Z1ZS5ydW50aW1lLmVzbS1icm93c2VyLmpzXCJcbiAgfVxufSJ9"}),F,a(i,{key:"96874682",title:"Vue%20demo%20with%20customized%20settings",link:"https%3A%2F%2Fsfc.vuejs.org%2F%23__DEV____SSR__eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gUGxheWdyb3VuZCFcIik7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aDE%2Be3sgbXNnIH19PC9oMT5cbiAgPGlucHV0IHYtbW9kZWw9XCJtc2dcIiAvPlxuPC90ZW1wbGF0ZT5cbiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiLFxuICAgIFwidnVlL3NlcnZlci1yZW5kZXJlclwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy9zZXJ2ZXItcmVuZGVyZXIuZXNtLWJyb3dzZXIuanNcIlxuICB9XG59In0%3D"}),L,a(i,{key:"2d9fc74d",title:"UnoCSS%20demo",link:"https%3A%2F%2Funocss.dev%2Fplay%2F%3Fhtml%3DDwEwlgbgBAxgNgQwM5ILwCIBmcCmAPKbfAWhgHs4oAXfK0nAOxoCcoALYzAVzkoCsuSKmEwBPekxzN0APgBQUKKEixEKDDTx1mOELIAqAUQDK%2BwmVYgcmBDypQADjqQ4qwAPTgI8xcujxkNHRNOgASTBBSCgsDEzNMC1hBKjIAW1gUDy95LMh5IA%26config%3DJYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmANHGFKgM6owCqWEcAvnOlBCHAEQCujAYypVuAbgBQ41AA9IsFBgCGvADbw0mHPkLAiACgTi45SjRhUAXHADaFarQYQ9ASgC6Jcc2cSgA%26css%3DFwJw9mAuAEDeBQ1oFpkDMAmyDGYA2YIw0A5iAKbkB2A3PAL7xA"}),Y])}const E=r(g,[["render",z],["__file","playground.html.vue"]]);export{E as default};
