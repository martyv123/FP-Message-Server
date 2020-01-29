/**
 * @author Marty Vo
 * @email marty.vo@abcam.com
 * @create date 2020-01-28 10:27:43
 * @modify date 2020-01-28 10:27:43
 * @desc Class for messages list
 */
import { Component, OnInit } from '@angular/core';
import { MessageFPList } from '../classes/MessageFPList';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  messages: MessageFPList;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {

  }
}
