import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  marked = false;
  theCheckbox = false;

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
  }

  onSaveProduct(data: any) {
    console.log('-----------+++++++++++++++++++------------>', data.value);
    this.catalogueService.saveRessource(this.catalogueService.host + '/products', data.value)
        .subscribe(data => {
            console.log('----------------------->', data);
        }, err => {
          console.log(err);
        });

  }

  toggleVisibility(e) {
    this.marked = e.target.checked;
  }

}
