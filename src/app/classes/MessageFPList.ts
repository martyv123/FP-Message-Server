/**
 * @author Marty Vo
 * @email marty.vo@abcam.com
 * @create date 2020-01-20 16:58:22
 * @modify date 2020-01-22 12:32:12
 * @desc Container for messages
 */

import { MessageFP } from './MessageFP';

/**
 * Represents an indexed list of messages.
 * 
 * @param {MessageFP} MessageFP[] - The list of messages.
 */
export class MessageFPList {
    messages: MessageFP[] = [];
    
    constructor() {}

    /**
     * Adds a message to the message list.
     * 
     * @param {MessageFP} message - The message to be added to the list.
     * 
     * @return {void}
     */
    addMessage(message: MessageFP): void {
        this.messages.push(message);
    }
} 
