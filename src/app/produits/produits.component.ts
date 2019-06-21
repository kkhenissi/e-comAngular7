import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../shared/models/product-model';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  products: any;
  size = 5;
  // tslint:disable-next-line:no-inferrable-types
  currentPage: number = 0;
  // tslint:disable-next-line:no-inferrable-types
  currentKeyword: string = '';
  // tslint:disable-next-line:no-inferrable-types
  totalPages: number = 0;
  public pages: Array<number>;

  constructor(private productService: ProductService) { }

  ngOnInit() {

  }
onGetproducts() {
   this.products = this.productService.getProducts(this.currentPage, this.size)
   .subscribe(data => {
    this.totalPages = data['page'].totalPages;
    this.pages = new Array(this.totalPages);
    this.products = data;
    console.log('====================================>', this.products);
    console.log('++++++++++++++++++++++++++++++++++++>', this.totalPages);
  }, err => {
    console.log(err);
  });

}

onPageProduct(i) {
  this.currentPage = i;
  this.chercherProduits();

}

onChercher(form: any) {
  this.currentPage = 0;
  this.currentKeyword = form.keyword;
  this.chercherProduits();
}

chercherProduits() {
//  this.currentKeyword = form.keyword;
  this.productService.getProductBymotClé(this.currentKeyword, this.currentPage, this.size)
                .subscribe(data => {
                  this.totalPages = data['page'].totalPages;
                  this.pages = new Array(this.totalPages);
                  this.products = data;
                  console.log('====================================>', this.products);
                  console.log('++++++++++++++++++++++++++++++++++++>', this.totalPages);
                }, err => {
                  console.log(err);
                });
}

onDeleteProduct(p) {
  const conf = confirm('Etes vous sûre de vouloire supprimer cette article ??');
  if (conf) {
    this.productService.deleteRessource(p._links.self.href)
         .subscribe(data => {
              this.chercherProduits();
         }, err => {
           console.log(err);
         });
  }

}

}
