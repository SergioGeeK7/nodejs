// decidira que ara para cada una de las peticiones url...

function inicio (respuesta){

console.log('haz entrado a la pagina de inicio');

respuesta.writeHead(200,{'Content-Type':'text/html'});// una vez activada la cabezera de la pagina
respuesta.write('<h1>Esta es la pagina de inicio </h1>');
respuesta.end();



/*var ahora = new Date().getTime();
while(new Date().getTime() < ahora + 10000);  // mil == 1 sg    10mil == 10sg

return 'Inicio';  // espera y retorna inicio a la variable 
*/



}


function pagina1 (respuesta){

console.log('haz entrado a la pagina de inicio');

respuesta.writeHead(200,{'Content-Type':'text/html'});// una vez activada la cabezera de la pagina
respuesta.write('<h1>Esta es la pagina de pagina1 </h1>');
respuesta.end();

}


function pagina2 (respuesta){

console.log('haz entrado a la pagina de inicio');

respuesta.writeHead(200,{'Content-Type':'text/html'});// una vez activada la cabezera de la pagina
respuesta.write('<h1>Esta es la pagina de pagina2 </h1>');
respuesta.end();

}

function favicon (respuesta){

console.log('haz entrado a la pagina de inicio');

respuesta.writeHead(200,{'Content-Type':'text/html'});// una vez activada la cabezera de la pagina
respuesta.write('');
respuesta.end();

}


//las peticiones deben exportar algo de informacion para que las interprete el servidor principal
// por tanto cada funcion esportara algo
exports.inicio = inicio;
exports.pagina1= pagina1;  // CUANDO LLAMEN A ALGUNA DE ESTAS FUNCIONES EL EXPORTARA ESO AL SERVIDOR....  ESA FUNCION LLAMADA
exports.pagina2= pagina2;
exports.favicon= favicon;