import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from 'src/core/services/todos.service';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public todo: Todo | undefined;
  constructor(private route: ActivatedRoute, private todosService: TodosService) {

    this.route.paramMap.subscribe(params => {
      const id: any = params.get('id');
      if(id && !isNaN(id)){
        this.todo = todosService.findById(id);
      } else {
        //todo redirect to homepage
      }
  });


   }

  ngOnInit(): void {
  }
}
