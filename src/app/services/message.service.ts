/**
 * @author Marty Vo
 * @email marty.vo@abcam.com
 * @create date 2020-01-21 13:05:39
 * @modify date 2020-01-21 13:05:39
 * @desc Message service
 */

import { Injectable, NgZone, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';

import { MessageFP } from '../classes/MessageFP';
import { MessageFPList } from '../classes/MessageFPlist';
import { messages } from '../data/messages';

/**
 * Class representing a message service.
 * 
 * @param {HttpClient} http - The http client class.
 */
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public newMessageFx = new Subject<MessageFP>();
  public newMessageFxObs = this.newMessageFx.asObservable();

  messages: MessageFPList;

  @Input() titleMsg: string;
  @Input() bodyMsg: string;

  constructor(private http: HttpClient) { 
    this.messages = new MessageFPList();
  }

  /**
   * Gets the messages from the list of messages.
   */
  getMessages(): Observable<any> {
    const url = 'http://localhost:5000/messages';

    return this.http.get<any>(url);
  }
  
  /**
   * Adds a message to the messages list.
   * 
   * @param message - The message to be added and displayed.
   */
  addMessage(message: MessageFP): Observable<MessageFP> {
    messages.addMessage(message);

    return this.http.post<MessageFP>('http://localhost:5000/message', message);
  }
}
