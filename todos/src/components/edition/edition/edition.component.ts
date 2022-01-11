import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodosService } from 'src/core/services/todos.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {

  public todoForm: FormGroup;
  constructor(private fb: FormBuilder, private todoService: TodosService) {
    this.todoForm = fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
  }

  public createTodo() {
    this.todoService.createTodo(this.todoForm.controls['title'].value, this.todoForm.controls['description'].value);
    this.todoForm.reset();
  }
}
