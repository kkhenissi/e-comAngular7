import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-good-deal',
  templateUrl: './good-deal.component.html',
  styleUrls: ['./good-deal.component.css']
})
export class GoodDealComponent implements OnInit, OnChanges {


 
  categories;
  items: any;
  category: string;
  currentCategorie;

  constructor(private catalogueService: CatalogueService,
              private route: ActivatedRoute,
              private router: Router) { }


  ngOnChanges(changes: SimpleChanges): void {
    
      }
  ngOnInit() {
     
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('id');
      console.log('rrrrrrttrrtrtrtrtrtrrtrtrtrtrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', this.categories)
   });
     
    
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
     this.categories = this.catalogueService.getRessource('/categories')
          .subscribe(data => {
            this.categories = data;
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
  newIdcatParam(idCat) {
    console.log('3333333333333333333333333333', idCat);
  }


  onGetProductByCateg(cat) {

    this.currentCategorie = cat;

//    let url = cat._links.products.href;
    console.log('555555555tttttttttt555555555', cat.id);
  //  console.log(this.router.navigateByUrl(btoa('/produits/' + btoa(urlProduits))));
 // alert('11')
 // this.router.navigateByUrl(btoa('/produits/' + btoa(urlProduits)));
 this.router.navigateByUrl('/categories/' + cat.id + '/products' );
 // products/search/selectedProducts


  }

}
