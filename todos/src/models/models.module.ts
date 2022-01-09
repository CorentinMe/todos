import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export {Todo} from  './todo';
export {User} from  './user';
export {State} from './enum/state'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModelsModule { }
