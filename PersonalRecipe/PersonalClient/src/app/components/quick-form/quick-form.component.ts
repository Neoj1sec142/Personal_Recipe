import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-quick-form',
  templateUrl: './quick-form.component.html',
  styleUrls: ['./quick-form.component.css']
})
export class QuickFormComponent implements OnInit {
rForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private rSvc: RecipeService
  ){ }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.rForm = this.fb.group({
      'title': ['', Validators.required],
      'description': [''],
      'instructions': this.fb.array([]),
      'ingredients': this.fb.array([]),
      'chefId': [0],
      'chefName': ['']
    })
  }

  // Method to get the instructions form array
  get instructions() {
    return this.rForm.get('instructions') as FormArray;
  }

  // Method to add an instruction
  addInstruction(instructionContent: string = '') {
    const instructionGroup = this.fb.group({
      content: [instructionContent, Validators.required]
    });
    this.instructions.push(instructionGroup);
  }

  // Method to get the ingredients form array
  get ingredients() {
    return this.rForm.get('ingredients') as FormArray;
  }

  // Method to add an ingredient
  addIngredient(name: string = '', quantity: string = '') {
    const ingredientGroup = this.fb.group({
      name: [name, Validators.required],
      quantity: [quantity, Validators.required]
    });
    this.ingredients.push(ingredientGroup);
  }
}
