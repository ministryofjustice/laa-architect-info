'use strict';

const fs = require('fs');
const path = require('path');
const vectorSimilarity = require( 'compute-cosine-similarity' );
const embeddingsFile = path.join(__dirname, '../embeddings.json');
const questionsFile = path.join(__dirname, '../questions.json');

const getSimilarEmbeddings = async (vector) => {
  let similarityScores = [];
  const embeddings = JSON.parse( await fs.promises.readFile( embeddingsFile, 'utf8' ) );

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

  return similarityScores;
}

module.exports = async (embedding, total) => {
  total = 3 || total;

  let similarityScores = await getSimilarEmbeddings(embedding);
  let similarEmbeddings = similarityScores.slice(-Math.abs(total));

  const questions = JSON.parse( await fs.promises.readFile( questionsFile, 'utf8' ) );
  let similarQuestions = [];
  for ( const [id, score] of similarEmbeddings ) {
    similarQuestions.push(questions[id]);
  }

  return similarQuestions;
};
