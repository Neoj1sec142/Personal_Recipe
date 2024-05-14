import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cheif-create',
  templateUrl: './cheif-create.component.html',
  styleUrls: ['./cheif-create.component.css']
})
export class CheifCreateComponent implements OnInit {
cForm!: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
