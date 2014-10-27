// JavaScript Document
var app = require('express')();
var http= require('http').Server(app);
var io = require('socket.io')(http);
//var path=require('path');

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
	/**/
			
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

http.listen(3000,function(){
	
	console.log('running port 3000');
	});

/* ****************************************************************** */
