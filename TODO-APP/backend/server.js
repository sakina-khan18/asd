const http=require("http")
var todos=["sa","fsfsf"]
var id=1
let pl="";

const server =http.createServer((req,res) =>
{
  
    res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    console.log(req.method)
    console.log(req.url)
    if(req.method =='GET'&&req.url=='/todos')
    {
       res.end(JSON.stringify(todos))
    } else
     if(req.method =='POST'&&req.url=='/todos')
    {req.on('data',(abc)=>
    {
        console.log('abc: '+ abc)
        pl+=abc

        
    })
    req.on('end',()=>
    {
        todos.push((pl))
        //console.log(todos)
         res.end(JSON.stringify(todos))
         pl=""
 
    })
    res.end(JSON.stringify(todos))
       
    }
console.log(todos)
   
    
})
server.listen(3000, ()=>
{
    console.log("PORT 3000")
})