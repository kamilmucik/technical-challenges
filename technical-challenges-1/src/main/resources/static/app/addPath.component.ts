import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { AddPathService } from 'app/addPath.service';

@Component({
    selector: 'addpath-component',
    template: `
        <div class="col-md-12">
            <form [formGroup]="addPathForm"  (submit)="onSubmit()">
                <div class="col-md-9">
                    <input class="form-control" type="text" formControlName="name"  placeholder="Nazwa pliku" required >
                    <p *ngIf="addPathForm.controls.name.errors">Pole jest wymagane!</p>
                </div>
                <div class="container col-md-3" >
                    <button type="submit" class="btn btn-primary">Dodaj</button>
                </div>
            </form>
        </div>
    `
})
export class AddPathComponent implements OnInit  {

    addPathForm: FormGroup;

  constructor(
    private addPathService: AddPathService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.addPathForm = this.formBuilder.group({
      'name': ['/plik', Validators.required]
    });
  }

  onSubmit() {
    console.log("name: " + this.addPathForm.controls.name.value);
    this.addPathService.create({ id: 0, name: this.addPathForm.controls.name.value });
  }

  //deleteTodo(todoId: number) {
  //  this.todoService.remove(todoId);
  //}
}