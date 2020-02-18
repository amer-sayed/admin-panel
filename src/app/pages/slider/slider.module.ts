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
    import { CategorisComponent } from "./slider.component";
    import { CategotrisRoutingModule } from "./slider-routing.module";
    import { AddCategorisComponent } from './add-slider/add-slider.component';
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