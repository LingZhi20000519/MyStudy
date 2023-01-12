
const http=require('http');

const server=http.createServer((req, res)=>{
    if(req.url==='/'){
        res.write('hello world');
        res.end();
    }

    if(req.url==='/api/course'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

//服务器监听3000
//打开浏览器输入http://localhost:3000/进入端口
server.listen(3000);
console.log('liston on port 3000');

