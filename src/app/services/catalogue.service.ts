import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/models/product-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host = 'http://localhost:8181';
  constructor(private httpClient: HttpClient) {
  }

public getProducts(page: number, size: number): any {
 return  this.httpClient.get(this.host + '/products?page=' + page + '&size=' + size);
}

public getProductBymotClé(mc: string, page: number, size: number): any {
   return this.httpClient.get(this.host + '/products/search/byNamePage?mc=' + mc + '&page=' + page + '&size=' + size);

}

public deleteRessource(url) {
   return this.httpClient.delete(url);
}

public saveRessource(url, data): Observable<Product> {
  return this.httpClient.post<Product>(url, data);
}
}
