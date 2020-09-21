let botonCrear = document.getElementById("crearBoton");
let botonEliminar = document.getElementById("reiniciarBoton");
// Actualizar las Notas
function updateNotas() {
  let json = JSON.parse(localStorage.getItem("notasJSON"));
  let notas = json.notas;
  let id = 0;
  html = "";
  notas.forEach((nota) => {
    // Datos sin procesar
    let notarray = nota.split(",");
    // Datos
    let titulo = notarray[0].split(":");
    let contenido = notarray[1].split(":");
    let fecha = notarray[2].split(":");

    do {
      contenido[1] = contenido[1].replace("\n", " ");
    } while (contenido[1].indexOf("\n") != -1);
    do {
      titulo[1] = titulo[1].replace("\n", " ");
    } while (titulo[1].indexOf("\n") != -1);
    // Datos procesados
    // console.log(`{${titulo[0]}:${titulo[1]}, ${contenido[0]}:${contenido[1]}, ${fecha[0]}:${fecha[1]} }`)
    let jsonOta = JSON.parse(
      `{${titulo[0]}:${titulo[1]}, ${contenido[0]}:${contenido[1]}, ${fecha[0]}:${fecha[1]} }`
    );
    // Lo que se va a ver en la página
    if (jsonOta.titulo == "undefined") {
      html += `
      <div class="card w-100" id="nota${id}">
        <div class="card-body">
          <p class="card-text text-justify">${jsonOta.contenido}</p>
        </div>
        <div class="card-footer">
          <p>Creado el: ${jsonOta.fecha}</p>
        </div>
      </div>
      <br/>
                    `;
    } else {
      html += `
      <div class="card w-100" id="nota${id}">
        <div class="card-header justify-content-center">
          <p class="font-weight-bold">${jsonOta.titulo}</p>
        </div>
        <div class="card-body">
          <p class="card-text text-justify">${jsonOta.contenido}</p>
        </div>
        <div class="card-footer">
          <p>Creado el: ${jsonOta.fecha}</p>
        </div>
      </div>
      <br/>
                    `;
    }
    // Insertado el contenido en el documento
    document.getElementById("notas").innerHTML = html;
    id += 1;
  });
}

// Al crear
botonCrear.addEventListener("click", () => {
  updateNotas();
});
botonEliminar.addEventListener("click", () => {
  updateNotas();
  localStorage.setItem("notasJSON", JSON.stringify({ notas: [] }));

  alert("Todas sus notas han sido eliminadas");
});
// Al entrar a la página
updateNotas();