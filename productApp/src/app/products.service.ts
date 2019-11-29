import { Injectable } from '@angular/core';
import {IProduct} from './products/product.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  


  getProducts(){
  return this.http.get("http://localhost:3000/products");
   
  }
  addProducts(item){
return this.http.post("http://localhost:3000/insert",{'product':item});
  }

}
