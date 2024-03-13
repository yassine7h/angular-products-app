import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient:HttpClient) { }
  getProducts() : Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      "http://localhost:8000/api/products",
    )
  }
  saveProduct(product : Product) : Observable<Product>{
    return  this.httpClient.post<Product>(
      "http://localhost:8000/api/products/",product
    )
  }
  deleteProduct(id : number) : Observable<any>{
    return this.httpClient.delete(`http://localhost:8000/api/products/${id}`)
  }
}
