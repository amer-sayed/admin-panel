import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { Router } from '@angular/router';
@Component({
    selector: 'button-view',
    template: `<button nbButton outline (click)="onClick()">حولة</button>`,
  })
  export class CustomButtonComponent implements ViewCell, OnInit {
    renderValue: string;
  
    @Input() value;
  
    constructor(private router:Router) {  }
  
     @Input() rowData: any;
  
    @Output() save: EventEmitter<any> = new EventEmitter();
  
    ngOnInit() {
      this.renderValue = this.value;
    }
  
    onClick() {
      this.save.emit(this.rowData);
      console.log(this.rowData.phoneNumber);
//viewProudcte/:id/:name/:price/:discount/:title/:not/:status/:made_in/:cat_name/:cat_id/:image"
      this.router.navigate(['pages/products/viewProudcte/' + this.rowData.id + '/' +  this.rowData.name  + '/' + this.rowData.price +  '/' + this.rowData.discount + '/' + this.rowData.title + '/' + this.rowData.not + '/' + this.rowData.status + '/' + this.rowData.made_in + '/' + this.rowData.cat_name + '/' + this.rowData.cat_id + '/' + this.rowData.image]);
    }
  }