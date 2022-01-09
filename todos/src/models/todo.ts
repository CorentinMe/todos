import { State } from "./enum/state";
import { User } from "./user";

export class Todo {
  private title: string;
  private state: State;
  private user: User;

  constructor(title: string, state: State, user: User){
    this.title = title;
    this.state = state;
    this.user = user;
  }

  public get getTitle(): string {
    return this.title;
  }
  public get getState(): State {
    return this.state;
  }
  public get getUser(): User {
    return this.user;
  }
}
