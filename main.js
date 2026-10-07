/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data; 
    mostrarComidas(comidas);                  // Asignar el JSON a la variable comidas
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

let comidas = [];

const container = document.getElementById('comidaContainer');

function mostrarComidas(){

  container.innerHTML =""
  comidas.forEach(comida => {
    container.innerHTML +=
    `
    <article class="card">
    <p class="categoria">${comida.categoria}</p>
    <h2 class="comida">${comida.nombre}</h2>
    <p class="provincia">${comida.provincia}</p>
    <ul class="ingredientes">
      ${comida.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
    <ul/>
    </article>
    `
  })
}

const formComidaNueva = document.getElementById('agregarComida')

formComidaNueva.addEventListener("submit", (e) =>{
  //alert('Comida nueva recibida: '+ e.target.nombre.value)
  e.preventDefault();
  let nuevacomida = {
    nombre: e.target.nombre.value,
    categoria: e.target.categoria.value,
    provincia: e.target.provincia.value,
    ingrediente: event.target.ingredientes.value.split(",")
  }

  comidas.push(nuevacomida)
  mostrarComidas()

  console.log(comidas)
})