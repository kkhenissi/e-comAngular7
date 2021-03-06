import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/models/product-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host = 'http://localhost:8781';
  constructor(private httpClient: HttpClient) {
  }

  public getRessource(url) {
    return this.httpClient.get(this.host + url);

  }

public getProducts(page: number, size: number): any {
 return  this.httpClient.get(this.host + '/products?page=' + page + '&size=' + size);
}

public getAllProducts(): any {
  return  this.httpClient.get(this.host + '/products');
 }

 public getAllCategorys(): any {
   return this.httpClient.get(this.host + '/categorys');
 }

public getProductBymotClé(mc: string, page: number, size: number): any {
   return this.httpClient.get(this.host + '/products/search/byNamePage?mc=' + mc + '&page=' + page + '&size=' + size);

}

public deleteRessource(url) {
   return this.httpClient.delete(url);
}

public saveRessource(url, data) {
  return this.httpClient.post(url, data);
}
}
