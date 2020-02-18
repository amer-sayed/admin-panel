import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginComponent } from './sigin/sigin.component';
import { LoginComponent } from './login.component';

const routes:Routes = [
    {
        path:"",
        component:LoginComponent,
        children:[
        {
          path:"login",
          component:SiginComponent
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
export class LogInRoutingModule {
}