"use strict";(self.webpackChunkstorefrontapp=self.webpackChunkstorefrontapp||[]).push([[9477],{9477:(Wt,G,c)=>{c.r(G),c.d(G,{CONFIGURATOR_TYPE_TEXTFIELD:()=>xt,ConfiguratorTextfieldAddToCartButtonComponent:()=>st,ConfiguratorTextfieldFormComponent:()=>gt,ConfiguratorTextfieldInputFieldComponent:()=>ft,ConfiguratorTextfieldInputFieldReadonlyComponent:()=>lt,OccConfiguratorTextfieldAdapter:()=>yt,OccConfiguratorTextfieldAddToCartSerializer:()=>ht,OccConfiguratorTextfieldNormalizer:()=>Rt,TextfieldConfiguratorComponentsModule:()=>Ct,TextfieldConfiguratorCoreModule:()=>It,TextfieldConfiguratorModule:()=>zt,TextfieldConfiguratorOccModule:()=>Ft});var r=c(4650),f=c(7436),p=c(5359),a=c(5955),Y=c(2994),l=c(4850),R=c(2198),T=c(2986),g=c(7545),I=c(7221),A=c(6789),$=c(5391),_=c(6895),E=c(4006),vt=c(7039),C=c(5024),B=c(5973),O=c(1086),mt=c(529);const Dt=function(){return{cxRoute:"cart"}},Z=function(e,o){return{value:e,attribute:o}};function Ut(e,o){if(1&e){const t=r.EpF();r.TgZ(0,"div",6)(1,"cx-configurator-textfield-input-field",7),r.NdJ("inputChange",function(i){r.CHM(t);const u=r.oxw(3);return r.KtG(u.updateConfiguration(i))}),r.qZA()()}if(2&e){const t=o.$implicit;r.xp6(1),r.Q6J("attribute",t)}}function Lt(e,o){if(1&e&&(r.ynx(0),r.TgZ(1,"span",3),r._uU(2),r.ALo(3,"cxTranslate"),r.qZA(),r.YNc(4,Ut,2,1,"div",4),r._UZ(5,"cx-configurator-textfield-add-to-cart-button",5),r.BQk()),2&e){const t=r.oxw().ngIf;r.xp6(2),r.hij(" ",r.lcZ(3,3,"configurator.a11y.editAttributesAndValues")," "),r.xp6(2),r.Q6J("ngForOf",t.configurationInfos),r.xp6(1),r.Q6J("configuration",t)}}function Nt(e,o){if(1&e&&(r.TgZ(0,"div",6),r._UZ(1,"cx-configurator-textfield-input-field-readonly",8),r.qZA()),2&e){const t=o.$implicit;r.xp6(1),r.Q6J("attribute",t)}}function bt(e,o){if(1&e&&(r.TgZ(0,"span",3),r._uU(1),r.ALo(2,"cxTranslate"),r.qZA(),r.YNc(3,Nt,2,1,"div",4)),2&e){const t=r.oxw().ngIf;r.xp6(1),r.hij(" ",r.lcZ(2,2,"configurator.a11y.listOfAttributesAndValues")," "),r.xp6(2),r.Q6J("ngForOf",t.configurationInfos)}}function St(e,o){if(1&e&&(r.ynx(0),r.YNc(1,Lt,6,5,"ng-container",1),r.ALo(2,"async"),r.YNc(3,bt,4,4,"ng-template",null,2,r.W1O),r.BQk()),2&e){const t=r.MAs(4),n=r.oxw();r.xp6(1),r.Q6J("ngIf",r.lcZ(2,2,n.isEditable$))("ngIfElse",t)}}var y;!function(e){let o;var t;(t=o=e.ConfigurationStatus||(e.ConfigurationStatus={})).SUCCESS="SUCCESS",t.ERROR="ERROR"}(y||(y={}));const X="productConfigurationTextfield",s="[ConfiguratorTextfield] Configuration Data",F="[Configurator] Create Configuration Textfield",v="[Configurator] Create Configuration Textfield Success",m="[Configurator] Update Configuration Textfield",D="[Configurator] Add to cart Textfield",U="[Configurator] Read cart entry configuration Textfield",L="[Configurator] Read cart entry configuration Textfield Success",N="[Configurator] Read order entry configuration textfield",b="[Configurator] Read order entry configuration textfield Success",S="[Configurator] Update cart entry configuration Textfield",M="[Configurator] Remove Configuration Textfield";class J extends a.kPG.LoaderLoadAction{constructor(o){super(s),this.payload=o,this.type=F}}class V extends a.kPG.LoaderFailAction{constructor(o){super(s,o),this.payload=o,this.type="[Configurator] Create Configuration Textfield Fail"}}class Q extends a.kPG.LoaderSuccessAction{constructor(o){super(s),this.payload=o,this.type=v}}class H extends a.kPG.LoaderLoadAction{constructor(o){super(s),this.payload=o,this.type=m}}class q extends a.kPG.LoaderLoadAction{constructor(o){super(s),this.payload=o,this.type=D}}class tt extends a.kPG.LoaderFailAction{constructor(o){super(s,o),this.payload=o,this.type="[Configurator] Add to cart Textfield Fail"}}class et extends a.kPG.LoaderLoadAction{constructor(o){super(s),this.payload=o,this.type=S}}class rt extends a.kPG.LoaderFailAction{constructor(o){super(s,o),this.payload=o,this.type="[Configurator] Update cart entry configuration Textfield Fail"}}class ot extends a.kPG.LoaderLoadAction{constructor(o){super(s),this.payload=o,this.type=U}}class nt extends a.kPG.LoaderSuccessAction{constructor(o){super(s),this.payload=o,this.type=L}}class it extends a.kPG.LoaderFailAction{constructor(o){super(s,o),this.payload=o,this.type="[Configurator] Read cart entry configuration Textfield Fail"}}class at extends a.kPG.LoaderLoadAction{constructor(o){super(s),this.payload=o,this.type=N}}class ut extends a.kPG.LoaderSuccessAction{constructor(o){super(s),this.payload=o,this.type=b}}class ct extends a.kPG.LoaderFailAction{constructor(o){super(s,o),this.payload=o,this.type="[Configurator] Read order entry configuration textfield Fail"}}class P extends a.kPG.LoaderResetAction{constructor(){super(s),this.type=M}}const w=(0,p.ZF)(X),x=(0,p.P1)(w,e=>e.loaderState.value);let dt=(()=>{class e{constructor(t,n,i,u){this.store=t,this.activeCartService=n,this.configuratorUtils=i,this.userIdService=u,this.ensureConfigurationDefined=d=>d??{configurationInfos:[],owner:f.mR.createInitialOwner()}}createConfiguration(t){return this.store.pipe((0,p.Ys)(w),(0,Y.b)(n=>{const i=n.loaderState.value;(void 0===i||f.mR.isInitialOwner(i.owner))&&!n.loaderState.loading&&this.store.dispatch(new J({productCode:t.id,owner:t}))}),(0,l.U)(n=>n.loaderState.value),(0,R.h)(n=>!this.isConfigurationInitial(n)),(0,l.U)(this.ensureConfigurationDefined))}updateConfiguration(t){this.store.pipe((0,p.Ys)(x),(0,T.q)(1)).subscribe(n=>{n&&this.store.dispatch(new H(this.createNewConfigurationWithChange(t,n)))})}addToCart(t,n){this.activeCartService.requireLoadedCart().pipe((0,T.q)(1)).subscribe(i=>{this.userIdService.getUserId().pipe((0,T.q)(1)).subscribe(u=>{const d={userId:u,cartId:this.configuratorUtils.getCartId(i),productCode:t,configuration:n,quantity:1};this.store.dispatch(new q(d))})})}updateCartEntry(t,n){this.activeCartService.requireLoadedCart().pipe((0,T.q)(1)).subscribe(i=>{this.userIdService.getUserId().pipe((0,T.q)(1)).subscribe(u=>{const d={userId:u,cartId:this.configuratorUtils.getCartId(i),cartEntryNumber:t,configuration:n};this.store.dispatch(new et(d))})})}readConfigurationForCartEntry(t){return this.activeCartService.requireLoadedCart().pipe((0,g.w)(n=>this.userIdService.getUserId().pipe((0,T.q)(1),(0,l.U)(i=>({cart:n,userId:i}))).pipe((0,l.U)(i=>({userId:i.userId,cartId:this.configuratorUtils.getCartId(i.cart),cartEntryNumber:t.id,owner:t})),(0,Y.b)(i=>this.store.dispatch(new ot(i))),(0,g.w)(()=>this.store.pipe((0,p.Ys)(x))),(0,R.h)(i=>!this.isConfigurationInitial(i)),(0,l.U)(this.ensureConfigurationDefined))))}readConfigurationForOrderEntry(t){const n=this.configuratorUtils.decomposeOwnerId(t.id);return this.store.dispatch(new at({userId:a.zyp,orderId:n.documentId,orderEntryNumber:n.entryNumber,owner:t})),this.store.pipe((0,p.Ys)(x),(0,R.h)(u=>!this.isConfigurationInitial(u)),(0,l.U)(this.ensureConfigurationDefined))}createNewConfigurationWithChange(t,n){const i={configurationInfos:[],owner:n.owner};return n.configurationInfos.forEach(u=>{u.configurationLabel===t.configurationLabel?(t.status=y.ConfigurationStatus.SUCCESS,i.configurationInfos.push(t)):i.configurationInfos.push(u)}),i}isConfigurationInitial(t){return void 0===t||f.mR.isInitialOwner(t.owner)}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(p.yh),r.LFG(A.bu),r.LFG(f.NU),r.LFG(a.XBV))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),st=(()=>{class e{constructor(t){this.configuratorTextfieldService=t}onAddToCart(){const t=this.configuration.owner;switch(t.type){case f.$g.OwnerType.PRODUCT:this.configuratorTextfieldService.addToCart(t.id,this.configuration);break;case f.$g.OwnerType.CART_ENTRY:this.configuratorTextfieldService.updateCartEntry(t.id,this.configuration)}}getButtonText(){return this.configuration.owner.type===f.$g.OwnerType.CART_ENTRY?"configurator.addToCart.buttonUpdateCart":"configurator.addToCart.button"}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(dt))},e.\u0275cmp=r.Xpm({type:e,selectors:[["cx-configurator-textfield-add-to-cart-button"]],inputs:{configuration:"configuration",productCode:"productCode"},decls:4,vars:7,consts:[[1,"cx-btn","btn","btn-block","btn-primary","cx-add-to-cart-btn",3,"routerLink","click"]],template:function(t,n){1&t&&(r.TgZ(0,"button",0),r.NdJ("click",function(){return n.onAddToCart()}),r.ALo(1,"cxUrl"),r._uU(2),r.ALo(3,"cxTranslate"),r.qZA()),2&t&&(r.Q6J("routerLink",r.lcZ(1,2,r.DdM(6,Dt))),r.xp6(2),r.hij(" ",r.lcZ(3,4,n.getButtonText()),"\n"))},dependencies:[$.rH,a.X$D,a.l2T],encapsulation:2,changeDetection:0}),e})(),ft=(()=>{class e{constructor(){this.PREFIX_TEXTFIELD="cx-configurator-textfield",this.attributeInputForm=new E.p4(""),this.inputChange=new r.vpe}ngOnInit(){this.attributeInputForm.setValue(this.attribute.configurationValue)}onInputChange(){this.inputChange.emit({configurationLabel:this.attribute.configurationLabel,configurationValue:this.attributeInputForm.value})}getIdLabel(t){return this.PREFIX_TEXTFIELD+"label"+this.getLabelForIdGeneration(t)}getId(t){return this.PREFIX_TEXTFIELD+this.getLabelForIdGeneration(t)}getLabelForIdGeneration(t){return t.configurationLabel.replace(/\s/g,"")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["cx-configurator-textfield-input-field"]],inputs:{attribute:"attribute"},outputs:{inputChange:"inputChange"},decls:6,vars:13,consts:[[1,"cx-configurator-textfield-label",3,"id"],[1,"form-group"],[1,"form-control",3,"formControl","change"]],template:function(t,n){1&t&&(r.TgZ(0,"label",0),r.ALo(1,"cxTranslate"),r._uU(2),r.qZA(),r.TgZ(3,"div",1)(4,"input",2),r.NdJ("change",function(){return n.onInputChange()}),r.ALo(5,"cxTranslate"),r.qZA()()),2&t&&(r.s9C("id",n.getIdLabel(n.attribute)),r.uIk("aria-label",r.lcZ(1,5,"configurator.a11y.nameOfAttribute")),r.xp6(2),r.Oqu(n.attribute.configurationLabel),r.xp6(2),r.Q6J("formControl",n.attributeInputForm),r.uIk("aria-label",r.xi3(5,7,"configurator.a11y.valueOfAttributeFull",r.WLB(10,Z,n.attribute.configurationValue,n.attribute.configurationLabel))))},dependencies:[E.Fj,E.JJ,E.oH,a.X$D],encapsulation:2,changeDetection:0}),e})(),lt=(()=>{class e{constructor(){this.PREFIX_TEXTFIELD="cx-configurator-textfield"}getIdLabel(t){return this.PREFIX_TEXTFIELD+"label"+this.getLabelForIdGeneration(t)}getLabelForIdGeneration(t){return t.configurationLabel.replace(/\s/g,"")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["cx-configurator-textfield-input-field-readonly"]],inputs:{attribute:"attribute"},decls:7,vars:11,consts:[[1,"cx-visually-hidden",3,"id"],["aria-hidden","true"]],template:function(t,n){1&t&&(r.TgZ(0,"span",0),r._uU(1),r.ALo(2,"cxTranslate"),r.qZA(),r.TgZ(3,"label",1),r._uU(4),r.qZA(),r.TgZ(5,"div",1),r._uU(6),r.qZA()),2&t&&(r.s9C("id",n.getIdLabel(n.attribute)),r.xp6(1),r.hij(" ",r.xi3(2,5,"configurator.a11y.valueOfAttributeFull",r.WLB(8,Z,n.attribute.configurationValue,n.attribute.configurationLabel)),"\n"),r.xp6(2),r.uIk("aria-describedby",n.getIdLabel(n.attribute)),r.xp6(1),r.Oqu(n.attribute.configurationLabel),r.xp6(2),r.hij(" ",n.attribute.configurationValue,"\n"))},dependencies:[a.X$D],encapsulation:2,changeDetection:0}),e})(),gt=(()=>{class e{constructor(t,n){this.configuratorTextfieldService=t,this.configRouterExtractorService=n,this.configuration$=this.configRouterExtractorService.extractRouterData().pipe((0,g.w)(i=>{switch(i.owner.type){case f.$g.OwnerType.PRODUCT:return this.configuratorTextfieldService.createConfiguration(i.owner);case f.$g.OwnerType.CART_ENTRY:return this.configuratorTextfieldService.readConfigurationForCartEntry(i.owner);case f.$g.OwnerType.ORDER_ENTRY:return this.configuratorTextfieldService.readConfigurationForOrderEntry(i.owner)}})),this.isEditable$=this.configRouterExtractorService.extractRouterData().pipe((0,l.U)(i=>i.pageType===f.iB.PageType.CONFIGURATION))}updateConfiguration(t){this.configuratorTextfieldService.updateConfiguration(t)}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(dt),r.Y36(f.u6))},e.\u0275cmp=r.Xpm({type:e,selectors:[["cx-configurator-textfield-form"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["readonly",""],[1,"cx-visually-hidden"],["class","cx-attribute",4,"ngFor","ngForOf"],[3,"configuration"],[1,"cx-attribute"],[3,"attribute","inputChange"],[3,"attribute"]],template:function(t,n){1&t&&(r.YNc(0,St,5,4,"ng-container",0),r.ALo(1,"async")),2&t&&r.Q6J("ngIf",r.lcZ(1,1,n.configuration$))},dependencies:[_.sg,_.O5,ft,lt,st,_.Ov,a.X$D],encapsulation:2}),e})(),Ct=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({providers:[(0,a.i51)({cmsComponents:{TextfieldConfigurationForm:{component:gt}}})],imports:[$.Bz,E.u5,E.UX,vt.A0,_.ez,a.LUR,a.bhT]}),e})();class pt{}let Tt=(()=>{class e{constructor(t){this.adapter=t}createConfiguration(t,n){return this.adapter.createConfiguration(t,n)}readConfigurationForCartEntry(t){return this.adapter.readConfigurationForCartEntry(t)}readConfigurationForOrderEntry(t){return this.adapter.readConfigurationForOrderEntry(t)}updateConfigurationForCartEntry(t){return this.adapter.updateConfigurationForCartEntry(t)}addToCart(t){return this.adapter.addToCart(t)}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(pt))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})();const Pt=[(()=>{class e{constructor(t,n){this.actions$=t,this.configuratorTextfieldConnector=n,this.logger=(0,r.f3M)(a.mQy),this.createConfiguration$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(F),(0,l.U)(i=>i.payload),(0,g.w)(i=>this.configuratorTextfieldConnector.createConfiguration(i.productCode,i.owner).pipe((0,g.w)(u=>[new Q(u)]),(0,I.K)(u=>(0,O.of)(new V((0,a.cxH)(u,this.logger)))))))),this.addToCart$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(D),(0,l.U)(i=>i.payload),(0,g.w)(i=>this.configuratorTextfieldConnector.addToCart(i).pipe((0,g.w)(()=>[new P,new B.$.LoadCart({cartId:i.cartId,userId:i.userId})]),(0,I.K)(u=>(0,O.of)(new tt((0,a.cxH)(u,this.logger)))))))),this.updateCartEntry$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(S),(0,l.U)(i=>i.payload),(0,g.w)(i=>this.configuratorTextfieldConnector.updateConfigurationForCartEntry(i).pipe((0,g.w)(()=>[new P,new B.$.LoadCart({cartId:i.cartId,userId:i.userId})]),(0,I.K)(u=>(0,O.of)(new rt((0,a.cxH)(u,this.logger)))))))),this.readConfigurationForCartEntry$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(U),(0,g.w)(i=>this.configuratorTextfieldConnector.readConfigurationForCartEntry(i.payload).pipe((0,g.w)(d=>[new nt(d)]),(0,I.K)(d=>[new it((0,a.cxH)(d,this.logger))]))))),this.readConfigurationForOrderEntry$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(N),(0,g.w)(i=>this.configuratorTextfieldConnector.readConfigurationForOrderEntry(i.payload).pipe((0,g.w)(d=>[new ut(d)]),(0,I.K)(d=>[new ct((0,a.cxH)(d,this.logger))])))))}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(C.eX),r.LFG(Tt))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})()],_t={configurationInfos:[],owner:f.mR.createInitialOwner()};function wt(e=_t,o){switch(o.type){case v:case L:case b:case m:return{...e,...o.payload};case M:return _t}return e}const Et=new r.OlP("ConfiguratorReducers"),Yt={provide:Et,useFactory:function Gt(){return{loaderState:a.kPG.loaderReducer(s,wt)}}};let $t=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({providers:[Yt],imports:[_.ez,a.vUS,p.Aw.forFeature(X,Et),C.sQ.forFeature(Pt)]}),e})(),It=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({providers:[Tt],imports:[$t]}),e})();const xt="TEXTFIELD";let ht=(()=>{class e{constructor(){}convert(t,n){const i=[];return t.configuration?.configurationInfos.forEach(d=>this.convertInfo(d,i)),{...n,userId:t.userId,cartId:t.cartId,product:{code:t.productCode},quantity:t.quantity,configurationInfos:i}}convertInfo(t,n){n.push({configurationLabel:t.configurationLabel,configurationValue:t.configurationValue,status:t.status,configuratorType:xt})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Rt=(()=>{class e{constructor(){}convert(t,n){return{...n,...t}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const h=new r.OlP("ConfigurationNormalizer"),At=new r.OlP("ConfigurationAddToCartSerializer"),Ot=new r.OlP("ConfigurationUpdateCartEntrySerializer");let yt=(()=>{class e{constructor(t,n,i){this.http=t,this.occEndpointsService=n,this.converterService=i}createConfiguration(t,n){return this.http.get(this.occEndpointsService.buildUrl("createTextfieldConfiguration",{urlParams:{productCode:t}})).pipe(this.converterService.pipeable(h),(0,l.U)(i=>({...i,owner:n})))}addToCart(t){const n=this.occEndpointsService.buildUrl("addTextfieldConfigurationToCart",{urlParams:{userId:t.userId,cartId:t.cartId}}),i=this.converterService.convert(t,At);return this.http.post(n,i).pipe(this.converterService.pipeable(A.Ke))}readConfigurationForCartEntry(t){const n=this.occEndpointsService.buildUrl("readTextfieldConfigurationForCartEntry",{urlParams:{userId:t.userId,cartId:t.cartId,cartEntryNumber:t.cartEntryNumber}});return this.http.get(n).pipe(this.converterService.pipeable(h),(0,l.U)(i=>({...i,owner:{...t.owner}})))}readConfigurationForOrderEntry(t){const n=this.occEndpointsService.buildUrl("readTextfieldConfigurationForOrderEntry",{urlParams:{userId:t.userId,orderId:t.orderId,orderEntryNumber:t.orderEntryNumber}});return this.http.get(n).pipe(this.converterService.pipeable(h),(0,l.U)(i=>({...i,owner:{...t.owner}})))}updateConfigurationForCartEntry(t){const n=this.occEndpointsService.buildUrl("updateTextfieldConfigurationForCartEntry",{urlParams:{userId:t.userId,cartId:t.cartId,cartEntryNumber:t.cartEntryNumber}}),i=this.converterService.convert(t,Ot);return this.http.post(n,i).pipe(this.converterService.pipeable(A.Ke))}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(mt.eN),r.LFG(a.Lz0),r.LFG(a.IXI))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})(),Zt=(()=>{class e{constructor(){}convert(t){const n=[];return t.configuration?.configurationInfos.forEach(u=>this.convertInfo(u,n)),{userId:t.userId,cartId:t.cartId,cartEntryNumber:t.cartEntryNumber,configurationInfos:n}}convertInfo(t,n){n.push({configurationLabel:t.configurationLabel,configurationValue:t.configurationValue,status:t.status,configuratorType:"TEXTFIELD"})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function Xt(){return{backend:{occ:{endpoints:{createTextfieldConfiguration:"products/${productCode}/configurator/textfield",addTextfieldConfigurationToCart:"users/${userId}/carts/${cartId}/entries/configurator/textfield",readTextfieldConfigurationForCartEntry:"users/${userId}/carts/${cartId}/entries/${cartEntryNumber}/configurator/textfield",readTextfieldConfigurationForOrderEntry:"users/${userId}/orders/${orderId}/entries/${orderEntryNumber}/configurator/textfield",updateTextfieldConfigurationForCartEntry:"users/${userId}/carts/${cartId}/entries/${cartEntryNumber}/configurator/textfield"}}}}}let Ft=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({providers:[{provide:pt,useClass:yt},{provide:h,useExisting:Rt,multi:!0},{provide:At,useExisting:ht,multi:!0},{provide:Ot,useExisting:Zt,multi:!0}],imports:[_.ez,a.pEA.withConfigFactory(Xt)]}),e})(),zt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[It,Ct,Ft]}),e})()}}]);