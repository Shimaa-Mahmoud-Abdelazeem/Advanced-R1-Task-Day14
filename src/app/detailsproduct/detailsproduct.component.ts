import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APiProducts } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrls: ['./detailsproduct.component.css']
})
export class DetailsproductComponent {
  varapi!:APiProducts [];
apiprouducts!:APiProducts[];


productserve:ProductsService=inject(ProductsService);
  route: ActivatedRoute = inject(ActivatedRoute);

  product :APiProducts |undefined;

  constructor() {
    const productid = Number(this.route.snapshot.params['id']);

  }
}
