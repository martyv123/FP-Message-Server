# Message Server for FirePlex. 
This message server will serve to communicate messages from the server to the user about work requests and inventory.


# Server:
1.	Post data
2.	Get data
3.	SSE -> server side events.

# Data:
1.	MessageFP: This should be a generic class
2.	MessageFPList: Contains a list of MessageFP
3.	MessageRobotFP: This extends MessageFP
4.	MessageCarrierFP:  This extends MessageFP
5.	MessageLabwareFP: This extends MessageFP