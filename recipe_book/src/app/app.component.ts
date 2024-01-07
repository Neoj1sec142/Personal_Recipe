import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading$: Observable<boolean>;
  
  constructor(public loadingSvc: LoadingService) {
    this.isLoading$ = this.loadingSvc.isLoading$;
  }
  ngOnInit(): void {
      window.scrollTo(0,0)
  }
}
