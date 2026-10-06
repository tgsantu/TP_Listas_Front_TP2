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

let comidas = [{
  "nombre": "Asado",
  "categoria": "Parrilla",
  "provincia": "Buenos Aires",
  "ingredientes": ["Carne vacuna", "Sal", "Chimichurri"]
},
{
  "nombre": "Empanadas",
  "categoria": "Horno",
  "provincia": "Tucumán",
  "ingredientes": ["Carne", "Cebolla", "Aceitunas", "Huevo"]
},
{
  "nombre": "Locro",
  "categoria": "Guiso",
  "provincia": "Salta",
  "ingredientes": ["Maíz", "Porotos", "Chorizo", "Panceta", "Zapallo"]
},
{
  "nombre": "Milanesa",
  "categoria": "Frito",
  "provincia": "Buenos Aires",
  "ingredientes": ["Carne", "Huevo", "Pan rallado", "Aceite"]
},
{
  "nombre": "Humita en Chala",
  "categoria": "Horno",
  "provincia": "Jujuy",
  "ingredientes": ["Maíz", "Queso", "Cebolla", "Ají molido"]
},
{
  "nombre": "Choripán",
  "categoria": "Parrilla",
  "provincia": "Córdoba",
  "ingredientes": ["Chorizo", "Pan", "Chimichurri"]
},
{
  "nombre": "Provoleta",
  "categoria": "Parrilla",
  "provincia": "Buenos Aires",
  "ingredientes": ["Queso provolone", "Orégano", "Aceite de oliva"]
},
{
  "nombre": "Milanesas a la napolitana",
  "categoria": "Frito",
  "provincia": "Santa Fe",
  "ingredientes": ["Carne", "Tomate", "Queso", "Jamón", "Orégano"]
},
{
  "nombre": "Matambre a la pizza",
  "categoria": "Parrilla",
  "provincia": "Buenos Aires",
  "ingredientes": ["Matambre", "Queso", "Tomate", "Orégano"]
},
{
  "nombre": "Torta Frita",
  "categoria": "Frito",
  "provincia": "Entre Ríos",
  "ingredientes": ["Harina", "Agua", "Sal", "Grasa"]
}];

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
    </article>
    `
  })
}
    //<ul>${comida.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join("")}<ul/>

const formComidaNueva = document.getElementById('agregarComida')

formComidaNueva.addEventListener("submit", (e) =>{
  //alert('Comida nueva recibida: '+ e.target.nombre.value)
  event.preventDefault();
  let nuevacomida = {
    nombre: e.target.nombre.value,
    categoria: e.target.categoria.value,
    provincia: e.target.provincia.value,
    ingrediente: "",
  }

  comidas.push(nuevacomida)
  mostrarComidas()

  console.log(comidas)
})