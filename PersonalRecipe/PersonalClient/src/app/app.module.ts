import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { QuickFormComponent } from './components/quick-form/quick-form.component';
import { CheifCreateComponent } from './components/data-pages/chefs/cheif-create/cheif-create.component';
import { CheifListComponent } from './components/data-pages/chefs/cheif-list/cheif-list.component';
import { CheifEditComponent } from './components/data-pages/chefs/cheif-edit/cheif-edit.component';
import { IngredientCreateComponent } from './components/data-pages/ingredients/ingredient-create/ingredient-create.component';
import { IngredientEditComponent } from './components/data-pages/ingredients/ingredient-edit/ingredient-edit.component';
import { IngredientListComponent } from './components/data-pages/ingredients/ingredient-list/ingredient-list.component';
import { ItemsCreateComponent } from './components/data-pages/items/items-create/items-create.component';
import { ItemsEditComponent } from './components/data-pages/items/items-edit/items-edit.component';
import { ItemsListComponent } from './components/data-pages/items/items-list/items-list.component';
import { InstructionsCreateComponent } from './components/data-pages/instructions/instructions-create/instructions-create.component';
import { InstructionsEditComponent } from './components/data-pages/instructions/instructions-edit/instructions-edit.component';
import { InstructionsListComponent } from './components/data-pages/instructions/instructions-list/instructions-list.component';
import { MeasurementTypeCreateComponent } from './components/data-pages/measurement-types/measurement-type-create/measurement-type-create.component';
import { MeasurementTypeEditComponent } from './components/data-pages/measurement-types/measurement-type-edit/measurement-type-edit.component';
import { MeasurementTypeListComponent } from './components/data-pages/measurement-types/measurement-type-list/measurement-type-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    QuickFormComponent,
    NavBarComponent,
    CheifCreateComponent,
    CheifListComponent,
    CheifEditComponent,
    IngredientCreateComponent,
    IngredientEditComponent,
    IngredientListComponent,
    ItemsCreateComponent,
    ItemsEditComponent,
    ItemsListComponent,
    InstructionsCreateComponent,
    InstructionsEditComponent,
    InstructionsListComponent,
    MeasurementTypeCreateComponent,
    MeasurementTypeEditComponent,
    MeasurementTypeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
