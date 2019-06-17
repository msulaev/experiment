const EventEmitter = require('events').EventEmitter;
const channel = new EventEmitter();
channel.on('test', () => {
    console.log("Hello world, tester");
});

channel.emit('test');