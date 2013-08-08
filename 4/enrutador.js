function enrutar (manejador,ruta,respuesta){

console.log('voy a rutear algo para '+ ruta);
if (typeof(manejador[ruta]==='function')) {
	//return manejador[ruta]();  // para que espere la respuesta en un solo hilo

	manejador[ruta](respuesta);


} else{
console.log('no existe una funcion para esa ruta ' + ruta );

}


}


// intercambiar informacion de modulo a modulo
exports.enrutar = enrutar; // cuando llame a este modulo ejecutara la function (sera exportado)