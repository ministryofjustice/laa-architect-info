'use strict';

const fs = require('fs');
const path = require('path');
const vectorSimilarity = require( 'compute-cosine-similarity' );
const embeddingsFile = path.join(__dirname, '../embeddings.json');
const questionsFile = path.join(__dirname, '../questions.json');

let similarityScores = [];
let maxEmbeddings = 3;

const getSimilarEmbeddings = async (vector) => {
  let embeddings = JSON.parse( await fs.promises.readFile( embeddingsFile, 'utf8' ) );

  for( const [id, embeddingVector] of Object.entries(embeddings) ) {
    try {
      let score = vectorSimilarity(vector, embeddingVector)
      similarityScores.push([id, score]);
    } catch (err) {
      console.log('error comparing vector: ' + id, err);
    }
  }
  similarityScores.sort(function(a, b) {
    return a[1] - b[1];
  });
}

module.exports = async (question) => {
  question = question || process.env.npm_config_question
  
  await getSimilarEmbeddings(question);
  let prompt = new String();
  let questions = JSON.parse( await fs.promises.readFile( questionsFile, 'utf8' ) );
  const promptEmbeddings = similarityScores.slice(-3);
  for ( const [id, score] of promptEmbeddings ) {
    prompt += 'Q:' + questions[id].replace('\n', ' A: ');
  }

  prompt += 'Q: ' + question + '\nA:';
  console.log('prompt generated', prompt);
  return prompt;
};
