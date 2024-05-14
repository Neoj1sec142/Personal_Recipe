import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Chef } from 'src/app/models/chef.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Instruction } from 'src/app/models/instruction.model';
import { Item } from 'src/app/models/item.model';
import { ListParams } from 'src/app/models/list-params.model';
import { MeasurementType } from 'src/app/models/meaurement-type.model';
import { Recipe } from 'src/app/models/recipe.model';
import { ChefService } from 'src/app/services/chef.service';
import { ItemService } from 'src/app/services/item.service';
import { MeasurementTypeService } from 'src/app/services/measurement-type.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-quick-form',
  templateUrl: './quick-form.component.html',
  styleUrls: ['./quick-form.component.css']
})
export class QuickFormComponent implements OnInit {
rForm!: FormGroup;
existingChefs: Chef[] = [];
existingInstructions: Instruction[] = [];
existingItems: Item[] = [];
existingIngredients: Ingredient[] = [];
measurementTypes: MeasurementType[] = [];
listParams: ListParams = {multiSearch: false, searchField: '', searchString: ''};
  constructor(
    private fb: FormBuilder,
    private rSvc: RecipeService,
    private chefSvc: ChefService,
    private iSvc: ItemService,
    private mtSvc: MeasurementTypeService
  ){ }

  ngOnInit() {
    this.initForm();
  }

  private loadExistingData(){
    forkJoin([
      this.getChefs(),
      this.getItems(),
      this.getMts()
    ]).subscribe(([c, i, m]) => {
      console.log([c, i, m])
      this.existingChefs = c;
      this.existingItems = i;
      this.measurementTypes = m;
    })
  }

  private getChefs(){
    const params = {...this.listParams};
    return this.chefSvc.getAll(params);
  }
  private getItems(){
    const params = {...this.listParams};
    return this.iSvc.getAll(params);
  }
  private getMts(){
    const params = {...this.listParams};
    return this.mtSvc.getAll(params);
  }

  private initForm(){
    this.rForm = this.fb.group({
      'title': ['', Validators.required],
      'description': [''],
      'instructions': this.fb.array([]),
      'ingredients': this.fb.array([]),
      'chefId': [0],
      'chefName': ['']
    })
  }
addInstruction() {
  const instructionGroup = this.fb.group({
    content: ['', Validators.required]
  });
  this.instructions.push(instructionGroup);
}

addIngredient() {
  const ingredientGroup = this.fb.group({
    itemId: ['', Validators.required],
    newItem: [false],
    newItemName: [''],
    measurementTypeId: ['', Validators.required],
    amount: ['', Validators.required]
  });
  this.ingredients.push(ingredientGroup);
}

checkIfNewItem(index: number) {
  const item = this.ingredients.at(index);
  item.get('newItem')?.setValue(item.get('itemId')?.value === 0);
}

checkIfNewInstruction(index: number) {
  const instruction = this.instructions.at(index);
  instruction.get('newContent')?.setValue(instruction.get('content')?.value === 'new');
}

get instructions() {
  return this.rForm.get('instructions') as FormArray;
}

get ingredients() {
  return this.rForm.get('ingredients') as FormArray;
}

onSubmit() {
  console.log(this.rForm.value)

  // this.rSvc.quickCreate(this.rForm.value).subscribe(
  //   res => console.log(res, "Success"),
  //   error => console.log(error, "Error")
  // );
}



  // onSubmit(){
  //   this.rSvc.quickCreate(this.rForm.value).subscribe(
  //     (res: Recipe) => {
  //       console.log(res, "Success")
  //     }, (error: any) => {console.log(error, "Error")})
  // }

  // // Method to get the instructions form array
  // get instructions() {
  //   return this.rForm.get('instructions') as FormArray;
  // }

  // // Method to add an instruction
  // addInstruction(instructionContent: string = '') {
  //   const instructionGroup = this.fb.group({
  //     content: [instructionContent, Validators.required]
  //   });
  //   this.instructions.push(instructionGroup);
  // }

  // // Method to get the ingredients form array
  // get ingredients() {
  //   return this.rForm.get('ingredients') as FormArray;
  // }

  // // Method to add an ingredient 
  // addIngredient(itemId: number, mTypeId: number, amount: number, item?: Item, mType?: MeasurementType) {
  //   const ingredientGroup = this.fb.group({
  //     itemId: [itemId, Validators.required],
  //     item: this.fb.group({
  //       name: [item?.name],
  //       description: [item?.description]
  //     }),
  //     measurementTypeId: [mTypeId, Validators.required],
  //     measurementType: this.fb.group({
  //       name: [mType?.name],
  //       description: [mType?.description]
  //     }),
  //     amount: [amount]
  //   });
  //   this.ingredients.push(ingredientGroup);
  // }
}





