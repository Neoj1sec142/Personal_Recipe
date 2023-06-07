import { Component } from '@angular/core';
interface Nav {
  link: string,
  name: string,
  exact: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nav: Nav[] = [
    { link: '/', name: 'Dashboard', exact: true },
    { link: '/new-recipe', name: 'New Recipe', exact: false },
    { link: '/new-ingredient', name: 'Add Ingredient', exact: false },
  ]
}
