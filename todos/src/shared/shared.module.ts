import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByStatePipe } from './order-by-state.pipe';
import { ModelsModule } from 'src/models/models.module';



@NgModule({
  declarations: [
    OrderByStatePipe
  ],
  imports: [
    CommonModule,
    ModelsModule
  ],
  exports: [
    OrderByStatePipe
  ]
})
export class SharedModule { }
