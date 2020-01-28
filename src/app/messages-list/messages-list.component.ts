/**
 * @author Marty Vo
 * @email marty.vo@abcam.com
 * @create date 2020-01-28 10:27:43
 * @modify date 2020-01-28 10:27:43
 * @desc Class for messages list
 */
import { Component, OnInit } from '@angular/core';
import { RequestsComponent } from '../requests/requests.component';
import { MessageFPList } from '../classes/MessageFPList';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {

  constructor(private requests: RequestsComponent) {
  }

  ngOnInit() {
  }

  /**
   * Gets the list of messages.
   */
  getMessages(): MessageFPList {
    return this.requests.messages;
  }
}
