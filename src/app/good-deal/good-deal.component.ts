import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-good-deal',
  templateUrl: './good-deal.component.html',
  styleUrls: ['./good-deal.component.css']
})
export class GoodDealComponent implements OnInit {
  categories$;
  items: any;

  constructor(private catalogueService: CatalogueService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
 //   alert('1')
    
    let p1 = this.route.snapshot.params.p1;
    console.log('888888888888888888888888888888', this.route.snapshot.params);
    if ( p1 === 1) {
      alert('yes')
      this.getItems('/products/search/selectedProducts');
    // tslint:disable-next-line:align
    } else if  ( p1 === 2 ) {
      alert('oui')
      let idCat = this.route.snapshot.params.p2;
      this.getItems('/categories/' + idCat + '/products');

  }
    this.getCategories();
}
  getCategories() {
     this.categories$ = this.catalogueService.getRessource('/categories')
          .subscribe(data => {
            this.categories$ = data;
   //         console.log('777777777777777777', this.categories)
          }, err => {
            console.log('err');
          });
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
