"use strict";(self.webpackChunkstorefrontapp=self.webpackChunkstorefrontapp||[]).push([[9149],{9149:(w,a,n)=>{n.r(a),n.d(a,{QualtricsModule:()=>b});var i=n(4650),d=n(6895),r=n(5955),l=n(2654),f=n(3753),u=n(8896),p=n(1086),m=n(7545),h=n(4850),v=n(2198),Q=n(2994);let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["cx-qualtrics-embedded-feedback"]],decls:0,vars:0,template:function(e,s){},encapsulation:2}),t})();const y={qualtrics:{}};let C=(()=>{class t{get window(){return this.winRef.nativeWindow}constructor(e,s,D){this.winRef=e,this.platformId=s,this.scriptLoader=D,this.subscription=new l.w,this.logger=(0,i.f3M)(r.mQy),this.qsiLoaded$=(0,d.NF)(this.platformId)&&this.window?(0,f.R)(this.window,"qsi_js_loaded"):u.E,this.qsi$=this.qsiLoaded$.pipe((0,m.w)(()=>this.isDataLoaded()),(0,h.U)(c=>c?this.window?.QSI:u.E),(0,v.h)(c=>Boolean(c)),(0,Q.b)(c=>this.qsiApi=c)),this.initialize()}addScript(e){this.hasScript(e)?this.run(!0):this.scriptLoader.embedScript({src:e})}hasScript(e){return!!this.winRef.document.querySelector(`script[src="${e}"]`)}initialize(){this.subscription.add(this.qsi$.subscribe(()=>this.run()))}run(e=!1){this.qsiApi?.API?(e&&this.qsiApi.API.unload(),this.qsiApi.API.load().done(this.qsiApi.API.run())):(0,i.X6Q)()&&this.logger.log("The QSI api is not available")}isDataLoaded(){return(0,p.of)(!0)}ngOnDestroy(){this.subscription?.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(r.X9E),i.LFG(i.Lbi),i.LFG(r.Wrh))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Yz7({token:t,factory:function(e){let s=null;return s=e?new(e||t):i.LFG(r.DeH),s},providedIn:"root"}),t})(),L=(()=>{class t{constructor(e,s){this.qualtricsLoader=e,this.config=s,this.logger=(0,i.f3M)(r.mQy),this.config.qualtrics?.scriptSource?this.qualtricsLoader.addScript(this.config.qualtrics.scriptSource):(0,i.X6Q)()&&this.logger.warn("We're unable to add the Qualtrics deployment code as there is no script source defined in config.qualtrics.scriptSource.")}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(C),i.Y36(F))},t.\u0275cmp=i.Xpm({type:t,selectors:[["cx-qualtrics"]],decls:0,vars:0,template:function(e,s){},encapsulation:2}),t})(),S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({providers:[(0,r.i51)({cmsComponents:{QualtricsEmbeddedFeedbackComponent:{component:g},QualtricsComponent:{component:L}}}),(0,r.i51)(y)],imports:[d.ez]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[S]}),t})()}}]);