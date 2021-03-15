import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName') ingName: ElementRef;
  @ViewChild('ingredientAmt') ingAmount: ElementRef;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {}

  onItemAdd() {
    const _ingName = this.ingName.nativeElement.value;
    const _ingAmt = this.ingAmount.nativeElement.value;
    this.shoppingService.saveIngredientItem(new Ingredient(_ingName, _ingAmt));
  }
}
