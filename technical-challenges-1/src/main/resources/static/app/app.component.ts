import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';

import { TodoComponent } from 'app/todo.component';
import { TodoService } from 'app/todo.service';

import { AddPathComponent } from 'app/addPath.component';
import { AddPathService } from 'app/addPath.service';

@Component({
  selector: 'todo-app',
  template: `
    <div class="container">
        <div class="col-md-3 column">
            <h2>Dodaj</h2>
            <addpath-component></addpath-component>
        </div>
        <div class="col-md-9 column">
            <h2>Listing</h2>
            <socket-component></socket-component>
        </div>
    </div>
  `
})



export class AppComponent {
  constructor() { }
}