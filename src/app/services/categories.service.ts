import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient:HttpClient) { }

  getCategories() : Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>(
      "http://localhost:8000/api/categories",
    )
  }
  deleteCategory(id : number) : Observable<any>{
    return this.httpClient.delete(`http://localhost:8000/api/category/${id}`)
  }

}
