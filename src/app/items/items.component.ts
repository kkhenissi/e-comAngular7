import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any;

  constructor(private catalogueService: CatalogueService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
  
    console.log('888888888888888888888888888888', this.route.snapshot.params.p1);
  //  let p1 = this.route.snapshot.params.p1;
  //  if ( p1 === 1) {
  //    alert('yes')
      this.getItems('/products/search/selectedProducts');
    // tslint:disable-next-line:align
  //  } else if  ( p1 === 2 ) {
  //    alert('oui')
  //    let idCat = this.route.snapshot.params.p2;
  //    this.getItems('/categories/' + idCat + '/products');

  //    }
  }
  getItems(url) {
    this.catalogueService.getRessource(url)
         .subscribe(data => {
           this.items = data;
         }, err => {
           console.log(err);
         });
  }

}
