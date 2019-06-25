import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  onSaveProduct(data: any) {
    console.log('-----------+++++++++++++++++++------------>', data);
    this.productService.saveRessource(this.productService.host + '/products', data.value)
        .subscribe(data => {
            console.log('----------------------->', data);
        }, err => {
          console.log(err);
        });

  }

}
