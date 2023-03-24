'use strict';

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const similarQs = require('./similar-questions')

class API {
  constructor(retries) {
    this.max_retries = retries || 50;
    this.retries = 0;
  }

  async embedding(input) {
    try {
      let response = await openai.createEmbedding({
        model: "text-embedding-ada-002",
        input: input,
      });
      return response.data.data[0]["embedding"];
    } catch (err) {
      this.retries++;
      console.log(err, 'retries:', this.retries);
      await new Promise(resolve => setTimeout(resolve, 2000));
      return (this.retries < this.max_retries) ? this.embedding(input) : [];
    }
  }

  async completion(prompt) {
    if (!prompt) {
      throw('No prompt');
    }

    try {
      let response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 250,
        temperature: 0,
      });
      return response.data.choices;
    } catch (err) {
      this.retries++;
      console.log(err, 'retries:', this.retries);
      await new Promise(resolve => setTimeout(resolve, 2000));
      return (this.retries < this.max_retries) ? this.completion(prompt) : [];
    }
  }

  async ask(question) {
    question = question || process.env.npm_config_question;
    if (!question) {
      return 'Please ask a question';
    }

    const questionVector = await this.embedding(question);
    const prompts = await similarQs(questionVector);

    let prompt = 'If you are not confident of the answer, please say "I am not sure. Please ask the LAA TAs on slack at #ask-laa-tas"\n\n';
    for ( const text of prompts ) {
      prompt += 'Q:' + text.replace('\n', ' A: ');
    }
    prompt += 'Q: ' + question + '\nA:';
    const response = await this.completion(prompt);
    const bestResponse = response[0] && response[0].text;
    return bestResponse.replaceAll('\n', '<br>') || 'Unable to respond';
  }
}

module.exports = API;
