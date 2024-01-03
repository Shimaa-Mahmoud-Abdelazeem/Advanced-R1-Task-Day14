import { Component, inject } from '@angular/core';
import { ProductsService } from '../products.service';
import { APiProducts } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
varapi!:APiProducts [];
apiprouducts!:APiProducts[];


productserve:ProductsService=inject(ProductsService);
constructor(){
  this.productserve.getdatafromapi().subscribe(    ( dat:APiProducts[  ]    ) => { this.varapi = dat   }    );
}

addToCart(item:any){
  console.log('item added to cart ', item)
}
showDetails(item:any){
  console.log('show details for ', item)
}
}

