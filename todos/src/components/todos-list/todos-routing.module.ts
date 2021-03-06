import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListComponent } from './todos-list/todos-list.component';

const routes: Routes = [
  {
    path: '', component: TodosListComponent,
    children: [
      {
        path: 'details/:id',
        loadChildren: () => import('../details/details.module').then((m) => m.DetailsModule)
      },
      {
        path: 'edition',
        loadChildren: () => import('../edition/edition.module').then((m) => m.EditionModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
