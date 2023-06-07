import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  recipeForm!: FormGroup;

  constructor(private fb: FormBuilder, private recipeService: RecipeService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      instructions: ['', Validators.required],
      preparationTime: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.recipeForm.invalid) {
      return;
    }

    const newRecipe: Recipe = {
      title: this.recipeForm.value.title,
      description: this.recipeForm.value.description,
      instructions: this.recipeForm.value.instructions,
      preparationTime: this.recipeForm.value.preparationTime
    };

    this.recipeService.createRecipe(newRecipe).subscribe(
      (createdRecipe: any) => {
        
        console.log('Recipe created:', createdRecipe);
      },
      (error: any) => {
        
        console.log(error)
      })
    }
}
