"use strict";(self.webpackChunkstorefrontapp=self.webpackChunkstorefrontapp||[]).push([[7684],{7684:(Y,a,r)=>{r.r(a),r.d(a,{FutureStockModule:()=>J});var t=r(4650),s=r(6895),d=r(6916),f=r(9521),u=r(5955);function v(o,n){if(1&o&&(t.TgZ(0,"div",6),t._uU(1),t.ALo(2,"cxTranslate"),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.lnq(" ",e.formattedDate," - ",t.lcZ(2,3,"futureStockDropdown.quantity")," ",e.stock.stockLevel," ")}}function h(o,n){if(1&o&&(t.ynx(0),t.YNc(1,v,3,5,"div",5),t.BQk()),2&o){const e=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngForOf",e.futureStocks)}}function m(o,n){1&o&&(t.TgZ(0,"div",6),t._uU(1),t.ALo(2,"cxTranslate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"futureStockDropdown.noFutureStocks")," "))}function x(o,n){if(1&o&&(t.ynx(0),t.YNc(1,h,2,1,"ng-container",3),t.YNc(2,m,3,3,"ng-template",null,4,t.W1O),t.BQk()),2&o){const e=t.MAs(3),c=t.oxw().ngIf;t.xp6(1),t.Q6J("ngIf",null==c||null==c.futureStocks?null:c.futureStocks.length)("ngIfElse",e)}}function y(o,n){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",1),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.toggle())}),t._uU(2),t.ALo(3,"cxTranslate"),t._UZ(4,"cx-icon",2),t.qZA(),t.YNc(5,x,4,2,"ng-container",0),t.BQk()}if(2&o){const e=t.oxw();t.xp6(1),t.uIk("aria-expanded",e.expanded),t.xp6(1),t.hij(" ",t.lcZ(3,4,"futureStockDropdown.header")," "),t.xp6(2),t.Q6J("type",e.expanded?e.iconType.CARET_UP:e.iconType.CARET_DOWN),t.xp6(1),t.Q6J("ngIf",e.expanded)}}let M=(()=>{class o{constructor(e){this.futureStockService=e,this.futureStocks$=this.futureStockService.getFutureStock(),this.expanded=!1,this.iconType=d.e1G}toggle(){this.expanded=!this.expanded}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.sU))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cx-future-stock-accordion"]],decls:2,vars:3,consts:[[4,"ngIf"],["id","cx-future-stock-accordion-header","aria-controls","cx-future-stock-accordion-content",1,"cx-future-stock-accordion-header",3,"click"],["aria-hidden","true",3,"type"],[4,"ngIf","ngIfElse"],["noStocks",""],["id","cx-future-stock-accordion-content","class","cx-future-stock-accordion-content","aria-labelledby","cx-future-stock-accordion-header",4,"ngFor","ngForOf"],["id","cx-future-stock-accordion-content","aria-labelledby","cx-future-stock-accordion-header",1,"cx-future-stock-accordion-content"]],template:function(e,c){1&e&&(t.YNc(0,y,6,6,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,c.futureStocks$))},dependencies:[s.sg,s.O5,d.oJW,s.Ov,u.X$D],encapsulation:2}),o})(),C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[(0,u.i51)({cmsComponents:{FutureStockComponent:{component:M}}})],imports:[s.ez,u.LUR,d.QX1]}),o})(),A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,C]}),o})();var _=r(1086),D=r(7168),T=r(7545);class p{}let l=(()=>{class o{constructor(e){this.adapter=e}getFutureStock(e,c){return this.adapter.getFutureStock(e,c)}getFutureStocks(e,c){return this.adapter.getFutureStocks(e,c)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(p))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();const E=new t.OlP("FutureStockNormalizer"),O=new t.OlP("FutureStockListNormalizer");let S=(()=>{class o{getFutureStock(){return this.futureStockState$}constructor(e,c,i){this.userIdService=e,this.futureStockConnector=c,this.routingService=i,this.PRODUCT_KEY="productCode",this.futureStockState$=this.routingService.getRouterState().pipe((0,D.M)(this.userIdService.takeUserId()),(0,T.w)(([{state:N},F])=>F!==u.Fds?this.futureStockConnector.getFutureStock(F,N.params[this.PRODUCT_KEY]):(0,_.of)(void 0)))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(u.XBV),t.LFG(l),t.LFG(u.Znh))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();const I=[S,{provide:f.sU,useExisting:S}];let L=(()=>{class o{static forRoot(){return{ngModule:o}}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[...I,l]}),o})();var k=r(1737),g=r(7221),U=r(529);let R=(()=>{class o{constructor(e,c,i){this.http=e,this.occEndpoints=c,this.converter=i,this.logger=(0,t.f3M)(u.mQy)}getFutureStock(e,c){return this.http.get(this.getFutureStockEndpoint(e,c)).pipe((0,g.K)(i=>(0,k._)((0,u.cxH)(i,this.logger))),this.converter.pipeable(E))}getFutureStocks(e,c){return this.http.get(this.getFutureStocksEndpoint(e,c)).pipe((0,g.K)(i=>(0,k._)((0,u.cxH)(i,this.logger))),this.converter.pipeable(O))}getFutureStockEndpoint(e,c){return this.occEndpoints.buildUrl("futureStock",{urlParams:{userId:e,productCode:c}})}getFutureStocksEndpoint(e,c){const i={};return i.productCodes=c,this.occEndpoints.buildUrl("futureStocks",{urlParams:{userId:e},queryParams:i})}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(U.eN),t.LFG(u.Lz0),t.LFG(u.IXI))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();const Z={backend:{occ:{endpoints:{futureStock:"users/${userId}/futureStocks/${productCode}",futureStocks:"users/${userId}/futureStocks"}}}};let w=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[(0,u.i51)(Z),{provide:p,useClass:R}],imports:[s.ez]}),o})(),J=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[L.forRoot(),w,A]}),o})()}}]);