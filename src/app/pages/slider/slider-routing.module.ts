import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorisComponent } from "./slider.component"
import { AddCategorisComponent } from './add-slider/add-slider.component';


const routes:Routes = [
{
    path:"",
    component:CategorisComponent,
    children:[
    {
      path:"add",
      component:AddCategorisComponent
    },
    ]
}
]

@NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule,
    ],
  })

  export class CategotrisRoutingModule {
}
