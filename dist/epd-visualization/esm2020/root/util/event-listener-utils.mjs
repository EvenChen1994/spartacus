/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export class EventListenerUtils {
    constructor() {
        this.listeners = [];
    }
    initialize(renderer) {
        this.renderer = renderer;
    }
    attachEventListener(nativeElement, eventName, callback) {
        const listener = {
            nativeElement,
            eventName,
            endListener: this.renderer.listen(nativeElement, eventName, callback),
        };
        this.listeners.push(listener);
    }
    detachEventListeners(nativeElement, eventName) {
        this._detachEventListeners(this.listeners.filter((listener) => listener.nativeElement === nativeElement &&
            listener.eventName === eventName));
    }
    detachAllEventListeners(nativeElement) {
        this._detachEventListeners(this.listeners.filter((listener) => listener.nativeElement === nativeElement));
    }
    _detachEventListeners(eventListeners) {
        const listenersSet = new Set(eventListeners);
        eventListeners.forEach((listener) => {
            listener.endListener();
        });
        this.listeners = this.listeners.filter((listener) => !listenersSet.has(listener));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlzdGVuZXItdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9pbnRlZ3JhdGlvbi1saWJzL2VwZC12aXN1YWxpemF0aW9uL3Jvb3QvdXRpbC9ldmVudC1saXN0ZW5lci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBVUgsTUFBTSxPQUFPLGtCQUFrQjtJQUEvQjtRQU1VLGNBQVMsR0FBZSxFQUFFLENBQUM7SUEwQ3JDLENBQUM7SUEvQ0MsVUFBVSxDQUFDLFFBQW1CO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFLRCxtQkFBbUIsQ0FDakIsYUFBa0IsRUFDbEIsU0FBaUIsRUFDakIsUUFBOEI7UUFFOUIsTUFBTSxRQUFRLEdBQWE7WUFDekIsYUFBYTtZQUNiLFNBQVM7WUFDVCxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUM7U0FDdEUsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxhQUFrQixFQUFFLFNBQWlCO1FBQ3hELElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQ25CLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FDWCxRQUFRLENBQUMsYUFBYSxLQUFLLGFBQWE7WUFDeEMsUUFBUSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQ25DLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxhQUFrQjtRQUN4QyxJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUNuQixDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsS0FBSyxhQUFhLENBQ3ZELENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxjQUEwQjtRQUM5QyxNQUFNLFlBQVksR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3QyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDbEMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FDcEMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FDMUMsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RlbmVyIHtcbiAgbmF0aXZlRWxlbWVudDogYW55O1xuICBldmVudE5hbWU6IHN0cmluZztcbiAgZW5kTGlzdGVuZXI6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBFdmVudExpc3RlbmVyVXRpbHMge1xuICBpbml0aWFsaXplKHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIHByaXZhdGUgbGlzdGVuZXJzOiBMaXN0ZW5lcltdID0gW107XG5cbiAgYXR0YWNoRXZlbnRMaXN0ZW5lcihcbiAgICBuYXRpdmVFbGVtZW50OiBhbnksXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s6IChldmVudDogYW55KSA9PiB2b2lkXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RlbmVyOiBMaXN0ZW5lciA9IHtcbiAgICAgIG5hdGl2ZUVsZW1lbnQsXG4gICAgICBldmVudE5hbWUsXG4gICAgICBlbmRMaXN0ZW5lcjogdGhpcy5yZW5kZXJlci5saXN0ZW4obmF0aXZlRWxlbWVudCwgZXZlbnROYW1lLCBjYWxsYmFjayksXG4gICAgfTtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgfVxuXG4gIGRldGFjaEV2ZW50TGlzdGVuZXJzKG5hdGl2ZUVsZW1lbnQ6IGFueSwgZXZlbnROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXRhY2hFdmVudExpc3RlbmVycyhcbiAgICAgIHRoaXMubGlzdGVuZXJzLmZpbHRlcihcbiAgICAgICAgKGxpc3RlbmVyKSA9PlxuICAgICAgICAgIGxpc3RlbmVyLm5hdGl2ZUVsZW1lbnQgPT09IG5hdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgICBsaXN0ZW5lci5ldmVudE5hbWUgPT09IGV2ZW50TmFtZVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBkZXRhY2hBbGxFdmVudExpc3RlbmVycyhuYXRpdmVFbGVtZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXRhY2hFdmVudExpc3RlbmVycyhcbiAgICAgIHRoaXMubGlzdGVuZXJzLmZpbHRlcihcbiAgICAgICAgKGxpc3RlbmVyKSA9PiBsaXN0ZW5lci5uYXRpdmVFbGVtZW50ID09PSBuYXRpdmVFbGVtZW50XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIF9kZXRhY2hFdmVudExpc3RlbmVycyhldmVudExpc3RlbmVyczogTGlzdGVuZXJbXSk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RlbmVyc1NldCA9IG5ldyBTZXQoZXZlbnRMaXN0ZW5lcnMpO1xuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5lbmRMaXN0ZW5lcigpO1xuICAgIH0pO1xuICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKFxuICAgICAgKGxpc3RlbmVyKSA9PiAhbGlzdGVuZXJzU2V0LmhhcyhsaXN0ZW5lcilcbiAgICApO1xuICB9XG59XG4iXX0=