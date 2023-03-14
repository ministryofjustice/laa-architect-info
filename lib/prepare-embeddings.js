'use strict';

const fs = require('fs');
const path = require('path');
const OpenAI = require('./openai');
const openai = new OpenAI();

const inputFolder = path.join(__dirname, '../docs');
const saveQsTo = path.join(__dirname, '../questions.json');
const saveEmbeddingsTo = path.join(__dirname, '../embeddings.json');

let questions = {};
let embeddings = {};
let i = 0;

const processTuningData = async (files) => {
 for( const filename of files ) {
   let filepath = path.join( inputFolder, filename );
   getQuestionsFromMarkdown( await fs.promises.readFile( filepath, 'utf8' ) );
 }
}

const getQuestionsFromMarkdown = (data) => {
  data.split("###").forEach((text) => {
    if (text) {
      questions[i] = text;
      i++;
    }
  });
}

const getEmbeddingsFromQuestions = async () => {
  for( const [index, question] of Object.entries(questions) ) {
    embeddings[index] = await openai.embedding(question.replace('\n', ' '));
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

(async () => {
  console.log('preparing embeddings');
  await processTuningData( await fs.promises.readdir( inputFolder ) );
  await fs.promises.writeFile( saveQsTo, JSON.stringify(questions));
  await getEmbeddingsFromQuestions();
  await fs.promises.writeFile( saveEmbeddingsTo, JSON.stringify(embeddings));
})()
