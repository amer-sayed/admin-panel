import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SiginComponent } from './sigin/sigin.component';
import { NbMenuModule } from '@nebular/theme';
import { LogInRoutingModule } from './login-routing.module';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';



import { ThemeModule } from '../@theme/theme.module';  
import { FormsModule as ngFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
      LoginComponent,
      SiginComponent
    ],
    imports: [
      ThemeModule,
      NbMenuModule,
      NbInputModule,
      NbCardModule,
      NbButtonModule,
      NbActionsModule,
      NbUserModule,
      NbCheckboxModule,
      NbRadioModule,
      NbDatepickerModule,
      NbSelectModule,
      NbIconModule,
      ngFormsModule,
      LogInRoutingModule,
    ],
  })
  export class loginModule {
  }
  