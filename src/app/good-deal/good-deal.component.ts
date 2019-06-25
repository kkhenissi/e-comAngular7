import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';


@Component({
  selector: 'app-good-deal',
  templateUrl: './good-deal.component.html',
  styleUrls: ['./good-deal.component.css']
})
export class GoodDealComponent implements OnInit {
  categories: any;

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
    this.getCateories();
  }
  getCateories() {
    this.catalogueService.getRessource("/categories")
         .subscribe(data => {
           this.categories = data;
         }, err => {
           console.log('err');
         })
  }

}
