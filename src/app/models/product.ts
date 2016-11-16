import { Price } from './price';
export class Product {
  code: string;
  name: string;
  prices: Map<String,Price>;
}

