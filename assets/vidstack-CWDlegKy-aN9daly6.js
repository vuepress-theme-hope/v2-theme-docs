const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-google-cast-BErw8owJ.js","assets/app-BLmUDr3s.js","assets/vidstack-DSYpsFWk-Bh5ztx2c.js"])))=>i.map(i=>d[i]);
var P=Object.defineProperty;var w=t=>{throw TypeError(t)};var k=(t,e,a)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>k(t,typeof e!="symbol"?e+"":e,a),C=(t,e,a)=>e.has(t)||w("Cannot "+a);var c=(t,e,a)=>(C(t,e,"read from private field"),a?a.call(t):e.get(t)),m=(t,e,a)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),y=(t,e,a,o)=>(C(t,e,"write to private field"),o?o.call(t,a):e.set(t,a),a),s=(t,e,a)=>(C(t,e,"access private method"),a);import{l as A,I as O,aT as b,aX as D,j as R,_ as T,n as G}from"./app-BLmUDr3s.js";function L(){return"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"}function M(){var t;return!!((t=window.cast)!=null&&t.framework)}function j(){var t,e;return!!((e=(t=window.chrome)==null?void 0:t.cast)!=null&&e.isAvailable)}function v(){return g().getCastState()===cast.framework.CastState.CONNECTED}function g(){return window.cast.framework.CastContext.getInstance()}function E(){return g().getCurrentSession()}function N(){var t;return(t=E())==null?void 0:t.getSessionObj().media[0]}function J(t){var a;return((a=N())==null?void 0:a.media.contentId)===(t==null?void 0:t.src)}function F(){return{language:"en-US",autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,receiverApplicationId:chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,resumeSavedSession:!0,androidReceiverCompatible:!0}}function U(t){return`Google Cast Error Code: ${t}`}function q(t,e){return A(g(),t,e)}var n,r,S,_,I,l,d;class V{constructor(){m(this,r);u(this,"name","google-cast");u(this,"target");m(this,n)}get cast(){return g()}mediaType(){return"video"}canPlay(e){return O&&!b&&D(e)}async prompt(e){var h;let a,o,i;try{a=await s(this,r,S).call(this,e),c(this,n)||(y(this,n,new cast.framework.RemotePlayer),new cast.framework.RemotePlayerController(c(this,n))),o=e.player.createEvent("google-cast-prompt-open",{trigger:a}),e.player.dispatchEvent(o),s(this,r,l).call(this,e,"connecting",o),await s(this,r,_).call(this,R(e.$props.googleCast)),e.$state.remotePlaybackInfo.set({deviceName:(h=E())==null?void 0:h.getCastDevice().friendlyName}),v()&&s(this,r,l).call(this,e,"connected",o)}catch(p){const f=p instanceof Error?p:s(this,r,d).call(this,(p+"").toUpperCase(),"Prompt failed.");throw i=e.player.createEvent("google-cast-prompt-error",{detail:f,trigger:o??a,cancelable:!0}),e.player.dispatch(i),s(this,r,l).call(this,e,v()?"connected":"disconnected",i),f}finally{e.player.dispatch("google-cast-prompt-close",{trigger:i??o??a})}}async load(e){if(!c(this,n))throw Error("[vidstack] google cast player was not initialized");return new(await T(async()=>{const{GoogleCastProvider:a}=await import("./vidstack-google-cast-BErw8owJ.js");return{GoogleCastProvider:a}},__vite__mapDeps([0,1,2]))).GoogleCastProvider(c(this,n),e)}}n=new WeakMap,r=new WeakSet,S=async function(e){if(M())return;const a=e.player.createEvent("google-cast-load-start");e.player.dispatch(a),await G(L()),await customElements.whenDefined("google-cast-launcher");const o=e.player.createEvent("google-cast-loaded",{trigger:a});if(e.player.dispatch(o),!j())throw s(this,r,d).call(this,"CAST_NOT_AVAILABLE","Google Cast not available on this platform.");return o},_=async function(e){s(this,r,I).call(this,e);const a=await this.cast.requestSession();if(a)throw s(this,r,d).call(this,a.toUpperCase(),U(a))},I=function(e){var a;(a=this.cast)==null||a.setOptions({...F(),...e})},l=function(e,a,o){const i={type:"google-cast",state:a};e.notify("remote-playback-change",i,o)},d=function(e,a){const o=Error(a);return o.code=e,o};const B=Object.freeze(Object.defineProperty({__proto__:null,GoogleCastLoader:V},Symbol.toStringTag,{value:"Module"}));export{E as a,N as b,U as c,g,J as h,q as l,B as v};
