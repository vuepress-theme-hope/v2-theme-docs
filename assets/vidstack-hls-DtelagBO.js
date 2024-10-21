var rt=Object.defineProperty;var q=n=>{throw TypeError(n)};var ot=(n,t,i)=>t in n?rt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i;var _=(n,t,i)=>ot(n,typeof t!="symbol"?t+"":t,i),R=(n,t,i)=>t.has(n)||q("Cannot "+i);var e=(n,t,i)=>(R(n,t,"read from private field"),i?i.call(n):t.get(n)),p=(n,t,i)=>t.has(n)?q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,i),f=(n,t,i,s)=>(R(n,t,"write to private field"),s?s.call(n,i):t.set(n,i),i),a=(n,t,i)=>(R(n,t,"access private method"),i);import{g as ht,h as I,p as at,j as O,Q as N,l as V,k as dt,D as x,T as ut,f as j,L as $,I as ct,i as k,m as lt,n as pt,q as ft,r as vt}from"./app-BLmUDr3s.js";import{VideoProvider as yt}from"./vidstack-video-BKTlxY81.js";import{R as gt}from"./vidstack-DSYpsFWk-Bh5ztx2c.js";import"./vidstack-CGXAe0PE-ByrTiolF.js";const Lt=n=>vt(n);var T,h,o,D,C,r,E,M,U,F,Q,K,W,B,J,X,Y,z,G,Z,tt;class St{constructor(t,i){p(this,r);p(this,T);p(this,h);p(this,o,null);p(this,D,null);_(this,"config",{});p(this,C,new Set);f(this,T,t),f(this,h,i)}get instance(){return e(this,o)}setup(t){const{streamType:i}=e(this,h).$state,s=O(i).includes("live"),c=O(i).includes("ll-");f(this,o,new t({lowLatencyMode:c,backBufferLength:c?4:s?8:void 0,renderTextTracksNatively:!1,...this.config}));const u=a(this,r,F).bind(this);for(const l of Object.values(t.Events))e(this,o).on(l,u);e(this,o).on(t.Events.ERROR,a(this,r,Y).bind(this));for(const l of e(this,C))l(e(this,o));e(this,h).player.dispatch("hls-instance",{detail:e(this,o)}),e(this,o).attachMedia(e(this,T)),e(this,o).on(t.Events.AUDIO_TRACK_SWITCHED,a(this,r,W).bind(this)),e(this,o).on(t.Events.LEVEL_SWITCHED,a(this,r,B).bind(this)),e(this,o).on(t.Events.LEVEL_LOADED,a(this,r,X).bind(this)),e(this,o).on(t.Events.LEVEL_UPDATED,a(this,r,J).bind(this)),e(this,o).on(t.Events.NON_NATIVE_TEXT_TRACKS_FOUND,a(this,r,Q).bind(this)),e(this,o).on(t.Events.CUES_PARSED,a(this,r,K).bind(this)),e(this,h).qualities[N.enableAuto]=a(this,r,G).bind(this),V(e(this,h).qualities,"change",a(this,r,Z).bind(this)),V(e(this,h).audioTracks,"change",a(this,r,tt).bind(this)),f(this,D,dt(a(this,r,M).bind(this)))}onInstance(t){return e(this,C).add(t),()=>e(this,C).delete(t)}loadSource(t){var i;I(t.src)&&((i=e(this,o))==null||i.loadSource(t.src))}destroy(){var t,i;(t=e(this,o))==null||t.destroy(),f(this,o,null),(i=e(this,D))==null||i.call(this),f(this,D,null)}}T=new WeakMap,h=new WeakMap,o=new WeakMap,D=new WeakMap,C=new WeakMap,r=new WeakSet,E=function(t,i){return new x(Lt(t),{detail:i})},M=function(){if(!e(this,h).$state.live())return;const t=new gt(a(this,r,U).bind(this));return t.start(),t.stop.bind(t)},U=function(){var t;e(this,h).$state.liveSyncPosition.set(((t=e(this,o))==null?void 0:t.liveSyncPosition)??1/0)},F=function(t,i){var s;(s=e(this,h).player)==null||s.dispatch(a(this,r,E).call(this,t,i))},Q=function(t,i){const s=a(this,r,E).call(this,t,i);let c=-1;for(let u=0;u<i.tracks.length;u++){const l=i.tracks[u],d=l.subtitleTrack??l.closedCaptions,w=new ut({id:`hls-${l.kind}-${u}`,src:d==null?void 0:d.url,label:l.label,language:d==null?void 0:d.lang,kind:l.kind,default:l.default});w[j.readyState]=2,w[j.onModeChange]=()=>{w.mode==="showing"?(e(this,o).subtitleTrack=u,c=u):c===u&&(e(this,o).subtitleTrack=-1,c=-1)},e(this,h).textTracks.add(w,s)}},K=function(t,i){var l;const s=(l=e(this,o))==null?void 0:l.subtitleTrack,c=e(this,h).textTracks.getById(`hls-${i.type}-${s}`);if(!c)return;const u=a(this,r,E).call(this,t,i);for(const d of i.cues)d.positionAlign="auto",c.addCue(d,u)},W=function(t,i){const s=e(this,h).audioTracks[i.id];if(s){const c=a(this,r,E).call(this,t,i);e(this,h).audioTracks[$.select](s,!0,c)}},B=function(t,i){const s=e(this,h).qualities[i.level];if(s){const c=a(this,r,E).call(this,t,i);e(this,h).qualities[$.select](s,!0,c)}},J=function(t,i){i.details.totalduration>0&&e(this,h).$state.inferredLiveDVRWindow.set(i.details.totalduration)},X=function(t,i){var P;if(e(this,h).$state.canPlay())return;const{type:s,live:c,totalduration:u,targetduration:l}=i.details,d=a(this,r,E).call(this,t,i);e(this,h).notify("stream-type-change",c?s==="EVENT"&&Number.isFinite(u)&&l>=10?"live:dvr":"live":"on-demand",d),e(this,h).notify("duration-change",u,d);const w=e(this,o).media;e(this,o).currentLevel===-1&&e(this,h).qualities[N.setAuto](!0,d);for(const y of e(this,o).audioTracks){const H={id:y.id.toString(),label:y.name,language:y.lang||"",kind:"main"};e(this,h).audioTracks[$.add](H,d)}for(const y of e(this,o).levels){const H={id:((P=y.id)==null?void 0:P.toString())??y.height+"p",width:y.width,height:y.height,codec:y.codecSet,bitrate:y.bitrate};e(this,h).qualities[$.add](H,d)}w.dispatchEvent(new x("canplay",{trigger:d}))},Y=function(t,i){var s;if(i.fatal)switch(i.type){case"mediaError":(s=e(this,o))==null||s.recoverMediaError();break;default:a(this,r,z).call(this,i.error);break}},z=function(t){e(this,h).notify("error",{message:t.message,code:1,error:t})},G=function(){e(this,o)&&(e(this,o).currentLevel=-1)},Z=function(){const{qualities:t}=e(this,h);!e(this,o)||t.auto||(e(this,o)[t.switch+"Level"]=t.selectedIndex,ct&&(e(this,T).currentTime=e(this,T).currentTime))},tt=function(){const{audioTracks:t}=e(this,h);e(this,o)&&e(this,o).audioTrack!==t.selectedIndex&&(e(this,o).audioTrack=t.selectedIndex)};var m,g,b,L,it,et,st,nt;class Et{constructor(t,i,s){p(this,L);p(this,m);p(this,g);p(this,b);f(this,m,t),f(this,g,i),f(this,b,s),a(this,L,it).call(this)}}m=new WeakMap,g=new WeakMap,b=new WeakMap,L=new WeakSet,it=async function(){const t={onLoadStart:a(this,L,et).bind(this),onLoaded:a(this,L,st).bind(this),onLoadError:a(this,L,nt).bind(this)};let i=await mt(e(this,m),t);if(k(i)&&!I(e(this,m))&&(i=await Tt(e(this,m),t)),!i)return null;if(!i.isSupported()){const s="[vidstack] `hls.js` is not supported in this environment";return e(this,g).player.dispatch(new x("hls-unsupported")),e(this,g).notify("error",{message:s,code:4}),null}return i},et=function(){e(this,g).player.dispatch(new x("hls-lib-load-start"))},st=function(t){e(this,g).player.dispatch(new x("hls-lib-loaded",{detail:t})),e(this,b).call(this,t)},nt=function(t){const i=lt(t);e(this,g).player.dispatch(new x("hls-lib-load-error",{detail:i})),e(this,g).notify("error",{message:i.message,code:4,error:i})};async function Tt(n,t={}){var i,s,c,u,l;if(!k(n)){if((i=t.onLoadStart)==null||i.call(t),n.prototype&&n.prototype!==Function)return(s=t.onLoaded)==null||s.call(t,n),n;try{const d=(c=await n())==null?void 0:c.default;if(d&&d.isSupported)(u=t.onLoaded)==null||u.call(t,d);else throw Error("");return d}catch(d){(l=t.onLoadError)==null||l.call(t,d)}}}async function mt(n,t={}){var i,s,c;if(I(n)){(i=t.onLoadStart)==null||i.call(t);try{if(await pt(n),!ft(window.Hls))throw Error("");const u=window.Hls;return(s=t.onLoaded)==null||s.call(t,u),u}catch(u){(c=t.onLoadError)==null||c.call(t,u)}}}const wt="https://cdn.jsdelivr.net";var A,v,S;class xt extends yt{constructor(){super(...arguments);_(this,"$$PROVIDER_TYPE","HLS");p(this,A,null);p(this,v,new St(this.video,this.ctx));p(this,S,`${wt}/npm/hls.js@^1.5.0/dist/hls.min.js`)}get ctor(){return e(this,A)}get instance(){return e(this,v).instance}get type(){return"hls"}get canLiveSync(){return!0}get config(){return e(this,v).config}set config(i){e(this,v).config=i}get library(){return e(this,S)}set library(i){f(this,S,i)}preconnect(){I(e(this,S))&&at(e(this,S))}setup(){super.setup(),new Et(e(this,S),this.ctx,i=>{f(this,A,i),e(this,v).setup(i),this.ctx.notify("provider-setup",this);const s=O(this.ctx.$state.source);s&&this.loadSource(s)})}async loadSource(i,s){if(!I(i.src)){this.removeSource();return}this.media.preload=s||"",this.appendSource(i,"application/x-mpegurl"),e(this,v).loadSource(i),this.currentSrc=i}onInstance(i){const s=e(this,v).instance;return s&&i(s),e(this,v).onInstance(i)}destroy(){e(this,v).destroy()}}A=new WeakMap,v=new WeakMap,S=new WeakMap,_(xt,"supported",ht());export{xt as HLSProvider};
