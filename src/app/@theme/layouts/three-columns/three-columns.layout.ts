import { Component } from '@angular/core';

@Component({
  selector: 'ngx-three-columns-layout',
  styleUrls: ['./three-columns.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-column>
        <ng-content></ng-content>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class ThreeColumnsLayoutComponent {}
