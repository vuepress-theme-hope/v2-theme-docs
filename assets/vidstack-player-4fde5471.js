import{H as d,M as g,u as f,e as a,s as e,c as u,a as v,d as m}from"./vidstack-1a42d66e-b64007f4.js";import"./app-fe94cd90.js";const h=class h extends d(HTMLElement,g){constructor(){super(...arguments),this.k=null}onSetup(){this.g=f(),this.setAttribute("keep-alive","")}onDestroy(){var t;(t=this.k)==null||t.remove(),this.k=null}onConnect(){a(()=>{var o,i;const t=this.$state.loader(),s=t?t.mediaType()==="audio"?this.l():this.m():null;if(this.k!==s){const n=((o=this.k)==null?void 0:o.parentElement)??this;(i=this.k)==null||i.remove(),this.k=s,s&&n.prepend(s)}this.load(s)})}l(){const t=this.k instanceof HTMLAudioElement?this.k:document.createElement("audio");e(t,"preload","none"),e(t,"aria-hidden","true");const{controls:s,crossorigin:o}=this.g.$state;return a(()=>{e(t,"controls",s()),e(t,"crossorigin",o())}),t}m(){const t=this.k instanceof HTMLVideoElement?this.k:document.createElement("video"),{controls:s,crossorigin:o,poster:i}=this.g.$state,{$iosControls:n}=this.g,p=u(()=>s()||n()?"":null),k=u(()=>i()&&(s()||n())?i():null);return a(()=>{e(t,"controls",p()),e(t,"crossorigin",o()),e(t,"poster",k())}),t}};h.tagName="media-provider";let c=h;const r=class r extends d(HTMLElement,v){};r.tagName="media-player",r.attrs={preferNativeHLS:"prefer-native-hls"};let l=r;m(l);m(c);
