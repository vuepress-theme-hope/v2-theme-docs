import{H as d,M as f,u as H,e as r,s as e,c as u,a as v,d as m}from"./vidstack-2eac4c2a-ddb176c6.js";import"./app-1ee6e138.js";const l=class l extends d(HTMLElement,f){constructor(){super(...arguments),this.F=null}onSetup(){this.a=H(),this.setAttribute("keep-alive","")}onDestroy(){var t;(t=this.F)==null||t.remove(),this.F=null}onConnect(){r(()=>{var o,i;const t=this.$state.loader(),s=t?t.mediaType()==="audio"?this.G():this.H():null;if(this.F!==s){const n=((o=this.F)==null?void 0:o.parentElement)??this;(i=this.F)==null||i.remove(),this.F=s,s&&n.prepend(s)}this.load(s)})}G(){const t=this.F instanceof HTMLAudioElement?this.F:document.createElement("audio");e(t,"preload","none"),e(t,"aria-hidden","true");const{controls:s,crossorigin:o}=this.a.$state;return r(()=>{e(t,"controls",s()),e(t,"crossorigin",o())}),t}H(){const t=this.F instanceof HTMLVideoElement?this.F:document.createElement("video"),{controls:s,crossorigin:o,poster:i}=this.a.$state,{$iosControls:n}=this.a,p=u(()=>s()||n()?"":null),F=u(()=>i()&&(s()||n())?i():null);return r(()=>{e(t,"controls",p()),e(t,"crossorigin",o()),e(t,"poster",F())}),t}};l.tagName="media-provider";let c=l;const a=class a extends d(HTMLElement,v){};a.tagName="media-player",a.attrs={preferNativeHLS:"prefer-native-hls"};let h=a;m(h);m(c);