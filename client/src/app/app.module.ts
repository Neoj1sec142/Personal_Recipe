import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';


import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';
import { RecipeService } from './services/recipe.service';
import { IngredientService } from './services/ingredient.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RecipeFormComponent,
    IngredientFormComponent,
    RecipeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [RecipeService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
