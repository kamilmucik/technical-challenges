import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { SocketService } from 'app/socket.service';

@Component({
    selector: 'socket-component',
    template: `
        <div class="col-md-12">
            <div class="col-md-9">
                <input class="form-control" type="text"  placeholder="Path" value="/" #serviceInput [disabled]="!dynamicDisable">
            </div>
            <div class="col-md-3">
                <button type="button"
                        class="btn btn-success"
                        [disabled]="!dynamicDisable"
                        (click)="connect(serviceInput.value)">
                    Obserwuj
                </button>
                <button type="button"
                        class="btn btn-default"
                        [disabled]="dynamicDisable"
                        (click)="disconnect()">
                    Rozłącz
                </button>
            </div>
            <div class="col-md-12">
                <ul id="messages">
                    <li *ngFor="let message of messages">
                        <span>{{message.name}}</span>
                    </li>
                </ul>
            </div>
        </div>
    `
})
export class SocketComponent implements OnInit, OnDestroy   {
    dynamicDisable: boolean;
    messages: Observable<PathElement[]>;

    constructor(private socketService: SocketService) {
        this.messages = [];
        this.dynamicDisable = true;
    }

    ngOnInit() {

    }

    public ngOnDestroy() {
        this.dynamicDisable = true;
        this.socketService.disconnect();
    }

    connect(serviceurl:string) {
        this.dynamicDisable = false;
        this.socketService.connect(serviceurl);
        this.socketService.GetInstanceStatus().subscribe((result) => {
            this.messages.push(result);
        });
    }

    disconnect() {
        this.messages = [];
        this.dynamicDisable = true;
        this.socketService.disconnect();
    }

    delete(id: number) {
        console.log("Ususwam: " + id);
    }
}