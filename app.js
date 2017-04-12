// parse a dxf file
// find items that start with special characters
// like 3 spaces before text
const fs = require('fs');

var {dxfText} = require('./config');
var {fileConfig} = require('./config');
var {getText} = require('./getText');
var arr=[];


fs.readFile(fileConfig.filePath, fileConfig.encoding, (err,data) => {
  if (err){
    console.log(err);
    return;
  }
  getText(data, dxfText.textBlockSeparator, dxfText.textBlockSeparator).then(
    (string) => {
      // console.log(string);
      // still contains not needed information
      // needed text is always before 100 text
      getText(string, dxfText.beforeValue, dxfText.afterValue).then(
        (element) => {
          console.log(element);
        }
      );

    }
  ).catch((e)=>{console.log(e)});

});
