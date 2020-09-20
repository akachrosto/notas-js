function crearNota() {
  // datos suministrados por los formularios
  let titulo = document.getElementById("tituloForm").value;
  let nuevaNota = document.getElementById("notaForm").value;
  if(!nuevaNota){
    alert('No puede crear una nota vacía.');
    return false;
  }
  if (!titulo) {
    titulo = undefined;
  } else {
    titulo = titulo;
  }
  do {
    nuevaNota = nuevaNota.replace('"', "'");
  }while (nuevaNota.indexOf('"') != -1)
  // otros datos
  let fecha = new Date();
  fecha = `${fecha.getDay()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
  // convertir el string a json para manejarlo facilmente
  let json = JSON.parse(localStorage.getItem("notasJSON"));
  // inserto la nueva nota
  json.notas.push(
    `"titulo":"${titulo}", "contenido":"${nuevaNota}", "fecha":"${fecha}"`
  );
  // convierto de vuelta
  json = JSON.stringify(json);
  // guardo los cambios
  localStorage.setItem("notasJSON", json);
  // informo al usuario
  alert("Nota creada con éxito.");
  // vacío el formulario
  document.getElementById("tituloForm").value = '';
  document.getElementById("notaForm").value = '';
  // coloco el selector en el titulo
  document.getElementById("tituloForm").focus();
}

function eliminarNotas() {

}
