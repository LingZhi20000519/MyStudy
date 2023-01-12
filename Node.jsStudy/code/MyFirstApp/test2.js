const EventEmitter=require('events');

var url='http://mylogger.io/log';

//类和继承，
class Logger extends EventEmitter{

    logLingZhi(message){
        //send an http request
        console.log(message);
    
        //raise an event
        this.emit('message',{id:1,url:'aaaa'});//可以传参数
    };
}

module.exports= Logger;