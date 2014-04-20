var fs = require('fs');

var data = 'Hello World .. !';

fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('WRITE FILE ASYNC COMPLETE');
  }
});

try {
  fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
  console.log('WRITE FILE SYNC COMPLETE');
} catch(e) {
  console.log(e);
}

