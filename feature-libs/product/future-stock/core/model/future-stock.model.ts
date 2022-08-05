// export interface Stock {
// 	isValueRounded?: boolean;
// 	stockLevel?: number;
// 	stockLevelStatus?: string;
// }

// export interface FutureStock {
// 	date?: Date;
// 	formattedDate?: string;
// 	stock: Stock;
// }
import { FutureStock } from '@spartacus/core';

export interface ProductFutureStock {
  futureStocks: FutureStock[];
  productCode: string;
}

export interface ProductFutureStockList {
  productFutureStocks: FutureStock[];
}
