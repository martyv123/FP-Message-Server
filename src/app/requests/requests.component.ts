/**
 * @author Marty Vo
 * @email marty.vo@abcam.com
 * @create date 2020-01-28 10:26:56
 * @modify date 2020-01-28 10:26:56
 * @desc Class for post/get requests
 */
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MessageFP } from '../classes/MessageFP';
import { MessageFPList } from '../classes/MessageFPList';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  message: MessageFP;
  messages: MessageFPList;
  @Output() messageEvent = new EventEmitter<MessageFPList>();  

  constructor(private messageService: MessageService, private matDialog: MatDialog, private messageAlert: MatSnackBar) {}

  ngOnInit() {}

  /**
   * Send messages to message log
   */
  sendMessages() {
    this.messageEvent.emit(this.messages);
  }

  /**
   * Adds a message to the list of messages.
   */
  addMessage(): void {
    let titleHTML = <HTMLInputElement>document.getElementById("title");
    let bodyHTML = <HTMLInputElement>document.getElementById("body");
    let titleMsg = titleHTML.value;
    let bodyMsg = bodyHTML.value;
    let message = new MessageFP(titleMsg, bodyMsg);
    this.messageService.addMessage(message).subscribe(message => {
      this.message = message;
    });
    this.sendMessages();
  }

  /**
   * Sends GET request to server for message list
   */
  getMessages(): void {
    this.messageService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
  }

  /**
   * Opens the snackbar message
   */
  openSnackBar(): void {
    this.messageAlert.open("Message has been sent.", "Dismiss");
  }

}
