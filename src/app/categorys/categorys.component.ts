import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'app/services/catalogue.service';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css']
})
export class CategorysComponent implements OnInit {
  categorys$;

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
   this.categorys$ =  this.catalogueService.getAllCategorys();
   console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', this.categorys$);
}
}
