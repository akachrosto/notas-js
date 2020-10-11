let crearBoton = document.getElementById("crearBoton");
let eliminarBoton = document.getElementById("reiniciarBoton");

notas = [];

crearBoton.addEventListener("click", () => {
  // Valores
  titulo = document.getElementById("tituloForm").value;
  nota = document.getElementById("notaForm").value;
  // Si no introduce una nota
  if (!nota) {
    alert("No puede crear una nota sin contenido");
    return false;
  }
  // Lo que vamos a insertar en el documento
  let html = "";
  // Si no hay un titulo (Es opcional)
  if (!titulo) {
    html += `
    <div class="card w-100">
        <div class="card-header clearfix">
          <p class="font-weight-bold float-left text-muted">[Nota sin título]</p>

          <button id="nota${
            notas.length + 1
          }" type="button" class="close float-right" aria-label="Close" onclick="eliminarFuncion(${
      notas.length + 1
    });">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="card-body">
          <p class="card-text text-justify">${nota}</p>
        </div>
      </div>
    <br/>
                  `;
    // Si hay un titulo
  } else {
    html += `
      <div class="card w-100">
        <div class="card-header clearfix">
          <p class="font-weight-bold float-left">${titulo}</p>

          <button id="nota${
            notas.length + 1
          }" type="button" class="close float-right" aria-label="Close" onclick="eliminarFuncion(${
      notas.length + 1
    });">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="card-body">
          <p class="card-text text-justify">${nota}</p>
        </div>
      </div>
    <br/>
                  `;
  }
  notas.push(html);
  html = "";
  notas.forEach((nota) => {
    html += nota;
  });
  document.getElementById("notas").innerHTML = html;

  // document.getElementById("opciones").innerHTML = `
  // document.getElementById("cartaNota").addEventListener("dblclick", () => {
  //   alert('Coño')
  //   });
  // `;

  document.getElementById("tituloForm").value = "";
  document.getElementById("notaForm").value = "";
});

eliminarBoton.addEventListener("click", () => {
  notas = [];
  document.getElementById("notas").innerHTML = "";
});

function eliminarFuncion(x) {
  notas.splice(x - 1, 1);
  html = "";
  ids = [];
  b = 1;
  notas.forEach((nota) => {
    x = nota.indexOf("id");
    y = nota.indexOf('"', x);
    z = nota.indexOf('"', y + 1);
    a = nota.slice(y + 1, z);
    nota = nota.replace(a, `nota${b}`);
    a = nota.slice(y + 1, z);
    ids.push(a);
    html += nota;
    b = b + 1;
  });
  document.getElementById("notas").innerHTML = html;
  console.log(ids);
  y = 1;
  ids.forEach((id) => {
    document
      .getElementById(id)
      .setAttribute("onclick", `eliminarFuncion(${y});`);
    y = y + 1;
  });
  // });
}
