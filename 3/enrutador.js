function enrutar (manejador,ruta){

console.log('voy a rutear algo para '+ ruta);
if (typeof(manejador[ruta]==='function')) {
	return manejador[ruta]();

} else{
console.log('no existe una funcion para esa ruta ' + ruta );

}


}


// intercambiar informacion de modulo a modulo
exports.enrutar = enrutar; // cuando llame a este modulo ejecutara la function (sera exportado)