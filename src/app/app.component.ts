import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My ToDo List';
  todos = [
    {
    label : "Bring Milk",
    done : false, 
    priority : 3
    },

    {
      label : "Go to Groceries",
      done : true, 
      priority : 2
    },

    {
      label : "Pay water bill",
      done : false, 
      priority : 1
    },

    {
      label : "Clean the room",
      done : true, 
      priority : 3
    },

    {
      label : "Dishes",
      done : false, 
      priority : 1
    },

  ];

  addToDo(newToDoLabel){
    var newToDo = {
      label : newToDoLabel,
      done : false,
      priority : 1
    }
    this.todos.push(newToDo);
  }

  deleteToDo(todo){
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }


}
