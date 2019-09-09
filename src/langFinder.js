// import fs from 'browserify-fs';

// var fs = require('broswerify-fs');
// const testnode = './tests/';
// const fs = require('fs');

// fs.readdir(testnode, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });

/****** In production 
const fs = require('fs');
const cwd = process.cwd();
const langFiles = fs.readdirSync(cwd+'/src/data');

***************************/
import wordsToNumbers from 'words-to-numbers';
const langFiles =[ 'en_US.json', 'la_PG.json' ];
console.log(langFiles);

export let wordsTest = wordsToNumbers("I have twenty five ");
console.log(wordsTest)