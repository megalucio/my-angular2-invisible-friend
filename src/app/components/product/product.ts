import { Component, Input } from '@angular/core';
import { Product } from './../../models/product';

@Component({
  selector: 'product',
  styleUrls: ['./product.css'],
  templateUrl: './product.html',
  providers: []
})

export class ProductComponent {

  @Input()
  product: Product; 
                   
}
