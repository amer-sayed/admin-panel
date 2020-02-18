import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent } from './products.component'
import { AllProductsComponent } from './products/allproducts.component';
import { ProductComponent } from './product/product.component';
import { updateProducts } from './product/updateProducts/updateProducts.component';

const routes:Routes = [
{
    path:"",
    component:UsersComponent,
    children:[
    {
      path:"add",
      component:AllProductsComponent
    },   
    {
      path:"viewProudcte/:id/:name/:price/:discount/:title/:not/:status/:made_in/:cat_name/:cat_id/:image",
      component:ProductComponent
    },    
    {
      path:"update/:id/:name/:title/:price/:discount/:status/:made_in/:cat_name/:cat_id/:not",
      component:updateProducts
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

  export class UsersRoutingModule {
}
