const fs = require("fs");
let funcionesTareas = {
  archivoJson: "./tareas.json",
  leerArchivo: function () {
    let tareasJson = fs.readFileSync(this.archivoJson);
    const tareas = JSON.parse(tareasJson);
    return tareas;
  },
  listar: function () {
    const tareas = this.leerArchivo();
    tareas.forEach(function (tarea, index) {
      console.log(
        index + 1 + "-La tarea: " + tarea.titulo + " - " + tarea.estado
      );
    });
  },
  escribirJson: function (arrayTareas) {
    let newData = JSON.stringify(arrayTareas);
    fs.writeFileSync(this.archivoJson, newData);
  },
  guardarTarea: function (objeto) {
    const arrayJson = this.leerArchivo();
    arrayJson.push(objeto);
    this.escribirJson(arrayJson);
  },
  filtrarPorEstado: function (estado) {
    const arrayJson = this.leerArchivo();
    let tareasFiltradas = arrayJson.filter(function (tarea) {
      return tarea.estado === estado;
    });

    return tareasFiltradas;
  },
};

module.exports = funcionesTareas;

//console.log(funcionesTareas.filtrarPorEstado('terminada'))

console.log(funcionesTareas.listar);