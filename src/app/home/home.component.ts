import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit {

  Filtername: string ='';
  products: any[] = [];
  SortDirection = 'asc';
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.products
  }

  onSortDirection() {
    if(this.SortDirection === 'desc'){
      this.SortDirection = 'asc';
    }else {
      this.SortDirection = 'desc';
    }
  }
  

}
