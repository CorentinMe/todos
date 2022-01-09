export class User {
  private id: string;

  constructor(id: string){
    this.id = id;
  }

  public get getId(): string {
    return this.id;
  }
}
