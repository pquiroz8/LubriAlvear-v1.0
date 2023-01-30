const cargarStock = async () => {
const respuesta = await fetch("https://api.jsonbin.io/v3/b/63d73618ace6f33a22cdae88?meta=false");
const stockAvaible = await respuesta.json();
console.log(stockAvaible);

localStorage.setItem("stockAvaibleJSON", JSON.stringify(stockAvaible));
}




document.getElementById('cargarStock').addEventListener('click',cargarStock);
document.getElementById('setPrices').addEventListener('click',cargarStock);
