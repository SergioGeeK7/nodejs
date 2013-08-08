// decidira que ara para cada una de las peticiones url...

function inicio (){

console.log('haz entrado a la pagina de inicio');
return 'Inicio';

}


function pagina1 (){

console.log('haz entrado a la pagina de pagina1');
return 'Pagina 1';

}


function pagina2 (){

console.log('haz entrado a la pagina de pagina2');
return 'Pagina 2';

}

function favicon (){

console.log('haz entrado a la pagina de favicon');
return ''; // de volvere nada en la pantalla .. este es el texto que devuelve la funcion o la pagina web al servidor

}


//las peticiones deben exportar algo de informacion para que las interprete el servidor principal
// por tanto cada funcion esportara algo
exports.inicio = inicio;
exports.pagina1= pagina1;  // CUANDO LLAMEN A ALGUNA DE ESTAS FUNCIONES EL EXPORTARA ESO AL SERVIDOR....  ESA FUNCION LLAMADA
exports.pagina2= pagina2;
exports.favicon= favicon;