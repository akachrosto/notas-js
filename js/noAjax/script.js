let crearBoton = document.getElementById("crearBoton");
let eliminarBoton = document.getElementById("reiniciarBoton");

notas = [];

crearBoton.addEventListener("click", () => {
  titulo = document.getElementById("tituloForm").value;
  nota = document.getElementById("notaForm").value;
  if (!nota) {
    return false;
  }
  let html = "";
  if (!titulo) {
    html += `
    <div class="card w-100">
      <div class="card-body" id="cartaNota">
        <p class="card-text text-justify">${nota}</p>
      </div>
    </div>
    <br/>
                  `;
  } else {
    html += `
    <div class="card w-100" id="cartaNota">
      <div class="card-header justify-content-center">
        <p class="font-weight-bold">${titulo}</p>
      </div>
      <div class="card-body">
        <p class="card-text text-justify">${nota}</p>
      </div>
    </div>
    <br/>
                  `;
  }
  notas.push(html)
  html = ""
  notas.forEach(nota => {
    html += nota;
  });
  document.getElementById("notas").innerHTML = html;
  document.getElementById("opciones").innerHTML = `
  document.getElementById("cartaNota").addEventListener("dblclick", () => {
    alert('Coño')
    });
  `
  document.getElementById("tituloForm").value = "";
  document.getElementById("notaForm").value = "";
});

eliminarBoton.addEventListener("click", () => {
  notas = [];
  document.getElementById("notas").innerHTML = ""
});