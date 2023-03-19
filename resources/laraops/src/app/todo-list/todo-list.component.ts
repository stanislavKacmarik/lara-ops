import {Component, OnInit} from '@angular/core';
import {TodoService} from "../services/todo.service";
import {Observable} from "rxjs";
import {Todo} from "../interfaces/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$ : Observable<Todo>;
  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.getAll();
  }

  ngOnInit(): void {
  }



}
