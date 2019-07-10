import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from './services/catalogue.service';
import { Product } from './shared/models/product-model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'e-comAngular7';
  items: any;

  constructor( private route: ActivatedRoute,
               private catalogueService: CatalogueService) {

  }

  ngOnInit(): void {
    console.log('888888888888888888888888888888', this.route.snapshot.params.idCat);
    let p1 = this.route.snapshot.params.p1;
    if ( p1 === 1) {
      alert('yes')
      this.getItems('/products/search/selectedProducts');
    // tslint:disable-next-line:align
    } else if  ( p1 === 2 ) {
      alert('oui')
      let idCat = this.route.snapshot.params.p2;
      this.getItems('/categories/' + idCat + '/products');

      }
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
