import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/core/services/todos.service';
import { UserService } from 'src/core/services/user.service';
import { Todo, User } from 'src/models/models.module';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  private datas: Todo[] = [];
  private users: User[] = [];
  selectedUser!: User;

  constructor(private service: TodosService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findAllUsers().subscribe(users => this.users = users);
    this.service.findAllTodos().subscribe( r => this.datas = r);
  }

  public get getDatas(): Todo[]{
    return this.datas;
  }

  public get getUsers(): User[]{
    return this.users;
  }

  public selectedUserChange() {
    this.service.findByUserId(this.selectedUser?.getId).subscribe(r => this.datas = r);
  }
}
