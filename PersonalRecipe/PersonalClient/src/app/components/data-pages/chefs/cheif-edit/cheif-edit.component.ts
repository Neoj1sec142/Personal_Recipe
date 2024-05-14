import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chef } from 'src/app/models/chef.model';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-cheif-edit',
  templateUrl: './cheif-edit.component.html',
  styleUrls: ['./cheif-edit.component.css']
})
export class CheifEditComponent implements OnInit {
chef!: Chef;
  constructor(private route: ActivatedRoute, private cSvc: ChefService){ }

  ngOnInit() {
    const display = this.route.snapshot.paramMap.get("display");
    if(display){
      const id: number = parseInt(display);
      this.cSvc.get(id).subscribe((c: Chef) => {
        this.chef = c;
      })
    }
  }
  
  submit(){
    this.cSvc.update(this.chef).subscribe(
      (c: any) => {
        console.log(c, "Success")
    }, (error: any) => {console.log(error, "Error")})
  }

}
