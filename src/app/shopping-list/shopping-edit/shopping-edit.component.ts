import {
  Component,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;

  subscribtion: Subscription;
  editMode = false;
  edittedItemIndex: number;
  edittedItem: Ingredient;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscribtion = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.edittedItemIndex = index;
        this.editMode = true;
        this.edittedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.edittedItem.name,
          amount: this.edittedItem.amount,
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.edittedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
