import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDisplayComponent } from './components/main-display/main-display.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';

const routes: Routes = [
  { path: '', component: MainDisplayComponent, pathMatch:"full" },
  { path: 'home', component: CreateRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
