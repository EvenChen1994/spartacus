/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { createFeatureSelector } from '@ngrx/store';
import { PICKUP_LOCATIONS_FEATURE, } from '../pickup-location-state';
import { PICKUP_OPTION_FEATURE, } from '../pickup-option-state';
import { STOCK_FEATURE } from '../stock-state';
export const getPickupLocationsState = createFeatureSelector(PICKUP_LOCATIONS_FEATURE);
export const getPickupOptionState = createFeatureSelector(PICKUP_OPTION_FEATURE);
export const getStockState = createFeatureSelector(STOCK_FEATURE);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvcGlja3VwLWluLXN0b3JlL2NvcmUvc3RvcmUvc2VsZWN0b3JzL2ZlYXR1cmUuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUscUJBQXFCLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQ3RFLE9BQU8sRUFFTCx3QkFBd0IsR0FFekIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBRUwscUJBQXFCLEdBRXRCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUE4QixhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FHaEMscUJBQXFCLENBQXVCLHdCQUF3QixDQUFDLENBQUM7QUFFMUUsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBRzdCLHFCQUFxQixDQUFvQixxQkFBcUIsQ0FBQyxDQUFDO0FBRXBFLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FDeEIscUJBQXFCLENBQWEsYUFBYSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBQaWNrdXBMb2NhdGlvbnNTdGF0ZSxcbiAgUElDS1VQX0xPQ0FUSU9OU19GRUFUVVJFLFxuICBTdGF0ZVdpdGhQaWNrdXBMb2NhdGlvbnMsXG59IGZyb20gJy4uL3BpY2t1cC1sb2NhdGlvbi1zdGF0ZSc7XG5pbXBvcnQge1xuICBQaWNrdXBPcHRpb25TdGF0ZSxcbiAgUElDS1VQX09QVElPTl9GRUFUVVJFLFxuICBTdGF0ZVdpdGhQaWNrdXBPcHRpb24sXG59IGZyb20gJy4uL3BpY2t1cC1vcHRpb24tc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoU3RvY2ssIFN0b2NrU3RhdGUsIFNUT0NLX0ZFQVRVUkUgfSBmcm9tICcuLi9zdG9jay1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRQaWNrdXBMb2NhdGlvbnNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoUGlja3VwTG9jYXRpb25zLFxuICBQaWNrdXBMb2NhdGlvbnNTdGF0ZVxuPiA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxQaWNrdXBMb2NhdGlvbnNTdGF0ZT4oUElDS1VQX0xPQ0FUSU9OU19GRUFUVVJFKTtcblxuZXhwb3J0IGNvbnN0IGdldFBpY2t1cE9wdGlvblN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhQaWNrdXBPcHRpb24sXG4gIFBpY2t1cE9wdGlvblN0YXRlXG4+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPFBpY2t1cE9wdGlvblN0YXRlPihQSUNLVVBfT1BUSU9OX0ZFQVRVUkUpO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RvY2tTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhTdG9jaywgU3RvY2tTdGF0ZT4gPVxuICBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8U3RvY2tTdGF0ZT4oU1RPQ0tfRkVBVFVSRSk7XG4iXX0=