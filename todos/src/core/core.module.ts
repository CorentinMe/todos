import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelsModule } from 'src/models/models.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ComponentsModule,
    ModelsModule
  ]
})
export class CoreModule { }
