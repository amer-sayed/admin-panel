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
      this.router.navigate(['pages/users/viewUser/' + this.rowData.uid + '/' +  this.rowData.displayName  + '/' + this.rowData.email +  '/' + this.rowData.phoneNumber + '/' + this.rowData.photoUrl]);
    }
  }