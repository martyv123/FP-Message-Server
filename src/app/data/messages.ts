/**
 * Examples of messages.
 */

import { MessageRobotFP, MessageCarrierFP, MessageLabwareFP } from '../classes/MessageFP';
import { MessageFPList, } from '../classes/MessageFPList';

export const  messages = new MessageFPList();

const robotMessage = new MessageRobotFP("Robot Message", "This is a message from the robot.");
const carrierMessage = new MessageCarrierFP("Carrier Message", "This is a message from the carrier.");
const labwareMessage = new MessageLabwareFP("Labware Message", "This is a message from the labware.");

labwareMessage.status(false);

// messages.addMessage(robotMessage);
// messages.addMessage(carrierMessage);
// messages.addMessage(labwareMessage);
