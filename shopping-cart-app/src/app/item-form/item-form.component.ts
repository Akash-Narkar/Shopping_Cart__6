import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {
  @Input()
  item!: Item;
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();
  @Input() selectedItemIndex: number | null | undefined; 
   
}
