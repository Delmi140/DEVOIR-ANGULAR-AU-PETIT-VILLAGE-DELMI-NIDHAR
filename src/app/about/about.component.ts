import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})


export class AboutComponent  implements OnInit {

  
  apropos: any[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.apropos = this.productsService.apropos
  }
  

}
