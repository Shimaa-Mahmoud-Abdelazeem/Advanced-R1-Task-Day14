import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APiProducts } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://fakestoreapi.com/products';
  constructor( private http :HttpClient) { }
  getdatafromapi():Observable< APiProducts[]  >   {

    return this.http.get<APiProducts[]>(this.apiUrl);
  }
  getprouduct():Observable< APiProducts[]  >   {
    return this.http.get<APiProducts[]>(this.apiUrl);
  }


}
