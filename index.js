/*const http = require("http")
const host = 'localhost';
const port = 8000;

const requestLister=function(req,res){
    res.writeHead(200);
    Response.apply("Esto es un servidor");
};

const server = http.createServer(requestLister);
server.listen(port,host,()=>{
    console.log("Servidor ejecutado sobre http://"+host+":" +port );
})*/

/*c                                                                                                                                                                                                                                              onst op=require('./Ejercicio1.js')
console.log(op)

op.calcular1(4,8)
op.calcular2(9,4)
op.calcular3(10,50)
op.calcular4(43,89)*/

/*const http = require("http")
function handleServer(req,res){
    res.write('<h1>Respuesta del usuario</h1>')
    res.end()
}

const server = http.createServer(handleServer).
listen(3000)
*/

const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs')

app.set('views',__dirname + '/views')

app.get('/', (req, res) => {
  // res.send('hello')
  res.render('index',{titulo:"Pagia home cargada por render"})
})


  //rutas
app.use('/',require('./router/rutas'))

app.get((req,res,next)=>{
    res.status(404).sendFile(__dirname + "/public/404.html")
})

app.delete('/clientes', (req, res) => {
    res.send('BIENVENIDO')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
