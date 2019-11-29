import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productObject: ProductsService) { }
  ngOnInit() {
    this.productObject.getProducts()
      .subscribe((data) => { this.products = JSON.parse(JSON.stringify(data)) });
  }
  products: IProduct[];
  flag: boolean = false;
  buttonText: String = "Show Image"
  buttonClick() {
    if (!this.flag) {
      this.flag = true;
      this.buttonText = "Hide Image";
    }
    else {
      this.flag = false;
      this.buttonText = "Show Image";
    }
  }

}
