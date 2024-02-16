import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { FoodStyle } from 'src/app/models/food-style.model';
import { FoodStyleService } from 'src/app/services/food-style.service';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {
  styles: FoodStyle[] = [];
  newStyle: FoodStyle = {name: '', description: ''}
  chosenMenuItem: string = '';
  constructor(
    private styleSvc: FoodStyleService,
  ) { }

  ngOnInit() {
    
  }
  openStyleForm(){
    this.getStyles();
    this.chosenMenuItem = 'add-style';
  }
  backToHome(){
    this.chosenMenuItem = ''
    this.newStyle = {name: '', description: ''}
  }
  createStyle(){
    if(this.newStyle.name === ''){
      return;
    }
    this.styleSvc.create(this.newStyle).subscribe((res: any) => {
      this.getStyles();
      this.backToHome();
    })
  }
  private getStyles(){
    this.styleSvc.getAll().subscribe((styles: FoodStyle[]) => {
      console.log(styles, "Success")
      this.styles = styles;
    })
  }

  

}
