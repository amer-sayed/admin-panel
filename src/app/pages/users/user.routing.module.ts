import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent } from './users.component'
import { AlluserComponent } from './alluser/alluser.component'
import { UserComponent } from './user/user.component';
import { UpdateUser } from './user/updateUser/updateUser.component';

const routes:Routes = [
{
    path:"",
    component:UsersComponent,
    children:[
    {
      path:"add",
      component:AlluserComponent
    },
    {
      path:"viewUser/:uid/:name/:email/:phone/:image",
      component:UserComponent
    },
    {
      path:"update/:uid/:name/:email/:phone/:adress/:maps/:not",
      component:UpdateUser
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
