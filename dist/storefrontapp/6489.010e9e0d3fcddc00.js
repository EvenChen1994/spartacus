"use strict";(self.webpackChunkstorefrontapp=self.webpackChunkstorefrontapp||[]).push([[6489],{6489:(w,v,i)=>{i.r(v),i.d(v,{PDFInvoicesModule:()=>U});var t=i(4650),D=i(3802),d=i(5955),F=i(9225),g=i(2654),u=i(5154),a=i(4850),P=i(5778);const E=new t.OlP("PDFInvoicesListInvoices");class I{}let l=(()=>{class o{constructor(e){this.adapter=e}getInvoicesForOrder(e,n,r){return this.adapter.getInvoicesForOrder(e,n,r)}getInvoicePDF(e,n,r,c){return this.adapter.getInvoicePDF(e,n,r,c)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(I))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),M=(()=>{class o extends d.kck{constructor(){super(...arguments),this.responseStatus=d.sdw.BAD_REQUEST}hasMatch(e){return super.hasMatch(e)&&this.getErrors(e)?.length>0}handleError(e,n){this.handleInvoicesListError(e,n),this.handlePDFDownloadError(e,n)}handleInvoicesListError(e,n){this.getErrors(n).filter(r=>this.isInvoicesListNotFoundError(r)).forEach(()=>{this.globalMessageService.add({key:"pdfInvoices.invoicesLoadingError"},d.xUg.MSG_TYPE_ERROR)})}handlePDFDownloadError(e,n){this.getErrors(n).filter(r=>this.isDownloadInvoiceError(r)).forEach(()=>{this.globalMessageService.add({key:"pdfInvoices.downloadPDFError"},d.xUg.MSG_TYPE_ERROR)})}isInvoicesListNotFoundError(e){return"UnknownIdentifierError"===e?.type&&null!=e?.message&&e?.message.includes("Order")}isDownloadInvoiceError(e){return"UnknownIdentifierError"===e?.type&&null!=e?.message&&e?.message.includes("Invoice")}getErrors(e){return e.error?.errors.filter(n=>this.isInvoicesListNotFoundError(n)||this.isDownloadInvoiceError(n))}getPriority(){return 0}}return o.\u0275fac=function(){let s;return function(n){return(s||(s=t.n5z(o)))(n||o)}}(),o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),p=(()=>{class o{constructor(e,n,r){this.routingService=e,this.userIdService=n,this.pdfInvoicesConnector=r,this.subscriptions=new g.w,this.subscriptions.add(this.userIdService.takeUserId().subscribe(c=>this.userId=c)),this.subscriptions.add(this.getOrderId().subscribe(c=>this.orderId=c))}getInvoicesForOrder(e,n,r){return this.pdfInvoicesConnector.getInvoicesForOrder(n||this.userId,r||this.orderId,e).pipe((0,u.d)(1))}getInvoicePDF(e,n,r,c){return this.pdfInvoicesConnector.getInvoicePDF(r||this.userId,c||this.orderId,e,n).pipe((0,u.d)(1))}getOrderId(){return this.routingService.getRouterState().pipe((0,a.U)(e=>e.state.params),(0,P.x)(),(0,a.U)(e=>e.orderCode))}ngOnDestroy(){this.subscriptions.unsubscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(d.Znh),t.LFG(d.XBV),t.LFG(l))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})(),y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[p,{provide:F.sc,useExisting:p},{provide:d.kck,useExisting:M,multi:!0},l]}),o})();var O=i(529),h=i(1737),f=i(7221),L=i(6895);let m=(()=>{class o{constructor(e,n,r){this.http=e,this.occEndpoints=n,this.converter=r,this.logger=(0,t.f3M)(d.mQy)}getInvoicesForOrder(e,n,r){return this.http.get(this.buildInvoiceListUrl(e,n,r)).pipe((0,f.K)(c=>(0,h._)((0,d.cxH)(c,this.logger))),this.converter.pipeable(E))}getInvoicePDF(e,n,r,c){return this.http.get(this.buildInvoicePDFUrl(e,n,r,c),{responseType:"blob"}).pipe((0,f.K)(b=>(0,h._)((0,d.cxH)(b,this.logger))))}buildInvoiceListUrl(e,n,r){return this.occEndpoints.buildUrl("pdfInvoicesListInvoices",{urlParams:{userId:e,orderId:n},queryParams:r})}buildInvoicePDFUrl(e,n,r,c){return this.occEndpoints.buildUrl("pdfInvoicesDownloadInvoicePDF",{urlParams:{userId:e,orderId:n,invoiceId:r},queryParams:c?{externalSystemId:c}:void 0})}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(O.eN),t.LFG(d.Lz0),t.LFG(d.IXI))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();const S={backend:{occ:{endpoints:{pdfInvoicesListInvoices:"users/${userId}/orders/${orderId}/invoices",pdfInvoicesDownloadInvoicePDF:"users/${userId}/orders/${orderId}/invoices/${invoiceId}/download"}}}};let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[(0,d.i51)(S),{provide:I,useClass:m}],imports:[L.ez]}),o})(),U=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[D.h,y,C]}),o})()}}]);