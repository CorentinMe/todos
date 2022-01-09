import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { State, Todo } from 'src/models/models.module';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos: Todo[] = [];

  constructor(private userService: UserService) {
    this.userService.findAllUsers().subscribe(users => {
      users.forEach(u => {
        this.todos.push(new Todo('title1', State.STATE1, u));
        this.todos.push(new Todo('title2', State.STATE2, u));
        this.todos.push(new Todo('title3', State.STATE3, u));
      })
    });
  }

  public findAllTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  public findByUserId(userId: string | undefined): Observable<Todo[]> {
    if(userId){
      return of(this.todos.filter(t => t.getUser.getId === userId));
    }
    return this.findAllTodos();
  }
}
