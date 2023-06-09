import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
  <ng-container *ngIf="item; else loading">
    <div>
      <span class="id">ID: {{ item.id }}</span>
    </div>
  </ng-container>
  <ng-template #loading>
    <h1>Loading ...</h1>
  </ng-template>
  `,
})
export class ItemComponent {
  @Input() item: any;
  constructor() {}
}
