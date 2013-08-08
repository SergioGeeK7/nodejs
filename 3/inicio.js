var servidor=require('./servidor') ; // node sabe que es .js 
										// encapsular en un modulo, el archivo servidor.

var enrutador=require('./enrutador') ; // modulo
var peticiones=require('./peticiones') ; // modulo

var manejador = {};

manejador['/'] =peticiones.inicio;
manejador['/pagina1'] =peticiones.pagina1;
manejador['/pagina2'] =peticiones.pagina2;
manejador['/favicon.ico'] =peticiones.favicon;  //guardar funciones en un array



servidor.iniciar(enrutador.enrutar,manejador); // utilizo el servidor
// param enturtar (archivo) . enrutar metodo del archivo

//VOY EN PREVENCION DE ERRORES!!!!