'use strict';

const { WebClient } = require('@slack/web-api');

// Create a new instance of the WebClient class with the token read from your environment variable
const web = new WebClient(process.env.SLACK_API_TOKEN);
// The current date
const currentTime = new Date().toTimeString();

const postMsg = async (msg, channel) => {
  return await web.chat.postMessage({
    channel: channel || '#archie',
    text: msg || `The current time is ${currentTime}`,
  });
}

module.exports = async (msg, channel) => {

  try {
    await postMsg(msg, channel);
  } catch (error) {
    // try posting to default channel
    await postMsg(msg);
    console.log(error);
  }

};
