import { Pipe, PipeTransform } from '@angular/core';
import { State, Todo } from 'src/models/models.module';

@Pipe({
  name: 'orderByState',
  pure: false
})
export class OrderByStatePipe implements PipeTransform {

  transform(value: Todo[]): Todo[] {
    return value.sort((a, b) => {
      if (this.indexOfState(a.getState) < this.indexOfState(b.getState)) {
        return -1;
      } else if (this.indexOfState(a.getState) > this.indexOfState(b.getState)) {
        return 1;
      }
      return 0
    });
  }

  private indexOfState(state: State){
    switch (state) {
      case State.INIT:
        return 0;
      case State.TODO:
        return 1;
      case State.DONE:
        return 2;
      default:
        return -1;
    }
  }

}
