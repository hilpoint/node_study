var fs = require('fs');

fs.readFile('textFile.txt', 'utf-8', function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
