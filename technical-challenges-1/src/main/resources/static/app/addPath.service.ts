import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

export interface MyPath {
id: string;
name: string;
}


@Injectable()
export class AddPathService{
    private baseUrl: string;


constructor(private http : Http){
    this.baseUrl = 'http://localhost:8090/path';
}

create(myPath: MyPath) {
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.post(`${this.baseUrl}/add/`, JSON.stringify(myPath) , {headers:headers})
        .map(response => response.json()).subscribe(data => {
            console.log(response);
        }, error => console.log('Could not create path.', error));
  }
}
