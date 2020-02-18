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
    import { CategorisComponent } from "./categoris.component";
    import { CategotrisRoutingModule } from "./categoris-routing.module";
    import { AddCategorisComponent } from './add-categoris/add-categoris.component';
    import { Ng2SmartTableModule } from 'ng2-smart-table';
    import { FormsModule , ReactiveFormsModule } from "@angular/forms";
    import { CustomButtonComponent } from './services/action.component';

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
    CategotrisRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule


  ],
  declarations: [
    CategorisComponent,
    AddCategorisComponent,
    CustomButtonComponent
    
  ],
  providers:[
    
  ],
  entryComponents: [
    CustomButtonComponent,

]
})

  export class CategorisModule {

   }