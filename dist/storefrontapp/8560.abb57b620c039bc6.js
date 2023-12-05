"use strict";(self.webpackChunkstorefrontapp=self.webpackChunkstorefrontapp||[]).push([[8560],{8560:(x,d,o)=>{o.r(d),o.d(d,{BulkPricingModule:()=>B});var t=o(4650),l=o(6895),u=o(5955),p=o(6916),g=o(7545),f=o(1086);let m=(()=>{class e{constructor(n){this.productService=n,this.PRODUCT_SCOPE="bulkPrices"}getBulkPrices(n){return this.productService.get(n,this.PRODUCT_SCOPE).pipe((0,g.w)(i=>(0,f.of)(this.convert(i))))}convert(n){let i=[];if(n){const r=n.price?.value;i=n.volumePrices?.map(a=>this.parsePrice(a,r))}return i}parsePrice(n,i){return this.calculateDiscount({currencyIso:n.currencyIso,formattedValue:n.formattedValue,maxQuantity:n.maxQuantity,minQuantity:n.minQuantity,priceType:n.priceType,value:n.value,formattedDiscount:"",discount:0},i)}calculateDiscount(n,i){const r=Object.assign({},n),s=n.value;if(s&&i){const a=Math.round(100-s/i*100);r.formattedDiscount=0===a?`${a}%`:`-${a}%`,r.discount=a}return r}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(u.M52))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function v(e,c){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA()()),2&e){const n=c.$implicit,i=t.oxw(3);t.xp6(2),t.Oqu(i.formatQuantity(n)),t.xp6(2),t.Oqu(n.formattedValue),t.xp6(2),t.Oqu(n.formattedDiscount)}}function P(e,c){if(1&e&&(t.TgZ(0,"div",2)(1,"table",3)(2,"thead",4)(3,"tr")(4,"th",5),t._uU(5),t.ALo(6,"cxTranslate"),t.qZA(),t.TgZ(7,"th",5),t._uU(8),t.ALo(9,"cxTranslate"),t.qZA(),t.TgZ(10,"th",5),t._uU(11),t.ALo(12,"cxTranslate"),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,v,7,3,"tr",6),t.qZA()()()),2&e){const n=t.oxw().ngIf;t.xp6(5),t.Oqu(t.lcZ(6,4,"bulkPricingTable.quantity")),t.xp6(3),t.Oqu(t.lcZ(9,6,"bulkPricingTable.price")),t.xp6(3),t.Oqu(t.lcZ(12,8,"bulkPricingTable.discount")),t.xp6(3),t.Q6J("ngForOf",n)}}function k(e,c){if(1&e&&(t.ynx(0),t.YNc(1,P,15,10,"div",1),t.BQk()),2&e){const n=c.ngIf;t.xp6(1),t.Q6J("ngIf",n.length>0)}}let y=(()=>{class e{constructor(n,i){this.routingService=n,this.bulkPricingService=i,this.PRODUCT_KEY="productCode"}ngOnInit(){this.priceTiers$=this.getPrices()}formatQuantity(n){let i="";return i=n.maxQuantity?n.minQuantity+" - "+n.maxQuantity:n.minQuantity+"+",i}getPrices(){return this.routingService.getRouterState().pipe((0,g.w)(n=>this.bulkPricingService.getBulkPrices(n.state.params[this.PRODUCT_KEY])))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.Znh),t.Y36(m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cx-bulk-pricing-table"]],decls:2,vars:3,consts:[[4,"ngIf"],["class","cx-bulk-pricing-table-container",4,"ngIf"],[1,"cx-bulk-pricing-table-container"],[1,"table"],[1,"thead-light"],["scope","col"],[4,"ngFor","ngForOf"]],template:function(n,i){1&n&&(t.YNc(0,k,2,1,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,i.priceTiers$))},dependencies:[l.sg,l.O5,l.Ov,u.X$D],encapsulation:2}),e})(),T=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,u.LUR,p.Fme,u.pEA.withConfig({cmsComponents:{BulkPricingTableComponent:{component:y}}})]}),e})();const b={backend:{occ:{endpoints:{product:{bulkPrices:"orgProducts/${productCode}?fields=price(DEFAULT),volumePrices(FULL)"}}}}};let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[(0,u.i51)(b)],imports:[l.ez]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h,T]}),e})()}}]);