var fs = require('fs');

try {
  var text = fs.readFileSync('textFile.txt','utf-8');
  console.log(text);
} catch (e) {
  console.log(e);
}
