import { NgModule } from '@angular/core';
import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, 
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    NbWindowModule,
    NbDialogModule
  } from '@nebular/theme'

    import { ThemeModule } from '../../@theme/theme.module';  
    import { Ng2SmartTableModule } from 'ng2-smart-table';
    import { FormsModule , ReactiveFormsModule} from "@angular/forms";
    import { UsersRoutingModule } from './user.routing.module'
    import { AlluserComponent } from './alluser/alluser.component';
    import { UsersComponent } from './users.component';
    import { CustomButtonComponent } from './user/action.component';
    import { UserComponent } from './user/user.component';
    import { AgmCoreModule } from '@agm/core';
    import { LeafletModule } from '@asymmetrik/ngx-leaflet';
    import { NgxEchartsModule } from 'ngx-echarts';
    import { EchartsPieComponent } from './user/echarts-pie.component';
    import { NgxChartsModule } from '@swimlane/ngx-charts';

    import { UpdateUser } from './user/updateUser/updateUser.component';

@NgModule({
  imports: [
    ThemeModule,
    NbWindowModule.forChild(),
    NbDialogModule.forChild(),
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
    Ng2SmartTableModule,
    FormsModule,
    UsersRoutingModule,
    LeafletModule,
    NgxEchartsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k',
      libraries: ['places'],
    }),
    

  ],
  declarations: [
    UsersComponent,
    AlluserComponent,
    CustomButtonComponent,
    UserComponent,
    EchartsPieComponent,
    UpdateUser
  ],
  providers:[
  
  ],
  entryComponents: [
    CustomButtonComponent,
    EchartsPieComponent,
    UpdateUser,
]
})

  export class UsersModule {

   }