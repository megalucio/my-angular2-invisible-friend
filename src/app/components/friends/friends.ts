import { Cart } from './../cart/cart';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'friends',
  styleUrls: ['./friends.css'],
  templateUrl: './friends.html'
})
export class Friends {

  emails: String[] = [];

  add(email: string) {
    this.emails.push(email);
  }

                   
}
