import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : Product [] = []

  addToCart(product : Product){
    this.items.push(product);
    console.log(this.items)
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items=[];
    return this.items;
  }
  getShippingPrices(){
    return this.http.get<{type:string,price:Number}[]>('./assets/shipping.json')
  }
  constructor(
    private http: HttpClient
  ){}
}
