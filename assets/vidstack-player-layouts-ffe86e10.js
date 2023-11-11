import{c as T,b as f,u as g,i as bt,g as L,f as G,e as P,h as ft,o as D,j as zt,l as Ut,H as gt,D as qt,s as $t,k as Wt,d as yt}from"./vidstack-1a42d66e-f4a5b7c4.js";import{D as Zt}from"./app-a080876e.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;const Q=window,k=Q.trustedTypes,dt=k?k.createPolicy("lit-html",{createHTML:s=>s}):void 0,_="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,Lt="?"+x,Jt=`<${Lt}>`,S=document,I=()=>S.createComment(""),O=s=>s===null||typeof s!="object"&&typeof s!="function",xt=Array.isArray,Kt=s=>xt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Y=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,ut=/>/g,w=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,pt=/"/g,wt=/^(?:script|style|textarea|title)$/i,Yt=s=>(t,...e)=>({Sb:s,strings:t,values:e}),r=Yt(1),A=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),vt=new WeakMap,C=S.createTreeWalker(S,129,null,!1);function Ct(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return dt!==void 0?dt.createHTML(t):t}const _t=(s,t)=>{const e=s.length-1,i=[];let o,n=t===2?"<svg>":"",a=M;for(let u=0;u<e;u++){const l=s[u];let d,m,c=-1,h=0;for(;h<l.length&&(a.lastIndex=h,m=a.exec(l),m!==null);)h=a.lastIndex,a===M?m[1]==="!--"?a=ct:m[1]!==void 0?a=ut:m[2]!==void 0?(wt.test(m[2])&&(o=RegExp("</"+m[2],"g")),a=w):m[3]!==void 0&&(a=w):a===w?m[0]===">"?(a=o??M,c=-1):m[1]===void 0?c=-2:(c=a.lastIndex-m[2].length,d=m[1],a=m[3]===void 0?w:m[3]==='"'?pt:mt):a===pt||a===mt?a=w:a===ct||a===ut?a=M:(a=w,o=void 0);const y=a===w&&s[u+1].startsWith("/>")?" ":"";n+=a===M?l+Jt:c>=0?(i.push(d),l.slice(0,c)+_+l.slice(c)+x+y):l+x+(c===-2?(i.push(void 0),u):y)}return[Ct(s,n+(s[e]||"<?>")+(t===2?"</svg>":"")),i]};class B{constructor({strings:t,Sb:e},i){let o;this.parts=[];let n=0,a=0;const u=t.length-1,l=this.parts,[d,m]=_t(t,e);if(this.el=B.createElement(d,i),C.currentNode=this.el.content,e===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(o=C.nextNode())!==null&&l.length<u;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const h of o.getAttributeNames())if(h.endsWith(_)||h.startsWith(x)){const y=m[a++];if(c.push(h),y!==void 0){const Ft=o.getAttribute(y.toLowerCase()+_).split(x),V=/([.?@])?(.*)/.exec(y);l.push({type:1,index:n,name:V[2],strings:Ft,ctor:V[1]==="."?te:V[1]==="?"?se:V[1]==="@"?ie:U})}else l.push({type:6,index:n})}for(const h of c)o.removeAttribute(h)}if(wt.test(o.tagName)){const c=o.textContent.split(x),h=c.length-1;if(h>0){o.textContent=k?k.emptyScript:"";for(let y=0;y<h;y++)o.append(c[y],I()),C.nextNode(),l.push({type:2,index:++n});o.append(c[h],I())}}}else if(o.nodeType===8)if(o.data===Lt)l.push({type:2,index:n});else{let c=-1;for(;(c=o.data.indexOf(x,c+1))!==-1;)l.push({type:7,index:n}),c+=x.length-1}n++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function N(s,t,e=s,i){var o,n,a,u;if(t===A)return t;let l=i!==void 0?(o=e.Ub)===null||o===void 0?void 0:o[i]:e.Zb;const d=O(t)?void 0:t.bc;return(l==null?void 0:l.constructor)!==d&&((n=l==null?void 0:l.cc)===null||n===void 0||n.call(l,!1),d===void 0?l=void 0:(l=new d(s),l.dc(s,e,i)),i!==void 0?((a=(u=e).Ub)!==null&&a!==void 0?a:u.Ub=[])[i]=l:e.Zb=l),l!==void 0&&(t=N(s,l.ec(s,t.values),l,i)),t}class Xt{constructor(t,e){this.Vb=[],this.Tb=void 0,this.Wb=t,this.Mb=e}get parentNode(){return this.Mb.parentNode}get Nb(){return this.Mb.Nb}u(t){var e;const{el:{content:i},parts:o}=this.Wb,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:S).importNode(i,!0);C.currentNode=n;let a=C.nextNode(),u=0,l=0,d=o[0];for(;d!==void 0;){if(u===d.index){let m;d.type===2?m=new j(a,a.nextSibling,this,t):d.type===1?m=new d.ctor(a,d.name,d.strings,this,t):d.type===6&&(m=new oe(a,this,t)),this.Vb.push(m),d=o[++l]}u!==(d==null?void 0:d.index)&&(a=C.nextNode(),u++)}return C.currentNode=S,n}v(t){let e=0;for(const i of this.Vb)i!==void 0&&(i.strings!==void 0?(i.Ob(t,i,e),e+=i.strings.length-2):i.Ob(t[e])),e++}}class j{constructor(t,e,i,o){var n;this.type=2,this.Lb=v,this.Tb=void 0,this.Pb=t,this.Qb=e,this.Mb=i,this.options=o,this.Xb=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get Nb(){var t,e;return(e=(t=this.Mb)===null||t===void 0?void 0:t.Nb)!==null&&e!==void 0?e:this.Xb}get parentNode(){let t=this.Pb.parentNode;const e=this.Mb;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this.Pb}get endNode(){return this.Qb}Ob(t,e=this){t=N(this,t,e),O(t)?t===v||t==null||t===""?(this.Lb!==v&&this.Rb(),this.Lb=v):t!==this.Lb&&t!==A&&this.Yb(t):t.Sb!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Kt(t)?this.T(t):this.Yb(t)}k(t){return this.Pb.parentNode.insertBefore(t,this.Qb)}$(t){this.Lb!==t&&(this.Rb(),this.Lb=this.k(t))}Yb(t){this.Lb!==v&&O(this.Lb)?this.Pb.nextSibling.data=t:this.$(S.createTextNode(t)),this.Lb=t}g(t){var e;const{values:i,Sb:o}=t,n=typeof o=="number"?this._b(t):(o.el===void 0&&(o.el=B.createElement(Ct(o.h,o.h[0]),this.options)),o);if(((e=this.Lb)===null||e===void 0?void 0:e.Wb)===n)this.Lb.v(i);else{const a=new Xt(n,this),u=a.u(this.options);a.v(i),this.$(u),this.Lb=a}}_b(t){let e=vt.get(t.strings);return e===void 0&&vt.set(t.strings,e=new B(t)),e}T(t){xt(this.Lb)||(this.Lb=[],this.Rb());const e=this.Lb;let i,o=0;for(const n of t)o===e.length?e.push(i=new j(this.k(I()),this.k(I()),this,this.options)):i=e[o],i.Ob(n),o++;o<e.length&&(this.Rb(i&&i.Qb.nextSibling,o),e.length=o)}Rb(t=this.Pb.nextSibling,e){var i;for((i=this.$b)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this.Qb;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this.Mb===void 0&&(this.Xb=t,(e=this.$b)===null||e===void 0||e.call(this,t))}}class U{constructor(t,e,i,o,n){this.type=1,this.Lb=v,this.Tb=void 0,this.element=t,this.name=e,this.Mb=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this.Lb=Array(i.length-1).fill(new String),this.strings=i):this.Lb=v}get tagName(){return this.element.tagName}get Nb(){return this.Mb.Nb}Ob(t,e=this,i,o){const n=this.strings;let a=!1;if(n===void 0)t=N(this,t,e,0),a=!O(t)||t!==this.Lb&&t!==A,a&&(this.Lb=t);else{const u=t;let l,d;for(t=n[0],l=0;l<n.length-1;l++)d=N(this,u[i+l],e,l),d===A&&(d=this.Lb[l]),a||(a=!O(d)||d!==this.Lb[l]),d===v?t=v:t!==v&&(t+=(d??"")+n[l+1]),this.Lb[l]=d}a&&!o&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class te extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}const ee=k?k.emptyScript:"";class se extends U{constructor(){super(...arguments),this.type=4}j(t){t&&t!==v?this.element.setAttribute(this.name,ee):this.element.removeAttribute(this.name)}}class ie extends U{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}Ob(t,e=this){var i;if((t=(i=N(this,t,e,0))!==null&&i!==void 0?i:v)===A)return;const o=this.Lb,n=t===v&&o!==v||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==v&&(o===v||n);n&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this.Lb=t}handleEvent(t){var e,i;typeof this.Lb=="function"?this.Lb.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this.Lb.handleEvent(t)}}class oe{constructor(t,e,i){this.element=t,this.type=6,this.Tb=void 0,this.Mb=e,this.options=i}get Nb(){return this.Mb.Nb}Ob(t){N(this,t)}}const ht=Q.litHtmlPolyfillSupport;ht==null||ht(B,j),((K=Q.litHtmlVersions)!==null&&K!==void 0?K:Q.litHtmlVersions=[]).push("2.8.0");const Tt=(s,t,e)=>{var i,o;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let a=n.ac;if(a===void 0){const u=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n.ac=a=new j(t.insertBefore(I(),u),u,void 0,e??{})}return a.Ob(s),a};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},St=s=>(...t)=>({bc:s,values:t});class Dt{constructor(t){}get Nb(){return this.Mb.Nb}dc(t,e,i){this.Ah=t,this.Mb=e,this.Ch=i}ec(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=(s,t)=>{var e,i;const o=s.Tb;if(o===void 0)return!1;for(const n of o)(i=(e=n).cc)===null||i===void 0||i.call(e,t,!1),E(n,t);return!0},F=s=>{let t,e;do{if((t=s.Mb)===void 0)break;e=t.Tb,e.delete(s),s=t}while((e==null?void 0:e.size)===0)},kt=s=>{for(let t;t=s.Mb;s=t){let e=t.Tb;if(e===void 0)t.Tb=e=new Set;else if(e.has(s))break;e.add(s),re(t)}};function ae(s){this.Tb!==void 0?(F(this),this.Mb=s,kt(this)):this.Mb=s}function le(s,t=!1,e=0){const i=this.Lb,o=this.Tb;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let n=e;n<i.length;n++)E(i[n],!1),F(i[n]);else i!=null&&(E(i,!1),F(i));else E(this,s)}const re=s=>{var t,e,i,o;s.type==it.CHILD&&((t=(i=s).$b)!==null&&t!==void 0||(i.$b=le),(e=(o=s).Bh)!==null&&e!==void 0||(o.Bh=ae))};class de extends Dt{constructor(){super(...arguments),this.Tb=void 0}dc(t,e,i){super.dc(t,e,i),kt(this),this.isConnected=t.Nb}cc(t,e=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)===null||i===void 0||i.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),e&&(E(this,t),F(this))}setValue(t){if(ne(this.Ah))this.Ah.Ob(t,this);else{const e=[...this.Ah.Lb];e[this.Ch]=t,this.Ah.Ob(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=s=>s??v;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class X extends Dt{constructor(t){if(super(t),this.et=v,t.type!==it.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===v||t==null)return this.ft=void 0,this.et=t;if(t===A)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={Sb:this.constructor.resultType,strings:e,values:[]}}}X.directiveName="unsafeHTML",X.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class tt extends X{}tt.directiveName="unsafeSVG",tt.resultType=2;const ce=St(tt);class ue extends de{constructor(t){super(t),this.Db=null,this.ja=null,this.Eb=!1,this.Eb=t.type===it.ATTRIBUTE}render(t){this.Db!==t&&(this.Db=t,this.disconnected(),this.isConnected&&this.Fb());const e=this.Db();return this.Eb?At(e):e}reconnected(){this.Fb()}disconnected(){var t;this.Eb||this.setValue(null),(t=this.ja)==null||t.call(this),this.ja=null}Fb(){this.Db&&(this.ja=P(this.Gb.bind(this)))}Gb(){var t;this.setValue((t=this.Db)==null?void 0:t.call(this))}}const $=St(ue);function b(s){return $(T(s))}class Nt extends HTMLElement{constructor(){super(...arguments),this.rootPart=null}connectedCallback(){this.rootPart=Tt(this.render(),this,{renderBefore:this.firstChild}),this.rootPart.setConnected(!0)}disconnectedCallback(){var t;(t=this.rootPart)==null||t.setConnected(!1),this.rootPart=null}}class Mt{constructor(t,e){this.elements=new Set,this.Jb=ft(this.Hb.bind(this)),this.Ib=t,this.sa=e}connect(){this.Hb();const t=new MutationObserver(this.Jb);t.observe(this.Ib,{childList:!0}),D(()=>t.disconnect()),D(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,e){t instanceof Node?(e.textContent="",e.append(t)):Tt(t,e),e.style.display||(e.style.display="contents");const i=e.firstElementChild;if(!i)return;const o=e.getAttribute("data-class");o&&i.classList.add(...o.split(" "))}Hb(){for(const t of this.Ib.querySelectorAll("slot"))t.hasAttribute("name")&&this.elements.add(t);this.sa(this.elements)}}let me=0,R="data-slot-id";class Et{constructor(t){this.Jb=ft(this.Hb.bind(this)),this.Ib=t,this.slots=new Mt(t,this.Hb.bind(this))}connect(){this.slots.connect(),this.Hb();const t=new MutationObserver(this.Jb);t.observe(this.Ib,{childList:!0}),D(()=>t.disconnect())}Hb(){for(const t of this.Ib.children){if(t.nodeType!==1)continue;const e=t.getAttribute("slot");if(!e)continue;t.style.display="none";let i=t.getAttribute(R);i||t.setAttribute(R,i=++me+"");for(const o of this.slots.elements){if(o.getAttribute("name")!==e||o.getAttribute(R)===i)continue;const n=document.importNode(t,!0);e.includes("-icon")&&n.classList.add("vds-icon"),n.style.display="",n.removeAttribute("slot"),this.slots.assign(n,o),o.setAttribute(R,i)}}}}function q({label:s,icon:t}){return r`
    <media-menu-button class="vds-menu-button">
      <slot name="menu-arrow-left-icon" data-class="vds-menu-button-close-icon"></slot>
      <slot name="${t}-icon" data-class="vds-menu-button-icon"></slot>
      <span class="vds-menu-button-label">${$(s)}</span>
      <span class="vds-menu-button-hint" data-part="hint"></span>
      <slot name="menu-arrow-right-icon" data-class="vds-menu-button-open-icon"></slot>
    </media-menu-button>
  `}function p(s,t){return b(()=>L(s,t))}function H({tooltip:s}){const{translations:t}=f(),{paused:e}=g().$state,i=b(()=>L(t,e()?"Play":"Pause"));return r`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button class="vds-play-button vds-button" aria-label=${i}>
          <slot name="play-icon" data-class="vds-play-icon"></slot>
          <slot name="pause-icon" data-class="vds-pause-icon"></slot>
          <slot name="replay-icon" data-class="vds-replay-icon"></slot>
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-play-tooltip-text">${p(t,"Play")}</span>
        <span class="vds-pause-tooltip-text">${p(t,"Pause")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function W({tooltip:s}){const{translations:t}=f(),{muted:e}=g().$state,i=b(()=>L(t,(e(),"Unmute")));return r`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button class="vds-mute-button vds-button" aria-label=${i}>
          <slot name="mute-icon" data-class="vds-mute-icon"></slot>
          <slot name="volume-low-icon" data-class="vds-volume-low-icon"></slot>
          <slot name="volume-high-icon" data-class="vds-volume-high-icon"></slot>
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-mute-tooltip-text">${p(t,"Unmute")}</span>
        <span class="vds-unmute-tooltip-text">${p(t,"Mute")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Z({tooltip:s}){const{translations:t}=f(),{textTrack:e}=g().$state,i=b(()=>L(t,e()?"Closed-Captions Off":"Closed-Captions On"));return r`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button class="vds-caption-button vds-button" aria-label=${i}>
          <slot name="cc-on-icon" data-class="vds-cc-on-icon"></slot>
          <slot name="cc-off-icon" data-class="vds-cc-off-icon"></slot>
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-cc-on-tooltip-text">${p(t,"Closed-Captions Off")}</span>
        <span class="vds-cc-off-tooltip-text">${p(t,"Closed-Captions On")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function pe(){const{translations:s}=f(),{pictureInPicture:t}=g().$state,e=b(()=>L(s,t()?"Exit PiP":"Enter PiP"));return r`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button class="vds-pip-button vds-button" aria-label=${e}>
          <slot name="pip-enter-icon" data-class="vds-pip-enter-icon"></slot>
          <slot name="pip-exit-icon" data-class="vds-pip-exit-icon"></slot>
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${p(s,"Enter PiP")}</span>
        <span class="vds-pip-exit-tooltip-text">${p(s,"Exit PiP")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Pt({tooltip:s}){const{translations:t}=f(),{fullscreen:e}=g().$state,i=b(()=>L(t,e()?"Exit Fullscreen":"Enter Fullscreen"));return r`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button class="vds-fullscreen-button vds-button" aria-label=${i}>
          <slot name="fs-enter-icon" data-class="vds-fs-enter-icon"></slot>
          <slot name="fs-exit-icon" data-class="vds-fs-exit-icon"></slot>
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-fs-enter-tooltip-text">${p(t,"Enter Fullscreen")}</span>
        <span class="vds-fs-exit-tooltip-text">${p(t,"Exit Fullscreen")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function z({seconds:s,tooltip:t}){const{translations:e}=f(),i=s>=0?"Seek Forward":"Seek Backward",o=p(e,i);return r`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${s}
          aria-label=${o}
        >
          ${s>=0?r`<slot name="seek-forward-icon"></slot>`:r`<slot name="seek-backward-icon"></slot>`}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${p(e,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function It(){const{translations:s}=f(),t=p(s,"Volume");return r`
    <media-volume-slider class="vds-volume-slider vds-slider" aria-label=${t}>
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function J(){const{width:s}=g().$state,{thumbnails:t,translations:e}=f(),i=p(e,"Seek");return r`
    <media-time-slider class="vds-time-slider vds-slider" aria-label=${i}>
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${$(()=>s()<768)}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          src=${$(t)}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function Ot(){const{translations:s}=f(),{live:t}=g().$state,e=p(s,"Skip To Live"),i=p(s,"LIVE");return t()?r`
    <media-live-button class="vds-live-button" aria-label=${e}>
      <span class="vds-live-button-text">${i}</span>
    </media-live-button
  `:null}function ve(){return r`
    <div class="vds-time-group">
      <media-time class="vds-time" type="current"></media-time>
      <div class="vds-time-divider">/</div>
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `}function ot(){const{live:s}=g().$state;return s()?Ot():ve()}function Bt(s,t){return r`
    <media-menu-portal .container=${s} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function jt({placement:s,tooltip:t,portal:e}){const{viewType:i}=g().$state,{translations:o,smQueryList:n,thumbnails:a,menuContainer:u,noModal:l,menuGroup:d}=f(),m=T(()=>l()?G(s):n.matches?null:G(s)),c=T(()=>!n.matches&&d()==="bottom"&&i()==="video"?26:0),h=r`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${$(m)}
      offset=${$(c)}
    >
      <media-chapters-radio-group
        class="vds-chapters-radio-group vds-radio-group"
        thumbnails=${$(a)}
      >
        <template>
          <media-radio class="vds-chapter-radio vds-radio">
            <media-thumbnail class="vds-thumbnail"></media-thumbnail>
            <div class="vds-chapter-radio-content">
              <span class="vds-chapter-radio-label" data-part="label"></span>
              <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
              <span class="vds-chapter-radio-duration" data-part="duration"></span>
            </div>
          </media-radio>
        </template>
      </media-chapters-radio-group>
    </media-menu-items>
  `;return r`
    <!-- Chapters Menu -->
    <media-menu class="vds-chapters-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${p(o,"Chapters")}
          >
            <slot name="menu-chapters-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${bt(t)?$(t):t}
        >
          ${p(o,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${e?Bt(u,h):h}
    </media-menu>
  `}function Ht({placement:s,portal:t,tooltip:e}){const{viewType:i}=g().$state,{translations:o,smQueryList:n,menuContainer:a,noModal:u,menuGroup:l}=f(),d=T(()=>u()?G(s):n.matches?null:G(s)),m=T(()=>!n.matches&&l()==="bottom"&&i()==="video"?26:0),c=r`
    <media-menu-items
      class="vds-settings-menu-items vds-menu-items"
      placement=${$(d)}
      offset=${$(m)}
    >
      ${he()}${be()}${fe()}${ge()}
    </media-menu-items>
  `;return r`
    <media-menu class="vds-settings-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${p(o,"Settings")}
          >
            <slot name="menu-settings-icon" data-class="vds-rotate-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${bt(e)?$(e):e}
        >
          ${p(o,"Settings")}
        </media-tooltip-content>
      </media-tooltip>
      ${t?Bt(a,c):c}
    </media-menu>
  `}function he(){const{translations:s}=f();return r`
    <!-- Audio Menu -->
    <media-menu class="vds-audio-menu vds-menu">
      ${q({label:()=>L(s,"Audio"),icon:"menu-audio"})}
      <media-menu-items class="vds-menu-items">
        <media-audio-radio-group
          class="vds-audio-radio-group vds-radio-group"
          empty-label=${p(s,"Default")}
        >
          <template>
            <media-radio class="vds-audio-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-audio-radio-group>
      </media-menu-items>
    </media-menu>
  `}function be(){const{translations:s}=f();return r`
    <!-- Speed Menu -->
    <media-menu class="vds-speed-menu vds-menu">
      ${q({label:()=>L(s,"Speed"),icon:"menu-speed"})}
      <media-menu-items class="vds-menu-items">
        <media-speed-radio-group
          class="vds-speed-radio-group vds-radio-group"
          normal-label=${p(s,"Normal")}
        >
          <template>
            <media-radio class="vds-speed-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-speed-radio-group>
      </media-menu-items>
    </media-menu>
  `}function fe(){const{translations:s}=f();return r`
    <!-- Quality Menu -->
    <media-menu class="vds-quality-menu vds-menu">
      ${q({label:()=>L(s,"Quality"),icon:"menu-quality"})}
      <media-menu-items class="vds-menu-items">
        <media-quality-radio-group
          class="vds-quality-radio-group vds-radio-group"
          auto-label=${p(s,"Auto")}
        >
          <template>
            <media-radio class="vds-quality-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
              <span class="vds-radio-hint" data-part="bitrate"></span>
            </media-radio>
          </template>
        </media-quality-radio-group>
      </media-menu-items>
    </media-menu>
  `}function ge(){const{translations:s}=f();return r`
    <!-- Captions Menu -->
    <media-menu class="vds-captions-menu vds-menu">
      ${q({label:()=>L(s,"Captions"),icon:"menu-captions"})}
      <media-menu-items class="vds-menu-items">
        <media-captions-radio-group
          class="vds-captions-radio-group vds-radio-group"
          off-label=${p(s,"Off")}
        >
          <template>
            <media-radio class="vds-caption-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-captions-radio-group>
      </media-menu-items>
    </media-menu>
  `}function Vt(s){let t=document.querySelector(`body > .${s}`);return t||(t=document.createElement("div"),t.style.display="contents",t.classList.add(s),document.body.append(t)),t}function $e({name:s,class:t,state:e,paths:i}){return r`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${At(s??e)}
  >
    ${zt(i)?ce(i):$(i)}
  </svg>`}class ye{constructor(t){this.Oj={},this.Pj=!1,this.Ib=t,this.slots=new Mt(t,this.Qj.bind(this))}connect(){this.slots.connect(),D(this.disconnect.bind(this))}load(){this.Kb().then(t=>{this.Oj=t,this.Pj=!0,this.Qj()})}disconnect(){for(const{slot:t}of this.Rj())t.textContent=""}*Rj(){for(const t of Object.keys(this.Oj)){const e=`${t}-icon`;for(const i of this.slots.elements)i.name===e&&(yield{icon:this.Oj[t],slot:i})}}Qj(){if(this.Pj)for(const{icon:t,slot:e}of this.Rj())this.slots.assign(t,e)}}class Le extends ye{connect(){const t=this.zh();t&&(super.connect(),t.$state.canLoad()?this.load():Ut(t,"can-load",()=>this.load(),{once:!0}))}zh(){let t=this.Ib.parentElement;for(;t&&t.localName!=="media-player";)t=t.parentElement;return t}}class Rt extends Le{async Kb(){const t=(await Zt(()=>import("./vidstack-0d51c467-b60f272c.js"),[])).icons,e={};for(const i of Object.keys(t))e[i]=$e({name:i,paths:t[i]});return e}}function xe(){return r`
    <media-captions class="vds-captions"></media-captions>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">${J()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${z({seconds:-10,tooltip:"top start"})}
        ${H({tooltip:"top"})}${z({tooltip:"top",seconds:10})}
        ${b(ot)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${W({tooltip:"top"})}
        ${It()}${Z({tooltip:"top"})} ${Gt()}
      </media-controls-group>
    </media-controls>
  `}function we(){return r`
    <media-captions class="vds-captions"></media-captions>
    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        ${b(Ce)}
        ${W({tooltip:"top start"})}${b(Ot)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${Z({tooltip:"top"})}${Gt()}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${J()}</media-controls-group>

      ${b(Te)}${b(Se)}
    </media-controls>
  `}function Ce(){const{live:s,canSeek:t}=g().$state;return s()&&!t()?H({tooltip:"top start"}):null}function Te(){const{live:s}=g().$state;return s()?null:r`
        <media-controls-group class="vds-controls-group">
          <media-time class="vds-time" type="current"></media-time>
          <div class="vds-controls-spacer"></div>
          <media-time class="vds-time" type="duration"></media-time>
        </media-controls-group>
      `}function Se(){const{canSeek:s}=g().$state;return s()?r`
        <media-controls-group class="vds-controls-group">
          <div class="vds-controls-spacer"></div>
          ${z({seconds:-10,tooltip:"top"})}
          ${H({tooltip:"top"})}
          ${z({tooltip:"top",seconds:10})}
          <div class="vds-controls-spacer"></div>
        </media-controls-group>
      `:null}function Gt(){const s="top end";return r`
    ${jt({tooltip:"top",placement:s,portal:!0})}
    ${Ht({tooltip:"top end",placement:s,portal:!0})}
  `}const lt=class lt extends gt(Nt,qt){onSetup(){this.forwardKeepAlive=!1,this.g=g(),this.classList.add("vds-audio-layout"),this.menuContainer=Vt("vds-audio-layout"),P(()=>{this.menuContainer&&$t(this.menuContainer,"data-size",this.isSmallLayout&&"sm")}),D(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){P(()=>{this.$props.customIcons()?new Et(this).connect():new Rt(this).connect()})}s(){const{streamType:t}=this.g.$state;return this.isMatch&&t()!=="unknown"?this.isSmallLayout?we():xe():null}render(){return r`${b(this.s.bind(this))}`}};lt.tagName="media-audio-layout";let et=lt;function De(){return r`
    ${Qt()}${nt()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      ${b(Ae)}

      <div class="vds-controls-spacer"></div>

      <media-controls-group class="vds-controls-group">${J()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${H({tooltip:"top start"})}
        ${W({tooltip:"top"})}${It()}
        ${b(ot)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${Z({tooltip:"top"})}${b(ke)}
        ${pe()} ${Pt({tooltip:"top end"})}
      </media-controls-group>
    </media-controls>
  `}function ke(){const{menuGroup:s}=f();return s()==="bottom"?at():null}function Ae(){const{menuGroup:s}=f(),t=s()==="top"?r`
            <div class="vds-controls-spacer"></div>
            ${at()}
          `:null;return r`
    <media-controls-group class="vds-controls-group">${t}</media-controls-group>
  `}function Ne(){return r`
    ${Qt()}${nt()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        <div class="vds-controls-spacer"></div>
        ${Z({tooltip:"bottom"})}
        ${at()}${W({tooltip:"bottom end"})}
      </media-controls-group>

      <div class="vds-controls-group">${H({tooltip:"top"})}</div>

      <media-controls-group class="vds-controls-group">
        ${b(ot)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        <div class="vds-controls-spacer"></div>
        ${Pt({tooltip:"top end"})}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${J()}</media-controls-group>
    </media-controls>

    ${b(Me)}
  `}function Me(){const{duration:s}=g().$state;return s()===0?null:r`
    <div class="vds-start-duration">
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `}function nt(){return r`
    <div class="vds-buffering-indicator">
      <svg class="vds-buffering-icon" fill="none" viewBox="0 0 120 120" aria-hidden="true">
        <circle class="vds-buffering-track" cx="60" cy="60" r="54" stroke="currentColor"></circle>
        <circle
          class="vds-buffering-track-fill"
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          pathLength="100"
        ></circle>
      </svg>
    </div>
  `}function at(){const{menuGroup:s,smQueryList:t}=f(),e=()=>s()==="top"||t.matches?"bottom":"top",i=T(()=>`${e()} ${s()==="top"?"end":"center"}`),o=T(()=>`${e()} end`);return r`
    ${jt({tooltip:i,placement:o,portal:!0})}
    ${Ht({tooltip:i,placement:o,portal:!0})}
  `}function Qt(){return r`
    <div class="vds-gestures">
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:controls"></media-gesture>
      <media-gesture
        class="vds-gesture"
        event="dblpointerup"
        action="toggle:fullscreen"
      ></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
    </div>
  `}const rt=class rt extends gt(Nt,Wt){onSetup(){this.forwardKeepAlive=!1,this.g=g(),this.classList.add("vds-video-layout"),this.menuContainer=Vt("vds-video-layout"),P(()=>{this.menuContainer&&$t(this.menuContainer,"data-size",this.isSmallLayout&&"sm")}),D(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){P(()=>{this.$props.customIcons()?new Et(this).connect():new Rt(this).connect()})}s(){const{streamType:t}=this.g.$state;return this.isMatch?t()==="unknown"?nt():this.isSmallLayout?Ne():De():null}render(){return r`${b(this.s.bind(this))}`}};rt.tagName="media-video-layout";let st=rt;yt(et);yt(st);
