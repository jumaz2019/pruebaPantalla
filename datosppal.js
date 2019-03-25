const {cursos}=require ('./principal');

const fs = require('fs');

const express = require('express')
const app = express()

const opciones = {

	idcurso:{
		demand:true,
		alias:'i'
	},
	nombre:{
		demand:true,
		alias:'n'
	},
	cedula:{
		demand:true,
		alias:'c'
	}
}

//--------------------------------------------------------------------------------------------------------
//Muestra la lista de los cursos si el estudiante no eligio inscribirse algun curso
function listar(){
id='1';
let vectorCursos = cursos.find(function(cursoDetalle ) {
	return cursoDetalle.idCurso == id});

console.log('Código: '+vectorCursos.idCurso+' curso de '+vectorCursos.nomCurso+
			' tiene una duracion de '+vectorCursos.duracion+' horas'+' y un valor de $'+
			vectorCursos.valor+' pesos.');

id='2';
let vectorCursos1 = cursos.find(function(cursoDetalle ) {
	return cursoDetalle.idCurso == id});

setTimeout(function(){
	console.log('Código: '+vectorCursos1.idCurso+' curso de '+vectorCursos1.nomCurso+
			' tiene una duracion de '+vectorCursos1.duracion+' horas'+' y un valor de $'+
			vectorCursos1.valor+' pesos.');
},2000);

id='3';
let vectorCursos2 = cursos.find(function(cursoDetalle ) {
	return cursoDetalle.idCurso == id});

setTimeout(function(){
	console.log('Código: '+vectorCursos2.idCurso+' curso de '+vectorCursos2.nomCurso+
			' tiene una duracion de '+vectorCursos2.duracion+' horas'+' y un valor de $'+
			vectorCursos2.valor+' pesos.');
},4000);
}
//-------------------------------------------------------------------------------------------------------
//Se busca el id del curso y crea el archivo matricula.txt
let listarBuscar = (indice) =>{
	let vectorCursos = cursos.find(function(cursoDetalle) {
	return cursoDetalle.idCurso == indice});
	texto= 'El estudiante '+argv.n+'<br />'+' Con cedula '+argv.c+'<br />'+
		   'Se ha matriculado en el curso <br />'+vectorCursos.nomCurso+
		   ' tiene una duracion de '+vectorCursos.duracion+' horas'+' y un valor de $'+
			vectorCursos.valor+' pesos.';
	/*console.log('Código: '+vectorCursos.idCurso+' curso de '+vectorCursos.nomCurso+
			' tiene una duracion de '+vectorCursos.duracion+' horas'+' y un valor de $'+
			vectorCursos.valor+' pesos.');
	fs.writeFile('matricula.txt', texto, (err) => {
		if (err) throw (err);
		console.log('Se ha creado el archivo');
	});*/
}
//-------------------------------------------------------------------------------------------------------

const argv = require('yargs')
			 .command ('inscribir','Matricular estudiante',opciones)
			 .argv

if (argv.i){
	if (argv.i>='1'&& argv.i<='3'){
		listarBuscar(argv.i);
	}
	else{
		console.log('Error en el ID del curso');
	}
}
else{
	lista();
}

app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(3000)

