import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  items:string[] = ['Create', 'List']
  menus = [
    { name: "Chefs", items: this.items },
    { name: "Ingredients", items: this.items },
    { name: "Instructions", items: this.items },
    { name: "Items", items: this.items },
    { name: "Measurements", items: this.items },
    // { name: "Recipes", items: this.items },
  ];
  constructor(private router: Router) { }
  
  navigate(name: string, item: string){
    let route: string = `/${name.toLowerCase()}`;
    if(item === "List"){
      this.router.navigate([route])
    }else{
      route = route + '/new'
      this.router.navigate([route])
    }
  }


}
