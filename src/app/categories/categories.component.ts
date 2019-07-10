import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  url: any;
  // tslint:disable-next-line:member-ordering
  @Output() queryChange = new EventEmitter();
  // tslint:disable-next-line:member-ordering
  queryParam: string = '';
  constructor(private catalogueService: CatalogueService,
              private route: ActivatedRoute,
              private router: Router) { }
  categories;
  currentCategorie;

  ngOnInit() {
    this.catalogueService.getRessource('/categories')
        .subscribe(data => {
          this.categories = data;
          console.log('kjkjssssssssssssssssssssssssssssss', this.categories);
        }, err => {
          console.log('error !!', err);
        });

  }

  onGetProductByCateg(cat) {
    this.currentCategorie = cat;

//    let url = cat._links.products.href;
    console.log('555555555555555555', cat.id);
  //  console.log(this.router.navigateByUrl(btoa('/produits/' + btoa(urlProduits))));
 // alert('11')
 // this.router.navigateByUrl(btoa('/produits/' + btoa(urlProduits)));
 this.router.navigateByUrl('/products/2/' + cat.id);


  }
  paramChanged() {
   this.queryParam =  this.route.snapshot.paramMap.get('idCat');
    this.queryChange.emit(this.currentCategorie);
  }

}
