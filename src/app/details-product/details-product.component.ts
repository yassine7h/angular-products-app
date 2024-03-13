import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../models/Product";

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html'
})
export class DetailsProductComponent {

  @Input({required: true}) product!: Product
  @Input() isVisible: boolean = false
  @Output() hideDetails: EventEmitter<boolean> = new EventEmitter()
  hide(){
    this.hideDetails.emit(false)
  }
}
