import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [
    TodosListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    TodosListComponent
  ]
})
export class ComponentsModule { }
