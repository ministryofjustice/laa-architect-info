'use strict';

const fs = require('fs');
const path = require('path');

const input_folder = path.join(__dirname, '../docs');
const output_file = path.join(__dirname, '../tuning_data.jsonl');
let raw_data = new String();
let output_data = new String();

const prepare_data = async (files) => {
 for( const filename of files ) {
   raw_data = await fs.promises.readFile( path.join( input_folder, filename ), 'utf8' );
   output_data += toJSONL(raw_data);
 }
}

const toJSONL = (data) => {
  let jsonl = new String();
  data.split("###").forEach((text) => {
    let prompt = text.split('?')[0];
    let prompt_suffix = ' ->';
    let completion = text.split('?')[1];
    let completion_suffix = ' END';
    if (prompt && completion) {
      jsonl += JSON.stringify({
        prompt: prompt.replace('\n', ' ') + prompt_suffix,
        completion: completion.replace('\n', ' ') + completion_suffix
      }) + '\n';
    }
  });

  return jsonl;
}

(async () => {
  await prepare_data( await fs.promises.readdir( input_folder ) );
  await fs.promises.writeFile( output_file, output_data);
})()

module.exports = {};
