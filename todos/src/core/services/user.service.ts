import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/models/models.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [new User('user1'), new User('user2')];

  constructor() { }

  public findAllUsers(): Observable<User[]> {
    return of(this.users);
  }

  public findFirstUser(): User {
    return this.users[0];
  }
}
