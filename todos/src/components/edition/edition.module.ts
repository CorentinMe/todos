import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditionComponent } from './edition/edition.component';
import { EditionRoutingModule } from './edition-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditionComponent
  ],
  imports: [
    CommonModule,
    EditionRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditionModule { }
