import { Component, OnInit } from '@angular/core';
import { Chef } from 'src/app/models/chef.model';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-cheif-list',
  templateUrl: './cheif-list.component.html',
  styleUrls: ['./cheif-list.component.css']
})
export class CheifListComponent implements OnInit {
chefs: Chef[] = [];

  constructor(private cSvc: ChefService) { }

  ngOnInit() {
  }

  private getChefs(){

  }

}
