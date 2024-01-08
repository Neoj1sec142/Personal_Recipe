import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, concatMap, forkJoin } from 'rxjs';
import { FoodStyle } from 'src/app/models/food-style.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Instruction } from 'src/app/models/instruction.model';
import { Recipe } from 'src/app/models/recipe.model';
import { FoodStyleService } from 'src/app/services/food-style.service';
import { IngredientService } from 'src/app/services/ingredient.service';
import { InstructionService } from 'src/app/services/instruction.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  recipe: Recipe = {
    name: "", 
    description: "",
    instructions: [],
    ingredients: [],
    style: {name: ""}
  };
  ingredientList: Ingredient[] = [];
  instructionList: Instruction[] = [];
  styleList: FoodStyle[] = [];
  warning: string = ""
  displayedColumns: string[] = ['name', 'description', 'style'];
  constructor(
    private ingredientSvc: IngredientService,
    private instructionSvc: InstructionService,
    private styleSvc: FoodStyleService,
    private recipeSvc: RecipeService
  ) { }

  ngOnInit() { this.pageInit(); };

  private pageInit(){
    this.loadFormData();
  }

  addIngredient(event: MatAutocompleteSelectedEvent) {
    const selectedIngredient: Ingredient = event.option.value;
    if (!this.recipe.ingredients?.includes(selectedIngredient)) {
      this.recipe.ingredients?.push(selectedIngredient);
    }
  }
  addIngredientManual(ingredientInput: HTMLInputElement){
    const newIngredient: Ingredient = { name: ingredientInput.value }
    if (!this.recipe.ingredients?.find(i => i.name.toLowerCase() == newIngredient.name.toLowerCase())) {
      this.recipe.ingredients?.push(newIngredient);
      ingredientInput.value = '';
    }else{
      this.warning = "This ingredient already in recipe"
      ingredientInput.value = '';
    }
  }

  addInstruction(event: MatAutocompleteSelectedEvent) {
    const selectedInstruction: Instruction = event.option.value;
    if (!this.recipe.instructions?.includes(selectedInstruction)) {
      this.recipe.instructions?.push(selectedInstruction);
    }
  }
  addStyleManual(ingredientInput: HTMLInputElement){

  }
  addStyle(event: MatAutocompleteSelectedEvent){}

  createRecipeMap() {
    console.log("HERE", this.recipe)
    const observables: Observable<any>[] = [
      ...this.createMissingItems(this.recipe.instructions, this.instructionList, (inst) => this.instructionSvc.create(inst)),
      ...this.createMissingItems(this.recipe.ingredients, this.ingredientList, (ing) => this.ingredientSvc.create(ing))
    ];
    if (!this.styleList.find(s => s.name === this.recipe.style.name)) {
      observables.push(this.styleSvc.create(this.recipe.style));
    }
    return forkJoin(observables).pipe(
      concatMap(() => this.recipeSvc.create(this.recipe))
    );
  }
  
  private createMissingItems<T extends { name?: string, step?: string }>(
    items: T[] | undefined, 
    existingItems: T[], 
    createFn: (item: T) => Observable<any>
  ): Observable<any>[] {
    return items?.filter(item => !existingItems.find(i => i.name === item.name || i.step === item.step))
                .map(createFn) ?? [];
  }

  private loadFormData(){
    forkJoin([
      this.ingredientSvc.getAll(),
      this.instructionSvc.getAll(),
      this.styleSvc.getAll(),
    ]).subscribe(([ings, insts, styles]) => {
      console.log([ings, insts, styles], "Success")
      this.ingredientList = ings;
      this.instructionList = insts;
      this.styleList = styles;
    })
  }


  // createRecipeMap(){
  //   const observables: Observable<any>[] = [];
  //   if(!this.styleList.find(s => s.name === this.recipe.style.name)){
  //     observables.push(this.styleSvc.create(this.recipe.style));
  //   }
  //   this.recipe.instuctions?.forEach((inst: Instruction) => {
  //     if(!this.instructionList.find(i => i.step === inst.step)){
  //       observables.push(this.instructionSvc.create(inst))
  //     }
  //   })
  //   this.recipe.ingredients?.forEach((ing: Ingredient) => {
  //     if(!this.ingredientList.find(i => i.name === ing.name)){
  //       observables.push(this.ingredientSvc.create(ing))
  //     }
  //   })
  //   return forkJoin(observables).pipe(
  //     concatMap(() => this.recipeSvc.create(this.recipe))
  //   );
  // }
}
