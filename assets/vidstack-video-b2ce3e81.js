import{an as l,ao as h,ap as o,aq as p,o as g,ar as f,as as n,l as c,ak as P}from"./vidstack-725a7f4d-95ea9c0b.js";import{H as k}from"./vidstack-e4c18a8c-a68c38df.js";import"./app-92e2b39d.js";class O{constructor(t,e){this.O=t,this.xg=e,t.textTracks.onaddtrack=this.qa.bind(this),g(this.bg.bind(this))}qa(t){const e=t.track;if(!e||v(this.O,e))return;const i=new f({id:e.id,kind:e.kind,label:e.label,language:e.language,type:"vtt"});i[n.Ha]={track:e},i[n.za]=2,i[n.ta]=!0;let r=0;const u=d=>{if(e.cues)for(let a=r;a<e.cues.length;a++)i.addCue(e.cues[a],d),r++};u(t),e.oncuechange=u,this.xg.textTracks.add(i,t),i.setMode(e.mode,t)}bg(){var t;this.O.textTracks.onaddtrack=null;for(const e of this.xg.textTracks){const i=(t=e[n.Ha])==null?void 0:t.track;i!=null&&i.oncuechange&&(i.oncuechange=null)}}}function v(s,t){return Array.from(s.children).find(e=>e.track===t)}class x{constructor(t,e){this.ca=(i,r)=>{this.t.delegate.w("picture-in-picture-change",{detail:i,trigger:r})},this.O=t,this.t=e,c(this.O,"enterpictureinpicture",this.Eg.bind(this)),c(this.O,"leavepictureinpicture",this.Fg.bind(this))}get active(){return document.pictureInPictureElement===this.O}get supported(){return o(this.O)}async enter(){return this.O.requestPictureInPicture()}exit(){return document.exitPictureInPicture()}Eg(t){this.ca(!0,t)}Fg(t){this.ca(!1,t)}}class I{constructor(t,e){this.Da="inline",this.O=t,this.t=e,c(this.O,"webkitpresentationmodechanged",this.Oa.bind(this))}get Ig(){return h(this.O)}async Hg(t){this.Da!==t&&this.O.webkitSetPresentationMode(t)}Oa(){var e;const t=this.Da;this.Da=this.O.webkitPresentationMode,(e=this.t.player)==null||e.dispatch(new P("video-presentation-change",{detail:this.Da,trigger:event})),["fullscreen","picture-in-picture"].forEach(i=>{(this.Da===i||t===i)&&this.t.delegate.w(`${i}-change`,{detail:this.Da===i,trigger:event})})}}class T{constructor(t){this.Gg=t}get active(){return this.Gg.Da==="fullscreen"}get supported(){return this.Gg.Ig}async enter(){this.Gg.Hg("fullscreen")}async exit(){this.Gg.Hg("inline")}}class b{constructor(t){this.Gg=t}get active(){return this.Gg.Da==="picture-in-picture"}get supported(){return this.Gg.Ig}async enter(){this.Gg.Hg("picture-in-picture")}async exit(){this.Gg.Hg("inline")}}class y extends k{constructor(t,e){super(t),this.$$PROVIDER_TYPE="VIDEO",l(()=>{if(h(t)){const i=new I(t,e);this.fullscreen=new T(i),this.pictureInPicture=new b(i)}else o(t)&&(this.pictureInPicture=new x(t,e))},this.scope)}get type(){return"video"}setup(t){super.setup(t),p(this.video)&&new O(this.video,t),t.textRenderers.v(this.video),g(()=>{t.textRenderers.v(null)}),this.type==="video"&&t.delegate.w("provider-setup",{detail:this})}get video(){return this.t}}export{y as VideoProvider};
