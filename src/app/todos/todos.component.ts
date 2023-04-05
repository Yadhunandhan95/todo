import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as _ from 'underscore';
interface Todo {
  content: string;
  id?: string;
  datemodified?: Date;
  isDone?: boolean;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoCollection: Todo[] = [];

  todo_input:Todo = {
    content:""
  };
  inputId: any='';

  editValue: boolean = false;
  constructor( public snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
  }
  addNewItem() {
    if (this.todo_input.content != "") {
      var inputValue: Todo={
        content:""
      };
      inputValue.datemodified = new Date();
      inputValue.isDone = false;
      inputValue.content = this.todo_input.content;
      inputValue.id = _.uniqueId('todo_');
      this.todoCollection.push(inputValue);
      this.todo_input.content = ""
      console.log('added- ',this.todoCollection)
      this.openSnackBar("Added Successfuly!", "Dismiss");
    }
  }
  deleteItem(item:any) {
    console.log('going to delete-',item)
    var todo_index = _.findIndex(this.todoCollection,item)
    console.log('todo_index del-',todo_index)
    this.todoCollection.splice(todo_index,1);
    this.openSnackBar("Item Deleted!", "Dismiss");
  }
  editItem(item:any) {
    var inputValue: Todo={
      content:""
    };
    this.todo_input.content = item.content;
    this.editValue = true;
    this.inputId = item.id;
  }
  markItemAsDone(item:any) {
    var inputValue: Todo={
      content:""
    };
    inputValue.content = item.content;
    inputValue.isDone = true;
    var todo_index = _.indexOf(this.todoCollection,item)
    this.todoCollection[todo_index] = inputValue

    this.openSnackBar("Item Done!", "Dismiss");
  }
  markItemAsNotDone(item:any) {
    var inputValue: Todo={
      content:""
    };
    inputValue.content = item.content;
    inputValue.isDone = false;
    var todo_index = _.indexOf(this.todoCollection,item)
    this.todoCollection[todo_index] = inputValue
    this.openSnackBar("Item Not Done!", "Dismiss");
  }

  saveNewItem() {
    var inputValue: Todo={
      content:""
    };
    if (this.todo_input.content != "") {
      inputValue.isDone = false;
      inputValue.datemodified = new Date();
      inputValue.content = this.todo_input.content
      var temp_id = this.inputId;
      // _.findWhere(this.todoCollection, {id:temp_id})

      var temp_index=_.findIndex(this.todoCollection,{id:temp_id} )
      this.todoCollection[temp_index] = inputValue
      // this.todoCollection.push(inputValue)
      this.editValue = false;
      this.todo_input.content = "";
      this.inputId = '';
      this.openSnackBar("Updated Successfuly!", "Dismiss");
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
    });
  }

}
