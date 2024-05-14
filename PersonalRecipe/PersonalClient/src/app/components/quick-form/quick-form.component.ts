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
import { IngredientService } from 'src/app/services/ingredient.service';
import { InstructionService } from 'src/app/services/instruction.service';
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
newInstruction: Instruction = {content: ""};
creatingNewIns: boolean = false;
existingItems: Item[] = [];
newItem: Item = {name: ''};
creatingNewItem: boolean = false;
existingIngredients: Ingredient[] = [];
newIngredient: Ingredient = {itemId: 0, measurementTypeId: 0, amount: 0};
creatingNewIng: boolean = false;
measurementTypes: MeasurementType[] = [];
listParams: ListParams = {multiSearch: false, searchField: '', searchString: ''};
  constructor(
    private fb: FormBuilder,
    private rSvc: RecipeService,
    private chefSvc: ChefService,
    private iSvc: ItemService,
    private insSvc: InstructionService,
    private ingSvc: IngredientService,
    private mtSvc: MeasurementTypeService
  ){ }

  ngOnInit() {
    this.initForm();
    this.loadExistingData();
  }

  private loadExistingData(){
    forkJoin([
      this.getChefs(),
      this.getItems(),
      this.getMts(),
      this.getIngredients(),
      this.getInstructions()
    ]).subscribe(([c, i, m, ing, ins]) => {
      console.log([c, i, m])
      this.existingChefs = c;
      this.existingItems = i;
      this.measurementTypes = m;
      this.existingIngredients = ing;
      this.existingInstructions = ins;
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
  private getIngredients(){
    const params = {...this.listParams};
    return this.ingSvc.getAll(params);
  }
  private getInstructions(){
    const params = {...this.listParams};
    return this.insSvc.getAll(params);
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


  createInstruction(){
    if(this.newInstruction.content === ""){ return };
    this.insSvc.create(this.newInstruction).subscribe(
      (res: Instruction) => {
        console.log(res, "Success")
        this.addInstruction(res);
        this.loadExistingData();
      },(error: any) => {
        console.log(error)
      })
  }
  // Method to get the instructions form array
  get instructions() {
    return this.rForm.get('instructions') as FormArray;
  }

  // Method to add an instruction
  addInstruction(ins: Instruction) {
    const instructionGroup = this.fb.group({
      content: [ins.content, Validators.required],
      id: [ins.id]
    });
    this.instructions.push(instructionGroup);
  }

  createItem(i: Item){
    if(this.newItem.name === ""){ return };
    this.iSvc.create(this.newItem).subscribe(
      (res: Item) => {
        console.log(res, "Success")
        this.loadExistingData();
      },(error: any) => {
        console.log(error)
      })
  }
  selectItem(event: any){
    const id = event.target.value;
    
  }
  selectMT(event: any){
    const id = event.target.value;
    
  }

  // Method to get the ingredients form array
  get ingredients() {
    return this.rForm.get('ingredients') as FormArray;
  }

  // Method to add an ingredient 
  addIngredient(ingredient: Ingredient = {itemId: 0, measurementTypeId: 0, amount: 0}) {
    const ingredientGroup = this.fb.group({
      itemId: [ingredient.itemId, Validators.required],
      measurementTypeId: [ingredient.measurementTypeId, Validators.required],
      amount: [ingredient.amount]
    });
    this.ingredients.push(ingredientGroup);
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

  

  
}





