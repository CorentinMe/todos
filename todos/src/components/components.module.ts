import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { DetailsModule } from './details/details.module';
import { ComponentsRoutingModule } from './components-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ComponentsRoutingModule,
    DetailsModule
  ],
  exports: [
  ]
})
export class ComponentsModule { }
