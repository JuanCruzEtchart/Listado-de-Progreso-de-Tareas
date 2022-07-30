//const tareas2 = require('./tareas.json');
/*const fs = require("fs");
const tareasJson = fs.readFileSync('./tareas.json');
const tareas = JSON.parse(tareasJson);*/

const funcionesTareas = require("./funcionesDeTareas");

//const tareas = JSON.parse(tareasJson); /*En el caso de uno usar el archivo de funcionesDeTareas.js */

//const arrayTareas = funcionesTareas.leerArchivo();

let argumento = process.argv[2];
// process.argv[2] Sirve para seleccionar el argumento que le damos al ejecutar por consola: node[0] app.js[1] argumento[2]

switch (argumento) {
  case "listar": {
    console.log();
    console.log("Listado de tareas");
    console.log("-----------------");
    funcionesTareas.listar();
    break;
  }
  case "crear": {
    let nuevaTarea = { titulo: process.argv[3], estado: process.argv[4] };
    funcionesTareas.guardarTarea(nuevaTarea);
    console.log("La nueva terea ha sido guardado con éxito");
    break;
  }
  case "filtrar": {
    let estado = process.argv[3];
    console.log();
    console.log("Tareas " + estado);
    console.log("------------------");
    let filtradas = funcionesTareas.filtrarPorEstado(estado);
    filtradas.forEach(function (tarea, index) {
      console.log(index + 1 + "- " + tarea.titulo);
    });
    break;
  }
  case undefined: {
    console.log("Atención - Tienes que pasar una acción");
    break;
  }
  default: {
    console.log("No entiendo qué quieres hacer.");
  }
}
