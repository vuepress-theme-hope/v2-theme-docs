import{c as k,b as g,u as $,i as ft,g as x,f as q,e as M,h as gt,o as D,j as Rt,l as zt,H as $t,D as Qt,s as bt,k as Yt,d as yt}from"./vidstack-725a7f4d-95ea9c0b.js";import{D as Zt}from"./app-92e2b39d.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;const _=window,T=_.trustedTypes,dt=T?T.createPolicy("lit-html",{createHTML:s=>s}):void 0,K="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,xt="?"+w,Ut=`<${xt}>`,S=document,P=()=>S.createComment(""),I=s=>s===null||typeof s!="object"&&typeof s!="function",wt=Array.isArray,Wt=s=>wt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",J=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,ut=/>/g,C=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,mt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,Jt=s=>(t,...e)=>({hh:s,strings:t,values:e}),r=Jt(1),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),pt=new WeakMap,L=S.createTreeWalker(S,129,null,!1);function Lt(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return dt!==void 0?dt.createHTML(t):t}const Kt=(s,t)=>{const e=s.length-1,i=[];let o,n=t===2?"<svg>":"",a=N;for(let u=0;u<e;u++){const l=s[u];let d,h,c=-1,v=0;for(;v<l.length&&(a.lastIndex=v,h=a.exec(l),h!==null);)v=a.lastIndex,a===N?h[1]==="!--"?a=ct:h[1]!==void 0?a=ut:h[2]!==void 0?(Ct.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=C):h[3]!==void 0&&(a=C):a===C?h[0]===">"?(a=o??N,c=-1):h[1]===void 0?c=-2:(c=a.lastIndex-h[2].length,d=h[1],a=h[3]===void 0?C:h[3]==='"'?mt:ht):a===mt||a===ht?a=C:a===ct||a===ut?a=N:(a=C,o=void 0);const y=a===C&&s[u+1].startsWith("/>")?" ":"";n+=a===N?l+Ut:c>=0?(i.push(d),l.slice(0,c)+K+l.slice(c)+w+y):l+w+(c===-2?(i.push(void 0),u):y)}return[Lt(s,n+(s[e]||"<?>")+(t===2?"</svg>":"")),i]};class B{constructor({strings:t,hh:e},i){let o;this.parts=[];let n=0,a=0;const u=t.length-1,l=this.parts,[d,h]=Kt(t,e);if(this.el=B.createElement(d,i),L.currentNode=this.el.content,e===2){const c=this.el.content,v=c.firstChild;v.remove(),c.append(...v.childNodes)}for(;(o=L.nextNode())!==null&&l.length<u;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const v of o.getAttributeNames())if(v.endsWith(K)||v.startsWith(w)){const y=h[a++];if(c.push(v),y!==void 0){const Ft=o.getAttribute(y.toLowerCase()+K).split(w),V=/([.?@])?(.*)/.exec(y);l.push({type:1,index:n,name:V[2],strings:Ft,ctor:V[1]==="."?te:V[1]==="?"?se:V[1]==="@"?ie:z})}else l.push({type:6,index:n})}for(const v of c)o.removeAttribute(v)}if(Ct.test(o.tagName)){const c=o.textContent.split(w),v=c.length-1;if(v>0){o.textContent=T?T.emptyScript:"";for(let y=0;y<v;y++)o.append(c[y],P()),L.nextNode(),l.push({type:2,index:++n});o.append(c[v],P())}}}else if(o.nodeType===8)if(o.data===xt)l.push({type:2,index:n});else{let c=-1;for(;(c=o.data.indexOf(w,c+1))!==-1;)l.push({type:7,index:n}),c+=w.length-1}n++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function j(s,t,e=s,i){var o,n,a,u;if(t===A)return t;let l=i!==void 0?(o=e.jh)===null||o===void 0?void 0:o[i]:e.oh;const d=I(t)?void 0:t.sh;return(l==null?void 0:l.constructor)!==d&&((n=l==null?void 0:l.th)===null||n===void 0||n.call(l,!1),d===void 0?l=void 0:(l=new d(s),l.uh(s,e,i)),i!==void 0?((a=(u=e).jh)!==null&&a!==void 0?a:u.jh=[])[i]=l:e.oh=l),l!==void 0&&(t=j(s,l.vh(s,t.values),l,i)),t}class Xt{constructor(t,e){this.kh=[],this.ih=void 0,this.lh=t,this.bh=e}get parentNode(){return this.bh.parentNode}get ch(){return this.bh.ch}u(t){var e;const{el:{content:i},parts:o}=this.lh,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:S).importNode(i,!0);L.currentNode=n;let a=L.nextNode(),u=0,l=0,d=o[0];for(;d!==void 0;){if(u===d.index){let h;d.type===2?h=new O(a,a.nextSibling,this,t):d.type===1?h=new d.ctor(a,d.name,d.strings,this,t):d.type===6&&(h=new oe(a,this,t)),this.kh.push(h),d=o[++l]}u!==(d==null?void 0:d.index)&&(a=L.nextNode(),u++)}return L.currentNode=S,n}v(t){let e=0;for(const i of this.kh)i!==void 0&&(i.strings!==void 0?(i.dh(t,i,e),e+=i.strings.length-2):i.dh(t[e])),e++}}class O{constructor(t,e,i,o){var n;this.type=2,this.ah=p,this.ih=void 0,this.eh=t,this.fh=e,this.bh=i,this.options=o,this.mh=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get ch(){var t,e;return(e=(t=this.bh)===null||t===void 0?void 0:t.ch)!==null&&e!==void 0?e:this.mh}get parentNode(){let t=this.eh.parentNode;const e=this.bh;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this.eh}get endNode(){return this.fh}dh(t,e=this){t=j(this,t,e),I(t)?t===p||t==null||t===""?(this.ah!==p&&this.gh(),this.ah=p):t!==this.ah&&t!==A&&this.nh(t):t.hh!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Wt(t)?this.T(t):this.nh(t)}k(t){return this.eh.parentNode.insertBefore(t,this.fh)}$(t){this.ah!==t&&(this.gh(),this.ah=this.k(t))}nh(t){this.ah!==p&&I(this.ah)?this.eh.nextSibling.data=t:this.$(S.createTextNode(t)),this.ah=t}g(t){var e;const{values:i,hh:o}=t,n=typeof o=="number"?this.ph(t):(o.el===void 0&&(o.el=B.createElement(Lt(o.h,o.h[0]),this.options)),o);if(((e=this.ah)===null||e===void 0?void 0:e.lh)===n)this.ah.v(i);else{const a=new Xt(n,this),u=a.u(this.options);a.v(i),this.$(u),this.ah=a}}ph(t){let e=pt.get(t.strings);return e===void 0&&pt.set(t.strings,e=new B(t)),e}T(t){wt(this.ah)||(this.ah=[],this.gh());const e=this.ah;let i,o=0;for(const n of t)o===e.length?e.push(i=new O(this.k(P()),this.k(P()),this,this.options)):i=e[o],i.dh(n),o++;o<e.length&&(this.gh(i&&i.fh.nextSibling,o),e.length=o)}gh(t=this.eh.nextSibling,e){var i;for((i=this.qh)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this.fh;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this.bh===void 0&&(this.mh=t,(e=this.qh)===null||e===void 0||e.call(this,t))}}class z{constructor(t,e,i,o,n){this.type=1,this.ah=p,this.ih=void 0,this.element=t,this.name=e,this.bh=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this.ah=Array(i.length-1).fill(new String),this.strings=i):this.ah=p}get tagName(){return this.element.tagName}get ch(){return this.bh.ch}dh(t,e=this,i,o){const n=this.strings;let a=!1;if(n===void 0)t=j(this,t,e,0),a=!I(t)||t!==this.ah&&t!==A,a&&(this.ah=t);else{const u=t;let l,d;for(t=n[0],l=0;l<n.length-1;l++)d=j(this,u[i+l],e,l),d===A&&(d=this.ah[l]),a||(a=!I(d)||d!==this.ah[l]),d===p?t=p:t!==p&&(t+=(d??"")+n[l+1]),this.ah[l]=d}a&&!o&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class te extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}const ee=T?T.emptyScript:"";class se extends z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,ee):this.element.removeAttribute(this.name)}}class ie extends z{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}dh(t,e=this){var i;if((t=(i=j(this,t,e,0))!==null&&i!==void 0?i:p)===A)return;const o=this.ah,n=t===p&&o!==p||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==p&&(o===p||n);n&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this.ah=t}handleEvent(t){var e,i;typeof this.ah=="function"?this.ah.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this.ah.handleEvent(t)}}class oe{constructor(t,e,i){this.element=t,this.type=6,this.ih=void 0,this.bh=e,this.options=i}get ch(){return this.bh.ch}dh(t){j(this,t)}}const vt=_.litHtmlPolyfillSupport;vt==null||vt(B,O),((W=_.litHtmlVersions)!==null&&W!==void 0?W:_.litHtmlVersions=[]).push("2.8.0");const kt=(s,t,e)=>{var i,o;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let a=n.rh;if(a===void 0){const u=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n.rh=a=new O(t.insertBefore(P(),u),u,void 0,e??{})}return a.dh(s),a};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},St=s=>(...t)=>({sh:s,values:t});class Dt{constructor(t){}get ch(){return this.bh.ch}uh(t,e,i){this.Hj=t,this.bh=e,this.Jj=i}vh(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=(s,t)=>{var e,i;const o=s.ih;if(o===void 0)return!1;for(const n of o)(i=(e=n).th)===null||i===void 0||i.call(e,t,!1),E(n,t);return!0},F=s=>{let t,e;do{if((t=s.bh)===void 0)break;e=t.ih,e.delete(s),s=t}while((e==null?void 0:e.size)===0)},Tt=s=>{for(let t;t=s.bh;s=t){let e=t.ih;if(e===void 0)t.ih=e=new Set;else if(e.has(s))break;e.add(s),re(t)}};function ae(s){this.ih!==void 0?(F(this),this.bh=s,Tt(this)):this.bh=s}function le(s,t=!1,e=0){const i=this.ah,o=this.ih;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let n=e;n<i.length;n++)E(i[n],!1),F(i[n]);else i!=null&&(E(i,!1),F(i));else E(this,s)}const re=s=>{var t,e,i,o;s.type==it.CHILD&&((t=(i=s).qh)!==null&&t!==void 0||(i.qh=le),(e=(o=s).Ij)!==null&&e!==void 0||(o.Ij=ae))};class de extends Dt{constructor(){super(...arguments),this.ih=void 0}uh(t,e,i){super.uh(t,e,i),Tt(this),this.isConnected=t.ch}th(t,e=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)===null||i===void 0||i.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),e&&(E(this,t),F(this))}setValue(t){if(ne(this.Hj))this.Hj.dh(t,this);else{const e=[...this.Hj.ah];e[this.Jj]=t,this.Hj.dh(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=s=>s??p;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class X extends Dt{constructor(t){if(super(t),this.et=p,t.type!==it.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===p||t==null)return this.ft=void 0,this.et=t;if(t===A)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={hh:this.constructor.resultType,strings:e,values:[]}}}X.directiveName="unsafeHTML",X.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class tt extends X{}tt.directiveName="unsafeSVG",tt.resultType=2;const ce=St(tt);class ue extends de{constructor(t){super(t),this.Yg=null,this.Ob=null,this.Zg=!1,this.Zg=t.type===it.ATTRIBUTE}render(t){this.Yg!==t&&(this.Yg=t,this.disconnected(),this.isConnected&&this._g());const e=this.Yg();return this.Zg?At(e):e}reconnected(){this._g()}disconnected(){var t;this.Zg||this.setValue(null),(t=this.Ob)==null||t.call(this),this.Ob=null}_g(){this.Yg&&(this.Ob=M(this.dd.bind(this)))}dd(){var t;this.setValue((t=this.Yg)==null?void 0:t.call(this))}}const b=St(ue);function f(s){return b(k(s))}class jt extends HTMLElement{constructor(){super(...arguments),this.rootPart=null}connectedCallback(){this.rootPart=kt(this.render(),this,{renderBefore:this.firstChild}),this.rootPart.setConnected(!0)}disconnectedCallback(){var t;(t=this.rootPart)==null||t.setConnected(!1),this.rootPart=null}}class Nt{constructor(t,e){this.elements=new Set,this._b=gt(this.ja.bind(this)),this.$g=t,this.Xg=e}connect(){this.ja();const t=new MutationObserver(this._b);t.observe(this.$g,{childList:!0}),D(()=>t.disconnect()),D(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,e){t instanceof Node?(e.textContent="",e.append(t)):kt(t,e),e.style.display||(e.style.display="contents");const i=e.firstElementChild;if(!i)return;const o=e.getAttribute("data-class");o&&i.classList.add(...o.split(" "))}ja(){for(const t of this.$g.querySelectorAll("slot"))t.hasAttribute("name")&&this.elements.add(t);this.Xg(this.elements)}}let he=0,G="data-slot-id";class Et{constructor(t){this._b=gt(this.ja.bind(this)),this.$g=t,this.slots=new Nt(t,this.ja.bind(this))}connect(){this.slots.connect(),this.ja();const t=new MutationObserver(this._b);t.observe(this.$g,{childList:!0}),D(()=>t.disconnect())}ja(){for(const t of this.$g.children){if(t.nodeType!==1)continue;const e=t.getAttribute("slot");if(!e)continue;t.style.display="none";let i=t.getAttribute(G);i||t.setAttribute(G,i=++he+"");for(const o of this.slots.elements){if(o.getAttribute("name")!==e||o.getAttribute(G)===i)continue;const n=document.importNode(t,!0);e.includes("-icon")&&n.classList.add("vds-icon"),n.style.display="",n.removeAttribute("slot"),this.slots.assign(n,o),o.setAttribute(G,i)}}}}function Q({label:s,icon:t}){return r`
    <media-menu-button class="vds-menu-button">
      <slot name="menu-arrow-left-icon" data-class="vds-menu-button-close-icon"></slot>
      <slot name="${t}-icon" data-class="vds-menu-button-icon"></slot>
      <span class="vds-menu-button-label">${b(s)}</span>
      <span class="vds-menu-button-hint" data-part="hint"></span>
      <slot name="menu-arrow-right-icon" data-class="vds-menu-button-open-icon"></slot>
    </media-menu-button>
  `}function m(s,t){return f(()=>x(s,t))}function H({tooltip:s}){const{translations:t}=g(),{paused:e}=$().$state,i=f(()=>x(t,e()?"Play":"Pause"));return r`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button class="vds-play-button vds-button" aria-label=${i}>
          <slot name="play-icon" data-class="vds-play-icon"></slot>
          <slot name="pause-icon" data-class="vds-pause-icon"></slot>
          <slot name="replay-icon" data-class="vds-replay-icon"></slot>
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-play-tooltip-text">${m(t,"Play")}</span>
        <span class="vds-pause-tooltip-text">${m(t,"Pause")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Y({tooltip:s}){const{translations:t}=g(),{muted:e}=$().$state,i=f(()=>x(t,(e(),"Unmute")));return r`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button class="vds-mute-button vds-button" aria-label=${i}>
          <slot name="mute-icon" data-class="vds-mute-icon"></slot>
          <slot name="volume-low-icon" data-class="vds-volume-low-icon"></slot>
          <slot name="volume-high-icon" data-class="vds-volume-high-icon"></slot>
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-mute-tooltip-text">${m(t,"Unmute")}</span>
        <span class="vds-unmute-tooltip-text">${m(t,"Mute")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Z({tooltip:s}){const{translations:t}=g(),{textTrack:e}=$().$state,i=f(()=>x(t,e()?"Closed-Captions Off":"Closed-Captions On"));return r`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button class="vds-caption-button vds-button" aria-label=${i}>
          <slot name="cc-on-icon" data-class="vds-cc-on-icon"></slot>
          <slot name="cc-off-icon" data-class="vds-cc-off-icon"></slot>
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-cc-on-tooltip-text">${m(t,"Closed-Captions Off")}</span>
        <span class="vds-cc-off-tooltip-text">${m(t,"Closed-Captions On")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function me(){const{translations:s}=g(),{pictureInPicture:t}=$().$state,e=f(()=>x(s,t()?"Exit PiP":"Enter PiP"));return r`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button class="vds-pip-button vds-button" aria-label=${e}>
          <slot name="pip-enter-icon" data-class="vds-pip-enter-icon"></slot>
          <slot name="pip-exit-icon" data-class="vds-pip-exit-icon"></slot>
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${m(s,"Enter PiP")}</span>
        <span class="vds-pip-exit-tooltip-text">${m(s,"Exit PiP")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Mt({tooltip:s}){const{translations:t}=g(),{fullscreen:e}=$().$state,i=f(()=>x(t,e()?"Exit Fullscreen":"Enter Fullscreen"));return r`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button class="vds-fullscreen-button vds-button" aria-label=${i}>
          <slot name="fs-enter-icon" data-class="vds-fs-enter-icon"></slot>
          <slot name="fs-exit-icon" data-class="vds-fs-exit-icon"></slot>
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-fs-enter-tooltip-text">${m(t,"Enter Fullscreen")}</span>
        <span class="vds-fs-exit-tooltip-text">${m(t,"Exit Fullscreen")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function R({seconds:s,tooltip:t}){const{translations:e}=g(),i=s>=0?"Seek Forward":"Seek Backward",o=m(e,i);return r`
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
        ${m(e,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function Pt(){const{translations:s}=g(),t=m(s,"Volume");return r`
    <media-volume-slider class="vds-volume-slider vds-slider" aria-label=${t}>
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function U(){const{smQueryList:s,thumbnails:t,translations:e}=g(),i=m(e,"Seek");return r`
    <media-time-slider class="vds-time-slider vds-slider" aria-label=${i}>
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${b(s.$matches)}>
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
          src=${b(t)}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function It(){const{translations:s}=g(),{live:t}=$().$state,e=m(s,"Skip To Live"),i=m(s,"LIVE");return t()?r`
    <media-live-button class="vds-live-button" aria-label=${e}>
      <span class="vds-live-button-text">${i}</span>
    </media-live-button
  `:null}function pe(){return r`
    <div class="vds-time-group">
      <media-time class="vds-time" type="current"></media-time>
      <div class="vds-time-divider">/</div>
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `}function ot(){const{live:s}=$().$state;return s()?It():pe()}function Bt(s,t){return r`
    <media-menu-portal .container=${s} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function Ot({placement:s,tooltip:t,portal:e}){const{viewType:i}=$().$state,{translations:o,smQueryList:n,thumbnails:a,menuContainer:u,noModal:l,menuGroup:d}=g(),h=k(()=>l()?q(s):n.matches?null:q(s)),c=k(()=>!n.matches&&d()==="bottom"&&i()==="video"?26:0),v=r`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${b(h)}
      offset=${b(c)}
    >
      <media-chapters-radio-group
        class="vds-chapters-radio-group vds-radio-group"
        thumbnails=${b(a)}
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
            aria-label=${m(o,"Chapters")}
          >
            <slot name="menu-chapters-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${ft(t)?b(t):t}
        >
          ${m(o,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${e?Bt(u,v):v}
    </media-menu>
  `}function Ht({placement:s,portal:t,tooltip:e}){const{viewType:i}=$().$state,{translations:o,smQueryList:n,menuContainer:a,noModal:u,menuGroup:l}=g(),d=k(()=>u()?q(s):n.matches?null:q(s)),h=k(()=>!n.matches&&l()==="bottom"&&i()==="video"?26:0),c=r`
    <media-menu-items
      class="vds-settings-menu-items vds-menu-items"
      placement=${b(d)}
      offset=${b(h)}
    >
      ${ve()}${fe()}${ge()}${$e()}
    </media-menu-items>
  `;return r`
    <media-menu class="vds-settings-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${m(o,"Settings")}
          >
            <slot name="menu-settings-icon" data-class="vds-rotate-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${ft(e)?b(e):e}
        >
          ${m(o,"Settings")}
        </media-tooltip-content>
      </media-tooltip>
      ${t?Bt(a,c):c}
    </media-menu>
  `}function ve(){const{translations:s}=g();return r`
    <!-- Audio Menu -->
    <media-menu class="vds-audio-menu vds-menu">
      ${Q({label:()=>x(s,"Audio"),icon:"menu-audio"})}
      <media-menu-items class="vds-menu-items">
        <media-audio-radio-group
          class="vds-audio-radio-group vds-radio-group"
          empty-label=${m(s,"Default")}
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
  `}function fe(){const{translations:s}=g();return r`
    <!-- Speed Menu -->
    <media-menu class="vds-speed-menu vds-menu">
      ${Q({label:()=>x(s,"Speed"),icon:"menu-speed"})}
      <media-menu-items class="vds-menu-items">
        <media-speed-radio-group
          class="vds-speed-radio-group vds-radio-group"
          normal-label=${m(s,"Normal")}
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
  `}function ge(){const{translations:s}=g();return r`
    <!-- Quality Menu -->
    <media-menu class="vds-quality-menu vds-menu">
      ${Q({label:()=>x(s,"Quality"),icon:"menu-quality"})}
      <media-menu-items class="vds-menu-items">
        <media-quality-radio-group
          class="vds-quality-radio-group vds-radio-group"
          auto-label=${m(s,"Auto")}
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
  `}function $e(){const{translations:s}=g();return r`
    <!-- Captions Menu -->
    <media-menu class="vds-captions-menu vds-menu">
      ${Q({label:()=>x(s,"Captions"),icon:"menu-captions"})}
      <media-menu-items class="vds-menu-items">
        <media-captions-radio-group
          class="vds-captions-radio-group vds-radio-group"
          off-label=${m(s,"Off")}
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
  `}function Vt(s){let t=document.querySelector(`body > .${s}`);return t||(t=document.createElement("div"),t.style.display="contents",t.classList.add(s),document.body.append(t)),t}function be({name:s,class:t,state:e,paths:i}){return r`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${At(s??e)}
  >
    ${Rt(i)?ce(i):b(i)}
  </svg>`}class ye{constructor(t){this.Lj={},this.Mj=!1,this.$g=t,this.slots=new Nt(t,this.Nj.bind(this))}connect(){this.slots.connect(),D(this.disconnect.bind(this))}load(){this.La().then(t=>{this.Lj=t,this.Mj=!0,this.Nj()})}disconnect(){for(const{slot:t}of this.Oj())t.textContent=""}*Oj(){for(const t of Object.keys(this.Lj)){const e=`${t}-icon`;for(const i of this.slots.elements)i.name===e&&(yield{icon:this.Lj[t],slot:i})}}Nj(){if(this.Mj)for(const{icon:t,slot:e}of this.Oj())this.slots.assign(t,e)}}class xe extends ye{connect(){const t=this.Gj();t&&(super.connect(),t.$state.canLoad()?this.load():zt(t,"can-load",()=>this.load(),{once:!0}))}Gj(){let t=this.$g.parentElement;for(;t&&t.localName!=="media-player";)t=t.parentElement;return t}}class Gt extends xe{async La(){const t=(await Zt(()=>import("./vidstack-0d51c467-b60f272c.js"),[])).icons,e={};for(const i of Object.keys(t))e[i]=be({name:i,paths:t[i]});return e}}function we(){return r`
    <media-captions class="vds-captions"></media-captions>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">${U()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${R({seconds:-10,tooltip:"top start"})}
        ${H({tooltip:"top"})}${R({tooltip:"top",seconds:10})}
        ${f(ot)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${Y({tooltip:"top"})}
        ${Pt()}${Z({tooltip:"top"})} ${qt()}
      </media-controls-group>
    </media-controls>
  `}function Ce(){return r`
    <media-captions class="vds-captions"></media-captions>
    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        ${f(Le)}
        ${Y({tooltip:"top start"})}${f(It)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${Z({tooltip:"top"})}${qt()}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${U()}</media-controls-group>

      ${f(ke)}${f(Se)}
    </media-controls>
  `}function Le(){const{live:s,canSeek:t}=$().$state;return s()&&!t()?H({tooltip:"top start"}):null}function ke(){const{live:s}=$().$state;return s()?null:r`
        <media-controls-group class="vds-controls-group">
          <media-time class="vds-time" type="current"></media-time>
          <div class="vds-controls-spacer"></div>
          <media-time class="vds-time" type="duration"></media-time>
        </media-controls-group>
      `}function Se(){const{canSeek:s}=$().$state;return s()?r`
        <media-controls-group class="vds-controls-group">
          <div class="vds-controls-spacer"></div>
          ${R({seconds:-10,tooltip:"top"})}
          ${H({tooltip:"top"})}
          ${R({tooltip:"top",seconds:10})}
          <div class="vds-controls-spacer"></div>
        </media-controls-group>
      `:null}function qt(){const s="top end";return r`
    ${Ot({tooltip:"top",placement:s,portal:!0})}
    ${Ht({tooltip:"top end",placement:s,portal:!0})}
  `}const lt=class lt extends $t(jt,Qt){onSetup(){this.forwardKeepAlive=!1,this.t=$(),this.classList.add("vds-audio-layout"),this.menuContainer=Vt("vds-audio-layout"),M(()=>{this.menuContainer&&bt(this.menuContainer,"data-size",this.isSmallLayout&&"sm")}),D(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){M(()=>{this.$props.customIcons()?new Et(this).connect():new Gt(this).connect()})}L(){const{streamType:t}=this.t.$state;return this.isMatch&&t()!=="unknown"?this.isSmallLayout?Ce():we():null}render(){return r`${f(this.L.bind(this))}`}};lt.tagName="media-audio-layout";let et=lt;function De(){return r`
    ${_t()}${nt()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      ${f(Ae)}

      <div class="vds-controls-spacer"></div>

      <media-controls-group class="vds-controls-group">${U()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${H({tooltip:"top start"})}
        ${Y({tooltip:"top"})}${Pt()}
        ${f(ot)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${Z({tooltip:"top"})}${f(Te)}
        ${me()} ${Mt({tooltip:"top end"})}
      </media-controls-group>
    </media-controls>
  `}function Te(){const{menuGroup:s}=g();return s()==="bottom"?at():null}function Ae(){const{menuGroup:s}=g(),t=s()==="top"?r`
            <div class="vds-controls-spacer"></div>
            ${at()}
          `:null;return r`
    <media-controls-group class="vds-controls-group">${t}</media-controls-group>
  `}function je(){return r`
    ${_t()}${nt()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        <div class="vds-controls-spacer"></div>
        ${Z({tooltip:"bottom"})}
        ${at()}${Y({tooltip:"bottom end"})}
      </media-controls-group>

      <div class="vds-controls-group">${H({tooltip:"top"})}</div>

      <media-controls-group class="vds-controls-group">
        ${f(ot)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        <div class="vds-controls-spacer"></div>
        ${Mt({tooltip:"top end"})}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${U()}</media-controls-group>
    </media-controls>

    ${f(Ne)}
  `}function Ne(){const{duration:s}=$().$state;return s()===0?null:r`
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
  `}function at(){const{menuGroup:s,smQueryList:t}=g(),e=()=>s()==="top"||t.matches?"bottom":"top",i=k(()=>`${e()} ${s()==="top"?"end":"center"}`),o=k(()=>`${e()} end`);return r`
    ${Ot({tooltip:i,placement:o,portal:!0})}
    ${Ht({tooltip:i,placement:o,portal:!0})}
  `}function _t(){return r`
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
  `}const rt=class rt extends $t(jt,Yt){onSetup(){this.forwardKeepAlive=!1,this.t=$(),this.classList.add("vds-video-layout"),this.menuContainer=Vt("vds-video-layout"),M(()=>{this.menuContainer&&bt(this.menuContainer,"data-size",this.isSmallLayout&&"sm")}),D(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){M(()=>{this.$props.customIcons()?new Et(this).connect():new Gt(this).connect()})}L(){const{streamType:t}=this.t.$state;return this.isMatch?t()==="unknown"?nt():this.isSmallLayout?je():De():null}render(){return r`${f(this.L.bind(this))}`}};rt.tagName="media-video-layout";let st=rt;yt(et);yt(st);
