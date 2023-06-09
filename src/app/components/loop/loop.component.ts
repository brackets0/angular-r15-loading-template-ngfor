import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-loop',
  template: `
    <ng-container *ngFor="let item of items$ | async">
      <app-item [item]="item"></app-item>
    </ng-container>
  `,
})
export class LoopComponent {
  items$: Observable<any>;
  constructor(private dataService: DataService) {
    this.items$ = this.dataService.getPords().pipe(delay(3000));
  }
}
