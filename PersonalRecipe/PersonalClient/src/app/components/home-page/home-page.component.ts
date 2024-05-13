import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Chef } from 'src/app/models/chef.model';
import { Item } from 'src/app/models/item.model';
import { MeasurementType } from 'src/app/models/meaurement-type.model';
import { ChefService } from 'src/app/services/chef.service';
import { ItemService } from 'src/app/services/item.service';
import { MeasurementTypeService } from 'src/app/services/measurement-type.service';
import { items, mts, chefs } from '../../helpers/seed.data'
import { ListParams } from 'src/app/models/list-params.model';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
listParams: ListParams = {multiSearch: false, searchField: '', searchString: ''};
  constructor(
    private chefSvc: ChefService,
    private iSvc: ItemService,
    private mtSvc: MeasurementTypeService
  ){ }

  ngOnInit() {
    // this.mtSvc.getAll(this.listParams).subscribe((res: any) => {
    //   console.log(res)
    // });
    // this.iSvc.getAll(this.listParams).subscribe((res: any) => {
    //   console.log(res)
    // });
    // this.chefSvc.getAll(this.listParams).subscribe((res: any) => {
    //   console.log(res)
    // });
  }
   seed(): void {
  //   const { is, ms } = this.getObservables();
  //   forkJoin([is, ms]).subscribe({
  //     next: (res) => console.log(res, 'Success'),
  //     error: (err) => console.error(err, 'Error')
  //   });
   }

  // getObservables(): { is: Observable<Item[]>; ms: Observable<MeasurementType[]> } {
  //   // let cs = chefs.map(c => this.chefSvc.create(c));
  //   let is = items.map(i => this.iSvc.create(i));
  //   let ms = mts.map(m => this.mtSvc.create(m));

  //   return { is: forkJoin(is), ms: forkJoin(ms) };
  // }
}
