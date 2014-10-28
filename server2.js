// JavaScript Document
var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
/*
var app = require('express')();
var http= require('http').Server(app);
var io = require('socket.io')(http);
//var path=require('path');

app.get('/',function(req,res){
	res.send('hellow everybody');
	//res.sendFile(path.join(__dirname, 'index.html'));
	});

app.get('/ab',function(req,res){
	res.sendfile('ab.html');
	//res.sendFile(path.join(__dirname, 'index.html'));
	});
app.get('/abc',function(req,res){
	res.sendfile('abc.html');
	});
	
var cont=0;
var obstr=[];   var idH={};
io.on('connection', function(socket){
	cont++; 
	io.emit('usersOn',cont)
	
			
	socket.on('eNuevo',function(obstr){
		io.emit('rNuevo',obstr);
		
		console.log('new user onLine_'+obstr[0]);
		
		idH[socket.id]=obstr[0];
		});
	
	socket.on('clickea', function(msg){
    	//console.log('message: ' + msg);
		io.emit('respClick',msg);
  	});	
  
  
  socket.on('disconnect', function(){ /////// unpluged
	  cont--;
	io.emit('usersOn',cont);
	
	console.log('user off_'+idH[socket.id]);
	io.emit('eFuera',idH[socket.id]);		
    
  });
});
*/
http.listen(3000,function(){
	
	console.log('running port 3000');
	});

/* ****************************************************************** */
