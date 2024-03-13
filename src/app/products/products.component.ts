import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {CategoriesService} from "../services/categories.service";
import {Category} from "../models/Category";
import {Product} from "../models/Product";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit{

  productsList: Array<Product> =[]
  categoriesList: Array<Category> =[]

  selectedProduct! : Product
  showDetails: boolean = false

  constructor(
    private productsService:ProductsService,
    private categoriesService:CategoriesService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next:(data)=>{
        this.productsList=data;
        this.categoriesService.getCategories().subscribe({
          next:(data)=>{
            this.categoriesList=data;
            this.productsList=this.productsList.map(product=>{
              const idCategory=product.category
              const nameCategory =this.categoriesList.find(category=>category.id===idCategory)?.name
              if(nameCategory) product.category=nameCategory
              return product
            })
          }
        })
      }
    })
  }

  deleteProduct(id: number):void {
    if(confirm(`Are you sure you want to delete the product ID=${id} ?`)){
      this.productsService.deleteProduct(id).subscribe({
        next:()=>{
          this.productsList = this.productsList.filter(product => product.id !== id);
        }
      })
    }
  }
  showDetailsProduct(product: Product):void{
    this.selectedProduct=product
    this.showDetails = true
  }
}
