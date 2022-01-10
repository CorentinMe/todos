import { State } from "./enum/state";
import { User } from "./user";

export class Todo {
  private id: number;
  private title: string;
  private state: State;
  private user: User;
  private description: string;

  constructor(id: number, title: string, state: State, user: User, description: string){
    this.id = id;
    this.title = title;
    this.state = state;
    this.user = user;
    this.description = description;
  }

  public get getId(): number {
    return this.id;
  }

  public get getDescription(): string {
    return this.description;
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

  public get isDone(): boolean {
    return this.state === State.DONE;
  }

  public set isDone(done: boolean){
    if(done)
      this.state = State.DONE;
  }
}
