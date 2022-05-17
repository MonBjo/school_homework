const fs = require('fs');
const readline = require('readline-sync');
const filename = 'alicequotes.txt';
const quote = `Why, sometimes I've believed as many as six impossible things before breakfast.`;
const characterEncoding = 'utf8';

fs.writeFile(filename, quote, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Quote saved!');
  }
});

fs.readFile(filename, characterEncoding, (error, content) => {
  if (content) {
    console.log(content);
  } else {
    console.log(error);
  }
});