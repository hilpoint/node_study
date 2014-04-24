var custom = new process.EventEmitter();

custom.on('tick', function () {
  console.log('event starting !!!');
});

custom.emit('tick');
