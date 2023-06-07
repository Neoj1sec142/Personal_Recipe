import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch:"full" },
  { path: 'new-recipe', component: RecipeFormComponent },
  { path: 'new-ingredient', component: IngredientFormComponent },
  { path: 'recipe/:id', component: RecipeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
