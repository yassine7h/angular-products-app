import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Category} from "../models/Category";
import {CategoriesService} from "../services/categories.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})
export class AddProductComponent implements OnInit{

  productForm!: FormGroup
  categoriesList: Array<Category> =[]

  constructor(
    private productsService:ProductsService,
    private categoriesService:CategoriesService,
    private formBuilder: FormBuilder
  )
  {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe({
      next:(data)=>{
        this.categoriesList=data;
      }
    })

    this.productForm=this.formBuilder.group({
      name:this.formBuilder.control(''),
      price:this.formBuilder.control(0.0),
      category:this.formBuilder.control(1),
    })
  }

  saveProduct(){
    this.productsService.saveProduct(this.productForm.value).subscribe({
      next:(data)=>{
        alert("Product added with id="+data.id)
      },
      error:()=>{
        alert("Error!")
      }
    })
  }

}
