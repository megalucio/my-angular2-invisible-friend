import { Price } from './../../models/price';
import { Observable } from 'rxjs/Observable';
import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'cart',
  styleUrls: ['./cart.css'],
  templateUrl: './cart.html',
})
export class Cart {

  products: Product[] = new Array();
  total: number = 0;
  
  testProduct: Product = new Product();
  testPrices: Map<String, Price> = new Map<String, Price>();
  testPrice: Price = new Price();

  constructor() { 
      this.testPrice.price = 100; 

      this.testPrices.set("testCode", this.testPrice);

      this.testProduct.code = "1111";
      this.testProduct.name = "falete";
      this.testProduct.prices = this.testPrices;
  }

  ngOnInit(): void {

  }

  addProduct(product: Product){
      this.products.push(product);
      console.log(Object.keys(product.prices)[0]);
      this.total = this.total + product.prices[Object.keys(product.prices)[0]];
  }

}
