import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;

  constructor() { }

  ngOnInit(): void {
    this.products=[
      {
        id:1,
        name:"Computer",
        price:7892
      },   {
        id:2,
        name:"Printer",
        price:700
      },   {
        id:3,
        name:"Smartphone",
        price:9800
      },
    ]
  }

}
