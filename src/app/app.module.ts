/**
 * @author Marty Vo
 * @email marty.vo@abcam.com
 * @create date 2020-01-28 11:50:45
 * @modify date 2020-01-28 11:50:45
 * @desc [description]
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { RequestsComponent } from './requests/requests.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    MessagesListComponent,
    RequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [RequestsComponent],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
