
let stockAvaible = JSON.parse(localStorage.getItem("stockAvaibleJSON"));

stockAvaible.forEach(element => {
    const newCard = document.createElement('div.d-flex'); //!CAMBIO IMPORTANTE
    newCard.innerHTML = 
`<div class="card my-4 ms-4 bg-secondary border-warning" style="width: 18rem;">
    <img src="/images/lubrialavear.png" class="card-img-top" alt="Logo LubriAlvear">
    <div class="card-body">
        <h5 class="card-title text-warning fs-6"> [${element.id}] ${element.nombre} </h5>
        <p class="card-text text-light"> Categoría: ${element.categoria} </p>
        <p class="card-text text-light"> Precio actual: $ ${element.precio} </p>
        <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-warning text-dark text-center btn-lg" id="updateProd"><i class="fa-solid fa-pen"></i>   Modificar Precio</button>
        </div>
    </div>
</div>`;
        document.getElementById('cardsContainer').appendChild(newCard);
    });
    /* document.body.appendChild(newCard); */
    
    























/* const prodCambiarPrecio = [];
document.addEventListener("DOMContentLoaded", function(event){
    let productosEnStock = JSON.parse(localStorage.getItem("productosGuardadosJSON"));
    productosEnStock.forEach( function(prodEnStock) {
        console.log(prodEnStock);
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
    
    if (newPrice > 0) {

        Swal.fire({
            title: '¿Revisaste?',
            text:'Estás por modificar el precio del producto',
            showDenyButton: true,
            confirmButtonText: 'Todo en orden',
            confirmButtonColor:'#ecab0f',
            denyButtonText: `Voy a revisar`,
            denyButtonColor:'#282A3A'
        }).then((result) => {
            if (result.isConfirmed) {
            prodSelected.price = newPrice;
            let productosConCambioDePrecioJSON = localStorage.setItem("ProdModifiedJSON",JSON.stringify(prodSelected));
            swal.fire({
                title: 'Cambio realizado',
                text: 'El precio del producto fue cambiado',
                type: 'success',
                iconColor:'#ecab0f',
                confirmButtonColor:'#ecab0f'})
            } else if (result.isDenied) {
                swal.fire({
                    title: 'OK, Revisá',
                    text: 'Por ahora nada ha cambiado',
                    type: 'error',
                    iconColor:'#ecab0f',
                    confirmButtonColor:'#282A3A'})
            }
        })
    } else {
        Swal.fire({
            title: 'Error',
            text: 'El precio debe ser mayor que cero',
            icon:'error',
            iconColor:'#ecab0f',
            background: '#282A3A',
            color: '#FCFFE7',
            confirmButtonText: '¡Entendido!',
            confirmButtonColor: '#ecab0f'})
    }
}

/* //*Buscamos el producto seleccionado en el select
const findSelectedProd = (objArray) => {
    let idSelected = document.getElementById("prodCat").options[document.getElementById("prodCat").selectedIndex].text;
    const productEdited = objArray.find(prodEdited => prodEdited.id === idSelected);
    return productEdited;
}
document.getElementById("btn-editarProducto").addEventListener("click",mostrarFormulario);
document.getElementById("btn-setPrice").addEventListener("click",setProductPrice); */