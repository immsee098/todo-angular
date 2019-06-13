import { Component, Input } from '@angular/core';
import { generate } from 'rxjs';

interface Todo{
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [
    {id: 1, content: "HTML", completed: false}
  ]

  addTodo(inputElem: HTMLInputElement){
    console.log('aaaaa');
    this.todos = [{id: this.generateId(), content: inputElem.value, completed: false}, ...this.todos]
  }

  removeTodo(id){
    console.log('bbbb');
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  generateId(){
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id))+1 : 1;
  }
}
