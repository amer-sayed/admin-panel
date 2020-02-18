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
    import { UsersRoutingModule } from './products.routing.module'
    import { AllProductsComponent } from './products/allproducts.component';
    import { UsersComponent } from './products.component';
    import { CustomButtonComponent } from './product/action.component';
    import { ProductComponent } from './product/product.component';
    import { AgmCoreModule } from '@agm/core';
    import { LeafletModule } from '@asymmetrik/ngx-leaflet';
    import { NgxEchartsModule } from 'ngx-echarts';
    import { EchartsPieComponent } from './product/echarts-pie.component';
    import { NgxChartsModule } from '@swimlane/ngx-charts';

    import { updateProducts } from './product/updateProducts/updateProducts.component';

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
    AllProductsComponent,
    CustomButtonComponent,
    ProductComponent,
    EchartsPieComponent,
    updateProducts
  ],
  providers:[
  
  ],
  entryComponents: [
    CustomButtonComponent,
    EchartsPieComponent,
    updateProducts,
]
})

  export class ProductsModule {

   }