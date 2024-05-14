import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chef } from 'src/app/models/chef.model';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-cheif-create',
  templateUrl: './cheif-create.component.html',
  styleUrls: ['./cheif-create.component.css']
})
export class CheifCreateComponent {
cForm!: FormGroup;
  constructor(private fb: FormBuilder, 
    private cSvc: ChefService) { this.initForm() }
  private initForm(){
    this.cForm = this.fb.group({
      'name': ['', Validators.required]
    })
  }

  resetForm(){ this.cForm.reset(); }
  submit(){
    if(!this.cForm.valid){ return };
    this.cSvc.create(this.cForm.value).subscribe(
      (c: Chef) => {
        console.log(c, "Success")
    }, (error: any) => {console.log(error, "Error")})
  }
}
