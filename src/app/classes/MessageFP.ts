/**
 * @author Marty Vo
 * @email marty.vo@abcam.com
 * @create date 2020-01-20 16:55:45
 * @modify date 2020-01-22 12:32:08
 * @desc Different types of messages
 */
 
 /**
 * Represents a generic message.
 * 
 * @param {string} titleMsg - The title of the message.
 * @param {string} bodyMsg - The body of the message.
 * @param {boolean} active - The status of the message
 */
export interface MessageFP {
  titleMsg: string;
  bodyMsg: string;
  active: boolean;

  /**
   * Change the status of the message.
   */
  status(active: boolean): void;
  }

/**
 * Represents a message from the robot.
 * 
 * @param {string} titleMsg - The title of the message.
 * @param {string} bodyMsg - The body of the message.
 * @param {string} active - The status of the message
 */
export class MessageRobotFP implements MessageFP {
  titleMsg: string;
  bodyMsg: string;
  active: boolean = false;

  constructor(titleMsg: string, bodyMsg: string) {
    this.titleMsg = titleMsg;
    this.bodyMsg = bodyMsg;
  }

  status(active: boolean): void {
    this.active = active;
  }
}

/**
 * Represents a message from the carrier.
 * 
 * @param {string} titleMsg - The title of the message.
 * @param {string} bodyMsg - The body of the message.
 * @param {string} active - The status of the message
 */
export class MessageCarrierFP implements MessageFP {
    titleMsg: string;
    bodyMsg: string;
    active: boolean = false;

    constructor(titleMsg: string, bodyMsg: string) {
        this.titleMsg = titleMsg;
        this.bodyMsg = bodyMsg;
    }

    status(active: boolean): void {
      this.active = active;
    }
}

/**
 * Represents a message from the labware.
 * 
 * @param {string} titleMsg - The title of the message.
 * @param {string} bodyMsg - The body of the message.
 * @param {string} active - The status of the message
 */
export class MessageLabwareFP implements MessageFP {
  titleMsg: string;
  bodyMsg: string;
  active: boolean = false;

  constructor(titleMsg: string, bodyMsg: string) {
      this.titleMsg = titleMsg;
      this.bodyMsg = bodyMsg;
  }

  status(active: boolean): void {
    this.active = active;
  }
}