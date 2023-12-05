/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export var OccConfigurator;
(function (OccConfigurator) {
    let GroupType;
    (function (GroupType) {
        GroupType["CSTIC_GROUP"] = "CSTIC_GROUP";
        GroupType["INSTANCE"] = "INSTANCE";
        GroupType["CONFLICT_HEADER"] = "CONFLICT_HEADER";
        GroupType["CONFLICT"] = "CONFLICT";
    })(GroupType = OccConfigurator.GroupType || (OccConfigurator.GroupType = {}));
    let UiType;
    (function (UiType) {
        UiType["STRING"] = "STRING";
        UiType["NUMERIC"] = "NUMERIC";
        UiType["CHECK_BOX"] = "CHECK_BOX";
        UiType["CHECK_BOX_LIST"] = "CHECK_BOX_LIST";
        UiType["RADIO_BUTTON"] = "RADIO_BUTTON";
        UiType["RADIO_BUTTON_ADDITIONAL_INPUT"] = "RADIO_BUTTON_ADDITIONAL_INPUT";
        UiType["DROPDOWN"] = "DROPDOWN";
        UiType["DROPDOWN_ADDITIONAL_INPUT"] = "DROPDOWN_ADDITIONAL_INPUT";
        UiType["READ_ONLY"] = "READ_ONLY";
        UiType["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED";
        UiType["SINGLE_SELECTION_IMAGE"] = "SINGLE_SELECTION_IMAGE";
        UiType["MULTI_SELECTION_IMAGE"] = "MULTI_SELECTION_IMAGE";
    })(UiType = OccConfigurator.UiType || (OccConfigurator.UiType = {}));
    let PriceType;
    (function (PriceType) {
        PriceType["BUY"] = "BUY";
    })(PriceType = OccConfigurator.PriceType || (OccConfigurator.PriceType = {}));
    let ImageFormatType;
    (function (ImageFormatType) {
        ImageFormatType["VALUE_IMAGE"] = "VALUE_IMAGE";
        ImageFormatType["CSTIC_IMAGE"] = "CSTIC_IMAGE";
    })(ImageFormatType = OccConfigurator.ImageFormatType || (OccConfigurator.ImageFormatType = {}));
    let ImageType;
    (function (ImageType) {
        ImageType["PRIMARY"] = "PRIMARY";
        ImageType["GALLERY"] = "GALLERY";
    })(ImageType = OccConfigurator.ImageType || (OccConfigurator.ImageType = {}));
    let OverviewFilterEnum;
    (function (OverviewFilterEnum) {
        OverviewFilterEnum["VISIBLE"] = "PRIMARY";
        OverviewFilterEnum["USER_INPUT"] = "USER_INPUT";
        OverviewFilterEnum["PRICE_RELEVANT"] = "PRICE_RELEVANT";
    })(OverviewFilterEnum = OccConfigurator.OverviewFilterEnum || (OccConfigurator.OverviewFilterEnum = {}));
})(OccConfigurator || (OccConfigurator = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1jb25maWd1cmF0b3Itb2NjLm1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9wcm9kdWN0LWNvbmZpZ3VyYXRvci9ydWxlYmFzZWQvb2NjL3ZhcmlhbnQvdmFyaWFudC1jb25maWd1cmF0b3Itb2NjLm1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsTUFBTSxLQUFXLGVBQWUsQ0FnTy9CO0FBaE9ELFdBQWlCLGVBQWU7SUF1TDlCLElBQVksU0FLWDtJQUxELFdBQVksU0FBUztRQUNuQix3Q0FBMkIsQ0FBQTtRQUMzQixrQ0FBcUIsQ0FBQTtRQUNyQixnREFBbUMsQ0FBQTtRQUNuQyxrQ0FBcUIsQ0FBQTtJQUN2QixDQUFDLEVBTFcsU0FBUyxHQUFULHlCQUFTLEtBQVQseUJBQVMsUUFLcEI7SUFFRCxJQUFZLE1BYVg7SUFiRCxXQUFZLE1BQU07UUFDaEIsMkJBQWlCLENBQUE7UUFDakIsNkJBQW1CLENBQUE7UUFDbkIsaUNBQXVCLENBQUE7UUFDdkIsMkNBQWlDLENBQUE7UUFDakMsdUNBQTZCLENBQUE7UUFDN0IseUVBQStELENBQUE7UUFDL0QsK0JBQXFCLENBQUE7UUFDckIsaUVBQXVELENBQUE7UUFDdkQsaUNBQXVCLENBQUE7UUFDdkIsNkNBQW1DLENBQUE7UUFDbkMsMkRBQWlELENBQUE7UUFDakQseURBQStDLENBQUE7SUFDakQsQ0FBQyxFQWJXLE1BQU0sR0FBTixzQkFBTSxLQUFOLHNCQUFNLFFBYWpCO0lBRUQsSUFBWSxTQUVYO0lBRkQsV0FBWSxTQUFTO1FBQ25CLHdCQUFXLENBQUE7SUFDYixDQUFDLEVBRlcsU0FBUyxHQUFULHlCQUFTLEtBQVQseUJBQVMsUUFFcEI7SUFFRCxJQUFZLGVBR1g7SUFIRCxXQUFZLGVBQWU7UUFDekIsOENBQTJCLENBQUE7UUFDM0IsOENBQTJCLENBQUE7SUFDN0IsQ0FBQyxFQUhXLGVBQWUsR0FBZiwrQkFBZSxLQUFmLCtCQUFlLFFBRzFCO0lBRUQsSUFBWSxTQUdYO0lBSEQsV0FBWSxTQUFTO1FBQ25CLGdDQUFtQixDQUFBO1FBQ25CLGdDQUFtQixDQUFBO0lBQ3JCLENBQUMsRUFIVyxTQUFTLEdBQVQseUJBQVMsS0FBVCx5QkFBUyxRQUdwQjtJQUVELElBQVksa0JBSVg7SUFKRCxXQUFZLGtCQUFrQjtRQUM1Qix5Q0FBbUIsQ0FBQTtRQUNuQiwrQ0FBeUIsQ0FBQTtRQUN6Qix1REFBaUMsQ0FBQTtJQUNuQyxDQUFDLEVBSlcsa0JBQWtCLEdBQWxCLGtDQUFrQixLQUFsQixrQ0FBa0IsUUFJN0I7QUFDSCxDQUFDLEVBaE9nQixlQUFlLEtBQWYsZUFBZSxRQWdPL0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5leHBvcnQgbmFtZXNwYWNlIE9jY0NvbmZpZ3VyYXRvciB7XG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIHRoZSB2YXJpYW50IGNvbmZpZ3VyYXRpb24gY29uc3VtZWQgdGhyb3VnaCBPQ0MuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvbmZpZ0lkXVxuICAgICAqL1xuICAgIGNvbmZpZ0lkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2NvbXBsZXRlXVxuICAgICAqL1xuICAgIGNvbXBsZXRlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBDb25maWd1cmF0aW9uIGlzIGNvbnNpc3RlbnQsIG1lYW5pbmcgaXQgZG9lcyBub3QgY29udGFpbiBjb25mbGljdHNcbiAgICAgKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICovXG4gICAgY29uc2lzdGVudD86IGJvb2xlYW47XG4gICAgdG90YWxOdW1iZXJPZklzc3Vlcz86IG51bWJlcjtcbiAgICBncm91cHM/OiBHcm91cFtdO1xuICAgIHJvb3RQcm9kdWN0OiBzdHJpbmc7XG4gICAga2JLZXk/OiBLQjtcbiAgICBwcmljaW5nRW5hYmxlZD86IGJvb2xlYW47XG4gICAgaGlkZUJhc2VQcmljZUFuZFNlbGVjdGVkT3B0aW9ucz86IGJvb2xlYW47XG4gICAgaW1tZWRpYXRlQ29uZmxpY3RSZXNvbHV0aW9uPzogYm9vbGVhbjtcbiAgICBuZXdDb25maWd1cmF0aW9uPzogYm9vbGVhbjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS0Ige1xuICAgIGtiTmFtZT86IHN0cmluZztcbiAgICBrYkxvZ3N5cz86IHN0cmluZztcbiAgICBrYlZlcnNpb24/OiBzdHJpbmc7XG4gICAga2JCdWlsZE51bWJlcj86IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJpY2VzIHtcbiAgICBjb25maWdJZDogc3RyaW5nO1xuICAgIGF0dHJpYnV0ZXM/OiBTdXBwbGVtZW50c1tdO1xuICAgIHByaWNpbmdFcnJvcj86IGJvb2xlYW47XG4gICAgc2hvd0RlbHRhUHJpY2VzPzogYm9vbGVhbjtcbiAgICBwcmljZVN1bW1hcnk/OiBQcmljZVN1bW1hcnk7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFN1cHBsZW1lbnRzIHtcbiAgICBjc3RpY1VpS2V5OiBzdHJpbmc7XG4gICAgc2VsZWN0ZWRWYWx1ZXM6IHN0cmluZ1tdO1xuICAgIHByaWNlU3VwcGxlbWVudHM6IFZhbHVlU3VwcGxlbWVudHNbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgVmFsdWVTdXBwbGVtZW50cyB7XG4gICAgYXR0cmlidXRlVmFsdWVLZXk6IHN0cmluZztcbiAgICBwcmljZVZhbHVlOiBQcmljZURldGFpbHM7XG4gICAgb2Jzb2xldGVQcmljZVZhbHVlOiBQcmljZURldGFpbHM7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFByaWNlU3VtbWFyeSB7XG4gICAgYmFzZVByaWNlPzogUHJpY2VEZXRhaWxzO1xuICAgIGN1cnJlbnRUb3RhbD86IFByaWNlRGV0YWlscztcbiAgICBjdXJyZW50VG90YWxTYXZpbmdzPzogUHJpY2VTYXZpbmdEZXRhaWxzO1xuICAgIHNlbGVjdGVkT3B0aW9ucz86IFByaWNlRGV0YWlscztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJpY2VEZXRhaWxzIHtcbiAgICBjdXJyZW5jeUlzbzogc3RyaW5nO1xuICAgIGZvcm1hdHRlZFZhbHVlPzogc3RyaW5nO1xuICAgIHZhbHVlOiBudW1iZXI7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFByaWNlU2F2aW5nRGV0YWlscyBleHRlbmRzIFByaWNlRGV0YWlscyB7XG4gICAgbWF4UXVhbnRpdHk/OiBudW1iZXI7XG4gICAgbWluUXVhbnRpdHk/OiBudW1iZXI7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgICBjb25maWd1cmFibGU/OiBib29sZWFuO1xuICAgIGNvbXBsZXRlPzogYm9vbGVhbjtcbiAgICBjb25zaXN0ZW50PzogYm9vbGVhbjtcbiAgICBhdHRyaWJ1dGVzPzogQXR0cmlidXRlW107XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgZ3JvdXBUeXBlOiBHcm91cFR5cGU7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHN1Ykdyb3Vwcz86IEdyb3VwW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEF0dHJpYnV0ZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGxhbmdEZXBOYW1lPzogc3RyaW5nO1xuICAgIHR5cGU/OiBVaVR5cGU7XG4gICAgZG9tYWluVmFsdWVzPzogVmFsdWVbXTtcbiAgICByZXF1aXJlZD86IGJvb2xlYW47XG4gICAgdmFsdWU/OiBzdHJpbmc7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgZm9ybWF0dGVkVmFsdWU/OiBzdHJpbmc7XG4gICAgbWF4bGVuZ3RoPzogbnVtYmVyO1xuICAgIGltYWdlcz86IEltYWdlW107XG4gICAgdHlwZUxlbmd0aD86IG51bWJlcjtcbiAgICBudW1iZXJTY2FsZT86IG51bWJlcjtcbiAgICBuZWdhdGl2ZUFsbG93ZWQ/OiBib29sZWFuO1xuICAgIGNvbmZsaWN0cz86IHN0cmluZ1tdO1xuICAgIHJldHJhY3RUcmlnZ2VyZWQ/OiBib29sZWFuO1xuICAgIGludGVydmFsSW5Eb21haW4/OiBib29sZWFuO1xuICAgIHJldHJhY3RCbG9ja2VkPzogYm9vbGVhbjtcbiAgICB2YWxpZGF0aW9uVHlwZT86IHN0cmluZztcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgVmFsdWUge1xuICAgIGtleTogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgbGFuZ0RlcE5hbWU/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHk/OiBib29sZWFuO1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgICBpbWFnZXM/OiBJbWFnZVtdO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBBZGRUb0NhcnRQYXJhbWV0ZXJzIHtcbiAgICB1c2VySWQ/OiBzdHJpbmc7XG4gICAgY2FydElkPzogc3RyaW5nO1xuICAgIHByb2R1Y3Q/OiBBZGRUb0NhcnRQcm9kdWN0RGF0YTtcbiAgICBxdWFudGl0eT86IG51bWJlcjtcbiAgICBjb25maWdJZD86IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlQ29uZmlndXJhdGlvbkZvckNhcnRFbnRyeVBhcmFtZXRlcnMge1xuICAgIHVzZXJJZD86IHN0cmluZztcbiAgICBjYXJ0SWQ/OiBzdHJpbmc7XG4gICAgcHJvZHVjdD86IEFkZFRvQ2FydFByb2R1Y3REYXRhO1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgIGNvbmZpZ0lkOiBzdHJpbmc7XG4gICAgZW50cnlOdW1iZXI6IHN0cmluZztcbiAgICBjb25maWd1cmF0aW9uSW5mb3M6IENvbmZpZ3VyYXRpb25JbmZvW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb25JbmZvIHtcbiAgICBjb25maWd1cmF0b3JUeXBlOiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEFkZFRvQ2FydFByb2R1Y3REYXRhIHtcbiAgICBjb2RlPzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBPdmVydmlldyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0b3RhbE51bWJlck9mSXNzdWVzPzogbnVtYmVyO1xuICAgIG51bWJlck9mSW5jb21wbGV0ZUNoYXJhY3RlcmlzdGljcz86IG51bWJlcjtcbiAgICBudW1iZXJPZkNvbmZsaWN0cz86IG51bWJlcjtcbiAgICBncm91cHM/OiBHcm91cE92ZXJ2aWV3W107XG4gICAgcHJpY2luZz86IFByaWNlU3VtbWFyeTtcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICAgIGFwcGxpZWRDc3RpY0ZpbHRlcj86IE92ZXJ2aWV3RmlsdGVyW107XG4gICAgZ3JvdXBGaWx0ZXJMaXN0PzogT3ZlcnZpZXdGaWx0ZXJbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3ZlcnZpZXdGaWx0ZXIge1xuICAgIGtleTogc3RyaW5nO1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgR3JvdXBPdmVydmlldyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBncm91cERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIGNoYXJhY3RlcmlzdGljVmFsdWVzPzogQ2hhcmFjdGVyaXN0aWNPdmVydmlld1tdO1xuICAgIHN1Ykdyb3Vwcz86IEdyb3VwT3ZlcnZpZXdbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2hhcmFjdGVyaXN0aWNPdmVydmlldyB7XG4gICAgY2hhcmFjdGVyaXN0aWM6IHN0cmluZztcbiAgICBjaGFyYWN0ZXJpc3RpY0lkPzogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgdmFsdWVJZD86IHN0cmluZztcbiAgICBwcmljZT86IFByaWNlRGV0YWlscztcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIEltYWdlIHtcbiAgICBpbWFnZVR5cGU6IEltYWdlVHlwZTtcbiAgICBmb3JtYXQ6IEltYWdlRm9ybWF0VHlwZTtcbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgYWx0VGV4dD86IHN0cmluZztcbiAgICBnYWxsZXJ5SW5kZXg/OiBudW1iZXI7XG4gIH1cblxuICBleHBvcnQgZW51bSBHcm91cFR5cGUge1xuICAgIENTVElDX0dST1VQID0gJ0NTVElDX0dST1VQJyxcbiAgICBJTlNUQU5DRSA9ICdJTlNUQU5DRScsXG4gICAgQ09ORkxJQ1RfSEVBREVSID0gJ0NPTkZMSUNUX0hFQURFUicsXG4gICAgQ09ORkxJQ1QgPSAnQ09ORkxJQ1QnLFxuICB9XG5cbiAgZXhwb3J0IGVudW0gVWlUeXBlIHtcbiAgICBTVFJJTkcgPSAnU1RSSU5HJyxcbiAgICBOVU1FUklDID0gJ05VTUVSSUMnLFxuICAgIENIRUNLX0JPWCA9ICdDSEVDS19CT1gnLFxuICAgIENIRUNLX0JPWF9MSVNUID0gJ0NIRUNLX0JPWF9MSVNUJyxcbiAgICBSQURJT19CVVRUT04gPSAnUkFESU9fQlVUVE9OJyxcbiAgICBSQURJT19CVVRUT05fQURESVRJT05BTF9JTlBVVCA9ICdSQURJT19CVVRUT05fQURESVRJT05BTF9JTlBVVCcsXG4gICAgRFJPUERPV04gPSAnRFJPUERPV04nLFxuICAgIERST1BET1dOX0FERElUSU9OQUxfSU5QVVQgPSAnRFJPUERPV05fQURESVRJT05BTF9JTlBVVCcsXG4gICAgUkVBRF9PTkxZID0gJ1JFQURfT05MWScsXG4gICAgTk9UX0lNUExFTUVOVEVEID0gJ05PVF9JTVBMRU1FTlRFRCcsXG4gICAgU0lOR0xFX1NFTEVDVElPTl9JTUFHRSA9ICdTSU5HTEVfU0VMRUNUSU9OX0lNQUdFJyxcbiAgICBNVUxUSV9TRUxFQ1RJT05fSU1BR0UgPSAnTVVMVElfU0VMRUNUSU9OX0lNQUdFJyxcbiAgfVxuXG4gIGV4cG9ydCBlbnVtIFByaWNlVHlwZSB7XG4gICAgQlVZID0gJ0JVWScsXG4gIH1cblxuICBleHBvcnQgZW51bSBJbWFnZUZvcm1hdFR5cGUge1xuICAgIFZBTFVFX0lNQUdFID0gJ1ZBTFVFX0lNQUdFJyxcbiAgICBDU1RJQ19JTUFHRSA9ICdDU1RJQ19JTUFHRScsXG4gIH1cblxuICBleHBvcnQgZW51bSBJbWFnZVR5cGUge1xuICAgIFBSSU1BUlkgPSAnUFJJTUFSWScsXG4gICAgR0FMTEVSWSA9ICdHQUxMRVJZJyxcbiAgfVxuXG4gIGV4cG9ydCBlbnVtIE92ZXJ2aWV3RmlsdGVyRW51bSB7XG4gICAgVklTSUJMRSA9ICdQUklNQVJZJyxcbiAgICBVU0VSX0lOUFVUID0gJ1VTRVJfSU5QVVQnLFxuICAgIFBSSUNFX1JFTEVWQU5UID0gJ1BSSUNFX1JFTEVWQU5UJyxcbiAgfVxufVxuIl19