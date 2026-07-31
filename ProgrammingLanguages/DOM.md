# Day-4
## Creating a server using node.js
```
const http=require('http');
//create a server object
const server=http.createServer((req,res)=>
{
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end("Hello kanna ");

});
//define port number
const port=3000;
//start server
server.listen(port,()=>
{
  console.log(`Server is running at http://localhost:${port});
});
```

# Document Object Model

* Document - html-page
* Objects
```
    document.getElementById();
    document.getElementByclass();
    document.getElementByClassName();
    document.getElementByTagName();
    document.querySelector(.class,#id);//id or selector or classnmae
    document.querySelectorAll();
    
```

![alt text](./images/image.png)