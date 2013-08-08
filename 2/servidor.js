var servidor=require('http'); // cargar el modulo http
								// todos los metodos del modulo http
								// servidor es una instansia de un objeto


function arrancaServidor (requiere,respuesta){

respuesta.writeHead('200',{'Content-Type':'text/html'});  // enviar una head al navegador web
							        // 200 codigo de todo correcto 404 no encontrada	
							       	// todo lo que va dentro de llaves es un objeto
							       	// te voy a enviar una pagina escrita en html... no una imagen o otra cosa

respuesta.write("<h1> el servidor functiona correctamente </h1>");
respuesta.end();

}

servidor.createServer(arrancaServidor).listen(8888);	// servidor un objeto param function 
												// .listen puerto de la maquina donde estare escuchando