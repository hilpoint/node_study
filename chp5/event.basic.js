process.on('exit', function () {
  console.log('안녕히 가거리 ^^ ..!');
});

process.on('uncaughtException', function (error) {
  console.log('예외 발생');
});

var count = 0;
var id = setInterval(function () {
  count++;
  if (count == 3) { clearInterval(id); }
  error.error.error();
}, 2000);
