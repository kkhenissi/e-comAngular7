import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any;

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
    this.getItems();
  }
  getItems() {
    this.catalogueService.getRessource("/products/search/selectedProducts")
         .subscribe(data => {
           this.items = data;
         }, err => {
           console.log(err);
         })
  }

}
