const Logger =require('./test2');
const logger=new Logger();
logger.on('message',(arg)=>{
    console.log('listener called',arg);
})

logger.logLingZhi('message');
