import{C as N,m as ss,F as es,o as Zt,r as nt,n as Pt,t as Vt,p as kt,H as e,q as as,G as is,P as ns,u as H,e as n,T as cs,v as Rt,w as os,x as hs,y as rs,c as ms,z as ls,A as ps,B as us,E as gs,I as xs,J as ds,K as Ns,S as Hs,L as Ts,N as Ls,O as fs,Q as bs,R as Cs,U as ys,V as vs,W as $s,j as Bt,X as qs,Y as Os,Z as Ss,_ as As,$ as Gs,a0 as ws,a1 as Et,a2 as Fs,a3 as Is,a4 as Js,a5 as Ks,a6 as Qs,a7 as js,a8 as zs,a9 as Ds,aa as _t,s as o,l as Us,ab as Mt,d as s}from"./vidstack-725a7f4d-95ea9c0b.js";import"./app-92e2b39d.js";class Ws extends N{onAttach(t){ss(t,"pointer-events","auto")}}class Xs extends N{constructor(){super(),new es}onConnect(t){Zt(nt(()=>{if(!this.connectScope)return;this.pc();const a=Pt(Vt);Zt(()=>{const i=this.oc();i&&a.ic(i)})}))}pc(){const t=this.oc(),a=Pt(Vt);t&&a.hc(t)}oc(){var t;return((t=this.el.firstElementChild)==null?void 0:t.getAttribute("role"))==="button"?this.el.firstElementChild:this.el}}class Ys extends kt{}const ct=class ct extends e(HTMLElement,as){};ct.tagName="media-captions";let T=ct;const ot=class ot extends e(HTMLElement,is){};ot.tagName="media-gesture";let L=ot;const ht=class ht extends e(HTMLElement,ns){constructor(){super(...arguments),this.G=document.createElement("img")}onSetup(){this.t=H(),this.$state.img.set(this.G)}onConnect(){const{src:t,alt:a}=this.$state,{crossorigin:i}=this.t.$state;this.G.parentNode!==this&&this.prepend(this.G),n(()=>{o(this.G,"src",t()),o(this.G,"alt",a()),o(this.G,"crossorigin",i())})}};ht.tagName="media-poster";let f=ht;const Zs=Mt('<img loading="eager" decoding="async" aria-hidden="true">'),rt=class rt extends e(HTMLElement,cs){constructor(){super(...arguments),this.G=this.H()}onSetup(){this.t=H(),this.$state.img.set(this.G)}onConnect(){const{src:t}=this.$state,{crossorigin:a}=this.t.$props;this.G.parentNode!==this&&this.prepend(this.G),n(()=>{o(this.G,"src",t()),o(this.G,"crossorigin",a())})}H(){return Rt(Zs)}};rt.tagName="media-thumbnail";let g=rt;const mt=class mt extends e(HTMLElement,os){onConnect(){n(()=>{this.textContent=this.$state.timeText()})}};mt.tagName="media-time";let b=mt;const lt=class lt extends e(HTMLElement,hs){};lt.tagName="media-controls";let C=lt;const pt=class pt extends e(HTMLElement,Ws){};pt.tagName="media-controls-group";let y=pt;class Ps extends N{}const ut=class ut extends e(HTMLElement,Ps){constructor(){super(...arguments),this.I=rs(""),this.J=ms(()=>{const{title:t,started:a}=this.t.$state;return a()&&this.I()||t()})}onSetup(){this.t=H()}onConnect(){ls(this.t.textTracks,"chapters",t=>{if(!t){this.I.set("");return}const a=()=>{const i=t==null?void 0:t.activeCues[0];this.I.set((i==null?void 0:i.text)||"")};a(),Us(t,"cue-change",a)}),n(()=>{this.textContent=this.J()})}};ut.tagName="media-chapter-title";let v=ut;const gt=class gt extends N{};gt.props={when:""};let $=gt;const xt=class xt extends e(HTMLElement,$){onSetup(){this.query=ps.create(this.$props.when)}onConnect(){n(this.K.bind(this))}K(){const t=this.firstElementChild,a=(t==null?void 0:t.localName)==="template",i=t instanceof HTMLElement;if(!this.query.matches){if(a)for(const c of this.children)c.localName!=="template"&&c.remove();else i&&(t.style.display="none");return}a?this.append(t.cloneNode(!0)):i&&(t.style.display="")}};xt.tagName="media-layout";let q=xt;const dt=class dt extends e(HTMLElement,us){};dt.tagName="media-play-button";let O=dt;const Nt=class Nt extends e(HTMLElement,gs){};Nt.tagName="media-mute-button";let S=Nt;const Ht=class Ht extends e(HTMLElement,xs){};Ht.tagName="media-caption-button";let A=Ht;const Tt=class Tt extends e(HTMLElement,ds){};Tt.tagName="media-fullscreen-button";let G=Tt;const Lt=class Lt extends e(HTMLElement,Ns){};Lt.tagName="media-pip-button";let w=Lt;const ft=class ft extends e(HTMLElement,Hs){};ft.tagName="media-seek-button";let F=ft;const bt=class bt extends e(HTMLElement,Ts){};bt.tagName="media-toggle-button";let I=bt;const Ct=class Ct extends e(HTMLElement,Ls){};Ct.tagName="media-live-button";let J=Ct;const yt=class yt extends e(HTMLElement,fs){};yt.tagName="media-tooltip";let K=yt;const vt=class vt extends e(HTMLElement,Xs){onConnect(){this.style.display="contents"}};vt.tagName="media-tooltip-trigger";let Q=vt;const $t=class $t extends e(HTMLElement,bs){};$t.tagName="media-tooltip-content";let j=$t;function p(h,t){nt(()=>{if(!h.connectScope)return;const a=h.querySelector("template");a&&n(()=>{const i=h.getOptions();_t(a,i.length,(c,l)=>{const{label:r,value:u}=i[l],m=c.querySelector('[data-part="label"]');c.setAttribute("value",u),m&&(Bt(r)?m.textContent=r:n(()=>{m.textContent=r()})),t==null||t(c,i[l],l)})})})}const qt=class qt extends e(HTMLElement,Cs){onConnect(){p(this)}};qt.tagName="media-audio-radio-group";let z=qt;const Ot=class Ot extends e(HTMLElement,ys){onConnect(){p(this)}};Ot.tagName="media-captions-radio-group";let D=Ot;const St=class St extends e(HTMLElement,vs){};St.tagName="media-menu";let U=St;const At=class At extends e(HTMLElement,kt){};At.tagName="media-menu-button";let W=At;const x=class x extends e(HTMLElement,$s){};x.tagName="media-menu-portal",x.attrs={disabled:{converter(t){return Bt(t)?t:t!==null}}};let X=x;const Gt=class Gt extends e(HTMLElement,Ys){};Gt.tagName="media-menu-item";let Y=Gt;const wt=class wt extends e(HTMLElement,qs){};wt.tagName="media-menu-items";let Z=wt;const Ft=class Ft extends e(HTMLElement,Os){onConnect(){p(this,(t,a)=>{const{cue:i,startTime:c,duration:l}=a,r=t.querySelector(".vds-thumbnail,media-thumbnail"),u=t.querySelector('[data-part="start-time"]'),m=t.querySelector('[data-part="duration"]');u&&(u.textContent=c),m&&(m.textContent=l),r&&(r.setAttribute("time",i.startTime+""),n(()=>{const{thumbnails:ts}=this.$props;r.setAttribute("src",ts())}))})}};Ft.tagName="media-chapters-radio-group";let P=Ft;const It=class It extends e(HTMLElement,Ss){onConnect(){p(this)}};It.tagName="media-speed-radio-group";let V=It;const Jt=class Jt extends e(HTMLElement,As){onConnect(){p(this,(t,a)=>{const i=a.bitrate,c=t.querySelector('[data-part="bitrate"]');i&&c&&n(()=>{c.textContent=i()||""})})}};Jt.tagName="media-quality-radio-group";let k=Jt;const Kt=class Kt extends e(HTMLElement,Gs){};Kt.tagName="media-radio";let R=Kt;const Qt=class Qt extends e(HTMLElement,ws){};Qt.tagName="media-radio-group";let B=Qt;const jt=class jt extends e(HTMLElement,Et){};jt.tagName="media-slider";let E=jt;const zt=class zt extends g{onSetup(){super.onSetup(),this.M=Fs(Et.state)}onConnect(){super.onConnect(),n(this.N.bind(this))}N(){const{duration:t}=this.t.$state;this.time=this.M.pointerRate()*t()}};zt.tagName="media-slider-thumbnail";let _=zt;const d=class d extends e(HTMLElement,Is){onConnect(){n(()=>{this.textContent=this.getValueText()})}};d.tagName="media-slider-value",d.attrs={padMinutes:{converter:Js}};let M=d;const Vs=Mt('<video muted playsinline preload="none" style="max-width: unset;"></video>'),Dt=class Dt extends e(HTMLElement,Ks){constructor(){super(...arguments),this.O=this.F()}onSetup(){this.t=H(),this.$state.video.set(this.O)}onConnect(){const{crossorigin:t,canLoad:a}=this.t.$state,{src:i}=this.$state;this.O.parentNode!==this&&this.prepend(this.O),n(()=>{o(this.O,"src",i()),o(this.O,"crossorigin",t()),o(this.O,"preload",a()?"auto":"none")})}F(){return Rt(Vs)}};Dt.tagName="media-slider-video";let tt=Dt;const Ut=class Ut extends e(HTMLElement,Qs){};Ut.tagName="media-time-slider";let st=Ut;const Wt=class Wt extends e(HTMLElement,js){};Wt.tagName="media-slider-preview";let et=Wt;const Xt=class Xt extends e(HTMLElement,zs){};Xt.tagName="media-volume-slider";let at=Xt;const Yt=class Yt extends e(HTMLElement,Ds){constructor(){super(...arguments),this.P=null}onConnect(){nt(()=>{if(!this.connectScope)return;const t=this.querySelector("template");t&&(this.P=t,n(this.Q.bind(this)))})}Q(){if(!this.P)return;const t=_t(this.P,this.cues.length||1);this.setRefs(t)}};Yt.tagName="media-slider-chapters";let it=Yt;s(q);s(C);s(y);s(f);s(A);s(G);s(S);s(w);s(O);s(F);s(I);s(E);s(at);s(st);s(it);s(et);s(M);s(_);s(tt);s(U);s(W);s(X);s(Z);s(Y);s(z);s(D);s(V);s(k);s(P);s(B);s(R);s(K);s(Q);s(j);s(L);s(g);s(T);s(J);s(b);s(v);