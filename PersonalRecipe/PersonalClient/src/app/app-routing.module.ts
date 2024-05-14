import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { QuickFormComponent } from './components/quick-form/quick-form.component';
import { CheifCreateComponent } from './components/data-pages/chefs/cheif-create/cheif-create.component';
import { CheifListComponent } from './components/data-pages/chefs/cheif-list/cheif-list.component';
import { CheifEditComponent } from './components/data-pages/chefs/cheif-edit/cheif-edit.component';
import { ItemsCreateComponent } from './components/data-pages/items/items-create/items-create.component';
import { ItemsListComponent } from './components/data-pages/items/items-list/items-list.component';
import { ItemsEditComponent } from './components/data-pages/items/items-edit/items-edit.component';
import { IngredientCreateComponent } from './components/data-pages/ingredients/ingredient-create/ingredient-create.component';
import { IngredientListComponent } from './components/data-pages/ingredients/ingredient-list/ingredient-list.component';
import { IngredientEditComponent } from './components/data-pages/ingredients/ingredient-edit/ingredient-edit.component';
import { InstructionsCreateComponent } from './components/data-pages/instructions/instructions-create/instructions-create.component';
import { InstructionsListComponent } from './components/data-pages/instructions/instructions-list/instructions-list.component';
import { InstructionsEditComponent } from './components/data-pages/instructions/instructions-edit/instructions-edit.component';
import { MeasurementTypeCreateComponent } from './components/data-pages/measurement-types/measurement-type-create/measurement-type-create.component';
import { MeasurementTypeListComponent } from './components/data-pages/measurement-types/measurement-type-list/measurement-type-list.component';
import { MeasurementTypeEditComponent } from './components/data-pages/measurement-types/measurement-type-edit/measurement-type-edit.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'quick', component: QuickFormComponent },
  { path: 'chefs/new', component: CheifCreateComponent },
  { path: 'chefs', component: CheifListComponent },
  { path: 'chefs/:display', component: CheifEditComponent },
  { path: 'items/new', component: ItemsCreateComponent },
  { path: 'items', component: ItemsListComponent },
  { path: 'items/:display', component: ItemsEditComponent },
  { path: 'ingredients/new', component: IngredientCreateComponent },
  { path: 'ingredients', component: IngredientListComponent },
  { path: 'ingredients/:display', component: IngredientEditComponent },
  { path: 'instructions/new', component: InstructionsCreateComponent },
  { path: 'instructions', component: InstructionsListComponent },
  { path: 'instructions/:display', component: InstructionsEditComponent },
  { path: 'measurements/new', component: MeasurementTypeCreateComponent },
  { path: 'measurements', component: MeasurementTypeListComponent },
  { path: 'measurements/:display', component: MeasurementTypeEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
