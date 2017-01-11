import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocketComponent } from './socket.component';
import { SocketService } from './socket.service';
import { AddPathComponent } from './addPath.component';
import { AddPathService } from './addPath.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [
    SocketComponent,
    AddPathComponent,
    AppComponent
  ],
  providers: [ AddPathService, SocketService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}