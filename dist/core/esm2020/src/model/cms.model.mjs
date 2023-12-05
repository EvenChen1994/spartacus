/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export var PageType;
(function (PageType) {
    PageType["CONTENT_PAGE"] = "ContentPage";
    PageType["PRODUCT_PAGE"] = "ProductPage";
    PageType["CATEGORY_PAGE"] = "CategoryPage";
    PageType["CATALOG_PAGE"] = "CatalogPage";
})(PageType || (PageType = {}));
export var ScrollBehavior;
(function (ScrollBehavior) {
    ScrollBehavior["AUTO"] = "auto";
    ScrollBehavior["SMOOTH"] = "smooth";
})(ScrollBehavior || (ScrollBehavior = {}));
export var CmsBannerCarouselEffect;
(function (CmsBannerCarouselEffect) {
    CmsBannerCarouselEffect["FADE"] = "FADE";
    CmsBannerCarouselEffect["ZOOM"] = "ZOOM";
    CmsBannerCarouselEffect["CURTAIN"] = "CURTAINX";
    CmsBannerCarouselEffect["TURNDOWN"] = "TURNDOWN";
})(CmsBannerCarouselEffect || (CmsBannerCarouselEffect = {}));
export var ContainerBackgroundOptions;
(function (ContainerBackgroundOptions) {
    ContainerBackgroundOptions["NO_BACKGROUND"] = "NO_BACKGROUND";
    ContainerBackgroundOptions["UPLOAD_RESPONSIVE_IMAGE"] = "UPLOAD_RESPONSIVE_IMAGE";
    ContainerBackgroundOptions["UPLOAD_THUMBNAIL"] = "UPLOAD_THUMBNAIL";
})(ContainerBackgroundOptions || (ContainerBackgroundOptions = {}));
export var ContainerSizeOptions;
(function (ContainerSizeOptions) {
    ContainerSizeOptions["FIT_TO_CONTENT_SIZE"] = "FIT_TO_CONTENT_SIZE";
    ContainerSizeOptions["DEFINE_CONTAINER_HEIGHT"] = "DEFINE_CONTAINER_HEIGHT";
})(ContainerSizeOptions || (ContainerSizeOptions = {}));
// TODO: (CXSPA-4886) Remove this flag in the major
export const USER_CMS_ENDPOINTS = 'userCmsEndpoints';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvbW9kZWwvY21zLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFpQ0gsTUFBTSxDQUFOLElBQVksUUFLWDtBQUxELFdBQVksUUFBUTtJQUNsQix3Q0FBNEIsQ0FBQTtJQUM1Qix3Q0FBNEIsQ0FBQTtJQUM1QiwwQ0FBOEIsQ0FBQTtJQUM5Qix3Q0FBNEIsQ0FBQTtBQUM5QixDQUFDLEVBTFcsUUFBUSxLQUFSLFFBQVEsUUFLbkI7QUF3QkQsTUFBTSxDQUFOLElBQVksY0FHWDtBQUhELFdBQVksY0FBYztJQUN4QiwrQkFBYSxDQUFBO0lBQ2IsbUNBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLGNBQWMsS0FBZCxjQUFjLFFBR3pCO0FBdURELE1BQU0sQ0FBTixJQUFZLHVCQUtYO0FBTEQsV0FBWSx1QkFBdUI7SUFDakMsd0NBQWEsQ0FBQTtJQUNiLHdDQUFhLENBQUE7SUFDYiwrQ0FBb0IsQ0FBQTtJQUNwQixnREFBcUIsQ0FBQTtBQUN2QixDQUFDLEVBTFcsdUJBQXVCLEtBQXZCLHVCQUF1QixRQUtsQztBQTJHRCxNQUFNLENBQU4sSUFBWSwwQkFJWDtBQUpELFdBQVksMEJBQTBCO0lBQ3BDLDZEQUErQixDQUFBO0lBQy9CLGlGQUFtRCxDQUFBO0lBQ25ELG1FQUFxQyxDQUFBO0FBQ3ZDLENBQUMsRUFKVywwQkFBMEIsS0FBMUIsMEJBQTBCLFFBSXJDO0FBRUQsTUFBTSxDQUFOLElBQVksb0JBR1g7QUFIRCxXQUFZLG9CQUFvQjtJQUM5QixtRUFBMkMsQ0FBQTtJQUMzQywyRUFBbUQsQ0FBQTtBQUNyRCxDQUFDLEVBSFcsb0JBQW9CLEtBQXBCLG9CQUFvQixRQUcvQjtBQU9ELG1EQUFtRDtBQUNuRCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zQ29tcG9uZW50IHtcbiAgbW9kaWZpZWRUaW1lPzogRGF0ZTtcbiAgbmFtZT86IHN0cmluZztcbiAgb3RoZXJQcm9wZXJ0aWVzPzogYW55O1xuICB0eXBlQ29kZT86IHN0cmluZztcbiAgdWlkPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGRldGFpbGVkIENNUyBjb21wb25lbnQgY29tcG9zaXRpb25cbiAgICovXG4gIGNvbXBvc2l0aW9uPzoge1xuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgaW5uZXIgY29tcG9uZW50IG1hcHBpbmdzXG4gICAgICovXG4gICAgaW5uZXI/OiBzdHJpbmdbXTtcbiAgfTtcblxuICAvKipcbiAgICogU3R5bGUgY2xhc3NlcyBjYW4gYmUgYWRkZWQgdG8gdGhlIENNUyBiYW5uZXIgY29tcG9uZW50IHRvIGVuaGFuY2UgdGhlIFVYLlxuICAgKiBUaGUgc3R5bGUgY2xhc3NlcyBhcmUgdHlwaWNhbGx5IGRlcml2ZWQgZnJvbSB0aGUgKENNUykgYmFja2VuZCBhbmQgc2hvdWxkXG4gICAqIG1hdGNoIGFuIGV4aXN0aW5nIENTUyBzZWxlY3Rvci5cbiAgICpcbiAgICogVGhlIHN0eWxlQ2xhc3NlcyBjYW4gY29udGFpbiBhIFwibGlzdFwiIG9mIHNwYWNlIHNlcGFyYXRlZCBzdHlsZSBjbGFzc2VzLlxuICAgKi9cbiAgc3R5bGVDbGFzc2VzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc0NvbXBvbmVudFdpdGhDaGlsZHJlbiBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIGNoaWxkcmVuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBQYWdlVHlwZSB7XG4gIENPTlRFTlRfUEFHRSA9ICdDb250ZW50UGFnZScsXG4gIFBST0RVQ1RfUEFHRSA9ICdQcm9kdWN0UGFnZScsXG4gIENBVEVHT1JZX1BBR0UgPSAnQ2F0ZWdvcnlQYWdlJyxcbiAgQ0FUQUxPR19QQUdFID0gJ0NhdGFsb2dQYWdlJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNMaW5rQ29tcG9uZW50IGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgdXJsPzogc3RyaW5nO1xuICBjb250YWluZXI/OiBib29sZWFuO1xuICBleHRlcm5hbD86IGJvb2xlYW47XG4gIGNvbnRlbnRQYWdlPzogc3RyaW5nO1xuICBjb250ZW50UGFnZUxhYmVsT3JJZD86IHN0cmluZztcbiAgbGlua05hbWU/OiBzdHJpbmc7XG4gIHRhcmdldD86IHN0cmluZyB8IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFN0eWxlIHJ1bGVzIGNhbiBiZSBhZGRlZCB0byB0aGUgQ01TIExpbmsgY29tcG9uZW50IHRvIGVuaGFuY2UgdGhlIFVYLlxuICAgKiBUaGUgc3R5bGUgYXR0cmlidXRlcyBhcmUgdHlwaWNhbGx5IGRlcml2ZWQgZnJvbSB0aGUgKENNUykgYmFja2VuZC5cbiAgICpcbiAgICogVGhlIHN0eWxlQXR0cmlidXRlcyBjYW4gY29udGFpbiBhIFwibGlzdFwiIG9mIHNlbWljb2xvbiBzZXBhcmF0ZWQgc3R5bGUgcnVsZXMuXG4gICAqL1xuICBzdHlsZUF0dHJpYnV0ZXM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIGNvbnRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFNjcm9sbEJlaGF2aW9yIHtcbiAgQVVUTyA9ICdhdXRvJyxcbiAgU01PT1RIID0gJ3Ntb290aCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zU2Nyb2xsVG9Ub3BDb21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBzY3JvbGxCZWhhdmlvcj86IFNjcm9sbEJlaGF2aW9yO1xuICBkaXNwbGF5VGhyZXNob2xkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc1NlYXJjaEJveENvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIGNvbnRhaW5lcj86IGJvb2xlYW47XG4gIG1heFN1Z2dlc3Rpb25zPzogbnVtYmVyO1xuICBtYXhQcm9kdWN0cz86IG51bWJlcjtcbiAgZGlzcGxheVN1Z2dlc3Rpb25zPzogYm9vbGVhbjtcbiAgZGlzcGxheVByb2R1Y3RzPzogYm9vbGVhbjtcbiAgZGlzcGxheVByb2R1Y3RJbWFnZXM/OiBib29sZWFuO1xuICB3YWl0VGltZUJlZm9yZVJlcXVlc3Q/OiBudW1iZXI7XG4gIG1pbkNoYXJhY3RlcnNCZWZvcmVSZXF1ZXN0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc1BhcmFncmFwaENvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIGNvbnRlbnQ/OiBzdHJpbmc7XG4gIGNvbnRhaW5lcj86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ01TVGFiUGFyYWdyYXBoQ29udGFpbmVyIGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgY29udGFpbmVyPzogc3RyaW5nO1xuICBjb21wb25lbnRzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc0Jhbm5lckNvbXBvbmVudE1lZGlhIHtcbiAgYWx0VGV4dD86IHN0cmluZztcbiAgY29kZT86IHN0cmluZztcbiAgbWltZT86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc1Jlc3BvbnNpdmVCYW5uZXJDb21wb25lbnRNZWRpYSB7XG4gIGRlc2t0b3A/OiBDbXNCYW5uZXJDb21wb25lbnRNZWRpYTtcbiAgbW9iaWxlPzogQ21zQmFubmVyQ29tcG9uZW50TWVkaWE7XG4gIHRhYmxldD86IENtc0Jhbm5lckNvbXBvbmVudE1lZGlhO1xuICB3aWRlc2NyZWVuPzogQ21zQmFubmVyQ29tcG9uZW50TWVkaWE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zQmFubmVyQ29tcG9uZW50IGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgaGVhZGxpbmU/OiBzdHJpbmc7XG4gIGNvbnRlbnQ/OiBzdHJpbmc7XG4gIGNvbnRhaW5lcj86IHN0cmluZztcbiAgbWVkaWE/OiBDbXNCYW5uZXJDb21wb25lbnRNZWRpYSB8IENtc1Jlc3BvbnNpdmVCYW5uZXJDb21wb25lbnRNZWRpYTtcbiAgdXJsTGluaz86IHN0cmluZztcbiAgZXh0ZXJuYWw/OiBzdHJpbmcgfCBib29sZWFuO1xuICBjb250ZW50UGFnZT86IHN0cmluZztcbiAgcHJvZHVjdD86IHN0cmluZztcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIENtc0Jhbm5lckNhcm91c2VsRWZmZWN0IHtcbiAgRkFERSA9ICdGQURFJyxcbiAgWk9PTSA9ICdaT09NJyxcbiAgQ1VSVEFJTiA9ICdDVVJUQUlOWCcsXG4gIFRVUk5ET1dOID0gJ1RVUk5ET1dOJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNCYW5uZXJDYXJvdXNlbENvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIGJhbm5lcnM/OiBzdHJpbmc7XG4gIGVmZmVjdD86IENtc0Jhbm5lckNhcm91c2VsRWZmZWN0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc1Byb2R1Y3RDYXJvdXNlbENvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBwcm9kdWN0Q29kZXM/OiBzdHJpbmc7XG4gIGNvbnRhaW5lcj86IHN0cmluZztcbiAgcG9wdXA/OiBzdHJpbmc7XG4gIHNjcm9sbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBkaXNwbGF5UHJvZHVjdFRpdGxlcz86IHN0cmluZztcbiAgZGlzcGxheVByb2R1Y3RQcmljZXM/OiBzdHJpbmc7XG4gIG1heGltdW1OdW1iZXJQcm9kdWN0cz86IG51bWJlcjtcbiAgcHJvZHVjdFJlZmVyZW5jZVR5cGVzPzogc3RyaW5nO1xuICBjb250YWluZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zTWluaUNhcnRDb21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBjb250YWluZXI/OiBzdHJpbmc7XG4gIHNob3duUHJvZHVjdENvdW50Pzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgdG90YWxEaXNwbGF5Pzogc3RyaW5nO1xuICBsaWdodGJveEJhbm5lckNvbXBvbmVudD86IENtc0Jhbm5lckNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNQYWdlVGl0bGVDb21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBjb250YWluZXI/OiBzdHJpbmc7XG59XG5cbi8vIFRPRE86IFVwZ3JhZGUgbW9kZWwgd2hlbiBCcmVhZGNydW1icyB3aWxsIGJlIGZpbmFsbHkgdXNlZCBpbiBwcm9qZWN0XG5leHBvcnQgaW50ZXJmYWNlIENtc0JyZWFkY3J1bWJzQ29tcG9uZW50IGV4dGVuZHMgQ21zUGFnZVRpdGxlQ29tcG9uZW50IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zTmF2aWdhdGlvbk5vZGUge1xuICB1aWQ/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjaGlsZHJlbj86IEFycmF5PENtc05hdmlnYXRpb25Ob2RlPjtcbiAgZW50cmllcz86IEFycmF5PENtc05hdmlnYXRpb25FbnRyeT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zTmF2aWdhdGlvbkVudHJ5IHtcbiAgaXRlbUlkPzogc3RyaW5nO1xuICBpdGVtU3VwZXJUeXBlPzogc3RyaW5nO1xuICBpdGVtVHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgY29udGFpbmVyPzogc3RyaW5nO1xuICBzdHlsZUNsYXNzPzogc3RyaW5nO1xuICB3cmFwQWZ0ZXI/OiBzdHJpbmc7XG4gIG5vdGljZT86IHN0cmluZztcbiAgc2hvd0xhbmd1YWdlQ3VycmVuY3k/OiBzdHJpbmc7XG4gIG5hdmlnYXRpb25Ob2RlPzogQ21zTmF2aWdhdGlvbk5vZGU7XG4gIHJlc2V0TWVudU9uQ2xvc2U/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc1Byb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBjb250YWluZXI/OiBzdHJpbmc7XG4gIGFjdGl2ZUZhY2V0VmFsdWVDb2RlPzogc3RyaW5nO1xuICBzZWFyY2hSZXN1bHQ/OiBzdHJpbmc7XG4gIG1pblBlckZhY2V0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc0FkZFRvQ2FydENvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIGludmVudG9yeURpc3BsYXk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc09yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBlbmFibGVBZGRUb0NhcnQ/OiBib29sZWFuO1xuICBncm91cENhcnRJdGVtcz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zT3JkZXJEZXRhaWxPdmVydmlld0NvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIHNpbXBsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zUERGRG9jdW1lbnRDb21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBwZGZGaWxlPzogQ21zQmFubmVyQ29tcG9uZW50TWVkaWE7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBoZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zVmlkZW9Db21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBvdmVybGF5VGl0bGU/OiBzdHJpbmc7XG4gIGF1dG9QbGF5Pzogc3RyaW5nO1xuICBsb29wPzogc3RyaW5nO1xuICBtdXRlPzogc3RyaW5nO1xuICBjb250YWluZXJTaXplPzogQ29udGFpbmVyU2l6ZU9wdGlvbnM7XG4gIGNvbnRhaW5lckJhY2tncm91bmQ/OiBDb250YWluZXJCYWNrZ3JvdW5kT3B0aW9ucztcbiAgdGh1bWJuYWlsU2VsZWN0b3I/OiBDb250YWluZXJCYWNrZ3JvdW5kT3B0aW9ucztcbiAgdmlkZW9Db250YWluZXJIZWlnaHQ/OiBudW1iZXI7XG4gIHZpZGVvPzogQ21zQmFubmVyQ29tcG9uZW50TWVkaWE7XG4gIGNvbnRhaW5lcj86IGJvb2xlYW47XG4gIHZpZGVvTWVkaWE/OiBDbXNCYW5uZXJDb21wb25lbnRNZWRpYSB8IENtc1Jlc3BvbnNpdmVCYW5uZXJDb21wb25lbnRNZWRpYTtcbiAgdGh1bWJuYWlsPzogQ21zQmFubmVyQ29tcG9uZW50TWVkaWEgfCBDbXNSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50TWVkaWE7XG4gIHVybD86IHN0cmluZztcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7XG4gIHByb2R1Y3Q/OiBzdHJpbmc7XG4gIGNvbnRlbnRQYWdlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBDb250YWluZXJCYWNrZ3JvdW5kT3B0aW9ucyB7XG4gIE5PX0JBQ0tHUk9VTkQgPSAnTk9fQkFDS0dST1VORCcsXG4gIFVQTE9BRF9SRVNQT05TSVZFX0lNQUdFID0gJ1VQTE9BRF9SRVNQT05TSVZFX0lNQUdFJyxcbiAgVVBMT0FEX1RIVU1CTkFJTCA9ICdVUExPQURfVEhVTUJOQUlMJyxcbn1cblxuZXhwb3J0IGVudW0gQ29udGFpbmVyU2l6ZU9wdGlvbnMge1xuICBGSVRfVE9fQ09OVEVOVF9TSVpFID0gJ0ZJVF9UT19DT05URU5UX1NJWkUnLFxuICBERUZJTkVfQ09OVEFJTkVSX0hFSUdIVCA9ICdERUZJTkVfQ09OVEFJTkVSX0hFSUdIVCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zUGlja3VwSXRlbURldGFpbHMgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBzaG93RWRpdDogYm9vbGVhbjtcbiAgY29udGV4dDogc3RyaW5nO1xufVxuXG4vLyBUT0RPOiAoQ1hTUEEtNDg4NikgUmVtb3ZlIHRoaXMgZmxhZyBpbiB0aGUgbWFqb3JcbmV4cG9ydCBjb25zdCBVU0VSX0NNU19FTkRQT0lOVFMgPSAndXNlckNtc0VuZHBvaW50cyc7XG4iXX0=