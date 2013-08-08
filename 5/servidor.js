var servidor=require('http'); // cargar el modulo http
								// todos los metodos del modulo http
								// servidor es una instansia de un objeto

// resivir una peticion y transformarla en una pagina web

var url=require('url'); //modulo procesar el contenido que se produsca 

var url = require('url'); // gestionar las urls y un comportamiento personalizado


var fs = require('fs');  // modulo para poder leer y escribir archivos... LOG

		function iniciar (enrutar,manejador){						

			function arrancaServidor (requiere,respuesta){

			var ruta = url.parse(requiere.url).pathname; //capturar la url   pathname es un atributo 

			//  url.parse() convertimos la url en un formato JSON y pathname es uno de los atributos que contiene esta conversión de JSON

			if (ruta == '/') {

				ruta='index.html';

			}



			// PARSE RETORNA Y LE ENVIARA COMO PARAMETRO AL METODO PATHNAME DE URL Y RETURNARA EL CODIGO FINAL 

			//var contenido= enrutar(manejador,ruta,respuesta);   // YA NO NECESITAMOS ESTO... LO AREMOS CON LA LEECTURA HTML EN EL SERVIDOR

			var index = fs.readFileSync('www/'+ruta);  // cargar el archivo html con el medoto del objeto fs

			var register = fs.createWriteStream('register.txt',{'flags':'a'}); // abrir el archivo en modo append en añadir al final
			register.write(ruta + '\n');
			

			 
			respuesta.writeHead('200',{'Content-Type':'text/html'});  // enviar una head al navegador web
										        // 200 codigo de todo correcto 404 no encontrada	
										       	// todo lo que va dentro de llaves es un objeto
										       	// te voy a enviar una pagina escrita en html... no una imagen o otra cosa

			

			//respuesta.write("<h1> el servidor functiona correctamente </h1>"); //// LA UNICA RESPUESTA VISIBLE EN EL NAVEGADOR ES ESTA PARA TODAS LAS PAGINAS, LA RESPUESTA REAL CAMBIA EN LA FUNCION POR CONSOLA
			
			respuesta.write(contenido); //// 			

			respuesta.end();   

			

			}

			servidor.createServer(arrancaServidor).listen(8888);	// servidor un objeto param function 
												// .listen puerto de la maquina donde estare escuchando


													// listen otro metodo del objeto servidor puede ser
													// listen NO ES un metodo dentro de otro metodo ya que es local de ese metodo
		}

exports.iniciar = iniciar; // devolvera cuando llamen al archivo la function 'iniciar'




