'use strict';

const fs = require('fs');
const path = require('path');
const mdConverter = require('markdown-it')();
const inputFolder = path.join(__dirname, '../docs');

let docPages = {};

const docContent = async (files) => {
  for( const filename of files ) {
    let filepath = path.join( inputFolder, filename );
    let file = await fs.promises.readFile( filepath, 'utf8' );
    let questions = [];

    file.split("###").forEach((text) => {
      let q = text.split('?')[0]
      let a = text.split('?')[1];
      if (q && a) {
        questions.push({
          question: q,
          answer: mdConverter.render(a)
        });
      }
    });

    if (questions.length) {
      let pageName = filename.replace('.md', '');
      docPages[pageName] = questions;
    }
  }
}

module.exports = async () => {
  const docFiles = await fs.promises.readdir( inputFolder );
  await docContent(docFiles);
  return docPages;
};
