import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { State, Todo } from 'src/models/models.module';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private id: number = 1;
  private todos: Todo[] = [];

  constructor(private userService: UserService) {
    this.userService.findAllUsers().subscribe(users => {
      users.forEach(u => {
        this.todos.push(new Todo(this.getNewId(), 'title1', State.INIT, u, 'description1'));
        this.todos.push(new Todo(this.getNewId(), 'title2', State.TODO, u, 'description2'));
        this.todos.push(new Todo(this.getNewId(), 'title3', State.TODO, u, 'description3'));
      })
    });
  }

  public getNewId(): number {
    this.id++;
    return this.id;
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

  public findById(id: number): Todo | undefined {
    return this.todos.find(t => t.getId == id);
  }
}
