import { Injectable, EventEmitter  } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export interface PathElement {
id: string;
name: string;
}


@Injectable()
export class SocketService{

    private websocket: any;

    constructor(){
    }

    connect(path:string) {
        this.websocket = new WebSocket("ws://localhost:8090/fileservice");
        this.websocket.onopen =  (evt) => {
            this.websocket.send("setPath:"+path);
        };
    }

    public GetInstanceStatus(): Observable<PathElement>{
        return Observable.create(observer=>{
            this.websocket.onmessage = (evt) => {
                observer.next(evt);
            };
        })
        .map(res=> JSON.parse(res.data))
        .do(data => console.log(data))
        .catch(this.handleError)
        .share();
    }

    disconnect() {
        //this.websocket.send("close");
        this.websocket.close();
    }
}
