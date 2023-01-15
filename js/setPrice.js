const prodCambiarPrecio = [];
document.addEventListener("DOMContentLoaded", function(event){
    let productosEnStock = JSON.parse(localStorage.getItem("productosGuardadosJSON"));
    productosEnStock.forEach( function(prodEnStock) {
       /*  console.log(prodEnStock); */
        let nuevaFilaTabla = 
            `<td class="newRow-id">${prodEnStock.id}</td>
            <td class="newRow">${prodEnStock.category}</td>
            <td class="newRow">${prodEnStock.name}</td>
            <td class="newRow">${prodEnStock.price}</td>
            <td class="newRow">${prodEnStock.units}</td>`;

        document.getElementById("tablebody").insertRow().innerHTML = nuevaFilaTabla;

        prodCambiarPrecio.push(prodEnStock);
        console.log(prodCambiarPrecio);
    });
})

//*Mostrar el formulario para la modificación de precios
const mostrarFormulario = () => {
    addOptions(prodCambiarPrecio);
    document.getElementById('formSetPrice').removeAttribute("style");

    document.getElementById("prodCat").addEventListener('change', (event) => { //* Muestra los valores según el ID seleccionado
        let prodSelected = findSelectedProd(prodCambiarPrecio);
        console.log(prodSelected);
        document.getElementById("prodEditName").innerHTML = prodSelected.name;
        document.getElementById("prodEditUnitPrice").innerHTML = prodSelected.price;
    });
}

//*Función para agregar las options al select según los ID de los productos cargados
const addOptions = (array) => {
    array.forEach(element => {
        const option = document.createElement('option');
        let idProdEdit = Object.values(element);
        option.value = idProdEdit[1];
        option.text = idProdEdit[0];
        document.getElementById("prodCat").appendChild(option); 
    })
    
}

const setProductPrice = () => {
    const newPrice = document.getElementById("prodNewPrice").value;
    let prodSelected = findSelectedProd(prodCambiarPrecio);
    prodSelected.price = newPrice;
    console.log(prodSelected.price);
    console.log(prodSelected);
    console.log(prodCambiarPrecio);


}

const findSelectedProd = (objArray) => {
    let idSelected = document.getElementById("prodCat").options[document.getElementById("prodCat").selectedIndex].text;
    const productEdited = objArray.find(prodEdited => prodEdited.id === idSelected);
    return productEdited;
}
document.getElementById("btn-editarProducto").addEventListener("click",mostrarFormulario);
document.getElementById("btn-setPrice").addEventListener("click",setProductPrice);