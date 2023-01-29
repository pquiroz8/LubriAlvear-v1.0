const cargarStock = async () => {
const respuesta = await fetch("/data/stock.json");
const stockAvaible = await respuesta.json();
console.log(stockAvaible);

localStorage.setItem("stockAvaibleJSON", JSON.stringify(stockAvaible));
}




document.getElementById('cargarStock').addEventListener('click',cargarStock);
document.getElementById('setPrices').addEventListener('click',cargarStock);
