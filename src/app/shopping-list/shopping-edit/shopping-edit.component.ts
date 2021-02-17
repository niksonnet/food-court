import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName') ingName: ElementRef;
  @ViewChild('ingredientAmt') ingAmount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onItemAdd() {
    const _ingName = this.ingName.nativeElement.value;
    const _ingAmt = this.ingAmount.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient(_ingName, _ingAmt));
  }
}
