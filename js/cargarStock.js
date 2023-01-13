let productosCargados = [];
let productosCargadosJSON = [];

const cargarNuevoProducto = () => {
    let prodCategory = document.getElementById("prodCat").options[document.getElementById("prodCat").selectedIndex].text;
    let prodName = document.getElementById("prodName").value;
    let prodUnits = document.getElementById("prodUnits").value;
    let prodPrice = document.getElementById("unitPrice").value;
    let prodId = 0; //@todo idGenerator ();


    /* productosCargados.push(JSON.parse(localStorage.getItem("productoNuevoJSON"))); // Recupero el producto cargado anteriormente */

    if ((prodName != '')&&(prodUnits > 0)&&( prodPrice > '0')) {
        const productoNuevo = {id:prodId, category:prodCategory, name:prodName, units:prodUnits, price:prodPrice}
        productosCargadosJSON.push(localStorage.setItem("productoNuevoJSON", JSON.stringify(productoNuevo))); //Cargo el producto creado al arreglo de json

        let nuevaFilaTabla = 
            `<td>${productoNuevo.id}</td>
            <td>${productoNuevo.category}</td>
            <td>${productoNuevo.name}</td>
            <td>${productoNuevo.price}</td>
            <td>${productoNuevo.units}</td>`;

        document.getElementById("tablaProd").insertRow().innerHTML = nuevaFilaTabla;
        
        document.getElementById("prodName").value = '';
        document.getElementById("unitPrice").value = '';
        document.getElementById("prodUnits").value = ''; 
    } else {
        validarCarga();
    }
    
    productosCargados.push(JSON.parse(localStorage.getItem("productoNuevoJSON"))); // Recupero el producto cargado anteriormente
    console.log(productosCargados);
    console.log(typeof productosCargados);
    
}

const actualizarStock = () => {
    console.log("VAMOS A GUARDAR LOS PRODUCTOS");
    console.log(productosCargadosJSON);
    console.log(typeof productosCargadosJSON);

}


document.getElementById("btn-agregarProd").addEventListener("click",cargarNuevoProducto);
document.getElementById("btn-actualizarStock").addEventListener("click",actualizarStock);

function validarCarga () {
    let prodName = document.getElementById("prodName").value;
    let prodUnits = document.getElementById("prodUnits").value;
    let prodPrice = document.getElementById("unitPrice").value;

    (prodName.trim() == '') ? mostrarError("Nombre del producto") : (prodUnits == 0 ) ? mostrarError("Unidades") : (prodPrice == 0) ? mostrarError("Precio") : false
}

function mostrarError(campo) {
    Swal.fire({
        title: 'Error',
        text: 'Falta completar el campo ' + campo,
        icon:'error',
        iconColor:'#ecab0f',
        background: '#282A3A',
        color: '#FCFFE7',
        confirmButtonText: '¡Entendido!',
        confirmButtonColor: '#ecab0f'})
}


