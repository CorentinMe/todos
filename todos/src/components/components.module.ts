import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodosListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodosListComponent
  ]
})
export class ComponentsModule { }
