import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeboardComponent } from './components/homeboard/homeboard.component';

const routes: Routes = [
  { path: '', component: HomeboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
