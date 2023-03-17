'use strict';

const { WebClient } = require('@slack/web-api');

// Create a new instance of the WebClient class with the token read from your environment variable
const web = new WebClient(process.env.SLACK_API_TOKEN);
// The current date
const currentTime = new Date().toTimeString();

module.exports = async (msg, channel) => {

  try {
    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({
      channel: channel || '#archie',
      text: msg || `The current time is ${currentTime}`,
    });
    console.log('Message posted!');
  } catch (error) {
    console.log(error);
  }

};
