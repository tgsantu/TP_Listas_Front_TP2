/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas-extended.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data;                   // Asignar el JSON a la variable comidas
    mostrarComidas(comidas);
    actualizarFiltros()
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

let comidas = [];

const container = document.getElementById('comidaContainer');

function mostrarComidas(lista){

  container.innerHTML = "";
  lista.forEach(comida => {
    container.innerHTML +=
    `
    <article class="card">
    <p class="categoria">${comida.categoria}</p>
    <h2 class="comida">${comida.nombre}</h2>
    <p class="provincia">${comida.provincia}</p>
    <ul class="ingredientes">
      ${comida.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
    </ul>
    </article>
    `
  })
}

const formComidaNueva = document.getElementById('agregarComida');

formComidaNueva.addEventListener("submit", (e) =>{
  //alert('Comida nueva recibida: '+ e.target.nombre.value)
  e.preventDefault();

  let listaIngredientes = []
  const ingredientesInputs = document.querySelectorAll(".ingrediente")

  ingredientesInputs.forEach (input => {
    listaIngredientes.push(input.value.trim())
  })

  let nuevacomida = {
    nombre: e.target.nombre.value,
    categoria: e.target.categoria.value,
    provincia: e.target.provincia.value,
    ingredientes: listaIngredientes
  }

  comidas.push(nuevacomida);
  mostrarComidas(comidas);
  ingredientesContainer.innerHTML = '<input type ="text" class="ingrediente" id="ingrediente" placeholder="Un Ingrediente por Box" required>'
  actualizarFiltros()
  console.log(comidas);
});

const filtroCategoria = document.getElementById("filtroCategoria")
const filtroProvincia = document.getElementById("filtroProvincia")

filtroCategoria.addEventListener("change", filtrar)
filtroProvincia.addEventListener("change", filtrar)

function filtrar() {
  const comidasFiltradas = comidas.filter(comida => {
    return comida.categoria.includes(filtroCategoria.value)
    && comida.provincia.includes(filtroProvincia.value)
  })
  mostrarComidas(comidasFiltradas);
}

const buscador = document.getElementById("buscador")
buscador.addEventListener("input" , buscar)

function buscar() {
  const texto = buscador.value.toLowerCase()

  const comidasFiltradas = comidas.filter(comida => {
    return comida.nombre.toLowerCase().includes(texto)
    || comida.provincia.toLowerCase().includes(texto)
    || comida.categoria.toLowerCase().includes(texto)
  })

  mostrarComidas(comidasFiltradas)
}

const agregarIngrediente = document.getElementById("agregarIngrediente")
const ingredientesContainer = document.querySelector(".contenedor-ingredientes")

agregarIngrediente.addEventListener("click", (e) => {
  ingredientesContainer.innerHTML += '<input type ="text" class="ingrediente" placeholder="Un Ingrediente por Box" required>'
})

function actualizarFiltros() {

  filtroCategoria.innerHTML = `<option value ="">Todas las Categorías</option>`
  let categorias = []

  comidas.forEach(comida => {
    if(!categorias.includes(comida.categoria)) {
      categorias.push(comida.categoria)
    }
  })
  categorias.forEach(categoria => {
    filtroCategoria.innerHTML += `<option value ="${categoria}">${categoria}</option>`
  })
}