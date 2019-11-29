import { Component, OnInit } from '@angular/core';
import {IProduct} from '../products/product.model';
import {ProductsService} from '../products.service';
 
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  ProductItem=new IProduct(null,null,null,null,null,null,null,null);

  constructor(private productObject:ProductsService) { }

  ngOnInit() {
  }
  onSubmit()
{
  
this.productObject.addProducts(this.ProductItem)
.subscribe((data)=>{
console.log('data:'+JSON.stringify(data))
  alert(JSON.stringify(data));
})
}
}
