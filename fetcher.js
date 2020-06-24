const argument = process.argv;
const url = argument[2];
const file = argument[3];
const request = require('request');
const fs = require('fs');
  
request(url,(error,response,body) => {
  fs.writeFile(file,body,() => {
    console.log(`Downloaded and saved ${fs.statSync(file).size} bytes to ${file}`);
  });
});