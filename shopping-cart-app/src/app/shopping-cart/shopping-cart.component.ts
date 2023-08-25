import { Component } from '@angular/core';
// created here interface
export interface Item {
  name: string;
  price: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  items: Item[] = [];
  selectedIdx: number | null = null;
  isAddingItem = false;
  newItem: Item = { name: '', price: 0 };

  addItem() {
    this.isAddingItem = true;
  }

  editItem(index: number) {
    this.selectedIdx = index;
    this.newItem = { ...this.items[index] };
    this.isAddingItem = true;
  }
  cancelAddItem() {
    this.isAddingItem = false;
    this.selectedIdx = null;
    this.newItem = { name: '', price: 0 };
  }

  saveItem() {
    if (this.selectedIdx !== null) {
      this.items[this.selectedIdx] = this.newItem;
    } else {
      this.items.push(this.newItem);
    }
    this.cancelAddItem();
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.cancelAddItem();
  }


  
}
