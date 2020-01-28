/**
 * @author Marty Vo
 * @email marty.vo@abcam.com
 * @create date 2020-01-20 16:55:25
 * @modify date 2020-01-22 12:31:48
 * @desc Server
 */

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Dealing with JSON data, so no encoded urls
app.use(bodyParser.urlencoded( { extended: false } ));

// Allow requests from other origins and header information
app.use ((req, res, next) => {
  res.header('Access-Control-Allow-Origin' , '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');

  next();
});

let message = {
  'titleMsg': String,
  'bodyMsg': String
}

let messages = [];

// send message from server
app.post('/message', (req, res) => {
  // depending on request body, determine what message is sent
  req.body.active = true;
  messages.push(req.body);
  let msg = req.body.titleMsg + ": " + req.body.bodyMsg;
  res.send(msg);
  console.log('Message has been sent. See next line for details.');
  console.log('*** ' + msg + ' ***');
});

// retrieve the message log - as of 1/22/20, same functionality as SSE
app.get('/messages', (req, res) => {
  res.json(messages);
  console.log("Request for messages received. See below for message log.");
  console.log(messages); 
});

// server sent events, retrieves the latest message every second
app.get('/sse', (req, res) => {
  res.writeHead(200, {
    'Connection': 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache'
  });
  console.log('Server side events');

  setInterval(() => {
    res.write('data:' + JSON.stringify(messages[0], null, 4));
    res.write('\n\n');
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});