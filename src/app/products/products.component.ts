import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'app/services/catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$;

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
   this.products$ =  this.catalogueService.getAllProducts();
   console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', this.products$);
}
}
